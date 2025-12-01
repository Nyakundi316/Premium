"use client";

import { useState } from "react";
import Link from "next/link";

export default function WhyChooseSection() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    { name: "Brick", color: "bg-red-600" },
    { name: "Cross Dumble", color: "bg-gray-600" },
    { name: "Cube Dumble", color: "bg-amber-700" },
    { name: "Fan", color: "bg-blue-600" },
    { name: "Hexagon", color: "bg-green-600" },
    { name: "Red Mirror", color: "bg-red-700" },
    { name: "Round Trihex", color: "bg-amber-600" },
    { name: "Trihex Groove", color: "bg-gray-500" },
    { name: "Unipaver", color: "bg-blue-700" },
    { name: "Wave Dumble", color: "bg-green-700" },
    { name: "Board", color: "bg-yellow-600" },
    { name: "Yellow", color: "bg-yellow-500" },
  ];

  const features = [
    {
      icon: "🏗️",
      title: "Premium Materials",
      description:
        "Made from high-grade, durable materials for superior strength",
    },
    {
      icon: "🎨",
      title: "Variety of Options",
      description:
        "Multiple colors, sizes, and patterns to match your design vision",
    },
    {
      icon: "⏳",
      title: "Long-Lasting",
      description:
        "Designed for superior performance that stands the test of time",
    },
    {
      icon: "✅",
      title: "Quality Guaranteed",
      description:
        "Every block meets strict quality standards for your peace of mind",
    },
    {
      icon: "🔄",
      title: "Easy Installation",
      description:
        "Interlocking design for straightforward, professional installation",
    },
    {
      icon: "🛡️",
      title: "Low Maintenance",
      description: "Resistant to weathering, cracking, and fading",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-[#0A1A2F]"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent border border-[#D4A017]/30 px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-sm font-medium tracking-widest text-[#D4A017] uppercase">
              Superior Quality
            </span>
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-[#D4A017]">Premium Paving Blocks?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Get the highest quality paving blocks for your next renovation
            project. Our paving blocks are made from durable, high-grade
            materials designed for superior strength and long-lasting
            performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Features */}
          <div>
            <div className="bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-800 p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">
                Premium Features That Make The Difference
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-800/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017]/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-lg font-semibold text-white mb-4">
                  Don't settle for anything less. Choose Premium Paving Blocks
                  today!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#quote"
                    className="px-6 py-3 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
                  >
                    Get Your Quote Now
                  </Link>
                  <Link
                    href="#contact"
                    className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:border-[#D4A017]/50 hover:bg-[#D4A017]/5 transition-all"
                  >
                    Contact Our Experts
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Products Grid */}
          <div>
            <div className="bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-800 p-8 h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">
                  Our Products Collection
                </h3>
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent text-[#D4A017] text-sm font-medium">
                  {products.length}+ Varieties
                </span>
              </div>

              <p className="text-gray-300 mb-8">
                With a wide variety of colors and sizes to choose from, you can
                create a unique look for your outdoor space that perfectly
                matches your vision.
              </p>

              {/* Products Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {products.map((product, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredProduct(index)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    className="group relative aspect-square rounded-xl overflow-hidden border border-gray-800 hover:border-[#D4A017]/50 transition-all cursor-pointer"
                  >
                    {/* Color Block */}
                    <div
                      className={`absolute inset-0 ${product.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    />

                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent" />

                    {/* Product Name */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center transform group-hover:scale-110 transition-transform">
                        <span className="text-sm font-bold text-white drop-shadow-lg">
                          {product.name.split(" ").map((word, i) => (
                            <span key={i} className="block leading-tight">
                              {word}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D4A017]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Corner Accents */}
                    <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

              {/* Featured Product Info */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#0A1A2F]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Custom Color Matching
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Need a specific color? We can match it!
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gray-900/50">
                    <p className="text-sm text-gray-400 mb-1">
                      Available Finishes
                    </p>
                    <p className="font-medium text-white">
                      Smooth, Textured, Grooved
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-900/50">
                    <p className="text-sm text-gray-400 mb-1">Standard Sizes</p>
                    <p className="font-medium text-white">60mm, 80mm, 100mm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F] via-gray-900 to-[#0A1A2F]" />
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
