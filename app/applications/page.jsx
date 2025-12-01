// app/applications/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Applications | Premium Paving Blocks",
  description:
    "See where to use 60mm cabro, 80mm heavy duty cabro, 3D decorative paving and grass pavers for homes, estates, petrol stations and eco parking.",
};

const applications = [
  {
    id: "residential",
    title: "Home Driveways & Compounds",
    cabroType: "60mm Cabro",
    useFor: "Personal cars, home compounds, walkways and patios.",
    note: "Best choice for residential driveways and compounds with light to medium traffic.",
    image: "/images/applications/residential-driveway.jpg",
    imageAlt: "Residential cabro driveway in front of a house.",
    bullets: [
      "Recommended: 60mm Uni-Paver / Trihex",
      "Ideal for driveways, compounds & walkways",
      "Can add 3D / decorative cabro at the main entrance",
    ],
  },
  {
    id: "estates",
    title: "Apartments, Estates & Parking",
    cabroType: "80mm Heavy Duty Cabro",
    useFor: "Shared parking, estate roads and turning areas.",
    note: "Handles high traffic from many vehicles and daily turning movements.",
    image: "/images/applications/estate-parking.jpg",
    imageAlt: "Apartment parking cabro blocks with marked bays.",
    bullets: [
      "Recommended: 80mm Uni-Paver / Heavy-Duty Zigzag",
      "Use on estate roads & parking bays",
      "Combine with kerbstones for neat parking layout",
    ],
  },
  {
    id: "petrol-industrial",
    title: "Petrol Stations & Industrial Yards",
    cabroType: "80mm Heavy Duty Cabro",
    useFor: "Fuel tankers, trucks, forklifts and loading bays.",
    note: "For areas with lorries and heavy loads where failure is very costly.",
    image: "/images/applications/petrol-station-yard.jpg",
    imageAlt: "Petrol station or industrial yard paved with heavy cabro blocks.",
    bullets: [
      "Recommended: 80mm Heavy-Duty Zigzag / Rectangular",
      "Use dark colours (grey / charcoal) to hide tyre & oil marks",
      "Pair with drainage channels around the forecourt",
    ],
  },
  {
    id: "eco",
    title: "Eco Parking & Green Areas",
    cabroType: "Grass Pavers",
    useFor: "Overflow parking, garden access and green driveways.",
    note: "Perfect when you want vehicle access but still keep a green, natural look.",
    image: "/images/applications/grass-pavers.jpg",
    imageAlt: "Grass pavers with green grass growing between blocks.",
    bullets: [
      "Recommended: Grass / eco pavers",
      "Allows grass growth and better drainage",
      "Good for churches, schools, parks & events parking",
    ],
  },
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
      <section className="container mx-auto px-4 py-14 md:py-20 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/15 to-transparent border border-[#D4A017]/40 px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4A017]">
              Where to use our products
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Applications for{" "}
            <span className="text-[#D4A017]">Premium Paving Blocks</span>
          </h1>

          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
            Here is a quick visual guide showing{" "}
            <span className="font-semibold">
              where each type of cabro works best
            </span>{" "}
            – and which thickness you should use. Share this with your fundi,
            contractor or client when choosing materials.
          </p>
        </div>

        {/* Application cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {applications.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#D4A017]/10 transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-44 md:h-52">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="inline-flex rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-[0.18em]">
                    {item.cabroType}
                  </span>
                  <span className="hidden sm:inline-flex rounded-full bg-white/80 text-slate-900 text-[11px] font-medium px-3 py-1">
                    {item.useFor}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mb-3">
                  {item.useFor}
                </p>

                <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-200 mb-4">
                  {item.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 border-t border-dashed border-slate-200 dark:border-slate-700 pt-3">
                  <span className="font-semibold text-[#D4A017]">
                    Tip:&nbsp;
                  </span>
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-slate-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Need help choosing the right cabro?
            </h2>
            <p className="text-sm md:text-base text-slate-200 max-w-xl">
              Send us your location, a photo or video of the site and
              approximate square meters. We’ll recommend the correct thickness,
              pattern and prepare a clear quotation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-xs md:text-sm font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
            >
              Get a Cabro Recommendation
            </Link>
            <a
              href="tel:+2547XXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/80 px-6 py-3 text-xs md:text-sm font-semibold hover:border-[#D4A017] hover:text-[#D4A017] transition-all"
            >
              Call / WhatsApp: 07XX XXX XXX
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
