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

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.relatedName,
  description:
    "Manufacturer and installer of cabro paving blocks, kerbstones, culverts and concrete fencing posts. Supply and professional installation across Nairobi, Kiambu and nearby areas.",
  url: SITE.url,
  logo: `${SITE.url}/android-chrome-192x192.png`,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: [...SITE.serviceAreas],
  openingHours: SITE.openingHours,
  sameAs: [...SITE.socialProfiles],
};

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.relatedName,
  url: SITE.url,
  logo: absoluteUrl("/android-chrome-192x192.png"),
  email: SITE.email,
  telephone: SITE.phone,
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
