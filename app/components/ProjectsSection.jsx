"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Driveway",
      category: "Residential",
      size: "450 sqm",
      pattern: "Interlocking Cobblestone",
      color: "Charcoal & Beige",
      completion: "Jan 2024",
      image: "/images/Masterpieces.jpeg",
    },
    {
      id: 2,
      title: "Shopping Mall Parking",
      category: "Commercial",
      size: "2,500 sqm",
      pattern: "Heavy-Duty Interlock",
      color: "Charcoal Grey",
      completion: "Dec 2023",
      image: "/images/shop paves.jpeg",
    },
    {
      id: 5,
      title: "Hotel Pool Surround",
      category: "Commercial",
      size: "600 sqm",
      pattern: "Anti-Slip 3D Blocks",
      color: "Sandstone & Blue",
      completion: "Sep 2023",
      image: "/images/swimming.jpeg",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#F8F9FC]">
      <div className="container mx-auto px-4 md:px-8">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 px-4 py-1 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase text-[#D4A017] tracking-[0.25em]">
              Featured Work
            </span>
          </span>

          <h2 className="text-3xl font-bold text-slate-900">
            Our <span className="text-[#D4A017]">Paving Projects</span>
          </h2>

          <p className="text-slate-600 text-sm mt-2">
            Explore our completed installations — from homes to commercial spaces.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-sm font-semibold hover:shadow-lg transition-all"
          >
            View All Projects →
          </Link>

          <Link
            href="/quote"
            className="px-6 py-3 rounded-full border border-gray-400 text-slate-700 text-sm font-semibold hover:border-[#D4A017] hover:bg-[#FFF7E0] transition-all"
          >
            Get a Free Site Visit
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition hover:border-[#D4A017]"
            >
              {/* IMAGE */}
              <div className="relative h-36 md:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                <h3 className="text-sm md:text-base font-semibold text-slate-900 group-hover:text-[#D4A017] transition">
                  {project.title}
                </h3>

                <p className="text-xs text-[#D4A017] font-semibold mt-1">
                  {project.category}
                </p>

                {/* META */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 mt-3">
                  <div>
                    <p className="text-slate-500 uppercase text-[9px]">Pattern</p>
                    <p className="font-medium">{project.pattern}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase text-[9px]">Colour</p>
                    <p className="font-medium">{project.color}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase text-[9px]">Size</p>
                    <p className="font-medium">{project.size}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase text-[9px]">Done</p>
                    <p className="font-medium">{project.completion}</p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-[#D4A017] block mt-3 group-hover:text-[#F0B429]">
                  View Project Details ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
