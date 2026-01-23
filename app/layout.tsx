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
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

// ✅ SEO + App metadata
export const metadata: Metadata = {
  title: "Premium Concrete PM – Premium Paving Blocks & Solutions",
  description:
    "Transform your outdoor spaces with premium concrete paving blocks for driveways, patios, parking areas, and industrial sites. Built for strength, durability, and modern design.",
  applicationName: "Premium Concrete PM",
  keywords: [
    "Premium paving blocks",
    "Concrete paving Kenya",
    "Cabro blocks",
    "Driveway paving",
    "Industrial paving solutions",
    "Premium Concrete PM",
  ],
  themeColor: "#FFBF00",

  // ✅ Icons (your logo in public/images)
  // Make sure the file exists at: public/images/pm-logo.png
  icons: {
    icon: "/images/pm-logo.png",      // browser tab icon
    shortcut: "/images/pm-logo.png",  // pinned / quick icon
    // If later you add an Apple icon, you can do:
    // apple: "/images/pm-apple-icon.png",
  },
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
          bg-[#F9FAFB]
          text-[#0F172A]
          antialiased
          overflow-x-hidden
        "
      >
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
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
