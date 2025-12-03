"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PatternsGallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Patterns" },
    { id: "interlocking", label: "Interlocking" },
    { id: "hexagonal", label: "Hexagonal" },
    { id: "cobblestone", label: "Cobblestone" },
    { id: "herringbone", label: "Herringbone" },
    { id: "custom", label: "Custom Designs" },
  ];

  const patterns = [
    {
      id: 1,
      name: "Classic Interlock",
      category: "interlocking",
      description: "Rectangular blocks ideal for residential driveways.",
      thickness: "60mm",
      load: "Medium to Heavy",
      colors: ["Charcoal", "Red", "Beige"],
      application: "Residential Driveways",
      popular: true,
      image: "/images/classic interlock.jpeg", 
    },
    {
      id: 2,
      name: "Hexagon Honeycomb",
      category: "hexagonal",
      description: "Modern hexagonal design for contemporary spaces.",
      thickness: "80mm",
      load: "Heavy",
      colors: ["Charcoal", "Grey", "Mixed"],
      application: "Commercial Areas",
      popular: true,
      image: "/images/Hexagon Honeycomb.jpeg",
    },
    {
      id: 3,
      name: "Red best",
      category: "cobblestone",
      description: "Crown shape pave block th best for indoors.",
      load: "Heavy",
      colors: ["Red", "musturd", "Black Charcoal", "Mixed"],
      application: "Driveway , parking",
      image: "/images/Red.jpeg",
    },
    {
      id: 4,
      name: "Zig Zag°",
      category: "Zig Zag",
      description: "Classic pattern with maximum stability for vehicles.",
      thickness: "60mm",
      load: "Very Heavy",
      colors: ["Charcoal", "Red", "Grey"],
      application: "Driveways, Parking",
      popular: true,
      image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
    },
  ];

  const filteredPatterns =
    activeCategory === "all"
      ? patterns
      : patterns.filter((pattern) => pattern.category === activeCategory);

  return (
    <section
      id="patterns"
      className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-[#0A1A2F]"
    >
      <div className="container mx-auto px-2 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent border border-[#D4A017]/30 px-4 py-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-[#D4A017] uppercase">
              Design Portfolio
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Signature <span className="text-[#D4A017]">Paving Patterns</span>
          </h2>

          <p className="text-base md:text-lg text-gray-300">
            A quick glimpse of our most popular paving designs.  
            Explore the full range and technical details on the patterns page.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] shadow-lg shadow-[#D4A017]/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Patterns Grid – Brief Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPatterns.map((pattern) => (
            <div
              key={pattern.id}
              className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4A017]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4A017]/10"
            >
              {/* Popular Badge */}
              {pattern.popular && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-[10px] font-bold">
                    Popular
                  </span>
                </div>
              )}

              {/* IMAGE replaces placeholder */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={pattern.image}
                  alt={pattern.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Pattern Info – Brief */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4A017] transition-colors">
                    {pattern.name}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-800 text-gray-300">
                    {pattern.thickness}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-3">
                  {pattern.description}
                </p>

                <p className="text-xs text-gray-400 mb-3">
                  <span className="text-gray-500">Best for: </span>
                  <span className="text-white font-medium">
                    {pattern.application}
                  </span>
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {pattern.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-3.5 h-3.5 rounded-full border border-gray-700"
                        style={{
                          backgroundColor:
                            color === "Charcoal"
                              ? "#36454F"
                              : color === "Red"
                              ? "#8B0000"
                              : color === "Beige"
                              ? "#F5F5DC"
                              : color === "Grey"
                              ? "#808080"
                              : color === "Brown"
                              ? "#8B4513"
                              : "#6B7280",
                        }}
                        title={color}
                      />
                    ))}
                  </div>

                  <Link
                    href={`/patterns/${pattern.id}`}
                    className="text-xs font-semibold text-[#D4A017] hover:text-[#F0B429] underline-offset-2 hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/patterns"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-semibold text-sm hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
          >
            View Full Patterns Catalogue
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
