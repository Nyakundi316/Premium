export type CatalogueVerification = "visual-only" | "verified";

export type LayingPattern =
  | "stretcher"
  | "herringbone"
  | "basket-weave"
  | "diagonal"
  | "product-specific";

export type CameraProduct = Readonly<{
  id: string;
  sku: string | null;
  name: string;
  description: string;
  productPhoto: string;
  textureImage: string;
  textureStatus: "legacy-product-photo" | "verified-seamless";
  normalMap: string | null;
  roughnessMap: string | null;
  ambientOcclusionMap: string | null;
  topFaceLengthMm: number | null;
  topFaceWidthMm: number | null;
  shape: string;
  thicknessOptionsMm: readonly number[];
  jointWidthMm: number | null;
  piecesPerSquareMetre: number | null;
  piecesPerPack: number | null;
  squareMetresPerPack: number | null;
  weightPerPieceKg: number | null;
  weightPerPackKg: number | null;
  colours: readonly string[];
  suitablePatterns: readonly LayingPattern[];
  recommendedApplications: readonly string[];
  loadRating: string;
  pricePerSquareMetreKes: number | null;
  borderProductIds: readonly string[];
  availability: string | null;
  verification: CatalogueVerification;
  verificationNote: string;
}>;

/**
 * Phase-one seed records reuse labels and images already published in the
 * Premium Cabro repository. Unknown commercial and physical values remain
 * null so the customer UI cannot accidentally invent scale, stock or price.
 */
export const CAMERA_PRODUCTS: readonly CameraProduct[] = [
  {
    id: "cross-dumble-60",
    sku: null,
    name: "Cross Dumble",
    description: "Curved cross-profile cabro shown in the existing Premium Cabro catalogue.",
    productPhoto: "/images/dumble1.jpeg",
    textureImage: "/images/products/cabros-cutout/dumble1-removebg-preview.png",
    textureStatus: "legacy-product-photo",
    normalMap: null,
    roughnessMap: null,
    ambientOcclusionMap: null,
    topFaceLengthMm: null,
    topFaceWidthMm: null,
    shape: "Cross Dumble",
    thicknessOptionsMm: [60],
    jointWidthMm: null,
    piecesPerSquareMetre: null,
    piecesPerPack: null,
    squareMetresPerPack: null,
    weightPerPieceKg: null,
    weightPerPackKg: null,
    colours: ["Red / Natural"],
    suitablePatterns: ["product-specific"],
    recommendedApplications: ["Courtyards", "Compounds", "Decorative parking"],
    loadRating: "Confirm with Premium Cabro",
    pricePerSquareMetreKes: null,
    borderProductIds: [],
    availability: null,
    verification: "visual-only",
    verificationNote: "SKU, footprint, coverage, render texture, price and stock require staff verification.",
  },
  {
    id: "fan-60",
    sku: null,
    name: "Fan Paver",
    description: "Fan-profile cabro for curved visual layouts, using an existing catalogue photograph.",
    productPhoto: "/images/fan.jpeg",
    textureImage: "/images/products/cabros-cutout/fan-removebg-preview.png",
    textureStatus: "legacy-product-photo",
    normalMap: null,
    roughnessMap: null,
    ambientOcclusionMap: null,
    topFaceLengthMm: null,
    topFaceWidthMm: null,
    shape: "Fan",
    thicknessOptionsMm: [60],
    jointWidthMm: null,
    piecesPerSquareMetre: null,
    piecesPerPack: null,
    squareMetresPerPack: null,
    weightPerPieceKg: null,
    weightPerPackKg: null,
    colours: ["Red / Natural"],
    suitablePatterns: ["product-specific"],
    recommendedApplications: ["Curved paths", "Entrances", "Courtyards"],
    loadRating: "Confirm with Premium Cabro",
    pricePerSquareMetreKes: null,
    borderProductIds: [],
    availability: null,
    verification: "visual-only",
    verificationNote: "SKU, footprint, coverage, render texture, price and stock require staff verification.",
  },
  {
    id: "trihex-broad-80",
    sku: null,
    name: "Trihex Broad",
    description: "Broad Trihex-profile cabro from the existing product catalogue.",
    productPhoto: "/images/Trihex-Charcoal.jpg",
    textureImage: "/images/products/cabros-cutout/Trihex-Charcoal-removebg-preview.png",
    textureStatus: "legacy-product-photo",
    normalMap: null,
    roughnessMap: null,
    ambientOcclusionMap: null,
    topFaceLengthMm: null,
    topFaceWidthMm: null,
    shape: "Trihex Broad",
    thicknessOptionsMm: [80],
    jointWidthMm: null,
    piecesPerSquareMetre: null,
    piecesPerPack: null,
    squareMetresPerPack: null,
    weightPerPieceKg: null,
    weightPerPackKg: null,
    colours: ["Grey / Charcoal"],
    suitablePatterns: ["product-specific"],
    recommendedApplications: ["Estate access roads", "Loading bays", "Commercial yards"],
    loadRating: "Confirm with Premium Cabro",
    pricePerSquareMetreKes: null,
    borderProductIds: [],
    availability: null,
    verification: "visual-only",
    verificationNote: "SKU, footprint, coverage, render texture, price and stock require staff verification.",
  },
  {
    id: "wave-60",
    sku: null,
    name: "Wave",
    description: "Wave-profile cabro shown in the existing Premium Cabro catalogue.",
    productPhoto: "/images/WAVE_RED.jpg",
    textureImage: "/images/WAVE_RED.jpg",
    textureStatus: "legacy-product-photo",
    normalMap: null,
    roughnessMap: null,
    ambientOcclusionMap: null,
    topFaceLengthMm: null,
    topFaceWidthMm: null,
    shape: "Wave",
    thicknessOptionsMm: [60],
    jointWidthMm: null,
    piecesPerSquareMetre: null,
    piecesPerPack: null,
    squareMetresPerPack: null,
    weightPerPieceKg: null,
    weightPerPackKg: null,
    colours: ["Grey / Red / Natural"],
    suitablePatterns: ["product-specific"],
    recommendedApplications: ["Gardens", "Pool surrounds", "Walkways"],
    loadRating: "Confirm with Premium Cabro",
    pricePerSquareMetreKes: null,
    borderProductIds: [],
    availability: null,
    verification: "visual-only",
    verificationNote: "SKU, footprint, coverage, render texture, price and stock require staff verification.",
  },
] as const;

export function hasVerifiedQuantityData(product: CameraProduct): boolean {
  return product.verification === "verified"
    && product.topFaceLengthMm != null
    && product.topFaceWidthMm != null
    && product.jointWidthMm != null
    && product.piecesPerSquareMetre != null
    && product.piecesPerPack != null
    && product.squareMetresPerPack != null;
}
