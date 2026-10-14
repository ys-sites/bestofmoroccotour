'use client';

import LegalPage from "../components/legal-page";
import { termsPage } from "@/data/conditionsData";

export default function ConditionsPage() {
  return (
    <LegalPage
      eyebrow={{ EN: "Terms of Business", FR: "Conditions de vente" }}
      title={{ EN: "Terms & Conditions", FR: "Conditions générales" }}
      crumbs={[
        { name: { FR: "Accueil", EN: "Home" }, path: "/" },
        { name: { FR: "Conditions générales", EN: "Terms & Conditions" }, path: "/conditions" },
      ]}
      data={termsPage}
      related={[
        { href: "/cancellation-policy", label: { EN: "Cancellation Policy", FR: "Politique d'annulation" } },
        { href: "/founder", label: { EN: "Founder Profile", FR: "Profil du fondateur" } },
      ]}
    />
  );
}
