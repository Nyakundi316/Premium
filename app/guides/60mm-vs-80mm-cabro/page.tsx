import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, Truck, MessageCircle, CheckCircle2 } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import { SITE, whatsappLink } from "../../lib/site";
import { breadcrumbList } from "../../lib/schema";

const pageTitle = "60mm vs 80mm Cabro Blocks: Which Thickness Do You Need?";
const pageDescription =
  "A practical guide to choosing between 60mm and 80mm cabro blocks in Kenya — traffic loads, typical applications, base preparation and cost implications, with advice for driveways, parking and industrial yards.";

export const metadata: Metadata = {
  title: { absolute: `${pageTitle} | ${SITE.name}` },
  description: pageDescription,
  alternates: { canonical: "/guides/60mm-vs-80mm-cabro" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/guides/60mm-vs-80mm-cabro",
    images: [{ url: "/images/products/cabro/black-white-brick-herringbone-driveway.jpeg" }],
  },
};

const sixtyUses = [
  "Home driveways used by personal cars",
  "Compounds, verandas and courtyards",
  "Walkways, garden paths and patios",
  "Pool surrounds and outdoor seating areas",
];

const eightyUses = [
  "Apartment and estate parking with daily turning traffic",
  "Estate access roads and gate entrances",
  "Petrol station forecourts and service roads",
  "Industrial yards, loading bays and truck routes",
];

const crumbs = breadcrumbList([
  { name: "Home", path: "/" },
  { name: "60mm vs 80mm Cabro Guide", path: "/guides/60mm-vs-80mm-cabro" },
]);

export default function CabroThicknessGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEF2F6] to-white dark:from-[#0A0C10] dark:to-[#0F1219]">
      <JsonLd data={crumbs} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* HEADER */}
        <span className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-gray-700">
          <span className="h-2 w-2 rounded-full bg-[#FFC20E]" />
          Buyer&apos;s guide
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          60mm vs 80mm cabro blocks:{" "}
          <span className="text-[#B8860B]">which thickness do you need?</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
          Cabro blocks in Kenya come in two main thicknesses, and choosing
          between them is simpler than it looks: it comes down to the heaviest
          vehicle that will regularly use the surface. Get this right and the
          paving lasts for years; get it wrong and even well-laid blocks crack
          or sink.
        </p>

        {/* THE SHORT ANSWER */}
        <div className="mt-8 rounded-2xl border-l-4 border-[#FFC20E] bg-white p-5 sm:p-6 shadow-sm">
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
            <strong>The short answer:</strong> choose 60mm cabro for surfaces
            used by people and personal cars — driveways, compounds, walkways.
            Choose 80mm cabro anywhere lorries, buses or constant traffic will
            pass — parking lots, estate roads, petrol stations and industrial
            yards. When in doubt, describe your traffic to us and we&apos;ll
            advise for free with your quotation.
          </p>
        </div>

        {/* SIDE BY SIDE */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <section className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC20E]/15">
                <Car className="h-5 w-5 text-[#B8860B]" />
              </span>
              <h2 className="text-xl font-bold text-gray-900">60mm cabro</h2>
            </div>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              The residential standard. Lighter to handle, quicker to lay, and
              available in the widest range of shapes and colours — brick,
              dumble, hexagon, wave, fan, cobblestone and decorative mixes.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              {sixtyUses.map((use) => (
                <li key={use} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B8860B]" />
                  {use}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D1B30]">
                <Truck className="h-5 w-5 text-[#FFC20E]" />
              </span>
              <h2 className="text-xl font-bold text-gray-900">80mm cabro</h2>
            </div>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              A third thicker, made for load. Profiles like trihex, unipaver
              and heavy-duty zigzag interlock tightly so braking and turning
              trucks can&apos;t shift the surface.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              {eightyUses.map((use) => (
                <li key={use} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B8860B]" />
                  {use}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* PHOTOS */}
        <div className="mt-10 grid grid-cols-2 gap-3">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200">
              <Image
                src="/images/products/cabro/black-white-brick-herringbone-driveway.jpeg"
                alt="Residential driveway paved with 60mm brick cabro in a herringbone pattern"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 430px"
              />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              60mm brick cabro on a residential driveway
            </figcaption>
          </figure>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200">
              <Image
                src="/images/products/cabro/estate-road-brick-pavers-kerbs.jpeg"
                alt="Estate access road paved with interlocking cabro blocks and kerbstones"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 430px"
              />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              Estate road with kerbstones — a typical 80mm application
            </figcaption>
          </figure>
        </div>

        {/* BASE PREP */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Thickness alone doesn&apos;t carry the load — the base does
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            An 80mm block on a poorly compacted base will still sink. Heavy
            traffic needs a thicker, machine-compacted murram or hardcore base
            with proper edge restraints, and a light-duty base is fine under
            60mm blocks in a home compound. That&apos;s why we assess the site
            before quoting — the base spec is part of the price. You can read
            the full sequence on our{" "}
            <Link
              href="/cabro-installation-nairobi"
              className="font-semibold text-[#B8860B] hover:underline"
            >
              cabro installation page
            </Link>
            .
          </p>
        </section>

        {/* COST */}
        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            What the choice means for your budget
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            80mm blocks use more concrete, so they cost more per piece, and
            their heavier base adds to the installed price. That extra cost is
            only worth paying where the traffic demands it — and worth every
            shilling where it does, because under-specifying means redoing the
            surface. Colour is the other big price lever: plain grey is the
            most economical in both thicknesses. See{" "}
            <Link
              href="/cabro-blocks-prices-kenya"
              className="font-semibold text-[#B8860B] hover:underline"
            >
              what determines cabro prices in Kenya
            </Link>{" "}
            for the full picture.
          </p>
        </section>

        {/* NEXT STEPS */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Next steps
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "Browse all 60mm and 80mm cabro blocks", href: "/products/cabro" },
              { label: "Explore cabro project applications", href: "/projects" },
              { label: "Explore patterns and colour combinations", href: "/patterns" },
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

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl bg-[#0D1B30] p-6 sm:p-8">
          <p className="mr-auto max-w-md text-sm font-medium text-white/80">
            Still unsure which thickness fits your project? Describe your
            traffic and site — advice is free with your quotation.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
          >
            Request a cabro quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink(
              "Hello Premium Cabro, please advise whether I need 60mm or 80mm cabro. The surface will be used by ____ and my location is ____."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-[#FFC20E]" />
            WhatsApp us
          </a>
        </div>
      </article>
    </main>
  );
}
