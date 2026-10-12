'use client';

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLang, translate } from "../context/lang-context";
import { getTierStyle } from "../utils/tier-styles";

export interface ItineraryPackageCardProps {
  tierLabel: { FR: string; EN: string } | string;
  rating: number;
  image: string;
  bannerText: { FR: string; EN: string } | string;
  duration: { FR: string; EN: string } | string;
  flightIncluded: { FR: string; EN: string } | string | boolean;
  mealPlan: { FR: string; EN: string } | string;
  packageName: { FR: string; EN: string } | string;
  highlights: ({ FR: string; EN: string } | string)[];
  price: string | number;
  originalPrice?: { FR: string; EN: string } | string;
  currency?: string;
  ctaLabel?: { FR: string; EN: string } | string;
  ctaHref: string;
  index?: number;
  city?: { FR: string; EN: string } | string;
  tag?: "golf" | "tour" | "mice";
  pricePrefix?: { FR: string; EN: string } | string;
}

export default function ItineraryPackageCard({
  tierLabel,
  rating,
  image,
  bannerText,
  duration,
  flightIncluded,
  mealPlan,
  packageName,
  highlights,
  price,
  originalPrice,
  currency = "C$",
  ctaLabel,
  ctaHref,
  index = 0,
  city,
  tag = "golf",
  pricePrefix,
}: ItineraryPackageCardProps) {
  const { lang } = useLang();

  // Helper to format values that can be strings or localized objects
  const formatText = (val: any): string => {
    if (!val) return "";
    if (typeof val === "string") return val;
    if (typeof val === "object" && val !== null) {
      return val[lang] || val.EN || val.FR || "";
    }
    return String(val);
  };

  // Helper to format flight inclusion
  const formatFlight = (val: any): string => {
    if (typeof val === "boolean") {
      if (val) {
        return lang === "FR" ? "Vol inclus" : "Flight included";
      } else {
        return lang === "FR" ? "Vol optionnel" : "Flight optional";
      }
    }
    return formatText(val);
  };

  const translatedTier = formatText(tierLabel);
  const translatedBanner = formatText(bannerText);
  const translatedDuration = formatText(duration);
  const translatedFlight = formatFlight(flightIncluded);
  const translatedMeals = formatText(mealPlan);
  const translatedPackageName = formatText(packageName);
  const translatedCtaLabel = formatText(ctaLabel || { FR: "RÉSERVER L'OFFRE", EN: "BOOK OFFER" });
  const translatedPricePrefix = pricePrefix ? formatText(pricePrefix) + " " : "";

  const highlightsTitle = {
    FR: "PRESTATIONS EXCLUSIVES",
    EN: "ELITE INCLUSIONS"
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.3, delay: 0 } }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-zinc-200/55 shadow-md hover:shadow-xl bg-white h-full transition-shadow duration-300"
    >
      {/* 1. Hero image with a small pill badge top-left and a star-rating chip top-right */}
      <div className="h-[160px] sm:h-[200px] md:h-[240px] w-full relative overflow-hidden bg-zinc-100">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
          alt={translatedPackageName}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
        
        {/* Star Rating Overlay */}
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 bg-black/45 backdrop-blur-md px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full flex gap-0.5 shadow-md border border-white/10 select-none">
          {[...Array(Math.max(0, Math.min(5, rating)))].map((_, i) => (
            <span key={i} className="text-[#C5A880] text-[11px] leading-none">★</span>
          ))}
        </div>

        {/* Badge container to prevent horizontal overlap on laptop/mobile screens */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 right-16 flex flex-col items-start gap-2.5 z-10 pointer-events-none select-none">
          {/* Styled Tier Badge with Framer Motion and Shimmer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            style={getTierStyle(translatedTier)}
            className="relative overflow-hidden px-3.5 py-1.5 rounded-full font-sans text-[11px] tracking-wider uppercase font-semibold shadow-md pointer-events-auto cursor-default"
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2.5s_infinite]" />
            <span className="relative z-10">{translatedTier}</span>
          </motion.div>
        </div>

        {/* 2. Bold one-line banner overlaid at the bottom of the image */}
        {translatedBanner && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#8B2635]/95 backdrop-blur-xs text-[#faf9f5] text-[10px] font-mono py-2.5 px-4 tracking-wider text-center uppercase font-bold">
            {translatedBanner}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between space-y-3 sm:space-y-5 md:space-y-6">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {/* Category Badge */}
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-sans font-bold tracking-widest uppercase border ${
              tag === "mice"
                ? "bg-purple-50 text-purple-700 border-purple-200/60"
                : tag === "tour"
                ? "bg-amber-50 text-amber-800 border-amber-200/60"
                : "bg-emerald-50 text-emerald-800 border-emerald-200/60"
            }`}>
              <span className={`w-1 h-1 rounded-full ${
                tag === "mice" ? "bg-purple-600" : tag === "tour" ? "bg-amber-600" : "bg-emerald-600"
              }`} />
              {tag === "mice"
                ? (lang === "FR" ? "MICE & Corporatif" : "MICE & Corporate")
                : tag === "tour"
                ? (lang === "FR" ? "Tours & Circuits" : "Tours & Discovery")
                : (lang === "FR" ? "Forfait Golf" : "Golf Package")
              }
            </span>
          </div>

          {/* 3. A meta row under the image: trip length • flight/transfer status • meal plan */}
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[10px] sm:text-[11.5px] text-zinc-500 font-sans font-medium tracking-wide">
            <span>{translatedDuration}</span>
            <span>•</span>
            <span>{translatedFlight}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">{translatedMeals}</span>
          </div>

          {/* 4. The hotel/package name as a bold headline */}
          <div className="space-y-1">
            {city && (
              <span className="text-[11px] md:text-[15px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold text-[#8B2635] block">
                {formatText(city)}
              </span>
            )}
            <h3 className="font-serif text-base sm:text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
              {translatedPackageName}
            </h3>
          </div>

          {/* 5. A labeled highlights block listing the concrete deliverables */}
          <div className="pt-2 sm:pt-4 border-t border-zinc-100 space-y-1.5 sm:space-y-3">
            <span className="font-heading text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-gold-dark block mb-1">
              {translate(highlightsTitle, lang)}
            </span>
            <ul className="space-y-1.5 sm:space-y-2.5 pl-0 list-none">
              {highlights.map((item, idx) => (
                <li key={idx} className={`text-zinc-600 text-[11px] sm:text-[13px] leading-relaxed font-light flex items-start gap-2 ${
                  idx >= 3 ? 'hidden sm:flex' : ''
                }`}>
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>{formatText(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 6. A price line (currency + amount + "/guest") paired with a CTA button */}
        <div className="flex items-center justify-between pt-3 sm:pt-5 border-t border-zinc-100">
          <div className="flex flex-col">
            {translatedPricePrefix && (
              <span className="text-[9px] sm:text-[12px] font-sans font-medium text-zinc-400 normal-case tracking-wide leading-none mb-0.5">
                {translatedPricePrefix}
              </span>
            )}
            <div className="flex items-baseline gap-2 flex-wrap">
              {originalPrice && (
                <span className="text-[11px] sm:text-[13px] font-mono line-through text-zinc-400 font-normal">
                  {formatText(originalPrice)}
                </span>
              )}
              <span className={`text-[16px] sm:text-[20px] font-bold font-heading leading-none ${originalPrice ? 'text-[#8B2635]' : 'text-zinc-900'}`}>
                {currency} {price}
                <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 ml-1 font-normal">
                  / {lang === "FR" ? "pers." : "guest"}
                </span>
              </span>
            </div>
          </div>

          <Link 
            href={ctaHref}
            className="bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[10px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] uppercase px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-full border border-[#8B2635] hover:border-[#72202b] transition-luxury cursor-pointer shadow-sm"
          >
            {translatedCtaLabel}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
