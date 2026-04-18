"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Home,
  Building2,
  Truck,
  Check,
  X,
  Expand,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Product = {
  id: string;
  name: string;
  tag: string;
  description: string;
  sizes: string;
  bestFor: string;
  image: string;
  href: string;
  extraDetails: string;
  Icon: LucideIcon;
  features: string[];
};

const GOLD = "#FFC20E";

const products: Product[] = [
  {
    id: "cabro",
    name: "Cabro Paving Blocks",
    tag: "60mm · 80mm · 3D Decorative",
    description:
      "Machine-vibro compacted cabro blocks for homes, estates, malls and industrial yards.",
    sizes: "60mm, 80mm, 3D decorative",
    bestFor: "Driveways, parking, estate roads, walkways",
    image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
    href: "/products/cabro",
    extraDetails:
      "Available in Zigzag, Tri-Hex, 3D, cobblestone and brick patterns. Ideal for new projects and renovations where a neat, long-lasting finish is required.",
    Icon: Home,
    features: ["Weather-resistant", "Low maintenance", "Many patterns", "Heavy-duty"],
  },
  {
    id: "culverts",
    name: "Reinforced Concrete Culverts",
    tag: "300mm – 1200mm",
    description:
      "Heavy-duty culverts designed for road drainage, stormwater and estate access roads.",
    sizes: "300mm, 450mm, 600mm, 900mm, 1200mm",
    bestFor: "Road drainage, stormwater, estate & farm access",
    image: "/images/reinforce concrete culvert.png",
    href: "/products/culverts",
    extraDetails:
      "Steel-reinforced for maximum strength and durability. Suitable for county roads, estate entrances, farm crossings and industrial sites with regular truck traffic.",
    Icon: Truck,
    features: ["Steel-reinforced", "Durable", "Various sizes", "Easy installation"],
  },
  {
    id: "fence-posts",
    name: "Concrete Fencing Posts",
    tag: "6ft – 10ft",
    description:
      "Straight, termite-proof posts ideal for plots, farms, estates and commercial fencing.",
    sizes: "6ft, 7ft, 8ft, 9ft, 10ft",
    bestFor: "Plot, farm, estate & perimeter fencing",
    image: "/images/fence.png",
    href: "/products/fencing-posts",
    extraDetails:
      "Works with chain-link, barbed wire or razor wire. Concrete posts last longer than timber and require very little maintenance over their lifetime.",
    Icon: Building2,
    features: ["Termite-proof", "Low maintenance", "Various heights", "Weather-resistant"],
  },
];

export default function CoreProductsSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="bg-slate-50 dark:bg-[#0F1219] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Header: image left, text right */}
        <div className="mb-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/Driveways.png"
                alt="Premium Concrete paving installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Our Products
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[#0F172A] dark:text-white sm:text-4xl">
              Precision concrete products made in Kenya
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We supply durable, well-finished concrete products for residential, commercial and industrial projects across Kenya.
            </p>

            <div className="mt-6 space-y-2.5">
              {["Factory-direct pricing (no middlemen)", "Consistent production & quality checks", "Nationwide delivery support"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: `${GOLD}18` }}>
                    <Check size={14} style={{ color: GOLD }} />
                  </div>
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
              style={{ background: GOLD }}
            >
              Explore All Products
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Product cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => setLightbox({ src: product.image, alt: product.name })}
                className="relative h-52 overflow-hidden sm:h-56"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 opacity-0 shadow transition-opacity group-hover:opacity-100">
                  <Expand size={14} className="text-slate-700" />
                </div>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-1">
                    <product.Icon size={14} className="text-slate-500" />
                    <span className="text-[11px] font-medium text-slate-500">Product</span>
                  </div>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#0D1B30]" style={{ background: GOLD }}>
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{product.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.features.map((f) => (
                    <span key={f} className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-600">{f}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <Link href={product.href} className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: GOLD }}>
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative aspect-[4/3] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" priority />
              <button onClick={() => setLightbox(null)} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 transition hover:bg-white/20">
                <X size={20} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
