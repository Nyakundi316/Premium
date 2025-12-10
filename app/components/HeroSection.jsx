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
    image: "/images/landscape_pool_kerbstone.jpg ",
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

  const current = heroImages[activeIndex];
                                        
  const next = () =>
    setActiveIndex((i) => (i + 1) % heroImages.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative overflow-hidden bg-white text-[#041544]">
      <div className="container mx-auto flex min-h-[80vh] flex-col justify-between px-4 pb-20 pt-28 md:px-8 md:pb-24 md:pt-32">
        {/* MAIN GRID */}
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
          {/* LEFT – TEXT (words unchanged) */}
          <div className="max-w-xl">
            {/* badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FACC6B]/60 bg-[#FFF7E0] px-3 py-1.5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#D4A017]" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#A46306] md:text-sm">
                Premium Paving Blocks Ltd (PPBL)
              </span>
            </div>

            {/* heading */}
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">
                Premium Paving Blocks Ltd (PPBL)
              </span>
              <span className="mt-2 block text-[#D4A017]">
                Factory-Direct Cabro, Culverts
              </span>
              <span className="mt-1 block text-2xl sm:text-3xl md:text-4xl">
                & Concrete Products in Kenya
              </span>
            </h1>

            {/* tagline */}
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 md:text-xs">
              Strength You Can Trust. Quality You Can See.
            </p>

            {/* main paragraph */}
            <p className="mt-4 max-w-xl rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm md:px-5 md:py-4 md:text-lg">
              High-strength paving blocks, reinforced culverts, fencing posts and
              kerbstones — all manufactured with precision for residential,
              commercial and industrial projects.
            </p>

            {/* delivery areas */}
            <p className="mt-3 max-w-xl text-xs text-slate-600 md:text-sm">
              We deliver across{" "}
              <span className="font-semibold">
                Kiambu, Nairobi, Ruiru, Thika Road and surrounding regions.
              </span>
            </p>

            {/* key benefits */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2 md:gap-4">
              {[
                "Heavy-duty load bearing",
                "Weather-resistant finish",
                "Low maintenance cost",
                "Professional installation team",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#D4A017]/20 to-transparent">
                    <span className="text-sm font-bold text-[#0A1A2F]">✓</span>
                  </div>
                  <span className="text-sm text-slate-700 md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+254711789438"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#D4A017] to-[#F0B429] px-7 py-3 text-sm font-semibold text-[#0A1A2F] shadow-md transition-all hover:shadow-xl hover:shadow-[#D4A017]/40 md:text-base"
              >
                Call / WhatsApp for Instant Quotes
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-[#D4A017] hover:bg-[#FFF7E0] md:text-base"
              >
                Free Site Visits Available
              </Link>
            </div>

            {/* stats */}
            <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
              {[
                { value: "2021", label: "Year established" },
                { value: "200+", label: "Projects completed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-[#F5F7FB] p-3 text-center"
                >
                  <p className="text-xl font-bold text-[#D4A017] md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-600 md:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – IMAGE CARD */}
          <div>
            <div className="relative h-80 rounded-3xl border border-slate-200 bg-slate-900/10 shadow-2xl sm:h-80 lg:h-[420px] overflow-hidden">
              <Image
                key={current.src}
                src={current.src}
                alt={current.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width:1024px) 40vw, 100vw"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-4 sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#FACC6B]">
                  Featured Project
                </p>
                <p className="text-sm font-semibold text-white sm:text-base">
                  {current.title}
                </p>
                <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                  {current.description}
                </p>
              </div>

              {/* controls */}
              <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-900 text-sm shadow-md hover:bg-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-900 text-sm shadow-md hover:bg-white"
                >
                  ›
                </button>
              </div>
            </div>

            {/* dots */}
            <div className="mt-3 flex justify-center gap-2">
              {heroImages.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === activeIndex ? "w-5 bg-[#D4A017]" : "w-2 bg-slate-400/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM THUMBNAILS */}
        <div className="mt-10 lg:mt-12">
          {/* mobile: scrollable row */}
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:hidden">
            {quickLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-20 w-20 flex-none">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center px-3 py-2">
                  <p className="text-xs font-semibold text-[#041544]">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-slate-500">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* desktop: centered strip */}
          <div className="hidden md:block">
            <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group w-40 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <p className="truncate text-[11px] font-semibold text-[#041544]">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
