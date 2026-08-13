import type { Metadata } from "next";

const title = "Concrete Retaining Walls Kenya | Slope & Erosion Solutions";
const description = "Explore concrete retaining solutions for sloped compounds, landscaping and erosion control, with site-specific product guidance from Premium Cabro.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Premium Cabro` },
  description,
  alternates: { canonical: "/products/retaining-walls" },
  openGraph: { title, description, url: "/products/retaining-walls" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
