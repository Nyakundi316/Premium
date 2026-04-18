import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Culverts Kenya | Reinforced Drainage Culverts | Premium Concrete PM",
  description:
    "Heavy-duty reinforced concrete culverts for road drainage, stormwater management and estate access. Available in 300mm to 1200mm sizes. Supply and delivery across Kenya.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
