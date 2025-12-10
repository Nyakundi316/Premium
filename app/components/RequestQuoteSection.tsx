"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function RequestQuoteSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const [showMore, setShowMore] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section
      id="quote"
      className="py-16 md:py-20 bg-[#e9ecf3] text-[#041544]"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/70 px-4 py-1 mb-4">
            <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#A47500]">
              Request a Free Quote
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Get a{" "}
            <span className="text-[#D4A017]">Cabro & Concrete Quote</span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600">
            Provide your project details — we will send a custom quotation.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">

          {/* LEFT FORM */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* NAME + PHONE */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. John Mwangi"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 focus:ring-2 focus:ring-[#D4A017]/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. 0712 345 678"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 focus:ring-2 focus:ring-[#D4A017]/60"
                  />
                </div>
              </div>

              {/* EMAIL + LOCATION */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">
                    Site Location *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Ruiru, Kiambu"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5"
                  />
                </div>
              </div>

              {/* SERVICE + AREA */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">
                    What do you need? *
                  </label>
                  <select
                    required
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5"
                  >
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
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">
                    Area Size (m²)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 150 m²"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">
                  Additional details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your driveway, parking or yard..."
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 resize-none"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full md:w-auto rounded-full bg-[#D4A017] px-8 py-3 font-semibold text-[#0A1A2F] hover:bg-[#b68f13] transition"
              >
                {status === "submitting" ? "Sending..." : "Submit Quote Request"}
              </button>

              {status === "success" && (
                <p className="text-xs text-emerald-700 mt-2">
                  ✅ Thank you! We will contact you shortly.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT – INFO WITH READ MORE */}
          <div className="rounded-3xl bg-[#0A1A2F] text-slate-50 p-6 md:p-8 shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Before You Request a Quote
            </h3>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Our team provides accurate quotations for cabro paving, culverts,
              kerbs and fencing posts across Nairobi, Kiambu and nearby regions.
              <br /><br />
              <span className={`${showMore ? "inline" : "hidden"}`}>
                Including clear details like location, access roads, total area
                size, and preferred block type helps us provide faster and more
                accurate pricing.
                <br /><br />
                We also offer free consultations to guide you on the best
                thickness, pattern and installation option depending on your
                project requirements.
              </span>
            </p>

            {/* READ MORE BUTTON */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-xs font-semibold bg-white text-[#0A1A2F] px-4 py-1.5 rounded-full hover:bg-[#FACC6B] transition"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>

            {/* MAIN CONTACT */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-xs md:text-sm text-slate-200">
                For urgent assistance:
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <a
                  href="tel:+254711789438"
                  className="rounded-full bg-white text-[#0A1A2F] px-4 py-1.5 text-xs font-semibold hover:bg-[#FACC6B]"
                >
                  Call: 0711 789 438
                </a>

                <a
                  href="https://wa.me/254711789438"
                  target="_blank"
                  className="rounded-full border border-white/60 px-4 py-1.5 text-xs hover:bg-white/10"
                >
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
