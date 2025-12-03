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
};

export default function WhyChooseSection() {
  const products: Product[] = [
    {
      id: "brick-cross-dumble",
      name: "Brick Cross Dumble",
      colorLabel: "Red / Natural",
      image: "/images/Red.jpeg",
      category: "brick-cube",
    },
    {
      id: "cube",
      name: "Cube",
      colorLabel: "Red / Grey",
      image: "/images/cube.jpeg",
      category: "brick-cube",
    },
    {
      id: "dumble",
      name: "Dumble",
      colorLabel: "Red / Charcoal",
      image: "/images/i-shape.jpeg",
      category: "dumble-wave",
    },
    {
      id: "fan",
      name: "Fan",
      colorLabel: "Terracotta / Yellow",
      image: "/images/fan.jpg",
      category: "special",
    },
    {
      id: "hexagon",
      name: "Hexagon",
      colorLabel: "Grey / Yellow",
      image: "/images/Grey hexagon.jpg",
      category: "hexagon",
    },
    {
      id: "mirror",
      name: "Mirror",
      colorLabel: "Red",
      image: "/images/red-brown mirror.jpg",
      category: "special",
    },
    {
      id: "round-dumble",
      name: "Round Dumble",
      colorLabel: "Red / Yellow",
      image: "/images/Round-Dumble-Paver-Block..jpg",
      category: "dumble-wave",
    },
    {
      id: "trihex-groove",
      name: "Trihex Groove",
      colorLabel: "Grey",
      image: "/images/Trihex-Charcoal.jpg",
      category: "trihex",
    },
    {
      id: "trihex-board",
      name: "Trihex Board",
      colorLabel: "Charcoal",
      image: "/images/trihex-broad.avif",
      category: "trihex",
    },
    {
      id: "trihex-yellow",
      name: "Trihex Yellow",
      colorLabel: "Yellow / Black",
      image: "/images/Trihex-3D-yellow.jpg",
      category: "trihex",
    },
    {
      id: "unipaver",
      name: "Unipaver",
      colorLabel: "Grey / Red",
      image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
      category: "unipaver",
    },
    {
      id: "wave",
      name: "Wave",
      colorLabel: "Red / Black",
      image: "/images/WAVE_RED.jpg",
      category: "dumble-wave",
    },
  ];

  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(
    products[0]
  );
  const [activeCategory, setActiveCategory] = useState<Category>("all");

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
    <section
      id="why-choose"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-[#0A1A2F]"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent border border-[#D4A017]/30 px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-sm font-medium tracking-widest text-[#D4A017] uppercase">
              Superior Quality
            </span>
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose{" "}
            <span className="text-[#D4A017]">Premium Paving Blocks?</span>
          </h2>

          <p className="text-xl text-gray-300">
            Strong, durable and beautiful paving solutions crafted with
            precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* LEFT SIDE FEATURES */}
          <div>
            <div className="bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-800 p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">
                Premium Features
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-800/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4A017]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-gray-700 rounded-lg font-semibold text-gray-300 hover:border-[#D4A017]/50 hover:bg-[#D4A017]/10 transition-all"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — PRODUCT GRID + FILTER */}
          <div>
            <div className="bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-800 p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Our Products Collection
                </h3>
                <span className="px-4 py-2 rounded-full bg-[#D4A017]/20 text-[#D4A017] text-sm font-medium">
                  {products.length}+ Types
                </span>
              </div>

              {/* FILTER BAR */}
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.map((filter) => {
                  const isActive = activeCategory === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActiveCategory(filter.id)}
                      className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition-all ${
                        isActive
                          ? "bg-[#D4A017] text-[#0A1A2F] border-[#D4A017]"
                          : "border-gray-700 text-gray-300 hover:border-[#D4A017]/60 hover:text-[#FACC6B]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>

              {/* GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onMouseEnter={() => setHoveredProduct(product)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4A017]/60 transition-all"
                  >
                    {/* IMAGE — disappears on hover */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-300 group-hover:opacity-0 group-hover:scale-95"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* TEXT ON HOVER */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <p className="text-sm font-bold text-[#F7F3DF] drop-shadow-sm">
                        {product.name}
                      </p>
                      <p className="text-xs text-[#FACC6B] mt-1">
                        {product.colorLabel}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* CURRENTLY VIEWING */}
              {hoveredProduct && (
                <div className="mt-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700 flex items-center gap-4">
                  <div className="relative h-16 w-24 rounded-md overflow-hidden">
                    <Image
                      src={hoveredProduct.image}
                      alt={hoveredProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#FACC6B]">
                      Currently Viewing
                    </p>
                    <p className="text-sm text-white font-semibold">
                      {hoveredProduct.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      Color: {hoveredProduct.colorLabel}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR / PATTERN */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative h-24 bg-gradient-to-r from-[#0A1A2F] via-gray-900 to-[#0A1A2F]" />
        </div>
      </div>
    </section>
  );
}
