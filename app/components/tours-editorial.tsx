'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, MapPin, ChevronLeft, ChevronRight, User, 
  ArrowRight, Compass, Sparkles, Search, X
} from "lucide-react";
import { masterTours, catalogTours, TourItem } from "@/data/bestOfMoroccoData";
import { MoroccanMedallionArt, MoroccanFriezeDivider, MoroccanArchWatermark } from "./moroccan-art-motifs";
import { motion, AnimatePresence } from "motion/react";
import { highlightMatches, normalize, CITY_ALIASES } from "../utils/search-matcher";

interface ToursProps {
  onSelectTourToBook?: (tourName: string) => void;
  searchFilter?: string;
  onClearSearch?: () => void;
}

export default function ToursEditorial({ onSelectTourToBook, searchFilter = "", onClearSearch }: ToursProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [pageIndex, setPageIndex] = useState<number>(0);

  // Minimalist, high-end category filters
  const categories = [
    { id: "all", label: "All Circuits" },
    { id: "imperial", label: "Imperial Cities" },
    { id: "sahara", label: "Sahara & Dunes" },
    { id: "north-south", label: "North & South" },
    { id: "atlantic", label: "Atlantic Coast" },
    { id: "jewish", label: "Jewish Heritage" },
    { id: "festivals", label: "Cultural Festivals" }
  ];

  // Authentic transparent pricing map matching strikethrough logic
  const priceMap: Record<string, { crossed: string; current: string }> = {
    "imperial-cities": { crossed: "$2,450 CAD", current: "$1,890 CAD" },
    "imperial-sahara": { crossed: "$2,850 CAD", current: "$2,190 CAD" },
    "north-south": { crossed: "$2,950 CAD", current: "$2,290 CAD" },
    "atlantic-ocean": { crossed: "$2,650 CAD", current: "$2,050 CAD" },
    "south-kasbahs": { crossed: "$2,750 CAD", current: "$2,150 CAD" },
    "jewish-heritage": { crossed: "$2,990 CAD", current: "$2,350 CAD" },
    "premium-tour": { crossed: "$3,850 CAD", current: "$3,150 CAD" },
    // legacy aliases
    "imperial-cities-8d": { crossed: "$2,450 CAD", current: "$1,890 CAD" },
    "imperial-sahara-10d": { crossed: "$2,850 CAD", current: "$2,190 CAD" },
    "north-south-10d": { crossed: "$2,950 CAD", current: "$2,290 CAD" },
    "grand-tour-15d": { crossed: "$3,850 CAD", current: "$3,150 CAD" },
    "jewish-heritage-11d": { crossed: "$2,990 CAD", current: "$2,350 CAD" },
    "south-atlantic-10d": { crossed: "$2,650 CAD", current: "$2,050 CAD" },
    "premium-palace-morocco": { crossed: "1 299 €", current: "999 €" },
  };

  // Filtered tours with deep search matching
  const filteredTours = masterTours.filter((tour) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "imperial" && tour.category.toLowerCase().includes("imperial")) ||
      (activeCategory === "sahara" && (tour.category.toLowerCase().includes("sahara") || tour.destinations.some(d => d.toLowerCase().includes("merzouga")))) ||
      (activeCategory === "north-south" && tour.name.toLowerCase().includes("north")) ||
      (activeCategory === "atlantic" && tour.category.toLowerCase().includes("coastal")) ||
      (activeCategory === "jewish" && tour.category.toLowerCase().includes("jewish")) ||
      (activeCategory === "festivals" && tour.name.toLowerCase().includes("premium"));

    const query = normalize(searchFilter);
    if (!query) return matchesCategory;

    // Check alias matching
    let queryTerms = [query];
    for (const [canonical, aliases] of Object.entries(CITY_ALIASES)) {
      if (canonical.includes(query) || aliases.some((a) => a.includes(query))) {
        queryTerms.push(canonical, ...aliases);
      }
    }

    const matchesSearch = queryTerms.some((t) => {
      const hitName = normalize(tour.name).includes(t);
      const hitDest = tour.destinations.some((d) => normalize(d).includes(t));
      const hitCategory = normalize(tour.category).includes(t);
      const hitOverview = normalize(tour.overview).includes(t);
      const hitTimeline = tour.itinerary.some(
        (day) => normalize(day.title).includes(t) || normalize(day.desc).includes(t)
      );
      return hitName || hitDest || hitCategory || hitOverview || hitTimeline;
    });

    return matchesCategory && matchesSearch;
  });

  // Carousel navigation (3 per page)
  const pageSize = 3;
  const maxPages = Math.ceil(filteredTours.length / pageSize);
  const visibleTours = filteredTours.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  const handlePrev = () => {
    setPageIndex((prev) => (prev > 0 ? prev - 1 : maxPages - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev < maxPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="tours" className="bg-transparent pt-28 md:pt-20 pb-16 sm:pb-20 px-3 sm:px-6 lg:px-8 text-stone-900 relative overflow-hidden">
      {/* Subtle authentic Moroccan Archway Watermark in Tours Section */}
      <MoroccanArchWatermark className="absolute -top-10 -right-24 w-96 h-auto pointer-events-none text-[#C05621] -z-10 hidden lg:block" opacity={0.25} />

      <div className="max-w-[1240px] mx-auto space-y-6 sm:space-y-8 relative z-10">
        
        {/* =========================================================================
            HEADER: "Special for you"
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-b border-stone-200/70 pb-5 sm:pb-6">
          <div className="flex items-center gap-3.5">
            <MoroccanMedallionArt size={42} className="text-[#C05621] opacity-75 shrink-0 hidden sm:block" />
            <div>
              <span className="text-[#C05621] font-serif italic text-sm sm:text-base capitalize block">
                Curated Private Journeys
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mt-0.5">
                Special for you
              </h2>
            </div>
          </div>

          {/* Navigation Controls: Category filters + Left/Right arrows */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            <a
              href="#catalog"
              className="font-sans text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#C05621] transition-colors flex items-center gap-1"
            >
              <span>all tours ({masterTours.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous tours"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 hover:border-stone-400 hover:bg-stone-50 flex items-center justify-center text-stone-700 transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next tours"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 hover:border-stone-400 hover:bg-stone-50 flex items-center justify-center text-stone-700 transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Pill Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setPageIndex(0);
                }}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                  isActive
                    ? "bg-[#4A3525] text-white shadow-xs"
                    : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200/80 hover:border-stone-300"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Active Search Filter Banner */}
        {searchFilter && (
          <div className="flex items-center justify-between gap-4 bg-amber-50/90 border border-[#C05621]/30 rounded-2xl px-4 sm:px-5 py-3 shadow-2xs">
            <div className="flex items-center gap-2.5 text-xs text-stone-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C05621] shrink-0 animate-pulse" />
              <span>
                Showing <strong>{filteredTours.length}</strong> private {filteredTours.length === 1 ? 'circuit' : 'circuits'} matching: <strong className="text-[#C05621] font-serif text-sm">&quot;{searchFilter}&quot;</strong>
              </span>
            </div>
            {onClearSearch && (
              <button
                type="button"
                onClick={onClearSearch}
                className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-stone-600 hover:text-[#C05621] bg-white border border-stone-200/80 hover:border-[#C05621] px-3 py-1 rounded-full transition-colors cursor-pointer shrink-0"
              >
                <span>Clear filter</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* =========================================================================
            FEATURED CARDS GRID: Entire Square is Clickable, Zero Lag, Zero Flash
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
          {visibleTours.map((tour) => {
            const pricing = priceMap[tour.id] || { crossed: "$2,450 CAD", current: "$1,890 CAD" };

            return (
              <Link
                key={tour.id}
                href={`/itineraries/${tour.id}`}
                prefetch={true}
                className="group block h-full cursor-pointer select-none"
              >
                <div className="h-full flex flex-col justify-between rounded-[1.8rem] bg-white p-3.5 sm:p-4 border border-stone-200/80 shadow-xs hover:shadow-[0_16px_40px_rgba(74,53,37,0.12)] hover:border-[#C05621]/50 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle Moroccan Rosette Hallmark Watermark on card */}
                  <div className="absolute -bottom-3 -right-3 pointer-events-none transition-all duration-500 opacity-10 group-hover:opacity-25 group-hover:rotate-45">
                    <MoroccanMedallionArt size={65} />
                  </div>

                  {/* Photo Container */}
                  <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-stone-100 shrink-0">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                    {/* Top Right Duration Pill */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/20">
                      {tour.duration}
                    </div>

                    {/* Bottom Left Badge */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-[#C05621] shadow-xs">
                      {tour.badge}
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-2 sm:p-3 flex flex-col flex-1 justify-between space-y-3.5">
                    <div className="space-y-1.5">
                      {/* Category Route Tag */}
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#C05621] truncate">
                        {highlightMatches(tour.destinations.slice(0, 4).join(" · "), searchFilter)}
                      </div>

                      {/* Title with Word Highlighting */}
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#4A3525] group-hover:text-[#C05621] transition-colors leading-snug line-clamp-1">
                        {highlightMatches(tour.name, searchFilter)}
                      </h3>

                      {/* 1-2 Line Clean Description with Word Highlighting */}
                      <p className="text-xs text-stone-500 font-light leading-relaxed line-clamp-2">
                        {highlightMatches(tour.overview, searchFilter)}
                      </p>
                    </div>

                    {/* Metadata Row */}
                    <div className="flex items-center gap-4 py-2.5 border-y border-stone-100 text-[11px] text-stone-500 font-light">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        <span>{tour.itinerary?.length || 8} days</span>
                      </div>
                      <span className="text-stone-300">•</span>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-stone-400" />
                        <span>Private Tour</span>
                      </div>
                    </div>

                    {/* Bottom Pricing & Action Row */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex flex-col">
                        <span className="text-[11px] line-through text-stone-400 font-mono">
                          {pricing.crossed}
                        </span>
                        <span className="text-xl font-bold font-serif text-[#C2272D] leading-none">
                          {pricing.current}
                        </span>
                      </div>

                      {/* Direct Subpage Button */}
                      <span className="rounded-full bg-[#4A3525] group-hover:bg-[#322318] px-5 sm:px-6 py-2 sm:py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-2xs group-hover:shadow-md">
                        REQUEST
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <MoroccanFriezeDivider className="pt-6 pb-2" />

        {/* =========================================================================
            CATALOG SECTION: 7 Master Morocco Circuits Postcards (Pixel-Aligned, Instant Link)
           ========================================================================= */}
        <div id="catalog" className="pt-4 border-t border-stone-200/70 space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">Complete Itineraries</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-0.5">
                All 7 Master Morocco Circuits
              </h3>
            </div>
            <p className="text-xs text-stone-500 max-w-md font-light">
              Every itinerary includes private air-conditioned transport, official licensed city guides, handpicked luxury riads, and daily breakfast & dinner.
            </p>
          </div>

          {/* 4-Column Postcard Grid (1 Col Mobile, 2 Col Tablet, 4 Col Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {masterTours.map((t) => (
              <Link
                key={t.id}
                href={`/itineraries/${t.id}`}
                prefetch={true}
                className="group block h-full cursor-pointer select-none"
              >
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-stone-200/90 shadow-2xs group-hover:border-[#C05621] group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full space-y-3">
                  
                  {/* Image Container with Consistent Aspect Ratio */}
                  <div className="relative h-40 sm:h-36 w-full rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      fill 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/65 text-white backdrop-blur-xs">
                      {t.duration}
                    </span>
                  </div>

                  {/* Text Container with Rigid Vertical Alignment */}
                  <div className="flex flex-col flex-1 justify-start space-y-1">
                    {/* Fixed 2-Line Height Category Container (Ensures Title Alignment) */}
                    <div className="h-7 sm:h-8 flex items-center">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C05621] font-semibold line-clamp-2 leading-tight">
                        {highlightMatches(t.category, searchFilter)}
                      </span>
                    </div>

                    {/* Fixed Height Title Container (Ensures Price Alignment) */}
                    <div className="min-h-[42px] sm:min-h-[46px] flex items-start">
                      <h4 className="font-serif font-bold text-sm text-stone-900 line-clamp-2 leading-snug group-hover:text-[#C05621] transition-colors">
                        {highlightMatches(t.name, searchFilter)}
                      </h4>
                    </div>
                  </div>

                  {/* Fixed Bottom Footer Row: Price & View Tour Link */}
                  <div className="flex items-center justify-between text-xs pt-2.5 border-t border-stone-100 mt-auto">
                    <span className="text-[#C2272D] font-bold font-serif text-sm">
                      {priceMap[t.id]?.current || "$1,890 CAD"}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-700 group-hover:text-[#C05621] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Tour →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
