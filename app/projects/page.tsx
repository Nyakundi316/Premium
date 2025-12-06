"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [activeBlockFilter, setActiveBlockFilter] = useState("all");
  const [selectedBlock, setSelectedBlock] = useState<any | null>(null);

  const categories = [
    { id: "all", label: "All Projects", count: 24 },
    { id: "residential", label: "Residential", count: 12 },
    { id: "commercial", label: "Commercial", count: 8 },
    { id: "industrial", label: "Industrial", count: 4 },
    { id: "public", label: "Public Spaces", count: 6 },
    { id: "driveways", label: "Driveways", count: 14 },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Driveway",
      category: "residential",
      location: "Karen, Nairobi",
      size: "450 sqm",
      pattern: "Interlocking Cobblestone",
      color: "Red & Black,yellow",
      completion: "Jan 2024",
      description:
        "Premium residential driveway with custom border design and integrated drainage system.",
      features: [
        "Custom border",
        "Integrated drainage",
        "LED lighting",
        "10-year warranty",
      ],
      image: "/images/trihex-broad.avif",
      imageAlt:
        "Luxury villa driveway in Karen, Nairobi with charcoal and beige interlocking cobblestone paving blocks and custom border edging.",
      featured: true,
    },
    {
      id: 2,
      title: "Shopping Mall Parking",
      category: "commercial",
      location: "Westlands, Nairobi",
      size: "2,500 sqm",
      pattern: "Heavy-Duty Interlock",
      color: "Charcoal Grey",
      completion: "Dec 2023",
      description:
        "Large commercial parking area designed for heavy vehicle traffic with superior load capacity.",
      features: [
        "Heavy-duty 80mm blocks",
        "Traffic flow markings",
        "Slip-resistant surface",
        "Maintenance-free",
      ],
      image: "/images/Parking Lot.jpeg",
      imageAlt:
        "Shopping mall parking area finished with charcoal grey heavy-duty interlocking paving blocks and traffic markings.",
      featured: true,
    },
    {
      id: 3,
      title: "Factory Yard Paving",
      category: "industrial",
      location: "Industrial Area, Nairobi",
      size: "3,000 sqm",
      pattern: "Industrial Zig-Zag",
      color: "Standard Grey",
      completion: "Nov 2023",
      description:
        "Industrial yard paving with 100mm blocks capable of supporting heavy machinery.",
      features: [
        "100mm thickness",
        "Heavy machinery support",
        "Chemical resistant",
        "Quick installation",
      ],
      image: "/images/interlockers-1.jpg",
      imageAlt:
        "Industrial factory yard with standard grey zig-zag paving blocks designed for heavy trucks and machinery.",
    },
    {
      id: 4,
      title: "Gated Community Walkways",
      category: "residential",
      location: "Runda, Nairobi",
      size: "800 sqm",
      pattern: "Hexagonal Pattern",
      color: "Mixed Colors",
      completion: "Oct 2023",
      description:
        "Community walkways with decorative patterns enhancing the neighborhood aesthetic.",
      features: [
        "Decorative pattern",
        "Child-friendly surface",
        "Eco-friendly material",
        "Quick drainage",
      ],
      image: "/images/i-shape.jpeg",
      imageAlt:
        "Colorful hexagonal paving block walkway in a gated community, bordered by landscaped gardens.",
    },
    {
      id: 5,
      title: "Hotel Pool Surround",
      category: "commercial",
      location: "Mombasa Road, Nairobi",
      size: "600 sqm",
      pattern: "Anti-Slip 3D Blocks",
      color: "Sandstone & Blue",
      completion: "Sep 2023",
      description:
        "Safety-focused pool area paving with anti-slip surface and decorative design.",
      features: [
        "Anti-slip surface",
        "Heat resistant",
        "Quick drying",
        "Easy cleaning",
      ],
      image: "/images/Colorado shape.jpg",
      imageAlt:
        "Hotel swimming pool surround finished with sandstone and blue anti-slip paving blocks.",
      featured: true,
    },
    {
      id: 6,
      title: "School Playground",
      category: "public",
      location: "Kiambu Road",
      size: "1,200 sqm",
      pattern: "Multi-Color Pattern",
      color: "Bright Colors",
      completion: "Aug 2023",
      description:
        "Vibrant playground surface combining safety with educational patterns and games.",
      features: [
        "Educational patterns",
        "Impact absorbing",
        "Bright colors",
        "Low maintenance",
      ],
      image: "/images/Arrow-pavers.png",
      imageAlt:
        "Colorful paved school playground with bright multi-color block patterns and play markings.",
    },
  ];

  const stats = {
    completed: projects.length,
    totalSqm: projects.reduce((sum, project) => {
      const num = parseInt(project.size);
      return sum + (isNaN(num) ? 0 : num);
    }, 0),
    locations: new Set(projects.map((p) => p.location)).size,
    averageCompletion: "5 days",
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          if (activeFilter === "driveways") {
            return project.title.toLowerCase().includes("driveway");
          }
          return project.category === activeFilter;
        });

  const blockFilters = [
    { id: "all", label: "All Types" },
    { id: "heavy", label: "Heavy Duty" },
    { id: "medium", label: "Medium Duty" },
    { id: "decorative", label: "Decorative" },
    { id: "edging", label: "Kerbs & Edging" },
  ];

  const blockTypes = [
    {
      id: "zigzag",
      name: "Zig-Zag Block",
      image: "/images/3D-zigzag.jpg",
      thickness: "60mm / 80mm / 100mm",
      load: "Heavy Duty",
      segment: "heavy",
      colors: "Red, Charcoal, Grey, Yellow",
      bestFor: "Industrial yards, main driveways, high-traffic areas",
    },
    {
      id: "interlocking",
      name: "Interlocking Block",
      image: "/images/interlocking.jpeg",
      thickness: "60mm / 80mm",
      load: "Medium Duty",
      segment: "medium",
      colors: "Red, Charcoal, Grey",
      bestFor: "Residential driveways, parking, courtyards",
    },
    {
      id: "rectangular",
      name: "Rectangular Paver",
      image: "/images/Clay-paving-blocks.jpg",
      thickness: "50mm / 60mm",
      load: "Light – Medium Duty",
      segment: "medium",
      colors: "Red, Charcoal, Yellow",
      bestFor: "Patios, walkways, light traffic areas",
    },
    {
      id: "square",
      name: "Square Paver",
      image: "/images/landscape_pool_kerbstone.jpg",
      thickness: "60mm",
      load: "Medium Duty",
      segment: "medium",
      colors: "Red, Charcoal, Grey",
      bestFor: "Outdoor seating areas, plazas, paths",
    },
    {
      id: "cobblestone",
      name: "Cobblestone Block",
      image: "/images/cobblestone.png",
      thickness: "60mm",
      load: "Light – Medium Duty",
      segment: "decorative",
      colors: "Mixed Colors",
      bestFor: "Decorative driveways, garden paths, accents",
    },
    {
      id: "hexagon",
      name: "Hexagonal Block",
      image: "/images/hexa deco.jpg",
      thickness: "60mm",
      load: "Medium Duty",
      segment: "decorative",
      colors: "Grey, Red, Charcoal",
      bestFor: "Walkways, courtyards, public spaces",
    },
    {
      id: "three-stone",
      name: "Three-Stone Pattern",
      image: "/images/shop paves.jpeg",
      thickness: "60mm",
      load: "Light Duty",
      segment: "decorative",
      colors: "Grey, Dual-Color",
      bestFor: "Play areas, decorative zones, plazas",
    },
    {
      id: "3d-block",
      name: "3D Paving Block",
      image: "/images/3D.jpg",
      thickness: "60mm",
      load: "Light – Medium Duty",
      segment: "decorative",
      colors: "Blue, Sandstone, White",
      bestFor: "Pools, outdoor lounges, feature zones",
    },
    {
      id: "kerbstone",
      name: "Kerbstone",
      image: "/images/fan.jpeg",
      thickness: "Heavy Grade",
      load: "High Duty",
      segment: "edging",
      colors: "Grey",
      bestFor: "Edge restraint for roads, driveways & flower beds",
    },
  ];

  const filteredBlockTypes =
    activeBlockFilter === "all"
      ? blockTypes
      : blockTypes.filter((b) => b.segment === activeBlockFilter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 md:pt-32">
      <main className="container mx-auto px-4 pb-12 md:pb-16 max-w-6xl lg:max-w-7xl">
        {/* ---------------------- HEADER ---------------------- */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A46306]">
              Our Portfolio
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Completed{" "}
            <span className="text-[#D4A017]">Paving Projects</span>
          </h1>

          <p className="text-sm md:text-base text-slate-600 mb-8">
            Browse through our portfolio of paving installations across Nairobi
            and surrounding areas — driveways, parking lots, pool areas and
            more.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="text-2xl font-bold text-[#D4A017]">
                {stats.completed}+
              </div>
              <div className="text-xs md:text-sm text-slate-600">
                Projects
              </div>
            </div>
            <div className="text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="text-2xl font-bold text-[#D4A017]">
                {stats.totalSqm.toLocaleString()}+
              </div>
              <div className="text-xs md:text-sm text-slate-600">
                Sqm Installed
              </div>
            </div>
            <div className="text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="text-2xl font-bold text-[#D4A017]">
                {stats.locations}
              </div>
              <div className="text-xs md:text-sm text-slate-600">
                Locations
              </div>
            </div>
            <div className="text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="text-2xl font-bold text-[#D4A017]">
                {stats.averageCompletion}
              </div>
              <div className="text-xs md:text-sm text-slate-600">
                Avg Duration
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- FILTERS & VIEW TOGGLE ---------------- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3.5 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#D4A017]/40 hover:text-[#A46306]"
                }`}
              >
                {category.label}
                <span className="ml-1.5 text-[10px] opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-xs md:text-sm">View:</span>
            <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "grid"
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "list"
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- PROJECTS GRID / LIST ---------------- */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#D4A017]/60 transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[10px] md:text-xs font-bold text-[#0A1A2F] shadow-sm">
                      Featured
                    </span>
                  </div>
                )}

                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 text-[10px] md:text-xs font-medium capitalize text-slate-700 border border-slate-200 shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="relative h-32 sm:h-40 md:h-44 lg:h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-1 group-hover:text-[#D4A017] transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 mb-2">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="truncate">{project.location}</span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                        Size
                      </p>
                      <p className="font-medium text-slate-900">
                        {project.size}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                        Completed
                      </p>
                      <p className="font-medium text-slate-900">
                        {project.completion}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                        Pattern
                      </p>
                      <p className="font-medium text-slate-900 truncate">
                        {project.pattern}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                        Colour
                      </p>
                      <p className="font-medium text-slate-900 truncate">
                        {project.color}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl border border-slate-200 hover:border-[#D4A017]/60 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 h-40 md:h-auto relative flex-shrink-0 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[10px] md:text-xs font-bold text-[#0A1A2F] shadow-sm">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base md:text-xl font-semibold text-slate-900 mb-1 md:mb-2 group-hover:text-[#D4A017] transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-500 mb-2">
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {project.completion}
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] md:text-xs font-medium capitalize self-start">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 mb-4">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                          Size
                        </p>
                        <p className="font-medium text-slate-900">
                          {project.size}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                          Pattern
                        </p>
                        <p className="font-medium text-slate-900">
                          {project.pattern}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                          Colour
                        </p>
                        <p className="font-medium text-slate-900">
                          {project.color}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                          Duration
                        </p>
                        <p className="font-medium text-slate-900">
                          5 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ---------------- EMPTY STATE ---------------- */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
              No Projects Found
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              No projects match the selected filter. Try viewing all projects.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="px-6 py-3 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-sm font-semibold rounded-lg shadow-sm hover:shadow-lg hover:shadow-[#FACC6B]/40 transition-all"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* =========================================================== */}
        {/*                   BLOCK TYPES SECTION                       */}
        {/* =========================================================== */}

        <section className="mt-16 md:mt-20">
          <div className="max-w-6xl mx-auto rounded-3xl bg-slate-100 border border-slate-200 px-4 py-8 md:px-8 md:py-10">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-4 py-1 mb-4">
                <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#A46306]">
                  Paving Block Types
                </span>
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                Our <span className="text-[#D4A017]">Paving Blocks</span>
              </h2>

              <p className="text-sm md:text-base text-slate-600">
                Choose from different shapes, thicknesses and load ratings for
                driveways, parking, industrial yards, walkways and pool areas.
              </p>
            </div>

            {/* Block filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {blockFilters.map((filter) => {
                const active = activeBlockFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveBlockFilter(filter.id)}
                    className={`px-3.5 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                      active
                        ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] shadow-sm"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-[#D4A017]/40 hover:text-[#A46306]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Block grid – 2 cols on mobile (pairs), 3 on md+ */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {filteredBlockTypes.map((block, index) => (
                <div
                  key={block.id}
                  className={`
                    group relative cursor-pointer
                    bg-white
                    rounded-xl overflow-hidden border border-slate-200
                    hover:border-[#D4A017]/60 hover:shadow-xl hover:shadow-[#FACC6B]/30
                    transition-all duration-500
                    transform
                    ${index % 3 === 1 ? "md:-translate-y-1" : ""}
                    ${index % 3 === 2 ? "md:translate-y-1" : ""}
                    hover:translate-y-0
                  `}
                  onClick={() => setSelectedBlock(block)}
                >
                  <div className="relative h-32 sm:h-40 md:h-44 overflow-hidden">
                    <Image
                      src={block.image}
                      alt={block.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="absolute inset-x-0 bottom-0 px-3 sm:px-4 pb-2.5 pt-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white group-hover:text-[#FACC6B] transition-colors">
                        {block.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-slate-100/90">
                        {block.bestFor}
                      </p>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-black/80 backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3">
                      <p className="text-[10px] sm:text-xs text-slate-100 mb-0.5">
                        <span className="text-[#FACC6B] font-semibold">
                          Thickness:
                        </span>{" "}
                        {block.thickness}
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-100 mb-0.5">
                        <span className="text-[#FACC6B] font-semibold">
                          Load Rating:
                        </span>{" "}
                        {block.load}
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-100">
                        <span className="text-[#FACC6B] font-semibold">
                          Colors:
                        </span>{" "}
                        {block.colors}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- PROJECT DETAIL MODAL ---------------- */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-5 md:p-6 lg:p-8">
                <div className="mb-6 md:mb-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium capitalize">
                      {selectedProject.category}
                    </span>
                    {selectedProject.featured && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-xs font-bold">
                        Featured Project
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Completed: {selectedProject.completion}</span>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="relative h-64 md:h-80 lg:h-96 rounded-xl mb-5 overflow-hidden">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                      <div className="p-3.5 md:p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">
                          Project Size
                        </p>
                        <p className="text-lg md:text-xl font-semibold text-slate-900">
                          {selectedProject.size}
                        </p>
                      </div>
                      <div className="p-3.5 md:p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">
                          Pattern Used
                        </p>
                        <p className="text-lg md:text-xl font-semibold text-slate-900">
                          {selectedProject.pattern}
                        </p>
                      </div>
                      <div className="p-3.5 md:p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">
                          Colour Scheme
                        </p>
                        <p className="text-lg md:text-xl font-semibold text-slate-900">
                          {selectedProject.color}
                        </p>
                      </div>
                      <div className="p-3.5 md:p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">
                          Installation Time
                        </p>
                        <p className="text-lg md:text-xl font-semibold text-slate-900">
                          5 Working Days
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                        Project Description
                      </h3>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                        Key Features
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2.5 md:gap-3">
                        {selectedProject.features?.map(
                          (feature: string, index: number) => (
                            <li
                              key={index}
                              className="flex items-start gap-2.5"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#FFF7E0] flex items-center justify-center mt-0.5 flex-shrink-0">
                                <svg
                                  className="w-3 h-3 text-[#A46306]"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm text-slate-700">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2.5">
                        Get a Similar Project
                      </h3>
                      <p className="text-sm text-slate-700 mb-4">
                        Interested in a similar paving solution for your
                        property? Get a free site visit and quotation today.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/quote"
                          onClick={() => setSelectedProject(null)}
                          className="px-5 md:px-6 py-2.5 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-sm font-semibold rounded-lg shadow-sm hover:shadow-lg hover:shadow-[#FACC6B]/40 transition-all"
                        >
                          Get Free Quote
                        </Link>
                        <a
                          href="tel:+254711789438"
                          className="px-5 md:px-6 py-2.5 border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 hover:border-[#D4A017]/60 hover:bg-[#FFF7E0] transition-all"
                        >
                          Call for Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- BLOCK TYPE LIGHTBOX ---------------- */}
        {selectedBlock && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl">
              <button
                onClick={() => setSelectedBlock(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-5 md:p-6 lg:p-7">
                <div className="mb-5 md:mb-6">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-1.5">
                    {selectedBlock.name}
                  </h2>
                  <p className="text-sm text-slate-600">
                    Best for: {selectedBlock.bestFor}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <div className="relative h-56 md:h-64 rounded-xl overflow-hidden mb-3">
                      <Image
                        src={selectedBlock.image}
                        alt={selectedBlock.name}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-1 gap-3 md:gap-4 mb-5">
                      <div className="p-3.5 md:p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">
                          Thickness
                        </p>
                        <p className="text-base md:text-lg font-semibold text-slate-900">
                          {selectedBlock.thickness}
                        </p>
                      </div>
                      <div className="p-3.5 md:p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">
                          Load Rating
                        </p>
                        <p className="text-base md:text-lg font-semibold text-slate-900">
                          {selectedBlock.load}
                        </p>
                      </div>
                      <div className="p-3.5 md:p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">Colours</p>
                        <p className="text-base md:text-lg font-semibold text-slate-900">
                          {selectedBlock.colors}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                        Want this block for your project?
                      </h3>
                      <p className="text-sm text-slate-700 mb-4">
                        Tell us the area size and application (driveway,
                        parking, walkway, pool, etc.) and we&apos;ll recommend
                        the right thickness, layout and quotation.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/quote"
                          onClick={() => setSelectedBlock(null)}
                          className="px-5 py-2.5 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-sm font-semibold rounded-lg shadow-sm hover:shadow-lg hover:shadow-[#FACC6B]/40 transition-all"
                        >
                          Request a Quote
                        </Link>
                        <Link
                          href="/contact"
                          onClick={() => setSelectedBlock(null)}
                          className="px-5 py-2.5 border border-slate-300 rounded-lg text-sm font-semibold text-slate-800 hover:border-[#D4A017]/60 hover:bg-[#FFF7E0] transition-all"
                        >
                          Talk to Our Team
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
