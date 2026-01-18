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
    <main className="min-h-screen pt-28 bg-white text-slate-900">
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">

        {/* HEADER */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[#A46306]">
              About Premium Paving Blocks
            </span>
          </span>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Strong. Durable.{" "}
                <span className="text-[#D4A017]">Beautiful Pavements.</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600 leading-relaxed">
                We manufacture high-quality concrete cabro blocks, kerbstones,
                grass pavers and drainage solutions, supporting both homes and
                large commercial projects.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-[#FAFAF7] px-3 py-2 text-xs md:text-sm shadow-sm">
              <MapPin className="h-4 w-4 text-[#D4A017]" />
              <div>
                <span className="font-semibold">Githunguri Road, Nairobi</span>
                <p className="text-slate-500 text-xs">
                  Serving Nairobi & Kiambu region
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK FACTS */}
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          {[
            {
              icon: <Factory className="h-5 w-5 text-[#D4A017]" />,
              title: "Modern production line",
              desc: "Machine-made vibro-compacted blocks with strict quality control.",
            },
            {
              icon: <Building2 className="h-5 w-5 text-[#D4A017]" />,
              title: "For homes & big projects",
              desc: "Ideal for driveways, compounds, parking yards and industrial sites.",
            },
            {
              icon: <Truck className="h-5 w-5 text-[#D4A017]" />,
              title: "Factory-direct delivery",
              desc: "Reliable transport from our yard to your site, always on time.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex gap-3 shadow-sm"
            >
              <div className="mt-1 h-9 w-9 flex items-center justify-center rounded-full bg-[#FFF3C4]">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WHAT WE DO */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <ShieldCheck className="h-5 w-5 text-[#D4A017]" />
              High-performance paving products
            </h2>
            <p className="text-sm text-slate-600 mb-3">
              Every block is engineered for strength, consistency, and a neat finish.
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>• Cabro paving blocks (60–80mm)</li>
              <li>• Kerbstones & edging</li>
              <li>• Grass pavers & garden blocks</li>
              <li>• Drainage channels & covers</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Users className="h-5 w-5 text-[#D4A017]" />
              Who we work with
            </h2>
            <p className="text-sm text-slate-600 mb-3">
              We support both small and large projects with professional service.
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>• Homeowners & gated communities</li>
              <li>• Contractors & developers</li>
              <li>• Schools, churches & institutions</li>
              <li>• Commercial & industrial facilities</li>
            </ul>
          </div>
        </div>

        {/* DELIVERY & MANUFACTURING */}
        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] mb-12">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-lg font-semibold mb-3">Where we deliver</h2>
            <p className="text-sm text-slate-600 mb-3">
              Our direct supply network covers the following regions:
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
                  className="px-3 py-1 rounded-full bg-white border border-slate-200"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <h2 className="text-lg font-semibold mb-3">How we manufacture</h2>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>• Vibro-compaction for high density</li>
              <li>• High-grade cement & clean river sand</li>
              <li>• Controlled water–cement ratios</li>
              <li>• Proper curing for long lifespan</li>
              <li>• Routine strength inspections</li>
            </ul>
          </div>
        </div>

        {/* VALUES */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {[
            {
              title: "Mission",
              icon: <Sparkles className="h-4 w-4" />,
              text: "To manufacture reliable, attractive paving products with a seamless client experience.",
            },
            {
              title: "Vision",
              icon: <BadgeCheck className="h-4 w-4" />,
              text: "To be Kenya’s most trusted paving manufacturer known for strength and professionalism.",
            },
            {
              title: "Core Values",
              icon: <ShieldCheck className="h-4 w-4" />,
              chips: [
                "Quality",
                "Integrity",
                "Reliability",
                "Professionalism",
                "Innovation",
                "Customer Care",
              ],
            },
          ].map((box, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold text-[#D4A017] mb-2 uppercase tracking-wide">
                {box.icon}
                {box.title}
              </h3>

              {box.text && (
                <p className="text-sm text-slate-700">{box.text}</p>
              )}

              {box.chips && (
                <div className="flex flex-wrap gap-2 text-[11px] mt-2">
                  {box.chips.map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 items-center">
          <Link
            href="/services"
            className="rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#bb8d16]"
          >
            View services & products
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold hover:border-[#D4A017] hover:text-[#D4A017]"
          >
            Browse completed projects
          </Link>
          <Link
            href="/quote"
            className="rounded-full text-[#D4A017] px-6 py-3 text-sm font-semibold border border-transparent hover:border-[#D4A017]/60 hover:bg-[#FFF3C4]"
          >
            Request a free quote
          </Link>
        </div>
      </section>
    </main>
  );
}
