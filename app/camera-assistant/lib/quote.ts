import type { CameraProduct } from "./catalogue";
import type { MeasurementConfidence } from "./domain";

export type QuoteDetails = Readonly<{
  reference: string;
  customerName: string;
  telephone: string;
  location: string;
  mapPin: string;
  projectType: string;
  product: CameraProduct;
  thicknessMm: number;
  colour: string;
  pattern: string;
  estimatedArea: number | null;
  estimatedBlocks: number | null;
  estimatedPacks: number | null;
  confidence: MeasurementConfidence;
  wastagePercentage: number;
  previewUrl: string | null;
  preferredDate: string;
  service: string;
}>;

export const ESTIMATE_DISCLAIMER = "This estimate remains subject to a physical site inspection, ground preparation requirements, drainage conditions, delivery distance and confirmed product availability.";

export function createDesignReference(): string {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const random = globalThis.crypto?.randomUUID?.().slice(0, 6).toUpperCase()
    ?? Math.random().toString(36).slice(2, 8).toUpperCase();
  return `PCCA-${date}-${random}`;
}

export function buildWhatsAppQuote(details: QuoteDetails): string {
  return [
    "Hello Premium Cabro, I would like a Camera Assistant quotation.",
    "",
    `Design reference: ${details.reference}`,
    `Customer: ${details.customerName || "Not provided"}`,
    `Telephone: ${details.telephone || "Not provided"}`,
    `Location: ${details.location || "Not provided"}`,
    `Map pin: ${details.mapPin || "Not provided"}`,
    `Project type: ${details.projectType || "Not provided"}`,
    `Cabro: ${details.product.name}`,
    `SKU: ${details.product.sku ?? "Awaiting staff verification"}`,
    `Thickness: ${details.thicknessMm} mm`,
    `Colour: ${details.colour}`,
    `Pattern: ${details.pattern}`,
    `Estimated area: ${details.estimatedArea == null ? "Not calculated" : `${details.estimatedArea.toFixed(2)} m²`}`,
    `Estimated blocks: ${details.estimatedBlocks ?? "Not calculated — product coverage unverified"}`,
    `Estimated packs: ${details.estimatedPacks ?? "Not calculated — pack data unverified"}`,
    `Measurement confidence: ${details.confidence}`,
    `Wastage: ${details.wastagePercentage}%`,
    `Preview: ${details.previewUrl ?? "Saved locally; customer will share the branded image separately"}`,
    `Preferred installation date: ${details.preferredDate || "Not provided"}`,
    `Service required: ${details.service || "Not provided"}`,
    "",
    ESTIMATE_DISCLAIMER,
  ].join("\n");
}
