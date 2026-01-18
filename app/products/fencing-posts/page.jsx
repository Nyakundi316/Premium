'use client'
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const BRAND = "#DA690D";

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
            <p
              className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-sm border border-white/20 text-white"
            >
              Products
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Fencing Posts
              <span className="block" style={{ color: BRAND }}>
                Strong. Durable. Site-ready.
              </span>
            </h1>

            <p className="mt-4 text-white/85 text-lg max-w-2xl">
              Reliable concrete fencing posts for farms, plots and perimeter
              fencing. Delivery can be coordinated to your location.
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

      {/* CONTENT */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">What we supply</h2>
            <p className="mt-3 text-slate-600">
              Concrete fencing posts designed for practical outdoor use and
              tough site conditions.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Suitable for farms, plots and perimeter fencing",
                "Durable concrete build",
                "Consistent finishing",
                "Delivery coordination available",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={18} style={{ color: BRAND }} className="mt-0.5" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-3xl border border-black/10 bg-slate-50 p-6">
              <h3 className="font-bold">Delivery</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Share your location and required quantity — we’ll confirm
                availability and delivery scheduling.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 overflow-hidden bg-white shadow-sm">
            <div className="relative h-[320px] w-full">
              <Image
                src="/images/landscape_pool_kerbstone.jpg"
                alt="Fencing posts example"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl bg-white/90 backdrop-blur px-4 py-3 border border-black/10">
                  <div className="font-semibold">Need help choosing?</div>
                  <div className="text-sm text-slate-600">
                    Call or use the WhatsApp button on the page for quick assistance.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-slate-600">
                Tip: Replace the image above with a real fencing-post photo for stronger trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
