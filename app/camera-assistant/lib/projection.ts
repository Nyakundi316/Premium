import type { Point, Product } from "./domain";

export type Homography = readonly [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export type ProductFootprint = Readonly<{
  lengthMetres: number;
  widthMetres: number;
  aspectRatio: number;
}>;

function assertFinitePoint(point: Point, label: string): void {
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    throw new RangeError(`${label} must contain finite coordinates.`);
  }
}

function assertPositive(value: number, label: string): void {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`${label} must be greater than zero.`);
  }
}

/** Visible XY footprint. Block thickness intentionally has no influence. */
export function productFootprintMetres(product: Product): ProductFootprint {
  assertPositive(product.topFaceLengthMm, "product.topFaceLengthMm");
  assertPositive(product.topFaceWidthMm, "product.topFaceWidthMm");
  const lengthMetres = product.topFaceLengthMm / 1_000;
  const widthMetres = product.topFaceWidthMm / 1_000;

  return {
    lengthMetres,
    widthMetres,
    aspectRatio: lengthMetres / widthMetres,
  };
}

/** Repeating grid pitch, with the catalogue joint kept separate from the face. */
export function productRepeatMetres(
  product: Product,
): Readonly<{ lengthMetres: number; widthMetres: number }> {
  if (!Number.isFinite(product.jointWidthMm) || product.jointWidthMm < 0) {
    throw new RangeError("product.jointWidthMm cannot be negative.");
  }

  const footprint = productFootprintMetres(product);
  const jointMetres = product.jointWidthMm / 1_000;
  return {
    lengthMetres: footprint.lengthMetres + jointMetres,
    widthMetres: footprint.widthMetres + jointMetres,
  };
}

function solveLinearSystem(matrix: number[][]): number[] {
  const size = matrix.length;

  for (let column = 0; column < size; column += 1) {
    let pivotRow = column;
    for (let row = column + 1; row < size; row += 1) {
      if (Math.abs(matrix[row][column]) > Math.abs(matrix[pivotRow][column])) {
        pivotRow = row;
      }
    }

    if (Math.abs(matrix[pivotRow][column]) < 1e-12) {
      throw new RangeError("Cannot compute a homography from degenerate points.");
    }

    [matrix[column], matrix[pivotRow]] = [matrix[pivotRow], matrix[column]];
    const pivot = matrix[column][column];
    for (let item = column; item <= size; item += 1) {
      matrix[column][item] /= pivot;
    }

    for (let row = 0; row < size; row += 1) {
      if (row === column) continue;
      const factor = matrix[row][column];
      for (let item = column; item <= size; item += 1) {
        matrix[row][item] -= factor * matrix[column][item];
      }
    }
  }

  return matrix.map((row) => row[size]);
}

/** Computes the projective transform mapping four source points to four targets. */
export function computeHomography(
  source: readonly Point[],
  destination: readonly Point[],
): Homography {
  if (source.length !== 4 || destination.length !== 4) {
    throw new RangeError("A homography requires exactly four point pairs.");
  }

  const equations: number[][] = [];
  for (let index = 0; index < 4; index += 1) {
    const from = source[index];
    const to = destination[index];
    assertFinitePoint(from, `source[${index}]`);
    assertFinitePoint(to, `destination[${index}]`);

    equations.push([
      from.x,
      from.y,
      1,
      0,
      0,
      0,
      -to.x * from.x,
      -to.x * from.y,
      to.x,
    ]);
    equations.push([
      0,
      0,
      0,
      from.x,
      from.y,
      1,
      -to.y * from.x,
      -to.y * from.y,
      to.y,
    ]);
  }

  const coefficients = solveLinearSystem(equations);
  return [
    coefficients[0],
    coefficients[1],
    coefficients[2],
    coefficients[3],
    coefficients[4],
    coefficients[5],
    coefficients[6],
    coefficients[7],
    1,
  ];
}

export function projectPoint(matrix: Homography, point: Point): Point {
  assertFinitePoint(point, "point");
  const denominator = matrix[6] * point.x + matrix[7] * point.y + matrix[8];
  if (Math.abs(denominator) < 1e-12) {
    throw new RangeError("Point projects to infinity for this homography.");
  }

  return {
    x: (matrix[0] * point.x + matrix[1] * point.y + matrix[2]) / denominator,
    y: (matrix[3] * point.x + matrix[4] * point.y + matrix[5]) / denominator,
  };
}

export function projectPolygon(
  matrix: Homography,
  points: readonly Point[],
): Point[] {
  return points.map((point) => projectPoint(matrix, point));
}

export function projectedSegmentLength(
  matrix: Homography,
  start: Point,
  end: Point,
): number {
  const projectedStart = projectPoint(matrix, start);
  const projectedEnd = projectPoint(matrix, end);
  return Math.hypot(
    projectedEnd.x - projectedStart.x,
    projectedEnd.y - projectedStart.y,
  );
}

export function invertHomography(matrix: Homography): Homography {
  const [a, b, c, d, e, f, g, h, i] = matrix;
  const determinant =
    a * (e * i - f * h) -
    b * (d * i - f * g) +
    c * (d * h - e * g);
  if (Math.abs(determinant) < 1e-12) {
    throw new RangeError("Cannot invert a singular homography.");
  }

  return [
    (e * i - f * h) / determinant,
    (c * h - b * i) / determinant,
    (b * f - c * e) / determinant,
    (f * g - d * i) / determinant,
    (a * i - c * g) / determinant,
    (c * d - a * f) / determinant,
    (d * h - e * g) / determinant,
    (b * g - a * h) / determinant,
    (a * e - b * d) / determinant,
  ];
}
