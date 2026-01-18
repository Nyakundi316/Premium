"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Ruler, Grid3X3 } from "lucide-react";

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

const BRAND_GOLD = "#FFBF00";
const BRAND_GOLD_DARK = "#E6AC00";
const BG_FROM = "#EEF2F6";
const BG_TO = "#FFFFFF";

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
    image: "/images/cube.JPEG",
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
      className="min-h-screen py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${BG_FROM}, ${BG_TO})`,
      }}
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
              Cabro Solutions{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                }}
              >
                for Every Project
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-5 max-w-xl">
              Explore our full range of cabro blocks — from 60mm residential
              pavers to 80mm heavy-duty patterns for industrial yards and estate
              access roads.
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
                  alt={product.name}
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
                    alt={active.name}
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
