import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import { SITE, absoluteUrl } from "../../lib/site";
import { breadcrumbList } from "../../lib/schema";

const title = "Cabro Installation Process: Ground Preparation to Finishing";
const description = "Understand the cabro installation process from site assessment, excavation and compacted base preparation to laying, edge restraints, joint filling and final checks.";
const path = "/guides/cabro-installation-process";
const date = "2026-08-13";
const steps = [
  ["1. Confirm use, area and site conditions", "Measure the paving area, record the expected traffic, inspect access and identify existing levels, structures and drainage outlets."],
  ["2. Set levels and drainage", "Plan the finished surface so water moves to a safe outlet and away from buildings. Coordinate channels, kerbs, culverts and inspection covers before base work is complete."],
  ["3. Excavate and prepare the formation", "Remove unsuitable surface material to the depth required for the specified pavement layers. Soft spots or filled ground may need additional attention after assessment."],
  ["4. Place and compact the base", "Build a consistent support layer suitable for the traffic. Compact the material evenly and maintain the planned levels rather than trying to correct them with bedding sand."],
  ["5. Install edge restraints", "Kerbs or another suitable restraint hold the paving together at exposed edges and help prevent joints opening under vehicle movement."],
  ["6. Prepare the bedding layer", "Spread and level the bedding material consistently without disturbing the compacted base or blocking planned drainage routes."],
  ["7. Lay, align and cut the cabro", "Lay the selected pattern from controlled lines, keep joints consistent and make accurate cuts around boundaries, drains and fixed objects."],
  ["8. Fill joints, compact and inspect", "Apply suitable jointing material, complete final compaction, top up joints and inspect levels, edges and drainage before handing over the surface."],
];

export const metadata: Metadata = { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, type: "article", publishedTime: date, modifiedTime: date, images: [{ url: "/images/products/cabro/trihex-driveway-plate-compaction.jpeg", alt: "Cabro driveway installation during plate compaction" }] } };

export default function InstallationProcessGuide() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline: title, description, datePublished: date, dateModified: date, image: absoluteUrl("/images/products/cabro/trihex-driveway-plate-compaction.jpeg"), author: { "@type": "Organization", name: SITE.name, url: SITE.url }, publisher: { "@id": `${SITE.url}/#organization` }, mainEntityOfPage: absoluteUrl(path) };
  return <main className="min-h-screen bg-white text-slate-900"><JsonLd data={article} /><JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: title, path }])} /><article><header className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8"><Link href="/guides" className="text-sm font-semibold text-[#8A6500]">Cabro paving guides</Link><h1 className="mt-4 max-w-4xl text-4xl font-extrabold sm:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">A cabro surface works as a system: blocks, joints, bedding, compacted base, ground, drainage and restrained edges. This sequence explains what each stage is intended to achieve.</p><p className="mt-4 text-sm text-slate-500">By Premium Cabro · Published <time dateTime={date}>{date}</time></p></header><div className="relative mx-auto aspect-[16/7] max-w-6xl overflow-hidden sm:rounded-3xl"><Image src="/images/products/cabro/trihex-driveway-plate-compaction.jpeg" alt="Plate compactor being used during a cabro driveway installation" fill priority sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" /></div><div className="mx-auto max-w-3xl px-4 py-14 sm:px-6"><h2 className="text-2xl font-bold">Eight stages of a cabro installation</h2><div className="mt-7 space-y-7">{steps.map(([heading, body]) => <section key={heading} className="rounded-2xl border border-slate-200 p-5"><h3 className="flex gap-3 text-lg font-bold"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]" />{heading}</h3><p className="mt-3 leading-7 text-slate-700">{body}</p></section>)}</div><section className="mt-12"><h2 className="text-2xl font-bold">What to include in an installation quotation request</h2><p className="mt-4 leading-8 text-slate-700">Share a location pin, approximate square metres, expected traffic, photos of the current ground, preferred pattern or colour and any known drainage issues. A site assessment may still be needed before the final scope is confirmed.</p></section></div></article><section className="bg-[#0D1B30] py-12"><div className="mx-auto flex max-w-5xl flex-wrap items-center gap-5 px-4 sm:px-6"><div className="mr-auto"><h2 className="text-2xl font-bold text-white">Plan your cabro installation</h2><p className="mt-2 text-white/70">Request a site-specific quotation for supply, preparation and installation.</p></div><Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30]">Get a Site Assessment <ArrowRight size={16} /></Link></div></section></main>;
}
