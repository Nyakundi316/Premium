"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Factory,
  X,
  Expand,
  Home,
  Building2,
  Truck,
  Check,
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

type LightboxState =
  | {
      src: string;
      alt: string;
    }
  | null;

// ✅ Brand accent
const BRAND_GOLD = "#FFBF00";
const BRAND_GOLD_DARK = "#E6AC00";

// ✅ Slightly deeper off-white so you can SEE the difference on mobile
const BG_FROM = "#EEF2F6";
const BG_TO = "#FFFFFF";

// ✅ ONLY 3 core products
const products: Product[] = [
  {
    id: "cabro",
    name: "Cabro Paving Blocks",
    tag: "60mm • 80mm • 3D Decorative",
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
    image: "/images/reinforce concrete culvert.png", // use a clean image without text
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
  const [openId, setOpenId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const toggleReadMore = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <section
      className="relative py-16 sm:py-18 lg:py-22 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${BG_FROM}, ${BG_TO})`,
      }}
    >
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top: Image Left + Content Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 mb-14">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-white">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/Driveways.png"
                  alt="Kenya Concrete Solutions Manufacturing Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/18 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-5 bg-white/80">
              <div
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: BRAND_GOLD }}
              />
              <span className="text-sm font-semibold tracking-wide text-gray-900">
                Trusted Concrete Solutions
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight break-words">
              Precision Concrete Products{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                }}
              >
                Made in Kenya
              </span>
            </h2>

            {/* Shorter body text */}
            <p className="text-base sm:text-lg text-gray-700 mb-5 leading-relaxed max-w-2xl">
              We supply durable, well-finished concrete products for residential,
              commercial and industrial projects across Kenya.
            </p>

            {/* Fewer bullets + Learn More button */}
            <div className="space-y-3">
              {[
                "Factory-direct pricing (no middlemen)",
                "Consistent production & quality checks",
                "Nationwide delivery support",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="mt-1 p-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: `${BRAND_GOLD}20` }}
                  >
                    <Check className="w-4 h-4" style={{ color: BRAND_GOLD }} />
                  </div>
                  <span className="text-gray-800 leading-snug break-words">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary CTA – Learn More */}
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                }}
              >
                Learn More About Our Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Products Grid Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Our Core Product Range
          </h3>
          <p className="text-gray-700">
            Tap any product image to view full size. Use “Read More” for specs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true, amount: 0.25 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="min-w-0"
            >
              <ProductCard
                product={product}
                isOpen={openId === product.id}
                isHovered={hoveredProduct === product.id}
                onToggle={() => toggleReadMore(product.id)}
                onImageClick={() => openLightbox(product.image, product.name)}
              />
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                priority
              />

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] text-white text-sm bg-black/55 px-3 py-2 rounded-lg break-words">
                {lightbox.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProductCard({
  product,
  isOpen,
  isHovered,
  onToggle,
  onImageClick,
}: {
  product: Product;
  isOpen: boolean;
  isHovered: boolean;
  onToggle: () => void;
  onImageClick: () => void;
}) {
  const Icon = product.Icon;

  return (
    <div className="group relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col min-w-0">
      {/* IMAGE ONLY – clean, no text/gradient on top */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <button
          type="button"
          onClick={onImageClick}
          className="relative w-full h-full group/image"
          aria-label={`Open image for ${product.name}`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover/image:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />

          {/* Small zoom icon (no dark overlay) */}
          <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 shadow-sm opacity-0 group-hover/image:opacity-100 transition-opacity">
            <Expand className="w-4 h-4 text-gray-800" />
          </div>
        </button>
      </div>

      {/* CARD CONTENT – all details inside card */}
      <div className="p-5 flex-1 flex flex-col min-w-0">
        {/* Top row: product pill + tag */}
        <div className="flex items-start justify-between gap-3 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 flex-shrink-0">
            <Icon className="w-4 h-4 text-gray-700" />
            <span className="text-xs font-semibold text-gray-800">Product</span>
          </div>

          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-gray-900 max-w-[70%] truncate"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
            }}
            title={product.tag}
          >
            {product.tag}
          </span>
        </div>

        {/* Name + description */}
        <div className="mt-3 flex-1 min-w-0">
          <h3
            className="text-lg sm:text-xl font-bold text-gray-900 leading-snug break-words"
            style={{ color: isHovered ? BRAND_GOLD_DARK : undefined }}
          >
            {product.name}
          </h3>

          <p className="text-gray-600 mt-2 text-sm leading-relaxed break-words">
            {product.description}
          </p>

          {/* Features */}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.features.map((feature) => (
              <span
                key={`${product.id}-${feature}`}
                className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Expanded details */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="expand"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-4 overflow-hidden"
              >
                <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Sizes Available
                    </div>
                    <div className="text-gray-800 font-medium break-words">
                      {product.sizes}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Best For
                    </div>
                    <div className="text-gray-800 font-medium break-words">
                      {product.bestFor}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      More Details
                    </div>
                    <div className="text-gray-700 text-sm break-words">
                      {product.extraDetails}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700"
            style={{ color: isHovered ? BRAND_GOLD_DARK : undefined }}
          >
            {isOpen ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Read More
              </>
            )}
          </button>

          <Link
            href={product.href}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: BRAND_GOLD_DARK }}
          >
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Factory badge */}
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
          <Factory className="w-4 h-4" style={{ color: BRAND_GOLD_DARK }} />
          <span>Factory-direct pricing</span>
        </div>
      </div>

      {/* Hover line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 transform ${
          isHovered ? "scale-x-100" : "scale-x-0"
        } transition-transform duration-300 origin-left`}
        style={{
          backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
        }}
      />
    </div>
  );
}
