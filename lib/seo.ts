import type { Metadata } from "next";

export const SITE_URL = "https://www.bestofmoroccotour.com";
export const SITE_NAME = "Best of Morocco Tours";
export const DEFAULT_OG_IMAGE = "/images/bestofmorocco/img_slides_slide_2.jpg";

// TODO: paste the Google Business Profile share link (e.g. https://maps.app.goo.gl/...)
// It is added to the TravelAgency schema's sameAs once set.
export const GBP_URL = process.env.NEXT_PUBLIC_GBP_URL ?? "";

interface PageMetadataInput {
  // Without the brand; the root layout's title template appends " | Best of Morocco Tours"
  title: string;
  description: string;
  // Path of the page, used for the self-referencing canonical and og:url
  path: string;
  // 1200×630 image under /public/og
  image?: string;
  imageAlt?: string;
  robots?: Metadata["robots"];
}

// Page-level metadata replaces the layout's openGraph/twitter objects wholesale,
// so every page builds them through here to keep canonical, OG and Twitter tags in sync.
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, imageAlt, robots }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const images = [{ url: image, width: 1200, height: 630, alt: imageAlt ?? title }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "fr_CA",
      alternateLocale: ["en_CA"],
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    ...(robots ? { robots } : {}),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

// "Starting from 3,879" -> 3879; "On request" -> null
export function parsePrice(text?: string | null): number | null {
  if (!text || typeof text !== "string") return null;
  const match = text.replace(/[\s ]/g, "").match(/(\d[\d,.]*)/);
  if (!match) return null;
  const value = Number(match[1].replace(/,/g, ""));
  return Number.isFinite(value) && value > 0 ? value : null;
}
