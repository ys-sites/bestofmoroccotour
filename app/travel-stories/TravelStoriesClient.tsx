'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang, translate } from "../context/lang-context";

const t = {
  comingSoon: {
    FR: "Bientôt Disponible",
    EN: "Coming Soon"
  },
  heading: {
    FR: "Récits de Voyage",
    EN: "Travel Stories"
  },
  description: {
    FR: "Nos journaux de voyage curationnés sont en préparation. Découvrez les histoires authentiques de nos voyageurs privilégiés — des moments intimes, des rencontres exceptionnelles et des expériences qui transforment une vie.",
    EN: "Our curated journey journals are on their way. Discover the authentic stories from our privileged travellers — intimate moments, exceptional encounters, and experiences that transform a lifetime."
  },
  subtitle: {
    FR: "Les histoires les plus mémorables de nos passages souverains seront partagées ici très bientôt.",
    EN: "The most memorable stories from our sovereign passages will be shared here very soon."
  },
  backButton: {
    FR: "Retour à l'Accueil",
    EN: "Back to Home"
  }
};

export default function TravelStoriesClient() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      <main className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-6 py-20 mt-24">
        <div className="max-w-2xl text-center space-y-8">
          {/* Coming Soon Badge */}
          <div className="inline-block">
            <span className="text-brand-gold font-mono text-[11px] tracking-[0.2em] uppercase">
              {translate(t.comingSoon, lang)}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight">
            {translate(t.heading, lang)}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 font-light">
            {translate(t.description, lang)}
          </p>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-zinc-500 font-light italic">
            {translate(t.subtitle, lang)}
          </p>

          {/* Back Button */}
          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 hover:bg-brand-gold hover:text-black text-white font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-luxury shadow-md cursor-pointer hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              {translate(t.backButton, lang)}
            </Link>
          </div>

          {/* Decorative Element */}
          <div className="pt-12">
            <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent w-24 mx-auto" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
