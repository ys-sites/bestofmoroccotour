// SEO data for itinerary pages, keyed by itinerary id (same keys as itinerariesData).
// Kept free of path aliases so next.config.ts can import it for the legacy-URL redirects.

export interface ItinerarySeo {
  slug: string;
  // ~150-160 chars; shown in search results
  description: string;
  // Main destination(s), used in TouristTrip schema
  destinations: string[];
  // Breadcrumb parent (category page) for this tour
  parent: { name: { FR: string; EN: string }; path: string };
  // og:image rendered at 1200×630 by scripts/generate-og-images.mjs
  ogImage: string;
}

const GOLF_AGADIR = { name: { FR: "Golf Agadir", EN: "Agadir Golf" }, path: "/golf-itineraries/agadir" };
const GOLF_MARRAKECH = { name: { FR: "Golf Marrakech", EN: "Marrakech Golf" }, path: "/golf-itineraries/marrakech" };
const ITINERARIES = { name: { FR: "Itinéraires", EN: "Itineraries" }, path: "/itineraries" };

export const itinerarySeo: Record<string, ItinerarySeo> = {
  "10": {
    slug: "rabat-golf-royal-dar-es-salam",
    description:
      "Golf trip to Rabat, Morocco: 7 nights at The Ritz-Carlton, rounds on Royal Golf Dar Es Salam's Red, Blue & Green courses, Fez day tour, flights from Montreal.",
    destinations: ["Rabat", "Fez"],
    parent: ITINERARIES,
    ogImage: "/og/tour-10.jpg",
  },
  "11": {
    slug: "agadir-golf-hilton-taghazout-7-nights",
    description:
      "Agadir golf package: 7 nights at the 5★ Hilton Taghazout Bay (pool view), 4 rounds on Tazegzout, Golf du Soleil & Les Dunes, flights from Montreal included.",
    destinations: ["Agadir", "Taghazout"],
    parent: GOLF_AGADIR,
    ogImage: "/og/tour-11.jpg",
  },
  "12": {
    slug: "agadir-golf-white-beach-resort",
    description:
      "All-inclusive, adults-only golf stay at the 5★ White Beach Resort in Agadir: 7 nights, 4 rounds of golf and round-trip flights from Montreal included.",
    destinations: ["Agadir"],
    parent: GOLF_AGADIR,
    ogImage: "/og/tour-12.jpg",
  },
  "13": {
    slug: "agadir-golf-hilton-taghazout-10-nights",
    description:
      "10-night Agadir golf package at the 5★ Hilton Taghazout Bay: garden view room, 6 rounds on Agadir's best courses and flights from Montreal included.",
    destinations: ["Agadir", "Taghazout"],
    parent: GOLF_AGADIR,
    ogImage: "/og/tour-13.jpg",
  },
  "14": {
    slug: "marrakech-golf-hotel-du-golf-10-nights",
    description:
      "10 nights all-inclusive at the 5★ Hotel du Golf in Marrakech with 6 championship golf rounds, private transfers and flights from Montreal included.",
    destinations: ["Marrakech"],
    parent: GOLF_MARRAKECH,
    ogImage: "/og/tour-14.jpg",
  },
  "15": {
    slug: "marrakech-golf-jaal-riad-10-nights",
    description:
      "Marrakech golf package: 10 nights at the adults-only 5★ Jaal Riad Hotel, 6 rounds of golf, breakfast or full board and direct flights from Montreal.",
    destinations: ["Marrakech"],
    parent: GOLF_MARRAKECH,
    ogImage: "/og/tour-15.jpg",
  },
  "16": {
    slug: "marrakech-golf-jaal-riad-7-nights",
    description:
      "7-night Marrakech golf getaway at the adults-only 5★ Jaal Riad Hotel with 4 championship rounds, transfers and direct flights from Montreal included.",
    destinations: ["Marrakech"],
    parent: GOLF_MARRAKECH,
    ogImage: "/og/tour-16.jpg",
  },
  "17": {
    slug: "tangier-golf-resort-7-nights",
    description:
      "Golf in Tangier, Morocco: 7 nights in a 5★ resort, 4 rounds on Royal Golf de Tanger (Africa's oldest course) and Al Houara, flights from Montreal.",
    destinations: ["Tangier"],
    parent: ITINERARIES,
    ogImage: "/og/tour-17.jpg",
  },
  "18": {
    slug: "michlifen-golf-resort-ifrane",
    description:
      "Luxury golf stay at the 5★ Michlifen Resort in Ifrane, Morocco, with rounds on the Jack Nicklaus Signature course at Michlifen Golf & Country Club.",
    destinations: ["Ifrane"],
    parent: ITINERARIES,
    ogImage: "/og/tour-18.jpg",
  },
  "6": {
    slug: "imperial-cities-desert-tour",
    description:
      "11-day Morocco tour of the imperial cities and the Sahara: Casablanca, Rabat, Fes, Meknes and the magnificent desert dunes of Merzouga.",
    destinations: ["Casablanca", "Rabat", "Fes", "Meknes", "Merzouga"],
    parent: ITINERARIES,
    ogImage: "/og/tour-6.jpg",
  },
  "7": {
    slug: "grand-imperial-tour-chefchaouen",
    description:
      "15-day grand tour of Morocco: Chefchaouen, Tangier, Fes, the Merzouga desert, Marrakech and Essaouira, organized by a Montreal-area travel agency.",
    destinations: ["Chefchaouen", "Tangier", "Fes", "Merzouga", "Marrakech", "Essaouira"],
    parent: ITINERARIES,
    ogImage: "/og/tour-7.jpg",
  },
  "8": {
    slug: "toubkal-trek-marrakech",
    description:
      "10-day Atlas adventure: 5 nights of guided trekking around Mount Toubkal from Kasbah du Toubkal, then 4 nights all-inclusive at a 5★ Marrakech hotel.",
    destinations: ["Toubkal", "Marrakech"],
    parent: ITINERARIES,
    ogImage: "/og/tour-8.jpg",
  },
  "9": {
    slug: "imperial-cities-tour",
    description:
      "8-day Morocco imperial cities tour covering Marrakech, Beni Mellal, Fes, Meknes, Rabat and Casablanca, with cultural visits included.",
    destinations: ["Marrakech", "Fes", "Meknes", "Rabat", "Casablanca"],
    parent: ITINERARIES,
    ogImage: "/og/tour-9.jpg",
  },
};

export function getItineraryPath(id: number | string): string {
  const seo = itinerarySeo[String(id)];
  return seo ? `/itineraries/${seo.slug}` : "/itineraries";
}

export function getItineraryIdFromSlug(slug: string): string | null {
  const entry = Object.entries(itinerarySeo).find(([, seo]) => seo.slug === slug);
  return entry ? entry[0] : null;
}
