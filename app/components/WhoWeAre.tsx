"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type CardId = "overview" | "mission" | "values";

type CardConfig = {
  id: CardId;
  label: string;
  bg: string;
  accent: string;
  offset: { x: number; y: number };
  title: string;
  body: string;
  extra?: string;
};

const cardsConfig: CardConfig[] = [
  {
    id: "overview",
    label: "Company Overview",
    bg: "#1F2937", // deep navy
    accent: "#FACC6B",
    offset: { x: -160, y: -40 },
    title: "Controlled, professional production",
    body: "Machine-vibro compacted cabro blocks and precast units manufactured under strict curing and quality control.",
    extra: "Ideal for estates, commercial compounds and heavy duty yards.",
  },
  {
    id: "mission",
    label: "Our Mission",
    bg: "#252F3F", // slightly lighter navy
    accent: "#D4A017",
    offset: { x: 0, y: 40 },
    title: "Building long-lasting surfaces",
    body: "To deliver concrete products that stand the test of time and reduce maintenance costs for our clients.",
    extra: "From small home projects to large infrastructure works.",
  },
  {
    id: "values",
    label: "Our Core Values",
    bg: "#2B364C", // bluish slate
    accent: "#A5B4FC",
    offset: { x: 160, y: 80 },
    title: "Integrity • Reliability • Craftsmanship",
    body: "Transparent pricing, dependable delivery schedules and properly engineered, well-finished products.",
    extra: "We advise on thickness, patterns and best solutions per site.",
  },
];

export default function WhoWeAreSection() {
  const [order, setOrder] = useState<CardId[]>([
    "overview",
    "mission",
    "values",
  ]);

  const bringToFront = (id: CardId) => {
    setOrder((prev) => {
      const rest = prev.filter((cardId) => cardId !== id);
      return [...rest, id];
    });
  };

  return (
    <section
      id="who-we-are"
      className="relative bg-[#e8ecf3] py-20 md:py-24 text-slate-900"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:gap-16 md:px-8">
        {/* LEFT TEXT BLOCK */}
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FACC6B]/60 bg-white/90 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[#7A4A04]">
              Who We Are
            </span>
          </div>

          <h2 className="text-2xl font-semibold leading-tight text-[#071326] md:text-3xl lg:text-4xl">
            Kenya’s trusted manufacturer of{" "}
            <span className="font-bold text-[#D4A017]">
              cabro & concrete products
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            Premium Paving Blocks Ltd (PPBL) manufactures high-performance
            cabro and concrete products from our factory along Githunguri Road,
            serving residential, commercial and industrial projects.
          </p>

          <p className="mt-5 max-w-xl text-sm text-slate-700 md:text-base">
            We produce durable, properly cured, machine-vibro compacted paving
            blocks and reinforced concrete products that meet modern
            construction demands for{" "}
            <span className="font-semibold">
              estates, commercial compounds, roads and industrial yards
            </span>
            .
          </p>

          <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
            {[
              "Fully equipped factory along Githunguri Road, Kiambu.",
              "Machine-pressed, properly cured cabro for consistent strength.",
              "Reinforced concrete products designed for real site conditions.",
              "Technical support for contractors, developers and homeowners.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT INTERACTIVE CARD STACK */}
        <div className="relative flex-1">
          {/* big invisible box to contain the cards */}
          <div className="relative mx-auto h-[340px] w-full max-w-[540px]">
            {order.map((id, index) => {
              const cfg = cardsConfig.find((c) => c.id === id)!;
              const isFront = index === order.length - 1;

              return (
                <motion.div
                  key={id}
                  onClick={() => bringToFront(id)}
                  className="absolute left-1/2 top-1/2 h-[170px] w-[270px] cursor-pointer rounded-3xl text-slate-50 shadow-lg sm:h-[190px] sm:w-[300px]"
                  style={{
                    translateX: "-50%",
                    translateY: "-50%",
                    zIndex: 10 + index,
                    backgroundColor: cfg.bg,
                  }}
                  initial={false}
                  animate={{
                    x: cfg.offset.x,
                    y: cfg.offset.y,
                    scale: isFront ? 1 : 0.95,
                    opacity: isFront ? 1 : 0.85,
                    boxShadow: isFront
                      ? "0 26px 60px rgba(15,23,42,0.55)"
                      : "0 14px 34px rgba(15,23,42,0.3)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                >
                  <div className="flex h-full flex-col justify-between px-4 py-4 sm:px-5 sm:py-5">
                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                        style={{ color: cfg.accent }}
                      >
                        {cfg.label}
                      </p>
                      <h3 className="mt-2 text-sm font-semibold sm:text-base">
                        {cfg.title}
                      </h3>
                      <p className="mt-2 text-[11px] leading-relaxed text-slate-200 sm:text-[12px]">
                        {cfg.body}
                      </p>
                    </div>
                    {cfg.extra && (
                      <p className="mt-2 text-[11px] font-medium text-slate-100/80">
                        {cfg.extra}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Tap or click any card to bring it to the front — the story panels
            rotate as you explore who we are.
          </p>
        </div>
      </div>
    </section>
  );
}
