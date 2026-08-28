import assert from "node:assert/strict";

import {
  calculateMaterials,
  calibratedAreaFromReference,
  polygonAreaPixels,
} from "../app/camera-assistant/lib/calculations.ts";
import {
  MEASUREMENT_CONFIDENCE,
  confidenceForMeasurementMode,
} from "../app/camera-assistant/lib/domain.ts";
import {
  computeHomography,
  invertHomography,
  productFootprintMetres,
  productRepeatMetres,
  projectPoint,
  projectedSegmentLength,
} from "../app/camera-assistant/lib/projection.ts";

let passed = 0;

function test(name, callback) {
  callback();
  passed += 1;
  console.log(`\u2713 ${name}`);
}

function approximately(actual, expected, tolerance = 1e-9) {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `Expected ${actual} to be within ${tolerance} of ${expected}`,
  );
}

const baseProduct = Object.freeze({
  id: "synthetic-rectangular-60",
  sku: "TEST-200X100-60",
  name: "Synthetic 200 x 100 test paver",
  topFaceLengthMm: 200,
  topFaceWidthMm: 100,
  thicknessMm: 60,
  jointWidthMm: 3,
  piecesPerSquareMetre: 50,
  piecesPerPack: 400,
  squareMetresPerPack: 8,
  pricePerSquareMetre: 1_250,
});

test("a 200 mm x 100 mm product keeps a 2:1 visible footprint", () => {
  const footprint = productFootprintMetres(baseProduct);
  const repeat = productRepeatMetres(baseProduct);
  approximately(footprint.lengthMetres, 0.2);
  approximately(footprint.widthMetres, 0.1);
  approximately(footprint.aspectRatio, 2);
  approximately(repeat.lengthMetres, 0.203);
  approximately(repeat.widthMetres, 0.103);
});

test("60 mm and 80 mm products with the same top face render identically", () => {
  const eightyMillimetreProduct = {
    ...baseProduct,
    id: "synthetic-rectangular-80",
    sku: "TEST-200X100-80",
    thicknessMm: 80,
  };
  assert.deepEqual(
    productFootprintMetres(baseProduct),
    productFootprintMetres(eightyMillimetreProduct),
  );
  assert.deepEqual(
    productRepeatMetres(baseProduct),
    productRepeatMetres(eightyMillimetreProduct),
  );

  const commonInput = {
    measurementMode: "calibrated-photo",
    grossAreaSquareMetres: 10,
    wastagePercentage: 5,
  };
  assert.deepEqual(
    calculateMaterials({ ...commonInput, product: baseProduct }),
    calculateMaterials({ ...commonInput, product: eightyMillimetreProduct }),
  );
});

test("projected units shrink toward a known vanishing direction", () => {
  const groundPlane = [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 8 },
    { x: 0, y: 8 },
  ];
  const imageTrapezoid = [
    { x: 0, y: 500 },
    { x: 400, y: 500 },
    { x: 260, y: 100 },
    { x: 140, y: 100 },
  ];
  const homography = computeHomography(groundPlane, imageTrapezoid);
  const nearWidth = projectedSegmentLength(
    homography,
    { x: 1, y: 0.5 },
    { x: 1.2, y: 0.5 },
  );
  const farWidth = projectedSegmentLength(
    homography,
    { x: 1, y: 7.5 },
    { x: 1.2, y: 7.5 },
  );
  assert.ok(farWidth < nearWidth, `${farWidth} should be less than ${nearWidth}`);

  const original = { x: 1.3, y: 3.7 };
  const roundTrip = projectPoint(
    invertHomography(homography),
    projectPoint(homography, original),
  );
  approximately(roundTrip.x, original.x, 1e-8);
  approximately(roundTrip.y, original.y, 1e-8);
});

test("a marked reference converts rectified polygon area to square metres", () => {
  const rectangle = [
    { x: 0, y: 0 },
    { x: 300, y: 0 },
    { x: 300, y: 400 },
    { x: 0, y: 400 },
  ];
  assert.equal(polygonAreaPixels(rectangle), 120_000);
  approximately(
    calibratedAreaFromReference(rectangle, {
      start: { x: 0, y: 0 },
      end: { x: 100, y: 0 },
      distanceMetres: 1,
    }),
    12,
  );
});

test("net area, wastage, blocks and full packs match the verified fixture", () => {
  const estimate = calculateMaterials({
    product: baseProduct,
    measurementMode: "calibrated-photo",
    grossAreaSquareMetres: 12,
    excludedAreaSquareMetres: 2,
    wastagePercentage: 5,
  });
  assert.equal(estimate.netAreaSquareMetres, 10);
  assert.equal(estimate.wastageAreaSquareMetres, 0.5);
  assert.equal(estimate.orderAreaSquareMetres, 10.5);
  assert.equal(estimate.blocksRequired, 525);
  assert.equal(estimate.packsRequired, 2);
  assert.equal(estimate.orderedBlocks, 800);
  assert.equal(estimate.orderedAreaSquareMetres, 16);
  assert.equal(estimate.estimatedMaterialCost, 20_000);
  assert.equal(estimate.confidence, "Calibrated Estimate");
});

test("pack calculations stay on the full-pack boundary and round 401 up", () => {
  const exactPack = calculateMaterials({
    product: baseProduct,
    measurementMode: "calibrated-photo",
    grossAreaSquareMetres: 8,
    wastagePercentage: 0,
  });
  const oneExtraBlock = calculateMaterials({
    product: baseProduct,
    measurementMode: "calibrated-photo",
    grossAreaSquareMetres: 8.02,
    wastagePercentage: 0,
  });
  assert.equal(exactPack.blocksRequired, 400);
  assert.equal(exactPack.packsRequired, 1);
  assert.equal(oneExtraBlock.blocksRequired, 401);
  assert.equal(oneExtraBlock.packsRequired, 2);
});

test("every measurement mode has the required confidence label", () => {
  assert.deepEqual(MEASUREMENT_CONFIDENCE, {
    "quick-preview": "Visual Only",
    "calibrated-photo": "Calibrated Estimate",
    "live-ar": "AR Estimate",
    "site-verified": "Site Verified",
  });
  for (const [mode, confidence] of Object.entries(MEASUREMENT_CONFIDENCE)) {
    assert.equal(confidenceForMeasurementMode(mode), confidence);
  }
});

console.log(`\n${passed} camera assistant acceptance checks passed.`);
