// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { Oswald } from "next/font/google";

// Load Oswald font
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premium Concrete PM – Premium Paving Blocks & Solutions",
  description:
    "Transform your outdoor spaces with modern concrete paving blocks for driveways, patios, parking areas, and industrial sites. Quality paving solutions with expert installation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oswald.variable}>
      <body
        className={`
          font-sans
          min-h-screen
          bg-[#0A1A2F]
          text-[#E5E7EB]
        `}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Site-wide Floating WhatsApp */}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
