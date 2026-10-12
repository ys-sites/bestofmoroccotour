import type { Metadata } from "next";
import MarrakechGolfClient from "@/app/golf-itineraries/marrakech/MarrakechGolfClient";
import JsonLd from "@/app/components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Marrakech Golf Packages — Luxury Golf Holidays in Morocco",
  description: "Book our exclusive golf itineraries in Marrakech, Morocco. Stay at Hotel du Golf or Jaal Riad Hotel with round-trip flights, transfers and championship golf.",
  path: "/golf-itineraries/marrakech",
  image: "/og/golf-marrakech.jpg",
});

export default function MarrakechGolfPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Itineraries", path: "/itineraries" },
          { name: "Marrakech Golf", path: "/golf-itineraries/marrakech" },
        ])}
      />
      <MarrakechGolfClient />
    </>
  );
}

export const dynamic = "force-dynamic";
