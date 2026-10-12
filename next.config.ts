import type { NextConfig } from "next";
import { itinerarySeo } from "./data/itinerary-seo";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Legacy numeric tour URLs (/itineraries/6) -> keyword slugs
  async redirects() {
    return Object.entries(itinerarySeo).map(([id, seo]) => ({
      source: `/itineraries/${id}`,
      destination: `/itineraries/${seo.slug}`,
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
