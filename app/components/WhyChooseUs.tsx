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
  Grid3X3,
  Filter,
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

const GOLD = "#FFC20E";

function prettyCategory(c: Category) {
  const map: Record<Category, string> = {
    trihex: "Trihex",
    unipaver: "Unipaver",
    hexagon: "Hexagon",
    "dumble-wave": "Dumble & Wave",
    "brick-cube": "Brick & Cube",
    special: "Special",
    all: "All",
  };
  return map[c];
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
        image: "/images/products/cabro/grey.jpeg",
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

  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);

  const features = [
    {
      icon: Award,
      title: "Machine-made, not hand-cast",
      desc: "Every block is the same size. Uniform blocks mean faster laying, tighter joints, and a surface that stays level.",
    },
    {
      icon: Palette,
      title: "12+ patterns to choose from",
      desc: "Dumble, trihex, hexagon, wave and more — each suited to different traffic loads and looks.",
    },
    {
      icon: Shield,
      title: "Replace one block, not everything",
      desc: "Asphalt means resurfacing everything. With cabro, one damaged block comes out and a new one goes in.",
    },
    {
      icon: Clock,
      title: "We don't skip the base",
      desc: "Proper compaction and right sub-base depth keeps the surface from sinking. Most installers cut this corner.",
    },
  ];

  const filters: { id: Category; label: string; count: number }[] = [
    { id: "all", label: "All", count: products.length },
    { id: "trihex", label: "Trihex", count: products.filter((p) => p.category === "trihex").length },
    { id: "unipaver", label: "Unipaver", count: products.filter((p) => p.category === "unipaver").length },
    { id: "hexagon", label: "Hexagon", count: products.filter((p) => p.category === "hexagon").length },
    { id: "dumble-wave", label: "Dumble & Wave", count: products.filter((p) => p.category === "dumble-wave").length },
    { id: "brick-cube", label: "Brick & Cube", count: products.filter((p) => p.category === "brick-cube").length },
    { id: "special", label: "Special", count: products.filter((p) => p.category === "special").length },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white dark:bg-[#0A0C10] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Header + Features row */}
        <div className="mb-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Why Premium Cabro
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-4xl lg:text-[2.75rem]">
              Why the finish actually lasts
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              A badly laid driveway starts cracking within two rainy seasons. Wrong base depth, no edge restraints — it's expensive to fix.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 p-5"
                >
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{ background: i % 2 === 0 ? GOLD : "#0D1B30" }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#0F172A] dark:text-white">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Product catalog */}
        <div className="rounded-3xl border border-slate-100 dark:border-slate-700 bg-[#FAFBFC] dark:bg-slate-800/30 p-5 sm:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: GOLD }}>
                <Grid3X3 size={18} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">Pattern Collection</h3>
                <p className="text-sm text-slate-500">{products.length} patterns and finishes</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Filter size={14} />
              Filter by type
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveCategory(f.id)}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                  activeCategory === f.id
                    ? "text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
                style={activeCategory === f.id ? { background: GOLD } : undefined}
              >
                {f.label}
                <span className={`ml-1.5 text-xs ${activeCategory === f.id ? "text-white/70" : "text-slate-400"}`}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, i) => (
                <motion.button
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                  onClick={() => setPreviewProduct(product)}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white text-left transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-32 sm:h-36 md:h-40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs font-semibold text-white">{product.name}</p>
                      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-white/80">
                        View details <ChevronRight size={12} />
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setPreviewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewProduct(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative h-56 md:h-auto">
                  <Image src={previewProduct.image} alt={previewProduct.name} fill className="object-cover" sizes="50vw" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: GOLD }}>
                      {prettyCategory(previewProduct.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                    Cabro Pattern
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-[#0F172A] dark:text-white">{previewProduct.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">Color: {previewProduct.colorLabel}</p>

                  <p className="mt-4 text-sm leading-6 text-slate-600">{previewProduct.description}</p>

                  <div className="mt-5 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Best For</p>
                      <p className="mt-0.5 text-sm text-slate-700">{previewProduct.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Why This Pattern?</p>
                      <p className="mt-0.5 text-sm leading-6 text-slate-700">{previewProduct.reason}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setPreviewProduct(null)}
                    className="mt-6 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
