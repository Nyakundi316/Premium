import type { Metadata } from "next";

const title = "Concrete Blocks Kenya | Hollow & Solid Walling Blocks";
const description =
  "Browse machine-cut hollow and solid concrete blocks for walling, boundary walls and general construction, with bulk supply support across Kenya.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Premium Cabro` },
  description,
  alternates: { canonical: "/products/concrete-blocks" },
  openGraph: { title, description, url: "/products/concrete-blocks" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
