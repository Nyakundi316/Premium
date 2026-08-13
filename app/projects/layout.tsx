import type { Metadata } from "next";

const title = "Cabro Project Gallery & Paving Applications";
const description =
  "Explore cabro paving applications and product imagery for driveways, parking areas, estate roads and commercial spaces. Verified case studies will be added when complete project details are available.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Premium Cabro` },
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
