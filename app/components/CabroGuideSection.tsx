import Link from "next/link";
import { ArrowRight, Car, Truck, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "../lib/site";

const GOLD = "#FFC20E";

const thicknessGuide = [
  {
    icon: Car,
    thickness: "60mm cabro",
    suits: "Homes and light vehicles",
    detail:
      "The standard choice for residential driveways, compounds, walkways and patios. Handles cars and light traffic comfortably, and comes in the widest range of colours and patterns.",
  },
  {
    icon: Truck,
    thickness: "80mm cabro",
    suits: "Trucks and heavy traffic",
    detail:
      "Thicker heavy-duty blocks for parking lots, estate access roads, petrol stations and industrial yards. Combined with a well-compacted base, 80mm blocks carry lorries and frequent turning traffic.",
  },
];

export default function CabroGuideSection() {
  return (
    <section className="bg-white py-16 dark:bg-[#0A0C10] lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: intro + areas + links */}
          <div>
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: GOLD }}
            >
              Choosing your cabro
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
              60mm or 80mm — which cabro blocks do you need?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              We manufacture interlocking cabro paving blocks at our yard on
              Githunguri Road, Kiambu, then deliver and install them with our
              own teams. Most projects come down to one decision: 60mm blocks
              for homes and light vehicles, or 80mm blocks where trucks and
              heavy traffic pass.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-500">
              We supply and install across {SITE.serviceAreas.join(", ")} and
              nearby areas — supply-only orders are also welcome.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                { label: "View 60mm and 80mm cabro blocks", href: "/products/cabro" },
                { label: "Read the full 60mm vs 80mm guide", href: "/guides/60mm-vs-80mm-cabro" },
                { label: "What affects cabro prices in Kenya", href: "/cabro-blocks-prices-kenya" },
                { label: "Cabro installation in Nairobi & Kiambu", href: "/cabro-installation-nairobi" },
                { label: "See completed cabro projects", href: "/projects" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-[#B8860B] dark:text-slate-300"
                  >
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      style={{ color: GOLD }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: thickness cards + CTA */}
          <div className="flex flex-col gap-5">
            {thicknessGuide.map((option) => (
              <div
                key={option.thickness}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${GOLD}22` }}
                  >
                    <option.icon className="h-5 w-5" style={{ color: "#B8860B" }} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
                      {option.thickness}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {option.suits}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {option.detail}
                </p>
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-[#0D1B30] p-6">
              <p className="mr-auto text-sm font-medium text-white/80">
                Not sure which fits your project? Get free advice with your
                quotation.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
                style={{ background: GOLD }}
              >
                Request a cabro quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  "Hello Premium Cabro, please advise me on 60mm vs 80mm cabro for my project and share a quotation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                <MessageCircle className="h-4 w-4" style={{ color: GOLD }} />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
