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

/**
 * Floating block layout
 * Right panel is treated as a 3×3 zone grid so no two blocks collide.
 * Order: hero first (biggest), then accents scattered around it.
 */
const floatingBlocks = [
  {
    src: "/images/products/Hero/grey-removebg-preview.png",
    alt: "Grey Hexagon Block",
    size:
      "w-[190px] h-[190px] md:w-[230px] md:h-[230px] lg:w-[290px] lg:h-[290px]",
    position: "top-[3%] right-[1%]",
    rotate: -6,
    floatDelay: 0,
    hero: true, // gets an extra glow halo
  },
  {
    src: "/images/products/Hero/fan-removebg-preview.png",
    alt: "Fan Block",
    size:
      "w-[85px] h-[85px] md:w-[110px] md:h-[110px] lg:w-[135px] lg:h-[135px]",
    position: "top-[9%] right-[55%]",
    rotate: 10,
    floatDelay: 0.6,
  },
  {
    src: "/images/products/Hero/pvc_block_3d-removebg-preview.png",
    alt: "PVC 3D Block",
    size:
      "w-[115px] h-[115px] md:w-[145px] md:h-[145px] lg:w-[175px] lg:h-[175px]",
    position: "top-[44%] right-[48%]",
    rotate: 7,
    floatDelay: 1.2,
  },
  {
    src: "/images/products/Hero/dumble1-removebg-preview.png",
    alt: "Dumbell Block",
    size:
      "w-[75px] h-[75px] md:w-[95px] md:h-[95px] lg:w-[120px] lg:h-[120px]",
    position: "top-[52%] right-[4%]",
    rotate: -9,
    floatDelay: 1.8,
  },
  {
    src: "/images/products/Hero/Trihex-Charcoal-removebg-preview.png",
    alt: "Trihex Charcoal",
    size:
      "w-[95px] h-[95px] md:w-[120px] md:h-[120px] lg:w-[145px] lg:h-[145px]",
    position: "bottom-[5%] right-[52%]",
    rotate: -5,
    floatDelay: 2.2,
  },
  {
    src: "/images/products/Hero/yellow-trihex-removebg-preview.png",
    alt: "Yellow Trihex",
    size:
      "w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px]",
    position: "bottom-[4%] right-[20%]",
    rotate: 6,
    floatDelay: 0.9,
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

        {/* Stronger darkening so blocks read crisply on any slide */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/90 via-[#070B14]/62 to-[#070B14]/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/75 via-transparent to-[#070B14]/30" />
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
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: GOLD, boxShadow: `0 0 12px ${GOLD}` }}
              />
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

            <p className="mb-8 max-w-lg text-[15px] leading-7 text-white/65 sm:text-base sm:leading-8">
              We supply and install durable cabro blocks for driveways,
              compounds, parking areas, and commercial spaces across Kenya.
              Clean finish, proper fitting, reliable delivery.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-[#0D1B30] shadow-[0_10px_30px_-10px_rgba(255,194,14,0.6)] transition-all hover:brightness-110 hover:shadow-[0_14px_36px_-10px_rgba(255,194,14,0.8)]"
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
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/12 hover:border-white/25"
              >
                <Phone size={16} style={{ color: GOLD }} />
                0711 789 438
              </a>
            </div>

            {/* Mobile product strip */}
            <div
              className="mt-8 flex gap-3 overflow-x-auto pb-2 md:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {mobileBlocks.map((block) => (
                <div
                  key={block.alt}
                  className="relative h-16 w-16 shrink-0 rounded-xl border border-white/10 bg-white/8 backdrop-blur-sm"
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
                      background:
                        i === activeSlide ? GOLD : "rgba(255,255,255,0.25)",
                    }}
                  />
                  <span
                    className="text-[11px] font-medium uppercase tracking-wider transition-colors"
                    style={{
                      color:
                        i === activeSlide
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {slide.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Floating product blocks — visible md+ */}
          <div className="pointer-events-none relative hidden h-full md:block">
            {/* Ambient golden glows — behind everything */}
            <div
              className="absolute right-[6%] top-[10%] h-[260px] w-[260px] rounded-full blur-[100px]"
              style={{ background: `${GOLD}22` }}
            />
            <div
              className="absolute bottom-[14%] right-[30%] h-[160px] w-[160px] rounded-full blur-[80px]"
              style={{ background: `${GOLD}14` }}
            />

            {floatingBlocks.map((block, i) => (
              <motion.div
                key={block.alt}
                className={`absolute ${block.position} ${block.size}`}
                initial={{ opacity: 0, y: 40, rotate: block.rotate }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  rotate: [
                    block.rotate - 1.5,
                    block.rotate + 1.5,
                    block.rotate - 1.5,
                  ],
                }}
                transition={{
                  opacity: { duration: 0.7, delay: 0.3 + i * 0.12 },
                  y: {
                    duration: 3.8 + i * 0.25,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: block.floatDelay,
                  },
                  rotate: {
                    duration: 5.5 + i * 0.4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: block.floatDelay,
                  },
                }}
              >
                {/* Per-block hero glow — only on the main grey block */}
                {block.hero && (
                  <div
                    className="absolute inset-0 -z-10 scale-110 rounded-full blur-[50px]"
                    style={{ background: `${GOLD}20` }}
                  />
                )}

                <div className="relative h-full w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-contain"
                    sizes="20vw"
                  />
                </div>

                {/* Soft elliptical ground shadow */}
                <div
                  className="absolute left-1/2 bottom-[-8%] h-3 w-[70%] -translate-x-1/2 rounded-full blur-md"
                  style={{ background: "rgba(0,0,0,0.35)" }}
                />
              </motion.div>
            ))}
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
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i > 0
                      ? "relative pl-10 sm:pl-14 before:absolute before:left-0 before:top-1/2 before:h-8 before:w-px before:-translate-y-1/2 before:bg-white/12"
                      : ""
                  }
                >
                  <p
                    className="text-2xl font-bold tracking-tight sm:text-3xl"
                    style={{ color: GOLD }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/45">
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