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

export const metadata = {
  title: "Contact & Enquiries | Premium Concrete PM",
  description:
    "Get in touch with Premium Concrete PM for paving block orders, quotations, site visits and product enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 bg-[#F5F5F0] text-slate-900">
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* HEADER */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/60 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-[#A46306]">
              Talk to Premium Concrete PM
            </span>
          </span>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Let&apos;s discuss your{" "}
                <span className="text-[#D4A017]">paving project.</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600 leading-relaxed">
                Whether you need blocks only, full installation or a site visit,
                reach out and we&apos;ll guide you on block type, quantities,
                pricing and timelines.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs md:text-sm shadow-sm">
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
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-base md:text-lg font-semibold mb-3 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-[#D4A017]" />
                Reach our team
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Call, WhatsApp or email us and we&apos;ll respond as soon as
                possible during working hours.
              </p>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3C4]">
                    <Phone className="h-4 w-4 text-[#A46306]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Call / WhatsApp
                    </p>
                    <a
                      href="tel:+254721150988"
                      className="block text-sm font-semibold text-slate-900 hover:text-[#D4A017]"
                    >
                      +254 721 150 988
                    </a>
                    <a
                      href="https://wa.me/254721150988"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#A46306] hover:text-[#D4A017] mt-1"
                    >
                      Message on WhatsApp
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3C4]">
                    <Mail className="h-4 w-4 text-[#A46306]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Email
                    </p>
                    <a
                      href="mailto:info@premiumconcretepm.co.ke"
                      className="text-sm font-semibold text-slate-900 hover:text-[#D4A017]"
                    >
                      info@premiumconcretepm.co.ke
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3C4]">
                    <MapPin className="h-4 w-4 text-[#A46306]" />
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
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3C4]">
                    <Clock className="h-4 w-4 text-[#A46306]" />
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
            <div className="rounded-2xl border border-slate-200 bg-[#FAFAF7] p-5">
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
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
            <h2 className="text-base md:text-lg font-semibold mb-2">
              Send us a quick enquiry
            </h2>
            <p className="text-sm text-slate-600 mb-5">
              Share a few details about your project and we&apos;ll get back to
              you with guidance or a quotation.
            </p>

            <form className="space-y-4">
              {/* Name + Phone */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#D4A017] focus:bg-white"
                    placeholder="e.g. John Kamau"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#D4A017] focus:bg-white"
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
                    className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#D4A017] focus:bg-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Project Type
                  </label>
                  <select className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#D4A017] focus:bg-white">
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
                  className="w-full rounded-lg border border-slate-300 bg-[#F9FAFB] px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#D4A017] focus:bg-white resize-none"
                  placeholder="E.g. approximate area in m², location, type of vehicles, preferred pattern/colour..."
                />
              </div>

              {/* Submit + Note */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] px-8 py-3 text-sm font-semibold text-[#0A1A2F] shadow-sm hover:shadow-lg hover:shadow-[#FACC6B]/40 transition-all"
                >
                  Send Enquiry
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
            className="inline-flex items-center gap-1 text-[#A46306] hover:text-[#D4A017] font-semibold"
          >
            Use our full quotation form
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}
