import Image from "next/image";
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
  ArrowRight,
} from "lucide-react";

const GOLD = "#FFC20E";

export const metadata = {
  title: "About Us | Premium Cabro – Cabro Blocks & Paving Kenya",
  description:
    "Premium Cabro – manufacturer of high-quality cabro paving blocks, kerbstones, grass pavers, and drainage products in Nairobi & Kiambu.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Construction.jpeg"
            alt="Premium Cabro factory and operations"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
            >
              <span className="h-2 w-2 rounded-full" style={{ background: GOLD }} />
              About Premium Cabro
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Strong. Durable.{" "}
              <span style={{ color: GOLD }}>Beautiful Pavements.</span>
            </h1>

            <p className="mt-4 text-lg text-white/75 max-w-2xl leading-relaxed">
              We manufacture high-quality concrete cabro blocks, kerbstones,
              grass pavers and drainage solutions, supporting both homes and
              large commercial projects across Kenya.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4" style={{ color: GOLD }} />
              Githunguri Road, Kiambu – Serving Nairobi & Kiambu region
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20 max-w-6xl">
        {/* QUICK FACTS */}
        <div className="grid gap-5 md:grid-cols-3 mb-14">
          {[
            {
              icon: <Factory className="h-5 w-5" style={{ color: GOLD }} />,
              title: "Modern production line",
              desc: "Machine-made vibro-compacted blocks with strict quality control.",
              image: "/images/products/cabro/grey.jpeg",
            },
            {
              icon: <Building2 className="h-5 w-5" style={{ color: GOLD }} />,
              title: "For homes & big projects",
              desc: "Ideal for driveways, compounds, parking yards and industrial sites.",
              image: "/images/Driveways.png",
            },
            {
              icon: <Truck className="h-5 w-5" style={{ color: GOLD }} />,
              title: "Factory-direct delivery",
              desc: "Reliable transport from our yard to your site, always on time.",
              image: "/images/Parking Lot.jpeg",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm"
            >
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="p-5 flex gap-3">
                <div className="mt-0.5 h-10 w-10 flex shrink-0 items-center justify-center rounded-xl" style={{ background: `${GOLD}1A` }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WHAT WE DO + IMAGE */}
        <div className="grid gap-8 md:grid-cols-2 mb-14">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <ShieldCheck className="h-5 w-5" style={{ color: GOLD }} />
              High-performance paving products
            </h2>
            <p className="text-sm text-slate-600 mb-3">
              Every block is engineered for strength, consistency, and a neat finish.
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
                Cabro paving blocks (60–80mm)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
                Kerbstones & edging
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
                Grass pavers & garden blocks
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
                Drainage channels & covers
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-full min-h-[280px]">
              <Image
                src="/images/home.jpg"
                alt="Premium cabro residential installation"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-xl bg-white/90 backdrop-blur px-4 py-3">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <Users className="h-4 w-4" style={{ color: GOLD }} />
                    Who we work with
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Homeowners, contractors, developers, schools, churches & commercial facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DELIVERY & MANUFACTURING */}
        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] mb-14">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
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
                  className="px-3 py-1.5 rounded-full bg-white border border-slate-200"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold mb-3">How we manufacture</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                "Vibro-compaction for high density",
                "High-grade cement & clean river sand",
                "Controlled water–cement ratios",
                "Proper curing for long lifespan",
                "Routine strength inspections",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* VALUES */}
        <div className="grid gap-6 md:grid-cols-3 mb-14">
          {[
            {
              title: "Mission",
              icon: <Sparkles className="h-4 w-4" />,
              text: "To manufacture reliable, attractive paving products with a seamless client experience.",
            },
            {
              title: "Vision",
              icon: <BadgeCheck className="h-4 w-4" />,
              text: "To be Kenya's most trusted paving manufacturer known for strength and professionalism.",
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
          ].map((box) => (
            <div
              key={box.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3
                className="flex items-center gap-2 text-sm font-semibold mb-2 uppercase tracking-wide"
                style={{ color: GOLD }}
              >
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
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0D1B30] shadow-md hover:brightness-95 transition"
            style={{ background: GOLD }}
          >
            View services & products
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold hover:border-[#FFC20E] hover:text-[#FFC20E] transition"
          >
            Browse completed projects
          </Link>
          <Link
            href="/quote"
            className="rounded-full px-6 py-3 text-sm font-semibold border border-transparent hover:bg-amber-50 transition"
            style={{ color: GOLD }}
          >
            Request a free quote
          </Link>
        </div>
      </section>
    </main>
  );
}
