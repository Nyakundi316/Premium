import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { GUIDES } from "../lib/guides";
import { breadcrumbList } from "../lib/schema";

const title = "Cabro Paving Guides & Project Planning Resources";
const description = "Practical Premium Cabro guides covering prices, block thickness, patterns, quantities, installation, drainage, maintenance and commercial paving in Kenya.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guides" },
  openGraph: { title, description, url: "/guides", images: [{ url: "/images/products/cabro/paver-display-panels.jpeg", alt: "Cabro paving guides from Premium Cabro" }] },
};

const featured = [
  { title: "Cabro Prices in Kenya: What Determines the Cost?", description: "Understand the site, product, preparation and delivery factors behind a reliable quotation.", href: "/cabro-blocks-prices-kenya" },
  { title: "60mm vs 80mm Cabro Blocks", description: "Choose a thickness using the expected traffic and application.", href: "/guides/60mm-vs-80mm-cabro" },
  { title: "Cabro Installation Process", description: "Follow the work from site assessment and ground preparation to joint filling.", href: "/guides/cabro-installation-process" },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }])} />
      <section className="bg-[#0D1B30] py-16 sm:py-20"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC20E]">Premium Cabro resources</p><h1 className="mt-4 max-w-4xl text-4xl font-extrabold text-white sm:text-5xl">Practical cabro paving guides for planning a better project</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">Use these guides to compare blocks, measure your site, understand preparation and ask more useful questions before requesting a quotation.</p></div></section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold">Start with the essentials</h2><div className="mt-6 grid gap-5 lg:grid-cols-3">{featured.map((guide) => <article key={guide.href} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-bold">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p><Link href={guide.href} className="mt-5 inline-flex items-center gap-2 font-semibold text-[#8A6500]">Open this guide <ArrowRight size={15} /></Link></article>)}</div></section>
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold">More project-planning guides</h2><div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{GUIDES.map((guide) => <article key={guide.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="relative aspect-[16/9]"><Image src={guide.image} alt={guide.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" /></div><div className="p-5"><h3 className="font-bold">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p><Link href={`/guides/${guide.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8A6500]">Read {guide.title} <ArrowRight size={14} /></Link></div></article>)}</div></section>
    </main>
  );
}
