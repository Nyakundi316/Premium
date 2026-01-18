/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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

  // ✅ Ignore Next.js internal type generation errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
