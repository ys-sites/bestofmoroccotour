import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItineraryClient from "./ItineraryClient";
import JsonLd from "../../components/json-ld";
import { itinerariesData } from "@/data/itineraries";
import { itinerarySeo, getItineraryIdFromSlug, getItineraryPath } from "@/data/itinerary-seo";
import { SITE_NAME, SITE_URL, breadcrumbJsonLd, pageMetadata, parsePrice } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

const cleanTitle = (title: string) => title.replace(/\s*\(\d+N\)\s*$/i, "");

async function resolveItinerary(params: Props["params"]) {
  const { slug } = await params;
  const id = getItineraryIdFromSlug(slug);
  const itinerary = id ? itinerariesData[id] : undefined;
  const seo = id ? itinerarySeo[id] : undefined;
  if (!id || !itinerary || !seo) return null;
  return { id, itinerary, seo };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await resolveItinerary(params);
  if (!resolved) return {};
  const { id, itinerary, seo } = resolved;

  return pageMetadata({
    title: `${cleanTitle(itinerary.title.EN)} — ${itinerary.duration.EN}`,
    description: seo.description,
    path: getItineraryPath(id),
    image: seo.ogImage,
    imageAlt: itinerary.title.EN,
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

  // Priced tours are also typed as Product so the "from" price can show in search results.
  // No aggregateRating: the site has no published reviews to back one.
  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": lowPrice ? ["TouristTrip", "Product"] : "TouristTrip",
    "@id": `${url}#trip`,
    name,
    description: seo.description,
    url,
    image: `${SITE_URL}${seo.ogImage}`,
    provider: { "@id": `${SITE_URL}/#agency` },
    itinerary: {
      "@type": "ItemList",
      itemListElement: seo.destinations.map((destination, idx) => ({
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

export const dynamic = "force-dynamic";
