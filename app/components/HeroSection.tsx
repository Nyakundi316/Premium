"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, Phone, Calendar, ArrowRight, Factory } from "lucide-react";
import { motion } from "framer-motion";

const heroImages = [
  {
    src: "/images/St Annes.jpeg",
    title: "Premium Paving Installation",
    description: "High-quality interlocking blocks for residential driveways.",
  },
  {
    src: "/images/classic interlock.jpeg",
    title: "Classic Interlock Driveway",
    description: "Durable interlocking pattern for homes and estates.",
  },
  {
    src: "/images/Hexagon Honeycomb.jpeg",
    title: "Hexagon Honeycomb Pattern",
    description: "Modern hexagonal design for courtyards and walkways.",
  },
  {
    src: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
    title: "Zig Zag Heavy-Duty Yard",
    description: "Built for trucks, parking yards and petrol stations.",
  },
  {
    src: "/images/Red.jpeg",
    title: "Crown Block Pattern",
    description: "Bold indoor and courtyard paving design.",
  },
];

const quickLinks = [
  {
    id: "cabro",
    title: "Cabro Paving Blocks",
    subtitle: "60mm & 80mm",
    image: "/images/cabro-thumb.png",
    href: "/products/cabro",
  },
  {
    id: "culverts",
    title: "Concrete Culverts",
    subtitle: "Road & drainage",
    image: "/images/culvert-thumb.jpg",
    href: "/products/culverts",
  },
  {
    id: "posts",
    title: "Fencing Posts",
    subtitle: "Plots & farms",
    image: "/images/fencing-thumb.jpg",
    href: "/products/fencing-posts",
  },
  {
    id: "kerbs",
    title: "Kerbs & Channels",
    subtitle: "Estate finish",
    image: "/images/kerbs-drainage.jpg",
    href: "/products/kerbs-drainage",
  },
  {
    id: "services",
    title: "View All Services",
    subtitle: "Supply & install",
    image: "/images/landscape_pool_kerbstone.jpg",
    href: "/services",
  },
];

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((i) => (i + 1) % heroImages.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const current = heroImages[activeIndex];
                                        
  const next = () =>
    setActiveIndex((i) => (i + 1) % heroImages.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 relative">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-xl"
          >
            {/* Company Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBF00]/10 rounded-full border border-[#FFBF00]/30">
              <div className="h-2 w-2 rounded-full bg-[#FFBF00] animate-pulse" />
              <span className="text-sm font-semibold text-[#996C00] tracking-wide">
                Premium Cabros Ltd (PCBL)
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Kenya's Leading{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FFBF00]">Paving Blocks</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFBF00]/20 -z-10" />
                </span>{" "}
                Manufacturer
              </h1>
              
              <p className="text-lg text-[#FFBF00] font-medium tracking-wider">
                Strength You Can Trust • Quality You Can See
              </p>
            </div>

            {/* Description Card */}
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                High-strength paving blocks, reinforced culverts, fencing posts and
                kerbstones — manufactured with precision for residential,
                commercial and industrial projects.
              </p>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Delivery Areas:</span>{" "}
                  Kiambu, Nairobi, Ruiru, Thika Road and surrounding regions.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Heavy-duty load bearing",
                "Weather-resistant finish",
                "Low maintenance cost",
                "Professional installation",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFBF00] text-white">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFBF00]">2021</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Year Established</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFBF00]">200+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFBF00]">24/7</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Support</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 pt-6"
            >
              <a
                href="tel:+254711789438"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFBF00] text-gray-900 font-semibold rounded-lg hover:bg-[#E6AC00] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Phone size={18} />
                <span>Call/WhatsApp for Quotes</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-800 font-semibold rounded-lg hover:border-[#FFBF00] hover:bg-[#FFBF00]/5 transition-all duration-300"
              >
                <Calendar size={18} />
                <span>Free Site Visits</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={current.src}
                alt={current.title}
                fill
                priority
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-[#FFBF00] text-gray-900 text-xs font-semibold rounded-full">
                    Featured Project
                  </span>
                  <h3 className="text-xl font-bold text-white">{current.title}</h3>
                  <p className="text-gray-200 text-sm">{current.description}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="text-gray-800" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="text-gray-800" />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex 
                        ? "w-6 bg-[#FFBF00]" 
                        : "w-1.5 bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-12 lg:mt-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="flex items-center gap-2 text-gray-700">
              <Factory className="w-4 h-4" />
           
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          {/* Mobile Scrollable */}
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 lg:hidden scrollbar-hide">
            {quickLinks.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex-shrink-0 w-36 rounded-lg bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-24">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-[10px] text-gray-600 mt-0.5">{item.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-3">
            {quickLinks.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 1.2 }}
              >
                <Link
                  href={item.href}
                  className="group block bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-[#FFBF00] hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-24">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-semibold text-gray-900 group-hover:text-[#FFBF00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-600 mt-0.5">{item.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Scroll Indicator */}
        {!isScrolled && (
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center text-gray-500"
          >
            <span className="text-xs mb-1">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#FFBF00] rounded-full mt-2" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFBF00]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFBF00]/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}

export default HeroSection;