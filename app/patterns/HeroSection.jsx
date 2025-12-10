"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/Behaton.jpg",
    alt: "Classic interlocking paving pattern on a driveway",
    label: "Classic Interlock",
    description: "Traditional rectangular blocks for timeless appeal"
  },
  {
    src: "/images/Hexagon Honeycomb.jpeg",
    alt: "Hexagonal paving blocks in a residential compound",
    label: "Hexagonal Pattern",
    description: "Modern honeycomb design for contemporary spaces"
  },
  {
    src: "/images/Colorado shape.jpg",
    alt: "Cobblestone style paving for walkways",
    label: "Cobblestone Finish",
    description: "Rustic charm with irregular stone appearance"
  },
  {
    src: "/images/3D zig-zag.jpeg",
    alt: "Mixed color paving blocks for premium outdoor spaces",
    label: "3D Zig-Zag",
    description: "Dynamic pattern with visual depth and movement"
  },
];

export default function PatternsHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="patterns-hero"
      className="relative w-full min-h-screen flex items-center bg-[#f8f7f4] text-[#1a365d] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlays */}
        <div className="absolute left-0 top-0 h-1/2 w-1/2 bg-gradient-to-br from-[#D4A017]/5 to-transparent" />
        <div className="absolute right-0 bottom-0 h-1/2 w-1/2 bg-gradient-to-tl from-[#1a365d]/5 to-transparent" />
        
        {/* Grid pattern in background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #1a365d 1px, transparent 1px),
                                linear-gradient(to bottom, #1a365d 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        
        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#1a365d]/10 rounded-lg"
            style={{
              top: `${20 + i * 15}%`,
              left: `${5 + (i % 3) * 30}%`,
              width: "60px",
              height: "30px",
              transform: `rotate(${i % 2 === 0 ? 0 : 90}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LEFT CONTENT - Updated colors */}
        <div className="w-full lg:w-2/5">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#D4A017]/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#D4A017]" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
              Paving Patterns
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Explore Our Premium 
            <span className="block text-[#1a365d] mt-2">
              Paving Designs
              <svg
                className="mt-2"
                width="300"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,4 Q75,0 150,4 T300,4"
                  stroke="#D4A017"
                  strokeWidth="3"
                  strokeOpacity="0.7"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-[#2d3748] text-base md:text-lg max-w-lg leading-relaxed">
            Choose from stylish interlocks, hexagonal designs, cobblestone finishes, 
            and custom patterns — engineered for durability and beauty in all 
            residential, commercial, and industrial spaces.
          </p>

          {/* Features grid - Updated colors */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "High Durability", desc: "Tested for extreme conditions", icon: "✓" },
              { title: "Stylish Patterns", desc: "Multiple design options", icon: "◈" },
              { title: "Heavy-Duty Mix", desc: "Ideal for high traffic areas", icon: "▲" },
              { title: "Perfect Finish", desc: "Clean & level installation", icon: "●" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="group rounded-xl border border-[#1a365d]/10 bg-white/70 p-4 hover:border-[#D4A017]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4A017]/20 to-[#D4A017]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#D4A017] font-bold text-lg">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a365d]">{feature.title}</p>
                    <p className="text-[#4a5568] text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots for mobile */}
          <div className="flex lg:hidden justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#D4A017]"
                    : "w-2 bg-[#1a365d]/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SLIDER - Updated with navigation controls */}
        <div className="w-full lg:w-3/5">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-[#1a365d]/10 bg-white">
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-[#1a365d]/10 flex items-center justify-center hover:bg-[#D4A017] hover:text-white hover:border-[#D4A017] transition-all duration-300 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-[#1a365d]/10 flex items-center justify-center hover:bg-[#D4A017] hover:text-white hover:border-[#D4A017] transition-all duration-300 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider Track */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/70 via-[#1a365d]/20 to-transparent" />
                    
                    {/* Slide info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                        <p className="text-xs font-medium uppercase tracking-wider text-[#D4A017]">
                          Pattern {index + 1} of {slides.length}
                        </p>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {slide.label}
                      </h3>
                      <p className="text-lg text-white/90 max-w-md">
                        {slide.description}
                      </p>
                      
                      {/* Pattern indicator */}
                      <div className="flex gap-2 mt-6">
                        <div className="w-8 h-4 rounded bg-white/30" />
                        <div className="w-8 h-4 rounded bg-[#D4A017]/70" />
                        <div className="w-8 h-4 rounded bg-[#1a365d]/70" />
                        <div className="w-8 h-4 rounded bg-white/30" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-6 right-6 hidden lg:flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2">
              {slides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentIndex(dotIndex)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    dotIndex === currentIndex
                      ? "w-8 bg-[#D4A017]"
                      : "w-3 bg-[#1a365d]/40 hover:bg-[#1a365d]/60"
                  }`}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>5
          
          {/* Current slide indicator for desktop */}
          <div className="hidden lg:flex items-center justify-between mt-6 px-4">
            <div className="text-[#1a365d]">
              <span className="text-2xl font-bold text-[#D4A017]">{currentIndex + 1}</span>
              <span className="text-[#718096]">/{slides.length}</span>
            </div>
            <div className="text-sm text-[#4a5568]">
              <span className="font-medium text-[#1a365d]">{slides[currentIndex].label}</span>
              <span className="mx-2">•</span>
              {slides[currentIndex].description}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center">
          <span className="text-sm text-[#718096] mb-3 tracking-wider">SCROLL FOR MORE</span>
          <div className="w-6 h-10 border-2 border-[#1a365d]/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#D4A017] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}