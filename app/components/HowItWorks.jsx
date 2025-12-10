"use client";

import { CheckCircle, PhoneCall, ClipboardList, Hammer, Truck } from "lucide-react";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "1. Site Visit & Assessment",
      desc: "Our team visits your site to measure the area, understand soil conditions, and discuss design preferences.",
      icon: ClipboardList,
    },
    {
      id: 2,
      title: "2. Product Selection",
      desc: "Choose from our wide range of cabro, cobblestone, hexagon, trihex and industrial paving blocks.",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "3. Quotation & Approval",
      desc: "We prepare a detailed quote covering materials, labour, delivery, and installation timeline.",
      icon: PhoneCall,
    },
    {
      id: 4,
      title: "4. Manufacturing & Delivery",
      desc: "Your paving blocks are machine-pressed, cured, and delivered directly to the site.",
      icon: Truck,
    },
    {
      id: 5,
      title: "5. Professional Installation",
      desc: "Our trained installers prepare the base, compact the surface, lay the cabro, and apply edge restraints.",
      icon: Hammer,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F5F7FA] text-[#041544]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-4 py-1 mb-4">
            <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#A46306]">
              Our Process
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            How <span className="text-[#D4A017]">It Works</span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            A simple, clear 5-step process from the first call to the final installation.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map(({ id, title, desc, icon: Icon }) => (
            <div
              key={id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#D4A017]/50 transition-all"
            >
              <div className="h-14 w-14 rounded-xl flex items-center justify-center bg-[#D4A017]/15 mb-4 group-hover:scale-110 transition-transform">
                <Icon className="h-7 w-7 text-[#D4A017]" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Ready to get started with your paving project?
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="px-6 py-3 rounded-full bg-[#D4A017] text-[#0A1A2F] font-semibold text-sm md:text-base hover:bg-[#b98b0f] transition"
            >
              Request a Free Quote
            </Link>

            <a
              href="tel:+254116724251"
              className="px-6 py-3 rounded-full border border-[#D4A017] text-[#0A1A2F] font-semibold text-sm md:text-base hover:bg-[#FFF7E0] transition"
            >
              Call Us Today
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
