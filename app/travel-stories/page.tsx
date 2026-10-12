import type { Metadata } from "next";
import TravelStoriesClient from "./TravelStoriesClient";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Travel Stories — Curated Journey Journals",
  description: "Read authentic stories, journals, and experiences from our privileged travellers exploring Morocco with Merveilles et Voyages.",
  path: "/travel-stories",
});

export default function TravelStoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Travel Stories", path: "/travel-stories" },
        ])}
      />
      <TravelStoriesClient />
    </>
  );
}
