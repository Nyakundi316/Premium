import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const photos = [
  { src: "/images/Retaining Walls.png", caption: "Tiered retaining work that supports sloped ground while creating cleaner, usable landscape levels." },
  { src: "/images/kerbs erosion control.png", caption: "Concrete edge and erosion-control detailing designed to help stabilise landscaped site boundaries." },
];

export default function RetainingWallsPage() {
  return (
    <main className="min-h-screen bg-white py-14 text-slate-900 dark:bg-[#0A0C10] dark:text-slate-200 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B] dark:text-yellow-400">Retaining solutions gallery</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold dark:text-white sm:text-5xl">Practical support for slopes and landscaped compounds</h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">Retaining requirements depend on ground conditions, height, drainage and loading. These images show the type of clean, structured finish available; request a site-specific assessment before choosing a solution.</p>
        <section id="product-gallery" className="mt-12 grid gap-6 md:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="relative aspect-[4/3]"><Image src={photo.src} alt={photo.caption} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div>
              <figcaption className="p-5 text-sm leading-6 text-slate-700 dark:text-slate-300">{photo.caption}</figcaption>
            </figure>
          ))}
        </section>
        <Link href="/quote?product=retaining-wall-products" className="mt-10 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-950 hover:bg-yellow-300">Discuss your site <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </main>
  );
}
