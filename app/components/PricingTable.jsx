"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState("60mm");
  const [view, setView] = useState("retail"); // 'retail' or 'wholesale'

  const tabs = [
    { id: "60mm", label: "60mm Residential" },
    { id: "80mm", label: "80mm Heavy Duty" },
    { id: "decorative", label: "Decorative" },
    { id: "grass", label: "Grass Pavers" },
    { id: "kerbs", label: "Kerbstones" },
    { id: "installation", label: "Installation" },
  ];

  const productData = {
    "60mm": {
      title: "60mm Cabro Blocks (Residential Grade)",
      subtitle: "Ideal for driveways, walkways, and residential applications",
      columns: ["Design", "Colour", "Price (KSh per pc)", "Recommended Range"],
      rows: [
        {
          design: "Interlocking / Uni-Paver",
          colour: "Grey",
          price: "—",
          range: "55–75 KSh",
          popular: true,
        },
        {
          design: "Interlocking / Uni-Paver",
          colour: "Colour",
          price: "—",
          range: "75–110 KSh",
          popular: true,
        },
        {
          design: "Trihex / Dumble / Brick",
          colour: "Grey",
          price: "—",
          range: "55–75 KSh",
        },
        {
          design: "Trihex / Dumble / Brick",
          colour: "Colour",
          price: "—",
          range: "75–110 KSh",
        },
      ],
      notes: [
        "All blocks are vibrated for maximum density",
        "10-year durability guarantee",
        "Available in multiple finishes",
      ],
    },
    "80mm": {
      title: "80mm Cabro Blocks (Heavy-Duty)",
      subtitle: "For commercial yards, parking areas, and industrial sites",
      columns: ["Design", "Colour", "Price (KSh)", "Suggested Range"],
      rows: [
        {
          design: "Interlocking",
          colour: "Grey",
          price: "—",
          range: "80–100 KSh",
          heavy: true,
        },
        {
          design: "Interlocking",
          colour: "Colour",
          price: "—",
          range: "110–140 KSh",
          heavy: true,
        },
        {
          design: "Zig-Zag Heavy Duty",
          colour: "Grey",
          price: "—",
          range: "80–100 KSh",
          heavy: true,
        },
        {
          design: "Zig-Zag Heavy Duty",
          colour: "Colour",
          price: "—",
          range: "110–140 KSh",
          heavy: true,
        },
      ],
      notes: [
        "Load capacity: 40+ tonnes per sqm",
        "Industrial-grade compaction",
        "Extra thickness for heavy vehicles",
      ],
    },
    decorative: {
      title: "Decorative Cabro Blocks",
      subtitle: "Premium patterns for aesthetic appeal and unique designs",
      columns: ["Design", "Colours", "Price (KSh)", "Complexity"],
      rows: [
        {
          design: "3D Blocks",
          colours: "Multi-Colour",
          price: "—",
          range: "120–180 KSh",
          premium: true,
        },
        {
          design: "Hexagon / Trihex Grooved",
          colours: "Red/Yellow/Black",
          price: "—",
          range: "120–180 KSh",
          premium: true,
        },
        {
          design: "Wave / Fan / Cube",
          colours: "Custom Colour",
          price: "—",
          range: "120–180 KSh",
          premium: true,
        },
      ],
      notes: [
        "Custom colours available on request",
        "Perfect for feature areas and branding",
        "Enhanced slip resistance",
      ],
    },
    grass: {
      title: "Grass Pavers / Eco Blocks",
      subtitle: "Sustainable paving solutions with water drainage",
      columns: ["Product", "Description", "Price (KSh)", "Applications"],
      rows: [
        {
          design: "Grass Paver / Lattice Block",
          colour: "Permeable design for grass growth",
          price: "—",
          range: "120–160 KSh",
          eco: true,
        },
      ],
      notes: [
        "Allows natural water drainage",
        "Supports grass/vegetation growth",
        "Reduces heat island effect",
      ],
    },
    kerbs: {
      title: "Kerbstones & Channels",
      subtitle: "Edge restraints and drainage solutions",
      columns: ["Product", "Dimensions", "Price (KSh)", "Usage"],
      rows: [
        {
          design: "Standard Kerbstone",
          colour: "1000×150×300mm",
          price: "—",
          range: "Road edges",
        },
        {
          design: "L-Shaped Kerbstone",
          colour: "1000×150×300mm",
          price: "—",
          range: "Driveway edges",
        },
        {
          design: "Garden Edger",
          colour: "500×100×50mm",
          price: "—",
          range: "Landscaping",
        },
        {
          design: "Heavy-Duty Kerb",
          colour: "1000×200×400mm",
          price: "—",
          range: "Industrial areas",
        },
        {
          design: "Precast Channel",
          colour: "1000×300×300mm",
          price: "—",
          range: "Drainage",
        },
        {
          design: "Paving Slab",
          colour: "600×600×50mm",
          price: "—",
          range: "Walkways",
        },
      ],
      notes: [
        "All kerbstones include delivery",
        "Custom sizes available",
        "Matching colours to blocks",
      ],
    },
    installation: {
      title: "Installation Rates (Turnkey Pricing)",
      subtitle: "Complete professional installation including materials and labour",
      columns: ["Type", "Range (KSh per sqm)", "Details", "Timeline"],
      rows: [
        {
          design: "60mm Cabro Install",
          colour: "2,000 – 2,400",
          price: "Includes all materials + labour",
          range: "3-5 days",
        },
        {
          design: "80mm Cabro Install",
          colour: "2,500 – 2,800",
          price: "Heavy-duty base included",
          range: "4-7 days",
        },
        {
          design: "3D/Decorative Install",
          colour: "2,800 – 3,200",
          price: "Pattern design included",
          range: "5-8 days",
        },
        {
          design: "Grass Paver Install",
          colour: "2,400 – 2,800",
          price: "Drainage system included",
          range: "4-6 days",
        },
      ],
      notes: [
        "All prices include: Ground excavation, Murram/stone dust base, Compaction, Screeding, Laying, Cutting, Sand filling",
        "Kerbstone installation: 350–550 KSh per linear metre",
        "Free site assessment included",
      ],
    },
  };

  const wholesaleData = {
    title: "Wholesale / Developer Pricing",
    subtitle: "Volume discounts for large projects and developers",
    brackets: [
      { volume: "3,000 – 5,000 pcs", discount: "–3%" },
      { volume: "5,000 – 10,000 pcs", discount: "–5%" },
      { volume: "10,000 – 20,000 pcs", discount: "–7%" },
      { volume: "20,000+ pcs", discount: "Negotiable" },
    ],
    packages: [
      {
        name: "Package A (Supply Only)",
        description: "Large-volume 60mm/80mm cabro at developer rate",
        features: ["Best price per piece", "Direct from factory", "Flexible delivery"],
      },
      {
        name: "Package B (Supply + Install)",
        description: "Turnkey pricing based on sqm",
        features: ["Complete installation", "Quality guarantee", "Project management"],
        popular: true,
      },
      {
        name: "Package C (Full Exterior Works)",
        description: "Cabro + kerbs + channels + drainage (premium package)",
        features: ["End-to-end solution", "Architect consultation", "5-year warranty"],
      },
    ],
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-[#0A1A2F] to-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent border border-[#D4A017]/30 px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-sm font-medium tracking-widest text-[#D4A017] uppercase">
              Transparent Pricing
            </span>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Competitive <span className="text-[#D4A017]">Pricing</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Clear pricing for all our premium paving solutions. Get exact quotes with our free site assessment.
          </p>

          {/* View Toggle */}
          <div className="inline-flex rounded-lg bg-gray-800/50 p-1 border border-gray-700 mb-8">
            <button
              onClick={() => setView("retail")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                view === "retail"
                  ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Retail Pricing
            </button>
            <button
              onClick={() => setView("wholesale")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                view === "wholesale"
                  ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Wholesale & Developer
            </button>
          </div>
        </div>

        {view === "retail" ? (
          <>
            {/* Product Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] shadow-lg shadow-[#D4A017]/20"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Product Table */}
            <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-800 overflow-hidden mb-12">
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {productData[activeTab].title}
                  </h3>
                  <p className="text-gray-400">{productData[activeTab].subtitle}</p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-800">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-900/80">
                        {productData[activeTab].columns.map((column, index) => (
                          <th
                            key={index}
                            className="py-4 px-6 text-left font-semibold text-gray-300 border-b border-gray-800"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {productData[activeTab].rows.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-800 hover:bg-gray-800/30 transition-colors ${
                            row.popular ? "bg-[#D4A017]/5" : ""
                          }`}
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <span className="font-medium text-white">{row.design}</span>
                              {row.popular && (
                                <span className="px-2 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-xs font-bold">
                                  Popular
                                </span>
                              )}
                              {row.heavy && (
                                <span className="px-2 py-1 rounded-full bg-red-900/30 text-red-400 text-xs font-bold">
                                  Heavy Duty
                                </span>
                              )}
                              {row.premium && (
                                <span className="px-2 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold">
                                  Premium
                                </span>
                              )}
                              {row.eco && (
                                <span className="px-2 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-bold">
                                  Eco-Friendly
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-300">{row.colour}</span>
                              {row.colour === "Grey" && (
                                <div className="w-4 h-4 rounded-full bg-gray-500 border border-gray-600" />
                              )}
                              {row.colour === "Colour" && (
                                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 border border-gray-600" />
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold text-white">{row.price}</span>
                              <span className="text-sm text-gray-400">Contact for exact price</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className={`px-4 py-2 rounded-lg ${
                              activeTab === "installation" 
                                ? "bg-blue-900/20 text-blue-400 border border-blue-800/30"
                                : "bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
                            }`}>
                              <span className="font-medium">{row.range}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Notes */}
                <div className="mt-8 p-6 rounded-xl bg-gray-900/50 border border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {productData[activeTab].notes.map((note, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Wholesale Pricing */}
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{wholesaleData.title}</h3>
                <p className="text-gray-400">{wholesaleData.subtitle}</p>
              </div>

              {/* Volume Discounts */}
              <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/50 rounded-2xl border border-gray-800 p-8 mb-12">
                <h4 className="text-2xl font-bold text-white mb-6">Volume Discount Brackets</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {wholesaleData.brackets.map((bracket, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl border border-gray-800 p-6 hover:border-[#D4A017]/50 transition-all"
                    >
                      <div className="absolute top-4 right-4 text-4xl font-bold text-gray-700/50">
                        0{index + 1}
                      </div>
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-white mb-2">{bracket.volume}</div>
                        <div className="text-3xl font-bold text-[#D4A017]">{bracket.discount}</div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {index === 3 ? "Custom pricing for large projects" : "Off retail price"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Packages */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-white mb-8 text-center">Developer Bundle Packages</h4>
                <div className="grid md:grid-cols-3 gap-8">
                  {wholesaleData.packages.map((pkg, index) => (
                    <div
                      key={index}
                      className={`group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl border ${
                        pkg.popular
                          ? "border-[#D4A017] shadow-2xl shadow-[#D4A017]/10"
                          : "border-gray-800"
                      } p-8 hover:border-[#D4A017]/50 transition-all`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-sm font-bold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <h5 className="text-xl font-bold text-white mb-3">{pkg.name}</h5>
                        <p className="text-gray-400">{pkg.description}</p>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center">
                              <svg className="w-3 h-3 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="#contact"
                        className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                          pkg.popular
                            ? "bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] hover:shadow-lg hover:shadow-[#D4A017]/30"
                            : "border border-gray-700 text-white hover:border-[#D4A017]/50 hover:bg-[#D4A017]/5"
                        }`}
                      >
                        Request Package Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-[#0A1A2F]/50 border border-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4A017' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }} />
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0A1A2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Get Exact Pricing</h3>
                <p className="text-gray-400">No hidden costs</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us for exact pricing based on your project requirements. We offer free site assessments and detailed quotations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#quote"
                className="px-8 py-4 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#D4A017]/30 transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Get Detailed Quote
              </Link>
              <Link
                href="tel:+254721150988"
                className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:border-[#D4A017]/50 hover:bg-[#D4A017]/5 transition-all flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}