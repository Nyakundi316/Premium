// app/services/page.jsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services | Premium Paving Blocks – Cabro, Kerbs & Installation",
  description:
    "Professional paving services: cabro block supply, installation, driveway construction, parking lots, walkways, kerbs and industrial yards across Nairobi & Kiambu.",
};

const heroHighlights = [
  "Driveways, parking, walkways & industrial yards",
  "Heavy-duty paving blocks for trucks & high traffic",
  "Professional team for site prep & installation",
];

const services = [
  {
    title: "Paving Block Supply",
    subtitle: "Factory-direct cabro blocks for every project",
    image: "/images/classic interlock.jpeg",
    imageAlt: "Stacks of interlocking paving blocks ready for delivery.",
    points: [
      "60mm blocks for residential and estate driveways",
      "80mm heavy-duty blocks for petrol stations & loading bays",
      "Wide range of colours: charcoal, red, beige, mixed",
      "Reliable bulk supply for contractors & developers",
    ],
    tag: "Supply",
  },
  {
    title: "Driveway & Compound Paving",
    subtitle: "Beautiful, durable finishes for homes & estates",
    image: "/images/Masterpieces.jpeg",
    imageAlt: "Finished driveway with premium paving blocks at a home.",
    points: [
      "Full driveway design & layout planning",
      "Complete ground preparation, compaction & screeding",
      "Neat cutting, edge finishing & drainage consideration",
      "Perfect for homes, gated communities & townhouses",
    ],
    tag: "Residential",
  },
  {
    title: "Parking & Commercial Areas",
    subtitle: "High-traffic surfaces built to handle daily use",
    image: "/images/shop paves.jpeg",
    imageAlt: "Shopping mall parking area paved with interlocking blocks.",
    points: [
      "Apartment & mall parking areas with clear layouts",
      "High-strength paving for office blocks & showrooms",
      "Organised parking markings & walkways",
      "Designed for both cars and light trucks",
    ],
    tag: "Commercial",
  },
  {
    title: "Walkways & Footpaths",
    subtitle: "Safe, clean and attractive pedestrian paths",
    image: "/images/Hexagon Honeycomb.jpeg",
    imageAlt: "Hexagon paving pattern on a pedestrian walkway.",
    points: [
      "Estate walkways, garden paths & compound paths",
      "Non-slip finishes for safe walking in all weather",
      "Custom patterns like hexagon, trihex and brick",
      "Perfect around schools, churches & institutions",
    ],
    tag: "Pedestrian",
  },
  {
    title: "Industrial & Heavy-Duty Yards",
    subtitle: "Engineered for trucks, forklifts & fuel stations",
    image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg",
    imageAlt: "Heavy-duty yard paved with interlocking blocks for trucks.",
    points: [
      "Thicker blocks suitable for trucks & heavy loads",
      "Ideal for factories, godowns & logistics yards",
      "Proper sub-base preparation to prevent sinking",
      "Recommended for fuel stations & loading bays",
    ],
    tag: "Industrial",
  },
  {
    title: "Kerbstones & Finishing",
    subtitle: "Strong and neat edge finishes for any project",
    image: "/images/Red.jpeg",
    imageAlt: "Red paving blocks used with kerbstones for edge finishing.",
    points: [
      "Kerbstone supply & installation for parking & driveways",
      "Neat boundary lines for lawns, gardens & pathways",
      "Prevents edge damage and block movement",
      "Available in different profiles and colours",
    ],
    tag: "Finishing",
  },
];

const applications = [
  {
    title: "Residential",
    items: [
      "Home driveways & compounds",
      "Walkways and garden paths",
      "Court yards & entrances",
      "Outdoor sitting areas & patios",
    ],
  },
  {
    title: "Commercial",
    items: [
      "Shopping malls & retail centres",
      "Hotels, restaurants & showrooms",
      "Office blocks & mixed-use buildings",
      "Apartment & estate parking",
    ],
  },
  {
    title: "Industrial",
    items: [
      "Warehouse & factory yards",
      "Logistics yards & depots",
      "Fuel stations & truck stops",
      "Loading bays & service areas",
    ],
  },
  {
    title: "Institutions",
    items: [
      "Schools & universities",
      "Churches & mosques",
      "Hospitals & clinics",
      "Public walkways & parks",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* HERO SECTION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center md:py-20">
          
          {/* Left - text */}
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#A46306] uppercase">
              Paving Services
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              Complete Paving Solutions from{" "}
              <span className="text-[#D4A017]">Design to Installation.</span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 max-w-xl">
              We supply and install high-quality cabro paving blocks for
              driveways, parking areas, walkways and industrial yards — built to
              handle real-world traffic while keeping your space looking clean
              and premium.
            </p>

            <div className="grid gap-3 text-sm md:text-base">
              {heroHighlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF3C4] text-xs text-[#A46306]">
                    ✓
                  </span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] px-6 py-3 text-sm font-semibold text-[#0A1A2F] shadow-sm hover:shadow-md hover:shadow-[#FACC6B]/50 transition-all"
              >
                Request a Free Quote
              </Link>
              <a
                href="tel:+254711789438"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:border-[#D4A017] hover:text-[#A46306] transition-all"
              >
                Call:+254 711 789438
              </a>
            </div>
          </div>

          {/* Right - hero image */}
          <div className="flex-1">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md md:h-80">
              <Image
                src="/images/Masterpieces.jpeg"
                alt="Premium driveway paved with interlocking blocks."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#FACC6B]">
                    Featured Project
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Residential Driveway Installation – Nairobi
                  </p>
                  <p className="text-[11px] text-slate-100">
                    Classic interlocking pattern with charcoal and beige finish.
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end text-[10px] text-slate-100">
                  <span>60mm Residential Grade</span>
                  <span>Completed in 3 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-slate-50 py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Our Core <span className="text-[#D4A017]">Paving Services</span>
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-700 max-w-2xl">
                Whether you're building a new home, upgrading a compound or
                paving a commercial space, we offer end-to-end solutions from
                supply to installation.
              </p>
            </div>
            <p className="text-xs md:text-sm text-slate-500">
              Serving Nairobi, Kiambu and surrounding areas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#FACC6B] transition-all"
              >
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 360px, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-[#A46306] border border-[#FACC6B]/60">
                    {service.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-slate-600">
                    {service.subtitle}
                  </p>

                  <ul className="mt-3 flex-1 space-y-2 text-xs md:text-sm text-slate-700">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center justify-between text-xs md:text-sm">
                    <Link
                      href="/quote"
                      className="font-semibold text-[#A46306] hover:text-[#D4A017] underline underline-offset-4"
                    >
                      Get a quote →
                    </Link>
                    <span className="text-[11px] text-slate-500">
                      Site visits available
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Where Our <span className="text-[#D4A017]">Paving</span> Works Best
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-700">
              From private homes to large commercial and industrial facilities,
              our cabro solutions are designed to handle different types of use.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4 text-sm">
            {applications.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5"
              >
                <h3 className="mb-2 text-sm md:text-base font-semibold text-[#A46306]">
                  {group.title}
                </h3>
                <ul className="space-y-1 text-xs md:text-sm text-slate-700">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-200 bg-white py-10 md:py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Ready to{" "}
              <span className="text-[#D4A017]">Transform Your Space?</span>
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-xl">
              Share your site location, approximate area and preferred pattern —
              we'll guide you on the best block type and send a detailed
              quotation. Site visits are available in Nairobi, Kiambu and nearby
              areas.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] px-6 py-3 text-sm font-semibold text-[#0A1A2F] shadow-sm hover:shadow-md hover:shadow-[#FACC6B]/50 transition-all"
              >
                Request a Free Quote
              </Link>
              <a
                href="https://wa.me/254711789438"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:border-[#25D366] hover:text-[#25D366] transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md md:h-64">
              <Image
                src="/images/swimming.jpeg"
                alt="Finished paving around a pool representing a complete project."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#FACC6B]">
                    Recent Project
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Hotel Pool Deck – Kiambu
                  </p>
                </div>
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#A46306]">
                  Installed by Premium Paving Blocks
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
