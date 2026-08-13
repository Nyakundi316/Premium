import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-slate-50 px-4 py-24 text-center text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6500]">Page not found</p>
      <h1 className="mt-4 text-4xl font-bold">We could not find that Premium Cabro page</h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-600">The address may have changed. Browse our cabro products or request help for your project.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/products/cabro" className="rounded-full bg-[#0D1B30] px-6 py-3 text-sm font-semibold text-white">View cabro blocks</Link>
        <Link href="/quote" className="rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30]">Request a quotation</Link>
      </div>
    </main>
  );
}
