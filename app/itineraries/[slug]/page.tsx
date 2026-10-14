import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItineraryClient from "./ItineraryClient";
import JsonLd from "../../components/json-ld";
import { itinerariesData } from "@/data/itineraries";
import { masterTours } from "@/data/bestOfMoroccoData";
import { itinerarySeo, getItineraryIdFromSlug, getItineraryPath } from "@/data/itinerary-seo";
import { SITE_NAME, SITE_URL, breadcrumbJsonLd, pageMetadata, parsePrice } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

const cleanTitle = (title: string) => (title || "").replace(/\s*\(\d+N\)\s*$/i, "");

export function generateStaticParams() {
  const slugs = new Set<string>();
  Object.values(itinerarySeo).forEach((seo) => {
    if (seo.slug) slugs.add(seo.slug);
  });
  masterTours.forEach((tour) => {
    if (tour.id) slugs.add(tour.id);
  });
  return Array.from(slugs).map((slug) => ({ slug }));
}

async function resolveItinerary(params: Props["params"]) {
  const { slug } = await params;
  if (!slug) return null;

  const decodedSlug = decodeURIComponent(slug).trim();
  const id = getItineraryIdFromSlug(decodedSlug) || decodedSlug;

  // Check masterTours
  const master = masterTours.find(
    (t) => t.id === id || t.id.toLowerCase() === id.toLowerCase() || t.id.toLowerCase() === decodedSlug.toLowerCase()
  );

  // Check itinerariesData
  const itinerary = id ? itinerariesData[id] : undefined;

  // Check itinerarySeo
  const seo = (id && itinerarySeo[id]) || (itinerarySeo[decodedSlug]) || (master ? {
    slug: master.id,
    description: master.overview,
    destinations: master.destinations || ["Morocco"],
    parent: { name: { FR: "Itinéraires", EN: "Itineraries" }, path: "/itineraries" },
    ogImage: master.image || "/images/bestofmorocco/img_tour_list_1.jpg",
  } : undefined);

  if (!itinerary && !master) return null;

  // Normalize string/object title, duration, cost
  const rawTitleEN = itinerary 
    ? (typeof itinerary.title === "object" ? itinerary.title.EN : String(itinerary.title))
    : master!.name;

  const rawTitleFR = itinerary 
    ? (typeof itinerary.title === "object" ? itinerary.title.FR : String(itinerary.title))
    : master!.name;

  const rawDurationEN = itinerary 
    ? (typeof itinerary.duration === "object" ? itinerary.duration.EN : String(itinerary.duration))
    : master!.duration;

  const rawCostEN = itinerary 
    ? (typeof itinerary.cost === "object" ? itinerary.cost.EN : String(itinerary.cost))
    : (master?.price || "On Request");

  const normalizedItinerary = {
    title: { FR: rawTitleFR, EN: rawTitleEN },
    duration: { FR: rawDurationEN, EN: rawDurationEN },
    cost: { FR: rawCostEN, EN: rawCostEN },
  };

  const normalizedSeo = seo || {
    slug: id,
    description: master?.overview || "Best of Morocco Tours - Private Customized Morocco Circuit",
    destinations: master?.destinations || ["Casablanca", "Marrakech"],
    parent: { name: { FR: "Itinéraires", EN: "Itineraries" }, path: "/itineraries" },
    ogImage: master?.image || "/images/bestofmorocco/img_tour_list_1.jpg",
  };

  return { 
    id: master ? master.id : id, 
    itinerary: normalizedItinerary, 
    seo: normalizedSeo 
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await resolveItinerary(params);
  if (!resolved) {
    return {
      title: "Itinerary | Best of Morocco Tours",
      description: "Explore authentic private Morocco tours, Imperial cities, and Sahara desert expeditions.",
    };
  }
  const { id, itinerary, seo } = resolved;
  const name = cleanTitle(itinerary.title.EN);

  return pageMetadata({
    title: `${name} — ${itinerary.duration.EN}`,
    description: seo.description,
    path: getItineraryPath(id),
    image: seo.ogImage,
    imageAlt: name,
  });
}

export default async function Page({ params }: Props) {
  const resolved = await resolveItinerary(params);
  if (!resolved) notFound();
  const { id, itinerary, seo } = resolved;

  const path = getItineraryPath(id);
  const url = `${SITE_URL}${path}`;
  const name = cleanTitle(itinerary.title.EN);
  const lowPrice = parsePrice(itinerary.cost.EN);

  const crumbs = [
    { name: { FR: "Accueil", EN: "Home" }, path: "/" },
    seo.parent,
    { name: { FR: cleanTitle(itinerary.title.FR), EN: name }, path },
  ];

  // TouristTrip and Product Schema for Rich Snippets on Google Search
  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": lowPrice ? ["TouristTrip", "Product"] : "TouristTrip",
    "@id": `${url}#trip`,
    name,
    description: seo.description,
    url,
    image: seo.ogImage.startsWith("http") ? seo.ogImage : `${SITE_URL}${seo.ogImage}`,
    provider: { 
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#agency`,
      name: SITE_NAME,
      telephone: "+1 514 515 8382",
      email: "info@bestofmoroccotour.com"
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: (seo.destinations || ["Morocco"]).map((destination, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "City",
          name: destination,
          containedInPlace: { "@type": "Country", name: "Morocco" },
        },
      })),
    },
    ...(lowPrice
      ? {
          brand: { "@type": "Brand", name: SITE_NAME },
          offers: {
            "@type": "AggregateOffer",
            lowPrice,
            priceCurrency: "CAD",
            availability: "https://schema.org/InStock",
            url,
          },
        }
      : {}),
  };

  return (
    <>
      <JsonLd
        data={[
          tripJsonLd,
          breadcrumbJsonLd(crumbs.map((crumb) => ({ name: crumb.name.EN, path: crumb.path }))),
        ]}
      />
      <ItineraryClient id={id} crumbs={crumbs} />
    </>
  );
}
