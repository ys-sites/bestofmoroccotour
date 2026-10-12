import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { sitePages } from "@/lib/site-pages";
import { itinerariesData } from "@/data/itineraries";
import { itinerarySeo, getItineraryPath } from "@/data/itinerary-seo";

// Served at /sitemaps/images/sitemap.xml — image sitemap entries for every indexable page
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (src: string) => `${SITE_URL}${src}`;

  const pages = sitePages.map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
    images: [...page.images, page.ogImage].map(abs),
  }));

  const tours = Object.entries(itinerarySeo).flatMap(([id, seo]) => {
    const itinerary = itinerariesData[id];
    if (!itinerary) return [];
    const images = Array.from(new Set([itinerary.image, itinerary.contentImage, seo.ogImage]));
    return [{ url: `${SITE_URL}${getItineraryPath(id)}`, images: images.map(abs) }];
  });

  return [...pages, ...tours];
}
