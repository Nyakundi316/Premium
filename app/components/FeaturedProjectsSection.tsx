"use client";

import { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  Filter,
  MapPin,
  Ruler,
  Home,
  Building2,
  Factory,
  Truck,
  CheckCircle,
  Calendar,
} from "lucide-react";

type Status = "Completed" | "In Progress";
type Category = "All" | "Residential" | "Commercial" | "Industrial" | "Infrastructure";

type Project = {
  id: number;
  name: string;
  type: Exclude<Category, "All">;
  location: string;
  scope: string;
  images: string[];
  icon: React.ReactNode;
  status: Status;
  duration: string;
  features: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Luxury Estate Driveway",
    type: "Residential",
    location: "Kiambu, Kenya",
    scope: "600 m² • 80mm heavy-duty",
    images: ["/images/30 Best Yard Landscaping Ideas for a Stunning….jpeg", "/images/luxury pathway.png", "/images/home.jpg"],
    icon: <Home className="w-4 h-4" />,
    status: "Completed",
    duration: "2 weeks",
    features: ["Weather-resistant", "Premium finish", "Low maintenance"],
  },
  {
    id: 2,
    name: "Retail & Mall Parking",
    type: "Commercial",
    location: "Nairobi, Kenya",
    scope: "2,500 m² • Industrial",
    images: ["/images/retail.png", "/images/mall.png"],
    icon: <Building2 className="w-4 h-4" />,
    status: "Completed",
    duration: "4 weeks",
    features: ["High traffic", "Durable", "Easy cleaning"],
  },
  {
    id: 3,
    name: "Industrial Yard",
    type: "Industrial",
    location: "Ruiru, Kenya",
    scope: "1,800 m² • Heavy-duty",
    images: [ "/images/industrial yard.png", "/images/Interlockers-1.jpg",],
    icon: <Factory className="w-4 h-4" />,
    status: "In Progress",
    duration: "3 weeks",
    features: ["Heavy load", "Long-lasting", "Custom drainage"],
  },
  {
    id: 4,
    name: "Road Drainage System",
    type: "Infrastructure",
    location: "Thika Road, Kenya",
    scope: "Large-scale culverts",
    images: ["/images/culverts.png","/images/culvert-thumb.jpg",],
    icon: <Truck className="w-4 h-4" />,
    status: "Completed",
    duration: "5 weeks",
    features: ["Steel-reinforced", "Proper grading", "Future-proof"],
  },
];

const BRAND_GOLD = "#FFBF00";
const BRAND_GOLD_DARK = "#E6AC00";

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

export default function CompactProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fsIndex, setFsIndex] = useState(0);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.type)));
    return ["All", ...unique] as Category[];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.type === activeCategory);
  }, [activeCategory]);

  const openProject = useCallback((p: Project) => {
    setActiveProject(p);
    setSlideIndex(0);
    setIsFullscreen(false);
    setFsIndex(0);
  }, []);

  const closeProject = useCallback(() => {
    setActiveProject(null);
    setSlideIndex(0);
    setIsFullscreen(false);
    setFsIndex(0);
  }, []);

  const nextSlide = useCallback(() => {
    if (!activeProject) return;
    setSlideIndex((s) => clampIndex(s + 1, activeProject.images.length));
  }, [activeProject]);

  const prevSlide = useCallback(() => {
    if (!activeProject) return;
    setSlideIndex((s) => clampIndex(s - 1, activeProject.images.length));
  }, [activeProject]);

  const openFullscreen = useCallback(() => {
    if (!activeProject) return;
    setFsIndex(slideIndex);
    setIsFullscreen(true);
  }, [activeProject, slideIndex]);

  const closeFullscreen = useCallback(() => setIsFullscreen(false), []);

  const fsNext = useCallback(() => {
    if (!activeProject) return;
    setFsIndex((s) => clampIndex(s + 1, activeProject.images.length));
  }, [activeProject]);

  const fsPrev = useCallback(() => {
    if (!activeProject) return;
    setFsIndex((s) => clampIndex(s - 1, activeProject.images.length));
  }, [activeProject]);

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Image Right, Content Left */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 lg:mb-16">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFBF00]/10 mb-4">
              <Filter className="w-4 h-4" style={{ color: BRAND_GOLD_DARK }} />
              <span className="text-xs font-medium text-[#996C00]">
                Proven Quality & Excellence
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Transforming Spaces with{" "}
              <span
                className="bg-gradient-to-r from-[#FFBF00] to-[#E6AC00] bg-clip-text text-transparent"
              >
                Precision & Craftsmanship
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              With over a decade of experience, we specialize in delivering high-quality 
              construction projects that stand the test of time. From residential driveways 
              to large-scale infrastructure.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
             
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" style={{ color: BRAND_GOLD }} />
                <span className="text-gray-700">Premium materials & advanced techniques</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" style={{ color: BRAND_GOLD }} />
                <span className="text-gray-700">Timely delivery with strict quality control</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5" style={{ color: BRAND_GOLD }} />
                <span className="text-gray-700">Professional team with certified expertise</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Driveway.png" // Replace with your hero image
                alt="Construction Project Showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Image Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-900">
                    Project Completed: Dec 2024
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Luxury Estate Driveway, Kiambu</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div 
              className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-20"
              style={{ background: `radial-gradient(circle, ${BRAND_GOLD}, transparent 70%)` }}
            />
            <div 
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-20"
              style={{ background: `radial-gradient(circle, ${BRAND_GOLD_DARK}, transparent 70%)` }}
            />
          </div>
        </div>

        {/* Projects Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Browse Our Recent Projects
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Tap any image to explore project gallery and details
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => {
            const isActive = c === activeCategory;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition border ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                style={
                  isActive
                    ? {
                        backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                        borderColor: "rgba(0,0,0,0.08)",
                      }
                    : { borderColor: "rgba(0,0,0,0.10)" }
                }
                aria-pressed={isActive}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => openProject(project)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              className="text-left"
              aria-label={`Open ${project.name}`}
            >
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-lg transition duration-300">
                <div className="relative aspect-square">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    loading="lazy"
                    quality={80}
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 border border-black/10">
                    <span className="text-xs text-gray-900 font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="px-3 py-3">
                  <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                    {project.name}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-1">
                    {project.location}
                  </p>
                </div>
                <div className="h-0.5 bg-[#FFBF00] scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA Section Below Projects */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for?
          </p>
          <button
            className="px-6 py-3 rounded-xl font-semibold text-white hover:shadow-lg transition"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
            }}
          >
            Request a Custom Quote
          </button>
        </div>
      </div>

      {/* MODAL: Swipeable gallery + details (opens on click) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 p-3 sm:p-4 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="relative w-full sm:max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] sm:max-h-[90vh]"
              initial={{ y: 22, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 22, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeProject}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/45 hover:bg-black/60 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content scroll (mobile) */}
              <div className="h-full overflow-y-auto">
                <div className="grid md:grid-cols-2">
                  {/* Gallery */}
                  <div className="relative bg-gray-950">
                    <div className="relative h-64 sm:h-72 md:h-full min-h-[260px]">
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                          key={`${activeProject.id}-${slideIndex}`}
                          className="absolute inset-0"
                          initial={{ opacity: 0.0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0.0, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.12}
                          onDragEnd={(_, info) => {
                            const swipe = info.offset.x;
                            const velocity = info.velocity.x;
                            if (swipe < -60 || velocity < -500) nextSlide();
                            if (swipe > 60 || velocity > 500) prevSlide();
                          }}
                        >
                          <Image
                            src={activeProject.images[slideIndex]}
                            alt={`${activeProject.name} image ${slideIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            quality={85}
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Gallery controls */}
                      {activeProject.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={prevSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/45 hover:bg-black/60 transition"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-5 h-5 text-white" />
                          </button>
                          <button
                            type="button"
                            onClick={nextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/45 hover:bg-black/60 transition"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-5 h-5 text-white" />
                          </button>
                        </>
                      )}

                      {/* Fullscreen */}
                      <button
                        type="button"
                        onClick={openFullscreen}
                        className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-black/45 hover:bg-black/60 transition"
                        aria-label="Open full screen viewer"
                      >
                        <Expand className="w-5 h-5 text-white" />
                      </button>

                      {/* Counter + dots */}
                      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                        <span className="text-xs text-white/90 bg-black/45 px-2 py-1 rounded-lg">
                          {slideIndex + 1}/{activeProject.images.length}
                        </span>

                        <div className="flex items-center gap-1">
                          {activeProject.images.slice(0, 8).map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSlideIndex(i)}
                              className="h-1.5 w-1.5 rounded-full"
                              style={{
                                backgroundColor:
                                  i === slideIndex ? BRAND_GOLD : "rgba(255,255,255,0.45)",
                              }}
                              aria-label={`Go to image ${i + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Thumbnails (mobile-friendly, scroll) */}
                    {activeProject.images.length > 1 && (
                      <div className="px-3 py-3 bg-white border-t border-gray-200 md:hidden">
                        <div className="flex gap-2 overflow-x-auto">
                          {activeProject.images.map((src, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSlideIndex(i)}
                              className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border ${
                                i === slideIndex ? "border-[#FFBF00]" : "border-gray-200"
                              }`}
                              aria-label={`Select image ${i + 1}`}
                            >
                              <Image
                                src={src}
                                alt={`Thumbnail ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                                loading="lazy"
                                quality={60}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-600">
                          {activeProject.type} • {activeProject.status}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                          {activeProject.name}
                        </h3>
                      </div>

                      <div
                        className="h-10 w-10 rounded-xl grid place-items-center border border-black/10"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                        }}
                      >
                        <span className="text-white">{activeProject.icon}</span>
                      </div>
                    </div>

                    <div className="mt-5 space-y-2 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>{activeProject.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-gray-500" />
                        <span>{activeProject.scope}</span>
                      </div>
                      <div className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2 mt-3">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold text-gray-900">
                          {activeProject.duration}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.features.map((f, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 border border-gray-200 text-gray-800"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 pt-6 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={closeProject}
                        className="w-full px-5 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition"
                      >
                        Close
                      </button>
                      <p className="mt-3 text-xs text-gray-500 text-center">
                        Swipe the image left/right to browse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FULLSCREEN VIEWER (separate overlay) */}
              <AnimatePresence>
                {isFullscreen && activeProject && (
                  <motion.div
                    className="fixed inset-0 z-[60] bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeFullscreen}
                  >
                    <button
                      type="button"
                      onClick={closeFullscreen}
                      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/15 transition"
                      aria-label="Close full screen"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>

                    {/* Fullscreen image */}
                    <div
                      className="absolute inset-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                          key={`fs-${activeProject.id}-${fsIndex}`}
                          className="absolute inset-0"
                          initial={{ opacity: 0.0, scale: 0.99 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0.0, scale: 0.99 }}
                          transition={{ duration: 0.18 }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.12}
                          onDragEnd={(_, info) => {
                            const swipe = info.offset.x;
                            const velocity = info.velocity.x;
                            if (swipe < -60 || velocity < -500) fsNext();
                            if (swipe > 60 || velocity > 500) fsPrev();
                          }}
                        >
                          <Image
                            src={activeProject.images[fsIndex]}
                            alt={`${activeProject.name} full screen ${fsIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                            quality={90}
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Controls */}
                      {activeProject.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={fsPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/15 transition"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-6 h-6 text-white" />
                          </button>
                          <button
                            type="button"
                            onClick={fsNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/15 transition"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-6 h-6 text-white" />
                          </button>
                        </>
                      )}

                      {/* Counter */}
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
                        <span className="text-xs text-white/90 bg-white/10 px-3 py-1.5 rounded-full">
                          {fsIndex + 1}/{activeProject.images.length}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}