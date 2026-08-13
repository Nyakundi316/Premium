import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const photos = [
  { src: "/images/products/concrete-blocks/hollow-blocks-stacked.jpeg", caption: "Uniform hollow blocks stacked neatly for efficient handling and site planning." },
  { src: "/images/products/concrete-blocks/hollow-blocks-curing-pallets.jpeg", caption: "Hollow walling blocks arranged during curing for consistent production quality." },
  { src: "/images/products/concrete-blocks/hollow-blocks-bulk-stock.jpeg", caption: "Bulk hollow-block stock ready for residential and commercial walling projects." },
  { src: "/images/products/concrete-blocks/hollow-blocks-production-yard.jpeg", caption: "Machine-finished hollow blocks prepared at the production yard." },
  { src: "/images/products/concrete-blocks/solid-blocks-pallets-stockyard.jpeg", caption: "Solid concrete blocks palletised for organised project supply." },
  { src: "/images/products/concrete-blocks/solid-blocks-stacked-pallets.jpeg", caption: "Consistent solid blocks stacked for straightforward transport and site use." },
  { src: "/images/products/concrete-blocks/solid-blocks-stockyard.jpeg", caption: "Ready stock of solid walling blocks for demanding construction applications." },
  { src: "/images/products/concrete-blocks/solid-blocks-bulk-yard.jpeg", caption: "Bulk solid-block capacity to help larger building programmes stay supplied." },
];

export default function ConcreteBlocksPage() {
  return (
    <main className="min-h-screen bg-white py-14 text-slate-900 dark:bg-[#0A0C10] dark:text-slate-200 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B] dark:text-yellow-400">Concrete block gallery</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold dark:text-white sm:text-5xl">Machine-cut hollow and solid concrete blocks</h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">Explore current product imagery and choose uniform walling blocks for boundary walls, homes and commercial construction. Confirm block type, quantity and delivery location when requesting a quotation.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {["Hollow and solid options", "Uniform machine finish", "Bulk supply support"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm dark:border-slate-700"><CheckCircle2 className="h-4 w-4 text-yellow-500" />{item}</span>)}
        </div>
        <section id="product-gallery" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="relative aspect-[4/3]"><Image src={photo.src} alt={photo.caption} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div>
              <figcaption className="p-4 text-sm leading-6 text-slate-700 dark:text-slate-300">{photo.caption}</figcaption>
            </figure>
          ))}
        </section>
        <Link href="/quote?product=concrete-blocks" className="mt-10 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-950 hover:bg-yellow-300">Request block quotation <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </main>
  );
}
