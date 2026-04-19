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
    alt: "Grey Hexagon Block",
    size:
      "w-[190px] h-[190px] md:w-[230px] md:h-[230px] lg:w-[290px] lg:h-[290px]",
    position: "top-[3%] right-[1%]",
    rotate: -6,
    floatDelay: 0,
    hero: true,
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
    <section className="relative isolate min-h-[100dvh] overflow-hidden -mt-16 sm:min-h-[100svh] sm:-mt-20 md:-mt-24">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
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

        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/90 via-[#070B14]/62 to-[#070B14]/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/75 via-transparent to-[#070B14]/30" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-7xl grid-rows-[1fr] px-4 sm:min-h-[100svh] sm:grid-rows-[1fr_auto] sm:px-8 lg:px-12">
        <div className="grid items-center gap-6 pb-6 pt-24 sm:gap-8 sm:pb-12 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:pt-36">
          <motion.div
            className="w-full max-w-[36rem] pr-2 sm:pr-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5 backdrop-blur-sm sm:mb-5 sm:px-4 sm:py-2">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: GOLD, boxShadow: `0 0 12px ${GOLD}` }}
              />
              <span className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-[11px] sm:tracking-[0.22em]">
                Premium Cabro · Nairobi
              </span>
            </div>

            <h1
              className="mb-4 max-w-full font-bold leading-[0.95] tracking-[-0.04em] text-white sm:mb-6 sm:tracking-[-0.06em]"
              style={{ fontSize: "clamp(2.2rem, 9vw, 5.4rem)" }}
            >
              <span className="block break-words">Premium Cabro</span>
              <span className="block break-words">
                That Speaks{" "}
                <span className="inline" style={{ color: GOLD }}>
                  Quality.
                </span>
              </span>
            </h1>

            <p className="mb-5 max-w-[34rem] text-sm leading-6 text-white/78 sm:mb-8 sm:text-base sm:leading-8">
              We supply and install durable cabro blocks for driveways,
              compounds, parking areas, and commercial spaces across Kenya.
              Clean finish, proper fitting, reliable delivery.
            </p>

            <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-md sm:flex-row sm:items-center">
              <Link
                href="/quote"
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#0D1B30] shadow-[0_10px_30px_-10px_rgba(255,194,14,0.6)] transition-all hover:brightness-110 hover:shadow-[0_14px_36px_-10px_rgba(255,194,14,0.8)] sm:w-auto sm:px-7 sm:py-3.5"
                style={{ background: GOLD }}
              >
                <MessageSquare size={16} />
                Quote
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="tel:+254711789438"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/12 sm:w-auto sm:px-6 sm:py-3.5"
              >
                <Phone size={16} style={{ color: GOLD }} />
                Call
              </a>
            </div>

            <div className="mt-6 hidden flex-wrap items-center gap-x-3 gap-y-2 sm:mt-8 sm:flex sm:gap-6 md:mt-10">
              {slides.map((slide, i) => (
                <button
                  key={slide.label}
                  onClick={() => setActiveSlide(i)}
                  className="group flex min-w-0 items-center gap-2"
                  aria-label={`Show ${slide.label} slide`}
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-500 ${
                      i === activeSlide ? "w-7 sm:w-10" : "w-3.5 sm:w-4"
                    }`}
                    style={{
                      background:
                        i === activeSlide ? GOLD : "rgba(255,255,255,0.25)",
                    }}
                  />
                  <span
                    className="text-[10px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-[11px] sm:tracking-wider"
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

          <div className="pointer-events-none relative hidden h-full md:block">
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

                <div
                  className="absolute bottom-[-8%] left-1/2 h-3 w-[70%] -translate-x-1/2 rounded-full blur-md"
                  style={{ background: "rgba(0,0,0,0.35)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="hidden border-t border-white/10 py-3 sm:block sm:py-6 lg:py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
            <div className="grid flex-1 grid-cols-3 gap-2 sm:flex sm:gap-10 lg:gap-14">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i > 0
                      ? "min-w-0 sm:relative sm:pl-10 lg:pl-14 sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-8 sm:before:w-px sm:before:-translate-y-1/2 sm:before:bg-white/12"
                      : "min-w-0"
                  }
                >
                  <p
                    className="text-base font-bold tracking-tight sm:text-2xl lg:text-3xl"
                    style={{ color: GOLD }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.1em] text-white/45 sm:text-[11px] sm:tracking-[0.15em]">
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

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-b from-transparent to-white sm:h-20 dark:to-[#0A0C10]" />
    </section>
  );
}