import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneCall, ArrowLeft } from "lucide-react";

/* -----------------------------------------
   Temporary product data (can move to lib/)
------------------------------------------ */
const PRODUCTS = [
  {
    slug: "culverts",
    name: "Reinforced Concrete Culverts",
    description:
      "Heavy-duty reinforced concrete culverts suitable for drainage, road crossings and estate access roads.",
    sizes: "300mm, 450mm, 600mm, 900mm, 1200mm",
    bestFor: "Drainage systems, road crossings, estates & farms",
    images: [
      "/images/products/culverts/1.jpg",
      "/images/products/culverts/2.jpg",
      "/images/products/culverts/3.jpg",
    ],
  },
  {
    slug: "cabro",
    name: "Cabro Paving Blocks",
    description:
      "High-quality vibro-pressed cabro paving blocks for driveways, parking and walkways.",
    sizes: "60mm, 80mm, Decorative",
    bestFor: "Driveways, parking lots, walkways",
    images: [
      "/images/products/cabro/1.jpg",
      "/images/products/cabro/2.jpg",
    ],
  },
  {
    slug: "kerbs-drainage",
    name: "Kerbstones & Drainage Channels",
    description:
      "Precast kerbstones and drainage channels for clean edging and water control.",
    sizes: "Standard kerbs & custom drainage sizes",
    bestFor: "Road edges, driveways, drainage lines",
    images: [
      "/images/products/kerbs-drainage/1.jpg",
      "/images/products/kerbs-drainage/2.jpg",
    ],
  },
];

function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

/* -----------------------------------------
   Page Component
------------------------------------------ */
export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-14">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image gallery */}
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {product.images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {product.images.map((img) => (
                  <div
                    key={img}
                    className="relative h-20 w-24 rounded-lg overflow-hidden border border-slate-200"
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {product.name}
            </h1>

            <p className="mt-4 text-slate-600">
              {product.description}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs uppercase text-slate-500 font-semibold">
                  Sizes Available
                </p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.sizes}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs uppercase text-slate-500 font-semibold">
                  Best For
                </p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.bestFor}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-[#D4A017]
                           px-5 py-3 text-sm font-semibold text-[#0A1A2F] hover:brightness-95 transition"
              >
                Request a Quote
              </Link>

              <a
                href="tel:+254711789438"
                className="inline-flex items-center gap-2 justify-center rounded-full
                           border border-slate-300 px-5 py-3 text-sm font-semibold
                           text-slate-800 hover:bg-slate-50 transition"
              >
                <PhoneCall className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
