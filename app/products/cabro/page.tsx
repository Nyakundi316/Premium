"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  Ruler,
  Grid3X3,
  Truck,
  Hammer,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { CABRO_FAQS } from "../../lib/cabro-faqs";
import { whatsappLink } from "../../lib/site";

/* ------------ TYPES ------------ */

type Filter = "all" | "60mm" | "80mm";

type CabroProduct = {
  id: string;
  name: string;
  pattern: string;
  thickness: "60mm" | "80mm";
  colorMix: string;
  image: string;
  bestFor: string;
  strength: string;
  surface: string;
};

/* ------------ BRAND ------------ */

const BRAND_GOLD = "#FFC20E";
const BRAND_GOLD_DARK = "#B8860B";

/* ------------ DATA: YOUR ACTUAL BLOCKS ------------ */

const cabroProducts: CabroProduct[] = [
  {
    id: "brick-60",
    name: "Brick Paver",
    pattern: "Brick",
    thickness: "60mm",
    colorMix: "Red / Natural / Charcoal",
    image: "/images/classic interlock.jpeg",
    bestFor: "Walkways, verandas, residential driveways & parking bays.",
    strength: "Machine vibro-compacted, suitable for light vehicle traffic.",
    surface: "Straight edges, very neat brick layouts.",
  },
  {
    id: "cross-dumble-60",
    name: "Cross Dumble",
    pattern: "Cross Dumble",
    thickness: "60mm",
    colorMix: "Red / Natural",
    image: "/images/dumble1.jpeg",
    bestFor: "Courtyards, compounds and decorative car parks.",
    strength: "Standard duty interlock with good stability.",
    surface: "Curved cross profile for a soft decorative look.",
  },
  {
    id: "cube-60",
    name: "Cube Paver",
    pattern: "Cube",
    thickness: "60mm",
    colorMix: "Red / Charcoal / Grey",
    image: "/images/cube.jpeg",
    bestFor: "Plazas, garden paths and outdoor seating areas.",
    strength: "Standard residential duty.",
    surface: "Simple square faces – flexible design patterns.",
  },
  {
    id: "dumble-60",
    name: "Dumble",
    pattern: "Dumble",
    thickness: "60mm",
    colorMix: "Grey / Natural",
    image: "/images/Behaton.jpg",
    bestFor: "Walkways, compounds, school yards.",
    strength: "Residential duty with interlocking sides.",
    surface: "Soft double-headed dumbbell profile.",
  },
  {
    id: "fan-60",
    name: "Fan Paver",
    pattern: "Fan",
    thickness: "60mm",
    colorMix: "Red / Natural",
    image: "/images/fan.jpeg",
    bestFor: "Curved paths, entrances and courtyards.",
    strength: "Designed for pedestrian and light vehicle areas.",
    surface: "Fan shape – perfect for circles and curved layouts.",
  },
  {
    id: "hexagon-60",
    name: "Hexagon",
    pattern: "Hexagon",
    thickness: "60mm",
    colorMix: "Yellow / Natural / Charcoal",
    image: "/images/GREY hexagon.jpg",
    bestFor: "Playgrounds, compounds and decorative zones.",
    strength: "Standard duty interlocking hexagon design.",
    surface: "Geometric six-sided pattern with strong visual effect.",
  },
  {
    id: "mirror-60",
    name: "Mirror",
    pattern: "Mirror",
    thickness: "60mm",
    colorMix: "Red / Grey / Charcoal",
    image: "/images/red-brown mirror.jpg",
    bestFor: "Estates, malls and premium driveways.",
    strength: "Residential duty with decorative layout.",
    surface: "Symmetrical mirrored lobes for a patterned effect.",
  },
  {
    id: "round-dumble-60",
    name: "Round Dumble",
    pattern: "Round Dumble",
    thickness: "60mm",
    colorMix: "Grey / Natural",
    image: "/images/round-dumble.jpeg",
    bestFor: "Compounds, garden paths and feature areas.",
    strength: "Standard duty with curved interlocking edges.",
    surface: "Rounded profile that creates flowing designs.",
  },
  {
    id: "square-60",
    name: "Square Paver",
    pattern: "Square",
    thickness: "60mm",
    colorMix: "Yellow / Grey / Charcoal",
    image: "/images/square.jpg",
    bestFor: "Car parks, verandas, service yards.",
    strength: "Standard duty, easy to lay in grids.",
    surface: "Clean square modules with straight joints.",
  },
  {
    id: "trihex-broad-80",
    name: "Trihex Broad",
    pattern: "Trihex Broad",
    thickness: "80mm",
    colorMix: "Grey / Charcoal",
    image: "/images/Trihex-Charcoal.jpg",
    bestFor: "Estate access roads, loading bays, truck yards.",
    strength: "Heavy-duty 80mm suitable for frequent trucks.",
    surface: "Broad trihex profile for strong load distribution.",
  },
  {
    id: "trihex-groove-80",
    name: "Trihex Groove",
    pattern: "Trihex Groove",
    thickness: "80mm",
    colorMix: "Red / Charcoal / Natural",
    image: "/images/products/cabro/trihex groove.jpeg",
    bestFor: "Service roads, petrol stations, commercial sites.",
    strength: "High-strength 80mm with excellent interlock.",
    surface: "Grooved texture for extra skid resistance.",
  },
  {
    id: "trihex-yellow-60",
    name: "Trihex Yellow",
    pattern: "Trihex Yellow",
    thickness: "60mm",
    colorMix: "Yellow / Natural",
    image: "/images/Trihex-3D-yellow.jpg",
    bestFor: "Driveway highlights, speed strips, borders.",
    strength: "Residential duty, often used as accent colour.",
    surface: "Trihex pattern used for lines and markings.",
  },
  {
    id: "unipaver-80",
    name: "Unipaver",
    pattern: "Unipaver",
    thickness: "80mm",
    colorMix: "Charcoal / Natural",
    image: "/images/zig-zag yellow.jpeg",
    bestFor: "Industrial yards, container yards, forklift routes.",
    strength: "Heavy-duty 80mm for high loads.",
    surface: "S-shaped interlock for excellent stability.",
  },
  {
    id: "wave-60",
    name: "Wave",
    pattern: "Wave",
    thickness: "60mm",
    colorMix: "Grey / Red / Natural",
    image: "/images/WAVE_RED.jpg",
    bestFor: "Gardens, resorts, pool surrounds and paths.",
    strength: "Residential duty decorative paver.",
    surface: "Wave-style profile that creates flowing patterns.",
  },
  {
    id: "3d-zigzag-60",
    name: "3D Zigzag",
    pattern: "3D Zigzag",
    thickness: "60mm",
    colorMix: "Red / Grey / Charcoal",
    image: "/images/3D zig-zag.jpeg",
    bestFor: "Residential driveways and decorative compounds.",
    strength: "Standard duty with striking 3D visual effect.",
    surface: "Zigzag pattern with raised 3D texture.",
  },
  {
    id: "cobblestone-60",
    name: "Cobblestone",
    pattern: "Cobblestone",
    thickness: "60mm",
    colorMix: "Natural / Grey",
    image: "/images/cobblestone.png",
    bestFor: "Garden paths, heritage driveways and courtyards.",
    strength: "Light to medium duty with rustic appeal.",
    surface: "Natural stone-like texture with rounded edges.",
  },
  {
    id: "arrow-80",
    name: "Arrow Paver",
    pattern: "Arrow",
    thickness: "80mm",
    colorMix: "Grey / Charcoal",
    image: "/images/Arrow-pavers.png",
    bestFor: "Parking lots, commercial yards and access roads.",
    strength: "Heavy-duty 80mm with directional interlock.",
    surface: "Arrow-shaped profile for maximum grip under heavy loads.",
  },
  {
    id: "colorado-60",
    name: "Colorado",
    pattern: "Colorado",
    thickness: "60mm",
    colorMix: "Red / Natural / Mixed",
    image: "/images/Colorado shape.jpg",
    bestFor: "Driveways, patios and garden walkways.",
    strength: "Residential duty with unique interlocking profile.",
    surface: "Distinct Colorado shape for eye-catching layouts.",
  },
  {
    id: "crown-60",
    name: "Crown Shape",
    pattern: "Crown",
    thickness: "60mm",
    colorMix: "Red / Grey / Natural",
    image: "/images/crown shape.jpeg",
    bestFor: "Premium driveways and entrance features.",
    strength: "Decorative residential duty.",
    surface: "Crown-shaped profile for an elegant premium finish.",
  },
  {
    id: "i-shape-80",
    name: "I-Shape",
    pattern: "I-Shape",
    thickness: "80mm",
    colorMix: "Grey / Charcoal",
    image: "/images/i-shape.jpeg",
    bestFor: "Heavy traffic roads, truck yards and industrial areas.",
    strength: "Heavy-duty 80mm rated for trucks and containers.",
    surface: "I-shaped profile for maximum mechanical interlock.",
  },
  {
    id: "interlocking-colored-60",
    name: "Coloured Interlocking",
    pattern: "Interlocking",
    thickness: "60mm",
    colorMix: "Mixed Colours",
    image: "/images/interlocking colored pavers.jpeg",
    bestFor: "Decorative driveways, walkways and estate entrances.",
    strength: "Standard duty with vibrant colour combinations.",
    surface: "Standard interlock with multi-colour finish.",
  },
  {
    id: "gear-swirl-60",
    name: "Gear Swirl",
    pattern: "Gear Swirl",
    thickness: "60mm",
    colorMix: "Red / Charcoal / Yellow",
    image: "/images/interlocking.jpeg",
    bestFor: "Courtyards, show homes and decorative compounds.",
    strength: "Standard duty with tight rotational interlock.",
    surface: "Gear-shaped profile that creates mesmerizing swirl patterns.",
  },
  {
    id: "boardwalk-zigzag-80",
    name: "Boardwalk Zigzag",
    pattern: "Zigzag",
    thickness: "80mm",
    colorMix: "Grey / Charcoal",
    image: "/images/Australian.jpeg",
    bestFor: "Walkways, ramps, coastal paths and public access areas.",
    strength: "Heavy-duty 80mm suitable for high foot traffic.",
    surface: "Clean zigzag lines with tight-fitting edges.",
  },
  {
    id: "clay-brick-60",
    name: "Clay Brick Bond",
    pattern: "Brick Bond",
    thickness: "60mm",
    colorMix: "Red / Terracotta",
    image: "/images/Clay-paving-blocks.jpg",
    bestFor: "Traditional estates, verandas and heritage-style paths.",
    strength: "Residential duty with timeless appeal.",
    surface: "Rectangular brick layout with natural clay-tone finish.",
  },
  {
    id: "3d-y-block-60",
    name: "3D Y-Block",
    pattern: "3D Geometric",
    thickness: "60mm",
    colorMix: "Grey / White / Charcoal",
    image: "/images/kerbstone.jpg",
    bestFor: "Modern driveways, showrooms and premium entrances.",
    strength: "Standard duty with strong visual depth effect.",
    surface: "Y-shaped interlocking pieces creating 3D optical illusion.",
  },
  {
    id: "hexagon-deco-60",
    name: "Hexagon Deco",
    pattern: "Hexagon",
    thickness: "60mm",
    colorMix: "Grey / Charcoal / Mixed",
    image: "/images/hexa deco.jpg",
    bestFor: "Patios, outdoor lounges and garden seating areas.",
    strength: "Residential duty with decorative hexagonal design.",
    surface: "Mixed-tone hexagons for an upscale outdoor living feel.",
  },
  {
    id: "diamond-pool-60",
    name: "Diamond Pool Paver",
    pattern: "Diamond",
    thickness: "60mm",
    colorMix: "Cream / Grey",
    image: "/images/square pave.jpg",
    bestFor: "Pool surrounds, resort decks and luxury gardens.",
    strength: "Residential duty with slip-resistant surface.",
    surface: "Large diamond grid pattern with clean premium lines.",
  },
  {
    id: "coloured-dumble-60",
    name: "Coloured Dumble",
    pattern: "Dumble",
    thickness: "60mm",
    colorMix: "Red / Yellow / Charcoal",
    image: "/images/Each house owner is willing to create wonderful….jpeg",
    bestFor: "Garden paths, residential compounds and courtyards.",
    strength: "Standard duty with vibrant colour mixes.",
    surface: "Interlocking bone shape with multi-colour decorative finish.",
  },
  {
    id: "crown-compound-60",
    name: "Crown Compound",
    pattern: "Crown",
    thickness: "60mm",
    colorMix: "Red / Orange / Grey",
    image: "/images/_Paver Blocks__ Where functionality meets flair —….jpeg",
    bestFor: "Estate compounds, driveways and entrance features.",
    strength: "Standard duty with decorative crown pattern.",
    surface: "Crown-shaped blocks in multi-colour compound layout.",
  },
  {
    id: "chinaman-60",
    name: "Chinaman Paver",
    pattern: "Chinaman",
    thickness: "60mm",
    colorMix: "Red / Yellow / Grey",
    image: "/images/Chinaman pavers a leading manufacturer of Concrete….jpeg",
    bestFor: "Institutional compounds, temple grounds and large courtyards.",
    strength: "Standard duty with high visual impact.",
    surface: "Wide interlocking profile with bold striped colour layout.",
  },
  {
    id: "cobblestone-charcoal-60",
    name: "Cobblestone Charcoal",
    pattern: "Cobblestone",
    thickness: "60mm",
    colorMix: "Charcoal / Dark Grey",
    image: "/images/Perfect Work of Paver Block.jpeg",
    bestFor: "Premium driveways, curved entrances and feature areas.",
    strength: "Residential duty with artisan-style laying pattern.",
    surface: "Small cobblestone units laid in flowing fan curves.",
  },
  {
    id: "luxury-hex-60",
    name: "Luxury Hex Pathway",
    pattern: "Hexagon",
    thickness: "60mm",
    colorMix: "Charcoal / Beige",
    image: "/images/Masterpieces.jpeg",
    bestFor: "High-end residential landscapes, resort pathways and lounge patios.",
    strength: "Premium finish for low-traffic decorative zones.",
    surface: "Large hexagonal tiles with embedded lighting-ready joints.",
  },
];

/* ------------ PAGE COMPONENT ------------ */

export default function CabroProductsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<CabroProduct | null>(null);

  const filteredProducts = useMemo(() => {
    if (filter === "all") return cabroProducts;
    return cabroProducts.filter((p) => p.thickness === filter);
  }, [filter]);

  return (
    <section
      className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#EEF2F6] to-white dark:from-[#0A0C10] dark:to-[#0F1219]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_minmax(0,1fr)] gap-10 lg:gap-14 items-center mb-12 lg:mb-16">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-white">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/forcard.png"
                  alt="Premium cabro driveway installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-1.5 mb-4">
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: BRAND_GOLD }}
              />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-700">
                Cabro Paving Blocks
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
              Cabro Blocks in Kenya{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                }}
              >
                — for Every Project
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-5 max-w-xl">
              We manufacture interlocking cabro paving blocks at our Kiambu
              yard and supply or install them across Nairobi and nearby
              counties — from 60mm residential pavers to 80mm heavy-duty
              patterns for industrial yards and estate access roads.
            </p>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-700">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
                <Ruler className="w-4 h-4 text-gray-600" />
                60mm &amp; 80mm thickness options
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
                <Grid3X3 className="w-4 h-4 text-gray-600" />
                Brick, Dumble, Trihex, Unipaver &amp; more
              </div>
            </div>
          </motion.div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Cabro Gallery
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Tap any pattern to view details, thickness and ideal usage.
            </p>
          </div>

          <div className="inline-flex flex-wrap gap-2 bg-white/80 p-1.5 rounded-full border border-gray-200">
            {[
              { id: "all", label: "All" },
              { id: "60mm", label: "60mm" },
              { id: "80mm", label: "80mm" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id as Filter)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                  filter === f.id
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-transparent text-gray-700 hover:bg-gray-100"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.button
              key={product.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              onClick={() => setActive(product)}
              className="group relative w-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={`${product.name} cabro paving block, ${product.thickness}, ${product.colorMix}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-xs sm:text-sm">
                  <div className="text-left">
                    <p className="font-semibold text-white truncate">
                      {product.name}
                    </p>
                    <p className="text-white/80 truncate">
                      {product.pattern} • {product.thickness}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-[10px] sm:text-xs font-semibold text-gray-900">
                    View details
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* 60mm VS 80mm */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              60mm vs 80mm cabro — a quick comparison
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Thickness is the first decision on any cabro project. As a rule
              of thumb: 60mm for people and cars, 80mm wherever lorries, buses
              or constant traffic will pass. For the full breakdown, read our{" "}
              <Link
                href="/guides/60mm-vs-80mm-cabro"
                className="font-semibold text-[#B8860B] hover:underline"
              >
                60mm vs 80mm cabro guide
              </Link>
              .
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              All our blocks are machine vibro-compacted at our production yard
              on Githunguri Road, Kiambu, for consistent density and a uniform
              finish.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-600">
                  <th className="px-4 py-3 font-semibold"> </th>
                  <th className="px-4 py-3 font-semibold">60mm cabro</th>
                  <th className="px-4 py-3 font-semibold">80mm cabro</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-600">Best for</td>
                  <td className="px-4 py-3">Driveways, compounds, walkways, patios</td>
                  <td className="px-4 py-3">Parking lots, estate roads, petrol stations, yards</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-600">Traffic</td>
                  <td className="px-4 py-3">Pedestrians &amp; light vehicles</td>
                  <td className="px-4 py-3">Trucks &amp; frequent heavy traffic</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-600">Patterns</td>
                  <td className="px-4 py-3">Widest choice of shapes &amp; colours</td>
                  <td className="px-4 py-3">Trihex, unipaver, zigzag &amp; other heavy-duty profiles</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-600">Base needed</td>
                  <td className="px-4 py-3">Compacted base for light loads</td>
                  <td className="px-4 py-3">Well-compacted, thicker base with edge restraints</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SUPPLY, DELIVERY & INSTALLATION */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC20E]/15">
                <Truck className="h-5 w-5 text-[#B8860B]" />
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Supply &amp; delivery
              </h2>
            </div>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Order blocks only and we deliver from our Kiambu yard to sites
              across Nairobi, Kiambu, Ruiru, Thika, Juja, Githunguri and nearby
              areas. Delivery is scheduled by location and quantity — share
              your site location when requesting a quote.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC20E]/15">
                <Hammer className="h-5 w-5 text-[#B8860B]" />
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Professional installation
              </h2>
            </div>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Our teams handle the full job: site assessment, excavation, base
              compaction, laying, cutting, kerbs and sand filling. See how we
              work on the{" "}
              <Link
                href="/cabro-installation-nairobi"
                className="font-semibold text-[#B8860B] hover:underline"
              >
                cabro installation page
              </Link>{" "}
              or browse{" "}
              <Link
                href="/projects"
                className="font-semibold text-[#B8860B] hover:underline"
              >
                cabro project gallery
              </Link>
              .
            </p>
          </div>
        </div>

        {/* PRICING FACTORS */}
        <div className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            What determines cabro prices in Kenya?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
            We don&apos;t publish fixed prices on the website because material
            and transport costs change. Instead,{" "}
            <Link
              href="/quote"
              className="font-semibold text-[#B8860B] hover:underline"
            >
              request a current quotation
            </Link>{" "}
            and we&apos;ll price your exact project. The main factors that move
            the price are:
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-gray-800">
            {[
              "Block thickness — 60mm vs 80mm",
              "Colour — grey vs coloured or mixed",
              "Pattern and any decorative layout",
              "Order quantity and project size",
              "Site preparation and excavation needed",
              "Delivery distance from our Kiambu yard",
              "Kerbs, edge restraints and drainage",
              "Supply-only vs full installation",
            ].map((factor) => (
              <li
                key={factor}
                className="rounded-xl bg-gray-50 border border-gray-100 px-3 py-2.5"
              >
                {factor}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Full details on the{" "}
            <Link
              href="/cabro-blocks-prices-kenya"
              className="font-semibold text-[#B8860B] hover:underline"
            >
              cabro blocks prices in Kenya
            </Link>{" "}
            page.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Cabro blocks — frequently asked questions
          </h2>
          <div className="mt-5 space-y-3 max-w-3xl">
            {CABRO_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm sm:text-base font-semibold text-gray-900">
                  {faq.question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap items-center gap-4 rounded-2xl bg-[#0D1B30] p-6 sm:p-8">
          <div className="mr-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Ready to pave? Get a current quotation.
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Share your location and area size — we&apos;ll advise on
              thickness, pattern and pricing.
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
          >
            Request a cabro quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink(
              "Hello Premium Cabro, I'm viewing your cabro blocks page. Please share availability and a quotation for my project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-[#FFC20E]" />
            WhatsApp us
          </a>
        </div>
      </div>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
                aria-label="Close cabro details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    src={active.image}
                    alt={`${active.name} cabro paving block, ${active.thickness}, ${active.colorMix}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500 mb-1">
                      Cabro Pattern
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {active.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {active.pattern} • {active.thickness} • {active.colorMix}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {active.bestFor}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <p className="text-[11px] font-semibold uppercase text-gray-500 mb-1">
                        Strength &amp; Performance
                      </p>
                      <p className="text-gray-800">{active.strength}</p>
                    </div>
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <p className="text-[11px] font-semibold uppercase text-gray-500 mb-1">
                        Surface &amp; Finish
                      </p>
                      <p className="text-gray-800">{active.surface}</p>
                    </div>
                  </div>

                  <div className="mt-2 text-[11px] sm:text-xs text-gray-500">
                    Tip: For heavy trucks and industrial yards, we recommend{" "}
                    <span className="font-semibold">80mm cabro</span> with a
                    well-compacted base and proper edge restraints.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
