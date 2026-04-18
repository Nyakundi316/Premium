"use client";

import { useState, FormEvent } from "react";
import { Phone, MessageCircle } from "lucide-react";

const GOLD = "#FFC20E";

export default function RequestQuoteSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm transition focus:border-[#FFC20E] focus:outline-none focus:ring-2 focus:ring-[#FFC20E]/20";

  return (
    <section className="bg-white dark:bg-[#0A0C10] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="mb-10 max-w-xl">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
            Get a Quote
          </span>
          <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
            Request a free cabro & concrete quote
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Provide your project details — we'll send a custom quotation.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* Form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Full Name *</label>
                  <input required type="text" placeholder="e.g. John Mwangi" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Phone Number *</label>
                  <input required type="tel" placeholder="e.g. 0712 345 678" className={inputClass} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Email (optional)</label>
                  <input type="email" placeholder="your@email.com" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Site Location *</label>
                  <input required type="text" placeholder="e.g. Ruiru, Kiambu" className={inputClass} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">What do you need? *</label>
                  <select required className={inputClass}>
                    <option value="">Select option</option>
                    <option value="cabro">Cabro Paving (60mm / 80mm)</option>
                    <option value="cobblestone">Cobblestone Driveway</option>
                    <option value="culverts">Reinforced Concrete Culverts</option>
                    <option value="posts">Concrete Fencing Posts</option>
                    <option value="kerbs">Kerbs & Drainage</option>
                    <option value="supply">Supply Only</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Area Size (m²)</label>
                  <input type="text" placeholder="e.g. 150 m²" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">Additional details</label>
                <textarea rows={3} placeholder="Describe your project..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full px-8 py-3 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110 disabled:opacity-60"
                style={{ background: GOLD }}
              >
                {status === "submitting" ? "Sending..." : "Submit Quote Request"}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-600">Thank you! We'll contact you shortly.</p>
              )}
            </form>
          </div>

          {/* Info panel */}
          <div className="rounded-2xl bg-[#0D1B30] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Before you request a quote</h3>

            <p className="mt-3 text-sm leading-7 text-white/55">
              Our team provides accurate quotations for cabro paving, culverts, kerbs and fencing posts across Nairobi, Kiambu and nearby regions.
            </p>
            <p className="mt-3 text-sm leading-7 text-white/55">
              Including clear details like location, access roads, total area size, and preferred block type helps us provide faster and more accurate pricing.
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/35">For urgent assistance</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="tel:+254711789438"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-[#0D1B30] transition hover:brightness-110"
                  style={{ background: GOLD }}
                >
                  <Phone size={14} />
                  0711 789 438
                </a>
                <a
                  href="https://wa.me/254711789438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
