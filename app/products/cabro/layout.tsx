import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Cabro Blocks Kenya | 60mm & 80mm Interlocking Pavers | Premium Concrete PM",
  description:
    "Buy premium cabro blocks in Nairobi. Machine-pressed 60mm and 80mm interlocking cabro paving blocks for driveways, parking lots, estates and commercial areas. Supply and installation across Kenya.",
  keywords: [
    "cabro blocks Kenya",
    "cabro blocks price",
    "60mm cabro blocks",
    "80mm cabro blocks",
    "interlocking pavers Nairobi",
    "cabro paving blocks",
    "buy cabro blocks Kenya",
  ],
};

const productData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cabro Paving Blocks",
  description:
    "Machine-pressed interlocking cabro paving blocks available in 60mm and 80mm thickness. Suitable for driveways, parking areas, estates and commercial projects.",
  brand: { "@type": "Brand", name: "Premium Concrete PM" },
  category: "Construction Materials",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    areaServed: { "@type": "Country", name: "Kenya" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={productData} />
      {children}
    </>
  );
}
