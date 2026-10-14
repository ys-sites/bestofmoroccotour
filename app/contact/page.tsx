import type { Metadata } from "next";
import Navbar from "../components/navbar";
import FooterEditorial from "../components/footer-editorial";
import HomeContactForm from "../components/home-contact-form";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact — Agence de Voyage Maroc Montréal",
  description: "Contactez notre équipe pour planifier votre voyage sur mesure au Maroc. Forfaits golf, circuits culturels, MICE. Réponse sous 24h. +1 514 515 8382",
  path: "/contact",
  image: "/og/contact.jpg",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-zinc-900 font-body antialiased">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Navbar />

      <main>
        <HomeContactForm />
      </main>

      <FooterEditorial />
    </div>
  );
}
