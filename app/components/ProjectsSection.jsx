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
      imageAlt:
        "Luxury villa driveway with charcoal and beige interlocking cobblestone paving blocks.",
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
      imageAlt:
        "Shopping mall parking finished with charcoal grey heavy-duty interlocking paving blocks.",
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
      imageAlt:
        "Hotel swimming pool paved with sandstone and blue anti-slip paving blocks.",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#020617] to-[#020617]/95">
      <div className="container mx-auto px-4 md:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/30 px-4 py-1 mb-4">
            <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase text-[#D4A017] tracking-[0.25em]">
              Featured Work
            </span>
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Our <span className="text-[#D4A017]">Paving Projects</span>
          </h2>

          <p className="text-gray-300 text-xs md:text-sm">
            A quick look at some of our completed paving installations —
            showcasing patterns, finishes, and real-world applications.
          </p>
        </div>

        {/* BUTTONS CENTERED */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-10">
          <Link
            href="/projects"
            className="px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-xs md:text-sm font-semibold hover:shadow-lg hover:shadow-[#D4A017]/40 transition-all"
          >
            View All Projects →
          </Link>
          <Link
            href="/quote"
            className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-gray-700 text-gray-200 text-xs md:text-sm font-semibold hover:border-[#D4A017]/70 hover:bg-[#D4A017]/5 transition-all"
          >
            Get a Free Site Visit
          </Link>
        </div>

        {/* GRID – 2 PER ROW ON MOBILE, 3 ON DESKTOP */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-800 rounded-xl overflow-hidden hover:border-[#D4A017]/70 hover:shadow-2xl hover:shadow-[#D4A017]/20 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-[#D4A017] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-[#D4A017] font-semibold mb-3">
                  {project.category}
                </p>

                {/* META – compact for mobile */}
                <div className="grid grid-cols-2 gap-3 text-[10px] sm:text-xs text-gray-300 mb-3">
                  <div>
                    <p className="text-gray-500 uppercase text-[9px]">
                      Pattern
                    </p>
                    <p className="font-medium text-white truncate">
                      {project.pattern}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-[9px]">
                      Colour
                    </p>
                    <p className="font-medium text-white truncate">
                      {project.color}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-[9px]">Size</p>
                    <p className="font-medium text-white">{project.size}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-[9px]">
                      Completed
                    </p>
                    <p className="font-medium text-white">
                      {project.completion}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] sm:text-[11px] font-semibold text-[#D4A017] group-hover:text-[#F0B429]">
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

