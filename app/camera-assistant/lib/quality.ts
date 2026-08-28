export type PhotoQualityCheck = Readonly<{
  id: "sharpness" | "brightness" | "coverage" | "angle";
  label: string;
  status: "pass" | "review" | "fail";
  value: string;
  guidance: string;
}>;

export type PhotoQualityResult = Readonly<{
  checks: readonly PhotoQualityCheck[];
  canContinue: boolean;
}>;

function loadImage(source: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("The photograph could not be read."));
    image.src = source;
  });
}

export async function analysePhotoQuality(source: string): Promise<PhotoQualityResult> {
  const image = await loadImage(source);
  const maxWidth = 420;
  const scale = Math.min(1, maxWidth / image.naturalWidth);
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Photo analysis is unavailable in this browser.");
  context.drawImage(image, 0, 0, width, height);
  const pixels = context.getImageData(0, 0, width, height).data;

  let luminanceTotal = 0;
  let edgeTotal = 0;
  let edgeSamples = 0;
  const greys = new Float32Array(width * height);
  for (let index = 0; index < greys.length; index += 1) {
    const offset = index * 4;
    const grey = pixels[offset] * 0.2126 + pixels[offset + 1] * 0.7152 + pixels[offset + 2] * 0.0722;
    greys[index] = grey;
    luminanceTotal += grey;
  }
  for (let y = 1; y < height - 1; y += 2) {
    for (let x = 1; x < width - 1; x += 2) {
      const index = y * width + x;
      const laplacian = Math.abs(4 * greys[index] - greys[index - 1] - greys[index + 1] - greys[index - width] - greys[index + width]);
      edgeTotal += laplacian;
      edgeSamples += 1;
    }
  }

  const brightness = luminanceTotal / greys.length;
  const sharpness = edgeSamples ? edgeTotal / edgeSamples : 0;
  const resolutionPass = image.naturalWidth >= 900 && image.naturalHeight >= 600;
  const brightnessStatus = brightness < 45 || brightness > 235 ? "fail" : brightness < 70 || brightness > 215 ? "review" : "pass";
  const sharpnessStatus = sharpness < 8 || !resolutionPass ? "fail" : sharpness < 14 ? "review" : "pass";
  const lowerFrameShare = 55;
  const orientationLikelyUsable = image.naturalWidth / image.naturalHeight >= 0.7;

  const checks: PhotoQualityCheck[] = [
    {
      id: "sharpness",
      label: "Sharpness",
      status: sharpnessStatus,
      value: resolutionPass ? `${Math.round(sharpness)} edge score` : `${image.naturalWidth} × ${image.naturalHeight}px`,
      guidance: sharpnessStatus === "pass" ? "Edges are clear enough to edit." : "Clean the lens, hold the phone steady and retake in daylight.",
    },
    {
      id: "brightness",
      label: "Brightness",
      status: brightnessStatus,
      value: `${Math.round((brightness / 255) * 100)}%`,
      guidance: brightnessStatus === "pass" ? "Lighting is within the useful range." : "Retake in even daylight; avoid deep shade, glare and heavy rain.",
    },
    {
      id: "coverage",
      label: "Visible ground",
      status: "review",
      value: `Lower ${lowerFrameShare}% ready for surface detection`,
      guidance: "Confirm that the complete paving boundary is visible and not mostly covered by vehicles or objects.",
    },
    {
      id: "angle",
      label: "Camera angle",
      status: orientationLikelyUsable ? "review" : "fail",
      value: orientationLikelyUsable ? "Perspective review required" : "Frame is too narrow",
      guidance: "Stand back and hold the camera about 30–60° toward the ground, with near and far boundaries visible.",
    },
  ];

  return {
    checks,
    canContinue: !checks.some((check) => check.status === "fail"),
  };
}
