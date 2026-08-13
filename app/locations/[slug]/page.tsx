import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import { SERVICE_AREAS, getServiceArea } from "../../lib/locations";
import { SITE, whatsappLink } from "../../lib/site";
import { breadcrumbList, faqPage, serviceSchema } from "../../lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_AREAS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getServiceArea((await params).slug);
  if (!area) return {};
  const path = `/locations/${area.slug}`;
  const title = `Cabro Blocks & Paving Installation in ${area.name}`;
  const description = `${area.intro} Request a site-specific quotation from Premium Cabro.`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: "/images/products/cabro/Hero2.jpeg", alt: `Cabro paving blocks available in ${area.name}` }] },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const area = getServiceArea((await params).slug);
  if (!area) notFound();
  const path = `/locations/${area.slug}`;
  const faqs = [
    { question: `Do you supply cabro blocks in ${area.name}?`, answer: `Yes. Premium Cabro serves ${area.name}. Delivery is quoted using the confirmed location, quantity and access requirements.` },
    { question: `Can you install cabro in ${area.name}?`, answer: "Installation is available subject to site assessment and scheduling. Share the area, expected traffic, ground condition and drainage needs for an accurate scope." },
    { question: "How do I get an accurate quotation?", answer: "Send a location pin, approximate square metres, expected vehicle traffic and site photos. Prices are only supplied after current material, transport and site requirements are verified." },
  ];
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <JsonLd data={serviceSchema({ name: `Cabro paving in ${area.name}`, description: area.intro, path, areaServed: area.name })} />
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Service Areas", path: "/services" }, { name: area.name, path }])} />
      <JsonLd data={faqPage(faqs)} />
      <section className="bg-[#0D1B30] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#FFC20E]"><MapPin size={17} /> Local service area</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">Cabro blocks and paving installation in {area.name}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">{area.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`/quote?location=${area.name}`} className="rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30]">Request a {area.name} quote</Link>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"><Phone size={16} /> Call {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div><h2 className="text-2xl font-bold">Planning paving work in {area.name}</h2><p className="mt-4 leading-7 text-slate-600">{area.planning}</p><p className="mt-4 rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-700">{area.accessNote}</p></div>
        <div><h2 className="text-2xl font-bold">Common project needs</h2><ul className="mt-5 space-y-3">{area.commonUses.map((use) => <li key={use} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]" />{use}</li>)}</ul><Link href="/guides/60mm-vs-80mm-cabro" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#8A6500]">Compare 60mm and 80mm cabro <ArrowRight size={16} /></Link></div>
      </section>
      <section className="bg-slate-50 py-14"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold">Questions about cabro paving in {area.name}</h2><div className="mt-6 grid gap-4 lg:grid-cols-3">{faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold">{faq.question}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p></article>)}</div><a href={whatsappLink(`Hello Premium Cabro, I need a quotation for a project in ${area.name}. My approximate area is ____ m2.`)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D1B30] px-6 py-3 text-sm font-semibold text-white"><MessageCircle size={17} /> WhatsApp project details</a></div></section>
    </main>
  );
}
