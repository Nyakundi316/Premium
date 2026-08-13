import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";
import { SERVICE_AREAS } from "./lib/locations";

// Stable content dates: update an entry's date when its page content
// meaningfully changes. Using build time here would falsely mark every URL
// as freshly modified on each deploy.
const SEO_REFRESH = new Date("2026-07-17");

type Entry = {
  path: string;
  lastModified?: Date;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  { path: "/", lastModified: SEO_REFRESH, changeFrequency: "weekly", priority: 1 },
  { path: "/products/cabro", lastModified: SEO_REFRESH, changeFrequency: "weekly", priority: 0.95 },
  { path: "/cabro-blocks-prices-kenya", lastModified: SEO_REFRESH, changeFrequency: "monthly", priority: 0.9 },
  { path: "/cabro-installation-nairobi", lastModified: SEO_REFRESH, changeFrequency: "monthly", priority: 0.9 },
  { path: "/guides/60mm-vs-80mm-cabro", lastModified: SEO_REFRESH, changeFrequency: "monthly", priority: 0.8 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/culverts", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/fencing-posts", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/kerbs-drainage", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/concrete-blocks", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/retaining-walls", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
  { path: "/patterns", changeFrequency: "monthly", priority: 0.8 },
  { path: "/applications", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/quote", changeFrequency: "monthly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locationEntries: Entry[] = SERVICE_AREAS.map(({ slug }) => ({
    path: `/locations/${slug}`,
    lastModified: SEO_REFRESH,
    changeFrequency: "monthly",
    priority: 0.75,
  }));
  return [...entries, ...locationEntries].map(({ path, ...rest }) => ({
    url: absoluteUrl(path),
    ...rest,
  }));
}
