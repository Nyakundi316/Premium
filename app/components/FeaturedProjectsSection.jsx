"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Luxury Estate Driveway",
    type: "Residential Cabro",
    location: "Kiambu, Kenya",
    scope: "600 m² • 80mm heavy-duty interlock",
    image: "/images/trihex-broad.avif",
  },
  {
    id: 2,
    name: "Retail & Mall Parking",
    type: "Commercial Parking",
    location: "Nairobi, Kenya",
    scope: "2,500 m² • 80mm industrial blocks",
    image: "/images/retail.jpg",
  },
  {
    id: 3,
    name: "Industrial Yard & Loading Zone",
    type: "Industrial Yard",
    location: "Ruiru, Kenya",
    scope: "1,800 m² • High-strength cabro",
    image: "/images/Interlockers-1.jpg",
  },
  {
    id: 4,
    name: "Road Drainage & Culverts",
    type: "Drainage & Culverts",
    location: "Thika Road, Kenya",
    scope: "600mm – 1200mm culverts & kerbs",
    image: "/images/culvert-thumb.jpg",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-[#F8F9FC] text-[#041544]">
      <div className="container relative mx-auto px-4 md:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FACC15]/20 border border-[#FACC15]/40 px-4 py-1 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase text-[#A47500] tracking-[0.25em]">
              Featured Projects
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            See Where Our{" "}
            <span className="text-[#D4A017]">Products Perform</span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600">
            We supply and install cabro, culverts, kerbs and fencing posts
            across Nairobi, Kiambu, Ruiru, Thika Road and surrounding areas.
          </p>
        </div>

        {/* GRID – animated cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
            >
              {/* IMAGE */}
              <div className="relative h-44 md:h-48 lg:h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute top-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] uppercase font-semibold tracking-[0.15em] text-[#041544]">
                  {project.type}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col h-full">
                <h3 className="text-sm md:text-base font-semibold text-[#041544] group-hover:text-[#D4A017] transition">
                  {project.name}
                </h3>

                <p className="mt-1 text-[11px] text-slate-600">
                  {project.location}
                </p>
                <p className="mt-2 text-[11px] text-slate-500">
                  {project.scope}
                </p>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="inline-flex items-center gap-1">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                    Supply & Installation
                  </span>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 font-semibold text-[#D4A017] hover:text-[#041544] transition-colors"
                  >
                    View Gallery ↗
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs md:text-sm text-slate-600 text-center md:text-left">
            Planning a driveway, parking, industrial yard or drainage system? We
            help you choose the right cabro thickness, pattern & concrete
            products.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-sm">
            <Link
              href="/projects"
              className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-[#041544] hover:bg-slate-200/40 transition"
            >
              View All Projects
            </Link>

            <Link
              href="/quote"
              className="rounded-full bg-[#D4A017] px-5 py-2 font-semibold text-white hover:bg-[#b98b0f] transition"
            >
              Request Site Visit →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
