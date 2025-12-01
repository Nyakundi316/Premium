"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

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
      color: "Charcoal & Beige",
      completion: "Jan 2024",
      description:
        "Premium residential driveway with custom border design and integrated drainage system.",
      features: [
        "Custom border",
        "Integrated drainage",
        "LED lighting",
        "10-year warranty",
      ],
      image: "/images/projects/luxury-villa-driveway-pavers.jpg",
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
      image: "/images/projects/shopping-mall-parking-pavers.jpg",
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
      image: "/images/projects/factory-yard-industrial-pavers.jpg",
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
      image: "/images/projects/gated-community-walkway-pavers.jpg",
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
      image: "/images/projects/hotel-pool-surround-pavers.jpg",
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
      image: "/images/projects/school-playground-pavers.jpg",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#0A1A2F] text-white">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent border border-[#D4A017]/30 px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-sm font-medium tracking-widest text-[#D4A017] uppercase">
              Our Portfolio
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Completed <span className="text-[#D4A017]">Projects</span>
          </h1>

          <p className="text-gray-300 mb-8">
            Browse through our portfolio of completed paving projects across
            Nairobi and surrounding areas. Each project showcases our commitment
            to quality, durability, and aesthetic excellence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <div className="text-2xl font-bold text-[#D4A017]">
                {stats.completed}+
              </div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <div className="text-2xl font-bold text-[#D4A017]">
                {stats.totalSqm.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-400">Square Meters</div>
            </div>
            <div className="text-center p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <div className="text-2xl font-bold text-[#D4A017]">
                {stats.locations}+
              </div>
              <div className="text-sm text-gray-400">Locations</div>
            </div>
            <div className="text-center p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <div className="text-2xl font-bold text-[#D4A017]">
                {stats.averageCompletion}
              </div>
              <div className="text-sm text-gray-400">Avg. Completion</div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F]"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700"
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">View:</span>
            <div className="flex bg-gray-800/50 rounded-lg p-1 border border-gray-700">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "grid" ? "bg-gray-700" : "hover:bg-gray-700/50"
                }`}
              >
                <svg
                  className="w-5 h-5"
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
                  viewMode === "list" ? "bg-gray-700" : "hover:bg-gray-700/50"
                }`}
              >
                <svg
                  className="w-5 h-5"
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

        {/* Projects Grid / List */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-[#D4A017]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A017]/10"
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-xs font-bold">
                      Featured
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium capitalize">
                    {project.category}
                  </span>
                </div>

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4A017] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
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
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs">Size</p>
                      <p className="font-medium text-white">{project.size}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Completed</p>
                      <p className="font-medium text-white">
                        {project.completion}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Pattern</p>
                      <p className="font-medium text-white truncate">
                        {project.pattern}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Color</p>
                      <p className="font-medium text-white truncate">
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
                className="group bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl border border-gray-800 hover:border-[#D4A017]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A017]/10 overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 h-48 md:h-auto relative flex-shrink-0 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-xs font-bold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4A017] transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
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
                      <span className="px-3 py-1 rounded-full bg-gray-800 text-white text-xs font-medium capitalize self-start md:self-auto">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">Size</p>
                        <p className="font-medium text-white">{project.size}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Pattern</p>
                        <p className="font-medium text-white">
                          {project.pattern}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Color</p>
                        <p className="font-medium text-white">
                          {project.color}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Duration</p>
                        <p className="font-medium text-white">5 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-500"
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
            <h3 className="text-xl font-bold text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-400 mb-6">
              No projects match the selected filter.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="px-6 py-3 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl border border-gray-700">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-900/80 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
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

              <div className="p-6">
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm font-medium capitalize">
                      {selectedProject.category}
                    </span>
                    {selectedProject.featured && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-sm font-bold">
                        Featured Project
                      </span>
                    )}
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
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
                    <div className="flex items-center gap-2">
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

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="relative h-96 rounded-xl mb-6 overflow-hidden">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                        <p className="text-sm text-gray-400 mb-1">
                          Project Size
                        </p>
                        <p className="text-xl font-bold text-white">
                          {selectedProject.size}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                        <p className="text-sm text-gray-400 mb-1">
                          Pattern Used
                        </p>
                        <p className="text-xl font-bold text-white">
                          {selectedProject.pattern}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                        <p className="text-sm text-gray-400 mb-1">
                          Color Scheme
                        </p>
                        <p className="text-xl font-bold text-white">
                          {selectedProject.color}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                        <p className="text-sm text-gray-400 mb-1">
                          Installation Time
                        </p>
                        <p className="text-xl font-bold text-white">
                          5 Working Days
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Project Description
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Key Features
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {selectedProject.features &&
                          selectedProject.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3"
                            >
                              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center mt-0.5 flex-shrink-0">
                                <svg
                                  className="w-3 h-3 text-[#D4A017]"
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
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700">
                      <h3 className="text-lg font-bold text-white mb-4">
                        Get a Similar Project
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Interested in a similar paving solution for your
                        property? Get a free quote today.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/quote"
                          onClick={() => setSelectedProject(null)}
                          className="px-6 py-3 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
                        >
                          Get Free Quote
                        </Link>
                        <a
                          href="tel:+2547XXXXXXXXX"
                          className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:border-[#D4A017]/50 hover:bg-[#D4A017]/5 transition-all"
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

       
      </main>
    </div>
  );
}