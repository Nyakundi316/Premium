"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Ruler, ArrowUpRight, Home, Building2, Factory, Truck, CheckCircle, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Luxury Estate Driveway",
    type: "Residential",
    location: "Kiambu, Kenya",
    scope: "600 m² • 80mm heavy-duty",
    image: "/images/trihex-broad.avif",
    icon: <Home className="w-4 h-4" />,
    status: "Completed",
    duration: "2 weeks",
    features: ["Weather-resistant", "Premium finish", "Low maintenance"]
  },
  {
    id: 2,
    name: "Retail & Mall Parking",
    type: "Commercial",
    location: "Nairobi, Kenya",
    scope: "2,500 m² • Industrial",
    image: "/images/retail.jpg",
    icon: <Building2 className="w-4 h-4" />,
    status: "Completed",
    duration: "4 weeks",
    features: ["High traffic", "Durable", "Easy cleaning"]
  },
  {
    id: 3,
    name: "Industrial Yard",
    type: "Industrial",
    location: "Ruiru, Kenya",
    scope: "1,800 m² • Heavy-duty",
    image: "/images/Interlockers-1.jpg",
    icon: <Factory className="w-4 h-4" />,
    status: "In Progress",
    duration: "3 weeks",
    features: ["Heavy load", "Long-lasting", "Custom drainage"]
  },
  {
    id: 4,
    name: "Road Drainage System",
    type: "Infrastructure",
    location: "Thika Road, Kenya",
    scope: "Large-scale culverts",
    image: "/images/culvert-thumb.jpg",
    icon: <Truck className="w-4 h-4" />,
    status: "Completed",
    duration: "5 weeks",
    features: ["Steel-reinforced", "Proper grading", "Future-proof"]
  },
];

export default function CompactProjectsSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFBF00]/10 rounded-full mb-4">
            <div className="h-1.5 w-1.5 rounded-full bg-[#FFBF00]" />
            <span className="text-xs font-medium text-[#996C00]">Our Projects</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Quality paving solutions delivered across Kenya
          </h2>

          <p className="text-gray-600 text-sm">
            Residential, commercial, and industrial clients served with precision
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 left-2">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md">
                      {project.icon}
                      <span className="text-xs font-medium text-gray-800">{project.type}</span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md">
                      <Calendar className="w-3 h-3 text-white" />
                      <span className="text-xs text-white font-medium">{project.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900 flex-1 line-clamp-1">
                      {project.name}
                    </h3>
                    <div className={`ml-2 px-2 py-0.5 rounded text-xs font-medium ${
                      project.status === "Completed" 
                        ? "bg-emerald-100 text-emerald-700" 
                        : "bg-[#FFBF00]/20 text-[#996C00]"
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  
                  {/* Location & Scope */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="text-xs">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Ruler className="w-3 h-3 flex-shrink-0" />
                      <span className="text-xs font-medium">{project.scope}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-md flex items-center gap-1"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFBF00]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Link */}
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <Link
                      href="/projects"
                      className="group/link flex items-center justify-between text-xs font-medium text-gray-700 hover:text-[#FFBF00] transition-colors"
                    >
                      <span>View Full Project</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFBF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FFBF00]/5 via-[#FFBF00]/10 to-[#FFBF00]/5 rounded-lg p-6 border border-[#FFBF00]/20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Ready to Start Your Project?</h3>
              <p className="text-sm text-gray-600">Get expert consultation and a detailed quote</p>
            </div>
            
            <div className="flex gap-3">
              <Link
                href="/projects"
                className="px-4 py-2 bg-white border border-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:border-[#FFBF00] hover:bg-[#FFBF00]/5 transition-colors"
              >
                View All Projects
              </Link>
              
              <Link
                href="/quote"
                className="px-4 py-2 bg-[#FFBF00] text-gray-900 text-sm font-medium rounded-lg hover:bg-[#E6AC00] transition-colors flex items-center gap-1.5"
              >
                <CheckCircle className="w-4 h-4" />
                Request Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}