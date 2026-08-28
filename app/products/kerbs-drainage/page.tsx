import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";

const BRAND = "#FFC20E";

const KERB_PRODUCTS = [
  {
    id: "standard-kerb",
    name: "Standard Kerbstone",
    size: "Road & driveway profile",
    bestFor: "Road edges, driveways, parking bays",
    image: "/images/products/kerbs-drainage/kerbstones-bulk-stacked.jpeg",
    details: [
      "Precast with a clean bevelled face",
      "Uniform lengths for fast alignment",
      "Holds paving edges firmly in place",
    ],
  },
  {
    id: "invert-block",
    name: "Invert Block / Drainage Channel",
    size: "Open channel profile",
    bestFor: "Stormwater lines, road shoulders",
    image: "/images/products/kerbs-drainage/invert-block-drainage-channels.jpeg",
    details: [
      "Directs runoff away from paved areas",
      "Interlocks into continuous drainage runs",
      "Heavy-duty cast for vehicle crossings",
    ],
  },
  {
    id: "garden-kerb",
    name: "Garden & Estate Kerbs",
    size: "Light edging profile",
    bestFor: "Walkways, flower beds, compounds",
    image: "/images/products/kerbs-drainage/kerbs 1 (2).jpeg",
    details: [
      "Neat edging for lawns and planters",
      "Pairs with cabro walkways",
      "Simple to lift and install",
    ],
  },
];

const YARD_GALLERY = [
  {
    src: "/images/products/kerbs-drainage/kerbstones-freshly-cast.jpeg",
    caption: "Kerbstones fresh off the moulds at our production yard",
  },
  {
    src: "/images/products/kerbs-drainage/kerbstones-cast-rows.jpeg",
    caption: "Cast rows curing before dispatch",
  },
  {
    src: "/images/products/kerbs-drainage/kerbstones-curing-pallets.jpeg",
    caption: "Palletised kerbs ready for quality checks",
  },
  {
    src: "/images/products/kerbs-drainage/kerbstones-stacked-production.jpeg",
    caption: "Stacked stock for bulk road and estate orders",
  },
  {
    src: "/images/products/kerbs-drainage/invert-block-channels-stacked.jpeg",
    caption: "Invert blocks stacked and ready for drainage works",
  },
  {
    src: "/images/products/kerbs-drainage/kerbs 1 (4).jpeg",
    caption: "Kerb edging installed along an estate road",
  },
  ...Array.from({ length: 9 }, (_, index) => ({
    src: `/images/products/kerbs-drainage/concrete-cover-slabs-stock-${String(index + 1).padStart(2, "0")}.jpeg`,
    caption: `Precast concrete cover slabs in production stock${index === 0 ? " — durable protection for drainage and service channels" : " for dependable drainage and utility works"}`,
  })),
  ...Array.from({ length: 3 }, (_, index) => ({
    src: `/images/products/kerbs-drainage/precast-kerbstones-stock-${String(index + 1).padStart(2, "0")}.jpeg`,
    caption: `Straight precast kerbstones ready for neat, durable road and driveway edging${index === 0 ? "" : " in bulk quantities"}`,
  })),
  ...Array.from({ length: 5 }, (_, index) => ({
    src: `/images/products/kerbs-drainage/invert-drainage-channels-stock-${String(index + 1).padStart(2, "0")}.jpeg`,
    caption: `Precast invert drainage channels stocked for efficient stormwater control${index === 0 ? "" : " and rapid site installation"}`,
  })),
];

export default function KerbsDrainagePage() {
  return (
    <main className="bg-white dark:bg-[#0A0C10] text-slate-900 dark:text-slate-200">
      {/* HERO — high-impact focal photo under a left-heavy scrim, editorial type, floating glass stat bar */}
      <section className="relative overflow-hidden bg-[#0B1220]">
        <div className="absolute inset-0">
          <Image
            src="/images/products/kerbs-drainage/kerbstones-cast-rows.jpeg"
            alt="Rows of freshly cast kerbstones curing at the production yard"
            fill
            priority
            className="object-cover object-[75%_center]"
            sizes="100vw"
          />
          {/* directional scrim: ink on the left, photo breathing on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/80 to-[#0B1220]/15" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1220] to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl pt-20 lg:pt-28">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />
              Kerbs & Drainage
            </p>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[0.98] tracking-tight">
              Clean edges.
              <span className="block" style={{ color: BRAND }}>
                Controlled water.
              </span>
            </h1>

            <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
              Precast kerbstones, invert blocks and drainage channels for
              estate roads, driveways and stormwater lines — cast at our own
              yard and delivered to site.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+254711789438"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-amber-500/25 hover:brightness-95 transition"
                style={{ backgroundColor: BRAND }}
              >
                Call to Order <ArrowRight size={16} />
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 transition"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* floating glass stat bar */}
          <div className="relative mt-14 lg:mt-20 pb-10">
            <dl className="inline-grid grid-cols-3 divide-x divide-white/10 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/15 shadow-2xl shadow-black/40">
              {[
                ["Precast", "profiles"],
                ["Bulk", "ready stock"],
                ["Kenya-wide", "delivery"],
              ].map(([big, small]) => (
                <div key={big} className="px-5 sm:px-8 py-4 sm:py-5">
                  <dt className="sr-only">{`${big} ${small}`}</dt>
                  <dd>
                    <div className="text-sm sm:text-lg font-extrabold text-white whitespace-nowrap">
                      {big}
                    </div>
                    <div className="mt-0.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">
                      {small}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-14 sm:py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">What we supply</h2>
            <p className="mt-3 text-slate-600">
              Precast kerbing and drainage units that finish paved areas
              properly — keeping edges straight, protecting cabro from
              spreading, and moving stormwater where it should go.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Standard road kerbs and lighter garden kerbs",
                "Invert blocks and open drainage channels",
                "Consistent precast dimensions for fast laying",
                "Helps prevent erosion along driveways and roads",
                "Delivery coordination based on location and quantity",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={18} style={{ color: BRAND }} className="mt-0.5" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-3xl border border-black/10 bg-slate-50 p-6">
              <h3 className="font-bold">How to order</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Share the length of edging or drainage run in metres and where
                the site is. We&apos;ll advise on kerb profile, invert block
                sizing and delivery options.
              </p>
            </div>
          </div>

          {/* Highlight image */}
          <div className="rounded-3xl border border-black/10 overflow-hidden bg-white shadow-sm">
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/products/kerbs-drainage/kerbs 1 (1).jpeg"
                alt="Kerbstones installed along a paved estate road"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-white/92 backdrop-blur px-4 py-3 border border-black/10">
                  <div className="font-semibold">Edging that lasts</div>
                  <div className="text-sm text-slate-600">
                    Ask about matching kerbs for your cabro or estate road
                    project.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Kerb & drainage options</h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Common profiles we cast. Need a specific section or size? Talk
                to us and we&apos;ll confirm availability.
              </p>
            </div>
            <a
              href="https://wa.me/254711789438"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white"
              style={{ backgroundColor: BRAND }}
            >
              WhatsApp for quick quote
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {KERB_PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="group rounded-3xl border border-slate-100 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="33vw"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                    {product.size}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">{product.bestFor}</p>

                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    {product.details.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span
                          className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: BRAND }}
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                      Call for pricing
                    </span>
                    <a
                      href="tel:+254711789438"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-900 hover:underline"
                    >
                      Order this profile
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION YARD GALLERY */}
      <section id="product-gallery" className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">From casting to site</h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
            Recent photos of kerbs and drainage units at our production yard
            and on finished projects.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {YARD_GALLERY.map((photo) => (
              <figure
                key={photo.src}
                className="rounded-3xl border border-slate-100 overflow-hidden bg-white shadow-sm"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs sm:text-sm text-slate-600">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-black"
              style={{ backgroundColor: BRAND }}
            >
              Request a Quote
            </Link>
            <a
              href="tel:+254711789438"
              className="inline-flex items-center gap-2 justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              <PhoneCall className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
