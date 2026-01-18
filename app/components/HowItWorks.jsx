"use client";

import {
  CheckCircle,
  PhoneCall,
  ClipboardList,
  Hammer,
  Truck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Site Visit & Assessment",
      desc: "Our team visits your site to measure the area, understand soil conditions, and discuss design preferences.",
      icon: ClipboardList,
    },
    {
      id: 2,
      title: "Product Selection",
      desc: "Choose from our wide range of cabro, cobblestone, hexagon, trihex and industrial paving blocks.",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Quotation & Approval",
      desc: "We prepare a detailed quote covering materials, labour, delivery, and installation timeline.",
      icon: PhoneCall,
    },
    {
      id: 4,
      title: "Manufacturing & Delivery",
      desc: "Your paving blocks are machine-pressed, cured, and delivered directly to the site.",
      icon: Truck,
    },
    {
      id: 5,
      title: "Professional Installation",
      desc: "Our trained installers prepare the base, compact the surface, lay the cabro, and apply edge restraints.",
      icon: Hammer,
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F5F7FA] text-[#041544]">
      {/* ✅ Match your other sections for alignment */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-4 py-1 mb-4">
            <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A46306]">
              Our Process
            </span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
            How <span className="text-[#D4A017]">It Works</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            A simple, clear 5-step process from the first call to the final
            installation.
          </p>
        </div>

        {/* ✅ Mobile-first: horizontal swipe cards on small screens */}
        <div className="sm:hidden -mx-4 px-4">
          <div
            className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {steps.map(({ id, title, desc, icon: Icon }) => (
              <div
                key={id}
                className="snap-start min-w-[82%] bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-[#D4A017]/15">
                    <Icon className="h-6 w-6 text-[#D4A017]" />
                  </div>

                  <span className="text-xs font-semibold text-gray-500">
                    Step {id}/5
                  </span>
                </div>

                <h3 className="text-base font-semibold mb-2 break-words">
                  {id}. {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed break-words">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-gray-500 text-center">
            Swipe to view the steps →
          </p>
        </div>

        {/* ✅ Tablet/Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {steps.map(({ id, title, desc, icon: Icon }) => (
            <div
              key={id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#D4A017]/50 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="h-14 w-14 rounded-xl flex items-center justify-center bg-[#D4A017]/15 mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="h-7 w-7 text-[#D4A017]" />
                </div>

                <span className="text-xs font-semibold text-gray-500 mt-2">
                  Step {id}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-2 break-words">
                {id}. {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed break-words">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Optional small helper line (no CTA button) */}
        <div className="mt-10 text-center">
          <Link
            href="/products/cabro"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A46306] hover:text-[#D4A017] transition-colors"
          >
            View cabro options <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
