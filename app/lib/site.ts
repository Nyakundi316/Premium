/**
 * Single source of truth for domain, contact details and default SEO values.
 * Keep this preferred host consistent across metadata, schema, sitemap and
 * robots. The hosting layer should redirect the bare domain to this host.
 */
export const SITE = {
  url: "https://www.premiumcabro.com",
  name: "Premium Cabro",
  relatedName: "Premium Concrete PM",
  tagline: "Cabro Blocks & Installation",

  phone: "+254711789438",
  phoneDisplay: "0711 789 438",
  whatsapp: "254711789438",
  whatsappUrl: "https://wa.me/254711789438",
  email: "info@premiumcabro.com",

  address: {
    street: "Githunguri Road",
    locality: "Kiambu",
    region: "Kiambu County",
    country: "KE",
  },

  // Areas the business actually states it serves (footer, contact page).
  serviceAreas: ["Nairobi", "Kiambu", "Ruiru", "Thika", "Juja", "Githunguri", "Limuru"],

  defaultOgImage: "/opengraph-image",
  // TODO(owner): add the Google Search Console token after the www property is verified.
  googleSiteVerification: "",

  // Matches the working hours shown on the contact page (Mon–Sat 8am–5pm).
  openingHours: "Mo-Sa 08:00-17:00",

  // Verified official profiles linked from the site footer.
  socialProfiles: [
    "https://www.instagram.com/premiumcabros",
    "https://facebook.com/premiumcabros.ke",
    "https://www.tiktok.com/@premiumcabro",
  ],

  defaultTitle: "Cabro Blocks Kenya | Supply & Installation | Premium Cabro",
  defaultDescription:
    "Buy durable 60mm and 80mm cabro blocks in Kenya. Premium Cabro supplies and installs interlocking paving blocks for driveways, parking areas, estates and commercial projects across Nairobi, Kiambu and nearby areas.",
} as const;

export function absoluteUrl(path: string) {
  return path === "/" ? SITE.url : `${SITE.url}${path}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
