'use client';

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, Users, Percent, Sparkles, Flame, MapPin, Plane } from "lucide-react";
import { useLang, translate } from "../context/lang-context";
import { dealsList } from "@/data/itineraries";
import { getTierStyle } from "../utils/tier-styles";

const getNightsLabel = (duration: { FR: string; EN: string }, lang: "FR" | "EN") => {
  const text = lang === "FR" ? duration.FR : duration.EN;
  const match = text.match(/^(\d+)\s*(nuit|night)s?$/i);
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

export default function Promotions() {

  const { lang } = useLang();

  const selectedDeals = [
    {
      id: "mice",
      image: "/images/corporate_meeting.png",
      badge: { FR: "Prestige", EN: "Prestige" },
      tag: "mice",
      title: { FR: "MICE & Corporatif", EN: "MICE & Corporate" },
      city: { FR: "Séminaires & Congrès", EN: "Seminars & Conferences" },
      duration: { FR: "Sur mesure", EN: "Custom" },
      meals: { FR: "Clé en main", EN: "Turnkey" },
      flight: { FR: "Logistique et vols inclus", EN: "Logistics and flights included" },
      inclusions: {
        FR: "Des solutions clés en main pour vos congrès, séminaires, retraites de direction et team-building au Maroc.",
        EN: "Turnkey solutions for your conferences, seminars, executive board retreats, and team-building in Morocco."
      },
      oldPrice: "",
      newPrice: { FR: "Sur demande", EN: "On request" },
      link: "/mice",
      promoText: { FR: "Organisation Professionnelle", EN: "Professional Organization" }
    },
    {
      id: "tours",
      image: "/images/marrakech_sunset_hero.png",
      badge: { FR: "Découverte", EN: "Discovery" },
      tag: "tour",
      title: { FR: "Circuits & Aventures", EN: "Tours & Discovery" },
      city: { FR: "Villes Impériales", EN: "Imperial Cities" },
      duration: { FR: "À partir de 7 nuits", EN: "Starting from 7 nights" },
      meals: { FR: "Demi-pension ou complet", EN: "Half or full board" },
      flight: { FR: "Vols directs inclus", EN: "Direct flights included" },
      inclusions: {
        FR: "Villes impériales à partir de 7 nuits, trekking dans les montagnes de l'Atlas... Nous proposons également des circuits sur mesure.",
        EN: "Imperial cities starting from 7 nights, trekking in the Atlas Mountains... We also offer customized tours."
      },
      oldPrice: "",
      newPrice: { FR: "À partir de 3 200 $", EN: "From 3,200" },
      link: "/itineraries?type=Tours",
      promoText: { FR: "Vols Multi-Villes (YUL, NYC, YYZ, LAX...)", EN: "Multi-City Flights (YUL, NYC, YYZ, LAX...)" }
    },
    {
      id: "golf",
      image: "/images/royal_golf_aerial_1.jpg",
      badge: { FR: "Élite", EN: "Elite" },
      tag: "golf",
      title: { FR: "Séjours Golf de Luxe", EN: "Luxury Golf Packages" },
      city: { FR: "Marrakech & Agadir", EN: "Marrakech & Agadir" },
      duration: { FR: "À partir de 7 nuits", EN: "Starting from 7 nights" },
      meals: { FR: "Formule BB ou Tout-inclus", EN: "BB or All-inclusive" },
      flight: { FR: "Vols directs et sac de golf", EN: "Direct flights and golf bag" },
      inclusions: {
        FR: "Forfaits de golf à partir de 7 nuits partout au Maroc en formule BB ou Tout-inclus. Séjours de golf à Marrakech et Agadir toute l'année.",
        EN: "Golf packages starting from 7 nights, all around Morocco on BB basis or All-inclusive. Marrakech & Agadir golfing all year round."
      },
      oldPrice: "",
      newPrice: { FR: "À partir de 3 879 $", EN: "From 3,879" },
      link: "/itineraries?type=Golf",
      promoText: { FR: "Tee Times Garantis", EN: "Guaranteed Tee Times" }
    }
  ];

  return (
    <div className="w-full bg-zinc-50/50 py-24 relative overflow-hidden border-y border-zinc-200/40">
      {/* Shimmer animation styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Decorative Flight Path Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M-50,250 Q 250,50 600,200 T 1200,100 T 1500,300" 
            stroke="#c8a2c8" 
            strokeWidth="2" 
            strokeDasharray="8 8" 
          />
          <path 
            d="M100,500 Q 400,200 800,450 T 1500,200" 
            stroke="#d4af37" 
            strokeWidth="1.5" 
            strokeDasharray="6 6" 
          />
          {/* Animated Airplane */}
          <motion.g
            animate={{
              offsetDistance: ["0%", "100%"]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              motionPath: "M-50,250 Q 250,50 600,200 T 1200,100 T 1500,300"
            }}
          >
            <path 
              d="M21 16V14L13 9V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" 
              fill="#d4af37" 
              transform="scale(0.8) translate(-10, -10)"
            />
          </motion.g>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 text-brand-gold font-mono text-[10px] tracking-[0.2em] uppercase">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            <span>{lang === "FR" ? "OFFRES PRESTIGE" : "EXCLUSIVE PROMOTIONS"}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight uppercase leading-tight">
            {lang === "FR" ? "OFFRES & PRIVILÈGES" : "OFFERS & PRIVILEGES"}
          </h2>
          <p className="text-zinc-500 font-light text-[13px] md:text-sm leading-relaxed">
            {lang === "FR" 
              ? "Découvrez nos expériences signature au Maroc — séjours de golf de prestige, circuits et villes impériales, et solutions MICE sur mesure."
              : "Explore our signature Morocco experiences — luxury golf stays, imperial city tours, and fully tailored MICE & corporate solutions."
            }
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedDeals.map((deal, index) => (
            <Link 
              key={deal.id}
              href={deal.link}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3, delay: 0 } }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="bg-white rounded-2xl overflow-hidden border border-zinc-200/50 shadow-md hover:shadow-xl flex flex-col h-full group transition-shadow duration-300 cursor-pointer"
              >
                {/* Image Header with Tags */}
                <div className="h-[240px] w-full relative overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={translate(deal.title, lang)} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />


                  {/* Badge container */}
                  <div className="absolute top-6 left-6 right-6 flex flex-col items-start gap-2.5 z-10 pointer-events-none select-none">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                      style={getTierStyle(translate(deal.badge, lang))}
                      className="relative overflow-hidden px-3.5 py-1.5 rounded-full font-sans text-[11px] tracking-wider uppercase font-semibold shadow-md pointer-events-auto cursor-default"
                    >
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2.5s_infinite]" />
                      <span className="relative z-10">{translate(deal.badge, lang)}</span>
                    </motion.div>
                  </div>

                  {/* Booking Deadline Banner */}
                  {deal.promoText && (
                    <div className="absolute bottom-0 left-0 right-0 bg-[#8B2635]/95 backdrop-blur-xs text-[#faf9f5] text-[11px] font-sans py-2 px-4 tracking-wider text-center uppercase font-bold">
                      {translate(deal.promoText, lang)}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-sans font-bold tracking-widest uppercase border ${
                        deal.tag === "mice"
                          ? "bg-purple-50 text-purple-700 border-purple-200/60"
                          : deal.tag === "tour"
                          ? "bg-amber-50 text-amber-800 border-amber-200/60"
                          : "bg-emerald-50 text-emerald-800 border-emerald-200/60"
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${
                          deal.tag === "mice" ? "bg-purple-600" : deal.tag === "tour" ? "bg-amber-600" : "bg-emerald-600"
                        }`} />
                        {deal.tag === "mice"
                          ? (lang === "FR" ? "MICE & Corporatif" : "MICE & Corporate")
                          : deal.tag === "tour"
                          ? (lang === "FR" ? "Tours & Circuits" : "Tours & Discovery")
                          : (lang === "FR" ? "Forfait Golf" : "Golf Package")
                        }
                      </span>
                    </div>

                    {/* Title with aligned stars */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        {deal.title && (
                          <span className="text-[13px] md:text-[14px] font-mono tracking-[0.2em] uppercase font-bold text-[#8B2635] block">
                            {cleanTitle(translate(deal.title, lang))}
                          </span>
                        )}
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug uppercase">
                          {translate(deal.city, lang)} {getNightsLabel(deal.duration, lang)}
                        </h3>
                      </div>
                      <div className="flex gap-0.5 text-brand-gold shrink-0 pt-2.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[12px] leading-none">★</span>
                        ))}
                      </div>
                    </div>

                    {/* Metadata Rows with Icons */}
                    <div className="space-y-2.5 text-[11.5px] text-zinc-500 font-sans font-medium border-t border-b border-zinc-100/70 py-4">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>{translate(deal.city, lang)}, {lang === "FR" ? "Maroc" : "Morocco"}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>{translate(deal.duration, lang)} ({translate(deal.meals, lang)})</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Plane className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>{translate(deal.flight, lang)}</span>
                      </div>
                    </div>

                    {/* Inclusions & Highlights */}
                    <div className="space-y-4">
                      <p className="text-[13px] leading-relaxed text-zinc-600 font-light pt-1">
                        <span className="font-heading text-[10px] uppercase tracking-wider font-bold text-brand-gold-dark block mb-1.5">
                          {lang === "FR" ? "INCLUSIONS EXCLUSIVES" : "EXCLUSIVE INCLUSIONS"}
                        </span>
                        {translate(deal.inclusions, lang)}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {(() => {
                          let tags: string[] = [];
                          if (deal.tag === "golf") {
                            tags = lang === "FR" 
                              ? ["Forfait Golf", "Hôtel 5★", "Buggy Inclus", "Vols Directs (YUL, NYC, YYZ...)"] 
                              : ["Golf Package", "5★ Hotel", "Buggy Included", "Direct Flights (YUL, NYC, YYZ...)"];
                          } else if (deal.tag === "tour") {
                            tags = lang === "FR" 
                              ? ["Circuit Guidé", "Trek Toubkal", "Riad de Luxe", "Pension Complète"] 
                              : ["Guided Tour", "Toubkal Trek", "Luxury Riad", "Full Board"];
                          } else if (deal.tag === "mice") {
                            tags = lang === "FR" 
                              ? ["Corporatif", "Séminaire", "Sur Mesure", "Clé en Main"] 
                              : ["Corporate", "Seminars", "Custom Made", "Turnkey"];
                          }
                          return tags.map((tagText, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="bg-zinc-100 hover:bg-zinc-200/50 text-zinc-600 border border-zinc-200/60 rounded px-2.5 py-1 text-[10px] font-sans font-semibold tracking-wide transition-colors"
                            >
                              {tagText}
                            </span>
                          ));
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Footer / Pricing */}
                  <div className="flex items-center justify-between gap-3 pt-5 border-t border-zinc-100">
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-mono line-through text-zinc-400 leading-none mb-1">
                        {deal.oldPrice}
                      </span>
                      {(() => {
                        const priceText = translate(deal.newPrice, lang);
                        const isRequest = priceText.toLowerCase().includes("devis") || priceText.toLowerCase().includes("demande") || priceText.toLowerCase().includes("request");
                        return (
                          <span className="text-[19px] font-bold text-zinc-900 font-heading leading-none">
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

                    <span 
                      className="shrink-0 whitespace-nowrap bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-full border border-[#8B2635] hover:border-[#72202b] transition-luxury cursor-pointer shadow-sm animate-pulse group-hover:animate-none"
                    >
                      {lang === "FR" ? "VOIR LES OFFRES" : "SEE OFFERS"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
