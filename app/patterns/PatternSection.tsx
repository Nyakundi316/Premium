"use client";

import { useState } from "react";
import Image from "next/image";

type CategoryId =
  | "all"
  | "interlocking"
  | "hexagonal"
  | "cobblestone"
  | "zigzag"
  | "custom";

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Patterns" },
  { id: "interlocking", label: "Interlocking" },
  { id: "hexagonal", label: "Hexagonal" },
  { id: "cobblestone", label: "Cobblestone" },
  { id: "zigzag", label: "Zig-Zag" },
  { id: "custom", label: "Custom Designs" },
];

const patterns = [
  {
    id: 1,
    name: "Classic Interlock",
    category: "interlocking" as CategoryId,
    image: "/images/Behaton.jpg",
    thickness: "60mm",
    load: "Medium duty",
    application: "Residential driveways & walkways",
  },
  {
    id: 2,
    name: "Heavy-Duty Interlock",
    category: "interlocking" as CategoryId,
    image: "/images/Behaton.jpg", // or another heavy-duty interlock photo
    thickness: "80mm",
    load: "Heavy duty",
    application: "Parking yards & fuel stations",
  },
  {
    id: 3,
    name: "Hexagon Honeycomb",
    category: "hexagonal" as CategoryId,
    image: "/images/Hexagon Honeycomb.jpeg",
    thickness: "60mm",
    load: "Medium duty",
    application: "Compounds, gardens & paths",
  },
  {
    id: 4,
    name: "Cobblestone Finish",
    category: "cobblestone" as CategoryId,
    image: "/images/Colorado shape.jpg",
    thickness: "60mm",
    load: "Medium duty",
    application: "High-end residential & commercial",
  },
  {
    id: 5,
    name: "3D Zig-Zag Block",
    category: "zigzag" as CategoryId,
    image: "/images/zigzag.jpeg",
    thickness: "60–80mm",
    load: "Medium to heavy",
    application: "Roads, yards & parking",
  },
  {
    id: 6,
    name: "Custom Color Mix",
    category: "custom" as CategoryId,
    image: "/images/trihex-red-black-yellow.jpeg", // add your custom mix photo
    thickness: "60–80mm",
    load: "Custom",
    application: "Branded & unique projects",
  },
];

export default function PatternsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredPatterns =
    activeCategory === "all"
      ? patterns
      : patterns.filter((p) => p.category === activeCategory);

  return (
    <section className="py-12 md:py-16 bg-white text-[#0A1A2F]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Paving Block Patterns
            </h2>
            <p className="text-sm mt-1 text-blue-900/70">
              A quick view of the paving block designs we manufacture.
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs md:text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-[#D4A017] border-[#D4A017] text-[#0A1A2F] shadow-md"
                      : "bg-white text-[#0A1A2F] border-blue-900/20 hover:bg-blue-50"
                  }
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cards grid – simplified, image-first */}
        <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-2">
          {filteredPatterns.map((pattern) => (
            <div
              key={pattern.id}
              className="rounded-2xl overflow-hidden border border-blue-900/15 bg-white hover:border-[#D4A017]/70 hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative w-full h-40">
                <Image
                  src={pattern.image}
                  alt={pattern.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white">
                  {pattern.name}
                </div>
              </div>

              {/* Short details */}
              <div className="p-3 space-y-1">
                <p className="text-[11px] uppercase tracking-[0.12em] text-blue-900/60">
                  {pattern.thickness} • {pattern.load}
                </p>
                <p className="text-xs text-blue-900/80">
                  {pattern.application}
                </p>
              </div>
            </div>
          ))}

          {filteredPatterns.length === 0 && (
            <p className="text-sm text-blue-900/70">
              No patterns found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
