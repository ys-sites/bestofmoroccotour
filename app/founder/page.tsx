import type { Metadata } from "next";
import JsonLd from "../components/json-ld";
import FounderClient from "./FounderClient";
import { SITE_URL, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Founder Profile — Ayoub Sadeddine",
  description: "Meet Ayoub Sadeddine, CEO & founder of Best of Morocco Tours: Moroccan Berber, licensed tour guide (Ministry of Tourism Licence No. 2816) with 20+ years in Moroccan tourism.",
  path: "/founder",
  image: "/images/bestofmorocco/img_team_team-1.jpg",
  imageAlt: "Ayoub Sadeddine",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/founder#person`,
  name: "Ayoub Sadeddine",
  jobTitle: "CEO & Founder",
  image: `${SITE_URL}/images/bestofmorocco/img_team_team-1.jpg`,
  url: `${SITE_URL}/founder`,
  birthPlace: { "@type": "Place", name: "Marrakech, Morocco" },
  knowsLanguage: ["English", "French", "Arabic", "Berber", "Spanish"],
  worksFor: { "@type": "TravelAgency", "@id": `${SITE_URL}/#agency`, name: "Best of Morocco Tours" },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Institut de tourisme et d'hôtellerie du Québec (ITHQ)" },
    { "@type": "EducationalOrganization", name: "ISAT Fes" },
    { "@type": "EducationalOrganization", name: "ISTHT El Jadida" },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          personJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Founder Profile", path: "/founder" },
          ]),
        ]}
      />
      <FounderClient />
    </>
  );
}
