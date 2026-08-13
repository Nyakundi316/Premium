import type { Metadata } from "next";

const title = "Get a Free Cabro Quote";
const description =
  "Request a free quotation for cabro paving blocks, culverts or fencing posts. We provide detailed quotes covering materials, delivery and installation for projects across Kenya.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/quote" },
  openGraph: { title, description, url: "/quote" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
