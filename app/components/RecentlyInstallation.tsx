"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GOLD = "#FFC20E";

const projects = [
  {
    title: "Residential Driveway",
    category: "Interlocking Cabro",
    location: "Nairobi",
    image: "/images/Driveways.png",
    large: true,
  },
  {
    title: "Luxury Pathway",
    category: "Decorative Finish",
    location: "Kiambu",
    image: "/images/luxury pathway.png",
    large: false,
  },
  {
    title: "Parking & Yard",
    category: "Heavy Duty Cabro",
    location: "Ruiru",
    image: "/images/Parking Lot.jpeg",
    large: false,
  },
  {
    title: "Commercial Space",
    category: "Premium Paving",
    location: "Nairobi CBD",
    image: "/images/mall.png",
    large: false,
  },
  {
    title: "Swimming Pool Area",
    category: "Landscape Paving",
    location: "Kiambu",
    image: "/images/swimming.jpeg",
    large: true,
  },
  {
    title: "Estate Compound",
    category: "Interlocking Cabro",
    location: "Thika Road",
    image: "/images/30 Best Yard Landscaping Ideas for a Stunning….jpeg",
    large: false,
  },
  {
    title: "Decorative Compound",
    category: "Round Dumble Cabro",
    location: "Kiambu",
    image: "/images/WhatsApp Image 2025-12-01 at 8.46.41 AM.jpeg",
    large: true,
  },
  {
    title: "Estate Driveway",
    category: "Zigzag Heavy Duty",
    location: "Nairobi",
    image: "/images/zizag2.jpg",
    large: false,
  },
  {
    title: "Curved Driveway",
    category: "Cobblestone Paving",
    location: "Runda",
    image: "/images/Perfect Work of Paver Block.jpeg",
    large: false,
  },
  {
    title: "Garden Walkway",
    category: "Round Dumble Path",
    location: "Ruaka",
    image: "/images/round trihex 1.jpeg",
    large: false,
  },
];

const largeProjects = projects.filter((p) => p.large);
const smallProjects = projects.filter((p) => !p.large);

export default function RecentInstallations() {
  return (
    <section className="bg-white dark:bg-[#0A0C10] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <motion.div
          className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-xl">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Recent Installations
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-4xl">
              See how our products look on real projects
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-500">
              From residential driveways to commercial walkways — designed for durability and clean finishing.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: GOLD }}
          >
            View all projects <ArrowRight size={15} />
          </Link>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Large card */}
          <div className="lg:col-span-2">
            {largeProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href="/projects"
                  className="group block overflow-hidden rounded-2xl border border-slate-100 transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-[300px] sm:h-[400px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">{project.category}</p>
                      <h3 className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                      <p className="mt-1 text-sm text-white/65">{project.location}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Small cards stacked */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {smallProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link
                  href="/projects"
                  className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white transition-shadow hover:shadow-md"
                >
                  <div className="relative h-[140px] lg:h-[110px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: GOLD }}>{project.category}</p>
                    <h3 className="mt-1 text-base font-semibold text-[#0F172A] dark:text-white">{project.title}</h3>
                    <p className="mt-0.5 text-xs text-slate-400">{project.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
