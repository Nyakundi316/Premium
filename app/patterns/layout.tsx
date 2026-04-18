import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabro Block Patterns & Designs | Premium Concrete PM",
  description:
    "Explore our collection of cabro paving patterns — zigzag, trihex, hexagon, cobblestone, 3D and more. Find the right design for your driveway, parking or walkway project in Kenya.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
