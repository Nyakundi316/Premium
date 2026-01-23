// app/patterns/page.tsx
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Grid3x3,
  Hexagon,
  Square,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";

type PatternType =
  | "hexagonal"
  | "interlocking"
  | "zigzag"
  | "geometric"
  | "traditional";

type Pattern = {
  id: number;
  name: string;
  type: PatternType;
  use: "residential" | "commercial" | "industrial" | "landscape";
  thickness: string;
  load: "Light" | "Medium" | "Heavy" | "Extra Heavy";
  features: string[];
  image: string;
};

const BRAND_GOLD = "#FFBF00";
const BRAND_GOLD_DARK = "#E6AC00";

// ✅ Fixed type: React.ReactNode (not React.ReactMode)
const patternTypes: {
  id: PatternType | "all";
  label: string;
  icon: React.ReactNode;
}[] = [
  { id: "all", label: "All", icon: <Grid3x3 size={16} /> },
  { id: "hexagonal", label: "Trihex", icon: <Hexagon size={16} /> },
  { id: "interlocking", label: "Uni-Paver", icon: <Grid3x3 size={16} /> },
  { id: "zigzag", label: "Zigzag", icon: <Square size={16} /> },
  { id: "geometric", label: "Square / Plaza", icon: <Square size={16} /> },
  { id: "traditional", label: "Brick Bond", icon: <Shield size={16} /> },
];

// 👉 Use your real images here
const patternsData: Pattern[] = [
  {
    id: 1,
    name: "Trihex Groove – 60mm",
    type: "hexagonal",
    use: "residential",
    thickness: "60mm",
    load: "Medium",
    features: ["Modern look", "Good drainage", "Estate driveways"],
    image: "/images/trihex-red-black-yellow.jpeg",
  },
  {
    id: 2,
    name: "Trihex Broad – 80mm",
    type: "hexagonal",
    use: "industrial",
    thickness: "80mm",
    load: "Heavy",
    features: ["Heavy duty", "Truck yards", "Industrial sites"],
    image: "/images/yellow-trihex.jpeg",
  },
  {
    id: 3,
    name: "Uni-Paver Classic",
    type: "interlocking",
    use: "commercial",
    thickness: "60mm / 80mm",
    load: "Medium",
    features: ["Neat joints", "Large compounds", "Institutions"],
    image: "/images/patterns/unipaver-classic.jpg",
  },
  {
    id: 4,
    name: "Zigzag Heavy Duty",
    type: "zigzag",
    use: "industrial",
    thickness: "80mm",
    load: "Extra Heavy",
    features: ["High load", "Turning trucks", "Busy yards"],
    image: "/images/patterns/zigzag-heavy.jpg",
  },
  {
    id: 5,
    name: "Square Plaza – 400x400",
    type: "geometric",
    use: "landscape",
    thickness: "60mm",
    load: "Light",
    features: ["Courtyards", "Plazas", "Outdoor seating"],
    image: "/images/patterns/square-plaza.jpg",
  },
  {
    id: 6,
    name: "Brick Bond – Rectangular",
    type: "traditional",
    use: "residential",
    thickness: "60mm",
    load: "Medium",
    features: ["Classic look", "Paths", "Verandas"],
    image: "/images/patterns/brick-bond.jpg",
  },
];

export default function PatternsPage() {
  const [typeFilter, setTypeFilter] = useState<PatternType | "all">("all");
  const [search, setSearch] = useState("");
  const [patterns, setPatterns] = useState<Pattern[]>(patternsData);

  useEffect(() => {
    let list = patternsData;

    if (typeFilter !== "all") {
      list = list.filter((p) => p.type === typeFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    setPatterns(list);
  }, [typeFilter, search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* HERO (compact, professional) */}
      <section className="bg-slate-950 text-white border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND_GOLD }}
              />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-slate-300">
                Cabro Patterns Catalogue
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Patterns we{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                  }}
                >
                  manufacture in-house
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                A quick visual guide to the main patterns we supply for
                driveways, yards, compounds and landscapes.
              </p>
            </div>

            {/* Search */}
            <div className="mt-4 max-w-md">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search pattern or use (e.g. driveway, yard)"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/5 border border-white/15 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgba(255,191,0,0.9)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8">
          {/* Top row: label + filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <div className="p-1.5 rounded-full bg-white shadow-sm border border-slate-200">
                <Award size={14} className="text-slate-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900 text-sm">
                  Premium Concrete PM standard patterns
                </span>
                <span className="text-xs text-slate-500">
                  {patternsData.length} core patterns • choose based on traffic
                  + look
                </span>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              {patternTypes.map((t) => {
                const active = typeFilter === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTypeFilter(t.id as PatternType | "all")}
                    className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm border transition-colors whitespace-nowrap ${
                      active
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={
                        active
                          ? "text-[rgba(255,191,0,0.95)]"
                          : "text-slate-500"
                      }
                    >
                      {t.icon}
                    </span>
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {patterns.map((pattern) => (
              <article
                key={pattern.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_8px_25px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_35px_rgba(15,23,42,0.15)] hover:border-[rgba(255,191,0,0.9)] transition-all duration-200"
              >
                {/* IMAGE */}
                <div className="relative h-44 sm:h-48">
                  <Image
                    src={pattern.image}
                    alt={pattern.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                  {/* Bottom info overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <div className="space-y-0.5 text-xs text-white/95">
                      <div className="font-semibold tracking-tight">
                        {pattern.thickness}
                      </div>
                      <div className="text-[11px] uppercase tracking-wide text-white/80">
                        {pattern.load} load
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-semibold tracking-wide text-slate-900">
                      {pattern.use.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* CONTENT (ALL WORDS INSIDE CARD) */}
                <div className="p-4 sm:p-5 space-y-3">
                  {/* Title */}
                  <header className="space-y-1">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {pattern.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100">
                        {pattern.type}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100">
                        {pattern.use}
                      </span>
                    </div>
                  </header>

                  {/* 3 bullets max */}
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {pattern.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span
                          className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: BRAND_GOLD }}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action line (no navigation, just UX hint) */}
                  <button className="w-full mt-2 inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 border border-slate-200 rounded-full py-2 hover:bg-slate-50 transition-colors">
                    Use this pattern for my project
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}

            {patterns.length === 0 && (
              <div className="col-span-full text-center text-sm text-slate-600 py-10">
                No patterns match your filters. Clear search or change type.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
