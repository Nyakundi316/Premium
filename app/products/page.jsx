// app/products/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products | Premium Paving Blocks",
  description:
    "View the full range of cabro paving blocks, 60mm residential, 80mm heavy duty, 3D decorative pavers, grass pavers, kerbstones and drainage products from Premium Paving Blocks.",
};

const products = [
  {
    id: "60mm",
    name: "60mm Cabro Blocks (Residential Grade)",
    slug: "60mm-cabro",
    image: "/images/products/60mm-residential-cabro.jpg", // add this image
    badge: "Residential",
    thickness: "60mm",
    strengths: ["Light–medium traffic", "Non-slip surface", "Affordable & durable"],
    bestFor: [
      "Home driveways",
      "Compounds",
      "Walkways & patios",
      "Residential parking",
      "Poolside areas",
    ],
    designs: ["Uni-Paver (Interlocking)", "Brick Pattern", "Trihex", "Dumble", "Hexagon"],
    colours: "Grey, Red, Yellow, Black (custom colours on order)",
    priceHint: "Best value for homes & light traffic areas.",
  },
  {
    id: "80mm",
    name: "80mm Cabro Blocks (Heavy Duty)",
    slug: "80mm-cabro",
    image: "/images/products/80mm-heavy-duty-cabro.jpg", // add this image
    badge: "Heavy Duty",
    thickness: "80mm",
    strengths: ["High compressive strength", "Handles trucks & lorries", "Long lifespan"],
    bestFor: [
      "Apartment parking",
      "Estate roads",
      "Petrol stations",
      "Industrial yards",
      "Loading bays",
    ],
    designs: ["Heavy-Duty Zigzag", "Uni-Paver 80mm", "Trihex 80mm", "Commercial Block"],
    colours: "Grey, Red, Black, Charcoal (others on request)",
    priceHint: "Recommended wherever trucks or constant traffic is expected.",
  },
  {
    id: "3d",
    name: "3D / Decorative Paving Blocks",
    slug: "3d-decorative",
    image: "/images/products/3d-decorative-cabro.jpg", // add this image
    badge: "Premium Finish",
    thickness: "60–80mm",
    strengths: ["High visual impact", "Premium look", "Custom colour options"],
    bestFor: [
      "High-end homes",
      "Estate entrances",
      "Hotel & lodge driveways",
      "Showrooms",
      "Courtyards",
    ],
    designs: [
      "3D Interlocking",
      "Trihex Groove",
      "Mirror",
      "Fan",
      "Dumble",
      "Wave",
      "Brick Cross Dumble",
    ],
    colours: "Multi-colour combos e.g. Black+Yellow, Red+Black, Yellow+Red, etc.",
    priceHint: "Perfect when aesthetics are as important as strength.",
  },
  {
    id: "grass",
    name: "Grass Pavers / Eco Paving Blocks",
    slug: "grass-pavers",
    image: "/images/products/grass-eco-pavers.jpg", // add this image
    badge: "Eco Friendly",
    thickness: "Heavy-duty grid",
    strengths: ["Allows grass growth", "Improves drainage", "Non-slip & durable"],
    bestFor: [
      "Overflow parking",
      "Eco-friendly driveways",
      "Garden walkways",
      "Schools & churches",
      "Resorts & parks",
    ],
    designs: ["Open-cell grass pavers", "Honeycomb / grid style"],
    colours: "Standard Grey (other colours on request)",
    priceHint: "Ideal where you want green + strong parking or walkways.",
  },
  {
    id: "kerbs",
    name: "Kerbstones & Edge Blocks",
    slug: "kerbstones",
    image: "/images/products/kerbstones-edging.jpg", // add this image
    badge: "Edge Control",
    thickness: "Various profiles",
    strengths: ["Neat edging", "Protects paving", "Perfect for landscaping"],
    bestFor: [
      "Driveway edges",
      "Road & parking kerbs",
      "Walkway borders",
      "Flower beds",
      "Compound separation",
    ],
    designs: [
      "Straight kerbstones",
      "L-shaped kerbs",
      "Garden edging blocks",
      "Parking kerbs",
      "Commercial kerbs",
    ],
    colours: "Grey (custom finishes available)",
    priceHint: "Finishes the look and locks your paving in place.",
  },
  {
    id: "drainage",
    name: "Drainage Channels & Slabs",
    slug: "drainage",
    image: "/images/products/drainage-channels-slabs.jpg", // add this image
    badge: "Water Management",
    thickness: "Heavy-duty concrete",
    strengths: ["High strength", "Accurate moulding", "Long-lasting"],
    bestFor: [
      "Estate roads",
      "Compound drains",
      "Footpaths",
      "Entrances & ramps",
      "Parking areas",
    ],
    designs: ["Open channels", "Closed slab covers", "Side drains"],
    colours: "Standard concrete finish",
    priceHint: "Stops water from damaging your paving and foundations.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
      <section className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/15 to-transparent border border-[#D4A017]/40 px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4A017]">
              Product range
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Premium <span className="text-[#D4A017]">Paving Products</span>
          </h1>

          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
            From 60mm residential cabro to 80mm heavy-duty blocks, 3D decorative
            pavers, grass pavers, kerbstones and drainage products — everything
            is manufactured on{" "}
            <span className="font-semibold">Githunguri Road, Nairobi</span> and
            supplied factory-direct.
          </p>
        </div>

        {/* Quick “help me choose” strip */}
        <div className="grid gap-4 md:grid-cols-4 mb-10 text-xs md:text-sm">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-3">
            <p className="font-semibold mb-1">New home driveway?</p>
            <p className="text-slate-600 dark:text-slate-300">
              Start with <span className="font-semibold">60mm Cabro</span> in
              Uni-Paver or Trihex.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-3">
            <p className="font-semibold mb-1">Apartment / petrol station?</p>
            <p className="text-slate-600 dark:text-slate-300">
              Use <span className="font-semibold">80mm Heavy Duty</span> blocks.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-3">
            <p className="font-semibold mb-1">Premium, decorative look?</p>
            <p className="text-slate-600 dark:text-slate-300">
              Choose <span className="font-semibold">3D / Decorative</span>{" "}
              pavers.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-3">
            <p className="font-semibold mb-1">Eco & green parking?</p>
            <p className="text-slate-600 dark:text-slate-300">
              Go for <span className="font-semibold">Grass Pavers</span>.
            </p>
          </div>
        </div>

        {/* Product cards */}
        <div className="grid gap-7 md:gap-8 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#D4A017]/10 transition-all"
            >
              {/* Image */}
              <div className="relative h-52 md:h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="rounded-full bg-black/70 text-[11px] px-3 py-1 text-white">
                    {product.thickness}
                  </span>
                  <span className="rounded-full bg-[#D4A017]/90 text-[11px] px-3 py-1 text-[#0A1A2F] font-semibold">
                    {product.badge}
                  </span>
                </div>
                <h2 className="absolute bottom-4 left-4 right-4 text-base md:text-lg font-semibold text-white drop-shadow">
                  {product.name}
                </h2>
              </div>

              {/* Content */}
              <div className="px-5 py-4 md:px-6 md:py-5 space-y-4">
                {/* Strengths */}
                <div className="flex flex-wrap gap-2 text-[11px] md:text-xs">
                  {product.strengths.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900 px-3 py-1 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Best for */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 mb-1">
                    Best for
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-700 dark:text-slate-200">
                    {product.bestFor.map((use) => (
                      <span
                        key={use}
                        className="rounded-full bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Designs & colours */}
                <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                  <div>
                    <p className="font-semibold mb-1">Available Designs</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {product.designs.join(", ")}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Colour Options</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {product.colours}
                    </p>
                  </div>
                </div>

                {/* Price hint + CTA */}
                <div className="flex flex-col gap-2 border-t border-slate-200 dark:border-slate-800 pt-3 mt-2">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {product.priceHint}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-4 py-2 font-semibold text-[#0A1A2F] shadow-sm hover:shadow-md hover:bg-[#c19113] transition-all"
                    >
                      Get Quote for {product.thickness}
                    </Link>
                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium hover:border-[#D4A017]/70 hover:bg-[#D4A017]/5 transition-all"
                    >
                      View sample projects
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 md:mt-16 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-100/90 via-white/90 to-slate-100/90 dark:from-slate-900/90 dark:via-slate-900/95 dark:to-slate-900/90 px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-1">
              Not sure which cabro is right for your site?
            </h2>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300">
              Send us your location, a short video or photos on WhatsApp. We’ll
              recommend the correct thickness, design and colour and estimate
              square meters for you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs md:text-sm">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-2.5 font-semibold text-[#0A1A2F] shadow-sm hover:shadow-md hover:bg-[#c19113] transition-all"
            >
              Talk to a specialist
            </Link>
            <a
              href="https://wa.me/2547XXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full border border-[#16a34a] text-[#16a34a] px-6 py-2.5 font-semibold hover:bg-[#16a34a]/10 transition-all"
            >
              WhatsApp Photos / Video
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
