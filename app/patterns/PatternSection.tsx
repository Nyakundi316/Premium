// app/patterns/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Filter, 
  Search, 
  Grid3x3, 
  Diamond,
  Hexagon,
  Square,
  Circle,
  Star,
  Zap,
  Shield,
  Award,
  ChevronRight,
  Info
} from "lucide-react";

type PatternType = 
  | "interlocking" 
  | "hexagonal" 
  | "cobblestone" 
  | "herringbone"
  | "zigzag" 
  | "circular"
  | "geometric"
  | "mixed"
  | "traditional"
  | "modern";

type Pattern = {
  id: number;
  name: string;
  type: PatternType;
  category: "residential" | "commercial" | "industrial" | "landscape";
  description: string;
  thickness: string;
  loadCapacity: string;
  colors: string[];
  application: string[];
  features: string[];
  priceRange: "budget" | "mid" | "premium" | "luxury";
  popular: boolean;
  trending: boolean;
  image: string;
  durability: number; // 1-10
  installationComplexity: number; // 1-10
  specifications?: {
    size?: string;
    weight?: string;
    surface?: string;
    warranty?: string;
  };
};

const patternTypes: { id: PatternType; label: string; icon: React.ReactNode; description: string }[] = [
  { id: "interlocking", label: "Interlocking", icon: <Grid3x3 size={20} />, description: "Classic rectangular patterns" },
  { id: "herringbone", label: "Herringbone", icon: <Zap size={20} />, description: "V-shaped patterns" },
  { id: "hexagonal", label: "Hexagonal", icon: <Hexagon size={20} />, description: "Honeycomb designs" },
  { id: "cobblestone", label: "Cobblestone", icon: <Circle size={20} />, description: "Old-world charm" },
  { id: "zigzag", label: "Zig Zag", icon: <Square size={20} />, description: "Modern geometric" },
  { id: "circular", label: "Circular", icon: <Circle size={20} />, description: "Radial designs" },
  { id: "geometric", label: "Geometric", icon: <Diamond size={20} />, description: "Abstract patterns" },
  { id: "traditional", label: "Traditional", icon: <Shield size={20} />, description: "Classic styles" },
];

const categories = [
  { id: "all", label: "All Patterns", count: 0 },
  { id: "residential", label: "Residential", count: 12 },
  { id: "commercial", label: "Commercial", count: 8 },
  { id: "industrial", label: "Industrial", count: 6 },
  { id: "landscape", label: "Landscape", count: 10 },
];

const filterOptions = [
  { id: "load", label: "Load Capacity", options: ["Light", "Medium", "Heavy", "Extra Heavy"] },
  { id: "thickness", label: "Thickness", options: ["40mm", "60mm", "80mm", "100mm+"] },
  { id: "price", label: "Price Range", options: ["Budget", "Mid-Range", "Premium", "Luxury"] },
];

// Enhanced pattern data with more realistic patterns
const patternsData: Pattern[] = [
  {
    id: 1,
    name: "Classic Interlock",
    type: "interlocking",
    category: "residential",
    description: "Traditional rectangular blocks providing excellent stability and timeless appeal",
    thickness: "60mm",
    loadCapacity: "Heavy",
    colors: ["Charcoal", "Red Blend", "Beige", "Grey Mix"],
    application: ["Driveways", "Patios", "Walkways"],
    features: ["Interlocking edges", "Easy maintenance", "Quick installation"],
    priceRange: "mid",
    popular: true,
    trending: true,
    image: "/images/patterns/classic-interlock.jpg",
    durability: 9,
    installationComplexity: 4,
    specifications: {
      size: "200x100mm",
      weight: "4.5kg/block",
      surface: "Tumbled",
      warranty: "25 years"
    }
  },
  {
    id: 2,
    name: "Herringbone 90°",
    type: "herringbone",
    category: "commercial",
    description: "Premium herringbone pattern offering superior load distribution",
    thickness: "80mm",
    loadCapacity: "Extra Heavy",
    colors: ["Charcoal", "Graphite", "Charcoal/Red"],
    application: ["Parking Lots", "Industrial Yards", "Heavy Traffic Areas"],
    features: ["Maximum stability", "High traffic resistance", "Excellent drainage"],
    priceRange: "premium",
    popular: true,
    trending: false,
    image: "/images/patterns/herringbone.jpg",
    durability: 10,
    installationComplexity: 7,
    specifications: {
      size: "200x100mm",
      weight: "5.8kg/block",
      surface: "Smooth",
      warranty: "30 years"
    }
  },
  {
    id: 3,
    name: "Hexagon Honeycomb",
    type: "hexagonal",
    category: "landscape",
    description: "Modern hexagonal design creating visual depth and contemporary appeal",
    thickness: "60mm",
    loadCapacity: "Medium",
    colors: ["Charcoal", "Grey Blend", "Mixed Earth Tones"],
    application: ["Garden Paths", "Pool Decks", "Courtyards"],
    features: ["Water-permeable", "Non-slip surface", "Visual depth effect"],
    priceRange: "premium",
    popular: true,
    trending: true,
    image: "/images/patterns/hexagon-honeycomb.jpg",
    durability: 8,
    installationComplexity: 6,
    specifications: {
      size: "225mm (across flats)",
      weight: "3.8kg/block",
      surface: "Natural",
      warranty: "20 years"
    }
  },
  {
    id: 4,
    name: "Victorian Cobblestone",
    type: "cobblestone",
    category: "residential",
    description: "Authentic rounded cobblestone finish for historic and rustic appeal",
    thickness: "100mm",
    loadCapacity: "Heavy",
    colors: ["Natural Grey", "Aged Brown", "Mixed Heritage"],
    application: ["Historic Districts", "Garden Borders", "Feature Areas"],
    features: ["Old-world aesthetic", "Frost resistant", "Aged appearance"],
    priceRange: "luxury",
    popular: false,
    trending: true,
    image: "/images/patterns/cobblestone.jpg",
    durability: 9,
    installationComplexity: 8,
    specifications: {
      size: "Irregular",
      weight: "6.2kg/block",
      surface: "Rounded",
      warranty: "Lifetime"
    }
  },
  {
    id: 5,
    name: "3D Zig Zag",
    type: "zigzag",
    category: "commercial",
    description: "Dynamic zigzag pattern creating optical illusion and modern look",
    thickness: "80mm",
    loadCapacity: "Heavy",
    colors: ["Charcoal", "Graphite", "Modern Grey"],
    application: ["Shopping Malls", "Office Complexes", "Urban Spaces"],
    features: ["3D visual effect", "High impact resistance", "Modern aesthetic"],
    priceRange: "premium",
    popular: true,
    trending: true,
    image: "/images/patterns/3d-zigzag.jpg",
    durability: 8,
    installationComplexity: 7,
    specifications: {
      size: "150x150mm",
      weight: "5.1kg/block",
      surface: "Textured",
      warranty: "25 years"
    }
  },
  {
    id: 6,
    name: "Circular Fan",
    type: "circular",
    category: "landscape",
    description: "Radial circular patterns for feature areas and decorative spaces",
    thickness: "50mm",
    loadCapacity: "Light",
    colors: ["Beige", "Sandstone", "Mixed Tones"],
    application: ["Courtyards", "Feature Walls", "Decorative Areas"],
    features: ["Decorative appeal", "Custom radius options", "Visual focus"],
    priceRange: "luxury",
    popular: false,
    trending: true,
    image: "/images/patterns/circular-fan.jpg",
    durability: 7,
    installationComplexity: 9,
    specifications: {
      size: "Various radii",
      weight: "3.2kg/block",
      surface: "Smooth",
      warranty: "15 years"
    }
  },
  {
    id: 7,
    name: "Geometric Mosaic",
    type: "geometric",
    category: "commercial",
    description: "Custom mosaic patterns for high-end architectural projects",
    thickness: "60mm",
    loadCapacity: "Medium",
    colors: ["Custom Colors", "Mixed Palette", "Designer Selection"],
    application: ["Hotel Entrances", "Corporate Lobbies", "Luxury Residences"],
    features: ["Custom designs", "Color mixing", "Artistic patterns"],
    priceRange: "luxury",
    popular: false,
    trending: false,
    image: "/images/patterns/geometric-mosaic.jpg",
    durability: 8,
    installationComplexity: 10,
    specifications: {
      size: "Multiple sizes",
      weight: "4.0kg/block",
      surface: "Polished",
      warranty: "Custom"
    }
  },
  {
    id: 8,
    name: "Traditional Basket Weave",
    type: "traditional",
    category: "residential",
    description: "Classic basket weave pattern for timeless elegance",
    thickness: "60mm",
    loadCapacity: "Medium",
    colors: ["Red", "Charcoal", "Natural Blend"],
    application: ["Traditional Homes", "Heritage Sites", "Formal Gardens"],
    features: ["Classic pattern", "Even load distribution", "Traditional appeal"],
    priceRange: "mid",
    popular: true,
    trending: false,
    image: "/images/patterns/basket-weave.jpg",
    durability: 9,
    installationComplexity: 5,
    specifications: {
      size: "200x100mm",
      weight: "4.3kg/block",
      surface: "Tumbled",
      warranty: "25 years"
    }
  },
];

export default function PatternsGalleryPage() {
  const [selectedType, setSelectedType] = useState<PatternType | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [patterns, setPatterns] = useState<Pattern[]>(patternsData);

  // Filter patterns
  useEffect(() => {
    let filtered = patternsData;

    if (selectedType !== "all") {
      filtered = filtered.filter(pattern => pattern.type === selectedType);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(pattern => pattern.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(pattern =>
        pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.application.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setPatterns(filtered);
  }, [selectedType, selectedCategory, searchQuery]);

  const getPatternIcon = (type: PatternType) => {
    const pattern = patternTypes.find(p => p.id === type);
    return pattern?.icon || <Grid3x3 size={20} />;
  };

  const getPriceRangeColor = (range: Pattern["priceRange"]) => {
    switch (range) {
      case "budget": return "bg-green-100 text-green-800";
      case "mid": return "bg-blue-100 text-blue-800";
      case "premium": return "bg-purple-100 text-purple-800";
      case "luxury": return "bg-amber-100 text-amber-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 50c4 0 6-2 6-6V6c0-4-2-6-6-6H6C2 0 0 2 0 6v38c0 4 2 6 6 6h48z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Award size={16} />
              <span className="text-sm font-medium">Premium Collection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Masterful Paving</span>
              <span className="block text-amber-400">Patterns & Designs</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Explore our comprehensive collection of premium paving patterns. Each design is engineered for specific applications, 
              combining aesthetic appeal with structural integrity for lasting beauty and performance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2">
                View All Patterns
                <ChevronRight size={20} />
              </button>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20">
                Request Samples
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Section */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Pattern Type Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedType("all")}
                className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedType === "all"
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Types
              </button>
              {patternTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedType === type.id
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type.icon}
                  {type.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search patterns, applications, features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Patterns", value: patternsData.length.toString() },
            { label: "Pattern Types", value: patternTypes.length.toString() },
            { label: "Color Options", value: "24+" },
            { label: "Installations", value: "500+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Patterns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {patterns.map((pattern) => (
            <div
              key={pattern.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={pattern.image}
                  alt={pattern.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 z-20 flex justify-between">
                  <div className="flex gap-2">
                    {pattern.popular && (
                      <span className="px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    )}
                    {pattern.trending && (
                      <span className="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                        TRENDING
                      </span>
                    )}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getPriceRangeColor(pattern.priceRange)}`}>
                    {pattern.priceRange.toUpperCase()}
                  </span>
                </div>

                {/* Pattern Type */}
                <div className="absolute bottom-3 left-3 z-20">
                  <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <div className="text-amber-300">
                      {getPatternIcon(pattern.type)}
                    </div>
                    <span className="text-white text-sm font-medium">
                      {patternTypes.find(t => t.id === pattern.type)?.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                      {pattern.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {pattern.thickness}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {pattern.loadCapacity}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        Durability: {pattern.durability}/10
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {pattern.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {pattern.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded"
                      >
                        <Check size={12} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Best For:</div>
                  <div className="flex flex-wrap gap-2">
                    {pattern.application.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-2">Available Colors:</div>
                  <div className="flex gap-2">
                    {pattern.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{
                          backgroundColor: color === "Charcoal" ? "#36454F" :
                            color === "Red Blend" ? "#8B0000" :
                            color === "Beige" ? "#F5F5DC" :
                            color === "Grey Mix" ? "#808080" :
                            color === "Graphite" ? "#2F4F4F" :
                            color === "Natural Grey" ? "#6E7B8B" : "#D4A017"
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/patterns/${pattern.id}`}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2.5 rounded-lg font-medium transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="px-4 py-2.5 border border-amber-500 text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-colors flex items-center justify-center">
                    <Info size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Perfect Pattern?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We specialize in custom paving designs. Share your vision, and our experts will create a unique pattern tailored to your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300">
              Request Custom Design
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20">
              Book Consultation
            </button>
          </div>
        </div>

        {/* Pattern Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pattern Selection Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "For Driveways",
                patterns: ["Herringbone", "Basket Weave", "Interlocking"],
                description: "Patterns with high load capacity and stability"
              },
              {
                title: "For Landscapes",
                patterns: ["Hexagonal", "Circular", "Cobblestone"],
                description: "Decorative patterns for gardens and pathways"
              },
              {
                title: "For Commercial",
                patterns: ["3D Zig Zag", "Geometric", "Large Format"],
                description: "Durable patterns for high traffic areas"
              },
              {
                title: "For Historic",
                patterns: ["Victorian", "Cobblestone", "Traditional"],
                description: "Authentic patterns for heritage projects"
              }
            ].map((guide, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{guide.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {guide.patterns.map((pattern, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {pattern}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper components
const Check = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);