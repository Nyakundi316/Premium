"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Circle, Image as KonvaImage, Layer, Line, Stage, Text } from "react-konva";
import type Konva from "konva";
import {
  Brush,
  Eraser,
  Focus,
  Hand,
  MousePointer2,
  Plus,
  Redo2,
  RotateCcw,
  Undo2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { Point } from "../lib/domain";
import { cloneMask, DEFAULT_MASK, type MaskSnapshot, type MaskStroke, type MaskTool } from "../lib/mask";

type Props = Readonly<{
  source: string;
  value: MaskSnapshot;
  onChange: (mask: MaskSnapshot) => void;
}>;

const TOOL_LABELS: ReadonlyArray<{ tool: MaskTool; label: string; Icon: typeof MousePointer2 }> = [
  { tool: "select", label: "Select", Icon: MousePointer2 },
  { tool: "add", label: "Add brush", Icon: Brush },
  { tool: "erase", label: "Eraser", Icon: Eraser },
  { tool: "polygon", label: "Polygon", Icon: Plus },
  { tool: "refine", label: "Refine edge", Icon: Focus },
  { tool: "pan", label: "Pan", Icon: Hand },
];

function normalisePoint(stage: Konva.Stage, width: number, height: number): Point | null {
  const pointer = stage.getPointerPosition();
  if (!pointer) return null;
  const transform = stage.getAbsoluteTransform().copy().invert();
  const local = transform.point(pointer);
  return {
    x: Math.min(1, Math.max(0, local.x / width)),
    y: Math.min(1, Math.max(0, local.y / height)),
  };
}

export default function MaskEditor({ source, value, onChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Konva.Stage>(null);
  const drawingRef = useRef(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [width, setWidth] = useState(720);
  const [tool, setTool] = useState<MaskTool>("select");
  const [scale, setScale] = useState(1);
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });
  const [activePolygon, setActivePolygon] = useState(0);
  const [draftPolygon, setDraftPolygon] = useState<Point[]>([]);
  const [past, setPast] = useState<MaskSnapshot[]>([]);
  const [future, setFuture] = useState<MaskSnapshot[]>([]);

  useEffect(() => {
    const nextImage = new window.Image();
    nextImage.onload = () => setImage(nextImage);
    nextImage.src = source;
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.max(280, Math.floor(entry.contentRect.width)));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const height = useMemo(() => {
    if (!image) return Math.round(width * 0.72);
    return Math.round(width * (image.naturalHeight / image.naturalWidth));
  }, [image, width]);

  const commit = (next: MaskSnapshot, remember = true) => {
    if (remember) setPast((items) => [...items.slice(-29), cloneMask(value)]);
    setFuture([]);
    onChange(cloneMask(next));
  };

  const undo = () => {
    const previous = past.at(-1);
    if (!previous) return;
    setPast((items) => items.slice(0, -1));
    setFuture((items) => [cloneMask(value), ...items].slice(0, 30));
    onChange(previous);
  };

  const redo = () => {
    const next = future[0];
    if (!next) return;
    setFuture((items) => items.slice(1));
    setPast((items) => [...items, cloneMask(value)].slice(-30));
    onChange(next);
  };

  const beginStroke = (stage: Konva.Stage | null) => {
    if (!stage) return;
    const point = normalisePoint(stage, width, height);
    if (!point) return;
    if (tool === "polygon") {
      setDraftPolygon((points) => [...points, point]);
      return;
    }
    if (!(tool === "add" || tool === "erase" || tool === "refine")) return;
    drawingRef.current = true;
    const stroke: MaskStroke = {
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
      tool: tool === "erase" ? "erase" : "add",
      points: [point],
      width: tool === "refine" ? 0.018 : 0.055,
    };
    commit({ ...value, strokes: [...value.strokes, stroke] });
  };

  const extendStroke = (stage: Konva.Stage | null) => {
    if (!stage) return;
    if (!drawingRef.current) return;
    const point = normalisePoint(stage, width, height);
    if (!point) return;
    const strokes = [...value.strokes];
    const last = strokes.at(-1);
    if (!last) return;
    strokes[strokes.length - 1] = { ...last, points: [...last.points, point] };
    onChange({ ...value, strokes });
  };

  const finishPolygon = () => {
    if (draftPolygon.length < 3) return;
    commit({ ...value, polygons: [...value.polygons, draftPolygon] });
    setActivePolygon(value.polygons.length);
    setDraftPolygon([]);
  };

  const updatePolygonPoint = (polygonIndex: number, pointIndex: number, next: Point) => {
    const polygons = value.polygons.map((polygon) => polygon.map((point) => ({ ...point })));
    polygons[polygonIndex][pointIndex] = next;
    onChange({ ...value, polygons });
  };

  const zoom = (direction: 1 | -1) => {
    setScale((current) => Math.min(3, Math.max(1, current + direction * 0.25)));
    if (direction < 0 && scale <= 1.25) setStagePosition({ x: 0, y: 0 });
  };

  return (
    <div>
      <div className="mb-3 flex gap-2 overflow-x-auto pb-1" aria-label="Surface editing tools">
        {TOOL_LABELS.map(({ tool: option, label, Icon }) => (
          <button
            key={option}
            type="button"
            onClick={() => setTool(option)}
            aria-pressed={tool === option}
            className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-3 text-xs font-semibold transition ${tool === option ? "border-[#FFC20E] bg-[#FFC20E] text-[#0D1B30]" : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"}`}
          >
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      <div ref={containerRef} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 touch-none">
        <Stage
          ref={stageRef}
          width={width}
          height={height}
          scaleX={scale}
          scaleY={scale}
          x={stagePosition.x}
          y={stagePosition.y}
          draggable={tool === "pan" && scale > 1}
          onDragEnd={(event) => setStagePosition({ x: event.target.x(), y: event.target.y() })}
          onMouseDown={(event) => beginStroke(event.target.getStage())}
          onTouchStart={(event) => beginStroke(event.target.getStage())}
          onMouseMove={(event) => extendStroke(event.target.getStage())}
          onTouchMove={(event) => extendStroke(event.target.getStage())}
          onMouseUp={() => { drawingRef.current = false; }}
          onTouchEnd={() => { drawingRef.current = false; }}
          onDblClick={finishPolygon}
          onDblTap={finishPolygon}
          onWheel={(event) => { event.evt.preventDefault(); zoom(event.evt.deltaY > 0 ? -1 : 1); }}
        >
          <Layer>
            {image && <KonvaImage image={image} width={width} height={height} listening={false} />}
            {value.polygons.map((polygon, polygonIndex) => (
              <Line
                key={`polygon-${polygonIndex}`}
                points={polygon.flatMap((point) => [point.x * width, point.y * height])}
                closed
                fill="rgba(255,194,14,0.32)"
                stroke={polygonIndex === activePolygon ? "#FFC20E" : "rgba(255,255,255,0.8)"}
                strokeWidth={polygonIndex === activePolygon ? 3 : 2}
                onClick={() => setActivePolygon(polygonIndex)}
                onTap={() => setActivePolygon(polygonIndex)}
              />
            ))}
            {value.strokes.map((stroke) => (
              <Line
                key={stroke.id}
                points={stroke.points.flatMap((point) => [point.x * width, point.y * height])}
                stroke={stroke.tool === "erase" ? "rgba(239,68,68,0.72)" : "rgba(255,194,14,0.58)"}
                strokeWidth={stroke.width * width}
                lineCap="round"
                lineJoin="round"
                listening={false}
              />
            ))}
            {draftPolygon.length > 0 && (
              <Line
                points={draftPolygon.flatMap((point) => [point.x * width, point.y * height])}
                stroke="#FFC20E"
                strokeWidth={3}
                dash={[8, 6]}
                listening={false}
              />
            )}
            {(tool === "select" || tool === "polygon") && value.polygons.map((polygon, polygonIndex) =>
              polygon.map((point, pointIndex) => (
                <Circle
                  key={`point-${polygonIndex}-${pointIndex}`}
                  x={point.x * width}
                  y={point.y * height}
                  radius={7}
                  fill="#FFC20E"
                  stroke="#0D1B30"
                  strokeWidth={2}
                  draggable
                  onDragStart={() => {
                    setActivePolygon(polygonIndex);
                    setPast((items) => [...items.slice(-29), cloneMask(value)]);
                  }}
                  onDragMove={(event) => updatePolygonPoint(polygonIndex, pointIndex, {
                    x: Math.min(1, Math.max(0, event.target.x() / width)),
                    y: Math.min(1, Math.max(0, event.target.y() / height)),
                  })}
                />
              )),
            )}
            {tool === "polygon" && draftPolygon.length > 0 && (
              <Text x={12} y={12} text="Tap 3+ points, then double-tap to finish this area" fill="white" fontSize={13} padding={8} />
            )}
          </Layer>
        </Stage>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={undo} disabled={!past.length} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-3 text-xs font-semibold disabled:opacity-40"><Undo2 className="h-4 w-4" /> Undo</button>
        <button type="button" onClick={redo} disabled={!future.length} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-3 text-xs font-semibold disabled:opacity-40"><Redo2 className="h-4 w-4" /> Redo</button>
        <button type="button" onClick={() => zoom(1)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-3 text-xs font-semibold"><ZoomIn className="h-4 w-4" /> Zoom</button>
        <button type="button" onClick={() => zoom(-1)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-3 text-xs font-semibold"><ZoomOut className="h-4 w-4" /> Out</button>
        {draftPolygon.length >= 3 && <button type="button" onClick={finishPolygon} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0D1B30] px-4 text-xs font-semibold text-white">Finish area</button>}
        <button type="button" onClick={() => { commit(DEFAULT_MASK); setDraftPolygon([]); setScale(1); setStagePosition({ x: 0, y: 0 }); }} className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-3 text-xs font-semibold"><RotateCcw className="h-4 w-4" /> Reset selection</button>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">Yellow is the only area that will change. Erase over cars, posts, plants, people, drains or any surface that must remain untouched. Add another polygon for a separate paving area.</p>
    </div>
  );
}
