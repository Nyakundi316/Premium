"use client";

import {
  ClipboardList,
  CheckCircle,
  PhoneCall,
  Truck,
  Hammer,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const GOLD = "#FFC20E";

const steps = [
  {
    id: 1,
    title: "Site Visit & Assessment",
    desc: "Our team visits your site to measure the area, understand soil conditions, and discuss design preferences.",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Product Selection",
    desc: "Choose from our wide range of cabro, cobblestone, hexagon, trihex and industrial paving blocks.",
    icon: CheckCircle,
  },
  {
    id: 3,
    title: "Quotation & Approval",
    desc: "We prepare a detailed quote covering materials, labour, delivery, and installation timeline.",
    icon: PhoneCall,
  },
  {
    id: 4,
    title: "Manufacturing & Delivery",
    desc: "Your paving blocks are machine-pressed, cured, and delivered directly to the site.",
    icon: Truck,
  },
  {
    id: 5,
    title: "Professional Installation",
    desc: "Our trained installers prepare the base, compact the surface, lay the cabro, and apply edge restraints.",
    icon: Hammer,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative bg-[#0D1B30] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
            Our Process
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-base leading-7 text-white/55">
            Here's exactly what happens after you contact us — no surprises, no hidden costs.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden -mx-5 px-5">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          >
            {steps.map(({ id, title, desc, icon: Icon }) => (
              <div
                key={id}
                className="min-w-[80%] snap-start rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${GOLD}20` }}>
                    <Icon size={20} style={{ color: GOLD }} />
                  </div>
                  <span className="text-xs font-medium text-white/35">{id}/5</span>
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {steps.map(({ id, title, desc, icon: Icon }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group rounded-2xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-105" style={{ background: `${GOLD}18` }}>
                  <Icon size={22} style={{ color: GOLD }} />
                </div>
                <span className="text-xs font-medium text-white/30">Step {id}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products/cabro"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: GOLD }}
          >
            View cabro options <ArrowRight size={15} />
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-[#0A0C10]" />
    </section>
  );
}
