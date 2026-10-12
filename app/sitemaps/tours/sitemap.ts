import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { itinerarySeo, getItineraryPath } from "@/data/itinerary-seo";

// Served at /sitemaps/tours/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(itinerarySeo).map((id) => ({
    url: `${SITE_URL}${getItineraryPath(id)}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
