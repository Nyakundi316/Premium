"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Award, Palette, Shield, Clock, Grid, Filter, Sparkles } from "lucide-react";

type Category = "all" | "trihex" | "unipaver" | "hexagon" | "dumble-wave" | "brick-cube" | "special";

type Product = {
  id: string;
  name: string;
  colorLabel: string;
  image: string;
  category: Category;
  description: string;
  bestFor: string;
  reason: string;
};

export default function WhyChooseSection() {
  const products: Product[] = [
    {
      id: "brick-cross-dumble",
      name: "Brick Cross Dumble",
      colorLabel: "Red / Natural",
      image: "/images/Red.jpeg",
      category: "brick-cube",
      description:
        "A classic brick-style pattern with cross joints that gives a neat, strong, traditional look to walkways and driveways.",
      bestFor: "Residential driveways, walkways, compound entrances",
      reason:
        "Choose Brick Cross Dumble when you want a simple, timeless look that is easy to maintain, easy to replace and strong enough for everyday vehicle traffic.",
    },
    {
      id: "cube",
      name: "Cube",
      colorLabel: "Red / Grey",
      image: "/images/cube.jpeg",
      category: "brick-cube",
      description:
        "Square paving blocks that give a modern, tiled look with clean lines and flexible layout options.",
      bestFor: "Courtyards, patios, front entrances, decorative zones",
      reason:
        "Choose Cube blocks if you want a modern, minimal look that can be laid in many patterns and is perfect for neat outdoor sitting areas and smart entrances.",
    },
    {
      id: "dumble",
      name: "Dumble",
      colorLabel: "Red / Charcoal",
      image: "/images/i-shape.jpeg",
      category: "dumble-wave",
      description:
        "Interlocking I-shaped pavers that lock together tightly to distribute loads and reduce movement.",
      bestFor: "Driveways, parking bays, apartments & estate roads",
      reason:
        "Choose Dumble blocks when you want strong interlock, less shifting over time, and a surface that can comfortably carry cars and light trucks.",
    },
    {
      id: "fan",
      name: "Fan",
      colorLabel: "Terracotta / Yellow",
      image: "/images/fan.jpg",
      category: "special",
      description:
        "Decorative fan-shaped blocks that create curved, eye-catching patterns and premium finishes.",
      bestFor: "Hotel entrances, feature walkways, high-end homes",
      reason:
        "Choose Fan pavers when you want a statement entrance or pathway that stands out and adds real visual value to your property.",
    },
    {
      id: "hexagon",
      name: "Hexagon",
      colorLabel: "Grey / Yellow",
      image: "/images/Grey hexagon.jpg",
      category: "hexagon",
      description:
        "Six-sided blocks that form a honeycomb pattern, spreading load evenly and giving a unique geometric look.",
      bestFor: "Walkways, courtyards, estate common areas",
      reason:
        "Choose Hexagon blocks if you want something more decorative than standard interlock but still strong enough for regular foot and light vehicle traffic.",
    },
    {
      id: "mirror",
      name: "Mirror",
      colorLabel: "Red",
      image: "/images/red-brown mirror.jpg",
      category: "special",
      description:
        "Stylish patterned pavers that reflect light and color beautifully, perfect for feature areas.",
      bestFor: "Front porches, verandas, decorative outdoor lounges",
      reason:
        "Choose Mirror blocks when appearance is very important and you want a rich, polished feel for visible areas around your home or business.",
    },
    {
      id: "round-dumble",
      name: "Round Dumble",
      colorLabel: "Red / Yellow",
      image: "/images/Round-Dumble-Paver-Block..jpg",
      category: "dumble-wave",
      description:
        "Soft-edged interlocking blocks that combine strength with a more rounded, friendly look.",
      bestFor: "Play areas, residential driveways, garden paths",
      reason:
        "Choose Round Dumble if you want safe, smooth edges for children and pedestrians while still keeping a strong, interlocking surface.",
    },
    {
      id: "trihex-groove",
      name: "Trihex Groove",
      colorLabel: "Grey",
      image: "/images/Trihex-Charcoal.jpg",
      category: "trihex",
      description:
        "Three-hex pattern with grooves that provide extra grip and a technical, industrial appearance.",
      bestFor: "Heavy-use driveways, apartment parking, estate roads",
      reason:
        "Choose Trihex Groove when you need extra traction in wet conditions and a strong pattern that can handle frequent vehicle movement.",
    },
    {
      id: "trihex-board",
      name: "Trihex Board",
      colorLabel: "Charcoal",
      image: "/images/trihex-broad.avif",
      category: "trihex",
      description:
        "Broad trihex blocks that create a bold, uniform look and excellent load distribution.",
      bestFor: "Large compounds, commercial yards, gated estates",
      reason:
        "Choose Trihex Board if you want a bold, premium look that stays neat over large areas and can work for both homes and commercial projects.",
    },
    {
      id: "trihex-yellow",
      name: "Trihex Yellow",
      colorLabel: "Yellow / Black",
      image: "/images/Trihex-3D-yellow.jpg",
      category: "trihex",
      description:
        "High-contrast trihex pattern that adds color and depth, often used for 3D-style visuals.",
      bestFor: "Feature driveways, marked zones, decorative parking",
      reason:
        "Choose Trihex Yellow if you want your driveway or compound to stand out with a 3D look and clear color separation for directions or bays.",
    },
    {
      id: "unipaver",
      name: "Unipaver (3D)",
      colorLabel: "Grey / Red",
      image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
      category: "unipaver",
      description:
        "Uni-shaped 3D blocks that interlock tightly and can be laid in patterns that show depth and movement.",
      bestFor: "Driveways, commercial fronts, showrooms & petrol stations",
      reason:
        "Choose Unipaver when you want a strong, interlocking surface with a 3D effect that attracts attention and feels high-end.",
    },
    {
      id: "wave",
      name: "Wave",
      colorLabel: "Red / Black",
      image: "/images/WAVE_RED.jpg",
      category: "dumble-wave",
      description:
        "Wave-shaped blocks that create a flowing pattern and reduce straight visible joints.",
      bestFor: "Curved driveways, garden paths, pool surrounds",
      reason:
        "Choose Wave blocks if your project has curves or you want a softer, flowing look rather than straight-line patterns.",
    },
  ];

  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(products[0]);
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [isGridLoading, setIsGridLoading] = useState(true);

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Made from high-grade materials for superior durability and strength.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Variety",
      description: "Multiple colors, patterns, and styles to match any design vision.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Weather Resistant",
      description: "Built to withstand harsh weather conditions and heavy use.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Long Lasting",
      description: "Years of service with minimal maintenance requirements.",
      color: "from-purple-500 to-purple-600"
    },
  ];

  const filters: { id: Category; label: string; count: number }[] = [
    { id: "all", label: "All Types", count: products.length },
    { id: "trihex", label: "Trihex", count: products.filter(p => p.category === "trihex").length },
    { id: "unipaver", label: "Unipaver", count: products.filter(p => p.category === "unipaver").length },
    { id: "hexagon", label: "Hexagon", count: products.filter(p => p.category === "hexagon").length },
    { id: "dumble-wave", label: "Dumble & Wave", count: products.filter(p => p.category === "dumble-wave").length },
    { id: "brick-cube", label: "Brick & Cube", count: products.filter(p => p.category === "brick-cube").length },
    { id: "special", label: "Special", count: products.filter(p => p.category === "special").length },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100 rounded-full border border-amber-200 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-900 tracking-wide">
              Superior Quality
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Premium Paving Blocks?
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Strong, durable and beautiful paving solutions crafted with
            precision for homes, estates and commercial projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-600" />
                Premium Features
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-5 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-amber-300 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
                >
                  <span>Contact Our Experts</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8 h-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                    <Grid className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our Collection
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {products.length}+ unique patterns and styles
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Filter className="w-4 h-4" />
                  <span>Filter by category</span>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {filters.map((filter) => {
                  const isActive = activeCategory === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveCategory(filter.id)}
                      className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-200"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {filter.label}
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                          isActive 
                            ? "bg-white/20" 
                            : "bg-gray-300 text-gray-700"
                        }`}>
                          {filter.count}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
                <AnimatePresence mode="wait">
                  {filteredProducts.map((product, index) => (
                    <motion.button
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredProduct(product)}
                      onClick={() => setPreviewProduct(product)}
                      className="group relative aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-50 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Background Image */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-end">
                        <h4 className="text-sm font-semibold text-white text-left">
                          {product.name}
                        </h4>
                        <p className="text-xs text-amber-200 mt-1 text-left">
                          {product.colorLabel}
                        </p>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-600/90 via-amber-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center items-center">
                        <p className="text-sm font-semibold text-white text-center mb-2">
                          View Details
                        </p>
                        <p className="text-xs text-white/90 text-center">
                          Best for: {product.bestFor.split(',')[0]}
                        </p>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              {/* Active Product Info */}
              {hoveredProduct && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={hoveredProduct.image}
                        alt={hoveredProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
                            Currently Viewing
                          </p>
                          <h4 className="text-lg font-bold text-gray-900">
                            {hoveredProduct.name}
                          </h4>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold rounded-full">
                          {hoveredProduct.colorLabel}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">
                        {hoveredProduct.description.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl shadow-xl">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white">Ready to Transform Your Space?</h3>
              <p className="text-amber-100">Get a free quote and consultation</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/quote"
                className="px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Preview Modal */}
      <AnimatePresence>
        {previewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPreviewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setPreviewProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-900 to-gray-800">
                  <Image
                    src={previewProduct.image}
                    alt={previewProduct.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full">
                      {previewProduct.category}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2 block">
                      Paving Pattern Detail
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {previewProduct.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Color: <span className="font-semibold">{previewProduct.colorLabel}</span>
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Description</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {previewProduct.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Best For</h4>
                      <p className="text-gray-700">
                        {previewProduct.bestFor}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Why Choose This Pattern?</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {previewProduct.reason}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-3">
                    <Link
                      href="/quote"
                      onClick={() => setPreviewProduct(null)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all text-center"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setPreviewProduct(null)}
                      className="flex-1 px-6 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors text-center"
                    >
                      Contact Team
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}