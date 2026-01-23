"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const BRAND = "#DA690D";

const FENCING_PRODUCTS = [
  {
    id: "standard-8ft",
    name: "Standard Fencing Post – 8ft",
    size: '8ft • 4"x4"',
    bestFor: "Plots, residential fencing",
    image: "/images/products/fencing-posts/Standard Fencing Post – 8ft.png",
    details: [
      "Reinforced concrete",
      "Smooth finish",
      "Pre-drilled wire holes",
    ],
  },
  {
    id: "heavy-8ft",
    name: "Heavy Duty Fencing Post – 8ft",
    size: '8ft • 5"x5"',
    bestFor: "Perimeter walls, road frontage",
    image: "/images/products/fencing-posts/Heavy Duty Fencing Post – 8ft.png",
    details: [
      "Extra reinforcement",
      "Ideal for tight security fencing",
      "Consistent dimensions",
    ],
  },
  {
    id: "corner-8ft",
    name: "Corner / Strainer Post",
    size: '8ft • 6"x6"',
    bestFor: "Corners & gate points",
    image: "/images/products/fencing-posts/fence.png",
    details: [
      "Designed for tension points",
      "Strong base and top",
      "Perfect for barbed wire & chain link",
    ],
  },
];

export default function FencingPostsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Construction.jpeg"
            alt="Concrete fencing posts"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-sm border border-white/20 text-white">
              Products
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Fencing Posts
              <span className="block" style={{ color: BRAND }}>
                Strong. Durable. Site-ready.
              </span>
            </h1>

            <p className="mt-4 text-white/85 text-lg max-w-2xl">
              Ready-to-install concrete fencing posts for farms, plots and
              perimeter fencing. Manufactured for Kenyan site conditions and
              coordinated delivery on request.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-white/25 bg-white/10 text-white hover:bg-white/15 transition"
              >
                Back to Products <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+254711789438"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-black"
                style={{ backgroundColor: BRAND }}
              >
                Call to Order <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + INFO */}
      <section className="py-14 sm:py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              What we supply
            </h2>
            <p className="mt-3 text-slate-600">
              Concrete fencing posts manufactured for practical outdoor use,
              from small boundary plots to full perimeter walls.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Standard, heavy-duty and corner/strainer posts",
                "Suitable for farms, plots and commercial fencing",
                "Durable concrete build with consistent finish",
                "Pre-drilled holes for wire/chain link (where required)",
                "Delivery coordination based on your location and quantity",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={18}
                    style={{ color: BRAND }}
                    className="mt-0.5"
                  />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-3xl border border-black/10 bg-slate-50 p-6">
              <h3 className="font-bold">How to order</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Share your site location, type of fencing (barbed wire, chain
                link, electric), and approximate length in metres. We’ll advise
                on the mix of standard, heavy-duty and corner posts plus
                delivery options.
              </p>
            </div>
          </div>

          {/* Highlight image */}
          <div className="rounded-3xl border border-black/10 overflow-hidden bg-white shadow-sm">
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/fence.png"
                alt="Concrete fencing posts installed on site"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-white/92 backdrop-blur px-4 py-3 border border-black/10">
                  <div className="font-semibold">
                    Site-ready fencing solutions
                  </div>
                  <div className="text-sm text-slate-600">
                    Ask about transport options and recommended spacing for your
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
              <h2 className="text-2xl sm:text-3xl font-bold">
                Fencing post options
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Common sizes and types. If you need a specific size or detail,
                talk to us and we’ll confirm availability.
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
            {FENCING_PRODUCTS.map((product) => (
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
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    {product.bestFor}
                  </p>

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
                      Order this size
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
