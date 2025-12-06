"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      application: "Driveways",
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
      application: "Commercial",
      popular: true,
      image: "/images/Hexagon Honeycomb.jpeg",
    },
    {
      id: 3,
      name: "Crown Block",
      category: "cobblestone",
      description: "Decorative crown-shaped blocks for a premium look.",
      thickness: "60mm",
      load: "Heavy",
      colors: ["Red", "Charcoal", "Mixed"],
      application: "Courtyards",
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
      application: "Truck yards",
      popular: true,
      image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
    },
  ];

  const filteredPatterns =
    activeCategory === "all"
      ? patterns
      : patterns.filter((pattern) => pattern.category === activeCategory);

  return (
    <section id="patterns" className="bg-[#FAFAF7] py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-3 md:px-6">
        {/* HEADER */}
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F9F4E5] border border-[#D4A017]/30 px-3.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase text-[#D4A017] tracking-[0.22em]">
              Paving Patterns
            </span>
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Choose Your <span className="text-[#D4A017]">Paving Design</span>
          </h2>

          <p className="text-xs md:text-sm text-slate-600 mt-2">
            Our most requested paving patterns in one place.{" "}
            View more on the{" "}
            <Link
              href="/patterns"
              className="text-[#D4A017] hover:text-[#F0B429] underline"
            >
              Patterns Page
            </Link>
            .
          </p>
        </div>

        {/* FILTERS */}
        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs md:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#D4A017] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID – 2 COLS ON MOBILE, 3/4 ON DESKTOP */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPatterns.map((pattern) => (
            <div
              key={pattern.id}
              className="group relative rounded-xl bg-white border border-gray-200 hover:border-[#D4A017] shadow-sm hover:shadow-lg transition-all"
            >
              {/* POPULAR BADGE */}
              {pattern.popular && (
                <span className="absolute top-2 left-2 z-10 rounded-full bg-[#D4A017] text-[9px] font-semibold text-white px-2 py-0.5">
                  Popular
                </span>
              )}

              {/* IMAGE */}
              <div className="relative h-32 md:h-40 overflow-hidden rounded-t-xl">
                <Image
                  src={pattern.image}
                  alt={pattern.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3">
                <h3 className="font-semibold text-[11px] md:text-sm text-slate-900 group-hover:text-[#D4A017]">
                  {pattern.name}
                </h3>
                <p className="text-[10px] md:text-xs text-slate-600 mt-1 line-clamp-2">
                  {pattern.description}
                </p>

                <div className="flex items-center justify-between mt-3 gap-2">
                  {/* COLORS */}
                  <div className="flex gap-1">
                    {pattern.colors.slice(0, 3).map((color, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-gray-300"
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
                              : "#CCC",
                        }}
                        title={color}
                      />
                    ))}
                  </div>

                  <span className="text-[9px] md:text-[10px] text-slate-500 line-clamp-1 text-right">
                    {pattern.application}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
