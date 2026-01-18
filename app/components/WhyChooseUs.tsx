"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  Award,
  Palette,
  Shield,
  Clock,
  Grid,
  Filter,
  Sparkles,
} from "lucide-react";

type Category =
  | "all"
  | "trihex"
  | "unipaver"
  | "hexagon"
  | "dumble-wave"
  | "brick-cube"
  | "special";

type Product = {
  id: string;
  name: string;
  colorLabel: string;
  image: string;
  category: Category;
  description: string;
  bestFor: string;
  reason: string;
};

/** ✅ Accent (you can keep your gold branding) */
const BRAND_GOLD = "#FFBF00";
const BRAND_GOLD_DARK = "#E6AC00";

/**
 * ✅ White-on-white readability system
 * (This is what changes the "shade of white" across the section)
 */
const WHITE_BASE = "#F8FAFC"; // page background (soft white)
const WHITE_TINT = "#F1F5F9"; // gentle separation (light grey-white)
const WHITE_CARD = "#FFFFFF"; // pure white cards
const BORDER_SOFT = "#E5E7EB"; // borders/dividers

function prettyCategory(c: Category) {
  switch (c) {
    case "trihex":
      return "Trihex";
    case "unipaver":
      return "Unipaver";
    case "hexagon":
      return "Hexagon";
    case "dumble-wave":
      return "Dumble & Wave";
    case "brick-cube":
      return "Brick & Cube";
    case "special":
      return "Special";
    default:
      return "All";
  }
}

export default function WhyChooseSection() {
  const products: Product[] = useMemo(
    () => [
      {
        id: "brick-cross-dumble",
        name: "Brick Cross Dumble",
        colorLabel: "Red / Natural",
        image: "/images/Red.jpeg",
        category: "brick-cube",
        description:
          "A classic brick-style pattern with cross joints that gives a neat, strong, traditional look to walkways and driveways.",
        bestFor: "Residential driveways, walkways, compound entrances",
        reason:
          "Choose Brick Cross Dumble when you want a simple, timeless look that is easy to maintain, easy to replace and strong enough for everyday vehicle traffic.",
      },
      {
        id: "cube",
        name: "Cube",
        colorLabel: "Red / Grey",
        image: "/images/cube.jpeg",
        category: "brick-cube",
        description:
          "Square paving blocks that give a modern, tiled look with clean lines and flexible layout options.",
        bestFor: "Courtyards, patios, front entrances, decorative zones",
        reason:
          "Choose Cube blocks if you want a modern, minimal look that can be laid in many patterns and is perfect for neat outdoor sitting areas and smart entrances.",
      },
      {
        id: "dumble",
        name: "Dumble",
        colorLabel: "Red / Charcoal",
        image: "/images/i-shape.jpeg",
        category: "dumble-wave",
        description:
          "Interlocking I-shaped pavers that lock together tightly to distribute loads and reduce movement.",
        bestFor: "Driveways, parking bays, apartments & estate roads",
        reason:
          "Choose Dumble blocks when you want strong interlock, less shifting over time, and a surface that can comfortably carry cars and light trucks.",
      },
      {
        id: "fan",
        name: "Fan",
        colorLabel: "Terracotta / Yellow",
        image: "/images/fan.jpg",
        category: "special",
        description:
          "Decorative fan-shaped blocks that create curved, eye-catching patterns and premium finishes.",
        bestFor: "Hotel entrances, feature walkways, high-end homes",
        reason:
          "Choose Fan pavers when you want a statement entrance or pathway that stands out and adds real visual value to your property.",
      },
      {
        id: "hexagon",
        name: "Hexagon",
        colorLabel: "Grey / Yellow",
        image: "/images/Grey hexagon.jpg",
        category: "hexagon",
        description:
          "Six-sided blocks that form a honeycomb pattern, spreading load evenly and giving a unique geometric look.",
        bestFor: "Walkways, courtyards, estate common areas",
        reason:
          "Choose Hexagon blocks if you want something more decorative than standard interlock but still strong enough for regular foot and light vehicle traffic.",
      },
      {
        id: "mirror",
        name: "Mirror",
        colorLabel: "Red",
        image: "/images/red-brown mirror.jpg",
        category: "special",
        description:
          "Stylish patterned pavers that reflect light and color beautifully, perfect for feature areas.",
        bestFor: "Front porches, verandas, decorative outdoor lounges",
        reason:
          "Choose Mirror blocks when appearance is very important and you want a rich, polished feel for visible areas around your home or business.",
      },
      {
        id: "round-dumble",
        name: "Round Dumble",
        colorLabel: "Red / Yellow",
        image: "/images/Round-Dumble-Paver-Block..jpg",
        category: "dumble-wave",
        description:
          "Soft-edged interlocking blocks that combine strength with a more rounded, friendly look.",
        bestFor: "Play areas, residential driveways, garden paths",
        reason:
          "Choose Round Dumble if you want safe, smooth edges for children and pedestrians while still keeping a strong, interlocking surface.",
      },
      {
        id: "trihex-groove",
        name: "Trihex Groove",
        colorLabel: "Grey",
        image: "/images/Trihex-Charcoal.jpg",
        category: "trihex",
        description:
          "Three-hex pattern with grooves that provide extra grip and a technical, industrial appearance.",
        bestFor: "Heavy-use driveways, apartment parking, estate roads",
        reason:
          "Choose Trihex Groove when you need extra traction in wet conditions and a strong pattern that can handle frequent vehicle movement.",
      },
      {
        id: "trihex-board",
        name: "Trihex Board",
        colorLabel: "Charcoal",
        image: "/images/trihex-broad.avif",
        category: "trihex",
        description:
          "Broad trihex blocks that create a bold, uniform look and excellent load distribution.",
        bestFor: "Large compounds, commercial yards, gated estates",
        reason:
          "Choose Trihex Board if you want a bold, premium look that stays neat over large areas and can work for both homes and commercial projects.",
      },
      {
        id: "trihex-yellow",
        name: "Trihex Yellow",
        colorLabel: "Yellow / Black",
        image: "/images/Trihex-3D-yellow.jpg",
        category: "trihex",
        description:
          "High-contrast trihex pattern that adds color and depth, often used for 3D-style visuals.",
        bestFor: "Feature driveways, marked zones, decorative parking",
        reason:
          "Choose Trihex Yellow if you want your driveway or compound to stand out with a 3D look and clear color separation for directions or bays.",
      },
      {
        id: "unipaver",
        name: "Unipaver (3D)",
        colorLabel: "Grey / Red",
        image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
        category: "unipaver",
        description:
          "Uni-shaped 3D blocks that interlock tightly and can be laid in patterns that show depth and movement.",
        bestFor: "Driveways, commercial fronts, showrooms & petrol stations",
        reason:
          "Choose Unipaver when you want a strong, interlocking surface with a 3D effect that attracts attention and feels high-end.",
      },
      {
        id: "wave",
        name: "Wave",
        colorLabel: "Red / Black",
        image: "/images/WAVE_RED.jpg",
        category: "dumble-wave",
        description:
          "Wave-shaped blocks that create a flowing pattern and reduce straight visible joints.",
        bestFor: "Curved driveways, garden paths, pool surrounds",
        reason:
          "Choose Wave blocks if your project has curves or you want a softer, flowing look rather than straight-line patterns.",
      },
    ],
    []
  );

  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(
    products[0] ?? null
  );
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);

  // ✅ keep your theme but swap accents to brand gold (unchanged)
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Factory-Made Quality",
      description:
        "Consistent strength and uniform sizing for clean, professional finishing.",
      color: "from-[#FFBF00] to-[#E6AC00]",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Variety",
      description:
        "Multiple patterns and color options for homes, estates, and commercial sites.",
      color: "from-[#0A1A2F] to-[#0B2A4A]",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Strong Interlock",
      description:
        "Durable surfaces that stay stable under regular use and vehicle traffic.",
      color: "from-[#FFBF00] to-[#C99600]",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Low Maintenance",
      description:
        "Long service life with simple upkeep and easy replacement of single blocks.",
      color: "from-[#0A1A2F] to-[#132E52]",
    },
  ];

  const filters: { id: Category; label: string; count: number }[] = [
    { id: "all", label: "All Types", count: products.length },
    {
      id: "trihex",
      label: "Trihex",
      count: products.filter((p) => p.category === "trihex").length,
    },
    {
      id: "unipaver",
      label: "Unipaver",
      count: products.filter((p) => p.category === "unipaver").length,
    },
    {
      id: "hexagon",
      label: "Hexagon",
      count: products.filter((p) => p.category === "hexagon").length,
    },
    {
      id: "dumble-wave",
      label: "Dumble & Wave",
      count: products.filter((p) => p.category === "dumble-wave").length,
    },
    {
      id: "brick-cube",
      label: "Brick & Cube",
      count: products.filter((p) => p.category === "brick-cube").length,
    },
    {
      id: "special",
      label: "Special",
      count: products.filter((p) => p.category === "special").length,
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, ${WHITE_BASE}, ${WHITE_TINT})`,
      }}
    >
      {/* soft grid overlay (works better on off-white) */}
      <div className="absolute inset-0 opacity-70">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.28) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1), transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-6 backdrop-blur"
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderColor: "rgba(255,191,0,0.25)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: BRAND_GOLD }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: BRAND_GOLD_DARK }}
            >
              Built for Kenyan Site Conditions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
              }}
            >
              Premium Cabro Patterns
            </span>
            ?
          </h2>

          <p className="text-lg text-gray-700">
            Explore durable, clean-finishing cabro designs suitable for
            residential driveways, estate roads, commercial compounds, and
            walkways.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Features */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl shadow-sm p-6 lg:p-8"
              style={{
                backgroundColor: WHITE_CARD,
                border: `1px solid ${BORDER_SOFT}`,
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Award className="w-6 h-6" style={{ color: BRAND_GOLD_DARK }} />
                Why it performs better
              </h3>

              <div className="space-y-5">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group relative p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all"
                    style={{
                      border: "1px solid rgba(255,191,0,0.22)",
                      backgroundImage:
                        "linear-gradient(135deg, rgba(248,250,252,1), rgba(255,255,255,1))",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-700 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-8 pt-6"
                style={{ borderTop: `1px solid ${BORDER_SOFT}` }}
              >
                <p className="text-sm text-gray-700">
                  Tip: Choose the pattern based on traffic (cars vs walkways),
                  drainage needs, and the look you want.
                </p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl shadow-sm p-6 lg:p-8 h-full"
              style={{
                backgroundColor: WHITE_CARD,
                border: `1px solid ${BORDER_SOFT}`,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg text-white"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                    }}
                  >
                    <Grid className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Pattern Collection
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {products.length}+ patterns and finishes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Filter className="w-4 h-4" />
                  <span>Filter by type</span>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-7">
                {filters.map((filter) => {
                  const isActive = activeCategory === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveCategory(filter.id)}
                      className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white shadow-lg"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                      style={
                        isActive
                          ? {
                              backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                              boxShadow: "0 10px 25px rgba(255,191,0,0.18)",
                            }
                          : {
                              backgroundColor: WHITE_TINT,
                              border: `1px solid ${BORDER_SOFT}`,
                            }
                      }
                      aria-pressed={isActive}
                    >
                      <span className="flex items-center gap-2">
                        {filter.label}
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded-full ${
                            isActive
                              ? "bg-white/20"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {filter.count}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Cards: text only on hover */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <AnimatePresence mode="wait">
                  {filteredProducts.map((product, index) => (
                    <motion.button
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.18, delay: index * 0.02 }}
                      onMouseEnter={() => setHoveredProduct(product)}
                      onClick={() => setPreviewProduct(product)}
                      className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: WHITE_TINT,
                        border: "1px solid rgba(255,191,0,0.22)",
                      }}
                      aria-label={`View details for ${product.name}`}
                    >
                      <div className="relative h-28 sm:h-32 md:h-36">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
                          <div className="rounded-lg border border-white/20 bg-black/55 backdrop-blur px-3 py-2">
                            <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                              {product.name}
                            </h4>
                            <p
                              className="text-[11px] mt-1"
                              style={{ color: BRAND_GOLD }}
                            >
                              {product.colorLabel}
                            </p>

                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-[11px] text-white/85">
                                {prettyCategory(product.category)}
                              </span>
                              <span className="text-[11px] font-semibold text-white inline-flex items-center gap-1">
                                View details <ChevronRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] rounded-full">
                            {prettyCategory(product.category)}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              {/* Active Product Info */}
              {hoveredProduct && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: WHITE_BASE,
                    border: "1px solid rgba(255,191,0,0.28)",
                    backgroundImage: `linear-gradient(90deg, rgba(255,191,0,0.08), rgba(248,250,252,1))`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={hoveredProduct.image}
                        alt={hoveredProduct.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-1"
                        style={{ color: BRAND_GOLD_DARK }}
                      >
                        Pattern Highlight
                      </p>
                      <h4 className="text-lg font-bold text-gray-900">
                        {hoveredProduct.name}
                      </h4>
                      <p className="text-sm text-gray-800 mt-2">
                        {hoveredProduct.description.substring(0, 120)}...
                      </p>
                    </div>
                    <span
                      className="text-white text-xs font-semibold rounded-full px-3 py-1"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                      }}
                    >
                      {hoveredProduct.colorLabel}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {previewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPreviewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: WHITE_CARD }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/55 transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-900 to-gray-800">
                  <Image
                    src={previewProduct.image}
                    alt={previewProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-white text-sm font-semibold rounded-full px-3 py-1"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                      }}
                    >
                      {prettyCategory(previewProduct.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <span
                      className="text-xs font-semibold uppercase tracking-wide mb-2 block"
                      style={{ color: BRAND_GOLD_DARK }}
                    >
                      Cabro Pattern Detail
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {previewProduct.name}
                    </h3>
                    <p className="text-sm text-gray-700">
                      Color:{" "}
                      <span className="font-semibold">
                        {previewProduct.colorLabel}
                      </span>
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Description
                      </h4>
                      <p className="text-gray-800 leading-relaxed">
                        {previewProduct.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Best For
                      </h4>
                      <p className="text-gray-800">{previewProduct.bestFor}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Why Choose This Pattern?
                      </h4>
                      <p className="text-gray-800 leading-relaxed">
                        {previewProduct.reason}
                      </p>
                    </div>
                  </div>

                  <div
                    className="mt-8 pt-6"
                    style={{ borderTop: `1px solid ${BORDER_SOFT}` }}
                  >
                    <button
                      onClick={() => setPreviewProduct(null)}
                      className="w-full px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                      style={{ border: `1px solid ${BORDER_SOFT}` }}
                    >
                      Close
                    </button>
                    <p className="mt-3 text-xs text-gray-600 text-center">
                      Use the floating WhatsApp button for quick assistance.
                    </p>
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
