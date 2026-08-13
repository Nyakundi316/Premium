import type { Metadata } from "next";

const title = "Cabro Paving Services | Supply & Professional Installation";
const description =
  "Professional cabro paving services in Nairobi and Kiambu. From site assessment to installation — we supply and install interlocking cabro blocks for driveways, parking and commercial spaces.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Premium Cabro` },
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
