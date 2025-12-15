"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const email = "info@premiumconcretepm.co.ke";
  const locationLabel = "Githunguri Road, Kiambu – Nairobi Region";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Githunguri+Road+Kiambu+Nairobi";

  const whatsappNumber = "254711789438";
  const whatsappMessage =
    "Hello Premium Cabro, I’d like a quotation for cabro blocks and installation.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const ContactCard = ({ href, icon: Icon, title, subtitle, external }) => {
    const classes =
      "group block w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition active:scale-[0.99] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300";

    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100">
            <Icon className="h-5 w-5 text-slate-900" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900">{title}</p>
            <p className="mt-0.5 text-sm text-slate-600 break-words">
              {subtitle}
            </p>
            <p className="mt-2 text-xs text-slate-500 group-hover:text-slate-700">
              Tap to open
            </p>
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      <footer className="bg-[#EFEDE4] text-slate-800 border-t border-slate-300 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand / About */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-[#D4A017] flex items-center justify-center text-xs font-extrabold text-[#0A1A2F]">
                  PM
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                    Premium Cabro
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Cabro Blocks & Installation
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-700 max-w-md">
                Built to last — our premium cabro blocks deliver superior
                strength, neat finishes and long-term value for residential,
                commercial and industrial projects.
              </p>

              {/* Socials */}
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-700">
                <span className="uppercase tracking-[0.18em] text-[10px] text-slate-600">
                  Follow us
                </span>

                <div className="flex gap-2">
                  <Link
                    href="https://www.instagram.com/premium.movers"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-[11px] hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
                  >
                    IG
                  </Link>

                  <Link
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-[11px] hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
                  >
                    FB
                  </Link>

                  <Link
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-[11px] hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
                  >
                    LN
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Quick links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-[#D4A017]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-[#D4A017]">
                    Cabro Products
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#D4A017]">
                    Cabro Projects
                  </Link>
                </li>
                <li>
                  <Link href="/applications" className="hover:text-[#D4A017]">
                    Applications
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#D4A017]">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#D4A017]">
                    Contact / Cabro Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="grid grid-cols-1 gap-3">
                <ContactCard
                  href={`mailto:${email}`}
                  icon={Mail}
                  title="Email"
                  subtitle={email}
                />

                <ContactCard
                  href={mapsUrl}
                  icon={MapPin}
                  title="Location (Open Maps)"
                  subtitle={locationLabel}
                  external
                />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-4 border-t border-slate-300 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-slate-600">
            <p>
              © {new Date().getFullYear()} Premium Cabro. All rights reserved.
            </p>
            <p>
              Quality cabro solutions for driveways, compounds, parking areas &
              industrial yards.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <div className="flex items-center gap-2 rounded-full bg-[#0A1A2F] px-4 py-3 text-white shadow-lg transition hover:shadow-xl active:scale-[0.99]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A017]">
            <MessageCircle className="h-5 w-5 text-[#0A1A2F]" />
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none">WhatsApp</p>
            <p className="text-xs text-white/80 leading-none mt-1">
              Get a cabro quote
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
