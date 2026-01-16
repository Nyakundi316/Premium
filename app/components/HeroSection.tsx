"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar, Star, ArrowRight, ChevronRight } from "lucide-react";

const BRAND = "#FFBF00";

// Product strip items
const quickLinks = [
  {
    id: "cabro",
    title: "Cabro Blocks",
    subtitle: "60mm & 80mm",
    image: "/images/Clay-paving-blocks.jpg",
    href: "/products/cabro",
  },
  {
    id: "culverts",
    title: "Concrete Culverts",
    subtitle: "Road & drainage",
    image: "/images/culvert-thumb.jpg",
    // no href
  },
  {
    id: "posts",
    title: "Fencing Posts",
    subtitle: "Plots & farms",
    image: "/images/fence.png",
    href: "/products/fencing-posts",
  },
  {
    id: "kerbs",
    title: "Kerbs & Channels",
    subtitle: "Estate finish",
    image: "/images/kerbs-drainage.jpg",
    // no href
  },
  {
    id: "services",
    title: "Supply & Installation",
    subtitle: "All services",
    image: "/images/landscape_pool_kerbstone.jpg",
    href: "/services",
  },
];

export default function HeroSection() {
  // SEO JSON-LD
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Premium Cabro Blocks Kenya",
      telephone: "+254711789438",
      areaServed: "Kenya",
      address: { "@type": "PostalAddress", addressCountry: "KE" },
      url: "https://YOUR-DOMAIN.co.ke",
      image: "https://YOUR-DOMAIN.co.ke/images/Construction.jpeg",
      priceRange: "$$",
    }),
    []
  );

  // Auto-scroll product strip only on mobile
  const stripRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const [hideHint, setHideHint] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const isMobile = () => window.innerWidth < 768;

    const onPointerDown = () => {
      pausedRef.current = true;
      setHideHint(true);
    };
    const onPointerUp = () => {
      pausedRef.current = false;
    };
    const onScroll = () => {
      if (el.scrollLeft > 10) setHideHint(true);
    };

    el.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    el.addEventListener("scroll", onScroll, { passive: true });

    const speedPxPerSec = 28;

    const tick = (ts: number) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (isMobile() && !pausedRef.current && el.scrollWidth > el.clientWidth) {
        const dx = (speedPxPerSec * dt) / 1000;
        el.scrollLeft += dx;

        const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
        if (nearEnd) el.scrollLeft = 0;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <div className="relative min-h-[85svh] sm:min-h-[75svh] md:min-h-[80vh]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Cabro blocks supply and installation in Kenya"
            fill
            priority
            className="object-cover object-center md:object-left"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 md:from-black/75 md:via-black/45 md:to-black/20" />
          <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12 h-full flex items-center">
            <div className="max-w-3xl text-left w-full">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] lg:leading-[1.05]"
              >
                Cabro Blocks in Kenya{" "}
                <span style={{ color: BRAND }}>60mm &amp; 80mm</span>
                <span className="block text-white/90 text-xl sm:text-2xl lg:text-4xl font-bold mt-2 sm:mt-3">
                  Supply • Delivery • Installation
                </span>
              </motion.h1>

              {/* Sub text */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-4 sm:mt-5 text-sm sm:text-lg text-white/85 max-w-2xl"
              >
                Get accurate quantities, durable finishes and reliable delivery
                for driveways, parking, walkways and commercial compounds.
              </motion.p>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-4 sm:mt-5 flex items-center gap-2 text-xs sm:text-sm text-white/85"
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: BRAND }} />
                <span>
                  Trusted by homeowners, estates &amp; contractors across Kenya
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                {/* Primary */}
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-bold shadow-sm transition w-full sm:w-auto min-h-[52px] sm:min-h-[60px]"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND}, ${BRAND}CC)`,
                    color: "#111",
                    borderRadius: "0px",
                  }}
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="flex-1 text-center sm:text-left">
                    Get a Quote / Site Visit
                  </span>
                  <ArrowRight
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
                  />
                </Link>

                {/* Secondary */}
                <a
                  href="tel:+254711789438"
                  className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold border border-white/25 bg-white/10 hover:bg-white/15 transition w-full sm:w-auto min-h-[52px] sm:min-h-[60px]"
                  style={{
                    color: "#fff",
                    borderRadius: "0px",
                  }}
                >
                  <Phone
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: BRAND }}
                  />
                  <span className="flex-1 text-center sm:text-left">
                    Call: +254 711 789 438
                  </span>
                </a>
              </motion.div>

              {/* Micro SEO */}
              <p className="mt-4 sm:mt-5 text-xs text-white/65">
                Cabro blocks price Kenya • Cabro installation Nairobi • 60mm &amp;
                80mm paving blocks • Delivery countrywide
              </p>
            </div>
          </div>
        </div>

        {/* Soft fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Product strip */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold tracking-wide text-gray-900">
                Explore Products
              </p>
              <p className="text-xs text-gray-500">
                Tap to view details &amp; specs
              </p>
            </div>

            <Link
              href="/products"
              className="text-sm font-semibold inline-flex items-center gap-1"
              style={{ color: BRAND }}
            >
              See all <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile: slider */}
          <div className="relative md:hidden">
            <div
              ref={stripRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scroll-smooth"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {quickLinks.map((item) => {
                const clickable = Boolean(item.href);

                const CardInner = (
                  <div
                    className="snap-center flex-none w-72 sm:w-80 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition active:scale-[0.98]"
                    onClick={() => setHideHint(true)}
                  >
                    <div className="relative h-40 sm:h-44">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="288px"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <h3 className="font-bold text-base sm:text-lg text-white truncate">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-xs sm:text-sm truncate">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );

                return clickable && item.href ? (
                  <Link key={item.id} href={item.href} className="flex-none">
                    {CardInner}
                  </Link>
                ) : (
                  <div key={item.id} className="flex-none">
                    {CardInner}
                  </div>
                );
              })}
            </div>

            {/* Swipe hint */}
            {!hideHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2"
              >
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 sm:px-4 py-1 sm:py-2">
                  <span className="text-xs text-gray-700">Swipe</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="flex items-center"
                  >
                    <ChevronRight
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: BRAND }}
                    />
                    <ChevronRight
                      className="w-4 h-4 sm:w-5 sm:h-5 -ml-2"
                      style={{ color: BRAND }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {quickLinks.map((item, i) => {
              const clickable = Boolean(item.href);

              const CardInner = (
                <div className="block rounded-xl lg:rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300">
                  <div className="relative h-36 lg:h-40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 33vw, 20vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4">
                      <h3 className="text-white font-bold text-sm lg:text-base truncate">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-xs lg:text-sm truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {clickable && item.href ? (
                    <Link href={item.href}>{CardInner}</Link>
                  ) : (
                    CardInner
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
