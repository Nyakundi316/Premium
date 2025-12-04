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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#020617] text-white">
      <main className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-[#D4A017] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            Free quotation – no obligation
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Get a <span className="text-[#D4A017]">Free Paving Quote</span>
          </h1>

          <p className="text-sm md:text-base text-gray-300">
            Share a few details about your project and we’ll get back to you
            within <span className="font-semibold text-white">24 hours</span>{" "}
            with a clear, itemized quotation.
          </p>

          {/* 3 steps */}
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs md:text-sm">
            {[
              "Step 1: Tell us about you",
              "Step 2: Project details",
              "Step 3: We call you back",
            ].map((step, i) => (
              <div
                key={step}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A017] text-[11px] font-bold text-[#0A1A2F]">
                  {i + 1}
                </span>
                <span className="text-gray-200">{step}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* FORM */}
          <section className="lg:col-span-2">
            <div className="bg-gray-900/70 rounded-2xl border border-gray-800 p-5 md:p-7">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#0A1A2F]"
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
                  <h3 className="text-xl font-bold mb-2">
                    Quote Request Received
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Our team will call you within 24 hours (during working
                    hours) to confirm details and share a clear quotation.
                  </p>
                  <p className="text-xs text-gray-500">
                    The form will reset automatically.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Step 1 */}
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400 mb-3">
                      Step 1 – Your details
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg bg-gray-850 bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none"
                          placeholder="e.g. John Kamau"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none"
                          placeholder="07XX XXX XXX"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          Email (optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          Project Location <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none"
                          placeholder="Estate / Town, e.g. Kiambu Road"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400 mb-3">
                      Step 2 – Project information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          Project Type <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none"
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
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          Approximate Size{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="projectSize"
                          value={formData.projectSize}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none"
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
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          Preferred Pattern
                        </label>
                        <select
                          name="patternType"
                          value={formData.patternType}
                          onChange={handleChange}
                          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none"
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
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">
                          When do you want to start?{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none"
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

                  {/* Step 3 */}
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400 mb-3">
                      Step 3 – Extra details (optional)
                    </h2>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Tell us anything else we should know
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full rounded-lg bg-gray-800 px-4 py-3 text-sm border border-gray-700 focus:border-[#D4A017] focus:outline-none resize-none"
                      placeholder="E.g. surface condition, access for trucks, preferred colour, budget range..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] text-sm md:text-base font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4A017]/30 transition-all"
                    >
                      Submit Quote Request
                    </button>
                    <p className="text-gray-500 text-[11px] text-center mt-2">
                      We only use your details to contact you about this
                      quotation. No spam, no sharing with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            {/* Quick contact card */}
            <div className="bg-gray-900/70 rounded-2xl border border-gray-800 p-6">
              <h3 className="text-base md:text-lg font-semibold mb-3">
                Prefer to speak to someone?
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Call us directly and we can guide you through the process on the
                phone.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4A017]/15 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#D4A017]"
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
                    <p className="text-gray-400 text-xs">Call / WhatsApp</p>
                    <a
                      href="tel:+2547XXXXXXXXX"
                      className="font-semibold text-white hover:text-[#D4A017] transition-colors"
                    >
                     +254 711 789438
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4A017]/15 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#D4A017]"
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
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="font-semibold text-white text-xs md:text-sm">
                      info@premiumpaving.co.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D4A017]/15 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#D4A017]"
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
                    <p className="text-gray-400 text-xs">Working hours</p>
                    <p className="font-semibold text-white text-xs md:text-sm">
                      Mon–Sat: 8:00am – 6:00pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="bg-gray-900/70 rounded-2xl border border-gray-800 p-6">
              <h3 className="text-base md:text-lg font-semibold mb-3">
                What happens after you submit?
              </h3>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#D4A017]/20 text-[11px] font-bold text-[#D4A017]">
                    1
                  </span>
                  <div>
                    We call you within 24 hours to confirm details and ask any
                    quick questions.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#D4A017]/20 text-[11px] font-bold text-[#D4A017]">
                    2
                  </span>
                  <div>
                    If needed, we schedule a free site visit (within Nairobi &
                    nearby areas).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#D4A017]/20 text-[11px] font-bold text-[#D4A017]">
                    3
                  </span>
                  <div>
                    You receive a written quote with clear pricing — materials,
                    labour & transport.
                  </div>
                </li>
              </ol>
            </div>

            {/* Trust / stats */}
            <div className="bg-gray-900/70 rounded-2xl border border-gray-800 p-5 grid grid-cols-2 gap-3 text-center text-xs md:text-sm">
              <div className="p-3 rounded-xl bg-white/5">
                <div className="text-xl font-bold text-[#D4A017]">24 hrs</div>
                <div className="text-gray-300">Average response time</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <div className="text-xl font-bold text-[#D4A017]">200+</div>
                <div className="text-gray-300">Projects completed</div>
              </div>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center text-xs md:text-sm text-gray-400">
          <span>Want to see our work first? </span>
          <Link
            href="/projects"
            className="text-[#D4A017] hover:underline font-medium"
          >
            Browse completed projects
          </Link>
        </div>
      </main>
    </div>
  );
}
