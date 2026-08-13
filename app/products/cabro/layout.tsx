import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { SITE, absoluteUrl } from "../../lib/site";
import { breadcrumbList, faqPage } from "../../lib/schema";
import { CABRO_FAQS } from "../../lib/cabro-faqs";

const pageTitle = "Cabro Blocks in Kenya | 60mm & 80mm Interlocking Pavers";
const pageDescription =
  "Buy cabro blocks in Kenya direct from the manufacturer. 60mm and 80mm interlocking paving blocks in many patterns and colours, with delivery and professional installation across Nairobi and Kiambu.";

export const metadata: Metadata = {
  title: { absolute: `${pageTitle} | ${SITE.name}` },
  description: pageDescription,
  alternates: { canonical: "/products/cabro" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/cabro",
    images: [{ url: "/images/products/cabro/Hero2.jpeg" }],
  },
};

const productData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cabro Paving Blocks",
  description:
    "Machine-pressed interlocking cabro paving blocks available in 60mm and 80mm thickness. Suitable for driveways, parking areas, estates and commercial projects.",
  image: [
    absoluteUrl("/images/products/cabro/Hero2.jpeg"),
    absoluteUrl("/images/products/cabro/grey.jpeg"),
    absoluteUrl("/images/products/cabro/trihex groove.jpeg"),
  ],
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.url}/#business` },
  category: "Construction Materials",
};

const breadcrumbs = breadcrumbList([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cabro Blocks", path: "/products/cabro" },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={productData} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqPage([...CABRO_FAQS])} />
      {children}
    </>
  );
}
