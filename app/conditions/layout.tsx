import type { Metadata } from "next";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

// page.tsx is a client component, so its metadata lives here
export const metadata: Metadata = pageMetadata({
  title: "Conditions Générales de Vente — Terms & Conditions",
  description: "Nos conditions générales de vente : tarifs, modes de paiement, dépôts, politique d'annulation et modifications de réservation pour vos voyages au Maroc.",
  path: "/conditions",
});

export default function ConditionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Conditions", path: "/conditions" },
        ])}
      />
      {children}
    </>
  );
}
