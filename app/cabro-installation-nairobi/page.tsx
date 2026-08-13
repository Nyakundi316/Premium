import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, MapPin, PhoneCall } from "lucide-react";
import JsonLd from "../components/JsonLd";
import { SITE, absoluteUrl, whatsappLink } from "../lib/site";
import { breadcrumbList } from "../lib/schema";

const pageTitle = "Cabro Installation in Nairobi & Kiambu | Site Prep to Finish";
const pageDescription =
  "Professional cabro installation across Nairobi, Kiambu, Ruiru and Thika. Site assessment, base compaction, laying, kerbs and finishing by the same team that manufactures the blocks. Request a site visit and quotation.";

export const metadata: Metadata = {
  title: { absolute: `${pageTitle} | ${SITE.name}` },
  description: pageDescription,
  alternates: { canonical: "/cabro-installation-nairobi" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/cabro-installation-nairobi",
    images: [{ url: "/images/products/cabro/trihex-driveway-plate-compaction.jpeg" }],
  },
};

const installationSteps = [
  {
    step: "Site assessment",
    detail:
      "We look at the ground condition, levels, drainage direction and access, then advise on block thickness and pattern before quoting.",
  },
  {
    step: "Excavation & ground preparation",
    detail:
      "Old surfaces and soft soil are removed and the formation is shaped with the correct falls so water drains away from buildings.",
  },
  {
    step: "Base laying & compaction",
    detail:
      "Murram or hardcore is laid and machine-compacted in layers. This base carries the load — it is the difference between a surface that lasts and one that sinks.",
  },
  {
    step: "Screeding & block laying",
    detail:
      "A levelled sand bed is screeded, then blocks are laid to the agreed pattern, with cuts fitted neatly around edges, manholes and curves.",
  },
  {
    step: "Kerbs & edge restraints",
    detail:
      "Kerbstones and edge restraints lock the paved area in place so blocks cannot creep or spread under traffic.",
  },
  {
    step: "Sand filling & final compaction",
    detail:
      "Joint sand is swept in and the surface is plate-compacted, locking the blocks together into one finished, trafficable surface.",
  },
];

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cabro paving installation",
  serviceType: "Paving installation",
  description:
    "Supply and professional installation of interlocking cabro paving blocks for driveways, parking areas, estates and commercial projects.",
  provider: { "@id": `${SITE.url}/#business` },
  areaServed: [...SITE.serviceAreas],
  url: absoluteUrl("/cabro-installation-nairobi"),
};

const crumbs = breadcrumbList([
  { name: "Home", path: "/" },
  { name: "Cabro Installation Nairobi", path: "/cabro-installation-nairobi" },
]);

export default function CabroInstallationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEF2F6] to-white dark:from-[#0A0C10] dark:to-[#0F1219]">
      <JsonLd data={serviceData} />
      <JsonLd data={crumbs} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-gray-700">
              <span className="h-2 w-2 rounded-full bg-[#FFC20E]" />
              Installation service
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Cabro installation in{" "}
              <span className="text-[#B8860B]">Nairobi &amp; Kiambu</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              We install the cabro blocks we manufacture — one team responsible
              for the blocks, the base and the finish. Our installers work
              across {SITE.serviceAreas.join(", ")} and nearby areas, on
              projects from single home driveways to estate roads and
              commercial parking.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
              >
                Request an installation quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
              >
                <PhoneCall className="h-4 w-4 text-[#B8860B]" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <Image
              src="/images/products/cabro/trihex-driveway-plate-compaction.jpeg"
              alt="Plate compactor finishing a trihex cabro driveway during installation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            How a proper cabro installation is done
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-gray-700 leading-relaxed">
            Cabro rarely fails because of the blocks — it fails because of the
            base under them. This is the sequence our teams follow on every
            job:
          </p>
          <ol className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {installationSteps.map((item, i) => (
              <li
                key={item.step}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
              >
                <span className="text-3xl font-bold text-[#FFC20E]/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base sm:text-lg font-bold text-gray-900">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* PHOTOS */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              src: "/images/products/cabro/red-courtblock-installation-progress.jpeg",
              alt: "Red courtblock cabro being laid during an installation",
            },
            {
              src: "/images/products/cabro/mirror-pavers-walkway-install.jpeg",
              alt: "Mirror-pattern cabro walkway under installation",
            },
            {
              src: "/images/products/cabro/estate-road-brick-pavers-kerbs.jpeg",
              alt: "Estate road paved with brick cabro and finished kerbstones",
            },
            {
              src: "/images/products/cabro/black-white-brick-herringbone-driveway.jpeg",
              alt: "Completed black and white herringbone cabro driveway",
            },
          ].map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-xl border border-gray-200"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* SUPPORTING LINKS */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Choosing blocks for your installation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              The right thickness depends on what will drive on the surface —
              60mm for cars and compounds, 80mm for lorries and busy parking.
              Pattern and colour then set the look of the finished job.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: "Browse 60mm and 80mm cabro blocks", href: "/products/cabro" },
                { label: "Compare thicknesses in the 60mm vs 80mm guide", href: "/guides/60mm-vs-80mm-cabro" },
                { label: "Explore cabro patterns", href: "/patterns" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-medium text-gray-700 hover:text-[#B8860B]"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-[#FFC20E] transition-transform group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              What installation costs depend on
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Installed price is driven by area size, ground condition, block
              choice, kerbs and drainage, and distance from our Kiambu yard.
              We quote after understanding your site — see{" "}
              <Link
                href="/cabro-blocks-prices-kenya"
                className="font-semibold text-[#B8860B] hover:underline"
              >
                what determines cabro prices in Kenya
              </Link>{" "}
              for the full breakdown, or look through{" "}
              <Link
                href="/projects"
                className="font-semibold text-[#B8860B] hover:underline"
              >
                completed cabro projects
              </Link>
              .
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B8860B]" />
              Based on Githunguri Road, Kiambu — site visits are scheduled in
              advance during working hours (Mon–Sat).
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap items-center gap-4 rounded-2xl bg-[#0D1B30] p-6 sm:p-8">
          <div className="mr-auto max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Book a site visit or get a quotation
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Tell us your location and approximate area — we&apos;ll advise on
              thickness, pattern and a work programme.
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFC20E] px-6 py-3 text-sm font-semibold text-[#0D1B30] transition hover:brightness-110"
          >
            Get an installation quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink(
              "Hello Premium Cabro, I'd like a cabro installation quotation and site visit. My location is ____ and the area is approximately ____ m2."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4 text-[#FFC20E]" />
            WhatsApp us
          </a>
        </div>
      </div>
    </main>
  );
}
