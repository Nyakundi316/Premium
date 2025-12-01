// app/contact/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Premium Paving Blocks",
  description:
    "Contact Premium Paving Blocks on Githunguri Road for cabro paving blocks, kerbstones, grass pavers and professional installation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
      <section className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/15 to-transparent border border-[#D4A017]/40 px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4A017]">
              Get in touch
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Let&apos;s plan your{" "}
            <span className="text-[#D4A017]">cabro project</span>
          </h1>

          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300">
            Share your location, project size and a brief description. Our team
            will recommend the right cabro type (60mm, 80mm, 3D or grass
            pavers), estimate square meters and send you a clear quotation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] items-start">
          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 shadow-sm">
            <div className="border-b border-slate-100 dark:border-slate-800 px-6 py-4">
              <h2 className="text-base md:text-lg font-semibold">
                Request a Quote / Site Visit
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Fill this form and we&apos;ll get back within the same day on
                WhatsApp or phone.
              </p>
            </div>

            <form className="px-6 py-6 space-y-4">
              {/* Name + Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4A017]/70 focus:border-[#D4A017]"
                    placeholder="e.g. John Mwangi"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4A017]/70 focus:border-[#D4A017]"
                    placeholder="e.g. 07XX XXX XXX"
                  />
                </div>
              </div>

              {/* Location + Project Type */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Site Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4A017]/70 focus:border-[#D4A017]"
                    placeholder="e.g. Ruiru, Githunguri Road"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4A017]/70 focus:border-[#D4A017]"
                  >
                    <option value="">Select project type</option>
                    <option>Home driveway / compound</option>
                    <option>Apartment parking / estate road</option>
                    <option>Petrol station / industrial yard</option>
                    <option>Eco / grass parking</option>
                    <option>Walkways, pool area, patio</option>
                    <option>Other (explain below)</option>
                  </select>
                </div>
              </div>

              {/* Size estimate */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Approximate Size (m²)
                  </label>
                  <input
                    type="number"
                    name="sqm"
                    className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4A017]/70 focus:border-[#D4A017]"
                    placeholder="e.g. 120"
                    min={0}
                  />
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    If you&apos;re not sure, just describe the area. We can help
                    estimate.
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Preferred Cabro Type
                  </label>
                  <select
                    name="cabroType"
                    className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4A017]/70 focus:border-[#D4A017]"
                  >
                    <option value="">I&apos;m not sure – advise me</option>
                    <option>60mm Residential Cabro</option>
                    <option>80mm Heavy Duty Cabro</option>
                    <option>3D / Decorative Cabro</option>
                    <option>Grass / Eco Pavers</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium mb-1.5">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4A017]/70 focus:border-[#D4A017] resize-y"
                  placeholder="Tell us about your project. Example: 'New driveway for 4 cars, slight slope, prefer dark colour cabro. Need breaking & removal of old concrete.'"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-2.5 text-xs md:text-sm font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
                >
                  Submit Request
                </button>
                <span className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
                  We&apos;ll respond via WhatsApp / call with a quote and cabro
                  recommendation.
                </span>
              </div>
            </form>
          </div>

          {/* Contact Info / Quick WhatsApp */}
          <aside className="space-y-5 md:space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-5 md:p-6">
              <h2 className="text-base md:text-lg font-semibold mb-3">
                Direct Contacts
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 mb-1">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+2547XXXXXXXXX"
                    className="block font-medium hover:text-[#D4A017] transition-colors"
                  >
                    07XX XXX XXX
                  </a>
                  <a
                    href="https://wa.me/2547XXXXXXXXX"
                    className="inline-flex mt-1 items-center gap-2 text-[#16a34a] text-xs font-medium hover:underline"
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-[#16a34a] animate-pulse" />
                    Chat on WhatsApp (preferred)
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 mb-1">
                    Location
                  </p>
                  <p className="text-sm">
                    Githunguri Road, Nairobi <br />
                    Serving Nairobi, Kiambu, Ruiru, Kahawa, Thika Road,
                    Ridgeways & Garden Estate.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@premiumpavingblocks.co.ke"
                    className="text-sm hover:text-[#D4A017] transition-colors"
                  >
                    info@premiumpavingblocks.co.ke
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-900/60 p-4 md:p-5 text-xs md:text-sm text-slate-700 dark:text-slate-200">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                For faster assistance:
              </h3>
              <ol className="list-decimal list-inside space-y-1.5">
                <li>Take 2–3 photos or a short video of the site.</li>
                <li>Send on WhatsApp with your name & location.</li>
                <li>
                  We recommend cabro type (60mm / 80mm / 3D / grass pavers) and
                  estimate square meters.
                </li>
                <li>We send a clear quotation + timeline.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 p-4 text-xs md:text-sm">
              <p className="font-semibold mb-1">Working Hours</p>
              <p className="text-slate-600 dark:text-slate-300">
                Monday – Saturday: 8:00am – 6:00pm <br />
                Sunday & Public Holidays: On request (by booking)
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
