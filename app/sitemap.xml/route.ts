import { SITE_URL } from "@/lib/seo";

// Sitemap index pointing at the split sitemaps under app/sitemaps/
const SITEMAPS = ["pages", "tours", "images"];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAPS.map((name) => `  <sitemap><loc>${SITE_URL}/sitemaps/${name}/sitemap.xml</loc></sitemap>`).join("\n")}
</sitemapindex>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
