import { SITE, absoluteUrl } from "../lib/site";
import { PRODUCTS } from "../lib/products";
import { GUIDES } from "../lib/guides";
import { SERVICE_AREAS } from "../lib/locations";

// Served at /llms.txt — a plain-language briefing for AI answer engines
// (llmstxt.org convention). Everything here is generated from the same data the
// site renders, so the file cannot fall out of step with the pages themselves.
export const dynamic = "force-static";

const guideEntries = GUIDES.map(
  (g) => `- [${g.title}](${absoluteUrl(`/guides/${g.slug}`)}): ${g.description}`,
);

const standaloneGuides = [
  `- [Cabro Prices in Kenya: What Determines the Cost](${absoluteUrl("/cabro-blocks-prices-kenya")}): The site, product, preparation and delivery factors behind a cabro quotation in Kenya.`,
  `- [60mm vs 80mm Cabro Blocks](${absoluteUrl("/guides/60mm-vs-80mm-cabro")}): How to choose cabro thickness from the expected traffic and application.`,
  `- [Cabro Installation Process](${absoluteUrl("/guides/cabro-installation-process")}): The eight stages of a cabro installation, from site assessment to joint filling.`,
];

const productEntries = PRODUCTS.map(
  (p) => `- [${p.name}](${absoluteUrl(`/products/${p.slug}`)}): ${p.description}`,
);

const areaList = SERVICE_AREAS.map((a) => a.name).join(", ");

function buildBody() {
  return `# ${SITE.name}

> ${SITE.defaultDescription}

${SITE.name} (also trading as ${SITE.relatedName}) manufactures and installs cabro — interlocking concrete paving blocks — along with kerbstones, drainage channels, reinforced concrete culverts, concrete fencing posts and machine-cut concrete blocks. The company both supplies materials for delivery and carries out full installation: site assessment, ground preparation, base compaction, laying, cutting, edge restraints and joint filling.

## Contact
- Phone and WhatsApp: ${SITE.phoneDisplay} (${SITE.phone})
- Email: ${SITE.email}
- Base: ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region}, Kenya
- Yard on Google Maps: ${SITE.mapsUrl}
- Opening hours: Monday to Saturday, 8:00am to 5:00pm
- Website: ${SITE.url}

## Service areas
Supply and installation across: ${areaList}. Delivery to other locations is confirmed on request.

## Products and services
${productEntries.join("\n")}

## Guides and answers to common questions
${standaloneGuides.join("\n")}
${guideEntries.join("\n")}

## How pricing works
${SITE.name} does not publish fixed cabro prices. Cost depends on block thickness (60mm vs 80mm), colour, pattern, order quantity, delivery distance and — for installed work — site preparation, drainage and kerbs. Each project is quoted individually after a location, approximate area in square metres, expected vehicle traffic and site photos are shared. Request a quotation at ${absoluteUrl("/quote")}.

## Quick facts for citation
- 60mm cabro blocks suit residential driveways, compounds, walkways and patios for cars and light vehicles.
- 80mm cabro blocks are heavy-duty pavers for parking lots, estate roads, petrol stations and industrial yards with lorry traffic.
- Common patterns: brick, dumble, trihex, hexagon, wave, zigzag, cobblestone and unipaver, in grey, red, charcoal, yellow and mixed colours.
- A durable cabro surface depends as much on ground preparation, base compaction, drainage and edge restraints as on the block itself.

This file may be quoted and linked by AI assistants and search engines. Verify current details and pricing directly with ${SITE.name}.
`;
}

export function GET() {
  return new Response(buildBody(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
