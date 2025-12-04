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
      description: "Clean rectangular finish for driveways & estates.",
      thickness: "60mm",
      load: "Medium – Heavy",
      colors: ["Charcoal", "Red", "Beige"],
      application: "Residential driveways",
      popular: true,
      image: "/images/classic interlock.jpeg",
    },
    {
      id: 2,
      name: "Hexagon Honeycomb",
      category: "hexagonal",
      description: "Modern hexagonal layout for courtyards & walkways.",
      thickness: "80mm",
      load: "Heavy",
      colors: ["Charcoal", "Grey", "Mixed"],
      application: "Commercial spaces",
      popular: true,
      image: "/images/Hexagon Honeycomb.jpeg",
    },
    {
      id: 3,
      name: "Crown Block",
      category: "cobblestone",
      description: "Decorative crown-shaped blocks for premium look.",
      thickness: "60mm",
      load: "Heavy",
      colors: ["Red", "Charcoal", "Mixed"],
      application: "Indoor courtyards, parking",
      popular: false,
      image: "/images/Red.jpeg",
    },
    {
      id: 4,
      name: "Zig Zag Heavy Duty",
      category: "cobblestone",
      description: "Maximum stability for vehicles and heavy loads.",
      thickness: "60mm",
      load: "Very Heavy",
      colors: ["Charcoal", "Red", "Grey"],
      application: "Truck yards & parking",
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
      className="bg-gradient-to-b from-gray-900 to-[#0A1A2F] py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-3 md:px-6">
        {/* HEADER */}
        <div className="mx-auto mb-8 md:mb-10 max-w-xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent border border-[#D4A017]/30 px-3.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[10px] md:text-[11px] font-medium tracking-[0.22em] text-[#D4A017] uppercase">
              Paving Patterns
            </span>
          </span>

          <h2 className="mb-2 text-2xl md:text-3xl font-bold text-white leading-snug">
            Choose Your{" "}
            <span className="text-[#D4A017]">Paving Design</span>
          </h2>

          <p className="text-xs md:text-sm text-gray-300">
            Our most requested paving patterns in one place.  
            See more details on the{" "}
            <Link
              href="/patterns"
              className="text-[#D4A017] hover:text-[#F0B429] underline-offset-2 hover:underline"
            >
              full patterns page
            </Link>
            .
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="mb-7 md:mb-9 flex flex-wrap justify-center gap-2.5 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-3 py-1.5 md:px-4 md:py-1.5 text-[11px] md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] shadow-lg shadow-[#D4A017]/25"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-800 border border-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* GRID – ALWAYS 2 COLUMNS ON MOBILE */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-6">
          {filteredPatterns.map((pattern) => (
            <div
              key={pattern.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-800 transition-all duration-300 hover:border-[#D4A017]/50 hover:shadow-2xl hover:shadow-[#D4A017]/15"
            >
              {/* POPULAR BADGE */}
              {pattern.popular && (
                <div className="absolute left-2 top-2 z-10">
                  <span className="rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#0A1A2F]">
                    Popular
                  </span>
                </div>
              )}

              {/* IMAGE */}
              <div className="relative h-28 xs:h-32 sm:h-36 md:h-40 overflow-hidden">
                <Image
                  src={pattern.image}
                  alt={pattern.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-3 md:p-4">
                <div className="mb-1.5 flex items-start justify-between gap-2">
                  <h3 className="text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold leading-snug text-white transition-colors group-hover:text-[#D4A017]">
                    {pattern.name}
                  </h3>
                  {pattern.thickness && (
                    <span className="whitespace-nowrap rounded-full bg-gray-800 px-2 py-0.5 text-[9px] md:text-[11px] font-semibold text-gray-300">
                      {pattern.thickness}
                    </span>
                  )}
                </div>

                <p className="mb-2 line-clamp-2 text-[10px] xs:text-[11px] md:text-xs text-gray-400">
                  {pattern.description}
                </p>

                <div className="mt-1 flex items-center justify-between gap-2">
                  {/* COLOUR DOTS */}
                  <div className="flex items-center gap-1.5">
                    {pattern.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="h-3 w-3 md:h-3.5 md:w-3.5 rounded-full border border-gray-700"
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
                              : "#6B7280",
                        }}
                        title={color}
                      />
                    ))}
                  </div>

                  <span className="line-clamp-1 text-right text-[9px] xs:text-[10px] md:text-[11px] text-gray-400">
                    {pattern.application}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA – SMALLER ON MOBILE */}
        <div className="mt-8 md:mt-10 text-center">
          <Link
            href="/patterns"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
          >
            View Full Patterns Catalogue
            <span className="text-sm md:text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
