// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { Figtree } from "next/font/google";

// Load Figtree font
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-figtree",
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
    <html lang="en" className={figtree.variable}>
      <body
        className="
          font-figtree
          min-h-screen
          bg-[#F9FAFB]          /* ← off-white (premium, not pure white) */
          text-[#0F172A]       /* ← deep slate text */
          overflow-x-hidden
        "
      >
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="pt-20 md:pt-24">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
