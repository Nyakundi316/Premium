"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, Ruler, Shield, Palette } from "lucide-react";

const patterns = [
  {
    id: 1,
    src: "/images/Behaton.jpg",
    alt: "Classic interlocking paving pattern on a driveway",
    name: "Classic Interlock",
    description: "Timeless rectangular blocks for traditional elegance",
    features: ["Durable interlock design", "Perfect for driveways", "Easy maintenance"],
    bestFor: "Driveways & Patios",
    difficulty: "Standard",
    thickness: "60mm"
  },
  {
    id: 2,
    src: "/images/Hexagon Honeycomb.jpeg",
    alt: "Hexagonal paving blocks in a residential compound",
    name: "Hexagonal Honeycomb",
    description: "Modern geometric design for contemporary landscapes",
    features: ["Water-permeable joints", "Visual depth", "Slip-resistant"],
    bestFor: "Pool Decks & Gardens",
    difficulty: "Medium",
    thickness: "80mm"
  },
  {
    id: 3,
    src: "/images/Colorado shape.jpg",
    alt: "Cobblestone style paving for walkways",
    name: "Colorado Cobblestone",
    description: "Rustic charm with irregular stone appearance",
    features: ["Old-world aesthetic", "Heavy-duty construction", "Weather-resistant"],
    bestFor: "Pathways & Courtyards",
    difficulty: "Advanced",
    thickness: "100mm"
  },
  {
    id: 4,
    src: "/images/3D zig-zag.jpeg",
    alt: "Mixed color paving blocks for premium outdoor spaces",
    name: "3D Zig-Zag",
    description: "Dynamic pattern creating optical depth and movement",
    features: ["Modern 3D effect", "High visual impact", "Premium finish"],
    bestFor: "Commercial Spaces",
    difficulty: "Expert",
    thickness: "120mm"
  },
];

// Define difficulty levels mapping
const difficultyLevels: { [key: string]: number } = {
  "Standard": 2,
  "Medium": 3,
  "Advanced": 4,
  "Expert": 5
};

export default function PatternsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredPattern, setHoveredPattern] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % patterns.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % patterns.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + patterns.length) % patterns.length);
  };

  const selectPattern = (index: number) => {
    setCurrentIndex(index);
  };

  const currentPattern = patterns[currentIndex];

  return (
    <section
      id="patterns-gallery"
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-[#ffffff] text-gray-900 overflow-hidden py-12 lg:py-0"
    >
      {/* Abstract pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-gray-900"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 120}px`,
              height: "2px",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-800 uppercase tracking-wider">
              Premium cabro's Collection
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900">Masterful Paving</span>
            <span className="block text-amber-600 mt-2">Patterns & Designs</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of premium paving patterns, each engineered for 
            durability, beauty, and functionality. From traditional elegance to modern 
            innovation, find the perfect design for your space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Pattern Details Panel - Left */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {currentPattern.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Pattern #{currentPattern.id} of {patterns.length}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {currentPattern.description}
                </p>
              </div>

              {/* Pattern Specifications */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-600" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {currentPattern.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Ruler className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-gray-700">Thickness</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{currentPattern.thickness}</p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-gray-700">Best For</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{currentPattern.bestFor}</p>
                  </div>
                </div>

                {/* Pattern Selection */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Select Pattern</h3>
                  <div className="flex flex-wrap gap-3">
                    {patterns.map((pattern, idx) => (
                      <button
                        key={pattern.id}
                        onClick={() => selectPattern(idx)}
                        onMouseEnter={() => setHoveredPattern(idx)}
                        onMouseLeave={() => setHoveredPattern(null)}
                        className={`px-4 py-2 rounded-lg border transition-all ${
                          currentIndex === idx
                            ? "bg-amber-500 text-white border-amber-500"
                            : "bg-white text-gray-700 border-gray-300 hover:border-amber-400 hover:bg-amber-50"
                        }`}
                      >
                        {pattern.name.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Pattern Display - Center */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-200">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 shadow-xl"
                aria-label="Previous pattern"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 shadow-xl"
                aria-label="Next pattern"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Pattern Image */}
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
                <Image
                  src={currentPattern.src}
                  alt={currentPattern.alt}
                  fill
                  className="object-cover transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 75vw"
                />
                
                {/* Pattern Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent p-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-sm font-medium text-amber-100">
                          Premium Pattern
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {currentPattern.name}
                      </h3>
                      <p className="text-gray-200 text-lg">
                        {currentPattern.description}
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm text-gray-300 mb-1">Installation Level</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => {
                            const difficultyValue = difficultyLevels[currentPattern.difficulty] || 0;
                            return (
                              <div
                                key={i}
                                className={`w-3 h-3 mx-0.5 rounded-full ${
                                  i < difficultyValue
                                    ? "bg-amber-400"
                                    : "bg-gray-600"
                                }`}
                              />
                            );
                          })}
                        </div>
                        <span className="font-semibold text-white">{currentPattern.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pattern Progress */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {patterns.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectPattern(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-8 bg-amber-500"
                        : "w-4 bg-gray-400/50 hover:bg-gray-400"
                    }`}
                    aria-label={`View ${patterns[idx].name} pattern`}
                  />
                ))}
              </div>
            </div>

            {/* Pattern Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "25+ Year Lifespan",
                  desc: "Weather-resistant construction",
                  color: "from-amber-500/10 to-amber-600/10"
                },
                {
                  title: "Customizable Colors",
                  desc: "Mix & match combinations",
                  color: "from-gray-900/10 to-gray-800/10"
                },
                {
                  title: "Expert Installation",
                  desc: "Professional pattern laying",
                  color: "from-amber-500/10 to-amber-600/10"
                }
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-5 border border-gray-200 backdrop-blur-sm`}
                >
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to Transform Your Space?
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Each pattern is available in multiple colors and can be customized 
                to match your architectural style. 
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}