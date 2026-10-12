import type { Metadata } from "next";
import AgenceDeVoyageMontrealClient from "./AgenceDeVoyageMontrealClient";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Agence de Voyage à Montréal & Mirabel — Golf, Luxe & MICE",
  description: "Agence de voyage de prestige à Mirabel pour Montréal, Laval et la Rive-Nord : forfaits golf au Maroc, voyages de luxe sur mesure et solutions MICE.",
  path: "/agence-de-voyage-montreal",
  image: "/og/agence-de-voyage-montreal.jpg",
});

export default function AgenceDeVoyageMontrealPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Agence de voyage Montréal", path: "/agence-de-voyage-montreal" },
        ])}
      />
      <AgenceDeVoyageMontrealClient />
    </>
  );
}

export const dynamic = "force-dynamic";
