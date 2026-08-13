export type ServiceArea = {
  slug: string;
  name: string;
  intro: string;
  planning: string;
  commonUses: string[];
  accessNote: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "nairobi",
    name: "Nairobi",
    intro: "Cabro block supply and paving installation for homes, apartments, offices, parking areas and commercial sites across Nairobi.",
    planning: "Nairobi projects often need careful delivery scheduling, space for offloading and a drainage plan that suits built-up plots. Share the neighbourhood, approximate area and vehicle use so the team can advise on access and block thickness.",
    commonUses: ["Residential driveways and compounds", "Apartment and office parking", "Walkways and commercial entrances"],
    accessNote: "For restricted sites, confirm gate width, working hours and where blocks and base materials can be stored before delivery.",
  },
  {
    slug: "kiambu",
    name: "Kiambu",
    intro: "Factory-direct cabro paving blocks, kerbs and installation support for residential and commercial sites in Kiambu.",
    planning: "Sites in Kiambu range from compact town plots to larger compounds. Ground levels, runoff direction and the expected traffic should be assessed before choosing between 60mm residential and 80mm heavy-duty cabro.",
    commonUses: ["Home compounds and driveways", "Estate roads and shared parking", "Kerbs and surface-water channels"],
    accessNote: "Send a location pin and site photos so delivery distance, truck access and any site preparation can be included accurately.",
  },
  {
    slug: "ruiru",
    name: "Ruiru",
    intro: "Cabro supply and installation for homes, rental developments, estates and business premises in Ruiru and nearby areas.",
    planning: "Fast-growing residential areas commonly need durable parking, driveway and estate-road surfaces. Good excavation, compacted base layers and edge restraints matter as much as the paving-block pattern.",
    commonUses: ["Rental and apartment parking", "Estate entrances and internal roads", "Residential driveways and paths"],
    accessNote: "Tell us whether the surface will carry cars, delivery vehicles or lorries; traffic level determines the appropriate block and base specification.",
  },
  {
    slug: "thika",
    name: "Thika",
    intro: "Cabro blocks and paving installation for residential, institutional and heavier-traffic sites in Thika.",
    planning: "For parking yards, workshops and access roads, load and turning movements should guide both thickness and laying pattern. Drainage routes should be planned before the base is finished.",
    commonUses: ["Home and institution compounds", "Parking and loading areas", "Access roads, kerbs and drainage"],
    accessNote: "Include the site location, area in square metres and heaviest expected vehicle when requesting a quotation.",
  },
  {
    slug: "juja",
    name: "Juja",
    intro: "Cabro paving supply and installation for homes, apartments, student housing and commercial compounds in Juja.",
    planning: "Multi-unit developments need practical circulation, parking and stormwater control. A simple, repeatable paving layout can reduce cutting while kerbs protect the finished edges.",
    commonUses: ["Apartment and student-housing compounds", "Home driveways and patios", "Shopfront parking and walkways"],
    accessNote: "Photos showing existing ground, slopes and drainage outlets help identify preparation work before materials are delivered.",
  },
  {
    slug: "githunguri",
    name: "Githunguri",
    intro: "Cabro blocks, concrete products and paving support from Premium Cabro’s Githunguri Road base for nearby homes, farms and developments.",
    planning: "Local projects can combine cabro paving with concrete kerbs, drainage channels, culverts or fencing posts. Each item is quoted from confirmed quantities and site requirements.",
    commonUses: ["Farm and home access areas", "Residential compounds and paths", "Culverts, fencing posts and drainage products"],
    accessNote: "Share a location pin and quantities. For installation, also provide approximate area, ground condition and expected traffic.",
  },
  {
    slug: "limuru",
    name: "Limuru",
    intro: "Cabro block supply, delivery planning and paving installation for homes, farms, institutions and commercial sites in Limuru.",
    planning: "Limuru sites can include sloping ground and exposed runoff routes, so levels and drainage need attention before paving begins. The expected vehicle load should guide both cabro thickness and base preparation.",
    commonUses: ["Home and farm access areas", "School, church and institution compounds", "Driveways, paths and parking areas"],
    accessNote: "Provide a location pin, site photos and details of slopes or soft ground so delivery access and preparation can be assessed before quoting.",
  },
];

export function getServiceArea(slug: string) {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}
