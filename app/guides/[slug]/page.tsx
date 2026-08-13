import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import { GUIDES, getGuide } from "../../lib/guides";
import { SITE, absoluteUrl, whatsappLink } from "../../lib/site";
import { breadcrumbList } from "../../lib/schema";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return GUIDES.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  const path = `/guides/${guide.slug}`;
  return { title: guide.title, description: guide.description, alternates: { canonical: path }, openGraph: { title: guide.title, description: guide.description, url: path, type: "article", publishedTime: guide.published, modifiedTime: guide.modified, images: [{ url: guide.image, alt: guide.imageAlt }] } };
}
export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const path = `/guides/${guide.slug}`;
  const article = { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, image: absoluteUrl(guide.image), datePublished: guide.published, dateModified: guide.modified, author: { "@type": "Organization", name: SITE.name, url: SITE.url }, publisher: { "@id": `${SITE.url}/#organization` }, mainEntityOfPage: absoluteUrl(path) };
  return <main className="min-h-screen bg-white text-slate-900"><JsonLd data={article} /><JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: guide.title, path }])} /><article><header className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8"><Link href="/guides" className="text-sm font-semibold text-[#8A6500]">Cabro paving guides</Link><h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">{guide.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{guide.intro}</p><p className="mt-4 text-sm text-slate-500">By Premium Cabro · Published <time dateTime={guide.published}>{guide.published}</time>{guide.modified !== guide.published && <> · Updated <time dateTime={guide.modified}>{guide.modified}</time></>}</p></header><div className="relative mx-auto aspect-[16/7] max-w-6xl overflow-hidden sm:rounded-3xl"><Image src={guide.image} alt={guide.imageAlt} fill priority sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" /></div><div className="mx-auto max-w-3xl space-y-12 px-4 py-14 sm:px-6">{guide.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-bold">{section.heading}</h2>{section.paragraphs.map((p) => <p key={p} className="mt-4 leading-8 text-slate-700">{p}</p>)}{section.bullets && <ul className="mt-5 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#B8860B]" />{bullet}</li>)}</ul>}</section>)}</div></article><section className="bg-[#0D1B30] py-12"><div className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 sm:px-6"><div className="mr-auto max-w-2xl"><h2 className="text-2xl font-bold text-white">Apply this guidance to your site</h2><p className="mt-2 text-white/70">Share the location, area, traffic and site photos so Premium Cabro can advise on products and prepare a current quotation.</p></div><Link href="/quote" className="rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30]">Request a Cabro Quotation</Link><a href={whatsappLink(`Hello Premium Cabro, I read your guide: ${guide.title}. I would like advice for my project.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"><MessageCircle size={16} /> WhatsApp Premium Cabro</a></div></section></main>;
}
