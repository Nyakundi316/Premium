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
    <section id="why-choose" className="py-16 md:py-24 bg-[#F5F7FA]">
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
                      <span className="text-lg md:text-xl">{feature.icon}</span>
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
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 hover:border-[#D4A017]/70 hover:shadow-md transition-all"
                  >
                    {/* Image fades out on hover */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-300 group-hover:opacity-0 group-hover:scale-95"
                    />

                    {/* Light overlay when hovered */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* TEXT ON HOVER */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <p className="text-xs md:text-sm font-bold text-white drop-shadow-sm">
                        {product.name}
                      </p>
                      <p className="text-[10px] md:text-xs text-[#FACC6B] mt-1">
                        {product.colorLabel}
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
                    <p className="text-[10px] md:text-xs uppercase tracking-wide text-[#A46306]">
                      Currently Viewing
                    </p>
                    <p className="text-sm md:text-base text-gray-900 font-semibold">
                      {hoveredProduct.name}
                    </p>
                    <p className="text-[11px] md:text-xs text-gray-500">
                      Color: {hoveredProduct.colorLabel}
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
  );
}
