import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Layers,
  Palette,
  Ruler,
  Truck,
  Shovel,
  Waves,
  Hammer,
  Boxes,
  ChevronDown,
} from "lucide-react";
import JsonLd from "../components/JsonLd";
import { SITE, whatsappLink } from "../lib/site";
import { breadcrumbList, faqPage } from "../lib/schema";

const pageTitle = "Cabro Blocks Prices in Kenya | What Determines the Cost";
const pageDescription =
  "Understand what cabro blocks cost in Kenya: how thickness, colour, pattern, project size, site preparation and transport affect the price, and how to get an accurate quotation for supply or full installation.";

export const metadata: Metadata = {
  title: { absolute: `${pageTitle} | ${SITE.name}` },
  description: pageDescription,
  alternates: { canonical: "/cabro-blocks-prices-kenya" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/cabro-blocks-prices-kenya",
    images: [{ url: "/images/products/cabro/red-trihex-driveway-charcoal-bands.jpeg" }],
  },
};

const costFactors = [
  {
    icon: Ruler,
    factor: "Block thickness",
    explain:
      "80mm heavy-duty blocks use more concrete than 60mm residential blocks, so they cost more per piece — and per square metre installed.",
  },
  {
    icon: Palette,
    factor: "Colour",
    explain:
      "Plain grey is the most economical. Red, charcoal, yellow and mixed-colour blocks carry a premium because of the pigments used in production.",
  },
  {
    icon: Layers,
    factor: "Pattern & layout",
    explain:
      "Standard interlocking layouts are quickest to lay. Decorative designs — medallions, borders, multi-colour patterns, 3D effects — need more cutting and skilled labour.",
  },
  {
    icon: Boxes,
    factor: "Project size",
    explain:
      "Larger orders bring the per-piece and per-square-metre rate down. Small areas carry proportionally more setup and transport cost.",
  },
  {
    icon: Shovel,
    factor: "Site preparation",
    explain:
      "Soft ground, demolition of old surfaces, deep excavation or levelling of slopes all add to the installed cost before a single block is laid.",
  },
  {
    icon: Truck,
    factor: "Transport distance",
    explain:
      "Cabro is heavy. Delivery from our Kiambu yard is priced by distance and tonnage, so a site in Ruiru costs less to reach than one across the country.",
  },
  {
    icon: Waves,
    factor: "Drainage & kerbs",
    explain:
      "Kerbstones, edge restraints and drainage channels are usually essential for a lasting job and are quoted per linear metre on top of the paving.",
  },
  {
    icon: Hammer,
    factor: "Supply-only vs installation",
    explain:
      "Buying blocks only is the cheapest entry point. Full installation adds base materials, compaction equipment and labour — but comes with a properly prepared foundation.",
  },
];

const priceFaqs = [
  {
    question: "Why don't you publish fixed cabro prices on the website?",
    answer:
      "Cement, aggregate, pigment and fuel prices change, and every site needs a different amount of preparation and transport. A published figure would quickly become wrong in either direction. A quotation priced against your actual project is accurate on the day you receive it.",
  },
  {
    question: "Is it cheaper to buy cabro blocks only and install myself?",
    answer:
      "Supply-only has a lower upfront cost, and we deliver to your site. But cabro performance depends heavily on base preparation and compaction — a poorly prepared base leads to sinking and shifting blocks. If you use your own fundi, make sure the base is properly compacted with edge restraints.",
  },
  {
    question: "What details should I share to get an accurate quote?",
    answer:
      "Your site location, the approximate area in square metres, what will drive on it (cars only, or lorries), and any preferred pattern or colour. Photos of the site help. With that we can quote supply, delivery and installation without guesswork.",
  },
];

const crumbs = breadcrumbList([
  { name: "Home", path: "/" },
  { name: "Cabro Blocks Prices in Kenya", path: "/cabro-blocks-prices-kenya" },
]);

export default function CabroPricesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEF2F6] to-white dark:from-[#0A0C10] dark:to-[#0F1219]">
      <JsonLd data={crumbs} />
      <JsonLd data={faqPage(priceFaqs)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* HEADER */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-gray-700">
            <span className="h-2 w-2 rounded-full bg-[#FFC20E]" />
            Pricing guide
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Cabro blocks prices in Kenya:{" "}
            <span className="text-[#B8860B]">what determines your cost</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            There is no single &ldquo;price of cabro&rdquo; in Kenya — the cost
            of the same driveway can differ significantly depending on the
            blocks you choose and the state of your site. This page explains
            the eight factors that actually move the number, so the quotation
            you receive makes sense.
          </p>
          <p className="mt-3 text-sm text-gray-600">
            We price every project individually.{" "}
            <Link href="/quote" className="font-semibold text-[#B8860B] hover:underline">
              Request a current quotation
            </Link>{" "}
            for figures you can rely on.
          </p>
          <aside className="mt-5 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            <strong>Verified prices required:</strong> current per-piece, per-square-metre,
            delivery and installation rates must be confirmed by Premium Cabro before
            publication. No unverified figures are shown on this guide.
          </aside>
        </div>

        {/* FACTORS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {costFactors.map((item) => (
            <div
              key={item.factor}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFC20E]/15">
                  <item.icon className="h-4.5 w-4.5 text-[#B8860B]" />
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  {item.factor}
                </h2>
              </div>
              <p className="mt-3 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                {item.explain}
              </p>
            </div>
          ))}
        </div>

        {/* PHOTO + CONTEXT */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200">
            <Image
              src="/images/products/cabro/red-trihex-driveway-charcoal-bands.jpeg"
              alt="Red trihex cabro driveway with charcoal bands installed by Premium Cabro"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Budget for the whole job, not just the blocks
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              A common mistake is comparing per-piece block prices alone. The
              base preparation, kerbs and drainage are what make a cabro
              surface last — skimping there means re-doing the work within a
              few seasons. When you compare quotes, check what each one
              includes: excavation, base material, compaction, edge restraints
              and sand filling.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                { label: "View 60mm and 80mm cabro blocks", href: "/products/cabro" },
                { label: "Which thickness do you need? Read the guide", href: "/guides/60mm-vs-80mm-cabro" },
                { label: "How our installation teams work", href: "/cabro-installation-nairobi" },
                { label: "Explore cabro project applications", href: "/projects" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-medium text-gray-700 hover:text-[#B8860B]"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-[#FFC20E] transition-transform group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Pricing questions we hear often
          </h2>
          <div className="mt-5 space-y-3">
            {priceFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm sm:text-base font-semibold text-gray-900">
                  {faq.question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap items-center gap-4 rounded-2xl bg-[#0D1B30] p-6 sm:p-8">
          <div className="mr-auto max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Get an accurate price for your project
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Send your location, area size and preferred blocks — we&apos;ll
              respond with a detailed quotation for supply or full
              installation.
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
          >
            Request a quotation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink(
              "Hello Premium Cabro, I'd like a price quotation for cabro blocks. My location is ____ and the area is approximately ____ m2."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-[#FFC20E]" />
            WhatsApp for pricing
          </a>
        </div>
      </div>
    </main>
  );
}
