"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Target, Award, CheckCircle } from "lucide-react";

type TabId = "overview" | "mission" | "values";

const BRAND = {
  primary: "#B8860B",
  primaryLight: "#D4AF37",
  dark: "#0F172A",
  light: "#E5EAF1",
  surface: "#FFFFFF",
  accent: "#334155",
};

const PROOF_IMAGE = "/images/Cabros.png";

const TABS: {
  id: TabId;
  label: string;
  title: string;
  body: string;
  chips: string[];
}[] = [
  {
    id: "overview",
    label: "Overview",
    title: "Precision Manufacturing. Uncompromising Quality.",
    body:
      "Every cabro and concrete product is manufactured under controlled conditions with proper curing cycles to achieve uniform strength, refined finish, and long-term durability.",
    chips: ["Factory Production", "Controlled Curing", "Structural Integrity"],
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Built for Performance. Designed to Last.",
    body:
      "We provide paving solutions that reduce long-term maintenance while delivering consistency in strength, alignment, and surface appearance.",
    chips: ["Longevity", "Low Maintenance", "Reliable Output"],
  },
  {
    id: "values",
    label: "Our Values",
    title: "Consistency, Transparency, Craft.",
    body:
      "Our work is guided by material discipline, honest processes, and expert guidance on patterns, thickness, and site suitability.",
    chips: ["Clear Standards", "Expert Guidance", "Reliable Delivery"],
  },
];

function TabIcon({ id }: { id: TabId }) {
  if (id === "overview") return <Factory size={18} />;
  if (id === "mission") return <Target size={18} />;
  return <Award size={18} />;
}

export default function WhoWeAreSectionModern() {
  const [active, setActive] = useState<TabId>("overview");

  const current = useMemo(
    () => TABS.find((t) => t.id === active) ?? TABS[0],
    [active]
  );

  const cardShadow =
    "inset 0 1px 0 rgba(255,255,255,0.65), 0 10px 24px rgba(15,23,42,0.08)";

  return (
    <section
      // ✅ tighter spacing to “snap” under hero
      className="relative py-12 sm:py-14 lg:py-16 border-b border-slate-200/80"
      style={{ backgroundColor: BRAND.light }}
    >
      {/* ✅ same container as hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* LEFT */}
          <div className="space-y-5">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 rounded-full px-4 py-2"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${BRAND.primary}26`,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.65)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND.primary }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.12em]"
                style={{ color: BRAND.dark }}
              >
                Craftsmanship Redefined
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05]"
              style={{ color: BRAND.dark }}
            >
              Engineered Excellence in{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryLight})`,
                }}
              >
                Concrete Solutions
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700/90 leading-relaxed max-w-[58ch]">
              Premium cabro solutions crafted for uniformity, durability, and
              clean finishing across residential, commercial, and industrial
              projects.
            </p>

            {/* Info Card */}
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${BRAND.dark}14`,
                boxShadow: cardShadow,
              }}
            >
              <h4
                className="text-sm font-semibold uppercase tracking-wide mb-2"
                style={{ color: BRAND.dark }}
              >
                Material & Finish Quality
              </h4>

              <p className="text-sm sm:text-base text-slate-700/90 leading-relaxed max-w-[62ch]">
                Our cabro blocks are engineered for uniform density, precise
                edges, and consistent surface texture—resulting in easier
                installation and a refined final appearance.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Uniform Density",
                  "Sharp Edges",
                  "Surface Consistency",
                  "Easy Installation",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="max-w-full truncate rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium"
                    title={chip}
                    style={{
                      backgroundColor: `${BRAND.primary}12`,
                      border: `1px solid ${BRAND.primary}26`,
                      color: BRAND.dark,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${BRAND.dark}14`,
                boxShadow: cardShadow,
              }}
            >
              <div className="relative h-[220px] sm:h-[280px] lg:h-[330px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent z-10" />
                <Image
                  src={PROOF_IMAGE}
                  alt="Cabro paving blocks installation"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                />
              </div>

              {/* ✅ tiny proof badge (clean) */}
              <div className="absolute top-4 left-4 z-20">
                <div
                  className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.92)",
                    color: BRAND.dark,
                    border: `1px solid ${BRAND.dark}14`,
                    boxShadow: "0 8px 18px rgba(15,23,42,0.16)",
                  }}
                >
                  <CheckCircle size={14} color={BRAND.primary} />
                  Quality Checked
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5">
                <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                  Precision in Every Block
                </p>
                <p className="text-[11px] sm:text-xs text-white/80 mt-1 leading-snug">
                  Factory-cured • Machine-formed • Uniform finish
                </p>
              </div>
            </motion.div>

            {/* Tabs */}
            <div
              className="rounded-2xl p-1.5"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${BRAND.dark}14`,
                boxShadow: cardShadow,
              }}
            >
              <div
                className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-1"
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

                {TABS.map((t) => {
                  const isActive = t.id === active;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(t.id)}
                      type="button"
                      aria-pressed={isActive}
                      className="snap-start flex-none w-[78%] sm:w-auto sm:flex-1 min-w-0 rounded-xl px-3 py-3 transition-all"
                      style={{
                        backgroundColor: isActive ? BRAND.surface : "transparent",
                        border: isActive
                          ? `2px solid ${BRAND.primary}`
                          : "2px solid transparent",
                      }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: isActive ? "#FFFBEB" : "#F1F5F9",
                          }}
                        >
                          <span
                            style={{
                              color: isActive ? BRAND.primary : BRAND.accent,
                            }}
                          >
                            <TabIcon id={t.id} />
                          </span>
                        </div>

                        <div className="text-left min-w-0">
                          <div className="text-sm font-semibold text-slate-900 truncate">
                            {t.label}
                          </div>
                          <div className="text-xs text-slate-500 truncate">
                            {isActive ? "Active" : "Tap to view"}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="mt-2 text-[11px] text-slate-500 text-center sm:hidden">
                Swipe to view tabs →
              </p>
            </div>

            {/* Content */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="rounded-3xl p-5 sm:p-6"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${BRAND.dark}14`,
                boxShadow: cardShadow,
              }}
            >
              <h3
                className="text-lg sm:text-2xl font-bold mb-3 break-words"
                style={{ color: BRAND.dark }}
              >
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700/90 leading-relaxed break-words">
                {current.body}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {current.chips.map((chip) => (
                  <span
                    key={chip}
                    className="max-w-full truncate rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium"
                    title={chip}
                    style={{
                      backgroundColor: `${BRAND.primary}12`,
                      border: `1px solid ${BRAND.primary}26`,
                      color: BRAND.dark,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
