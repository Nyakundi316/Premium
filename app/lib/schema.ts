import { SITE, absoluteUrl } from "./site";

type Crumb = { name: string; path: string };

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function howTo({
  name,
  description,
  steps,
  path,
  image,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(image ? { image: absoluteUrl(image) } : {}),
    mainEntityOfPage: absoluteUrl(path),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// The business states Mon–Sat 8am–5pm on the contact page; keep this in step
// with SITE.openingHours so the short string and structured form never drift.
const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
];

// What the entity is demonstrably expert in — drawn from the real product
// range and published guides, not invented. Answer engines lean on this to
// decide which questions the business is a credible source for.
const knowsAbout = [
  "Cabro paving blocks",
  "60mm cabro blocks",
  "80mm cabro blocks",
  "Interlocking concrete pavers",
  "Driveway paving",
  "Parking area paving",
  "Cabro installation and ground preparation",
  "Kerbstones and drainage channels",
  "Reinforced concrete culverts",
  "Concrete fencing posts",
  "Machine-cut concrete blocks",
  "Paving patterns and colours",
];

const areaServedCities = SITE.serviceAreas.map((name) => ({
  "@type": "City",
  name,
}));

// The lines the business actually supplies and installs. Kept as a catalogue of
// services rather than priced offers, matching the site's stated policy of
// quoting each project individually instead of publishing fixed prices.
const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Cabro and concrete products",
  itemListElement: [
    "Cabro paving block supply",
    "Cabro paving installation",
    "Kerbstones and drainage channels",
    "Reinforced concrete culverts",
    "Concrete fencing posts",
    "Machine-cut concrete blocks",
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service },
    availableAtOrFrom: { "@id": `${SITE.url}/#business` },
  })),
};

const contactPoint = {
  "@type": "ContactPoint",
  telephone: SITE.phone,
  email: SITE.email,
  contactType: "sales",
  areaServed: "KE",
  availableLanguage: ["en", "sw"],
};

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.relatedName,
  slogan: SITE.tagline,
  description:
    "Manufacturer and installer of cabro paving blocks, kerbstones, culverts and concrete fencing posts. Supply and professional installation across Nairobi, Kiambu and nearby areas.",
  url: SITE.url,
  logo: `${SITE.url}/android-chrome-192x192.png`,
  image: [absoluteUrl("/images/products/cabro/Hero2.jpeg"), `${SITE.url}/android-chrome-512x512.png`],
  telephone: SITE.phone,
  email: SITE.email,
  currenciesAccepted: "KES",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  hasMap: SITE.mapsUrl,
  areaServed: areaServedCities,
  contactPoint,
  openingHours: SITE.openingHours,
  openingHoursSpecification,
  knowsAbout,
  hasOfferCatalog: offerCatalog,
  sameAs: [...SITE.socialProfiles],
};

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.relatedName,
  slogan: SITE.tagline,
  description:
    "Kenyan manufacturer and installer of cabro paving blocks and related concrete products, serving homes, estates and commercial sites in Nairobi, Kiambu and surrounding areas.",
  url: SITE.url,
  logo: absoluteUrl("/android-chrome-192x192.png"),
  email: SITE.email,
  telephone: SITE.phone,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
  },
  areaServed: areaServedCities,
  contactPoint,
  knowsAbout,
  sameAs: [...SITE.socialProfiles],
};

export function serviceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "City", name: areaServed },
    serviceType: "Cabro block supply and paving installation",
  };
}

export const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#business` },
  inLanguage: "en-KE",
};
