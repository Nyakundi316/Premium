"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function WhyChooseSection() {
  const products: Product[] = [
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
  ];

  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(
    products[0]
  );
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);

  const features = [
    {
      icon: "🏗️",
      title: "Premium Materials",
      description:
        "Made from high-grade, durable materials for superior strength.",
    },
    {
      icon: "🎨",
      title: "Variety of Options",
      description:
        "Multiple colors, sizes, and patterns to match your design vision.",
    },
    {
      icon: "⏳",
      title: "Long-Lasting",
      description: "Built to last for years with minimal maintenance.",
    },
    {
      icon: "🛡️",
      title: "Low Maintenance",
      description: "Resistant to weathering, cracking, and fading.",
    },
  ];

  const filters: { id: Category; label: string }[] = [
    { id: "all", label: "All Types" },
    { id: "trihex", label: "Trihex" },
    { id: "unipaver", label: "Unipaver" },
    { id: "hexagon", label: "Hexagon" },
    { id: "dumble-wave", label: "Dumble & Wave" },
    { id: "brick-cube", label: "Brick & Cube" },
    { id: "special", label: "Fan & Mirror" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="why-choose" className="py-16 md:py-24 bg-[#F6F7F9]">
        <div className="container mx-auto px-4 md:px-8">
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/60 px-4 py-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#D4A017] uppercase">
                Superior Quality
              </span>
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Why Choose{" "}
              <span className="text-[#D4A017]">Premium Paving Blocks?</span>
            </h2>

            <p className="text-sm md:text-lg text-gray-600">
              Strong, durable and beautiful paving solutions crafted with
              precision for homes, estates and commercial projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 mb-10 md:mb-12">
            {/* LEFT SIDE FEATURES */}
            <div>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
                  Premium Features
                </h3>

                <div className="space-y-4 md:space-y-5">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-3.5 md:p-4 rounded-xl hover:bg-gray-50 transition-all"
                    >
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#FFF3C4] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-lg md:text-xl">
                          {feature.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm md:text-lg font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 md:mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="inline-flex px-5 md:px-6 py-2.5 md:py-3 border border-gray-300 rounded-lg text-xs md:text-sm font-semibold text-gray-800 hover:border-[#D4A017] hover:bg-[#FFF7E0] transition-all"
                  >
                    Contact Our Experts
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — PRODUCT GRID + FILTER */}
            <div>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 h-full">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Our Products Collection
                  </h3>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#F5F7FA] text-[#A46306] text-xs md:text-sm font-medium border border-[#FACC6B]/70">
                    {products.length}+ Types
                  </span>
                </div>

                {/* FILTER BAR */}
                <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                  {filters.map((filter) => {
                    const isActive = activeCategory === filter.id;
                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveCategory(filter.id)}
                        className={`px-3 py-1.5 rounded-full text-[11px] md:text-sm border text-gray-700 transition-all ${
                          isActive
                            ? "bg-[#D4A017] text-white border-[#D4A017] shadow-sm"
                            : "bg-gray-50 border-gray-300 hover:border-[#D4A017] hover:text-[#A46306]"
                        }`}
                      >
                        {filter.label}
                      </button>
                    );
                  })}
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4 mb-5 md:mb-6">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onMouseEnter={() => setHoveredProduct(product)}
                      onClick={() => setPreviewProduct(product)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 hover:border-[#D4A017]/70 hover:shadow-md transition-all"
                    >
                      {/* Image */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-all duration-300 group-hover:opacity-0 group-hover:scale-95"
                      />

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* TEXT ON HOVER */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all px-2">
                        <p className="text-xs md:text-sm font-bold text-white drop-shadow-sm">
                          {product.name}
                        </p>
                        <p className="text-[10px] md:text-xs text-[#FACC6B] mt-1">
                          {product.colorLabel}
                        </p>
                        <p className="mt-1 text-[9px] md:text-[11px] text-gray-100/90">
                          Best for: {product.bestFor}
                        </p>
                        <p className="mt-1 text-[9px] md:text-[11px] text-gray-100/70">
                          Tap to view details
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* CURRENTLY VIEWING */}
                {hoveredProduct && (
                  <div className="mt-3 md:mt-4 p-4 md:p-5 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-3 md:gap-4">
                    <div className="relative h-14 w-20 md:h-16 md:w-24 rounded-md overflow-hidden bg-gray-100">
                      <Image
                        src={hoveredProduct.image}
                        alt={hoveredProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-wide text-[#A46306] mb-0.5">
                        Currently Viewing
                      </p>
                      <p className="text-sm md:text-base text-gray-900 font-semibold">
                        {hoveredProduct.name}
                      </p>
                      <p className="text-[11px] md:text-xs text-gray-500">
                        Color: {hoveredProduct.colorLabel}
                      </p>
                      <p className="text-[11px] md:text-xs text-gray-600 mt-1">
                        Best for: {hoveredProduct.bestFor}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* THIN DIVIDER */}
          <div className="max-w-6xl mx-auto mt-4 md:mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#FACC6B]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* FULLSCREEN PREVIEW MODAL */}
      {previewProduct && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewProduct(null)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreviewProduct(null);
            }}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              stroke="white"
              fill="none"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE SIDE */}
            <div className="relative w-full md:w-1/2 bg-black">
              <Image
                src={previewProduct.image}
                alt={previewProduct.name}
                width={1600}
                height={1200}
                className="w-full h-full object-contain md:object-cover"
              />
            </div>

            {/* TEXT SIDE */}
            <div className="w-full md:w-1/2 p-5 md:p-7 lg:p-8 flex flex-col gap-3 md:gap-4 overflow-y-auto">
              <div>
                <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#A46306] mb-1">
                  Paving Pattern Detail
                </p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
                  {previewProduct.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-1">
                  Color: <span className="font-medium">{previewProduct.colorLabel}</span>
                </p>
              </div>

              <div>
                <h4 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                  Description
                </h4>
                <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  {previewProduct.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                  Best For
                </h4>
                <p className="text-sm md:text-[15px] text-slate-700">
                  {previewProduct.bestFor}
                </p>
              </div>

              <div className="mt-1">
                <h4 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                  Why Choose This Pattern?
                </h4>
                <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  {previewProduct.reason}
                </p>
              </div>

              <div className="mt-2 flex flex-wrap gap-3 pt-3 border-t border-slate-200">
                <Link
                  href="/quote"
                  onClick={() => setPreviewProduct(null)}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-xs md:text-sm font-semibold rounded-lg shadow-sm hover:shadow-lg hover:shadow-[#FACC6B]/40 transition-all"
                >
                  Get Quote for This Pattern
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setPreviewProduct(null)}
                  className="px-5 py-2.5 border border-slate-300 rounded-lg text-xs md:text-sm font-semibold text-slate-800 hover:border-[#D4A017]/60 hover:bg-[#FFF7E0] transition-all"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
