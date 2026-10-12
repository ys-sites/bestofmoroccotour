import type { Metadata } from "next";
import ItinerariesClient from "./ItinerariesClient";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Luxury Morocco Itineraries — Golf & Cultural Tours",
  description: "Signature Morocco itineraries: golf packages in Rabat, Marrakech and Agadir, plus imperial city and desert tours. Private trips for Canadian travellers.",
  path: "/itineraries",
  image: "/og/itineraries.jpg",
});

export default function ItinerariesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Itineraries", path: "/itineraries" },
        ])}
      />
      <ItinerariesClient />
    </>
  );
}
