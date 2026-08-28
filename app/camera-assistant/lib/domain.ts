export type Point = Readonly<{
  x: number;
  y: number;
}>;

export type MeasurementMode =
  | "quick-preview"
  | "calibrated-photo"
  | "live-ar"
  | "site-verified";

export const MEASUREMENT_CONFIDENCE = {
  "quick-preview": "Visual Only",
  "calibrated-photo": "Calibrated Estimate",
  "live-ar": "AR Estimate",
  "site-verified": "Site Verified",
} as const satisfies Record<MeasurementMode, string>;

export type MeasurementConfidence =
  (typeof MEASUREMENT_CONFIDENCE)[MeasurementMode];

/**
 * Numeric catalogue fields used by the deterministic projection and material
 * calculators. Thickness is intentionally separate from the visible top face.
 */
export type Product = Readonly<{
  id: string;
  sku: string;
  name: string;
  topFaceLengthMm: number;
  topFaceWidthMm: number;
  thicknessMm: number;
  jointWidthMm: number;
  piecesPerSquareMetre: number;
  piecesPerPack: number;
  squareMetresPerPack: number;
  pricePerSquareMetre?: number | null;
}>;

export type CalibrationReference = Readonly<{
  start: Point;
  end: Point;
  distanceMetres: number;
}>;

export type MaterialEstimate = Readonly<{
  measurementMode: MeasurementMode;
  confidence: MeasurementConfidence;
  grossAreaSquareMetres: number;
  excludedAreaSquareMetres: number;
  netAreaSquareMetres: number;
  wastagePercentage: number;
  wastageAreaSquareMetres: number;
  orderAreaSquareMetres: number;
  blocksRequired: number;
  packsRequired: number;
  orderedBlocks: number;
  orderedAreaSquareMetres: number;
  estimatedMaterialCost: number | null;
}>;

export type MaterialCalculationInput = Readonly<{
  product: Product;
  measurementMode: MeasurementMode;
  grossAreaSquareMetres: number;
  excludedAreaSquareMetres?: number;
  wastagePercentage?: number;
}>;

export function confidenceForMeasurementMode(
  mode: MeasurementMode,
): MeasurementConfidence {
  return MEASUREMENT_CONFIDENCE[mode];
}
