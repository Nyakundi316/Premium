import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Premium Concrete PM – Paving Blocks",
  description:
    "Premium concrete paving blocks for homes, roads, parking areas and industrial sites. Cost-effective, strong, exquisite and durable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Floating navbar – appears on every page */}
      <body className="bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">
        <Navbar />

        {/* Page content */}
        <div className="min-h-screen pt-20">{children}</div>

        {/* Footer – appears on every page */}
        <Footer />
      </body>
    </html>
  );
}
