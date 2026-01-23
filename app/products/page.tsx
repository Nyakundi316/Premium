"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  MapPin,
  Boxes,
  Layers,
  Construction,
  Fence,
  ChevronDown,
  Check,
  Truck,
  Filter,
  Grid,
  List,
  Package,
  Award,
} from "lucide-react";

const BRAND = "#DA690D";
const BRAND_LIGHT = "#FF8C42";

type ProductCard = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  href: string; // kept for future use if you ever want deep links
  image: string;
  points: string[];
  icon: React.ReactNode;
  features: string[];
};

const PRODUCT_CARDS: ProductCard[] = [
  {
    id: "cabro",
    title: "Cabro Blocks",
    subtitle: "Premium Interlocking Pavers",
    tag: "Popular",
    href: "/products/cabro",
    image: "/images/cabro-thumb.png",
    points: ["Anti-slip surface", "High compressive strength", "Multiple patterns", "Easy installation"],
    icon: <Layers size={16} />,
    features: ["Weather resistant", "Low maintenance", "Color stable"],
  },
  {
    id: "culverts",
    title: "Concrete Culverts",
    subtitle: "Drainage Solutions",
    tag: "Drainage",
    href: "/products/culverts",
    image: "/images/culvert-thumb.jpg",
    points: ["Heavy-duty construction", "Various diameters", "Quick installation"],
    icon: <Construction size={16} />,
    features: ["Corrosion resistant", "Long lifespan", "Custom sizes"],
  },
  {
    id: "kerbs",
    title: "Kerbs & Channels",
    subtitle: "Road Edge Solutions",
    tag: "Finishing",
    href: "/products/kerbs-drainage",
    image: "/images/kerbs-drainage.jpg",
    points: ["Uniform dimensions", "Clean edges", "Stormwater management"],
    icon: <Boxes size={16} />,
    features: ["Durable", "Pre-cast", "Easy alignment"],
  },
  {
    id: "posts",
    title: "Fencing Posts",
    subtitle: "Boundary & Security",
    tag: "Outdoor",
    href: "/products/fencing-posts",
    image: "/images/fencing-thumb.jpg",
    points: ["Reinforced concrete", "Pre-drilled holes", "Various heights"],
    icon: <Fence size={16} />,
    features: ["Weatherproof", "Termite proof", "Long lasting"],
  },
  {
    id: "pavers",
    title: "Garden Pavers",
    subtitle: "Landscaping Solutions",
    tag: "Outdoor",
    href: "/products/garden-pavers",
    image: "/images/landscape_pool_kerbstone.jpg",
    points: ["Decorative finish", "Various shapes", "Easy to lay"],
    icon: <Layers size={16} />,
    features: ["Anti-fade", "Slip resistant", "Versatile"],
  },
  {
    id: "retaining",
    title: "Retaining Walls",
    subtitle: "Structural Support",
    tag: "Construction",
    href: "/products/retaining-walls",
    image: "/images/Retaining Walls.png",
    points: ["Structural strength", "Erosion control", "Quick assembly"],
    icon: <Construction size={16} />,
    features: ["Heavy duty", "Interlocking", "Durable"],
  },
  {
    id: "pipes",
    title: "Concrete Pipes",
    subtitle: "Water & Sewage Systems",
    tag: "Drainage",
    href: "/products/concrete-pipes",
    image: "/images/Concrete Pipes.png",
    points: ["Various diameters", "Heavy duty", "Easy installation"],
    icon: <Package size={16} />,
    features: ["Durable", "Corrosion resistant", "Long lifespan"],
  },
];

const FILTERS = [
  { id: "all", label: "All Products", icon: <Grid size={14} /> },
  { id: "popular", label: "Most Popular", icon: <Award size={14} /> },
  { id: "drainage", label: "Drainage", icon: <Construction size={14} /> },
  { id: "finishing", label: "Finishing", icon: <Boxes size={14} /> },
  { id: "outdoor", label: "Outdoor", icon: <Fence size={14} /> },
  { id: "construction", label: "Construction", icon: <Construction size={14} /> },
];

const SORT_OPTIONS = [
  { id: "popular", label: "Most Popular" },
  { id: "az", label: "A → Z" },
];

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [mobileView, setMobileView] = useState<"grid" | "list">("grid");
  const [openCardId, setOpenCardId] = useState<string | null>(null); // which product details are open

  const filteredAndSorted = useMemo(() => {
    const q = query.trim().toLowerCase();

    let filtered = PRODUCT_CARDS.filter((p) => {
      const matchesText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.points.some((x) => x.toLowerCase().includes(q)) ||
        p.features.some((f) => f.toLowerCase().includes(q));

      const matchesTag =
        activeFilter === "all"
          ? true
          : activeFilter === "popular"
          ? p.tag === "Popular"
          : p.tag.toLowerCase() === activeFilter;

      return matchesText && matchesTag;
    });

    if (sortBy === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filtered.sort((a, b) => {
        if (a.tag === "Popular" && b.tag !== "Popular") return -1;
        if (a.tag !== "Popular" && b.tag === "Popular") return 1;
        return a.title.localeCompare(b.title);
      });
    }

    return filtered;
  }, [query, activeFilter, sortBy]);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Construction background"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 pt-14 pb-10 sm:pt-16 sm:pb-12">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm border border-white/20 text-white mb-3 sm:mb-4"
              >
                <ShieldCheck size={14} style={{ color: BRAND_LIGHT }} />
                <span className="font-medium">Premium Products</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Browse <span style={{ color: BRAND_LIGHT }}>Products</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-2 sm:mt-3 text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl"
              >
                Explore our concrete products. Delivery scheduling available across Kenya.
              </motion.p>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 sm:mt-5 max-w-xl"
              >
                <div className="relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-9 sm:pl-11 pr-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl text-xs sm:text-sm text-white placeholder:text-gray-400 outline-none focus:border-orange-500"
                  />
                </div>
              </motion.div>

              <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-white/80">
                <MapPin size={14} style={{ color: BRAND_LIGHT }} />
                Nairobi & nationwide delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-5 sm:py-7">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Mobile Controls */}
          <div className="lg:hidden mb-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Products</h2>
                <p className="text-xs text-gray-600">{filteredAndSorted.length} items</p>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-700"
              >
                <Filter size={14} />
                <span>Filter</span>
              </button>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="relative flex-1">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-7 py-1.5 text-xs text-gray-700"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
              </div>

              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
                <button
                  onClick={() => setMobileView("grid")}
                  className={`p-1.5 rounded ${mobileView === "grid" ? "bg-gray-100" : ""}`}
                >
                  <Grid size={14} className={mobileView === "grid" ? "text-orange-600" : "text-gray-400"} />
                </button>
                <button
                  onClick={() => setMobileView("list")}
                  className={`p-1.5 rounded ${mobileView === "list" ? "bg-gray-100" : ""}`}
                >
                  <List size={14} className={mobileView === "list" ? "text-orange-600" : "text-gray-400"} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
            {/* Filters */}
            <div className={`${showFilters ? "block" : "hidden"} lg:block lg:w-56 flex-shrink-0`}>
              <div className="bg-white rounded-xl border border-gray-200 p-4 lg:sticky lg:top-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-sm">Categories</h3>
                  <button
                    onClick={() => {
                      setActiveFilter("all");
                      setQuery("");
                    }}
                    className="text-xs hover:opacity-80"
                    style={{ color: BRAND }}
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-1">
                  {FILTERS.map((filter) => {
                    const isActive = activeFilter === filter.id;
                    return (
                      <button
                        key={filter.id}
                        onClick={() => {
                          setActiveFilter(filter.id);
                          if (typeof window !== "undefined" && window.innerWidth < 1024) {
                            setShowFilters(false);
                          }
                        }}
                        className={`flex items-center gap-2.5 w-full p-2.5 rounded-lg transition-all ${
                          isActive
                            ? "bg-orange-50 border border-orange-200 text-orange-700"
                            : "hover:bg-gray-50 text-gray-700"
                        } text-xs`}
                      >
                        <div className={`p-1.5 rounded ${isActive ? "bg-orange-100" : "bg-gray-100"}`}>
                          {filter.icon}
                        </div>
                        <span className="font-medium">{filter.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 pt-5 border-t border-gray-200">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="p-1.5 bg-orange-100 rounded">
                      <Truck size={16} className="text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-gray-900">Nationwide Delivery</div>
                      <div className="text-[11px] text-gray-600">
                        Scheduling depends on location & quantity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="flex-1 min-w-0">
              {filteredAndSorted.length === 0 ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="w-14 h-14 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                    <Search size={22} className="text-gray-400" />
                  </div>
                  <h3 className="mt-3 text-base sm:text-lg font-bold text-gray-900">No products found</h3>
                  <p className="text-gray-600 mt-1 text-xs sm:text-sm">
                    Try adjusting your search or filter.
                  </p>
                  <button
                    onClick={() => {
                      setQuery("");
                      setActiveFilter("all");
                    }}
                    className="mt-4 px-4 py-2 text-white text-xs sm:text-sm rounded-lg font-medium transition-colors"
                    style={{ backgroundColor: BRAND }}
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <>
                  {/* GRID VIEW – mobile-first, 1 column on small screens */}
                  {mobileView === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {filteredAndSorted.map((product) => {
                        const isOpen = openCardId === product.id;

                        return (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -3 }}
                            className="group"
                          >
                            <div
                              className="relative rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                              onClick={() => toggleCard(product.id)}
                            >
                              {/* IMAGE ONLY (default view) */}
                              <div className="relative h-48 sm:h-56 w-full">
                                <Image
                                  src={product.image}
                                  alt={product.title}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/15" />

                                {/* Tag */}
                                <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-black/55 text-white text-[11px] px-2.5 py-1 backdrop-blur">
                                  {product.icon}
                                  <span>{product.tag}</span>
                                </div>

                                {/* Hint text when closed */}
                               
                              </div>

                              {/* DETAILS – only rendered when card is open */}
                              {isOpen && (
                                <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
                                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                                    {product.title}
                                  </h4>
                                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                                    {product.subtitle}
                                  </p>

                                  <ul className="mt-2.5 space-y-1.5">
                                    {product.points.map((point, idx) => (
                                      <li
                                        key={idx}
                                        className="text-xs sm:text-sm text-gray-700 flex items-start gap-2"
                                      >
                                        <span
                                          className="mt-1.5 h-1.5 w-1.5 rounded-full"
                                          style={{ backgroundColor: BRAND }}
                                        />
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="mt-2.5 border-t border-gray-100 pt-2.5 space-y-2">
                                    <ul className="space-y-1.5 text-[11px] sm:text-xs text-gray-700">
                                      {product.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                          <Check
                                            size={12}
                                            className="mt-0.5"
                                            style={{ color: BRAND }}
                                          />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    /* LIST VIEW – still mobile-friendly */
                    <div className="space-y-3 sm:space-y-4">
                      {filteredAndSorted.map((product) => {
                        const isOpen = openCardId === product.id;

                        return (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all cursor-pointer"
                            onClick={() => toggleCard(product.id)}
                          >
                            <div className="flex flex-col sm:flex-row">
                              <div className="relative w-full sm:w-52 h-40 sm:h-auto flex-shrink-0">
                                <Image
                                  src={product.image}
                                  alt={product.title}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 640px) 100vw, 208px"
                                />
                                <div className="absolute inset-0 bg-black/15" />
                                <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-black/55 text-white text-[11px] px-2.5 py-1 backdrop-blur">
                                  {product.icon}
                                  <span>{product.tag}</span>
                                </div>
                              </div>

                              <div className="flex-1 p-3 sm:p-4">
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                                      {product.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                                      {product.subtitle}
                                    </p>
                                  </div>

                                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-gray-500">
                                    <span>Tap to view details</span>
                                    <ArrowRight size={12} />
                                  </div>
                                </div>

                                {isOpen && (
                                  <div className="mt-2.5 border-t border-gray-100 pt-2.5 space-y-2">
                                    <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                                      {product.points.map((point) => (
                                        <li key={point} className="flex items-start gap-2">
                                          <div
                                            className="w-1.5 h-1.5 rounded-full mt-1"
                                            style={{ backgroundColor: BRAND }}
                                          />
                                          <span>{point}</span>
                                        </li>
                                      ))}
                                    </ul>

                                    <ul className="space-y-1.5 text-[11px] sm:text-xs text-gray-700">
                                      {product.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                          <Check
                                            size={13}
                                            className="mt-0.5"
                                            style={{ color: BRAND }}
                                          />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>

                                   
                                  </div>
                                )}

                               
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
