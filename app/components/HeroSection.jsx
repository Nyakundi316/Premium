"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false); // for smooth intro

  const next = () => setActiveIndex((i) => (i + 1) % heroImages.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  // gentle entrance animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // auto slide (desktop + mobile)
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = heroImages[activeIndex];

  return (
    <section
      className={`
        relative overflow-hidden min-h-screen
        bg-white text-slate-900
        dark:bg-white dark:text-slate-900
        transition-colors duration-300
      `}
    >
      {/* soft background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-[#D4A017]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-10 w-60 h-60 md:w-80 md:h-80 bg-[#D4A017]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #D4A01722 1px, transparent 1px),
                                linear-gradient(to bottom, #D4A01722 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* light floating squares */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#D4A017]/20 rounded-lg"
            style={{
              top: `${20 + i * 25}%`,
              left: `${8 + i * 22}%`,
              width: "40px",
              height: "40px",
              transform: `rotate(${45 + i * 15}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 md:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN – content */}
          <div
            className={`
              space-y-8
              transition-all duration-700
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A017]/10 to-transparent border border-[#D4A017]/30 rounded-full px-3 py-1.5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-medium tracking-[0.18em] text-[#D4A017] uppercase">
                Premium Paving Solutions
              </span>
            </div>

            {/* heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Spaces with{" "}
              <span className="relative inline-block">
                <span className="text-[#D4A017] relative">
                  Premium Paving
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    width="300"
                    height="12"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M0,6 Q75,0 150,6 T300,6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* subtext */}
            <p className="text-sm md:text-lg leading-relaxed text-slate-700 max-w-xl">
              Durable, high–performance concrete paving blocks for driveways,
              parking areas, walkways and industrial yards — designed to look
              good and last for years with minimal maintenance.
            </p>

            {/* key benefits */}
            <div className="grid sm:grid-cols-2 gap-4 py-2">
              {[
                "Heavy-duty load bearing",
                "Weather-resistant finish",
                "Low maintenance cost",
                "Professional installation team",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4A017]/20 to-transparent flex items-center justify-center">
                    <span className="text-[#D4A017] text-sm font-bold">✓</span>
                  </div>
                  <span className="text-slate-700 text-sm md:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* main CTAs */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center px-7 py-3 rounded-lg bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-semibold text-sm md:text-base shadow-sm hover:shadow-xl hover:shadow-[#D4A017]/30 transition-all"
              >
                Get a Free Site Visit
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-slate-300 text-sm md:text-base font-semibold hover:border-[#D4A017]/60 hover:bg-[#D4A017]/5 transition-all"
              >
                View Completed Projects
              </Link>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              {[
                { value: "200+", label: "Projects completed" },
                { value: "24/7", label: "Client support" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-white/80 text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-[#D4A017]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-xs text-slate-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN – image area */}
          <div
            className={`
              relative
              transition-all duration-700
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {/* MOBILE: simple, clean carousel (full width) */}
            <div className="md:hidden">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/70 bg-slate-900">
                <Image
                  src={current.src}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#D4A017]">
                    Featured Pattern
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {current.title}
                  </p>
                  <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                    {current.description}
                  </p>
                </div>

                {/* controls */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between">
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="w-8 h-8 rounded-full bg-white/85 text-slate-900 flex items-center justify-center text-sm shadow-md"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="w-8 h-8 rounded-full bg-white/85 text-slate-900 flex items-center justify-center text-sm shadow-md"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* dots */}
              <div className="flex justify-center gap-2 mt-3">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex
                        ? "w-5 bg-[#D4A017]"
                        : "w-2 bg-slate-400/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP/TABLET: stepped horizontal layout inside big card */}
            <div className="hidden md:block">
              <div className="relative h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/70 bg-slate-900/80">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/25 to-transparent" />

                {/* stepped cards */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {heroImages.map((img, index) => {
                    const total = heroImages.length;

                    let offset = index - activeIndex;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;

                    if (Math.abs(offset) > 3) return null;

                    const translateX = offset * 150;
                    const scale =
                      Math.abs(offset) === 0
                        ? 1
                        : Math.abs(offset) === 1
                        ? 0.85
                        : 0.7;
                    const zIndex = 10 - Math.abs(offset);
                    const opacity = 1 - Math.abs(offset) * 0.15;

                    return (
                      <div
                        key={img.src}
                        className="absolute transition-all duration-500 ease-out"
                        style={{
                          transform: `translateX(${translateX}px) scale(${scale})`,
                          zIndex,
                          opacity,
                        }}
                      >
                        <div className="relative w-52 h-72 lg:w-60 lg:h-[320px] rounded-xl overflow-hidden shadow-xl bg-black/40 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-500">
                          <Image
                            src={img.src}
                            alt={img.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 240px, 50vw"
                            priority={index === activeIndex}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* bottom info + controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <div className="max-w-[70%]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4A017]">
                      Featured Project
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {current.title}
                    </p>
                    <p className="text-[11px] text-gray-200 mt-1 line-clamp-2">
                      {current.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous image"
                      className="w-9 h-9 rounded-full bg-white/85 text-slate-900 flex items-center justify-center text-sm hover:bg-white transition shadow-md"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next image"
                      className="w-9 h-9 rounded-full bg-white/90 text-slate-900 flex items-center justify-center text-sm hover:bg-white transition shadow-md"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* floating info cards */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-3 sm:p-4 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#0A1A2F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    Free Site Inspection
                  </p>
                  <p className="text-xs text-slate-600">
                    Nairobi & surrounding areas
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#0A1A2F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    Fast Installation
                  </p>
                  <p className="text-xs text-slate-600">
                    Typical projects: 2–5 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-xs text-slate-500 mb-2">
            Scroll to explore our services
          </span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#D4A017] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
