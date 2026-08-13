"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone, MessageSquare } from "lucide-react";

const GOLD = "#FFC20E";
const SLIDE_MS = 5000;

const slides = [
  {
    image: "/images/home.jpg",
    label: "Residential",
    alt: "Residential compound in Kenya paved with interlocking cabro blocks",
  },
  {
    image: "/images/industrial yard.png",
    label: "Commercial",
    alt: "Commercial yard paved with heavy-duty 80mm cabro blocks",
  },
  {
    image: "/images/Driveways.png",
    label: "Driveways",
    alt: "Home driveway finished with patterned cabro paving blocks",
  },
];

const serviceHighlights = ["60mm residential cabro", "80mm heavy-duty cabro", "Supply & installation"];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveSlide((prev) => (prev + 1) % slides.length),
      SLIDE_MS,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-[#05080F] -mt-16 sm:min-h-[100svh] sm:-mt-20 md:-mt-24">
      {/* full-bleed slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <Image
              src={slides[activeSlide].image}
              alt={slides[activeSlide].alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={activeSlide === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#05080F]/92 via-[#05080F]/55 to-[#05080F]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080F]/85 via-transparent to-[#05080F]/35" />
      </div>

      <div className="relative z-10 mx-auto grid w-full flex-1 max-w-7xl content-center px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span
                className="absolute inset-0 animate-ping rounded-full opacity-60"
                style={{ background: GOLD }}
              />
              <span
                className="relative h-2 w-2 rounded-full"
                style={{ background: GOLD, boxShadow: `0 0 10px ${GOLD}` }}
              />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Premium Cabro · Nairobi
            </span>
          </div>

          <h1
            className="mt-6 font-bold leading-[0.98] tracking-[-0.045em] text-white"
            style={{ fontSize: "clamp(2.2rem, 6.5vw, 4.6rem)" }}
          >
            Cabro blocks, supplied
            <br />
            &amp;{" "}
            <span className="relative inline-block">
              <span style={{ color: GOLD }}>installed</span>
              <span
                className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full opacity-80"
                style={{
                  background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                }}
              />
            </span>{" "}
            across Kenya.
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8">
            Durable 60mm &amp; 80mm cabro blocks supplied and installed for
            driveways, compounds and commercial yards across Nairobi, Kiambu
            and beyond — clean finish, proper fitting, reliable delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/quote"
              className="group relative inline-flex min-h-[50px] items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-sm font-semibold text-[#0D1B30] shadow-[0_14px_38px_-14px_rgba(255,194,14,0.8)] transition-all hover:brightness-[1.07]"
              style={{ background: GOLD }}
            >
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
              <MessageSquare size={16} className="relative" />
              <span className="relative">Get a Quote</span>
              <ArrowUpRight
                size={16}
                className="relative transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href="tel:+254711789438"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.09]"
            >
              <Phone
                size={16}
                style={{ color: GOLD }}
                className="transition-transform group-hover:-rotate-12"
              />
              0711 789 438
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 sm:gap-x-12">
            {serviceHighlights.map((highlight) => (
              <li key={highlight} className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">{highlight}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* slide selector */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8 lg:px-12">
        <div className="flex items-center gap-5">
          {slides.map((slide, i) => (
            <button
              key={slide.label}
              onClick={() => setActiveSlide(i)}
              className="group flex items-center gap-2"
              aria-label={`Show ${slide.label} slide`}
            >
              <span className="relative block h-[3px] w-8 overflow-hidden rounded-full bg-white/25">
                {i === activeSlide && (
                  <motion.span
                    key={activeSlide}
                    className="absolute inset-0 origin-left rounded-full"
                    style={{ background: GOLD }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
              </span>
              <span
                className="text-[11px] font-medium uppercase tracking-[0.14em] transition-colors"
                style={{
                  color:
                    i === activeSlide
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.4)",
                }}
              >
                {slide.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-b from-transparent to-white dark:to-[#0A0C10]" />
    </section>
  );
}
