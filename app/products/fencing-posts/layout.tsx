import type { Metadata } from "next";

const title = "Concrete Fencing Posts Kenya | 6ft-10ft Termite-Proof Posts";
const description =
  "Durable concrete fencing posts for plots, farms, estates and commercial perimeters. Termite-proof, low maintenance, available in 6ft to 10ft sizes across Kenya.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Premium Cabro` },
  description,
  alternates: { canonical: "/products/fencing-posts" },
  openGraph: { title, description, url: "/products/fencing-posts" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
