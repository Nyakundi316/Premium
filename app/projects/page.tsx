"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  CalendarDays,
  Tag,
  ArrowRight,
  Filter,
} from "lucide-react";

/* ---------------- BRAND ---------------- */
const BRAND_GOLD = "#FFBF00";
const BRAND_GOLD_DARK = "#E6AC00";
const BG_FROM = "#EEF2F6";
const BG_TO = "#FFFFFF";

/* ---------------- TYPES ---------------- */
type Category =
  | "all"
  | "cabro"
  | "culverts"
  | "fencing"
  | "kerbs"
  | "drainage"
  | "retaining-walls";

type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "all">;
  location: string;
  date: string; // e.g. "Jan 2026"
  scope: string; // one-line summary
  highlights: string[];
  cover: string; // image path
  gallery: string[]; // image paths
  tags: string[];
};

/* ---------------- DATA (EDIT THESE) ---------------- */
const PROJECTS: Project[] = [
  {
    id: "proj-001",
    title: "Premium Cabro Driveway Installation",
    category: "cabro",
    location: "Ruiru, Kiambu",
    date: "Jan 2026",
    scope: "60mm cabro driveway with clean edging and drainage fall.",
    highlights: ["60mm cabro", "Neat finishing", "Proper edge restraint"],
    cover: "/images/projects/driveway-ruiru-cover.jpg",
    gallery: [
      "/images/projects/driveway-ruiru-1.jpg",
      "/images/projects/driveway-ruiru-2.jpg",
      "/images/projects/driveway-ruiru-3.jpg",
    ],
    tags: ["Residential", "Cabro", "Driveway"],
  },
  {
    id: "proj-002",
    title: "Road Drainage Culverts + Kerbs",
    category: "drainage",
    location: "Nairobi",
    date: "Dec 2025",
    scope: "Reinforced concrete culverts installed for stormwater management.",
    highlights: ["Reinforced culverts", "Stone pitching", "Kerb alignment"],
    cover: "/images/projects/culverts-nairobi-cover.jpg",
    gallery: [
      "/images/projects/culverts-nairobi-1.jpg",
      "/images/projects/culverts-nairobi-2.jpg",
      "/images/projects/culverts-nairobi-3.jpg",
    ],
    tags: ["Infrastructure", "Culverts", "Drainage"],
  },
  {
    id: "proj-003",
    title: "Farm Perimeter Fencing (Concrete Posts)",
    category: "fencing",
    location: "Machakos",
    date: "Nov 2025",
    scope: "Concrete fencing posts installed with chain-link and barbed wire.",
    highlights: ["Concrete posts", "Chain-link", "Durable perimeter"],
    cover: "/images/projects/farm-fencing-cover.jpg",
    gallery: [
      "/images/projects/farm-fencing-1.jpg",
      "/images/projects/farm-fencing-2.jpg",
      "/images/projects/farm-fencing-3.jpg",
    ],
    tags: ["Farm", "Fencing", "Security"],
  },
];

/* ---------------- PAGE ---------------- */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [active, setActive] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "cabro", label: "Cabro" },
    { id: "culverts", label: "Culverts" },
    { id: "drainage", label: "Drainage" },
    { id: "kerbs", label: "Kerbs" },
    { id: "fencing", label: "Fencing" },
    { id: "retaining-walls", label: "Retaining Walls" },
  ];

  const filtered = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      className="min-h-screen py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${BG_FROM}, ${BG_TO})`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* HERO */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-1.5 mb-4">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: BRAND_GOLD }}
            />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-700">
              Portfolio
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
              }}
            >
              Projects
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl">
            A showcase of cabro installations, culverts, fencing posts, drainage
            works and other concrete solutions delivered with clean finishing.
          </p>

          {/* Small CTA row (not busy) */}
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition"
            >
              Request Quotation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 bg-white/70 border border-gray-200 hover:bg-white transition"
            >
              View Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            Filter by category
          </div>

          <div className="inline-flex flex-wrap gap-2 bg-white/80 p-1.5 rounded-full border border-gray-200">
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${
                    isActive
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-transparent text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, index) => (
            <motion.button
              key={p.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              onClick={() => {
                setActive(p);
                setActiveImage(p.cover);
              }}
              className="group w-full text-left rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-white font-semibold truncate">
                      {p.title}
                    </p>
                    <p className="text-white/85 text-xs truncate">
                      {p.location} • {p.date}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-[10px] sm:text-xs font-semibold text-gray-900">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-700 line-clamp-2">{p.scope}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={`${p.id}-${t}`}
                      className="inline-flex items-center gap-1 rounded-full bg-gray-100 text-gray-700 px-2 py-1 text-[11px]"
                    >
                      <Tag className="w-3 h-3" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActive(null);
              setActiveImage(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => {
                  setActive(null);
                  setActiveImage(null);
                }}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
                aria-label="Close project"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Large image */}
                <div className="relative h-64 sm:h-80 lg:h-[520px] bg-black">
                  <Image
                    src={activeImage || active.cover}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {active.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-600">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {active.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        {active.date}
                      </span>
                    </div>

                    <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {active.scope}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {active.highlights.map((h) => (
                      <div
                        key={h}
                        className="rounded-xl bg-gray-50 border border-gray-100 p-3 text-sm text-gray-800"
                      >
                        {h}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 mb-3">
                    Gallery (tap thumbnails)
                  </p>

                  <div className="grid grid-cols-4 gap-2">
                    {[active.cover, ...active.gallery].slice(0, 8).map((src) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveImage(src)}
                        className={`relative aspect-square rounded-xl overflow-hidden border transition ${
                          activeImage === src
                            ? "border-gray-900"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <Image
                          src={src}
                          alt="Project image"
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center w-full sm:w-auto rounded-full px-5 py-2.5 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition"
                    >
                      Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
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
