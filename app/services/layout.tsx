import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabro Paving Services | Supply & Professional Installation | Premium Concrete PM",
  description:
    "Professional cabro paving services in Nairobi and Kiambu. From site assessment to installation — we supply and install interlocking cabro blocks for driveways, parking and commercial spaces.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
