import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import JsonLd from "./components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.premiummovers.co.ke"),
  title: "Premium Concrete PM | Cabro Blocks & Paving Solutions Kenya",
  description:
    "Premium cabro blocks and paving solutions in Nairobi, Kenya. Supply and installation of 60mm & 80mm interlocking cabro pavers for driveways, parking lots, estates and commercial projects.",
  applicationName: "Premium Concrete PM",
  keywords: [
    "cabro blocks Kenya",
    "cabro paving Nairobi",
    "interlocking pavers Kenya",
    "cabro blocks price Kenya",
    "80mm cabro blocks",
    "60mm cabro blocks",
    "driveway paving Kenya",
    "paving blocks Nairobi",
    "cabro installation Kenya",
    "concrete paving Kenya",
    "Premium Concrete PM",
    "industrial paving solutions",
  ],
  openGraph: {
    title: "Premium Concrete PM | Cabro Blocks & Paving Solutions Kenya",
    description:
      "Premium cabro blocks and paving solutions in Nairobi. Supply and installation of interlocking cabro pavers for driveways, parking, estates and commercial projects.",
    url: "https://www.premiummovers.co.ke",
    siteName: "Premium Concrete PM",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Concrete PM | Cabro Blocks & Paving Solutions Kenya",
    description:
      "Premium cabro blocks and paving solutions in Nairobi, Kenya.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFC20E",
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Premium Concrete PM",
  description:
    "Premium cabro blocks and paving solutions in Nairobi, Kenya. Supply and professional installation of interlocking cabro pavers.",
  url: "https://www.premiummovers.co.ke",
  telephone: "+254711789438",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Githunguri Road",
    addressLocality: "Kiambu",
    addressRegion: "Nairobi Region",
    addressCountry: "KE",
  },
  areaServed: ["Nairobi", "Kiambu", "Ruiru", "Thika", "Juja", "Machakos"],
  priceRange: "$$",
  openingHours: "Mo-Sa 07:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden antialiased">
        <JsonLd data={localBusinessData} />
        <Navbar />
        <main className="pt-20 md:pt-24">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
