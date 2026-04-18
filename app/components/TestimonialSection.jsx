"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GOLD = "#FFC20E";

const testimonials = [
  {
    id: 1,
    name: "J. Mwangi",
    role: "Homeowner – Ruiru",
    message:
      "They came for the site visit on Tuesday, we agreed on the quote by Thursday, and the team was done in four days. The driveway has been through two long rains and hasn't moved.",
  },
  {
    id: 2,
    name: "Sarah W.",
    role: "Estate Developer – Kiambu",
    message:
      "Their 80mm blocks are extremely strong and durable. We've used them on several projects and the quality is always consistent.",
  },
  {
    id: 3,
    name: "Eng. Mutiso",
    role: "Civil Engineer – Nairobi",
    message:
      "Most suppliers cut corners on curing time. These blocks are properly done — vibro-compacted and cured right. I've specified them on two commercial jobs without complaints.",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section className="relative bg-[#0D1B30] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="mb-10 max-w-xl">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What our clients say
          </h2>
          <p className="mt-3 text-base text-white/45">
            Real people, real projects. Here's what clients say after the job is done.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
                <div>
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${GOLD}20` }}>
                    <Quote size={18} style={{ color: GOLD }} />
                  </div>

                  <p className="text-base leading-7 text-white/80 italic sm:text-lg sm:leading-8">
                    &ldquo;{current.message}&rdquo;
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-white/35">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
                      Verified client
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      Projects across Nairobi, Kiambu & Ruiru
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:flex-col md:items-center md:text-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-[#0D1B30]" style={{ borderColor: `${GOLD}60` }}>
                    <span className="text-xl font-bold" style={{ color: GOLD }}>
                      {current.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{current.name}</p>
                    <p className="text-xs text-white/45">{current.role}</p>
                    <div className="mt-1.5 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-sm" style={{ color: GOLD }}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: active === i ? 32 : 10,
                  background: active === i ? GOLD : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-[#0A0C10]" />
    </section>
  );
}
