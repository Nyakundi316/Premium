// app/contact/page.jsx
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { SITE, whatsappLink } from "../lib/site";

export const metadata = {
  title: "Contact & Enquiries",
  description:
    "Get in touch with Premium Cabro for paving block orders, quotations, site visits and product enquiries in Nairobi and Kiambu.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Enquiries | Premium Cabro",
    description:
      "Get in touch for paving block orders, quotations, site visits and product enquiries in Nairobi and Kiambu.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 bg-white dark:bg-[#0A0C10] text-slate-900 dark:text-slate-200">
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* HEADER */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC20E]/10 border border-[#FFC20E]/20 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FFC20E] animate-pulse" />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[#B8860B]">
              Talk to Premium Cabro
            </span>
          </span>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Let&apos;s discuss your{" "}
                <span className="text-[#FFC20E]">paving project.</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600 leading-relaxed">
                Whether you need blocks only, full installation or a site visit,
                reach out and we&apos;ll guide you on block type, quantities,
                pricing and timelines.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-xs md:text-sm shadow-sm">
              <p className="font-semibold text-slate-900">
                Factory & Yard – Githunguri / Kiambu
              </p>
              <p className="text-slate-500">
                Supplying Nairobi, Kiambu, Ruiru, Thika Road & nearby areas.
              </p>
            </div>
          </div>
        </div>

        {/* GRID: CONTACT CARD + FORM */}
        <div className="grid gap-8 md:grid-cols-[1.05fr,1.1fr]">
          {/* LEFT: CONTACT DETAILS */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <h2 className="text-base md:text-lg font-semibold mb-3 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-[#FFC20E]" />
                Reach our team
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Call, WhatsApp or email us and we&apos;ll respond as soon as
                possible during working hours.
              </p>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC20E]/15">
                    <Phone className="h-4 w-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Call / WhatsApp
                    </p>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="block text-sm font-semibold text-slate-900 hover:text-[#FFC20E]"
                    >
                      {SITE.phoneDisplay}
                    </a>
                    <a
                      href={whatsappLink("Hello Premium Cabro, I would like help with a paving or concrete-products enquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#B8860B] hover:text-[#FFC20E] mt-1"
                    >
                      Message on WhatsApp
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC20E]/15">
                    <Mail className="h-4 w-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-[#FFC20E]"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC20E]/15">
                    <MapPin className="h-4 w-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Githunguri / Kiambu, Kenya
                    </p>
                    <p className="text-xs text-slate-500">
                      Factory yard supplying Nairobi, Kiambu, Ruiru, Thika
                      Road & surroundings.
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC20E]/15">
                    <Clock className="h-4 w-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Working Hours
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Mon – Sat: 8:00am – 5:00pm
                    </p>
                    <p className="text-xs text-slate-500">
                      Site visits are scheduled in advance based on availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICE AREAS TAGS */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">
                Main Service Areas
              </p>
              <div className="flex flex-wrap gap-2 text-[11px]">
                {[
                  "Nairobi",
                  "Kiambu",
                  "Ruiru",
                  "Thika Road",
                  "Kahawa",
                  "Githurai",
                  "Ridgeways",
                  "Garden Estate",
                  "Neighbouring areas",
                ].map((place) => (
                  <span
                    key={place}
                    className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 md:p-7 shadow-sm">
            <h2 className="text-base md:text-lg font-semibold mb-2">
              Send us a quick enquiry
            </h2>
            <p className="text-sm text-slate-600 mb-5">
              Share a few details about your project and we&apos;ll get back to
              you with guidance or a quotation.
            </p>

            <form action="/quote" method="get" className="space-y-4">
              <p className="rounded-lg bg-amber-50 p-3 text-xs text-amber-950">For privacy, this quick form does not place personal details in the URL. Continue to the secure quotation workflow below.</p>
              {/* Name + Phone */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#FFC20E] focus:bg-white"
                    placeholder="e.g. John Kamau"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#FFC20E] focus:bg-white"
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>

              {/* Email + Project Type */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#FFC20E] focus:bg-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Project Type
                  </label>
                  <select className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#FFC20E] focus:bg-white">
                    <option value="">Select option</option>
                    <option>Home driveway / compound</option>
                    <option>Commercial parking</option>
                    <option>Industrial yard / trucks</option>
                    <option>Walkways / garden / pool</option>
                    <option>Blocks supply only</option>
                    <option>Other / not sure</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Tell us about your project{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#FFC20E] focus:bg-white resize-none"
                  placeholder="E.g. approximate area in m², location, type of vehicles, preferred pattern/colour..."
                />
              </div>

              {/* Submit + Note */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#FFC20E] px-8 py-3 text-sm font-semibold text-[#0D1B30] shadow-sm hover:brightness-95 transition-all"
                >
                  Continue to Detailed Quote
                </button>
                <p className="text-[11px] text-slate-500">
                  We&apos;ll contact you via phone or WhatsApp. Your details are
                  only used for this enquiry.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* UNDER FORM CTA */}
        <div className="mt-10 flex flex-wrap gap-3 text-xs md:text-sm text-slate-600">
          <span className="font-semibold text-slate-800">
            Prefer a detailed quotation?
          </span>
          <Link
            href="/quote"
            className="inline-flex items-center gap-1 text-[#B8860B] hover:text-[#FFC20E] font-semibold"
          >
            Use our full quotation form
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}
