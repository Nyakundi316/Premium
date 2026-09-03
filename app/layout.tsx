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
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1724335618797210";

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

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- Meta requires this exact noscript tracking-pixel pattern. */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

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
