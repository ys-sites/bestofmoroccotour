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
import { easeOutExpo } from "@/lib/animations";
import { highlightMatches, normalize, CITY_ALIASES } from "../utils/search-matcher";

interface ToursProps {
  onSelectTourToBook?: (tourName: string) => void;
  searchFilter?: string;
  onClearSearch?: () => void;
}

export default function ToursEditorial({ onSelectTourToBook, searchFilter = "", onClearSearch }: ToursProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [pageIndex, setPageIndex] = useState<number>(0);

  // Minimalist, high-end category filters (replacing clunky heavy photo tiles)
  const categories = [
    { id: "all", label: "All Circuits" },
    { id: "imperial", label: "Imperial Cities" },
    { id: "sahara", label: "Sahara & Dunes" },
    { id: "north-south", label: "North & South" },
    { id: "atlantic", label: "Atlantic Coast" },
    { id: "jewish", label: "Jewish Heritage" },
    { id: "festivals", label: "Cultural Festivals" }
  ];

  // Authentic transparent pricing map matching Ui.jpg strikethrough logic
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
    <section id="tours" className="bg-transparent pt-20 pb-20 px-4 sm:px-8 text-stone-900 relative overflow-hidden">
      {/* Subtle authentic Moroccan Archway Watermark in Tours Section */}
      <MoroccanArchWatermark className="absolute -top-10 -right-24 w-96 h-auto pointer-events-none text-[#C05621] -z-10 hidden lg:block" opacity={0.25} />

      <div className="max-w-[1240px] mx-auto space-y-8 relative z-10">
        
        {/* =========================================================================
            HEADER: "Special for you" (matching Ui.jpg exactly!)
           ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-stone-200/70 pb-6"
        >
          <div className="flex items-center gap-3.5">
            <MoroccanMedallionArt size={42} className="text-[#C05621] opacity-75 shrink-0 hidden sm:block" />
            <div>
              <span className="text-[#C05621] font-serif italic text-base capitalize block">
                Curated Private Journeys
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mt-1">
                Special for you
              </h2>
            </div>
          </div>

          {/* Navigation Controls: Category filters + Left/Right arrows */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#catalog"
              className="font-sans text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#C05621] transition-colors flex items-center gap-1 mr-2"
            >
              <span>all tours ({masterTours.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Slider Navigation Arrows matching Ui.jpg */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={handlePrev}
                aria-label="Previous tours"
                className="w-10 h-10 rounded-full bg-white border border-stone-200 hover:border-stone-400 hover:bg-stone-50 flex items-center justify-center text-stone-700 transition-colors shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleNext}
                aria-label="Next tours"
                className="w-10 h-10 rounded-full bg-white border border-stone-200 hover:border-stone-400 hover:bg-stone-50 flex items-center justify-center text-stone-700 transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Minimalist Pill Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setPageIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#4A3525] text-white shadow-sm"
                    : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200/80 hover:border-stone-300"
                }`}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Active Search Filter Banner */}
        {searchFilter && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-4 bg-amber-50/90 border border-[#C05621]/30 rounded-2xl px-5 py-3.5 shadow-xs"
          >
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
                className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-stone-600 hover:text-[#C05621] bg-white border border-stone-200/80 hover:border-[#C05621] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer shrink-0 shadow-2xs"
              >
                <span>Clear filter</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </motion.div>
        )}

        {/* =========================================================================
            CARDS GRID: 3 Breathable Cards with Staggered Rise-up
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {visibleTours.map((tour, idx) => {
            const pricing = priceMap[tour.id] || { crossed: "$2,450 CAD", current: "$1,890 CAD" };

            return (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: easeOutExpo }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-[1.8rem] bg-white p-3.5 border border-stone-200/80 shadow-sm hover:shadow-[0_16px_40px_rgba(74,53,37,0.12)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Moroccan Rosette Hallmark Watermark on card */}
                <div className="absolute -bottom-3 -right-3 pointer-events-none transition-all duration-500 opacity-10 group-hover:opacity-25 group-hover:rotate-45">
                  <MoroccanMedallionArt size={65} />
                </div>

                {/* Clean Photo Container linking to itinerary subpage */}
                <Link
                  href={`/itineraries/${tour.id}`}
                  className="relative w-full h-56 rounded-2xl overflow-hidden bg-stone-100 cursor-pointer block"
                >
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Right Duration Pill */}
                  <div className="absolute top-3 right-3 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/20">
                    {tour.duration}
                  </div>

                  {/* Bottom Left Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-[#C05621] shadow-sm">
                    {tour.badge}
                  </div>
                </Link>

                {/* Card Body Content */}
                <div className="p-4 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Category Route Tag */}
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#C05621] truncate">
                      {highlightMatches(tour.destinations.slice(0, 4).join(" · "), searchFilter)}
                    </div>

                    {/* Title with Word Highlighting */}
                    <Link href={`/itineraries/${tour.id}`}>
                      <h3 className="font-serif text-lg font-bold text-[#4A3525] group-hover:text-[#C05621] transition-colors leading-snug cursor-pointer line-clamp-1">
                        {highlightMatches(tour.name, searchFilter)}
                      </h3>
                    </Link>

                    {/* 1-2 Line Clean Description with Word Highlighting */}
                    <p className="text-xs text-stone-500 font-light leading-relaxed line-clamp-2">
                      {highlightMatches(tour.overview, searchFilter)}
                    </p>
                  </div>

                  {/* Metadata Row matching Ui.jpg */}
                  <div className="flex items-center gap-4 py-3 border-y border-stone-100 text-[11px] text-stone-500 font-light">
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

                    {/* Direct Subpage Request Button */}
                    <Link href={`/itineraries/${tour.id}#booking-form`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-[#4A3525] hover:bg-[#322318] px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                      >
                        REQUEST
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <MoroccanFriezeDivider className="pt-8 pb-4" />

        {/* =========================================================================
            CATALOG SECTION: Full Itinerary List with Subpage Navigation
           ========================================================================= */}
        <div id="catalog" className="pt-6 border-t border-stone-200/70 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {masterTours.map((t, idx) => (
              <Link
                key={t.id}
                href={`/itineraries/${t.id}`}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: easeOutExpo }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-stone-200/80 shadow-xs group-hover:border-[#C05621] group-hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 h-full"
                >
                  <div className="relative h-32 w-full rounded-xl overflow-hidden bg-stone-100">
                    <Image src={t.image} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-sm">
                      {t.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C05621] font-semibold block">
                      {highlightMatches(t.category, searchFilter)}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-stone-900 mt-0.5 line-clamp-1 group-hover:text-[#C05621] transition-colors">
                      {highlightMatches(t.name, searchFilter)}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-100">
                    <span className="text-[#C2272D] font-bold font-serif">{priceMap[t.id]?.current || "$1,890 CAD"}</span>
                    <span className="text-[11px] font-semibold text-stone-700 group-hover:text-[#C05621] flex items-center gap-1">
                      View Tour →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
