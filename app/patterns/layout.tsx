import type { Metadata } from "next";

const title = "Cabro Block Patterns & Designs";
const description =
  "Explore our collection of cabro paving patterns — zigzag, trihex, hexagon, cobblestone, 3D and more. Find the right design for your driveway, parking or walkway project in Kenya.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/patterns" },
  openGraph: { title, description, url: "/patterns" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
