"use client";

import Image from "next/image";
import Link from "next/link";

export default function CoreProductsSection() {
  const products = [
    {
      id: "cabro",
      name: "Cabro Paving Blocks",
      tag: "60mm • 80mm • 3D Decorative",
      description:
        "Machine-vibro compacted paving blocks for homes, estates, malls and industrial yards.",
      sizes: "60mm, 80mm, 3D decorative",
      bestFor: "Driveways, parkings, estate roads, walkways",
      image: "/images/3D-uni-Cabro-blocks-in-Kenya.jpg", // update to your real image
      href: "/products/cabro",
    },
    {
      id: "culverts",
      name: "Reinforced Concrete Culverts",
      tag: "300mm – 1200mm",
      description:
        "Heavy-duty culverts designed for road drainage, stormwater and estate access roads.",
      sizes: "300mm, 450mm, 600mm, 900mm, 1200mm",
      bestFor: "Road drainage, stormwater, estate & farm access",
      image: "/images/culvert-thumb.jpg",
      href: "/products/culverts",
    },
    {
      id: "fence-posts",
      name: "Concrete Fencing Posts",
      tag: "6ft – 10ft",
      description:
        "Straight, termite-proof posts ideal for plots, farms, estates and commercial fencing.",
      sizes: "6ft, 7ft, 8ft, 9ft, 10ft",
      bestFor: "Plot, farm, estate & perimeter fencing",
      image: "/images/fencing-thumb.jpg",
      href: "/products/fencing-posts",
    },
    {
      id: "kerbs-drainage",
      name: "Kerbstones & Drainage Channels",
      tag: "Kerbs, edge blocks & channels",
      description:
        "Precast kerbs and drainage channels for clean edging, water management and estate finish.",
      sizes: "Standard kerbs & custom drainage sizes",
      bestFor: "Driveway edges, walkways, estate roads, drainage lines",
      image: "/images/kerbs-drainage.jpg",
      href: "/products/kerbs-drainage",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#F4F5F7]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 px-4 py-1 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              <span className="text-[10px] md:text-xs uppercase text-[#A46306] tracking-[0.25em]">
                Our Core Products
              </span>
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Factory-Direct{" "}
              <span className="text-[#D4A017]">
                Cabro & Concrete Products
              </span>
            </h2>

            <p className="text-slate-600 text-sm md:text-base mt-3">
              Reliable, properly cured and machine-vibro compacted products for{" "}
              <span className="font-medium">
                residential, commercial and industrial projects
              </span>{" "}
              across Kenya.
            </p>
          </div>

          {/* TOP CTA – ONLY PRODUCTS LINK */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-sm md:text-base font-semibold shadow-sm hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
            >
              View All Products →
            </Link>
            <p className="text-[11px] md:text-xs text-slate-500 max-w-xs text-left md:text-right">
              View detailed specs, sizes and application guides for each product
              line.
            </p>
          </div>
        </div>

        {/* GRID OF PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4A017]/70 transition-all duration-300 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-40 md:h-44 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-80" />

                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center rounded-full bg-black/55 text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-white/90 px-2 py-1">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 md:p-5 flex flex-col flex-1">
                <h3 className="text-sm md:text-base font-semibold text-slate-900 group-hover:text-[#D4A017] transition-colors">
                  {product.name}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 mt-2 line-clamp-3">
                  {product.description}
                </p>

                {/* META */}
                <div className="mt-3 space-y-2 text-[11px] md:text-xs text-slate-700">
                  <div>
                    <p className="text-slate-500 uppercase text-[9px] tracking-wide">
                      Sizes available
                    </p>
                    <p className="font-medium">{product.sizes}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase text-[9px] tracking-wide">
                      Best for
                    </p>
                    <p className="font-medium line-clamp-2">
                      {product.bestFor}
                    </p>
                  </div>
                </div>

                {/* FOOTER / ACTION */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-[11px] md:text-sm font-semibold text-[#0A1A2F] hover:text-[#D4A017] transition-colors"
                  >
                    View Product Details
                    <span className="text-xs">↗</span>
                  </Link>

                  <span className="inline-flex items-center gap-1 text-[10px] md:text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                    Factory-direct supply
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
