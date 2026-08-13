import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import AnalyticsEvents from "./components/AnalyticsEvents";
import JsonLd from "./components/JsonLd";
import { SITE } from "./lib/site";
import { localBusiness, organization, webSite } from "./lib/schema";

const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-REPZTGDZ4Z";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  // Each indexable page sets its own title/canonical; this is only the fallback.
  title: {
    default: SITE.defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.defaultDescription,

  applicationName: SITE.name,

  openGraph: {
    siteName: SITE.name,
    locale: "en_KE",
    type: "website",
    images: [{ url: SITE.defaultOgImage, alt: "Premium Cabro paving blocks and installation in Kenya" }],
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: SITE.googleSiteVerification
    ? { google: SITE.googleSiteVerification }
    : undefined,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFC20E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden antialiased">
        <JsonLd data={localBusiness} />
        <JsonLd data={organization} />
        <JsonLd data={webSite} />

        <Navbar />

        <main className="pt-20 md:pt-24">{children}</main>

        <Footer />

        <FloatingWhatsAppButton />
        <AnalyticsEvents />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "${gaId}");
          `}
        </Script>
      </body>
    </html>
  );
} 
