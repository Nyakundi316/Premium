"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Home,
  Building2,
  Truck,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  tag: string;
  description: string;
  sizes: string;
  bestFor: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  href: string;
  galleryHref: string;
  extraDetails: string;
  Icon: LucideIcon;
  features: string[];
};

const GOLD = "#FFC20E";

const products: Product[] = [
  {
    id: "cabro",
    name: "Cabro Paving Blocks",
    tag: "60mm · 80mm · 3D Decorative",
    description:
      "Machine-vibro compacted cabro blocks for homes, estates, malls and industrial yards.",
    sizes: "60mm, 80mm, 3D decorative",
    bestFor: "Driveways, parking, estate roads, walkways",
    image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
    imageAlt: "Premium 3D interlocking cabro paving blocks in a modern geometric layout",
    imageCaption: "Give every entrance a premium finish with durable cabro made for daily traffic.",
    href: "/products/cabro",
    galleryHref: "/products/cabro#cabro-gallery",
    extraDetails:
      "Available in Zigzag, Tri-Hex, 3D, cobblestone and brick patterns. Ideal for new projects and renovations where a neat, long-lasting finish is required.",
    Icon: Home,
    features: ["Weather-resistant", "Low maintenance", "Many patterns", "Heavy-duty"],
  },
  {
    id: "culverts",
    name: "Reinforced Concrete Culverts",
    tag: "300mm – 1200mm",
    description:
      "Heavy-duty culverts designed for road drainage, stormwater and estate access roads.",
    sizes: "300mm, 450mm, 600mm, 900mm, 1200mm",
    bestFor: "Road drainage, stormwater, estate & farm access",
    image: "/images/reinforce concrete culvert.png",
    imageAlt: "Reinforced concrete culvert pipes prepared for drainage installation",
    imageCaption: "Keep roads and compounds protected with dependable, high-capacity drainage solutions.",
    href: "/products/culverts",
    galleryHref: "/products/culverts#product-gallery",
    extraDetails:
      "Steel-reinforced for maximum strength and durability. Suitable for county roads, estate entrances, farm crossings and industrial sites with regular truck traffic.",
    Icon: Truck,
    features: ["Steel-reinforced", "Durable", "Various sizes", "Easy installation"],
  },
  {
    id: "fence-posts",
    name: "Concrete Fencing Posts",
    tag: "6ft – 10ft",
    description:
      "Straight, termite-proof posts ideal for plots, farms, estates and commercial fencing.",
    sizes: "6ft, 7ft, 8ft, 9ft, 10ft",
    bestFor: "Plot, farm, estate & perimeter fencing",
    image: "/images/fence.png",
    imageAlt: "Concrete fencing posts installed along a secure property boundary",
    imageCaption: "Build a stronger perimeter with low-maintenance posts that outlast timber.",
    href: "/products/fencing-posts",
    galleryHref: "/products/fencing-posts#product-gallery",
    extraDetails:
      "Works with chain-link, barbed wire or razor wire. Concrete posts last longer than timber and require very little maintenance over their lifetime.",
    Icon: Building2,
    features: ["Termite-proof", "Low maintenance", "Various heights", "Weather-resistant"],
  },
  {
    id: "kerbs-drainage",
    name: "Kerbstones & Drainage Channels",
    tag: "Kerbs · Channels",
    description:
      "Precast kerbs and drainage channels for clean road edges, controlled runoff and a professional finish.",
    sizes: "Kerbs, channels and invert blocks",
    bestFor: "Estate roads, parking edges, walkways & stormwater lines",
    image: "/images/products/kerbs-drainage/invert-block-drainage-channels.jpeg",
    imageAlt: "Precast concrete invert blocks arranged for a drainage channel installation",
    imageCaption: "Direct rainwater where it belongs while giving roads and compounds crisp, finished edges.",
    href: "/products/kerbs-drainage",
    galleryHref: "/products/kerbs-drainage#product-gallery",
    extraDetails:
      "Uniform precast units make alignment easier and create a clean transition between paved areas, roads and drainage lines.",
    Icon: Truck,
    features: ["Clean alignment", "Precast finish", "Runoff control", "Bulk supply"],
  },
  {
    id: "concrete-blocks",
    name: "Machine-Cut Concrete Blocks",
    tag: "Hollow · Solid",
    description:
      "Uniform vibro-compacted walling blocks for residential, commercial and boundary-wall construction.",
    sizes: '6" and 9" hollow, solid blocks',
    bestFor: "Walling, boundary walls and general construction",
    image: "/images/products/concrete-blocks/hollow-blocks-bulk-stock.jpeg",
    imageAlt: "Bulk stock of uniform machine-cut hollow concrete construction blocks",
    imageCaption: "Build straighter walls with consistent blocks prepared for efficient site delivery.",
    href: "/products/concrete-blocks",
    galleryHref: "/products/concrete-blocks#product-gallery",
    extraDetails:
      "Consistent dimensions support neat courses, predictable material planning and efficient progress on site.",
    Icon: Building2,
    features: ["Uniform dimensions", "Hollow & solid", "Neat finish", "Ready stock"],
  },
  {
    id: "garden-pavers",
    name: "Garden Pavers & Stepping Slabs",
    tag: "Decorative Outdoor",
    description:
      "Decorative paving and stepping slabs that create inviting garden paths, patios and landscaped outdoor spaces.",
    sizes: "Multiple shapes, colours and layouts",
    bestFor: "Gardens, patios, pathways and landscaped compounds",
    image: "/images/products/cabro/hexagon-stepping-slabs-garden-path.jpeg",
    imageAlt: "Hexagonal concrete stepping slabs forming a landscaped garden pathway",
    imageCaption: "Turn everyday outdoor spaces into polished, welcoming paths with lasting concrete style.",
    href: "/products/cabro#cabro-gallery",
    galleryHref: "/products/cabro#cabro-gallery",
    extraDetails:
      "Choose from geometric slabs and decorative pavers to complement lawns, planting beds and contemporary outdoor areas.",
    Icon: Home,
    features: ["Decorative layouts", "Easy maintenance", "Outdoor-ready", "Multiple styles"],
  },
  {
    id: "retaining-walls",
    name: "Retaining Wall Solutions",
    tag: "Structural · Landscape",
    description:
      "Concrete retaining solutions for stabilising sloped ground while creating clean, usable outdoor levels.",
    sizes: "Project-specific selection",
    bestFor: "Slopes, gardens, compounds and erosion-control works",
    image: "/images/Retaining Walls.png",
    imageAlt: "Tiered concrete retaining wall integrated into a landscaped outdoor space",
    imageCaption: "Control difficult slopes and unlock more usable space with a strong, refined retaining solution.",
    href: "/products/retaining-walls",
    galleryHref: "/products/retaining-walls#product-gallery",
    extraDetails:
      "A practical option for sites that need ground support, cleaner level changes and coordinated landscaping.",
    Icon: Building2,
    features: ["Slope support", "Erosion control", "Clean finish", "Site-specific advice"],
  },
  {
    id: "concrete-pipes",
    name: "Concrete Drainage Pipes",
    tag: "Drainage · Infrastructure",
    description:
      "Robust concrete pipes for dependable water conveyance across roads, developments and commercial sites.",
    sizes: "Multiple diameters available",
    bestFor: "Stormwater, road crossings and development infrastructure",
    image: "/images/Concrete Pipes.png",
    imageAlt: "Large concrete drainage pipes arranged and ready for infrastructure works",
    imageCaption: "Move stormwater with confidence using durable concrete pipes built for demanding sites.",
    href: "/products/culverts",
    galleryHref: "/products/culverts#product-gallery",
    extraDetails:
      "Suitable sizing depends on site conditions and expected flow; contact the team for product guidance and scheduling.",
    Icon: Truck,
    features: ["Heavy-duty", "Multiple diameters", "Long service life", "Delivery support"],
  },
  {
    id: "3d-cabro",
    name: "3D Decorative Cabro",
    tag: "Premium · Geometric",
    description:
      "Statement paving patterns that combine geometric depth with the practical strength of interlocking concrete.",
    sizes: "Decorative paving options",
    bestFor: "Entrances, courtyards, patios and feature driveways",
    image: "/images/products/cabro/black-white-3d-hexagon-driveway.jpeg",
    imageAlt: "Black and white 3D hexagonal cabro installed across a modern driveway",
    imageCaption: "Create a memorable first impression with bold geometric paving that performs as beautifully as it looks.",
    href: "/products/cabro#cabro-gallery",
    galleryHref: "/products/cabro#cabro-gallery",
    extraDetails:
      "Contrasting colours and careful laying create a striking dimensional effect for premium residential and commercial spaces.",
    Icon: Home,
    features: ["High visual impact", "Interlocking strength", "Colour options", "Premium finish"],
  },
  {
    id: "clover-pavers",
    name: "Decorative Clover Pavers",
    tag: "Distinctive · Versatile",
    description:
      "Curved clover-pattern pavers for compounds and walkways that need a softer, more distinctive visual character.",
    sizes: "Decorative colour combinations",
    bestFor: "Residential compounds, patios and pedestrian areas",
    image: "/images/products/cabro/decorative-clover-pavers-grey-charcoal.jpeg",
    imageAlt: "Grey and charcoal decorative clover-shaped concrete paving blocks",
    imageCaption: "Bring graceful pattern and dependable performance together in one distinctive paved surface.",
    href: "/products/cabro#cabro-gallery",
    galleryHref: "/products/cabro#cabro-gallery",
    extraDetails:
      "Clover profiles create flowing visual rhythm and can be arranged in contrasting tones to suit the surrounding architecture.",
    Icon: Home,
    features: ["Distinctive shape", "Colour combinations", "Low maintenance", "Outdoor-ready"],
  },
  {
    id: "heavy-duty-cabro",
    name: "Heavy-Duty Cabro Paving",
    tag: "80mm · High Traffic",
    description:
      "Robust interlocking paving options for parking areas, estate roads and yards exposed to regular vehicle movement.",
    sizes: "Ask whether 60mm or 80mm suits your site",
    bestFor: "Commercial parking, estate roads and industrial yards",
    image: "/images/products/cabro/trihex-driveway-plate-compaction.jpeg",
    imageAlt: "Trihex cabro driveway being compacted with a plate compactor during installation",
    imageCaption: "Invest in a properly finished paved surface designed around your traffic and site conditions.",
    href: "/guides/60mm-vs-80mm-cabro",
    galleryHref: "/products/cabro#cabro-gallery",
    extraDetails:
      "Correct block selection, base preparation, edge restraint and compaction all contribute to reliable long-term performance.",
    Icon: Truck,
    features: ["Traffic-ready options", "Interlocking surface", "Professional finish", "Site guidance"],
  },
  {
    id: "precast-stock",
    name: "Bulk Precast Supply",
    tag: "Projects · Contractors",
    description:
      "Organised precast stock for contractors, developers and larger projects requiring coordinated quantities and delivery.",
    sizes: "Quantities scheduled to order",
    bestFor: "Estates, roads, commercial sites and contractor supply",
    image: "/images/products/kerbs-drainage/kerbstones-bulk-stacked.jpeg",
    imageAlt: "Large quantity of precast concrete kerbstones stacked for project supply",
    imageCaption: "Keep your project moving with coordinated precast quantities and practical delivery scheduling.",
    href: "/quote",
    galleryHref: "/products/kerbs-drainage#product-gallery",
    extraDetails:
      "Share your required products, quantities and delivery location so the team can prepare a site-specific quotation.",
    Icon: Building2,
    features: ["Bulk quantities", "Consistent units", "Project scheduling", "Quotation support"],
  },
];

export default function CoreProductsSection() {
  return (
    <section className="bg-slate-50 dark:bg-[#0F1219] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Header: image left, text right */}
        <div className="mb-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/Driveways.png"
                alt="Premium Concrete paving installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Our Products
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-4xl">
              Precision concrete products made in Kenya
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We supply durable, well-finished concrete products for residential, commercial and industrial projects across Kenya.
            </p>

            <div className="mt-6 space-y-2.5">
              {["Factory-direct pricing (no middlemen)", "Consistent production & quality checks", "Nationwide delivery support"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: `${GOLD}18` }}>
                    <Check size={14} style={{ color: GOLD }} />
                  </div>
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
              style={{ background: GOLD }}
            >
              Explore All Products
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Product cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <Link
                href={product.galleryHref}
                aria-label={`View more ${product.name} images`}
                className="relative block h-52 overflow-hidden sm:h-56"
              >
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent px-4 pb-4 pt-12 text-left">
                  <p className="text-xs font-medium leading-5 text-white sm:text-sm">
                    {product.imageCaption}
                  </p>
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-1">
                    <product.Icon size={14} className="text-slate-500" />
                    <span className="text-[11px] font-medium text-slate-500">Product</span>
                  </div>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#0D1B30]" style={{ background: GOLD }}>
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{product.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.features.map((f) => (
                    <span key={f} className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-600">{f}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <Link href={product.href} className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: GOLD }}>
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
            style={{ background: GOLD }}
          >
            View More Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
