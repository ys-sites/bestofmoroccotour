'use client';

import React, { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang, translate } from "../context/lang-context";
import { toursList } from "@/data/itineraries";
import { getTierStyle } from "../utils/tier-styles";
import { useSearchParams } from "next/navigation";
import { getItineraryPath } from "@/data/itinerary-seo";

const t = {
  book: {
    FR: "DÉCOUVRIR",
    EN: "DISCOVER"
  }
};

const getNightsLabel = (duration: { FR: string; EN: string }, lang: "FR" | "EN") => {
  const text = lang === "FR" ? duration.FR : duration.EN;
  const match = text.match(/(\d+)\s*(nuit|night)s?/i);
  if (match) {
    const num = match[1];
    return lang === "FR" ? `- ${num} NUITS` : `- ${num} NIGHTS`;
  }
  if (text.toLowerCase().includes("mesure") || text.toLowerCase().includes("custom")) {
    return lang === "FR" ? "- SUR MESURE" : "- CUSTOM";
  }
  return `- ${text.toUpperCase()}`;
};

const cleanTitle = (title: string) => {
  return title.replace(/\s*\(\d+N\)\s*$/i, "");
};


function ItinerariesClientContent() {
  const { lang } = useLang();
  const searchParams = useSearchParams();
  const [activeType, setActiveType] = React.useState("All"); // All, Golf, Tours
  const [activeCity, setActiveCity] = React.useState("All"); // All, Marrakech, Agadir, Rabat, Imperial

  React.useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      const matched = ["All", "Golf", "Tours", "Mice"].find(t => t.toLowerCase() === typeParam.toLowerCase());
      if (matched) {
        setActiveType(matched);
      }
    }
    const cityParam = searchParams.get("city");
    if (cityParam) {
      const matched = ["All", "Marrakech", "Agadir", "Rabat", "Imperial"].find(c => c.toLowerCase() === cityParam.toLowerCase());
      if (matched) {
        setActiveCity(matched);
      }
    }
  }, [searchParams]);

  const typePills = [
    { id: "All", FR: "Tous les Types", EN: "All Travel Types", image: "/images/moroco.webp" },
    { id: "Golf", FR: "Forfaits Golf", EN: "Golf Packages", image: "/images/royal_golf_aerial_1.jpg" },
    { id: "Tours", FR: "Tours & Circuits", EN: "Tours & Discovery", image: "/images/imperial_cities_fes.jpg" },
    { id: "Mice", FR: "MICE & Corporatif", EN: "MICE & Corporate", image: "/images/corporate_meeting.png" }
  ];

  const cityPills = [
    { id: "All", FR: "Toutes les Villes", EN: "All Cities", image: "/images/morocco-sahara-dunes.png" },
    { id: "Marrakech", FR: "Marrakech", EN: "Marrakech", image: "/images/marrakech_sunset_hero.png" },
    { id: "Agadir", FR: "Agadir", EN: "Agadir", image: "/images/tgz_course_ocean.jpg" },
    { id: "Rabat", FR: "Rabat", EN: "Rabat", image: "/images/rgdes_parcours_rouge_18.jpg" },
    { id: "Imperial", FR: "Villes Impériales", EN: "Imperial Cities", image: "/images/imperial_cities_fes.jpg" }
  ];

  const getCityKey = (id: number) => {
    switch (id) {
      case 11:
      case 12:
      case 13:
        return "Agadir";
      case 14:
      case 15:
      case 16:
      case 8: // Toubkal trekking & Marrakech
        return "Marrakech";
      case 10:
        return "Rabat";
      case 6:
      case 7:
      case 9:
      case 17:
      case 18:
        return "Imperial";
      case 99:
        return activeCity;
      default:
        return "Other";
    }
  };

  const filteredTours = toursList.filter((tour) => {
    // 1. Filter by Type
    if (activeType !== "All") {
      if (activeType === "Golf" && tour.tag !== "golf") return false;
      if (activeType === "Tours" && tour.tag !== "tour") return false;
      if (activeType === "Mice" && tour.tag !== "mice") return false;
    }
    // 2. Filter by City
    if (activeCity !== "All") {
      const tourCity = getCityKey(tour.id);
      if (tourCity !== activeCity) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      <Navbar />

      {/* Header Section */}
      <section className="relative h-[48vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-12 px-6 md:px-12">
        {/* Hero background image */}
        <img
          src="/images/moroco.webp"
          alt="Curated Moroccan Portfolios"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-white font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {lang === "FR" ? "Évasions de Prestige" : "Elite Collections"}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight font-bold">
              {lang === "FR" ? "Tous les Itinéraires" : "Curated Portfolios"}
            </h1>
          </div>
        </div>
      </section>


      {/* Grid of Cards */}
      <section className="pb-24 pt-6 px-6 max-w-6xl mx-auto z-20 relative bg-white">
        
        {/* Combined Filter Section */}
        <div className="flex flex-col items-center space-y-6 mb-12 max-w-3xl mx-auto">
          {/* Row 1: Travel Types */}
          <div className="w-full text-center space-y-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#C5A880] uppercase block font-semibold">
              {lang === "FR" ? "1. Catégorie de Voyage" : "1. Travel Category"}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto w-full">
              {typePills.map((pill) => {
                const label = lang === "FR" ? pill.FR : pill.EN;
                const isActive = activeType === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setActiveType(pill.id)}
                    className={`group relative h-20 md:h-24 w-full rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-sm ${
                      isActive
                        ? "border-brand-gold ring-2 ring-brand-gold/45 scale-[1.02] font-bold"
                        : "border-zinc-200/80 hover:border-zinc-400"
                    }`}
                  >
                    <img 
                      src={pill.image} 
                      alt={label} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 transition-colors duration-300 ${
                      isActive ? "bg-[#C5A880]/75" : "bg-black/55 group-hover:bg-black/45"
                    }`} />
                    <div className="absolute inset-0 flex items-center justify-center p-2 text-center z-10">
                      <span className="text-white text-[11px] sm:text-[12px] md:text-[13px] font-sans font-bold tracking-wider uppercase leading-tight">
                        {label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-zinc-200" />

          {/* Row 2: Cities/Regions */}
          <div className="w-full text-center space-y-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#C5A880] uppercase block font-semibold">
              {lang === "FR" ? "2. Sélectionner une Ville / Région" : "2. Select a City / Region"}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl mx-auto w-full">
              {cityPills.map((pill, idx) => {
                const label = lang === "FR" ? pill.FR : pill.EN;
                const isActive = activeCity === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setActiveCity(pill.id)}
                    className={`group relative h-20 md:h-24 w-full rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-sm ${
                      isActive
                        ? "border-brand-gold ring-2 ring-brand-gold/45 scale-[1.02] font-bold"
                        : "border-zinc-200/80 hover:border-zinc-400"
                    } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                  >
                    <img 
                      src={pill.image} 
                      alt={label} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 transition-colors duration-300 ${
                      isActive ? "bg-[#C5A880]/75" : "bg-black/55 group-hover:bg-black/45"
                    }`} />
                    <div className="absolute inset-0 flex items-center justify-center p-2 text-center z-10">
                      <span className="text-white text-[11px] sm:text-[12px] md:text-[13px] font-sans font-bold tracking-wider uppercase leading-tight">
                        {label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTours.map((tour, index) => (
            <Link
              key={tour.id}
              href={
                tour.id === 99
                  ? "/mice"
                  : getItineraryPath(tour.id)
              }
              className="block"
            >
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6, transition: { duration: 0.3, delay: 0 } }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col rounded-[2.2rem] overflow-hidden border border-zinc-200/55 shadow-md hover:shadow-xl bg-white h-full transition-shadow duration-300 cursor-pointer"
            >
              {/* Image Header with Tags */}
              <div className="h-[240px] w-full relative overflow-hidden">
                <img
                  src={tour.image}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  alt={translate(tour.title, lang)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
                
                {/* Star Rating Overlay */}
                <div className="absolute top-6 right-6 z-10 bg-black/45 backdrop-blur-md px-2.5 py-1.5 rounded-full flex gap-0.5 shadow-md border border-white/10 select-none">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C5A880] text-[11px] leading-none">★</span>
                  ))}
                </div>

                {/* Badge container to prevent horizontal overlap on laptop/mobile screens */}
                  <div className="absolute top-6 left-6 right-6 flex flex-col items-start gap-2.5 z-10 pointer-events-none select-none">
                    {/* Styled Tier Badge with Framer Motion and Shimmer */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                      style={getTierStyle(translate(tour.badge, lang))}
                      className="relative overflow-hidden px-3.5 py-1.5 rounded-full font-sans text-[11px] tracking-wider uppercase font-semibold shadow-md pointer-events-auto cursor-default"
                    >
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2.5s_infinite]" />
                      <span className="relative z-10">{translate(tour.badge, lang)}</span>
                    </motion.div>
                  </div>

                {/* Booking Deadline Banner */}
                {tour.promoText && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#8B2635]/95 backdrop-blur-xs text-[#faf9f5] text-[10px] font-mono py-2.5 px-4 tracking-wider text-center uppercase font-bold">
                    {translate(tour.promoText, lang)}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-sans font-bold tracking-widest uppercase border ${
                      tour.tag === "mice"
                        ? "bg-purple-50 text-purple-700 border-purple-200/60"
                        : tour.tag === "tour"
                        ? "bg-amber-50 text-amber-800 border-amber-200/60"
                        : "bg-emerald-50 text-emerald-800 border-emerald-200/60"
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${
                        tour.tag === "mice" ? "bg-purple-600" : tour.tag === "tour" ? "bg-amber-600" : "bg-emerald-600"
                      }`} />
                      {tour.tag === "mice"
                        ? (lang === "FR" ? "MICE & Corporatif" : "MICE & Corporate")
                        : tour.tag === "tour"
                        ? (lang === "FR" ? "Tours & Circuits" : "Tours & Discovery")
                        : (lang === "FR" ? "Forfait Golf" : "Golf Package")
                      }
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-500 font-sans font-medium tracking-wide">
                    <span>{translate(tour.duration, lang)}</span>
                    <span>{translate({ FR: "•", EN: "•" }, lang)}</span>
                    <span>{translate(tour.flight, lang)}</span>
                    <span>{translate({ FR: "•", EN: "•" }, lang)}</span>
                    <span>{translate(tour.meals, lang)}</span>
                  </div>

                    <div className="space-y-1.5">
                      {tour.title && (
                        <span className="text-[14px] md:text-[15px] font-mono tracking-[0.25em] uppercase font-bold text-[#8B2635] block">
                          {cleanTitle(translate(tour.title, lang))}
                        </span>
                      )}
                      <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug uppercase">
                        {translate(tour.city, lang)} {getNightsLabel(tour.duration, lang)}
                      </h3>
                    </div>

                  <p className="text-[13.5px] leading-relaxed text-zinc-600 font-light pt-2.5 border-t border-zinc-100 line-clamp-2">
                    <span className="font-heading text-[10px] uppercase tracking-wider font-bold text-brand-gold-dark block mb-1">
                      {lang === "FR" ? "INCLUSIONS EXCLUSIVES" : "EXCLUSIVE INCLUSIONS"}
                    </span>
                    {translate(tour.category, lang)}
                  </p>
                </div>

                {/* Footer / Pricing */}
                <div className="flex items-center justify-between pt-5 border-t border-zinc-100">
                  <div className="flex flex-col">
                    {tour.originalCost ? (
                      <span className="text-[11px] font-mono line-through text-zinc-400 leading-none mb-1">
                        {translate(tour.originalCost, lang)}
                      </span>
                    ) : (
                      tour.oldPrice && (
                        <span className="text-[11px] font-mono line-through text-zinc-400 leading-none mb-1">
                          {tour.oldPrice}
                        </span>
                      )
                    )}
                      {(() => {
                        const priceText = translate(tour.price, lang);
                        const isRequest = priceText.toLowerCase().includes("devis") || priceText.toLowerCase().includes("demande") || priceText.toLowerCase().includes("request");
                        return (
                          <span className={`text-[19px] font-bold font-heading leading-none ${tour.originalCost ? 'text-[#8B2635]' : 'text-zinc-900'}`}>
                            {priceText}
                            {!isRequest && (
                              <span className="text-[10px] font-mono text-zinc-400 ml-1">
                                {lang === "FR" ? "CAD / pers." : "CAD / guest"}
                              </span>
                            )}
                          </span>
                        );
                      })()}
                  </div>

                  <span className="bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-full border border-[#8B2635] hover:border-[#72202b] transition-luxury cursor-pointer shadow-sm">
                    {translate(t.book, lang)}
                  </span>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ItinerariesClient() {
  return (
    <Suspense fallback={null}>
      <ItinerariesClientContent />
    </Suspense>
  );
}
