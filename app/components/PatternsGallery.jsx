import { useState } from "react";
import Link from "next/link";

export default function PatternsGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPattern, setSelectedPattern] = useState(null);

  const categories = [
    { id: "all", label: "All Patterns" },
    { id: "interlocking", label: "Interlocking" },
    { id: "hexagonal", label: "Hexagonal" },
    { id: "cobblestone", label: "Cobblestone" },
    { id: "herringbone", label: "Herringbone" },
    { id: "custom", label: "Custom Designs" },
  ];

  const patterns = [
    {
      id: 1,
      name: "Classic Interlock",
      category: "interlocking",
      description: "Traditional rectangular pattern for driveways and walkways",
      thickness: "60mm",
      load: "Medium to Heavy",
      colors: ["Charcoal", "Red", "Beige"],
      application: "Residential Driveways",
      popular: true,
    },
    {
      id: 2,
      name: "Hexagon Honeycomb",
      category: "hexagonal",
      description: "Modern hexagonal design for contemporary spaces",
      thickness: "80mm",
      load: "Heavy",
      colors: ["Charcoal", "Grey", "Mixed"],
      application: "Commercial Areas",
      popular: true,
    },
    {
      id: 3,
      name: "Old World Cobble",
      category: "cobblestone",
      description: "Rounded cobblestone style for traditional aesthetics",
      thickness: "100mm",
      load: "Heavy",
      colors: ["Grey", "Brown", "Mixed"],
      application: "Historic Areas, Gardens",
    },
    {
      id: 4,
      name: "Herringbone 90°",
      category: "herringbone",
      description: "Classic 90-degree herringbone for maximum stability",
      thickness: "60mm",
      load: "Very Heavy",
      colors: ["Charcoal", "Red", "Grey"],
      application: "Driveways, Parking",
      popular: true,
    },
    {
      id: 5,
      name: "Basket Weave",
      category: "interlocking",
      description: "Decorative basket weave pattern for visual appeal",
      thickness: "50mm",
      load: "Medium",
      colors: ["Red & Grey", "Mixed"],
      application: "Patios, Walkways",
    },
    {
      id: 6,
      name: "Running Bond",
      category: "interlocking",
      description: "Simple brick-like pattern for clean lines",
      thickness: "60mm",
      load: "Medium",
      colors: ["Red", "Grey", "Charcoal"],
      application: "All Applications",
    },
    {
      id: 7,
      name: "Circular Fan",
      category: "custom",
      description: "Custom circular pattern for focal points",
      thickness: "80mm",
      load: "Medium",
      colors: ["Custom Mix"],
      application: "Feature Areas",
    },
    {
      id: 8,
      name: "Hexagon 3D",
      category: "hexagonal",
      description: "Three-dimensional hexagonal blocks",
      thickness: "100mm",
      load: "Very Heavy",
      colors: ["Charcoal", "Grey"],
      application: "Industrial, Commercial",
    },
  ];

  const filteredPatterns = activeCategory === "all" 
    ? patterns 
    : patterns.filter(pattern => pattern.category === activeCategory);

  const patternStats = {
    interlocking: patterns.filter(p => p.category === "interlocking").length,
    hexagonal: patterns.filter(p => p.category === "hexagonal").length,
    cobblestone: patterns.filter(p => p.category === "cobblestone").length,
    herringbone: patterns.filter(p => p.category === "herringbone").length,
    custom: patterns.filter(p => p.category === "custom").length,
  };

  return (
    <section id="patterns" className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-[#0A1A2F]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent border border-[#D4A017]/30 px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-sm font-medium tracking-widest text-[#D4A017] uppercase">
              Design Portfolio
            </span>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our <span className="text-[#D4A017]">Paving Patterns</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Browse our collection of premium paving patterns. Each design combines durability 
            with aesthetic appeal for various applications.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {Object.entries(patternStats).map(([category, count]) => (
              <div key={category} className="text-center p-4 rounded-xl border border-gray-800 bg-gray-900/50">
                <div className="text-2xl font-bold text-white">{count}</div>
                <div className="text-sm text-gray-400 capitalize">{category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] shadow-lg shadow-[#D4A017]/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Patterns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPatterns.map((pattern) => (
            <div
              key={pattern.id}
              className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4A017]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4A017]/10"
              onClick={() => setSelectedPattern(pattern)}
            >
              {/* Popular Badge */}
              {pattern.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-xs font-bold">
                    Popular
                  </span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-white">{pattern.name}</p>
                    <p className="text-sm text-gray-400 mt-2">Click to view details</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Pattern Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4A017] transition-colors">
                    {pattern.name}
                  </h3>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                    {pattern.thickness}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4">{pattern.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Load: </span>
                    <span className="font-medium text-white">{pattern.load}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500">For: </span>
                    <span className="font-medium text-white">{pattern.application}</span>
                  </div>
                </div>

                {/* Color Dots */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-xs text-gray-500">Colors:</span>
                  {pattern.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-700"
                      style={{
                        backgroundColor: color === "Charcoal" ? "#36454F" :
                                        color === "Red" ? "#8B0000" :
                                        color === "Beige" ? "#F5F5DC" :
                                        color === "Grey" ? "#808080" :
                                        color === "Brown" ? "#8B4513" :
                                        "#6B7280"
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4A017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Pattern Detail Modal */}
        {selectedPattern && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              <button
                onClick={() => setSelectedPattern(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-900/80 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Left - Image */}
                <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white mb-2">{selectedPattern.name}</p>
                      <p className="text-gray-400">Pattern Detail View</p>
                    </div>
                  </div>
                </div>
                
                {/* Right - Details */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedPattern.name}</h3>
                  <p className="text-gray-300 mb-6">{selectedPattern.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gray-800/50">
                      <p className="text-sm text-gray-400">Thickness</p>
                      <p className="text-xl font-bold text-white">{selectedPattern.thickness}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-800/50">
                      <p className="text-sm text-gray-400">Load Capacity</p>
                      <p className="text-xl font-bold text-white">{selectedPattern.load}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-800/50">
                      <p className="text-sm text-gray-400">Category</p>
                      <p className="text-xl font-bold text-white capitalize">{selectedPattern.category}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-800/50">
                      <p className="text-sm text-gray-400">Application</p>
                      <p className="text-xl font-bold text-white">{selectedPattern.application}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-400 mb-2">Available Colors:</p>
                    <div className="flex flex-wrap gap-3">
                      {selectedPattern.colors.map((color, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50"
                        >
                          <div
                            className="w-4 h-4 rounded-full border border-gray-600"
                            style={{
                              backgroundColor: color === "Charcoal" ? "#36454F" :
                                              color === "Red" ? "#8B0000" :
                                              color === "Beige" ? "#F5F5DC" :
                                              color === "Grey" ? "#808080" :
                                              color === "Brown" ? "#8B4513" :
                                              "#6B7280"
                            }}
                          />
                          <span className="text-white text-sm">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link
                      href="#quote"
                      onClick={() => setSelectedPattern(null)}
                      className="flex-1 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-semibold py-3 rounded-lg text-center hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
                    >
                      Request This Pattern
                    </Link>
                    <button
                      onClick={() => setSelectedPattern(null)}
                      className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:border-[#D4A017]/50 hover:bg-[#D4A017]/5 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}