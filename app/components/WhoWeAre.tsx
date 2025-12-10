"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Target, Heart, Check } from "lucide-react";

type CardId = "overview" | "mission" | "values";

type CardConfig = {
  id: CardId;
  label: string;
  icon: React.ReactNode;
  bg: string;
  accent: string;
  title: string;
  body: string;
  extra?: string;
};

const cardsConfig: CardConfig[] = [
  {
    id: "overview",
    label: "Company Overview",
    icon: <Building2 size={24} />,
    bg: "bg-gradient-to-br from-amber-500 to-amber-700",
    accent: "from-amber-400 to-amber-600",
    title: "Controlled, Professional Production",
    body: "Machine-vibro compacted cabro blocks and precast units manufactured under strict curing and quality control.",
    extra: "Ideal for estates, commercial compounds and heavy duty yards.",
  },
  {
    id: "mission",
    label: "Our Mission",
    icon: <Target size={24} />,
    bg: "bg-gradient-to-br from-blue-600 to-blue-800",
    accent: "from-blue-400 to-blue-600",
    title: "Building Long-Lasting Surfaces",
    body: "To deliver concrete products that stand the test of time and reduce maintenance costs for our clients.",
    extra: "From small home projects to large infrastructure works.",
  },
  {
    id: "values",
    label: "Our Core Values",
    icon: <Heart size={24} />,
    bg: "bg-gradient-to-br from-emerald-600 to-emerald-800",
    accent: "from-emerald-400 to-emerald-600",
    title: "Integrity • Reliability • Craftsmanship",
    body: "Transparent pricing, dependable delivery schedules and properly engineered, well-finished products.",
    extra: "We advise on thickness, patterns and best solutions per site.",
  },
];

export default function WhoWeAreSection() {
  const [order, setOrder] = useState<CardId[]>(["overview", "mission", "values"]);
  const [activeCard, setActiveCard] = useState<CardId>("overview");

  const bringToFront = (id: CardId) => {
    setActiveCard(id);
    setOrder((prev) => {
      const rest = prev.filter((cardId) => cardId !== id);
      return [...rest, id];
    });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100 rounded-full border border-amber-200">
              <div className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
              <span className="text-sm font-semibold text-amber-900 tracking-wide">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Kenya's Trusted Manufacturer of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                  Cabro & Concrete Products
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Premium Paving Blocks Ltd (PPBL) manufactures high-performance cabro
                and concrete products from our factory along Githunguri Road,
                serving residential, commercial and industrial projects.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <p className="text-gray-700">
                We produce durable, properly cured, machine-vibro compacted paving
                blocks and reinforced concrete products that meet modern
                construction demands for{" "}
                <span className="font-semibold text-gray-900">
                  estates, commercial compounds, roads and industrial yards
                </span>.
              </p>

              <ul className="space-y-4">
                {[
                  "Fully equipped factory along Githunguri Road, Kiambu.",
                  "Machine-pressed, properly cured cabro for consistent strength.",
                  "Reinforced concrete products designed for real site conditions.",
                  "Technical support for contractors, developers and homeowners.",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                      <Check size={20} />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Interactive Cards */}
          <div className="relative">
            <div className="relative h-[500px] w-full">
              {order.map((id, index) => {
                const cfg = cardsConfig.find((c) => c.id === id)!;
                const isFront = index === order.length - 1;
                const zIndex = 10 + index;

                return (
                  <motion.div
                    key={id}
                    onClick={() => bringToFront(id)}
                    className={`absolute left-1/2 top-1/2 w-[300px] h-[380px] cursor-pointer rounded-3xl overflow-hidden shadow-2xl`}
                    style={{
                      translateX: "-50%",
                      translateY: "-50%",
                      zIndex,
                    }}
                    initial={false}
                    animate={{
                      x: index === 0 ? -60 : index === 1 ? 0 : 60,
                      y: index === 0 ? -40 : index === 1 ? 40 : -20,
                      scale: isFront ? 1 : 0.9,
                      opacity: isFront ? 1 : 0.8,
                      rotate: index === 0 ? -5 : index === 1 ? 0 : 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    whileHover={{
                      scale: isFront ? 1.02 : 0.95,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Card Background with Pattern */}
                    <div className={`absolute inset-0 ${cfg.bg}`}>
                      <div className="absolute inset-0 bg-grid-white/10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <div className="text-white">{cfg.icon}</div>
                    </div>

                    {/* Card Content */}
                    <div className="relative h-full p-8 flex flex-col justify-end">
                      <div className="space-y-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white mb-3">
                            {cfg.label}
                          </span>
                          <h3 className="text-xl font-bold text-white">
                            {cfg.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-100 leading-relaxed">
                          {cfg.body}
                        </p>
                        
                        {cfg.extra && (
                          <p className="text-sm text-white/80 font-medium">
                            {cfg.extra}
                          </p>
                        )}
                      </div>

                      {/* Indicator Dot */}
                      <div className="absolute bottom-6 right-6">
                        <div className={`h-2 w-2 rounded-full ${activeCard === id ? 'bg-white animate-pulse' : 'bg-white/30'}`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {cardsConfig.map((cfg) => (
                <button
                  key={cfg.id}
                  onClick={() => bringToFront(cfg.id)}
                  className={`flex flex-col items-center gap-2 group`}
                >
                  <div
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      activeCard === cfg.id
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 scale-125'
                        : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}
                  />
                  <span
                    className={`text-xs font-medium transition-colors ${
                      activeCard === cfg.id
                        ? 'text-gray-900'
                        : 'text-gray-500 group-hover:text-gray-700'
                    }`}
                  >
                    {cfg.label.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-gradient-to-r from-amber-200 to-amber-300 rounded-full blur-3xl opacity-20 -z-10" />
          </div>
        </div>


      </div>
    </section>
  );
}