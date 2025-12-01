// app/services/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Services | Premium Paving Blocks – Cabro, Kerbs & Installation",
  description:
    "Explore the services offered by Premium Paving Blocks including manufacturing, cabro installation, supply & delivery, site assessment and custom paving designs.",
};

const services = [
  {
    title: "Manufacturing of Paving Blocks",
    subtitle: "60mm, 80mm, 3D & Grass Pavers",
    points: [
      "60mm residential-grade cabro blocks for homes & light traffic",
      "80mm heavy-duty blocks for petrol stations, malls & industrial yards",
      "3D decorative and premium designs for high-end properties",
      "Grass pavers / eco blocks for green parking and landscaping",
    ],
    tag: "Core Service",
  },
  {
    title: "Professional Cabro Installation",
    subtitle: "End-to-end site preparation & laying",
    points: [
      "Site clearing, cutting & leveling",
      "Base preparation and compaction",
      "Cabro laying, cutting & joint filling",
      "Kerb installation and neat finishing",
    ],
    tag: "Installation",
  },
  {
    title: "Supply & Delivery",
    subtitle: "Factory-direct supply across Nairobi & Kiambu",
    points: [
      "Direct loading from Githunguri Road factory",
      "Delivery to homes, estates & commercial sites",
      "Small residential jobs to large commercial projects",
      "Flexible scheduling to match your project timeline",
    ],
    tag: "Logistics",
  },
  {
    title: "Site Assessment & Quotations",
    subtitle: "Professional guidance before you build",
    points: [
      "On-site measurement and ground assessment",
      "Square meter estimation and block quantity planning",
      "Advice on best designs for traffic type & usage",
      "Detailed, professional quotation for materials + labour",
    ],
    tag: "Consultation",
  },
  {
    title: "Custom Designs & Colours",
    subtitle: "Make your property stand out",
    points: [
      "3D and decorative patterns for premium homes & entrances",
      "Multi-colour combinations for strong visual appeal",
      "Brand-aligned designs for commercial spaces & showrooms",
      "Patterns for estate gates, courtyards & driveways",
    ],
    tag: "Design",
  },
  {
    title: "Contractor & Developer Supply",
    subtitle: "Reliable bulk supply for ongoing projects",
    points: [
      "Consistent production for apartment blocks & estates",
      "Dedicated support for contractors & developers",
      "Bulk pricing for long-term or large-volume orders",
      "Coordinated deliveries to match construction phases",
    ],
    tag: "B2B",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/15 to-transparent border border-[#D4A017]/40 px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
              Our Services
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Paving Solutions from{" "}
            <span className="text-[#D4A017]">Factory to Finished Compound.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            From manufacturing high-strength cabro blocks to full installation
            and delivery, Premium Paving Blocks provides complete solutions for
            residential homes, commercial properties, industrial yards and
            public institutions across Nairobi and Kiambu.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 shadow-sm hover:shadow-lg hover:border-[#D4A017]/60 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                  {service.tag}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {service.subtitle}
              </p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2 items-start">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Applications section */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-50 p-6 md:p-8 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Where Our Paving Solutions Are Used
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#D4A017] mb-2">
                Residential
              </h3>
              <ul className="space-y-1 text-slate-200">
                <li>Home driveways</li>
                <li>Compound areas</li>
                <li>Walkways & paths</li>
                <li>Patios & gardens</li>
                <li>Poolside paving</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#D4A017] mb-2">
                Commercial
              </h3>
              <ul className="space-y-1 text-slate-200">
                <li>Shopping malls</li>
                <li>Hotels & restaurants</li>
                <li>Showrooms</li>
                <li>Office blocks</li>
                <li>Apartment parking</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#D4A017] mb-2">
                Industrial
              </h3>
              <ul className="space-y-1 text-slate-200">
                <li>Loading bays</li>
                <li>Warehouse yards</li>
                <li>Factory compounds</li>
                <li>Fuel stations</li>
                <li>Truck access routes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#D4A017] mb-2">
                Public & Eco
              </h3>
              <ul className="space-y-1 text-slate-200">
                <li>Schools & churches</li>
                <li>Hospitals & clinics</li>
                <li>Parks & walkways</li>
                <li>Overflow parking</li>
                <li>Grass paver areas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Need help choosing the right block type for your project?
            </p>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              We offer free site assessment and professional recommendations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+2547XXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-semibold hover:border-[#D4A017] hover:text-[#D4A017] transition-all"
            >
              Call: +254 7XX XXX XXX
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
