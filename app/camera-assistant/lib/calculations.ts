import type {
  CalibrationReference,
  MaterialCalculationInput,
  MaterialEstimate,
  MeasurementConfidence,
  MeasurementMode,
  Point,
} from "./domain";

const INTEGER_TOLERANCE = 1e-9;

function assertFinite(value: number, label: string): void {
  if (!Number.isFinite(value)) {
    throw new RangeError(`${label} must be a finite number.`);
  }
}

function assertNonNegative(value: number, label: string): void {
  assertFinite(value, label);
  if (value < 0) {
    throw new RangeError(`${label} cannot be negative.`);
  }
}

function assertPositive(value: number, label: string): void {
  assertFinite(value, label);
  if (value <= 0) {
    throw new RangeError(`${label} must be greater than zero.`);
  }
}

function ceilStable(value: number): number {
  const nearestInteger = Math.round(value);
  return Math.abs(value - nearestInteger) <= INTEGER_TOLERANCE
    ? nearestInteger
    : Math.ceil(value);
}

function roundCurrency(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function confidenceForMode(mode: MeasurementMode): MeasurementConfidence {
  switch (mode) {
    case "quick-preview":
      return "Visual Only";
    case "calibrated-photo":
      return "Calibrated Estimate";
    case "live-ar":
      return "AR Estimate";
    case "site-verified":
      return "Site Verified";
  }
}

/** Returns the absolute area of a polygon in image pixels using shoelace. */
export function polygonAreaPixels(points: readonly Point[]): number {
  if (points.length < 3) {
    return 0;
  }

  let twiceSignedArea = 0;
  for (let index = 0; index < points.length; index += 1) {
    const current = points[index];
    const next = points[(index + 1) % points.length];
    assertFinite(current.x, `points[${index}].x`);
    assertFinite(current.y, `points[${index}].y`);
    twiceSignedArea += current.x * next.y - next.x * current.y;
  }

  return Math.abs(twiceSignedArea) / 2;
}

/**
 * Converts a polygon from a rectified ground plane into square metres using a
 * customer-marked reference. Callers must rectify perspective first; one
 * reference segment alone is not sufficient to correct an oblique photograph.
 */
export function calibratedAreaFromReference(
  rectifiedPolygon: readonly Point[],
  reference: CalibrationReference,
): number {
  if (rectifiedPolygon.length < 3) {
    throw new RangeError("A calibrated area needs at least three polygon points.");
  }

  assertPositive(reference.distanceMetres, "reference.distanceMetres");
  const pixelDistance = Math.hypot(
    reference.end.x - reference.start.x,
    reference.end.y - reference.start.y,
  );
  assertPositive(pixelDistance, "reference pixel distance");

  const metresPerPixel = reference.distanceMetres / pixelDistance;
  return polygonAreaPixels(rectifiedPolygon) * metresPerPixel ** 2;
}

/**
 * Calculates the minimum pieces and rounds the order up to complete packs.
 * Physical thickness is deliberately not read here: footprint and coverage
 * come only from the product's verified pieces-per-square-metre value.
 */
export function calculateMaterials(
  input: MaterialCalculationInput,
): MaterialEstimate {
  const excludedAreaSquareMetres = input.excludedAreaSquareMetres ?? 0;
  const wastagePercentage = input.wastagePercentage ?? 5;

  assertNonNegative(input.grossAreaSquareMetres, "grossAreaSquareMetres");
  assertNonNegative(excludedAreaSquareMetres, "excludedAreaSquareMetres");
  assertNonNegative(wastagePercentage, "wastagePercentage");
  assertPositive(
    input.product.piecesPerSquareMetre,
    "product.piecesPerSquareMetre",
  );
  assertPositive(input.product.piecesPerPack, "product.piecesPerPack");
  assertPositive(
    input.product.squareMetresPerPack,
    "product.squareMetresPerPack",
  );

  if (!Number.isInteger(input.product.piecesPerPack)) {
    throw new RangeError("product.piecesPerPack must be a whole number.");
  }
  if (excludedAreaSquareMetres > input.grossAreaSquareMetres) {
    throw new RangeError(
      "excludedAreaSquareMetres cannot exceed grossAreaSquareMetres.",
    );
  }

  const netAreaSquareMetres =
    input.grossAreaSquareMetres - excludedAreaSquareMetres;
  const wastageAreaSquareMetres =
    netAreaSquareMetres * (wastagePercentage / 100);
  const orderAreaSquareMetres =
    netAreaSquareMetres + wastageAreaSquareMetres;
  const blocksRequired = ceilStable(
    orderAreaSquareMetres * input.product.piecesPerSquareMetre,
  );
  const packsRequired = ceilStable(
    blocksRequired / input.product.piecesPerPack,
  );
  const orderedBlocks = packsRequired * input.product.piecesPerPack;
  const orderedAreaSquareMetres =
    packsRequired * input.product.squareMetresPerPack;
  const pricePerSquareMetre = input.product.pricePerSquareMetre;
  const estimatedMaterialCost =
    pricePerSquareMetre == null
      ? null
      : roundCurrency(orderedAreaSquareMetres * pricePerSquareMetre);

  if (pricePerSquareMetre != null) {
    assertNonNegative(pricePerSquareMetre, "product.pricePerSquareMetre");
  }

  return {
    measurementMode: input.measurementMode,
    confidence: confidenceForMode(input.measurementMode),
    grossAreaSquareMetres: input.grossAreaSquareMetres,
    excludedAreaSquareMetres,
    netAreaSquareMetres,
    wastagePercentage,
    wastageAreaSquareMetres,
    orderAreaSquareMetres,
    blocksRequired,
    packsRequired,
    orderedBlocks,
    orderedAreaSquareMetres,
    estimatedMaterialCost,
  };
}
