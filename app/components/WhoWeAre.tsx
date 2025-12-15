"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, Check, Factory, Award } from "lucide-react";

type CardId = "overview" | "mission" | "values";

type CardConfig = {
  id: CardId;
  label: string;
  icon: React.ReactNode;
  bg: string;
  border: string;
  title: string;
  body: string;
  extra?: string;
};

const BRAND = {
  gold: "#FFBF00", // ✅ UPDATED BRAND COLOR
  navy: "#0A1A2F",
  softWhite: "#FAFAF7",
};

const cardsConfig: CardConfig[] = [
  {
    id: "overview",
    label: "Company Overview",
    icon: <Factory size={24} />,
    bg: "bg-gradient-to-br from-[#0A1A2F] to-[#0A1A2F]/90",
    border: "border-white/20",
    title: "Controlled, Professional Production",
    body: "Machine-vibro compacted cabro blocks and precast units manufactured under strict curing and quality control.",
    extra: "Ideal for estates, commercial compounds and heavy duty yards.",
  },
  {
    id: "mission",
    label: "Our Mission",
    icon: <Target size={24} />,
    bg: "bg-gradient-to-br from-[#FFBF00] to-[#D9A600]",
    border: "border-white/20",
    title: "Building Long-Lasting Surfaces",
    body: "To deliver cabro and concrete products that stand the test of time and reduce maintenance costs for our clients.",
    extra: "From small home projects to large infrastructure works.",
  },
  {
    id: "values",
    label: "Our Core Values",
    icon: <Award size={24} />,
    bg: "bg-gradient-to-br from-[#0A1A2F] to-[#0B2A4A]",
    border: "border-white/20",
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
  const [activeCard, setActiveCard] = useState<CardId>("overview");

  const bringToFront = (id: CardId) => {
    setActiveCard(id);
    setOrder((prev) => {
      const rest = prev.filter((cardId) => cardId !== id);
      return [...rest, id];
    });
  };

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: BRAND.softWhite }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,191,0,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(10,26,47,0.08),transparent_55%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur">
              <div
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: BRAND.gold }}
              />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: BRAND.navy }}
              >
                Who We Are
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: BRAND.navy }}
            >
              Kenya&apos;s Trusted Manufacturer of{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.gold})`,
                }}
              >
                Cabro & Concrete Products
              </span>
            </h2>

            <p className="text-lg text-slate-700">
              Premium Cabro manufactures high-performance cabro and concrete
              products from our factory along Githunguri Road, serving
              residential, commercial and industrial projects.
            </p>

            <ul className="space-y-4">
              {[
                "Fully equipped factory along Githunguri Road, Kiambu.",
                "Machine-pressed, properly cured cabro for consistent strength.",
                "Reinforced concrete products for real site conditions.",
                "Technical guidance for contractors and homeowners.",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-black/5 shadow-sm"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.gold})`,
                    }}
                  >
                    <Check size={20} />
                  </div>
                  <span className="text-slate-800 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARDS */}
          <div className="relative h-[500px]">
            {order.map((id, index) => {
              const cfg = cardsConfig.find((c) => c.id === id)!;
              const isFront = index === order.length - 1;

              return (
                <motion.div
                  key={id}
                  onClick={() => bringToFront(id)}
                  className={`absolute left-1/2 top-1/2 w-[300px] h-[380px] rounded-3xl cursor-pointer overflow-hidden shadow-2xl border-2 ${cfg.border}`}
                  style={{ translateX: "-50%", translateY: "-50%" }}
                  animate={{
                    x: index === 0 ? -60 : index === 1 ? 0 : 60,
                    y: index === 0 ? -40 : index === 1 ? 40 : -20,
                    scale: isFront ? 1 : 0.9,
                    opacity: isFront ? 1 : 0.88,
                    rotate: index === 0 ? -5 : index === 1 ? 0 : 5,
                  }}
                >
                  <div className={`absolute inset-0 ${cfg.bg}`} />
                  <div className="relative h-full p-8 flex flex-col justify-end text-white">
                    <span className="text-xs font-semibold uppercase opacity-80">
                      {cfg.label}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{cfg.title}</h3>
                    <p className="text-sm opacity-90 mt-3">{cfg.body}</p>
                    {cfg.extra && (
                      <p className="text-xs opacity-75 mt-3">{cfg.extra}</p>
                    )}

                    {/* Indicator dot */}
                    <div
                      className={`absolute bottom-6 right-6 h-3 w-3 rounded-full ${
                        activeCard === id
                          ? "bg-[#FFBF00] ring-2 ring-white ring-offset-2 ring-offset-[#FFBF00]/30 animate-pulse"
                          : "bg-white/50"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
