// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // If you ALSO use other domains, list them here too
    // domains: ["example.com"],
  },
};

module.exports = nextConfig;
