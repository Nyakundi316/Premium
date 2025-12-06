// // app/faq/FAQContent.jsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const faqSections = [
//   {
//     heading: "General Questions",
//     items: [
//       {
//         q: "Where are you located?",
//         a: "We are located on Githunguri Road, Nairobi. From here we serve Nairobi, Kiambu, Ruiru, Thika Road, Ridgeways, Garden Estate and the surrounding areas with factory-direct paving products and installation services.",
//       },
//       {
//         q: "What products do you manufacture?",
//         a: "We manufacture cabro paving blocks (60mm & 80mm), 3D/decorative paving blocks, grass pavers/eco blocks, kerbstones, garden edging blocks, drainage channels and slabs.",
//       },
//       {
//         q: "Do you only sell blocks, or do you also install?",
//         a: "We do both. You can buy blocks only (supply) or we can handle full installation – including site preparation, base compaction, cabro laying, kerbs, joint filling and finishing.",
//       },
//     ],
//   },
//   {
//     heading: "Products & Specifications",
//     items: [
//       {
//         q: "What is the difference between 60mm and 80mm cabro blocks?",
//         a: "60mm blocks are residential grade and ideal for home driveways, compounds, walkways, patios and light parking. 80mm blocks are heavy-duty and suitable for petrol stations, shopping malls, industrial yards, estate roads, and areas with frequent truck traffic.",
//       },
//       {
//         q: "What designs and patterns do you offer?",
//         a: "We offer Uni-Paver, Zigzag, Trihex, Brick, Dumble, Wave, Fan, Hexagon, 3D decorative designs and grass pavers. We also advise clients on the best design depending on their project needs.",
//       },
//       {
//         q: "What colours are available?",
//         a: "Standard colours include Grey, Red, Yellow and Black. We also do charcoal and multi-colour combinations for 3D decorative designs. Custom colours can be produced based on order quantity.",
//       },
//     ],
//   },
//   {
//     heading: "Ordering, Pricing & Delivery",
//     items: [
//       {
//         q: "How do I get a quotation?",
//         a: "Send us the approximate square meters (m²) via WhatsApp/call or request a site visit. We confirm measurements, recommend the right block type, and prepare a detailed quotation for materials and installation (if needed).",
//       },
//       {
//         q: "Do you offer factory-direct prices?",
//         a: "Yes. All blocks are manufactured at our Githunguri Road facility, ensuring factory-direct pricing without middlemen.",
//       },
//       {
//         q: "Do you deliver to my site?",
//         a: "Yes. We deliver within Nairobi, Kiambu, Ruiru, Thika Road and nearby areas. Delivery cost depends on distance and order size.",
//       },
//     ],
//   },
//   {
//     heading: "Installation & Site Preparation",
//     items: [
//       {
//         q: "Can you visit the site before I decide?",
//         a: "Yes. We can assess the ground condition, drainage, levels and access to ensure accurate recommendations on block type and material quantities.",
//       },
//       {
//         q: "How long does installation take?",
//         a: "Installation time depends on the project size. A typical residential compound takes a few working days. Large commercial projects may take longer, but we plan efficiently to minimize disruptions.",
//       },
//       {
//         q: "Do you handle drainage and kerbstones?",
//         a: "Yes. Our installation includes drainage channels, kerbstones, edging blocks and proper water flow management for a neat, long-lasting finish.",
//       },
//     ],
//   },
//   {
//     heading: "Durability & Maintenance",
//     items: [
//       {
//         q: "How strong are your paving blocks?",
//         a: "Our blocks are machine-vibro compacted using high-grade cement, clean river sand and quality aggregates. This ensures excellent compressive strength and durability for both residential and heavy-duty use.",
//       },
//       {
//         q: "Are the blocks slippery when wet?",
//         a: "No. Our blocks are designed with a textured, non-slip surface for safe use in wet conditions, including pool areas and walkways.",
//       },
//       {
//         q: "How do I maintain paved areas?",
//         a: "Basic sweeping and occasional washing is usually enough. Joints can be re-sanded if needed. Damaged blocks can be easily replaced individually without removing the entire pavement.",
//       },
//     ],
//   },
// ];

// export default function FAQContent() {
//   // track which specific answers are expanded
//   const [expanded, setExpanded] = useState({});

//   const toggle = (key) => {
//     setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const MAX_PREVIEW = 190; // shorter preview so the cards don’t look long

//   return (
//     <main className="min-h-screen pt-28 bg-[#F7F7F2] text-slate-900">
//       <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
//         {/* HEADER */}
//         <div className="mb-8 md:mb-10">
//           <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF7E0] border border-[#FACC6B]/60 px-4 py-1.5">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4A017]" />
//             <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A46306]">
//               Frequently Asked Questions
//             </span>
//           </span>

//           <h1 className="mb-3 text-3xl font-bold md:text-4xl">
//             Quick answers about{" "}
//             <span className="text-[#D4A017]">Premium Paving Blocks</span>
//           </h1>

//           <p className="max-w-2xl text-sm md:text-base text-slate-600">
//             Before starting a paving project, it&apos;s normal to have
//             questions. We&apos;ve kept answers short and clear — you can expand
//             any answer if you want more detail.
//           </p>
//         </div>

//         {/* FAQ SECTIONS */}
//         <div className="space-y-8">
//           {faqSections.map((section, secIndex) => (
//             <div
//               key={section.heading}
//               className="rounded-2xl bg-white/90 border border-slate-200 shadow-sm"
//             >
//               {/* Section heading strip */}
//               <div className="border-b border-slate-100 bg-[#FBFBF7] px-4 py-3 md:px-6">
//                 <h2 className="text-base font-semibold md:text-lg text-slate-900">
//                   {section.heading}
//                 </h2>
//               </div>

//               {/* Questions */}
//               <div className="space-y-3 px-4 py-4 md:px-6 md:py-5">
//                 {section.items.map((item, index) => {
//                   const key = `${secIndex}-${index}`;
//                   const isOpen = !!expanded[key];
//                   const isLong = item.a.length > MAX_PREVIEW;
//                   const text = isOpen || !isLong
//                     ? item.a
//                     : item.a.slice(0, MAX_PREVIEW) + "…";

//                   return (
//                     <div
//                       key={key}
//                       className="rounded-xl bg-[#FAFAF7] border border-slate-100 px-3 py-3 md:px-4 md:py-4"
//                     >
//                       <h3 className="mb-1.5 text-sm font-semibold text-slate-900 md:text-base">
//                         {item.q}
//                       </h3>

//                       <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
//                         {text}
//                       </p>

//                       {isLong && (
//                         <button
//                           type="button"
//                           onClick={() => toggle(key)}
//                           className="mt-1.5 text-[11px] font-semibold text-[#A46306] hover:text-[#D4A017] md:text-xs"
//                         >
//                           {isOpen ? "Read less" : "Read more"}
//                         </button>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-12 rounded-2xl border border-slate-200 bg-white shadow-sm px-5 py-6 md:px-8 md:py-7">
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-lg font-semibold md:text-xl">
//                 Still not sure which blocks you need?
//               </h2>
//               <p className="mt-1 text-sm text-slate-600 md:text-base">
//                 Talk to us and we&apos;ll help you choose the right thickness,
//                 pattern and colour for your project.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <a
//                 href="tel:+254711789438"
//                 className="inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#c18f15]"
//               >
//                 Call Us
//               </a>
//               <Link
//                 href="/quote"
//                 className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold hover:border-[#D4A017] hover:text-[#D4A017]"
//               >
//                 Request a Free Quote
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
