"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone, Calendar, ArrowRight, Factory } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  {
    src: "/images/St Annes.jpeg",
    title: "Premium Paving Installation",
    description: "High-quality interlocking blocks for residential driveways.",
  },
  {
    src: "/images/classic interlock.jpeg",
    title: "Classic Interlock Driveway",
    description: "Durable interlocking pattern for homes and estates.",
  },
  {
    src: "/images/Hexagon Honeycomb.jpeg",
    title: "Hexagon Honeycomb Pattern",
    description: "Modern hexagonal design for courtyards and walkways.",
  },
  {
    src: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
    title: "Zig Zag Heavy-Duty Yard",
    description: "Built for trucks, parking yards and petrol stations.",
  },
  {
    src: "/images/Red.jpeg",
    title: "Crown Block Pattern",
    description: "Bold indoor and courtyard paving design.",
  },
];

const quickLinks = [
  {
    id: "cabro",
    title: "Cabro Paving Blocks",
    subtitle: "60mm & 80mm",
    image: "/images/cabro-thumb.png",
    href: "/products/cabro",
  },
  {
    id: "culverts",
    title: "Concrete Culverts",
    subtitle: "Road & drainage",
    image: "/images/culvert-thumb.jpg",
    href: "/products/culverts",
  },
  {
    id: "posts",
    title: "Fencing Posts",
    subtitle: "Plots & farms",
    image: "/images/fencing-thumb.jpg",
    href: "/products/fencing-posts",
  },
  {
    id: "kerbs",
    title: "Kerbs & Channels",
    subtitle: "Estate finish",
    image: "/images/kerbs-drainage.jpg",
    href: "/products/kerbs-drainage",
  },
  {
    id: "services",
    title: "View All Services",
    subtitle: "Supply & install",
    image: "/images/landscape_pool_kerbstone.jpg",
    href: "/services",
  },
];

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((i) => (i + 1) % heroImages.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const next = () =>
    setActiveIndex((i) => (i + 1) % heroImages.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-gray-900 overflow-hidden flex flex-col justify-end">

      {/* Background Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImages[activeIndex].src}
            alt={heroImages[activeIndex].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Enhanced Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 opacity-80" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Patterns */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/patterns/grid.svg')] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center mb-16 lg:mb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFBF00]/20 backdrop-blur-md rounded-full border border-[#FFBF00]/30"
            >
              <div className="h-2 w-2 rounded-full bg-[#FFBF00] animate-pulse" />
              <span className="text-sm font-bold text-[#FFBF00] tracking-wider uppercase">
                Premium Cabros Ltd (PCBL)
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
              >
                Kenya's Leading <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBF00] to-[#FFDA66]">
                  Concrete Solutions
                </span>
                <span className="text-[#FFBF00]">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-200 max-w-xl font-light leading-relaxed border-l-4 border-[#FFBF00] pl-6"
              >
                Engineered for strength and durability. From residential driveways to industrial yards, we pave the way for a solid future.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="tel:+254711789438"
                className="group relative px-8 py-4 bg-[#FFBF00] text-gray-900 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,191,0,0.3)] hover:shadow-[0_0_30px_rgba(255,191,0,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone size={20} />
                  Get a Free Quote
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              <Link
                href="/products/cabro"
                className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Factory size={20} />
                  View Catalog
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 hidden md:block">
        <button
          onClick={prev}
          className="p-3 bg-black/30 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-[#FFBF00] hover:text-black transition-all hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 hidden md:block">
        <button
          onClick={next}
          className="p-3 bg-black/30 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-[#FFBF00] hover:text-black transition-all hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Quick Links Floating Bar - Positioned at bottom overlapping */}
      <div className="relative z-30 w-full bg-white/5 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10 border-b border-white/10 md:border-none">
            {quickLinks.map((item, idx) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group relative p-4 lg:p-6 transition-all hover:bg-white/10 ${idx >= 2 ? 'hidden md:block' : ''} ${idx === 4 ? 'col-span-2 md:col-span-1 border-t md:border-t-0 border-white/10' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/20 group-hover:border-[#FFBF00] transition-colors">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FFBF00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={14} className="text-[#FFBF00]" />
                  </div>
                </div>
              </Link>
            ))}
            {/* Mobile View All Link */}
            <Link
              href="/services"
              className="md:hidden col-span-2 p-4 flex items-center justify-center text-sm font-semibold text-[#FFBF00] gap-2 border-t border-white/10"
            >
              See All Products & Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;