"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Target, Award, CheckCircle2 } from "lucide-react";

type TabId = "overview" | "mission" | "values";

const GOLD = "#FFC20E";

const TABS: {
  id: TabId;
  label: string;
  icon: typeof Factory;
  title: string;
  body: string;
  chips: string[];
}[] = [
  {
    id: "overview",
    label: "Overview",
    icon: Factory,
    title: "Precision manufacturing with controlled consistency.",
    body: "Our cabro and concrete products are produced under controlled factory conditions with proper curing cycles, helping deliver cleaner edges, more reliable strength, and a more refined final finish on site.",
    chips: ["Factory-made", "Controlled curing", "Consistent finish"],
  },
  {
    id: "mission",
    label: "Our Mission",
    icon: Target,
    title: "Built for long-term performance on real projects.",
    body: "We focus on paving solutions that reduce maintenance pressure over time while improving installation consistency, surface appearance, and overall durability across residential and commercial work.",
    chips: ["Long-lasting", "Low maintenance", "Reliable output"],
  },
  {
    id: "values",
    label: "Our Values",
    icon: Award,
    title: "Clear standards, honest process, practical guidance.",
    body: "We believe strong product quality comes from material discipline, transparent production, and practical guidance on pattern choice, block thickness, and site suitability before installation begins.",
    chips: ["Clear standards", "Expert guidance", "Trusted process"],
  },
];

export default function WhoWeAreSectionModern() {
  const [active, setActive] = useState<TabId>("overview");

  const current = useMemo(
    () => TABS.find((t) => t.id === active) ?? TABS[0],
    [active]
  );

  return (
    <section className="bg-slate-50 dark:bg-[#0F1219] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Left: text */}
          <div>
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Who We Are
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-4xl">
              Engineered excellence in concrete solutions
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
              Premium cabro solutions crafted for uniformity, durability, and clean finishing across residential, commercial, and industrial projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Uniform density", "Sharp edges", "Refined finish", "Easy installation"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-3 py-1.5 text-xs font-medium text-[#0F172A] dark:text-white"
                  style={{ borderColor: `${GOLD}30`, background: `${GOLD}08` }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image + tabs */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-[260px] sm:h-[320px]">
                <Image
                  src="/images/products/cabro/Hero2.jpeg"
                  alt="Cabro paving blocks installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    <CheckCircle2 size={13} style={{ color: GOLD }} />
                    Quality checked
                  </div>
                  <p className="text-base font-semibold text-white">Precision in every block</p>
                  <p className="mt-0.5 text-xs text-white/70">Factory-cured · Machine-formed · Uniform finish</p>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-white p-2">
              {TABS.map((tab) => {
                const isActive = tab.id === active;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className="rounded-xl px-3 py-2.5 text-left transition-all"
                    style={{
                      background: isActive ? `${GOLD}12` : "transparent",
                      border: isActive ? `1px solid ${GOLD}35` : "1px solid transparent",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          background: isActive ? "white" : "#F1F5F9",
                          color: isActive ? GOLD : "#94A3B8",
                        }}
                      >
                        <Icon size={15} />
                      </div>
                      <span className="text-sm font-semibold text-[#0F172A] dark:text-white">{tab.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-slate-100 bg-white p-5"
            >
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">{current.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{current.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {current.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border px-3 py-1 text-xs font-medium text-[#0F172A] dark:text-white"
                    style={{ borderColor: `${GOLD}30`, background: `${GOLD}08` }}
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
