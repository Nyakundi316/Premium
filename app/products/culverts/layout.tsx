import type { Metadata } from "next";

const title = "Concrete Culverts Kenya | Reinforced Drainage Culverts";
const description =
  "Heavy-duty reinforced concrete culverts for road drainage, stormwater management and estate access. Available in 300mm to 1200mm sizes. Supply and delivery across Kenya.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Premium Cabro` },
  description,
  alternates: { canonical: "/products/culverts" },
  openGraph: { title, description, url: "/products/culverts" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
