"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Phone,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const GOLD = "#FFC20E";

const slides = [
  { image: "/images/home.jpg", label: "Residential" },
  { image: "/images/industrial yard.png", label: "Commercial" },
  { image: "/images/Driveways.png", label: "Driveways" },
];

const floatingBlocks = [
  {
    src: "/images/products/Hero/grey-removebg-preview.png",
    alt: "Grey Block",
    size: "w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[270px] lg:h-[270px]",
    position: "top-[8%] right-[5%]",
    rotate: -4,
    floatDelay: 0,
  },
  {
    src: "/images/products/Hero/pvc_block_3d-removebg-preview.png",
    alt: "PVC 3D Block",
    size: "w-[110px] h-[110px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px]",
    position: "top-[38%] right-[32%]",
    rotate: 5,
    floatDelay: 0.8,
  },
  {
    src: "/images/products/Hero/yellow-trihex-removebg-preview.png",
    alt: "Yellow Trihex",
    size: "w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px]",
    position: "bottom-[28%] right-[6%]",
    rotate: -7,
    floatDelay: 1.6,
  },
  {
    src: "/images/products/Hero/fan-removebg-preview.png",
    alt: "Fan Block",
    size: "w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[135px] lg:h-[135px]",
    position: "top-[18%] right-[38%]",
    rotate: 8,
    floatDelay: 2.2,
  },
  {
    src: "/images/products/Hero/Trihex-Charcoal-removebg-preview.png",
    alt: "Trihex Charcoal",
    size: "w-[95px] h-[95px] md:w-[120px] md:h-[120px] lg:w-[145px] lg:h-[145px]",
    position: "bottom-[12%] right-[30%]",
    rotate: 3,
    floatDelay: 1.2,
  },
  {
    src: "/images/products/Hero/dumble1-removebg-preview.png",
    alt: "Dumble Block",
    size: "w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]",
    position: "top-[55%] right-[12%]",
    rotate: -3,
    floatDelay: 0.4,
  },
];

const mobileBlocks = floatingBlocks.slice(0, 5);

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "8", label: "Years in Business" },
  { value: "15+", label: "Block Varieties" },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] -mt-20 md:-mt-24 overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={activeSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <Image
              src={slides[activeSlide].image}
              alt={slides[activeSlide].label}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/88 via-[#070B14]/60 to-[#070B14]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/70 via-transparent to-[#070B14]/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl min-h-[100svh] grid-rows-[1fr_auto] px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-8 pt-32 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-36">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full" style={{ background: GOLD }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                Premium Cabro · Nairobi
              </span>
            </div>

            <h1
              className="mb-6 font-bold leading-[0.92] tracking-[-0.04em] text-white"
              style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.4rem)" }}
            >
              Premium Cabro
              <br />
              That Speaks{" "}
              <span style={{ color: GOLD }}>Quality.</span>
            </h1>

            <p className="mb-8 max-w-lg text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8">
              We supply and install durable cabro blocks for driveways,
              compounds, parking areas, and commercial spaces across Kenya.
              Clean finish, proper fitting, reliable delivery.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-[#0D1B30] transition-all hover:brightness-110"
                style={{ background: GOLD }}
              >
                <MessageSquare size={16} />
                Get a Free Quote
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="tel:+254711789438"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/12"
              >
                <Phone size={16} style={{ color: GOLD }} />
                0711 789 438
              </a>
            </div>

            {/* Mobile product strip */}
            <div className="mt-8 flex gap-3 overflow-x-auto pb-2 md:hidden" style={{ scrollbarWidth: "none" }}>
              {mobileBlocks.map((block) => (
                <div
                  key={block.alt}
                  className="relative h-16 w-16 shrink-0 rounded-xl bg-white/8 backdrop-blur-sm"
                >
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-contain p-1.5"
                    sizes="64px"
                  />
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="mt-8 flex items-center gap-6 md:mt-10">
              {slides.map((slide, i) => (
                <button
                  key={slide.label}
                  onClick={() => setActiveSlide(i)}
                  className="group flex items-center gap-2.5"
                >
                  <span
                    className="block h-[3px] rounded-full transition-all duration-500"
                    style={{
                      width: i === activeSlide ? 40 : 16,
                      background: i === activeSlide ? GOLD : "rgba(255,255,255,0.25)",
                    }}
                  />
                  <span
                    className="text-[11px] font-medium uppercase tracking-wider transition-colors"
                    style={{
                      color: i === activeSlide ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {slide.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Floating product blocks — visible md+ */}
          <div className="relative hidden h-full md:block">
            {floatingBlocks.map((block, i) => (
              <motion.div
                key={block.alt}
                className={`absolute ${block.position} ${block.size}`}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                  rotate: block.rotate,
                }}
                transition={{
                  opacity: { duration: 0.7, delay: 0.3 + i * 0.12 },
                  y: {
                    duration: 3.5 + i * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: block.floatDelay,
                  },
                  rotate: { duration: 0.7, delay: 0.3 + i * 0.12 },
                }}
              >
                <div className="relative h-full w-full drop-shadow-[0_16px_35px_rgba(0,0,0,0.35)]">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-contain"
                    sizes="20vw"
                  />
                </div>
              </motion.div>
            ))}

            <div
              className="absolute right-[18%] top-[28%] h-[200px] w-[200px] rounded-full blur-[90px]"
              style={{ background: `${GOLD}18` }}
            />
            <div
              className="absolute bottom-[20%] right-[8%] h-[120px] w-[120px] rounded-full blur-[70px]"
              style={{ background: `${GOLD}12` }}
            />
          </div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          className="border-t border-white/10 py-6 lg:py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-10 sm:gap-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: GOLD }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden text-white/25 sm:block"
            >
              <ChevronDown size={22} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-b from-transparent to-white dark:to-[#0A0C10]" />
    </section>
  );
}
