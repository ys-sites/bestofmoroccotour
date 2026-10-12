'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ItineraryPackageCard from "../../components/ItineraryPackageCard";
import { useLang, translate } from "../../context/lang-context";
import SmartVideo from "../../components/smart-video";
import { videoSources, videoAsset } from "../../../data/videoSources";
import { getItineraryPath } from "@/data/itinerary-seo";

export default function MarrakechGolfClient() {
  const { lang } = useLang();

  const text = {
    backToHome: {
      FR: "Retour à l'accueil",
      EN: "Back to Home"
    },
    collectionLabel: {
      FR: "Séjours de Golf de Prestige",
      EN: "Elite Golf Collections"
    },
    title: {
      FR: "Séjours Golf à Marrakech",
      EN: "Marrakech Golf Packages"
    },
    description: {
      FR: "Découvrez Marrakech, l'oasis impériale du Maroc. Jouez sur des parcours de championnat de renommée mondiale nichés face aux sommets enneigés de l'Atlas, et profitez du luxe exceptionnel de nos complexes partenaires 5★.",
      EN: "Discover Marrakech, the imperial oasis of Morocco. Play on world-renowned championship courses nestled against the snow-capped Atlas peaks, and experience the exceptional luxury of our 5★ partner resorts."
    },
    customTitle: {
      FR: "Besoin d'Informations ?",
      EN: "Need More Information?"
    },
    customDesc: {
      FR: "Vous souhaitez en savoir plus sur ce forfait ou planifier votre séjour ? Contactez notre conciergerie privée.",
      EN: "Would you like to know more about this package or plan your stay? Contact our private concierge."
    },
    customBtn: {
      FR: "Nous Contacter",
      EN: "Contact Us"
    }
  };

  const packageA = {
    tierLabel: { FR: "Premium", EN: "Premium" },
    rating: 5,
    image: "/images/royal_golf_marrakech_1.jpg",
    bannerText: {
      FR: "Séjour de luxe tout inclus — Palmeraie & vol direct",
      EN: "Luxury all-inclusive stay — Palmeraie & direct flight"
    },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flightIncluded: true,
    mealPlan: { FR: "Tout Compris", EN: "All Inclusive" },
    packageName: { FR: "Hôtel du Golf 5★", EN: "Hotel du Golf 5★" },
    highlights: [
      { FR: "6 rondes de golf de championnat à Marrakech", EN: "6 rounds of championship golf in Marrakech" },
      { FR: "Voiturette électrique (buggy) partagée incluse", EN: "Shared electric golf buggy included" },
      { FR: "Hébergement 5★ haut de gamme tout inclus", EN: "5★ premium all-inclusive accommodation" },
      { FR: "Vols directs disponibles depuis Montréal, NYC, Washington, LA, Toronto & grands hubs", EN: "Direct flights available from Montreal, NYC, Washington, LA, Toronto & major hubs" },
      { FR: "Transferts privés aéroport, hôtel et golfs", EN: "Private airport, hotel, and course transfers" }
    ],
    price: "5,899",
    originalPrice: { FR: "6 099 $", EN: "C$ 6,099" },
    currency: "C$",
    ctaLabel: { FR: "DÉCOUVRIR L'OFFRE", EN: "BOOK OFFER" },
    ctaHref: getItineraryPath(14),
    city: { FR: "Marrakech", EN: "Marrakech" }
  };

  const packageB = {
    tierLabel: { FR: "Exclusif", EN: "Exclusive" },
    rating: 5,
    image: "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal.webp",
    bannerText: {
      FR: "Évasion de luxe — Riad Adults Only & vol direct",
      EN: "Luxury escape — Adults Only Riad & direct flight"
    },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flightIncluded: true,
    mealPlan: { FR: "Petit-déjeuner ou Pension Complète", EN: "Breakfast or Full Board" },
    packageName: { FR: "Jaal Riad Hôtel 5★ (10N)", EN: "Jaal Riad Hotel 5★ (10N)" },
    highlights: [
      { FR: "6 rondes de golf de championnat à Marrakech", EN: "6 rounds of championship golf in Marrakech" },
      { FR: "Voiturette électrique (buggy) partagée incluse", EN: "Shared electric golf buggy included" },
      { FR: "Séjour de luxe 5★ réservé aux adultes (Riad)", EN: "Adults-only 5★ luxury Riad accommodation" },
      { FR: "Vols directs disponibles depuis Montréal, NYC, Washington, LA, Toronto & grands hubs", EN: "Direct flights available from Montreal, NYC, Washington, LA, Toronto & major hubs" },
      { FR: "Transferts privés aéroport, hôtel et golfs", EN: "Private airport, hotel, and course transfers" }
    ],
    price: "4,669",
    originalPrice: { FR: "4 869 $", EN: "C$ 4,869" },
    pricePrefix: { FR: "À partir de", EN: "Starting from" },
    currency: "C$",
    ctaLabel: { FR: "DÉCOUVRIR L'OFFRE", EN: "BOOK OFFER" },
    ctaHref: getItineraryPath(15),
    city: { FR: "Marrakech", EN: "Marrakech" }
  };

  const packageC = {
    tierLabel: { FR: "Premium", EN: "Premium" },
    rating: 5,
    image: "/images/royal_golf_marrakech_2.jpg",
    bannerText: {
      FR: "Séjour court — Riad de prestige & vol direct",
      EN: "Short stay — Prestige Riad & direct flight"
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flightIncluded: true,
    mealPlan: { FR: "Petit-déjeuner ou Pension Complète", EN: "Breakfast or Full Board" },
    packageName: { FR: "Jaal Riad Hôtel 5★ (7N)", EN: "Jaal Riad Hotel 5★ (7N)" },
    highlights: [
      { FR: "4 rondes de golf de championnat à Marrakech", EN: "4 rounds of championship golf in Marrakech" },
      { FR: "Voiturette électrique (buggy) partagée incluse", EN: "Shared electric golf buggy included" },
      { FR: "Séjour 5★ d'exception réservé aux adultes", EN: "Exceptional 5★ adults-only stay" },
      { FR: "Vols directs disponibles depuis Montréal, NYC, Washington, LA, Toronto & grands hubs", EN: "Direct flights available from Montreal, NYC, Washington, LA, Toronto & major hubs" },
      { FR: "Transferts privés aéroport, hôtel et golfs", EN: "Private airport, hotel, and course transfers" }
    ],
    price: "3,979",
    originalPrice: { FR: "4 179 $", EN: "C$ 4,179" },
    pricePrefix: { FR: "À partir de", EN: "Starting from" },
    currency: "C$",
    ctaLabel: { FR: "DÉCOUVRIR L'OFFRE", EN: "BOOK OFFER" },
    ctaHref: getItineraryPath(16),
    city: { FR: "Marrakech", EN: "Marrakech" }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      {/* Header styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative h-[55vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-12 px-6 md:px-12">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 pointer-events-none animate-kenburns"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={videoAsset("Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv").poster}
          onTimeUpdate={(e) => { const v = e.currentTarget; if (v.currentTime >= 60) v.currentTime = 0; }}
          style={{
            backgroundImage: `url('${videoAsset("Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv").poster}')`
          }}
        >
          {/* Mobile MP4 (Universal H264 Compatibility) */}
          <source src={videoAsset("Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv").mp4Mobile} type="video/mp4" media="(max-width: 768px)" />
          {/* Desktop MP4 (Universal H264 Compatibility) */}
          <source src={videoAsset("Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv").mp4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-white font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{translate(text.backToHome, lang)}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {translate(text.collectionLabel, lang)}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight font-bold">
              {translate(text.title, lang)}
            </h1>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center z-20 relative bg-white">
        <p className="text-zinc-600 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
          {translate(text.description, lang)}
        </p>
      </section>

      {/* City Video Showcase */}
      <section className="px-6 max-w-6xl mx-auto pb-6 z-20 relative">
        <div className="rounded-3xl overflow-hidden border border-zinc-200/60 shadow-md">
          <SmartVideo variant="tile" source={videoSources.marrakech} />
        </div>
      </section>

      {/* side-by-side packages grid */}
      <section className="pb-24 pt-6 px-6 max-w-6xl mx-auto z-20 relative bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <ItineraryPackageCard {...packageA} index={0} />
          <ItineraryPackageCard {...packageB} index={1} />
          <ItineraryPackageCard {...packageC} index={2} />
        </div>
      </section>

      {/* Custom trip call to action */}
      <section className="pb-24 px-6 max-w-4xl mx-auto text-center relative bg-white">
        <div className="bg-zinc-50 border border-zinc-200/60 p-8 rounded-[1.8rem] space-y-5 shadow-sm">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 uppercase">
            {translate(text.customTitle, lang)}
          </h3>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            {translate(text.customDesc, lang)}
          </p>
          <div>
            <Link
              href="/#contacts"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-luxury shadow-md cursor-pointer"
            >
              {translate(text.customBtn, lang)} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
