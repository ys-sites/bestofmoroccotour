import type { Metadata } from "next";
import AgadirGolfClient from "./AgadirGolfClient";
import JsonLd from "../../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Agadir Golf Packages — Luxury Golf Holidays in Morocco",
  description: "Book our exclusive golf itineraries in Agadir, Morocco. Stay at top 5-star resorts with round-trip flights, transfers, and 4 rounds of championship golf.",
  path: "/golf-itineraries/agadir",
  image: "/og/golf-agadir.jpg",
});

export default function AgadirGolfPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Itineraries", path: "/itineraries" },
          { name: "Agadir Golf", path: "/golf-itineraries/agadir" },
        ])}
      />
      <AgadirGolfClient />
    </>
  );
}

export const dynamic = "force-dynamic";
