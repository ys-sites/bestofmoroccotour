import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeContactForm from "../components/home-contact-form";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact — Agence de Voyage Maroc Montréal",
  description: "Contactez notre équipe pour planifier votre voyage sur mesure au Maroc. Forfaits golf, circuits culturels, MICE. Réponse sous 24h. +1 514 919 6381",
  path: "/contact",
  image: "/og/contact.jpg",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {/* Dark header band — same pattern as heritage page */}
      <div className="relative bg-[#1C1A17]" style={{ height: "76px" }}>
        <Navbar />
      </div>

      <main>
        <HomeContactForm />
      </main>

      <Footer />
    </div>
  );
}
