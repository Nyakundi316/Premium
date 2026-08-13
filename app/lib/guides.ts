export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  published: string;
  modified: string;
  image: string;
  imageAlt: string;
  sections: GuideSection[];
};

const NEW_GUIDE_DATE = "2026-08-13";

export const GUIDES: Guide[] = [
  {
    slug: "best-cabro-patterns-driveways-parking-walkways",
    title: "Best Cabro Patterns for Driveways, Parking Areas and Walkways",
    description: "Compare interlocking cabro patterns for driveways, parking areas and walkways, including layout, traffic and maintenance considerations.",
    intro: "A cabro pattern affects more than appearance. It changes how the blocks interlock, where cuts are needed, how markings can be incorporated and how easily a small repair blends into the surrounding surface.",
    published: NEW_GUIDE_DATE,
    modified: NEW_GUIDE_DATE,
    image: "/images/products/cabro/paver-display-panels.jpeg",
    imageAlt: "Display panels showing different cabro paving patterns and colour combinations",
    sections: [
      { heading: "Start with the way the surface will be used", paragraphs: ["For a home walkway, colour and comfortable foot traffic may lead the decision. A driveway also needs a layout that remains stable under turning wheels. Parking and industrial areas need the block thickness, base and drainage selected for repeated vehicle loading."], bullets: ["Walkways: prioritise an even walking surface and simple edge cuts", "Home driveways: use an interlocking layout suitable for cars and turning", "Parking areas: plan traffic aisles, bay markings and drainage together", "Heavy-traffic yards: confirm 80mm options and base requirements before choosing a decorative layout"] },
      { heading: "Popular pattern families", paragraphs: ["Zigzag, unipaver and brick-style layouts create strong visual direction and suit many driveways. Trihex, hexagon, fan, dumble and 3D combinations can create feature zones or borders. Availability varies, so confirm the exact profile, colour and thickness before designing around it."], bullets: ["Use one main pattern across large areas to reduce visual clutter", "Reserve contrasting colours for borders, bays or focal points", "Ask how many cuts a layout needs around curves, drains and columns"] },
      { heading: "Pattern cannot compensate for poor preparation", paragraphs: ["Even an appropriate interlocking pattern will move if the ground and base are not prepared for the traffic. Levels, compaction, edge restraints, bedding sand and joint filling all contribute to the finished surface."], bullets: ["Set drainage falls before laying starts", "Restrain exposed edges with suitable kerbs or edge concrete", "Keep spare matching blocks for later access or repairs"] },
    ],
  },
  {
    slug: "calculate-cabro-blocks-needed",
    title: "How to Calculate the Cabro Blocks Needed for Your Project",
    description: "Learn how to measure a paving area, account for shapes and cuts, and request an accurate cabro quantity estimate without relying on guesswork.",
    intro: "A reliable cabro quantity starts with the paved area in square metres, but the final order also depends on the block profile, layout, cuts and how the site is divided.",
    published: NEW_GUIDE_DATE,
    modified: NEW_GUIDE_DATE,
    image: "/images/products/cabro/paver-pallets-production-yard.jpeg",
    imageAlt: "Pallets of cabro paving blocks ready for quantity planning and delivery",
    sections: [
      { heading: "Measure each simple section separately", paragraphs: ["Divide the site into rectangles or other shapes that can be measured reliably. For a rectangle, multiply length by width. Add the areas of all sections that will be paved, and keep unpaved planters, channels or buildings separate."], bullets: ["Record all measurements in metres", "Sketch the site and label every measured edge", "Measure gates, narrow passages and separate paths", "Mark drains, inspection covers and permanent obstacles"] },
      { heading: "Do not convert square metres directly to pieces without the profile", paragraphs: ["Different cabro shapes cover different areas per piece. Ask the supplier for the confirmed coverage of the exact profile you intend to order. Avoid using a piece count copied from another block shape."], bullets: ["Confirm pattern name and dimensions", "Confirm whether coverage includes the normal joint spacing", "Separate main paving blocks from border or feature blocks"] },
      { heading: "Allow for cuts and site realities", paragraphs: ["Curves, diagonal borders, columns and irregular edges usually create more cutting than a plain rectangular area. The appropriate allowance should be set from the drawing or a site assessment rather than a universal percentage."], bullets: ["Share photos and the sketch with the quotation request", "Ask the installer to confirm the measured area before ordering", "Keep a small labelled stock of matching blocks for future repairs"] },
    ],
  },
  {
    slug: "common-cabro-installation-mistakes",
    title: "Common Cabro Installation Mistakes and How to Avoid Them",
    description: "Understand common cabro paving problems involving drainage, weak bases, missing edge restraints, poor compaction and incorrect block selection.",
    intro: "Many visible cabro problems begin below the blocks. Planning the ground, drainage, base and traffic requirement before laying starts is usually more important than choosing the final colour.",
    published: NEW_GUIDE_DATE,
    modified: NEW_GUIDE_DATE,
    image: "/images/products/cabro/trihex-driveway-plate-compaction.jpeg",
    imageAlt: "Plate compaction during cabro paving installation",
    sections: [
      { heading: "Choosing blocks before defining traffic", paragraphs: ["A private footpath and a turning area for delivery lorries do not have the same requirements. Confirm the heaviest expected vehicle and how often it will use the surface before choosing 60mm or 80mm cabro."], bullets: ["Describe normal and occasional traffic", "Identify braking and turning areas", "Do not specify decorative blocks for heavy traffic without checking suitability"] },
      { heading: "Ignoring weak ground or an inconsistent base", paragraphs: ["Soft spots, organic soil and poorly compacted fill can settle at different rates. Simply adding bedding sand over an uneven surface will not correct the underlying problem."], bullets: ["Remove unsuitable material where required", "Build and compact the base in appropriate layers", "Check levels throughout preparation rather than only at the end"] },
      { heading: "Treating drainage and edges as finishing details", paragraphs: ["Water needs a planned route off or through the paved area. Unrestrained edges can spread, allowing joints to open and blocks to move."], bullets: ["Set falls toward confirmed outlets", "Coordinate channels and inspection covers before laying", "Install suitable edge restraints around exposed boundaries", "Fill joints and complete final compaction consistently"] },
    ],
  },
  {
    slug: "cabro-maintenance-repair-guide",
    title: "Cabro Maintenance and Repair Guide",
    description: "Practical guidance for cleaning cabro, managing weeds and joint sand, lifting stained blocks, and investigating settlement or drainage problems.",
    intro: "Interlocking cabro can be maintained and locally repaired without replacing an entire surface. The right response depends on whether the issue is on the surface, in the joints or in the supporting base.",
    published: NEW_GUIDE_DATE,
    modified: NEW_GUIDE_DATE,
    image: "/images/products/cabro/mirror-pavers-kerb-closeup.jpeg",
    imageAlt: "Close view of cabro paving joints and kerb edge restraint",
    sections: [
      { heading: "Routine cleaning and joint care", paragraphs: ["Sweep away soil and organic debris before it builds up in the joints. Use cleaning methods suitable for concrete pavers, test any product on a small hidden area and avoid washing joint material out with uncontrolled high pressure."], bullets: ["Remove leaves and soil from drainage routes", "Replace lost jointing sand with a compatible material", "Deal with spills promptly without spreading them across the surface"] },
      { heading: "When individual blocks can be lifted", paragraphs: ["A stained, chipped or disturbed block can often be lifted and replaced if a matching unit is available. Blocks may also be lifted temporarily to reach a service below the paving."], bullets: ["Photograph the pattern before lifting", "Protect reusable blocks from damage", "Restore the bedding layer and joint fill before final compaction"] },
      { heading: "Settlement needs diagnosis, not a cosmetic patch", paragraphs: ["A low spot can indicate a failed base, water movement or soft ground. Adding loose sand on top or replacing only the visible blocks may hide the symptom without correcting the cause."], bullets: ["Check where water enters and exits", "Open enough area to rebuild the affected support", "Correct levels and restraints before relaying blocks"] },
    ],
  },
  {
    slug: "proper-drainage-protects-cabro-driveway",
    title: "How Proper Drainage Protects a Cabro Driveway",
    description: "See how levels, falls, channels, kerbs and outlets work together to protect a cabro driveway and its supporting base from water damage.",
    intro: "Cabro is not a substitute for a drainage plan. Water must be directed away from buildings and prevented from washing through or softening the layers that support the paving.",
    published: NEW_GUIDE_DATE,
    modified: NEW_GUIDE_DATE,
    image: "/images/products/kerbs-drainage/invert-block-drainage-channels.jpeg",
    imageAlt: "Precast invert-block drainage channels used beside paved surfaces",
    sections: [
      { heading: "Plan levels before excavation and base work", paragraphs: ["The finished level must relate to gates, door thresholds, neighbouring ground, existing drains and road connections. Trying to create a fall only in the thin bedding layer leads to inconsistent support."], bullets: ["Identify the safe discharge point", "Keep water away from walls and entrances", "Account for long runs, flat areas and changes in direction"] },
      { heading: "Use the right combination of falls and drainage units", paragraphs: ["Some sites can drain over the surface to a safe edge. Others need kerbs, channels, invert blocks or collection points. The selection depends on site levels and expected water flow, not appearance alone."], bullets: ["Keep channels accessible for cleaning", "Coordinate crossings and culverts where vehicles pass", "Avoid outlets that simply transfer water to an unstable edge"] },
      { heading: "Watch for warning signs after installation", paragraphs: ["Standing water, washed-out joint sand, damp edges and recurring settlement all justify investigation. Clearing a blocked outlet early is simpler than rebuilding a softened base later."], bullets: ["Inspect after heavy rain", "Remove debris from channels and outlets", "Repair broken edge restraints before movement spreads"] },
    ],
  },
  {
    slug: "coloured-vs-plain-cabro-blocks",
    title: "Coloured vs Plain Cabro Blocks: What Should You Choose?",
    description: "Compare plain grey and coloured cabro blocks for visual design, cleaning, replacement planning, traffic areas and quotation factors.",
    intro: "Plain and coloured cabro can use the same practical paving principles. The decision is usually about visual priorities, maintenance expectations, availability and how much of the area needs a feature colour.",
    published: NEW_GUIDE_DATE,
    modified: NEW_GUIDE_DATE,
    image: "/images/products/cabro/red-yellow-paver-stockyard.jpeg",
    imageAlt: "Plain grey and coloured cabro paving blocks in stock",
    sections: [
      { heading: "Where plain grey works well", paragraphs: ["Grey cabro gives large surfaces a neutral, practical finish. It can suit parking areas, service yards, driveways and projects where markings, landscaping or architecture provide the main visual interest."], bullets: ["Simple to combine with contrasting borders", "Practical for large continuous areas", "Confirm current profile and thickness availability"] },
      { heading: "Use colour with a clear purpose", paragraphs: ["Coloured blocks can define an entrance, pedestrian route, parking bay or decorative border. Restrained colour planning is often easier to maintain than a complex mix across the whole site."], bullets: ["Choose colours in daylight using a physical sample where possible", "Plan how replacement blocks will be matched later", "Expect natural surface variation in concrete products"] },
      { heading: "Compare complete quotations", paragraphs: ["Pigment, pattern complexity, cutting, project size and current production inputs can affect a quotation. Compare the whole specification rather than assuming every colour or layout has the same cost."], bullets: ["Confirm plain and coloured quantities separately", "Include border and feature areas in the drawing", "Request current verified pricing instead of relying on old figures"] },
    ],
  },
  {
    slug: "cabro-paving-commercial-industrial-sites",
    title: "Cabro Paving for Commercial and Industrial Sites",
    description: "Plan cabro paving for commercial parking, loading areas and industrial yards by considering traffic, turning, drainage, base preparation and maintenance access.",
    intro: "Commercial and industrial paving must be planned around operations. Vehicle loads, turning, drainage, access hours and future maintenance all influence the correct cabro and installation approach.",
    published: NEW_GUIDE_DATE,
    modified: NEW_GUIDE_DATE,
    image: "/images/products/cabro/estate-road-brick-pavers-kerbs.jpeg",
    imageAlt: "Cabro paving with kerb edging on a vehicle access road",
    sections: [
      { heading: "Document traffic before specifying the paving", paragraphs: ["List the heaviest vehicles, how frequently they enter, where they turn and where loads are concentrated. A visitor parking bay, delivery route and loading area may need different treatment within the same property."], bullets: ["Map entrances, turning circles and loading points", "Separate pedestrian paths from vehicle routes", "Confirm whether 80mm heavy-duty cabro is required"] },
      { heading: "Base, drainage and restraints are part of the system", paragraphs: ["The blocks distribute load into the layers below. A suitable, consistently compacted base and secure edges are essential, while drainage must keep runoff from saturating the support."], bullets: ["Assess existing ground and any filled areas", "Coordinate kerbs, channels and culvert crossings", "Plan finished levels around doors, ramps and public roads"] },
      { heading: "Plan installation around site operations", paragraphs: ["Commercial sites may need phased work so access can continue. Agree delivery areas, working windows, temporary routes and the sequence for opening completed sections."], bullets: ["Keep materials and equipment clear of emergency access", "Allow for final joint filling and compaction", "Record the block profile and retain spare units for local repairs"] },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}
