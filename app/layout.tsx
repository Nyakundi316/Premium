// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Nunito } from "next/font/google";

// Load Nunito font
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
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
    <html lang="en" className={nunito.variable}>
      <body
        className={`
          font-nunito
          min-h-screen
          bg-gradient-to-b from-[#020617] via-[#020617] to-[#0B1220]
          text-[#E5E7EB]
        `}
      >
        <Navbar />
        <main className="pt-2 md:pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
