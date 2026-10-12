import type { Metadata } from "next";
import CustomTripClient from "./CustomTripClient";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Build Your Exclusive Journey — Custom Luxury Travel to Morocco",
  description: "Design your perfect luxury trip to Morocco. Select destinations, activities, and duration. Our bilingual concierge team will handle everything else.",
  path: "/custom-trip",
  image: "/og/custom-trip.jpg",
});

export default function CustomTripPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Custom Trip", path: "/custom-trip" },
        ])}
      />
      <CustomTripClient />
    </>
  );
}
