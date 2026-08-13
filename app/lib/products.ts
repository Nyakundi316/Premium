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
      "/images/products/culverts/culverts.jpg",
      "/images/products/culverts/250mm culvert.jpg",
      "/images/products/culverts/Culverts under the road.jpg",
      "/images/products/culverts/300mm culverts.jpg",
      "/images/products/culverts/600mm culvert.jpg",
      "/images/products/culverts/culvert1.jpeg",
      "/images/products/culverts/culvert-pipes-stacked-yard.jpeg",
      "/images/products/culverts/culvert-pipes-invert-blocks.jpeg",
      "/images/products/culverts/culvert-production-yard-wide.jpeg",
      "/images/products/culverts/culvert-pipes-stockyard.jpeg",
      "/images/products/culverts/culvert-yard-workers.jpeg",
      "/images/products/culverts/culvert-pipes-moulds.jpeg",
      "/images/products/culverts/culvert-pipes-steel-moulds.jpeg",
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
      "/images/products/cabro/grey.jpeg",
      "/images/products/cabro/Hero2.jpeg",
      "/images/products/cabro/trihex groove.jpeg",
      "/images/products/cabro/image.png",
      // finished installations
      "/images/products/cabro/black-white-brick-herringbone-driveway.jpeg",
      "/images/products/cabro/red-yellow-black-trihex-driveway.jpeg",
      "/images/products/cabro/trihex-driveway-plate-compaction.jpeg",
      "/images/products/cabro/wave-pavers-parking-red-bands.jpeg",
      "/images/products/cabro/colored-3d-hexagon-estate-driveway.jpeg",
      "/images/products/cabro/red-trihex-driveway-charcoal-bands.jpeg",
      "/images/products/cabro/red-white-fan-pattern-walkway.jpeg",
      "/images/products/cabro/black-white-wave-driveway.jpeg",
      "/images/products/cabro/red-yellow-hexagon-courtyard.jpeg",
      "/images/products/cabro/estate-road-brick-pavers-kerbs.jpeg",
      "/images/products/cabro/yellow-red-charcoal-trihex-compound.jpeg",
      "/images/products/cabro/grey-clover-driveway-diamond-accents.jpeg",
      "/images/products/cabro/charcoal-trihex-court-flower-medallions.jpeg",
      "/images/products/cabro/grey-mirror-tree-lined-driveway.jpeg",
      "/images/products/cabro/red-trihex-walkway-flower-medallions.jpeg",
      "/images/products/cabro/white-courtblock-driveway-medallions.jpeg",
      "/images/products/cabro/charcoal-trihex-courtyard-medallions.jpeg",
      "/images/products/cabro/white-courtblock-walkway-medallions.jpeg",
      "/images/products/cabro/charcoal-trihex-driveway-medallions.jpeg",
      "/images/products/cabro/white-courtblock-medallion-closeup.jpeg",
      "/images/products/cabro/white-courtblock-pavement-closeup.jpeg",
      "/images/products/cabro/white-courtblock-walkway-garden.jpeg",
      "/images/products/cabro/red-courtblock-installation-progress.jpeg",
      "/images/products/cabro/black-white-3d-hexagon-driveway.jpeg",
      "/images/products/cabro/red-courtblock-compound-install.jpeg",
      "/images/products/cabro/grey-white-mirror-driveway-garden.jpeg",
      "/images/products/cabro/mirror-pavers-walkway-install.jpeg",
      "/images/products/cabro/mirror-pavers-driveway-stone-house.jpeg",
      "/images/products/cabro/mirror-pavers-compound-lawn.jpeg",
      "/images/products/cabro/mirror-pavers-kerb-closeup.jpeg",
      "/images/products/cabro/mirror-pavers-residential-driveway.jpeg",
      "/images/products/cabro/black-3d-hexagon-driveway-planters.jpeg",
      "/images/products/cabro/charcoal-3d-hexagon-compound.jpeg",
      // paving slabs & garden paths
      "/images/products/cabro/grey-paving-slabs-driveway-installation.jpeg",
      "/images/products/cabro/garden-slab-walkway-pebble-border.jpeg",
      "/images/products/cabro/square-slabs-pebble-edging-lawn.jpeg",
      "/images/products/cabro/slab-pathway-artificial-grass.jpeg",
      "/images/products/cabro/hexagon-stepping-slabs-garden-path.jpeg",
      // block styles & displays
      "/images/products/cabro/decorative-clover-pavers-grey-charcoal.jpeg",
      "/images/products/cabro/black-white-clover-pavers-closeup.jpeg",
      "/images/products/cabro/3d-cube-hexagon-display-board.jpeg",
      "/images/products/cabro/wave-pavers-display-red-black-white.jpeg",
      "/images/products/cabro/paver-display-panels.jpeg",
      // production & stock
      "/images/products/cabro/charcoal-brick-pavers-offloading.jpeg",
      "/images/products/cabro/clover-pavers-fresh-production.jpeg",
      "/images/products/cabro/yellow-charcoal-dumble-stockyard.jpeg",
      "/images/products/cabro/grey-zigzag-pavers-curing.jpeg",
      "/images/products/cabro/paver-pallets-production-yard.jpeg",
      "/images/products/cabro/red-zigzag-pavers-production.jpeg",
      "/images/products/cabro/red-zigzag-pavers-freshly-demolded.jpeg",
      "/images/products/cabro/red-yellow-paver-stockyard.jpeg",
      "/images/products/cabro/brick-paver-production-pallets.jpeg",
      "/images/products/cabro/grey-paver-blocks-curing-pallets.jpeg",
      "/images/products/cabro/fresh-pavers-handcart.jpeg",
      "/images/products/cabro/fresh-pavers-production-yard.jpeg",
      "/images/products/cabro/freshly-moulded-pavers-cart.jpeg",
      "/images/products/cabro/fresh-paver-blocks-pallet.jpeg",
      "/images/products/cabro/fresh-pavers-quality-check.jpeg",
      "/images/products/cabro/fresh-paver-blocks-demolded.jpeg",
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
    images: [
      "/images/products/fencing-posts/fence.png",
      "/images/concrete fence.png",
      "/images/products/fencing-posts/fencing-posts-stacked-yard.jpeg",
      "/images/products/fencing-posts/fencing-posts-fence-line.jpeg",
      "/images/products/fencing-posts/fencing-posts-bulk-stock.jpeg",
      "/images/products/fencing-posts/fencing-posts-curing.jpeg",
    ],
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
      "/images/products/kerbs-drainage/kerbs 1 (1).jpeg",
      "/images/products/kerbs-drainage/kerbs 1 (2).jpeg",
      "/images/products/kerbs-drainage/kerbs 1 (3).jpeg",
      "/images/products/kerbs-drainage/kerbs 1 (4).jpeg",
      "/images/products/kerbs-drainage/kerbs 1 (5).jpeg",
      "/images/products/kerbs-drainage/kerbstones-curing-pallets.jpeg",
      "/images/products/kerbs-drainage/kerbstones-stacked-production.jpeg",
      "/images/products/kerbs-drainage/kerbstones-bulk-stacked.jpeg",
      "/images/products/kerbs-drainage/kerbstones-freshly-cast.jpeg",
      "/images/products/kerbs-drainage/kerbstones-cast-rows.jpeg",
      "/images/products/kerbs-drainage/invert-block-drainage-channels.jpeg",
      "/images/products/kerbs-drainage/invert-block-channels-stacked.jpeg",
    ],
    features: ["Precast", "Clean edging", "Helps prevent erosion"],
  },
  {
    slug: "concrete-blocks",
    name: "Machine-Cut Concrete Blocks",
    tag: "Hollow • Solid",
    description:
      "Vibro-compacted hollow and solid concrete blocks for walling, boundary walls and general construction.",
    sizes: '6" and 9" hollow, solid blocks',
    bestFor: "Walling, boundary walls, residential & commercial builds",
    images: [
      "/images/products/concrete-blocks/hollow-blocks-stacked.jpeg",
      "/images/products/concrete-blocks/hollow-blocks-curing-pallets.jpeg",
      "/images/products/concrete-blocks/hollow-blocks-bulk-stock.jpeg",
      "/images/products/concrete-blocks/hollow-blocks-production-yard.jpeg",
      "/images/products/concrete-blocks/solid-blocks-pallets-stockyard.jpeg",
      "/images/products/concrete-blocks/solid-blocks-stacked-pallets.jpeg",
      "/images/products/concrete-blocks/solid-blocks-stockyard.jpeg",
      "/images/products/concrete-blocks/solid-blocks-bulk-yard.jpeg",
    ],
    features: ["Uniform machine finish", "High compressive strength", "Hollow & solid options", "Ready stock"],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
