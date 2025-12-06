"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    projectSize: "",
    patternType: "",
    location: "",
    timeline: "",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    "Residential Driveway",
    "Commercial Parking",
    "Industrial Yard",
    "Walkway / Pathway",
    "Garden / Patio",
    "Car Park",
    "Other",
  ];

  const projectSizes = [
    "Small (under 50 sqm)",
    "Medium (50–200 sqm)",
    "Large (200–500 sqm)",
    "Extra Large (500+ sqm)",
  ];

  const patternTypes = [
    "Interlocking",
    "Hexagonal",
    "Cobblestone",
    "Herringbone",
    "Basket Weave",
    "Running Bond",
    "3D Blocks",
    "Not sure – advise me",
  ];

  const timelineOptions = [
    "Immediately (within 1 week)",
    "Soon (within 2–4 weeks)",
    "Planning stage (1–2 months)",
    "Future project (3+ months)",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        projectSize: "",
        patternType: "",
        location: "",
        timeline: "",
        additionalNotes: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 md:pt-32">
      <main className="mx-auto max-w-6xl px-4 pb-10 md:pb-14">
        {/* HEADER */}
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-[#A46306]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4A017]" />
            Free quotation – no obligation
          </span>

          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            Get a <span className="text-[#D4A017]">Free Paving Quote</span>
          </h1>

          <p className="text-sm text-slate-700 md:text-base">
            Share a few details about your project and we’ll get back to you
            within{" "}
            <span className="font-semibold text-slate-900">
              24 hours
            </span>{" "}
            with a clear, itemised quotation — materials, labour and transport.
          </p>

          {/* 3 steps */}
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs md:text-sm">
            {[
              "Step 1: Your details",
              "Step 2: Project information",
              "Step 3: We call you back",
            ].map((step, i) => (
              <div
                key={step}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A017] text-[11px] font-bold text-[#0A1A2F]">
                  {i + 1}
                </span>
                <span className="text-slate-700">{step}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-3">
          {/* FORM CARD */}
          <section className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
              {submitted ? (
                <div className="py-10 text-center md:py-12">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429]">
                    <svg
                      className="h-8 w-8 text-[#0A1A2F]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Quote Request Received
                  </h3>
                  <p className="mb-3 text-sm text-slate-600">
                    Our team will call you within{" "}
                    <span className="font-semibold text-slate-900">
                      24 hours
                    </span>{" "}
                    (during working hours) to confirm details and share a
                    quotation.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    The form will reset automatically so you can send another
                    request if needed.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Step 1 – Your details */}
                  <div>
                    <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Step 1 – Your details
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                          placeholder="e.g. John Kamau"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                          placeholder="07XX XXX XXX"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">
                          Email (optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">
                          Project Location{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                          placeholder="Estate / Town, e.g. Kiambu Road"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2 – Project information */}
                  <div>
                    <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Step 2 – Project information
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">
                          Project Type{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                        >
                          <option value="">Select type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">
                          Approximate Size{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="projectSize"
                          value={formData.projectSize}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                        >
                          <option value="">Select size</option>
                          {projectSizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">
                          Preferred Pattern
                        </label>
                        <select
                          name="patternType"
                          value={formData.patternType}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                        >
                          <option value="">Select pattern (optional)</option>
                          {patternTypes.map((pattern) => (
                            <option key={pattern} value={pattern}>
                              {pattern}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">
                          When do you want to start?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((timeline) => (
                            <option key={timeline} value={timeline}>
                              {timeline}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 – Extra details */}
                  <div>
                    <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Step 3 – Extra details (optional)
                    </h2>
                    <label className="mb-1.5 block text-xs font-medium text-slate-700">
                      Tell us anything else we should know
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D4A017] focus:bg-white"
                      placeholder="E.g. surface condition, access for trucks, preferred colour, budget range..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-[#D4A017] to-[#F0B429] py-3.5 text-sm font-semibold text-[#0A1A2F] shadow-sm transition-all hover:shadow-lg hover:shadow-[#FACC6B]/40"
                    >
                      Submit Quote Request
                    </button>
                    <p className="mt-2 text-center text-[11px] text-slate-500">
                      We only use your details to contact you about this
                      quotation. No spam, no sharing with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* SIDEBAR – TRUST & QUICK CONTACT */}
          <aside className="space-y-6">
            {/* Quick contact card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-base font-semibold md:text-lg">
                Prefer to speak to someone?
              </h3>
              <p className="mb-4 text-sm text-slate-700">
                Call or WhatsApp us and we&apos;ll help you estimate area,
                choose patterns and guide you through the process.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3C4]">
                    <svg
                      className="h-5 w-5 text-[#A46306]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Call / WhatsApp</p>
                    <a
                      href="tel:+254711789438"
                      className="text-sm font-semibold text-slate-900 hover:text-[#D4A017] transition-colors"
                    >
                      +254 711 789438
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3C4]">
                    <svg
                      className="h-5 w-5 text-[#A46306]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-xs font-semibold text-slate-900 md:text-sm">
                      info@premiumpaving.co.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3C4]">
                    <svg
                      className="h-5 w-5 text-[#A46306]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Working Hours</p>
                    <p className="text-xs font-semibold text-slate-900 md:text-sm">
                      Mon–Sat: 8:00am – 6:00pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-base font-semibold md:text-lg">
                What happens after you submit?
              </h3>
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF3C4] text-[11px] font-bold text-[#A46306]">
                    1
                  </span>
                  <div>
                    We call you within 24 hours to confirm details and ask any
                    quick questions.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF3C4] text-[11px] font-bold text-[#A46306]">
                    2
                  </span>
                  <div>
                    If needed, we schedule a free site visit (within Nairobi &
                    nearby areas).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF3C4] text-[11px] font-bold text-[#A46306]">
                    3
                  </span>
                  <div>
                    You receive a written quote with clear pricing — materials,
                    labour & transport, with no hidden costs.
                  </div>
                </li>
              </ol>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center text-xs md:text-sm">
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="text-xl font-bold text-[#D4A017]">24 hrs</div>
                <div className="text-slate-700">Average response time</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="text-xl font-bold text-[#D4A017]">200+</div>
                <div className="text-slate-700">Projects completed</div>
              </div>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center text-xs text-slate-500 md:text-sm">
          <span>Want to see our work first? </span>
          <Link
            href="/projects"
            className="font-medium text-[#A46306] hover:underline"
          >
            Browse completed projects
          </Link>
        </div>
      </main>
    </div>
  );
}


