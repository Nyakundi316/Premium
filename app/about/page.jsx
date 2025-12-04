// app/about/page.jsx
import Link from "next/link";
import {
  MapPin,
  Factory,
  Building2,
  Truck,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About Us | Premium Paving Blocks – Githunguri Road",
  description:
    "Premium Paving Blocks – modern manufacturer of high-quality cabro paving blocks, kerbstones, grass pavers, and drainage products in Nairobi & Kiambu.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        {/* Top badge + heading */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/15 to-transparent border border-[#D4A017]/40 px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A017]">
              About Premium Paving Blocks
            </span>
          </span>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Strong. Durable.{" "}
                <span className="text-[#D4A017]">Beautiful Pavements.</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                We manufacture high-quality concrete cabro blocks, kerbstones,
                grass pavers and drainage solutions, and support clients with
                end-to-end installation for homes, estates and commercial
                projects.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 px-3 py-2 text-xs md:text-sm shadow-sm">
              <MapPin className="h-4 w-4 text-[#D4A017]" />
              <div className="flex flex-col leading-tight">
                <span className="font-semibold">Githunguri Road, Nairobi</span>
                <span className="text-slate-500 dark:text-slate-400">
                  Serving Nairobi & Kiambu region
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 quick facts */}
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5 flex gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A017]/15">
              <Factory className="h-5 w-5 text-[#D4A017]" />
            </div>
            <div>
              <p className="text-sm font-semibold">Modern production line</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Machine-made vibro-compacted blocks with strict quality control.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5 flex gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A017]/15">
              <Building2 className="h-5 w-5 text-[#D4A017]" />
            </div>
            <div>
              <p className="text-sm font-semibold">For homes & big projects</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Ideal for driveways, compounds, parking yards and industrial
                sites.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5 flex gap-3">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A017]/15">
              <Truck className="h-5 w-5 text-[#D4A017]" />
            </div>
            <div>
              <p className="text-sm font-semibold">Factory-direct delivery</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Reliable transport from our yard to your site, on time.
              </p>
            </div>
          </div>
        </div>

        {/* What we do */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <ShieldCheck className="h-5 w-5 text-[#D4A017]" />
              High-performance paving products
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Every block is engineered for strength, consistency and a clean
              finish.
            </p>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
              <li>• Cabro paving blocks (60–80mm)</li>
              <li>• Kerbstones & edging</li>
              <li>• Grass pavers and garden blocks</li>
              <li>• Drainage channels & covers</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Users className="h-5 w-5 text-[#D4A017]" />
              Who we work with
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              We support both small and large projects with the same level of
              professionalism.
            </p>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1.5">
              <li>• Homeowners & gated communities</li>
              <li>• Contractors & developers</li>
              <li>• Schools, churches & institutions</li>
              <li>• Commercial and industrial facilities</li>
            </ul>
          </div>
        </div>

        {/* Service areas + process */}
        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] mb-12">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-6">
            <h2 className="text-base md:text-lg font-semibold mb-3">
              Where we deliver
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Our factory-direct supply and delivery network mainly covers:
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Nairobi",
                "Kiambu",
                "Ruiru",
                "Thika Road",
                "Kahawa",
                "Githurai",
                "Ridgeways",
                "Garden Estate",
                "Neighbouring areas",
              ].map((place) => (
                <span
                  key={place}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-6">
            <h2 className="text-base md:text-lg font-semibold mb-3">
              How we manufacture
            </h2>
            <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
              <li>• Machine vibro-compaction for high density</li>
              <li>• High-grade cement and clean river sand</li>
              <li>• Controlled water–cement ratios</li>
              <li>• Proper curing for long lifespan</li>
              <li>• Routine strength & finish inspections</li>
            </ul>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#D4A017] mb-2 uppercase tracking-wide">
              <Sparkles className="h-4 w-4" />
              Mission
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              To manufacture reliable, attractive paving products and give
              clients a smooth, professional experience from quotation to
              installation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#D4A017] mb-2 uppercase tracking-wide">
              <BadgeCheck className="h-4 w-4" />
              Vision
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              To be one of Kenya’s most trusted paving manufacturers, known for
              strong products, neat finishes, and dependable timelines.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#D4A017] mb-2 uppercase tracking-wide">
              <ShieldCheck className="h-4 w-4" />
              Core values
            </h3>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-800 dark:text-slate-200">
              {[
                "Quality",
                "Integrity",
                "Reliability",
                "Innovation",
                "Professionalism",
                "Customer care",
              ].map((value) => (
                <span
                  key={value}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Why choose us – highlighted strip */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 p-6 md:p-8 text-white mb-12">
          <h2 className="text-lg md:text-2xl font-semibold mb-4">
            Why clients choose{" "}
            <span className="text-[#D4A017]">Premium Paving Blocks</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <ul className="space-y-2 text-slate-200">
              <li>• Factory-direct pricing – no middlemen.</li>
              <li>• Consistent block quality and strength.</li>
              <li>• Experienced installation teams.</li>
              <li>• Clean site finishes and neat edges.</li>
            </ul>
            <ul className="space-y-2 text-slate-200">
              <li>• Custom colours and patterns available.</li>
              <li>• Capacity to handle large orders.</li>
              <li>• Non-slip, weather-resistant surfaces.</li>
              <li>• Long-term value and low maintenance.</li>
            </ul>
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap gap-3 items-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
          >
            View services & products
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-semibold hover:border-[#D4A017] hover:text-[#D4A017] transition-all"
          >
            Browse completed projects
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-[#D4A017] hover:border-[#D4A017]/60 hover:bg-[#D4A017]/5 transition-all"
          >
            Request a free quote
          </Link>
        </div>
      </section>
    </main>
  );
}
