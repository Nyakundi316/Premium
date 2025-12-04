// app/patterns/page.tsx
"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

type CategoryId =
  | "all"
  | "interlocking"
  | "hexagonal"
  | "cobblestone"
  | "zigzag"
  | "custom";

type Pattern = {
  id: number;
  name: string;
  category: Exclude<CategoryId, "all"> | string;
  description?: string;
  thickness?: string;
  load?: string;
  colors?: string[];
  application?: string;
  popular?: boolean;
  image: string; // URL from backend or /public
};

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Patterns" },
  { id: "interlocking", label: "Interlocking" },
  { id: "hexagonal", label: "Hexagonal" },
  { id: "cobblestone", label: "Cobblestone" },
  { id: "zigzag", label: "Zig Zag" },
  { id: "custom", label: "Custom Designs" },
];

// 🔹 Static seed patterns (your images + a few more)
const defaultPatterns: Pattern[] = [
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
    image: "/images/patterns/classic-interlock.jpg",   // ← ADD THIS
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
    image: "/images/patterns/hexagon-honeycomb.jpg",   // ← ADD THIS
  },
  {
    id: 3,
    name: "Old World Cobble",
    category: "cobblestone",
    description: "Rounded cobblestone look for classic outdoor spaces.",
    thickness: "100mm",
    load: "Heavy",
    colors: ["Grey", "Brown", "Mixed"],
    application: "Historic Areas, Gardens",
    image: "/images/patterns/old-world-cobble.jpg",    // ← ADD THIS
  },
  {
    id: 4,
    name: "Herringbone 90°",
    category: "herringbone",
    description: "Classic pattern with maximum stability for vehicles.",
    thickness: "60mm",
    load: "Very Heavy",
    colors: ["Charcoal", "Red", "Grey"],
    application: "Driveways, Parking",
    popular: true,
    image: "/images/patterns/herringbone-90.jpg",      // ← ADD THIS
  },

  {
    id: 5,
    name: "Industrial Zig Zag",
    category: "zigzag",
    description: "Zig zag blocks designed for industrial and heavy truck yards.",
    thickness: "80mm",
    load: "Very Heavy",
    colors: ["Charcoal", "Grey"],
    application: "Truck Yards, Industrial Sites",
    popular: true,
    image: "/images/patterns/zigzag-industrial.jpg",
  },
  {
    id: 6,
    name: "Custom Mosaic Mix",
    category: "custom",
    description: "Mixed colour layout for statement courtyards and feature areas.",
    thickness: "60mm",
    load: "Medium",
    colors: ["Charcoal", "Red", "Beige", "Grey"],
    application: "Courtyards, Entrances, Features",
    image: "/images/patterns/custom-mosaic.jpg",
  },
];

export default function PatternsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [patterns, setPatterns] = useState<Pattern[]>(defaultPatterns);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form state for new pattern
  const [newPattern, setNewPattern] = useState({
    name: "",
    category: "interlocking",
    thickness: "",
    load: "",
    application: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Fetch patterns from backend (if available)
  useEffect(() => {
    const fetchPatterns = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/patterns");
        if (!res.ok) {
          // If API fails, just fall back to defaultPatterns
          setPatterns(defaultPatterns);
          setError(null);
          return;
        }
        const data = await res.json();
        // If backend returns empty, keep the defaults
        setPatterns(data.length ? data : defaultPatterns);
        setError(null);
      } catch (err) {
        console.error(err);
        // On error, still show default patterns
        setPatterns(defaultPatterns);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPatterns();
  }, []);

  const filteredPatterns =
    activeCategory === "all"
      ? patterns
      : patterns.filter((pattern) => pattern.category === activeCategory);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewPattern((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setImageFile(e.target.files[0]);
  };

  const handleAddPattern = async (e: FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      setError("Please select an image for the pattern.");
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const formData = new FormData();
      formData.append("name", newPattern.name);
      formData.append("category", newPattern.category);
      formData.append("thickness", newPattern.thickness);
      formData.append("load", newPattern.load);
      formData.append("application", newPattern.application);
      formData.append("image", imageFile);

      const res = await fetch("/api/patterns", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to add pattern");
      }

      const created: Pattern = await res.json();
      setPatterns((prev) => [created, ...prev]);

      // reset form + close modal
      setNewPattern({
        name: "",
        category: "interlocking",
        thickness: "",
        load: "",
        application: "",
      });
      setImageFile(null);
      setIsFormOpen(false);
    } catch (err) {
      console.error(err);
      setError("Could not save pattern. Please check your backend.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#f9f8f5]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Page header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#f59e0b] uppercase mb-3">
            Paving Patterns
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight mb-4">
            Explore Our{" "}
            <span className="text-gradient">Premium Paving Designs</span>
          </h1>
          <p className="text-sm md:text-base text-slate-700">
            Visual catalogue of our paving blocks. Each pattern is available in
            different thicknesses & colours for residential, commercial and
            industrial projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3.5 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] shadow-md shadow-[#D4A017]/25"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#D4A017]/50 hover:bg-[#fffaf0]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Error / loading */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="py-10 text-center text-slate-500 text-sm">
            Loading patterns…
          </div>
        ) : filteredPatterns.length === 0 ? (
          <div className="py-10 text-center text-slate-500 text-sm">
            No patterns found in this category yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
            {filteredPatterns.map((pattern) => (
              <article
                key={pattern.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#D4A017]/60 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Popular badge */}
                {pattern.popular && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-[10px] font-bold uppercase tracking-wide">
                      Popular
                    </span>
                  </div>
                )}

                {/* IMAGE – taller now */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={pattern.image}
                    alt={pattern.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                  {/* Block type & specs on top of image */}
                  <div className="absolute bottom-3 left-4 right-4 flex flex-col gap-1 text-xs text-white">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium capitalize">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429]" />
                        {pattern.category}
                      </span>
                      {pattern.thickness && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[11px]">
                          {pattern.thickness}
                        </span>
                      )}
                    </div>
                    {pattern.load && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-2 py-1 text-[10px]">
                        Load: {pattern.load}
                      </span>
                    )}
                  </div>
                </div>

                {/* Minimal content under image */}
                <div className="p-4 space-y-2">
                  <h2 className="text-base md:text-lg font-semibold text-[#1e3a8a] group-hover:text-[#D4A017] transition-colors">
                    {pattern.name}
                  </h2>

                  {pattern.application && (
                    <p className="text-xs text-slate-600">
                      <span className="font-semibold text-slate-700">
                        Best for:{" "}
                      </span>
                      {pattern.application}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    {/* colour dots */}
                    <div className="flex items-center gap-1.5">
                      {(pattern.colors || []).slice(0, 4).map((color, index) => (
                        <div
                          key={index}
                          className="w-3.5 h-3.5 rounded-full border border-slate-300"
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
                                : color.toLowerCase().includes("mustard")
                                ? "#f59e0b"
                                : "#6B7280",
                          }}
                          title={color}
                        />
                      ))}
                    </div>

                    <Link
                      href={`/patterns/${pattern.id}`}
                      className="text-[11px] font-semibold text-[#D4A017] hover:text-[#F0B429] underline-offset-2 hover:underline"
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Admin card: open modal form */}
        <div className="mt-4 md:mt-6">
          <div className="rounded-2xl border border-dashed border-slate-300 bg白/80 p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-[#1e3a8a] mb-1">
                Add a New Pattern (Admin)
              </h2>
              <p className="text-xs md:text-sm text-slate-600 max-w-md">
                Upload a new paving block design. You’ll add the image and basic
                info, and it will automatically appear in this gallery once
                saved.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] px-5 py-2.5 text-xs md:text-sm font-semibold text-[#0A1A2F] shadow-sm hover:shadow-md hover:shadow-[#D4A017]/30 transition-all"
            >
              + Add New Pattern
            </button>
          </div>
        </div>
      </div>

      {/* Modal with form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl p-5 md:p-6 relative">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold text-[#1e3a8a] mb-1">
              Add New Paving Pattern
            </h3>
            <p className="text-xs md:text-sm text-slate-600 mb-4">
              Fill in the details below and upload a clear image of the block or
              installed paving.
            </p>

            <form
              onSubmit={handleAddPattern}
              className="grid gap-4 text-sm md:grid-cols-2"
            >
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Pattern Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newPattern.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-[#D4A017]"
                    placeholder="e.g. Classic Interlock"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={newPattern.category}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-[#D4A017]"
                  >
                    {categories
                      .filter((c) => c.id !== "all")
                      .map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.label}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Thickness
                    </label>
                    <input
                      type="text"
                      name="thickness"
                      value={newPattern.thickness}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-[#D4A017]"
                      placeholder="e.g. 60mm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Load
                    </label>
                    <input
                      type="text"
                      name="load"
                      value={newPattern.load}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-[#D4A017]"
                      placeholder="e.g. Heavy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Best For / Application
                  </label>
                  <input
                    type="text"
                    name="application"
                    value={newPattern.application}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-[#D4A017]"
                    placeholder="e.g. Driveways, parking, courtyards"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Pattern Image *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full text-xs md:text-sm file:mr-3 file:rounded-full file:border-0 file:bg-[#D4A017] file:px-3 file:py-1.5 file:text-[11px] file:font-semibold file:text-[#0A1A2F] file:hover:bg-[#c19113]"
                  />
                  <p className="mt-1 text-[11px] text-slate-500">
                    JPEG/PNG recommended. Use a clear, well-lit photo.
                  </p>
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] px-4 py-2.5 text-xs md:text-sm font-semibold text-[#0A1A2F] shadow-sm hover:shadow-md hover:shadow-[#D4A017]/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {submitting ? "Saving pattern…" : "Save Pattern"}
                  </button>
                  <p className="mt-2 text-[11px] text-slate-500">
                    After saving, you’ll see the new pattern at the top of the
                    gallery.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
