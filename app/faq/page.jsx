// app/faq/page.jsx
import Link from "next/link";

export const metadata = {
  title: "FAQ | Premium Paving Blocks – Common Questions",
  description:
    "Frequently asked questions about cabro paving blocks, installation, delivery, pricing and maintenance from Premium Paving Blocks, Githunguri Road.",
};

const faqSections = [
  {
    heading: "General Questions",
    items: [
      {
        q: "Where are you located?",
        a: "We are located on Githunguri Road, Nairobi. From here we serve Nairobi, Kiambu, Ruiru, Thika Road, Ridgeways, Garden Estate and the surrounding areas with factory-direct paving products and installation services.",
      },
      {
        q: "What products do you manufacture?",
        a: "We manufacture cabro paving blocks (60mm & 80mm), 3D/decorative paving blocks, grass pavers/eco blocks, kerbstones, garden edging blocks, drainage channels and slabs.",
      },
      {
        q: "Do you only sell blocks, or do you also install?",
        a: "We do both. You can buy blocks only (supply) or we can handle full installation – including site preparation, base compaction, cabro laying, kerbs, joint filling and finishing.",
      },
    ],
  },
  {
    heading: "Products & Specifications",
    items: [
      {
        q: "What is the difference between 60mm and 80mm cabro blocks?",
        a: "60mm blocks are residential grade and are ideal for home driveways, compounds, walkways, patios and light parking. 80mm blocks are heavy-duty, made for petrol stations, shopping malls, industrial yards, estate roads and any area with frequent truck or lorry traffic.",
      },
      {
        q: "What designs and patterns do you offer?",
        a: "We offer Uni-Paver/Interlocking, Zigzag, Trihex, Brick, Dumble, Wave, Fan, Hexagon, 3D decorative designs and grass pavers. We can also advise you on the best design for your specific application.",
      },
      {
        q: "What colours are available?",
        a: "Standard colours include Grey, Red, Yellow and Black. We also do charcoal and multi-colour combinations for 3D/decorative designs. Custom colours can be produced on order depending on quantity.",
      },
    ],
  },
  {
    heading: "Ordering, Pricing & Delivery",
    items: [
      {
        q: "How do I get a quotation?",
        a: "You can send us your approximate square meters (m²) via WhatsApp or call, or request a site visit. We’ll confirm the measurements, recommend the suitable block type and send you a detailed quotation for materials and, if needed, installation.",
      },
      {
        q: "Do you offer factory-direct prices?",
        a: "Yes. All our products are manufactured at our Githunguri Road factory, so you benefit from factory-direct pricing with no middlemen.",
      },
      {
        q: "Do you deliver to my site?",
        a: "Yes, we arrange delivery to your site within Nairobi, Kiambu, Ruiru, Thika Road and surrounding areas. Delivery cost depends on the distance and quantity.",
      },
    ],
  },
  {
    heading: "Installation & Site Preparation",
    items: [
      {
        q: "Can you visit the site before I decide?",
        a: "Yes. We can do a site assessment to check the ground condition, levels, drainage requirements and access. This helps us recommend the right block type and accurate quantities.",
      },
      {
        q: "How long does installation take?",
        a: "It depends on the size and complexity of the project. A typical residential driveway or compound can take a few working days. Larger commercial or industrial projects may take longer, but we plan the work to minimize disruption.",
      },
      {
        q: "Do you handle drainage and kerbstones?",
        a: "Yes. We supply and install kerbstones, edging blocks and drainage channels as part of a complete paving solution so water flows correctly and the finish is neat.",
      },
    ],
  },
  {
    heading: "Durability & Maintenance",
    items: [
      {
        q: "How strong are your paving blocks?",
        a: "Our blocks are machine vibro–compacted and made with high-grade cement, clean river sand and quality aggregates. They are designed to meet strong compressive strength requirements for their intended use (residential or heavy-duty).",
      },
      {
        q: "Are the blocks slippery when wet?",
        a: "No. Properly installed cabro blocks have a textured, non-slip surface suitable for driveways, walkways and pool areas.",
      },
      {
        q: "How do I maintain paved areas?",
        a: "Regular sweeping and occasional washing with water is usually enough. For heavy use areas, you may re-sand joints or replace individual blocks if damaged. One advantage of cabro is that single pieces can be removed and replaced without destroying the whole area.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017]/15 to-transparent border border-[#D4A017]/40 px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
              Frequently Asked Questions
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Answers to Common Questions About{" "}
            <span className="text-[#D4A017]">Premium Paving Blocks</span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Before you place an order or start a paving project, it’s normal to
            have questions. We’ve collected the most common questions from
            homeowners, contractors and developers and answered them here.
          </p>
        </div>

        {/* FAQ sections */}
        <div className="space-y-8">
          {faqSections.map((section) => (
            <div key={section.heading} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-4 md:p-5"
                  >
                    <h3 className="text-sm md:text-base font-semibold mb-2 text-slate-900 dark:text-slate-100">
                      {item.q}
                    </h3>
                    <p className="text-sm md:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-slate-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Still have a question?
            </h2>
            <p className="text-sm md:text-base text-slate-200">
              Talk to us directly on phone or WhatsApp and we’ll guide you on
              designs, block thickness, colours and approximate costs for your
              site.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+2547XXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
            >
              Call Us
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 px-6 py-3 text-sm font-semibold hover:border-[#D4A017] hover:text-[#D4A017] transition-all"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
