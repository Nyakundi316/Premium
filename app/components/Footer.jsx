"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const GOLD = "#FFC20E";

export default function Footer() {
  const email = "info@premiumcabro.com";
  const locationLabel = "Githunguri Road, Kiambu - Nairobi Region";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Githunguri+Road+Kiambu+Nairobi";

  return (
    <footer className="bg-[#0D1B30] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-extrabold"
                style={{ background: GOLD, color: "#0D1B30" }}
              >
                PM
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Premium Cabro
                </p>
                <p className="text-[11px] text-white/50">
                  Cabro Blocks & Installation
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              Built to last — our premium cabro blocks deliver superior
              strength, neat finishes and long-term value for residential,
              commercial and industrial projects across Kenya.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                Follow us
              </span>
              <div className="flex gap-2">
                {[
                  { label: "IG", href: "https://www.instagram.com/premium.movers" },
                  { label: "FB", href: "https://facebook.com/premiumcabro" },
                  { label: "LN", href: "https://linkedin.com/company/premiumcabro" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[11px] text-white/60 transition-colors hover:border-[#FFC20E] hover:text-[#FFC20E]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white/80">Quick links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Cabro Products", href: "/products" },
                { label: "Our Projects", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Get a Quote", href: "/quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 transition-colors hover:text-[#FFC20E]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="mb-4 text-sm font-semibold text-white/80">Contact</h3>

            <a
              href={`mailto:${email}`}
              className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3.5 transition hover:bg-white/[0.06]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/8">
                <Mail className="h-4 w-4 text-white/60" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Email</p>
                <p className="mt-0.5 text-xs text-white/45 break-all">{email}</p>
              </div>
            </a>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3.5 transition hover:bg-white/[0.06]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/8">
                <MapPin className="h-4 w-4 text-white/60" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Location</p>
                <p className="mt-0.5 text-xs text-white/45">{locationLabel}</p>
              </div>
            </a>

            <a
              href="tel:+254711789438"
              className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3.5 transition hover:bg-white/[0.06]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/8">
                <Phone className="h-4 w-4 text-white/60" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Phone</p>
                <p className="mt-0.5 text-xs text-white/45">0711 789 438</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Premium Cabro. All rights reserved.</p>
          <p>Quality cabro solutions for driveways, compounds, parking areas and industrial yards.</p>
        </div>
      </div>
    </footer>
  );
}
