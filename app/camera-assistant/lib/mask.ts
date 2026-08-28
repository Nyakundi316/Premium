import type { Point } from "./domain";

export type MaskTool = "select" | "add" | "erase" | "polygon" | "refine" | "pan";

export type MaskStroke = Readonly<{
  id: string;
  tool: "add" | "erase";
  points: readonly Point[];
  width: number;
}>;

export type MaskSnapshot = Readonly<{
  polygons: readonly (readonly Point[])[];
  strokes: readonly MaskStroke[];
}>;

export const DEFAULT_MASK: MaskSnapshot = {
  polygons: [[
    { x: 0.31, y: 0.41 },
    { x: 0.69, y: 0.41 },
    { x: 0.93, y: 0.91 },
    { x: 0.07, y: 0.91 },
  ]],
  strokes: [],
};

export function cloneMask(mask: MaskSnapshot): MaskSnapshot {
  return {
    polygons: mask.polygons.map((polygon) => polygon.map((point) => ({ ...point }))),
    strokes: mask.strokes.map((stroke) => ({ ...stroke, points: stroke.points.map((point) => ({ ...point })) })),
  };
}
