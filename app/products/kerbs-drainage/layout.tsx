import type { Metadata } from "next";

const title = "Kerbstones & Drainage Channels Kenya | Precast Kerbs";
const description =
  "Precast kerbstones, invert blocks and drainage channels for road edging, driveways and stormwater control. Manufactured and delivered across Kenya.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Premium Cabro` },
  description,
  alternates: { canonical: "/products/kerbs-drainage" },
  openGraph: { title, description, url: "/products/kerbs-drainage" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
