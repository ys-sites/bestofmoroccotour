import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { sitePages } from "@/lib/site-pages";

// Served at /sitemaps/pages/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
