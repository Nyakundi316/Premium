"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Truck,
  Hammer,
  Ruler,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  Layers,
  Factory,
  BadgeCheck,
  HelpCircle,
} from "lucide-react";

const BRAND = "#DA690D";
const PHONE = "+254711789438";

// ✅ Reliable online Kenya map PNG (Wikimedia) – shows consistently
const MAP_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Kenya_location_map.svg/1024px-Kenya_location_map.svg.png";

const services = [
  {
    title: "Supply Only",
    icon: <Truck size={20} style={{ color: BRAND }} />,
    desc: "Order products delivered to your site with accurate quantities and reliable coordination.",
    bullets: [
      "Cabro blocks (60mm & 80mm)",
      "Kerbs & channels",
      "Concrete culverts",
      "Fencing posts",
    ],
  },
  {
    title: "Supply + Installation",
    icon: <Hammer size={20} style={{ color: BRAND }} />,
    desc: "Professional installation for cabro works with correct preparation, laying, compaction, and finishing.",
    bullets: ["Site preparation", "Correct alignment", "Compaction & neat finishing"],
  },
  {
    title: "Site Support",
    icon: <Ruler size={20} style={{ color: BRAND }} />,
    desc: "We advise on product selection, thickness, quantities, and the best solution for your project.",
    bullets: ["Quantity estimation", "Thickness guidance", "Pattern recommendations"],
  },
];

const productGroups = [
  {
    title: "Cabro Blocks",
    subtitle: "60mm & 80mm options",
    items: [
      "60mm cabro (walkways & light traffic)",
      "80mm cabro (driveways & heavy traffic)",
      "Multiple patterns & layouts",
      "Clean edging & neat joints",
    ],
    href: "/products/cabro",
  },
  {
    title: "Concrete Culverts",
    subtitle: "Road & drainage",
    items: [
      "Drainage and water flow solutions",
      "Suitable for roads and access routes",
      "Available in multiple sizes",
      "Delivery coordination available",
    ],
    href: "/products/culverts",
  },
  {
    title: "Kerbs & Channels",
    subtitle: "Estate finish & drainage",
    items: [
      "Kerbstones for clean edges",
      "Channels for surface drainage",
      "Improves finishing around cabro work",
      "Suitable for estates & compounds",
    ],
    href: "/products/kerbs-drainage",
  },
  {
    title: "Fencing Posts",
    subtitle: "Plots & farms",
    items: [
      "Concrete fencing posts",
      "Suitable for farms and perimeter fencing",
      "Reliable strength for site conditions",
      "Delivery available",
    ],
    href: "/products/fencing-posts",
  },
];

const serviceAreas = {
  primary: ["Nairobi", "Kiambu", "Ruiru", "Thika", "Juja", "Githunguri", "Limuru"],
  nationwideNote:
    "We also serve other counties in Kenya depending on order size and delivery scheduling.",
};

const projects = [
  {
    title: "Residential driveway cabro installation",
    location: "Kiambu",
    image: "/images/projects/driveway-1.jpg",
  },
  {
    title: "Commercial compound cabro paving",
    location: "Nairobi",
    image: "/images/projects/compound-1.jpg",
  },
  {
    title: "Estate kerbs & drainage finishing",
    location: "Ruiru",
    image: "/images/projects/kerbs-1.jpg",
  },
  {
    title: "Culvert supply for drainage works",
    location: "Thika",
    image: "/images/projects/culvert-1.jpg",
  },
];

const faqs = [
  {
    q: "How fast is delivery?",
    a: "Delivery depends on your location and stock availability. After confirmation, we share a delivery schedule and keep you updated until dispatch.",
  },
  {
    q: "Do you do installation outside Nairobi?",
    a: "Yes. Installation is available depending on project size, location, and scheduling. Share your location and site details for confirmation.",
  },
  {
    q: "How do I know whether to choose 60mm or 80mm cabro?",
    a: "60mm is ideal for walkways and light use. 80mm is recommended for driveways, parking and heavier traffic. We advise based on your site usage.",
  },
  {
    q: "What is the payment process?",
    a: "We confirm your order details, share a quotation, and agree on payment terms before delivery or installation begins.",
  },
  {
    q: "How long does installation take?",
    a: "Duration depends on the site size, base condition and pattern. After site review, we give an expected timeline and completion plan.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Construction.jpeg"
            alt="Supply and installation services"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
          <div
            className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: `${BRAND}40` }}
          />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-sm border border-white/15 text-white"
              >
                <ShieldCheck size={16} style={{ color: BRAND }} />
                Services • Supply • Delivery • Installation
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                Cabro & Concrete{" "}
                <span style={{ color: BRAND }}>Supply Services</span>
                <br className="hidden sm:block" />
                Delivery & Professional Support
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-5 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto"
              >
                We supply cabro blocks, culverts, kerbs/channels, and fencing posts—plus professional cabro installation
                for clean finishing and durable results.
              </motion.p>

              {/* Keep hero CTA (not repeated) */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${PHONE}`}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-black font-bold rounded-md shadow-xl hover:scale-[1.01] transition-all min-w-[260px]"
                  style={{ background: BRAND }}
                >
                  <Phone size={20} />
                  Call Us
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </a>

                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 font-semibold rounded-md border border-white/25 hover:bg-white/15 transition-all min-w-[260px]"
                  style={{ color: BRAND }}
                >
                  View Products
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/80">
                <MapPin size={16} style={{ color: BRAND }} />
                Nairobi & nationwide delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider" style={{ color: BRAND }}>
              OUR SERVICES
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
              What we provide
            </h2>
            <p className="mt-3 text-slate-600">
              Straightforward options for clients who need supply, delivery coordination, or cabro installation support.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-11 rounded-2xl grid place-items-center"
                    style={{ backgroundColor: `${BRAND}1A` }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>

                <p className="mt-3 text-slate-600 leading-relaxed">{card.desc}</p>

                <ul className="mt-4 space-y-2">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} style={{ color: BRAND }} className="mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY CATALOG */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider" style={{ color: BRAND }}>
              SUPPLY CATALOG
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
              Products we supply
            </h2>
            <p className="mt-3 text-slate-600">
              Explore our main supply categories. Products can be delivered and scheduled to match your project.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {productGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-bold">{g.title}</div>
                    <div className="text-sm text-slate-600">{g.subtitle}</div>
                  </div>

                  <Link
                    href={g.href}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border border-black/10 hover:bg-slate-50 transition"
                    style={{ color: BRAND }}
                  >
                    View <ArrowRight size={16} />
                  </Link>
                </div>

                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} style={{ color: BRAND }} className="mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: <Factory size={18} style={{ color: BRAND }} />, title: "Factory-grade production", body: "Consistent strength and clean finishing." },
              { icon: <BadgeCheck size={18} style={{ color: BRAND }} />, title: "Reliable coordination", body: "Accurate quantities and clear scheduling." },
              { icon: <Layers size={18} style={{ color: BRAND }} />, title: "Professional outcomes", body: "Guidance and workmanship that lasts." },
            ].map((x) => (
              <div key={x.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl grid place-items-center" style={{ backgroundColor: `${BRAND}1A` }}>
                    {x.icon}
                  </div>
                  <div className="font-bold">{x.title}</div>
                </div>
                <p className="mt-2 text-sm text-slate-600">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-semibold tracking-wider" style={{ color: BRAND }}>
                SERVICE AREAS
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
                Areas we serve
              </h2>
              <p className="mt-3 text-slate-600">
                Primary coverage areas listed below. We also deliver nationwide depending on scheduling and order size.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {serviceAreas.primary.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                  >
                    {a}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-black/10 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} style={{ color: BRAND }} className="mt-1" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Nationwide delivery:</span>{" "}
                    {serviceAreas.nationwideNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white overflow-hidden shadow-sm">
              <div className="relative h-[340px] w-full bg-slate-100">
                <Image
                  src={MAP_URL}
                  alt="Service coverage map"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur px-4 py-3">
                    <div className="text-slate-900 font-bold">
                      Need delivery outside Nairobi?
                    </div>
                    <div className="text-slate-600 text-sm">
                      Share your county and location — we’ll confirm scheduling.
                    </div>
                  </div>
                </div>
              </div>
              {/* ✅ Removed: “map is loaded online…” sentence */}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider" style={{ color: BRAND }}>
              PORTFOLIO
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
              Recent work & project highlights
            </h2>
            <p className="mt-3 text-slate-600">
              Add your real photos here for maximum trust. This section makes your business look established and professional.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <div key={p.title} className="rounded-3xl overflow-hidden border border-black/10 bg-white shadow-sm">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white font-semibold text-sm leading-snug">{p.title}</div>
                    <div className="text-white/75 text-xs flex items-center gap-1 mt-1">
                      <MapPin size={14} style={{ color: BRAND }} />
                      {p.location}
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <Link
                    href="/products"
                    className="text-sm font-semibold inline-flex items-center gap-2 underline underline-offset-4"
                    style={{ color: BRAND }}
                  >
                    View products <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-black/10 bg-white hover:bg-white/80 transition"
              style={{ color: BRAND }}
            >
              Explore Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider" style={{ color: BRAND }}>
              FAQ
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
              Common questions
            </h2>
            <p className="mt-3 text-slate-600">
              Quick answers on delivery, payments, and installation scheduling.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl grid place-items-center" style={{ backgroundColor: `${BRAND}1A` }}>
                    <HelpCircle size={18} style={{ color: BRAND }} />
                  </div>
                  <div>
                    <h3 className="font-bold">{f.q}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Removed: extra CTA box below FAQ */}
        </div>
      </section>

      {/* ✅ Removed: FINAL CTA section */}
    </main>
  );
}
