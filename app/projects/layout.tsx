import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabro Paving Projects | Completed Installations | Premium Concrete PM",
  description:
    "View our completed cabro paving projects across Nairobi, Kiambu and Ruiru. Driveways, parking areas, estate roads and commercial spaces installed with premium interlocking pavers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
