// app/patterns/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Paving Patterns & Recommendations | Premium Paving Blocks",
  description:
    "Use this guide to choose the right cabro paving thickness and pattern for your driveway, estate road, petrol station, parking, industrial yard or garden.",
};

const useCaseCards = [
  {
    id: "home-driveway",
    title: "Home Driveway (Cars Only)",
    traffic: "Light to Medium Traffic",
    recommendedThickness: "60mm Residential Cabro",
    patterns: ["Uni-Paver (Interlocking)", "Trihex", "Brick Pattern"],
    colours: "Grey for budget, Colour (Red/Yellow/Charcoal) for premium finish.",
    link: "#residential-60mm",
  },
  {
    id: "apartment-parking",
    title: "Apartment Parking & Estate Roads",
    traffic: "Medium to Heavy Car Traffic",
    recommendedThickness: "80mm Heavy-Duty Cabro",
    patterns: ["Uni-Paver 80mm", "Heavy-Duty Zigzag", "Trihex 80mm"],
    colours:
      "Grey for large areas, Charcoal/Red bands for markings and aesthetics.",
    link: "#heavy-80mm",
  },
  {
    id: "petrol-station",
    title: "Petrol Stations & Truck Yards",
    traffic: "Heavy Trucks & Lorries",
    recommendedThickness: "80mm Heavy-Duty Cabro (High Strength)",
    patterns: ["Heavy-Duty Zigzag", "Commercial Rectangular Block"],
    colours: "Grey / Charcoal – hides stains and wear very well.",
    link: "#heavy-80mm",
  },
  {
    id: "premium-home",
    title: "Premium Homes & Entrances",
    traffic: "Light Vehicle & Pedestrian",
    recommendedThickness: "60mm or 80mm Decorative Cabro",
    patterns: ["3D Designs", "Wave", "Fan", "Mirror / Dumble Mix"],
    colours: "Multi-colour – Black + Yellow, Red + Black, Yellow + Red, etc.",
    link: "#decorative-3d",
  },
  {
    id: "pool-patio",
    title: "Pool Surrounds & Patios",
    traffic: "Light Pedestrian",
    recommendedThickness: "60mm Non-slip Cabro",
    patterns: ["Wave", "Brick Pattern", "3D Anti-slip"],
    colours: "Sandstone, Yellow, Light Grey, Blue accents near the pool.",
    link: "#decorative-3d",
  },
  {
    id: "eco-parking",
    title: "Eco Parking & Green Areas",
    traffic: "Light Vehicle & Pedestrian",
    recommendedThickness: "Grass Pavers / Eco Blocks",
    patterns: ["Grass Pavers", "Permeable Layouts"],
    colours: "Grey blocks filled with green grass or gravel.",
    link: "#eco-grass",
  },
];

const patternGroups = [
  {
    id: "residential-60mm",
    title: "60mm Cabro – Residential Patterns",
    subtitle:
      "Best for home compounds, driveways, walkways, patios and light parking.",
    badge: "Residential Grade (60mm)",
    patterns: [
      {
        name: "Uni-Paver / Interlocking",
        traffic: "Light to Medium Traffic",
        bestFor: ["Home driveways", "Residential compounds", "Walkways"],
        look: "Classic interlocking joints that give a neat and strong finish.",
        notes:
          "Most common residential block – good balance of cost, durability and appearance.",
      },
      {
        name: "Brick Pattern",
        traffic: "Light Traffic",
        bestFor: ["Walkways", "Patios", "Small parking bays"],
        look: "Straight or staggered ‘brick-road’ style layout.",
        notes:
          "Great when the client wants a simple, modern look that matches house walls and facades.",
      },
      {
        name: "Trihex",
        traffic: "Light to Medium Traffic",
        bestFor: ["Driveways", "Courtyards", "Estate paths"],
        look: "Geometric three-sided shape that forms decorative patterns.",
        notes: "A bit more decorative than Uni-Paver but still very practical.",
      },
      {
        name: "Dumble / Wave / Fan / Hexagon",
        traffic: "Light Traffic",
        bestFor: ["Patios", "Front entrances", "Feature walkways"],
        look: "Curved and shaped blocks that create flowing or circular designs.",
        notes:
          "Good for entrance features and areas where aesthetics are more important than heavy loading.",
      },
    ],
  },
  {
    id: "heavy-80mm",
    title: "80mm Cabro – Heavy Duty Patterns",
    subtitle:
      "For apartment parking, estate roads, petrol stations, loading yards and industrial areas.",
    badge: "Heavy Duty (80mm)",
    patterns: [
      {
        name: "Heavy-Duty Zigzag",
        traffic: "Heavy Traffic – Trucks & Lorries",
        bestFor: [
          "Petrol stations",
          "Estate access roads",
          "Truck yards",
          "Loading zones",
        ],
        look: "Strong zigzag shape with tight interlock for maximum load-bearing.",
        notes:
          "Top recommendation wherever you expect trucks, fuel tankers and frequent vehicle turning.",
      },
      {
        name: "Uni-Paver 80mm",
        traffic: "Medium to Heavy Traffic",
        bestFor: ["Apartment parking", "Commercial compounds", "Busy entries"],
        look: "Same familiar interlocking look but thicker and stronger.",
        notes:
          "Perfect for big residential projects with many cars – durable and easy to repair.",
      },
      {
        name: "Trihex 80mm",
        traffic: "Medium to Heavy Traffic",
        bestFor: ["Shopping malls", "Warehouse yards", "Industrial compounds"],
        look: "Geometric pattern with excellent load distribution.",
        notes:
          "Good when you want both a patterned look and commercial-grade performance.",
      },
      {
        name: "Commercial Rectangular Block",
        traffic: "Heavy Traffic",
        bestFor: ["Forklift areas", "Warehouse aisles", "Service yards"],
        look: "Rectangular blocks in running bond or herringbone layouts.",
        notes:
          "Very easy to lay in straight lines, and simple to cut around drains and kerbs.",
      },
    ],
  },
  {
    id: "decorative-3d",
    title: "3D & Decorative Paving",
    subtitle:
      "Premium patterns for high-end residences, entrances, hotels, Airbnbs and showrooms.",
    badge: "3D / Premium Finish",
    patterns: [
      {
        name: "3D Interlocking Designs",
        traffic: "Light to Medium Traffic",
        bestFor: [
          "High-end home driveways",
          "Estate entrances",
          "Showroom fronts",
        ],
        look: "3D effect created by combining two or three different colours.",
        notes:
          "Use when the client wants a signature entrance that stands out in photos and drone shots.",
      },
      {
        name: "Trihex Groove / Trihex Board / Trihex Yellow",
        traffic: "Light to Medium Traffic",
        bestFor: ["Boutique hotels", "Courtyards", "Outdoor restaurants"],
        look: "Enhanced Trihex blocks with grooves and colour contrast.",
        notes:
          "Maintains strength of Trihex but adds visual interest – perfect for commercial spaces.",
      },
      {
        name: "Mirror / Brick Cross / Dumble Mix",
        traffic: "Light Traffic",
        bestFor: ["Feature walkways", "Front steps", "Accent zones"],
        look: "Mixed patterns arranged to create framed or mirrored designs.",
        notes:
          "Great for small areas where you want something artistic and unique.",
      },
    ],
  },
  {
    id: "eco-grass",
    title: "Grass Pavers & Eco Patterns",
    subtitle:
      "Ideal where you want both parking and greenery – plus better drainage.",
    badge: "Eco / Permeable",
    patterns: [
      {
        name: "Grass Pavers",
        traffic: "Light Vehicle & Pedestrian",
        bestFor: [
          "Overflow parking",
          "Garden driveways",
          "Schools & churches",
          "Parks & resorts",
        ],
        look: "Concrete blocks with open cells that can be filled with soil and grass.",
        notes:
          "Perfect for clients who want green parking that still carries vehicle loads.",
      },
      {
        name: "Permeable Drainage-Friendly Layouts",
        traffic: "Light to Medium Traffic",
        bestFor: ["Compounds with water problems", "Sloped areas"],
        look: "Blocks installed together with open joints, drainage channels and kerbs.",
        notes:
          "Use with our drainage channels and kerbstones to solve flooding, pooling and erosion.",
      },
    ],
  },
];

export default function PatternsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/15 to-transparent border border-[#D4A017]/40 px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
              Cabro Patterns & Guide
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the Right{" "}
            <span className="text-[#D4A017]">Cabro Pattern & Thickness</span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            Not sure which paving blocks to use? Start with the quick guide
            below. Select your type of project (home driveway, petrol station,
            apartment parking, pool, etc.) and follow the recommended cabro
            thickness and pattern.
          </p>
        </div>

        {/* QUICK RECOMMENDATION GUIDE */}
        <div className="mb-12 md:mb-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Quick Recommendation Guide
          </h2>
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-4">
            Match your project to the closest option below. This is what we
            normally recommend to clients based on traffic and usage.
          </p>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {useCaseCards.map((card) => (
              <a
                key={card.id}
                href={card.link}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4 md:p-5 hover:border-[#D4A017] hover:shadow-lg hover:shadow-[#D4A017]/10 transition-all duration-200 block"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {card.title}
                  </h3>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#D4A017]">
                    {card.traffic}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                  Recommended Type
                </p>
                <p className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-100 mb-2">
                  {card.recommendedThickness}
                </p>

                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                  Suggested Patterns
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  {card.patterns.join(" • ")}
                </p>

                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                  Colour Advice
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  {card.colours}
                </p>

                <p className="text-xs md:text-sm text-[#D4A017] font-medium flex items-center gap-1">
                  View matching patterns below
                  <span className="inline-block translate-x-0 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* DETAILED PATTERN GROUPS */}
        <div className="space-y-10 md:space-y-12">
          {patternGroups.map((group) => (
            <section key={group.id} id={group.id} className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-1">
                    {group.title}
                  </h2>
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
                    {group.subtitle}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate-800 dark:text-slate-100">
                  {group.badge}
                </span>
              </div>

              <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                {group.patterns.map((pattern) => (
                  <div
                    key={pattern.name}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4 md:p-5 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
                          {pattern.name}
                        </h3>
                        <p className="text-xs md:text-sm text-[#D4A017] font-medium mt-1">
                          {pattern.traffic}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                        Best For
                      </p>
                      <ul className="flex flex-wrap gap-1.5">
                        {pattern.bestFor.map((item) => (
                          <li
                            key={item}
                            className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] md:text-xs text-slate-800 dark:text-slate-200"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                        Look & Feel
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {pattern.look}
                      </p>
                    </div>

                    <div className="mt-auto pt-2 border-t border-dashed border-slate-200 dark:border-slate-800">
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-2">
                        {pattern.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-slate-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Still unsure what to pick?
            </h2>
            <p className="text-sm md:text-base text-slate-200 max-w-xl">
              Share your location, size in square meters and a few photos of
              your site on WhatsApp. We’ll recommend the exact cabro thickness,
              pattern and colour combination and send you a full quotation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
            >
              Get a Free Cabro Recommendation
            </Link>
            <a
              href="tel:+2547XXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-semibold hover:border-[#D4A017] hover:text-[#D4A017] transition-all"
            >
              Call / WhatsApp: 07XX XXX XXX
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
