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

export default function AgadirGolfClient() {
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
      FR: "Séjours Golf à Agadir",
      EN: "Agadir Golf Packages"
    },
    description: {
      FR: "Découvrez Agadir, la perle de l'Atlantique marocain. Jouez sur des parcours de championnat face à l'océan et profitez d'une hospitalité d'exception dans nos complexes partenaires 5★.",
      EN: "Discover Agadir, the jewel of the Moroccan Atlantic. Play on championship courses facing the ocean and enjoy exceptional hospitality at our 5★ partner resorts."
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
    tierLabel: { FR: "Exclusif", EN: "Exclusive" },
    rating: 5,
    image: "/images/tgz_course_ocean.jpg",
    bannerText: {
      FR: "Tarif spécial — Vue piscine & vol inclus",
      EN: "Special rate — Pool view & flight included"
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flightIncluded: true,
    mealPlan: { FR: "Petit-déjeuner ou Demi-pension", EN: "Breakfast or Half board" },
    packageName: { FR: "Agadir Golf & Spa Resort 5★", EN: "Agadir Golf & Spa Resort 5★" },
    highlights: [
      { FR: "4 rondes de golf (Golf du Soleil, Les Dunes, Golf de l'Océan)", EN: "4 rounds of golf (Golf du Soleil, Les Dunes, Ocean Golf)" },
      { FR: "Voiturette électrique (buggy) partagée incluse", EN: "Shared electric golf buggy included" },
      { FR: "Hébergement 5★ en chambre vue piscine", EN: "5★ accommodation in a Pool View Room" },
      { FR: "Vols directs disponibles depuis Montréal, NYC, Washington, LA, Toronto & grands hubs", EN: "Direct flights available from Montreal, NYC, Washington, LA, Toronto & major hubs" },
      { FR: "Transferts privés aéroport et terrains de golf", EN: "Private airport and golf course transfers" }
    ],
    price: "3,879",
    originalPrice: { FR: "4 079 $", EN: "C$ 4,079" },
    pricePrefix: { FR: "À partir de", EN: "Starting from" },
    currency: "C$",
    ctaLabel: { FR: "DÉCOUVRIR L'OFFRE", EN: "BOOK OFFER" },
    ctaHref: getItineraryPath(11),
    city: { FR: "Agadir", EN: "Agadir" }
  };

  const packageB = {
    tierLabel: { FR: "Premium", EN: "Premium" },
    rating: 5,
    image: "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
    bannerText: {
      FR: "Séjour de luxe — Vue jardin & vol inclus",
      EN: "Luxury stay — Garden view & flight included"
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flightIncluded: true,
    mealPlan: { FR: "Tout compris", EN: "All inclusive" },
    packageName: { FR: "White Beach Hôtel", EN: "White Beach Hotel" },
    highlights: [
      { FR: "4 rondes de golf (Golf du Soleil, Les Dunes, Golf de l'Océan)", EN: "4 rounds of golf (Golf du Soleil, Les Dunes, Ocean Golf)" },
      { FR: "Voiturette électrique (buggy) partagée incluse", EN: "Shared electric golf buggy included" },
      { FR: "Séjour tout compris haut de gamme (Adulte Seul)", EN: "Premium all-inclusive stay (Adults Only)" },
      { FR: "Vols directs disponibles depuis Montréal, NYC, Washington, LA, Toronto & grands hubs", EN: "Direct flights available from Montreal, NYC, Washington, LA, Toronto & major hubs" },
      { FR: "Transferts privés aéroport et terrains de golf", EN: "Private airport and golf course transfers" }
    ],
    price: "4,255",
    originalPrice: { FR: "4 455 $", EN: "C$ 4,455" },
    currency: "C$",
    ctaLabel: { FR: "DÉCOUVRIR L'OFFRE", EN: "BOOK OFFER" },
    ctaHref: getItineraryPath(12),
    city: { FR: "Agadir", EN: "Agadir" }
  };

  const packageC = {
    tierLabel: { FR: "Exclusif", EN: "Exclusive" },
    rating: 5,
    image: "/images/tgz_course_hotel.jpg",
    bannerText: {
      FR: "Tarif spécial 10 Nuits — Chambre double vue jardin",
      EN: "Special 10 Nights Rate — Double garden view room"
    },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flightIncluded: true,
    mealPlan: { FR: "Petit-déjeuner ou Demi-pension", EN: "Breakfast or Half board" },
    packageName: { FR: "Agadir Golf & Spa Resort 5★ (10N)", EN: "Agadir Golf & Spa Resort 5★ (10N)" },
    highlights: [
      { FR: "6 rondes de golf (Golf du Soleil, Les Dunes, Golf de l'Océan)", EN: "6 rounds of golf (Golf du Soleil, Les Dunes, Ocean Golf)" },
      { FR: "Voiturette électrique (buggy) partagée incluse", EN: "Shared electric golf buggy included" },
      { FR: "Hébergement 5★ en chambre double vue jardin", EN: "5★ accommodation in a double garden view room" },
      { FR: "Vol direct aller-retour et sac de golf inclus", EN: "Direct round-trip flight and golf bag included" },
      { FR: "Transferts privés aéroport et terrains de golf", EN: "Private airport and golf course transfers" }
    ],
    price: "4,989",
    originalPrice: { FR: "5 189 $", EN: "C$ 5,189" },
    pricePrefix: { FR: "À partir de", EN: "Starting from" },
    currency: "C$",
    ctaLabel: { FR: "DÉCOUVRIR L'OFFRE", EN: "BOOK OFFER" },
    ctaHref: getItineraryPath(13),
    city: { FR: "Agadir", EN: "Agadir" }
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
          poster={videoAsset("Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad").poster}
          onTimeUpdate={(e) => { const v = e.currentTarget; if (v.currentTime >= 60) v.currentTime = 0; }}
          style={{
            backgroundImage: `url('${videoAsset("Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad").poster}')`
          }}
        >
          {/* Mobile MP4 (Universal H264 Compatibility) */}
          <source src={videoAsset("Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad").mp4Mobile} type="video/mp4" media="(max-width: 768px)" />
          {/* Desktop MP4 (Universal H264 Compatibility) */}
          <source src={videoAsset("Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad").mp4} type="video/mp4" />
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
          <SmartVideo variant="tile" source={videoSources.agadir} />
        </div>
      </section>

      {/* Side-by-side packages grid */}
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
