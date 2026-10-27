import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // The site now sells a single 7-day program at /tour; keep old tour links working.
  async redirects() {
    return [
      { source: "/tours", destination: "/tour", permanent: true },
      { source: "/tours/:slug", destination: "/tour", permanent: true },
    ];
  },
};

export default nextConfig;
