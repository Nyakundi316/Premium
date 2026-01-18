export type Product = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  sizes?: string;
  bestFor?: string;
  images: string[];
  features?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "culverts",
    name: "Reinforced Concrete Culverts",
    tag: "300mm – 1200mm",
    description:
      "Heavy-duty culverts for drainage, road crossings and estate access roads.",
    sizes: "300mm, 450mm, 600mm, 900mm, 1200mm",
    bestFor: "Road drainage, stormwater, estate & farm access",
    images: [
      "/images/products/culverts/1.jpg",
      "/images/products/culverts/2.jpg",
      "/images/products/culverts/3.jpg",
    ],
    features: ["Steel-reinforced", "Durable", "Various sizes", "Easy installation"],
  },
  {
    slug: "cabro",
    name: "Cabro Paving Blocks",
    tag: "60mm • 80mm • 3D",
    description:
      "Vibro-pressed paving blocks for driveways, walkways, parking & yards.",
    sizes: "60mm, 80mm, decorative",
    bestFor: "Driveways, walkways, parking, industrial yards",
    images: [
      "/images/products/cabro/1.jpg",
      "/images/products/cabro/2.jpg",
    ],
    features: ["Weather-resistant", "Low maintenance", "Many patterns", "Heavy-duty options"],
  },
  {
    slug: "fencing-posts",
    name: "Concrete Fencing Posts",
    tag: "6ft – 10ft",
    description:
      "Strong, termite-proof fencing posts for plots, farms & estates.",
    sizes: "6ft, 7ft, 8ft, 9ft, 10ft",
    bestFor: "Plots, farms, perimeter fencing",
    images: ["/images/products/fencing-posts/1.jpg"],
    features: ["Termite-proof", "Low maintenance", "Weather-resistant"],
  },
  {
    slug: "kerbs-drainage",
    name: "Kerbstones & Drainage",
    tag: "Kerbs • Channels",
    description:
      "Precast kerbs and channels for clean edging and water management.",
    bestFor: "Driveway edges, walkways, estate roads, drainage lines",
    images: [
      "/images/products/kerbs-drainage/1.jpg",
      "/images/products/kerbs-drainage/2.jpg",
    ],
    features: ["Precast", "Clean edging", "Helps prevent erosion"],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
