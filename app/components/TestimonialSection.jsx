"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Mr. Kamau",
      role: "Homeowner – Kiambu",
      message:
        "PCBL transformed my driveway with high-quality cabro blocks. The installation team was professional, timely and very reliable.",
      image: "/images/testimonials/client1.jpg",
    },
    {
      id: 2,
      name: "Sarah W.",
      role: "Estate Developer – Ruiru",
      message:
        "Their 80mm blocks are extremely strong and durable. We’ve used them on several projects and the quality is always consistent.",
      image: "/images/testimonials/client2.jpg",
    },
    {
      id: 3,
      name: "Eng. Mutiso",
      role: "Civil Engineer – Nairobi",
      message:
        "PPBL provides properly cured, vibro-compacted cabro blocks that meet engineering standards. Highly recommended for commercial jobs.",
      image: "/images/testimonials/client3.jpg",
    },
  ];

  const [active, setActive] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[active];

  return (
    <section className="relative py-14 md:py-20 bg-[#eff1f7] text-[#041544] overflow-hidden">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-6 h-32 w-32 rounded-full bg-[#D4A017]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-32 w-32 rounded-full bg-[#0A1A2F]/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-3 py-1 mb-3 md:mb-4">
            <div className="h-2 w-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#A47500]">
              Testimonials
            </span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            What Our <span className="text-[#D4A017]">Clients Say</span>
          </h2>

          <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-gray-600">
            Trusted by homeowners, contractors, engineers and estate developers
            across Kenya.
          </p>
        </div>

        {/* CARD + ANIMATION */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                relative
                bg-white/95 border border-gray-200
                rounded-2xl sm:rounded-3xl
                shadow-lg
                px-4 py-6 sm:px-6 sm:py-7 md:px-10 md:py-10
              "
              aria-live="polite"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 items-center">
                {/* Left: Quote & message (spans 2 cols on md) */}
                <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#D4A017]/15">
                      <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4A017]" />
                    </div>
                    <p className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-500">
                      Real feedback from clients who’ve used our products on
                      residential and commercial projects.
                    </p>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed italic">
                    “{current.message}”
                  </p>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 text-[11px] sm:text-xs md:text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                      Verified client feedback
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0A1A2F]" />
                      Projects across Nairobi, Kiambu & Ruiru
                    </div>
                  </div>
                </div>

                {/* Right: Client info */}
                <div className="mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left gap-2">
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden border-2 border-[#D4A017]/60 shadow-sm mb-1 sm:mb-2">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#041544]">
                    {current.name}
                  </p>
                  <p className="text-[11px] sm:text-xs md:text-sm text-gray-600">
                    {current.role}
                  </p>

                  {/* Star rating */}
                  <div className="flex gap-0.5 sm:gap-1 items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-[#D4A017] text-sm sm:text-base leading-none"
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-[10px] sm:text-[11px] md:text-xs text-gray-500">
                      5.0 / 5.0 average rating
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setActive(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  active === index
                    ? "bg-[#D4A017] scale-125 shadow-sm"
                    : "bg-gray-400/40 hover:bg-gray-500/80"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
