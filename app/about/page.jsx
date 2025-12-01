// app/about/page.jsx
import Link from "next/link";

export const metadata = {
  title: "About Us | Premium Paving Blocks – Githunguri Road",
  description:
    "Learn more about Premium Paving Blocks, a modern manufacturer of high-quality cabro paving blocks, kerbstones, grass pavers and drainage products in Nairobi.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-5xl">
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/15 to-transparent border border-[#D4A017]/40 px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
              About Premium Paving Blocks
            </span>
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Strong. Durable.{" "}
          <span className="text-[#D4A017]">Beautiful Paving Solutions.</span>
        </h1>

        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
          Premium Paving Blocks is a modern manufacturer of high-quality cabro
          paving blocks, kerbstones, grass pavers, drainage channels, and
          concrete landscaping products. Strategically located on{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            Githunguri Road, Nairobi
          </span>
          , we supply homes, estates, contractors, developers, schools, malls,
          churches, and industrial sites across Nairobi and Kiambu.
        </p>

        {/* Regions & Manufacturing */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Areas We Serve</h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              Our factory-direct supply and delivery network covers:
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
                "Surrounding regions",
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

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">How We Manufacture</h2>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• Advanced machine vibro–compaction</li>
              <li>• High-grade cement and clean river sand</li>
              <li>• Controlled water–cement ratios</li>
              <li>• Proper curing for long lifespan</li>
              <li>• Strict quality checks on strength & finish</li>
            </ul>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-[#D4A017] mb-2 uppercase tracking-wide">
              Our Mission
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              To manufacture superior paving products that enhance residential,
              commercial, and industrial spaces through quality, innovation, and
              reliable service.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-[#D4A017] mb-2 uppercase tracking-wide">
              Our Vision
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              To become Kenya’s leading paving manufacturer, setting new
              standards in durability, design, and customer satisfaction.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-[#D4A017] mb-2 uppercase tracking-wide">
              Our Core Values
            </h3>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>• Quality</li>
              <li>• Integrity</li>
              <li>• Innovation</li>
              <li>• Reliability</li>
              <li>• Professionalism</li>
              <li>• Customer Care</li>
            </ul>
          </div>
        </div>

        {/* Why choose us */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 p-6 md:p-8 text-white mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Why Choose{" "}
            <span className="text-[#D4A017]">Premium Paving Blocks?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2 text-slate-200">
              <li>• Factory-direct prices — no middlemen</li>
              <li>• Strong, machine-made cabro blocks</li>
              <li>• Professional installation teams</li>
              <li>• Fast delivery from Githunguri Road</li>
            </ul>
            <ul className="space-y-2 text-slate-200">
              <li>• Custom colours & 3D decorative patterns</li>
              <li>• High production capacity for large projects</li>
              <li>• Weather-resistant & non-slip surfaces</li>
              <li>• Long-term durability & guaranteed value</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 items-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
          >
            View Our Services
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-semibold hover:border-[#D4A017] hover:text-[#D4A017] transition-all"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
