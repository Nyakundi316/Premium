// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-[#f9f8f5] to-[#f5f4f0] text-[#1e3a8a]">
        {/* Navbar fixed at top */}
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
