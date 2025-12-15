"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Factory,
  X,
  Expand,
  Ruler,
  Home,
  Building,
  Truck,
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
  icon: React.ReactNode;
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

export default function CoreProductsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: "cabro",
      name: "Cabro Paving Blocks",
      tag: "60mm • 80mm • 3D Decorative",
      description:
        "Machine-vibro compacted paving blocks for homes, estates, malls and industrial yards.",
      sizes: "60mm, 80mm, 3D decorative",
      bestFor: "Driveways, parkings, estate roads, walkways",
      image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
      href: "/products/cabro",
      extraDetails:
        "Available in Zigzag, Tri-Hex, 3D, cobblestone and brick patterns. Ideal for new projects and renovations where a neat, long-lasting finish is required.",
      icon: <Home className="w-5 h-5" />,
      features: ["Weather-resistant", "Low maintenance", "Various patterns", "Heavy-duty"],
    },
    {
      id: "culverts",
      name: "Reinforced Concrete Culverts",
      tag: "300mm – 1200mm",
      description:
        "Heavy-duty culverts designed for road drainage, stormwater and estate access roads.",
      sizes: "300mm, 450mm, 600mm, 900mm, 1200mm",
      bestFor: "Road drainage, stormwater, estate & farm access",
      image: "/images/culvert-thumb.jpg",
      href: "/products/culverts",
      extraDetails:
        "Steel-reinforced for maximum strength and durability. Suitable for county roads, estate entrances, farm crossings and industrial sites with regular truck traffic.",
      icon: <Truck className="w-5 h-5" />,
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
      image: "/images/fencing-thumb.jpg",
      href: "/products/fencing-posts",
      extraDetails:
        "Works with chain-link, barbed wire or razor wire. Concrete posts last longer than timber and require very little maintenance over their lifetime.",
      icon: <Building className="w-5 h-5" />,
      features: ["Termite-proof", "Low maintenance", "Various heights", "Weather-resistant"],
    },
    {
      id: "kerbs-drainage",
      name: "Kerbstones & Drainage Channels",
      tag: "Kerbs, edge blocks & channels",
      description:
        "Precast kerbs and drainage channels for clean edging, water management and estate finish.",
      sizes: "Standard kerbs & custom drainage sizes",
      bestFor: "Driveway edges, walkways, estate roads, drainage lines",
      image: "/images/kerbs-drainage.jpg",
      href: "/products/kerbs-drainage",
      extraDetails:
        "Includes straight kerbs, bull-nose kerbs, open channels and slab covers. Proper kerbs and drainage protect cabro pavements from erosion and edge failure.",
      icon: <Ruler className="w-5 h-5" />,
      features: ["Precast", "Custom sizes", "Clean edging", "Erosion control"],
    },
  ];

  const toggleReadMore = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-6 bg-white/70 backdrop-blur">
            <div
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: BRAND_GOLD }}
            />
            <span className="text-sm font-semibold tracking-wide text-gray-900">
              Our Core Products
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Engineered Concrete Solutions{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
              }}
            >
              Built to Last
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Precision-made cabro blocks, culverts, fencing posts and kerbs for{" "}
            <span className="font-semibold text-gray-900">
              residential, commercial and industrial projects
            </span>{" "}
            across Kenya.
          </p>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
            }}
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard
                product={product}
                isOpen={openId === product.id}
                isHovered={hoveredProduct === product.id}
                onToggle={() => toggleReadMore(product.id)}
                onImageClick={() => openLightbox(product.image, product.name)}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              />
            </motion.div>
          ))}
        </div>

        {/* Features Bar */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Factory Direct", description: "No middlemen, best prices" },
            { label: "Quality Control", description: "Every batch inspected" },
            { label: "Timely Delivery", description: "Across Kenya" },
            { label: "Technical Support", description: "Free site advice" },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
              className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-lg font-semibold text-gray-900">{feature.label}</div>
              <div className="text-sm text-gray-600 mt-1">{feature.description}</div>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
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
  onMouseEnter,
  onMouseLeave,
}: {
  product: Product;
  isOpen: boolean;
  isHovered: boolean;
  onToggle: () => void;
  onImageClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <button onClick={onImageClick} className="relative w-full h-full group/image">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover/image:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Expand Icon */}
          <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity">
            <Expand className="w-4 h-4 text-white" />
          </div>

          {/* Icon Badge */}
          <div className="absolute top-4 left-4 p-2 rounded-lg bg-white/20 backdrop-blur-sm">
            <div className="text-white">{product.icon}</div>
          </div>

          {/* Tag */}
          <div className="absolute bottom-4 left-4">
            <span
              className="inline-block px-3 py-1 text-white text-xs font-semibold rounded-full"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
              }}
            >
              {product.tag}
            </span>
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
          <h3
            className="text-xl font-bold text-gray-900 transition-colors"
            style={{
              color: isHovered ? BRAND_GOLD_DARK : undefined,
            }}
          >
            {product.name}
          </h3>

          <p className="text-gray-600 mt-2 text-sm">{product.description}</p>

          {/* Features */}
          <div className="mt-4 flex flex-wrap gap-2">
            {product.features.map((feature) => (
              <span
                key={feature}
                className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Expanded Details */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 overflow-hidden"
              >
                <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Sizes Available
                    </div>
                    <div className="text-gray-800 font-medium">{product.sizes}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Best For
                    </div>
                    <div className="text-gray-800 font-medium">{product.bestFor}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      More Details
                    </div>
                    <div className="text-gray-700 text-sm">{product.extraDetails}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors"
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
            className="group/link inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: BRAND_GOLD_DARK }}
          >
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Factory Badge */}
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
          <Factory className="w-4 h-4" style={{ color: BRAND_GOLD_DARK }} />
          <span>Factory-direct pricing</span>
        </div>
      </div>

      {/* Hover Effect Line */}
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
