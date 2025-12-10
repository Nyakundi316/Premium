// app/products/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products | Premium Paving Blocks",
  description:
    "Premium Concrete paving products: 60mm residential interlock, 80mm Tri-Hex and Zigzag heavy-duty cabro, 3D & cobblestone luxury pavers, grass pavers plus kerbs and drainage.",
};

type Product = {
  id: string;
  name: string;
  image: string;
  badge: string;
  thickness: string;
  strengths: string[];
  bestFor: string[];
  designs: string[];
  colours: string;
  priceHint: string;
};

const products: Product[] = [
  {
    id: "60mm-residential",
    name: "60mm Residential Interlocking Cabro",
    image: "/images/products/60mm-residential-interlock.jpg",
    badge: "Residential",
    thickness: "60mm",
    strengths: [
      "Light–medium vehicle traffic",
      "Non-slip surface",
      "Excellent value for homes",
    ],
    bestFor: ["Home driveways", "Compounds", "Walkways & patios"],
    designs: ["Uni-Paver", "Brick Pattern", "Light-duty Tri-Hex"],
    colours: "Grey, Red, Yellow, Charcoal",
    priceHint: "Perfect for homes with private vehicles only.",
  },
  {
    id: "80mm-trihex",
    name: "80mm Tri-Hex Industrial Cabro",
    image: "/images/products/80mm-trihex-industrial-yard.jpg",
    badge: "Industrial Yard",
    thickness: "80mm",
    strengths: [
      "High compressive strength",
      "Handles heavy trucks & forklifts",
      "Tight interlock for turning loads",
    ],
    bestFor: ["Industrial yards", "Container yards", "Loading bays"],
    designs: ["Tri-Hex 80mm"],
    colours: "Standard Grey, Charcoal",
    priceHint:
      "Recommended where tippers, trailers and forklifts operate daily.",
  },
  {
    id: "80mm-zigzag",
    name: "80mm Zigzag Heavy-Duty Cabro",
    image: "/images/products/80mm-zigzag-heavy-duty.jpg",
    badge: "Heavy Duty Traffic",
    thickness: "80mm",
    strengths: [
      "Long life under constant traffic",
      "Strong interlocking profile",
      "Ideal for public parking",
    ],
    bestFor: ["Malls & retail parking", "Apartments", "Petrol stations"],
    designs: ["Zigzag 80mm", "Uni-Paver 80mm"],
    colours: "Grey, Red, Charcoal, Black",
    priceHint:
      "Use where buses, pickups and visitors’ cars are always moving in and out.",
  },
  {
    id: "3d-cobble",
    name: "3D & Cobblestone Luxury Pavers",
    image: "/images/products/3d-cobblestone-luxury.jpg",
    badge: "Luxury Finish",
    thickness: "60–80mm",
    strengths: ["High visual impact", "Premium estate look", "Custom mixes"],
    bestFor: ["Estate entrances", "Luxury homes", "Hotels & lodges"],
    designs: ["3D Uni-Block", "Cobblestone", "Fan / Wave patterns"],
    colours:
      "Custom blends e.g. Charcoal + Yellow, Red + Black, Grey + Charcoal",
    priceHint:
      "Best when you want your driveway or courtyard to stand out visually.",
  },
  {
    id: "grass-permeable",
    name: "Grass & Permeable Pavers",
    image: "/images/products/grass-permeable-pavers.jpg",
    badge: "Eco Friendly",
    thickness: "Heavy-duty grid",
    strengths: [
      "Allows grass & water to pass",
      "Prevents muddy surfaces",
      "Supports occasional parking",
    ],
    bestFor: ["Overflow parking", "Parks & churches", "Garden paths"],
    designs: ["Open-cell grass pavers", "Honeycomb grids"],
    colours: "Standard Grey (other colours on request)",
    priceHint:
      "Ideal where you want green landscaping that can still carry vehicles.",
  },
  {
    id: "kerbs-drainage",
    name: "Kerbstones, Channels & Drainage",
    image: "/images/products/kerbs-and-drainage.jpg",
    badge: "Finishing & Water Control",
    thickness: "Various profiles",
    strengths: [
      "Neat edges for cabro",
      "Protects paving from spreading",
      "Controls stormwater flow",
    ],
    bestFor: ["Driveway edges", "Estate roads", "Side drains & culverts"],
    designs: ["Straight kerbs", "Bull-nose kerbs", "Open channels", "Slab tops"],
    colours: "Standard concrete (colour wash optional)",
    priceHint:
      "Always pair your cabro with kerbs and drainage to protect your investment.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        {/* Header */}
        <header className="mb-10 md:mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-700">
              Product Range
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Premium <span className="text-amber-600">Paving Products</span>
          </h1>

          <p className="text-sm md:text-base text-slate-600">
            Choose the correct cabro for your site – from{" "}
            <strong>60mm residential interlock</strong> to{" "}
            <strong>80mm Tri-Hex and Zigzag heavy-duty blocks</strong>,
            plus <strong>3D & cobblestone luxury pavers</strong>, grass pavers,
            kerbs and drainage solutions.
          </p>
        </header>

        {/* Product grid */}
        <div className="grid gap-7 md:gap-8 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-52 md:h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="rounded-full bg-black/70 text-[11px] text-white px-3 py-1">
                    {product.thickness}
                  </span>
                  <span className="rounded-full bg-amber-400 text-[11px] text-amber-950 font-semibold px-3 py-1">
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
                  {product.strengths.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Best for */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 mb-1">
                    Best for
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {product.bestFor.map((use) => (
                      <span
                        key={use}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-800"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Designs & colours */}
                <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                  <div>
                    <p className="font-semibold mb-1">Available designs</p>
                    <p className="text-slate-700">
                      {product.designs.join(", ")}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Colour options</p>
                    <p className="text-slate-700">{product.colours}</p>
                  </div>
                </div>

                {/* Hint + CTAs */}
                <div className="border-t border-slate-200 pt-3 mt-2 space-y-2">
                  <p className="text-xs text-slate-500">{product.priceHint}</p>
                  <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 font-semibold text-amber-950 shadow-sm hover:bg-amber-600 transition-colors"
                    >
                      Get quote
                    </Link>
                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:border-amber-400 hover:text-amber-700 transition-colors"
                    >
                      View sample projects
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
