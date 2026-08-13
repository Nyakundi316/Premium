import type { Metadata } from "next";

const title = "Concrete Products | Cabro Blocks, Culverts & Fencing Posts";
const description =
  "Browse our range of premium concrete products — cabro paving blocks (60mm & 80mm), reinforced culverts, and concrete fencing posts. Factory-direct supply across Kenya.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Premium Cabro` },
  description,
  alternates: { canonical: "/products" },
  openGraph: { title, description, url: "/products" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
