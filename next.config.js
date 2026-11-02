import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV === "development";

// script-src: 'unsafe-inline' is required by Next.js bootstrap scripts and the
// inline gtag / Meta Pixel snippets in app/layout.tsx. 'unsafe-eval' is dev-only (React Refresh).
// Meta Pixel needs connect.facebook.net (fbevents.js) and www.facebook.com (event beacons).
// GA4 sends hits to analytics.google.com / www.google.com, and Google Signals adds
// doubleclick + the local Google domain (google.co.ke) — per Google's GA4 CSP guide.
const analyticsHosts = [
  "https://*.googletagmanager.com",
  "https://*.google-analytics.com",
  "https://analytics.google.com",
  "https://*.analytics.google.com",
  "https://*.g.doubleclick.net",
  "https://www.google.com",
  "https://www.google.co.ke",
  "https://www.facebook.com",
].join(" ");

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://connect.facebook.net`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  `img-src 'self' data: blob: https://images.pexels.com https://upload.wikimedia.org ${analyticsHosts}`,
  `connect-src 'self' https://premiumback-end-1.onrender.com https://connect.facebook.net ${analyticsHosts}`,
  // Meta falls back to a hidden-iframe form POST when a beacon can't be sent.
  "frame-src 'self' https://www.facebook.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://www.facebook.com",
  "frame-ancestors 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(self), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "premiumcabro.com" }],
        destination: "https://www.premiumcabro.com/:path*",
        permanent: true,
      },
      {
        source: "/service-areas/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
