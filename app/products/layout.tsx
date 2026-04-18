import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Products | Cabro Blocks, Culverts & Fencing Posts | Premium Concrete PM",
  description:
    "Browse our range of premium concrete products — cabro paving blocks (60mm & 80mm), reinforced culverts, and concrete fencing posts. Factory-direct supply across Kenya.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
