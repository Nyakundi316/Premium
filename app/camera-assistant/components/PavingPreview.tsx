"use client";

import { useEffect, useRef, useState } from "react";
import {
  CanvasTexture,
  LinearFilter,
  Matrix3,
  Mesh,
  NoColorSpace,
  NoToneMapping,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  TextureLoader,
  Vector2,
  WebGLRenderer,
} from "three";
import type { CameraProduct, LayingPattern } from "../lib/catalogue";
import type { MaskSnapshot } from "../lib/mask";
import type { Point } from "../lib/domain";
import { computeHomography } from "../lib/projection";

type Props = Readonly<{
  source: string;
  mask: MaskSnapshot;
  product: CameraProduct;
  pattern: LayingPattern;
  rotationDegrees: number;
  density: number;
  onRendered: (dataUrl: string) => void;
}>;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uPhoto;
  uniform sampler2D uMask;
  uniform sampler2D uProduct;
  uniform mat3 uImageToPlane;
  uniform float uRotation;
  uniform float uDensity;
  uniform int uPattern;
  uniform vec2 uMaskPixel;

  float maskAt(vec2 uv) {
    return texture2D(uMask, clamp(uv, 0.0, 1.0)).r;
  }

  void main() {
    vec4 original = texture2D(uPhoto, vUv);
    float mask = maskAt(vUv);
    if (mask < 0.005) {
      gl_FragColor = original;
      return;
    }

    vec3 projected = uImageToPlane * vec3(vUv, 1.0);
    vec2 plane = projected.xy / max(abs(projected.z), 0.00001);
    vec2 centred = plane - 0.5;
    float sine = sin(uRotation);
    float cosine = cos(uRotation);
    vec2 rotated = mat2(cosine, -sine, sine, cosine) * centred + 0.5;

    vec2 grid = rotated * vec2(uDensity, uDensity * 1.45);
    if (uPattern == 0) {
      grid.x += mod(floor(grid.y), 2.0) * 0.5;
    } else if (uPattern == 1) {
      vec2 cell = floor(grid);
      if (mod(cell.x + cell.y, 2.0) > 0.5) grid = grid.yx;
    } else if (uPattern == 2) {
      vec2 cell = floor(grid / 2.0);
      if (mod(cell.x + cell.y, 2.0) > 0.5) grid = grid.yx;
    } else if (uPattern == 3) {
      grid = mat2(0.7071, -0.7071, 0.7071, 0.7071) * grid;
    }

    vec2 local = fract(grid);
    float joint = smoothstep(0.018, 0.055, min(min(local.x, 1.0 - local.x), min(local.y, 1.0 - local.y)));
    vec2 productUv = fract(rotated * 2.25);
    vec3 material = texture2D(uProduct, productUv).rgb;

    float originalLight = dot(original.rgb, vec3(0.2126, 0.7152, 0.0722));
    float lighting = mix(0.72, 1.18, originalLight);
    material *= lighting;
    material = mix(material * 0.32, material, joint);

    float neighbour = min(
      min(maskAt(vUv + vec2(uMaskPixel.x, 0.0)), maskAt(vUv - vec2(uMaskPixel.x, 0.0))),
      min(maskAt(vUv + vec2(0.0, uMaskPixel.y)), maskAt(vUv - vec2(0.0, uMaskPixel.y)))
    );
    float edgeShade = smoothstep(0.0, 0.8, neighbour);
    material *= mix(0.76, 1.0, edgeShade);

    gl_FragColor = vec4(mix(original.rgb, material, mask * 0.88), original.a);
  }
`;

function createMaskCanvas(width: number, height: number, mask: MaskSnapshot): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) return canvas;
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "white";
  for (const polygon of mask.polygons) {
    if (polygon.length < 3) continue;
    context.beginPath();
    context.moveTo(polygon[0].x * width, (1 - polygon[0].y) * height);
    for (const point of polygon.slice(1)) context.lineTo(point.x * width, (1 - point.y) * height);
    context.closePath();
    context.fill();
  }
  for (const stroke of mask.strokes) {
    if (!stroke.points.length) continue;
    context.globalCompositeOperation = stroke.tool === "erase" ? "destination-out" : "source-over";
    context.strokeStyle = "white";
    context.lineWidth = stroke.width * width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(stroke.points[0].x * width, (1 - stroke.points[0].y) * height);
    for (const point of stroke.points.slice(1)) context.lineTo(point.x * width, (1 - point.y) * height);
    context.stroke();
  }
  context.globalCompositeOperation = "source-over";
  return canvas;
}

function planeQuad(mask: MaskSnapshot): readonly Point[] {
  const primary = mask.polygons[0];
  if (primary?.length === 4) return primary.map((point) => ({ x: point.x, y: 1 - point.y }));
  const points = primary?.length ? primary : [{ x: 0.2, y: 0.35 }, { x: 0.8, y: 0.35 }, { x: 0.95, y: 0.9 }, { x: 0.05, y: 0.9 }];
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => 1 - point.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  return [{ x: minX, y: maxY }, { x: maxX, y: maxY }, { x: maxX, y: minY }, { x: minX, y: minY }];
}

const PATTERN_INDEX: Record<LayingPattern, number> = {
  stretcher: 0,
  herringbone: 1,
  "basket-weave": 2,
  diagonal: 3,
  "product-specific": 4,
};

export default function PavingPreview({ source, mask, product, pattern, rotationDegrees, density, onRendered }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let cancelled = false;
    let renderer: WebGLRenderer | null = null;

    const render = async () => {
      setError(null);
      try {
        const loader = new TextureLoader();
        const [photoTexture, productTexture] = await Promise.all([
          loader.loadAsync(source),
          loader.loadAsync(product.textureImage),
        ]);
        if (cancelled) return;
        const photoImage = photoTexture.image as { width: number; height: number };
        const maxWidth = Math.min(1600, photoImage.width);
        const renderScale = maxWidth / photoImage.width;
        const renderWidth = Math.max(1, Math.round(photoImage.width * renderScale));
        const renderHeight = Math.max(1, Math.round(photoImage.height * renderScale));
        const maskCanvas = createMaskCanvas(renderWidth, renderHeight, mask);
        const maskTexture = new CanvasTexture(maskCanvas);
        maskTexture.colorSpace = NoColorSpace;
        maskTexture.minFilter = LinearFilter;
        maskTexture.magFilter = LinearFilter;
        photoTexture.colorSpace = SRGBColorSpace;
        productTexture.colorSpace = SRGBColorSpace;

        const homography = computeHomography(planeQuad(mask), [
          { x: 0, y: 1 },
          { x: 1, y: 1 },
          { x: 1, y: 0 },
          { x: 0, y: 0 },
        ]);
        const matrix = new Matrix3().set(...homography);
        const material = new ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms: {
            uPhoto: { value: photoTexture },
            uMask: { value: maskTexture },
            uProduct: { value: productTexture },
            uImageToPlane: { value: matrix },
            uRotation: { value: rotationDegrees * Math.PI / 180 },
            uDensity: { value: density },
            uPattern: { value: PATTERN_INDEX[pattern] },
            uMaskPixel: { value: new Vector2(1 / renderWidth, 1 / renderHeight) },
          },
        });
        const scene = new Scene();
        const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geometry = new PlaneGeometry(2, 2);
        const mesh = new Mesh(geometry, material);
        scene.add(mesh);
        renderer = new WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: false });
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.toneMapping = NoToneMapping;
        renderer.setPixelRatio(1);
        renderer.setSize(renderWidth, renderHeight, false);
        renderer.domElement.className = "block h-auto w-full";
        renderer.domElement.setAttribute("aria-label", `${product.name} deterministic paving preview`);
        container.replaceChildren(renderer.domElement);
        renderer.render(scene, camera);
        onRendered(renderer.domElement.toDataURL("image/jpeg", 0.92));

        geometry.dispose();
        material.dispose();
        maskTexture.dispose();
        photoTexture.dispose();
        productTexture.dispose();
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : "This device could not render the preview.");
      }
    };

    void render();
    return () => {
      cancelled = true;
      renderer?.dispose();
      container.replaceChildren();
    };
  }, [density, mask, onRendered, pattern, product, rotationDegrees, source]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-950">
      <div ref={containerRef} className="min-h-56" />
      {error && <div role="alert" className="absolute inset-0 grid place-items-center bg-slate-950 p-6 text-center text-sm text-white">{error}<br />Try another browser or use a newer device with WebGL enabled.</div>}
    </div>
  );
}
