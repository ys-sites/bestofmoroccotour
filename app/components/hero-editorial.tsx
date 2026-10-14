'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Compass, ShieldCheck, Award, MapPin, X, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MoroccanCornerSpandrel, MoroccanMedallionArt } from "./moroccan-art-motifs";
import { easeOutExpo } from "@/lib/animations";
import { searchTours, highlightMatches, POPULAR_CITIES, SearchMatchResult } from "../utils/search-matcher";
import { masterTours } from "@/data/bestOfMoroccoData";

interface HeroProps {
  onSearch: (city: string) => void;
}

const slides = [
  {
    image: "/images/bestofmorocco/img_slides_slide_3.jpg",
    alt: "Erg Chebbi Golden Sahara Desert Dunes",
    label: "Erg Chebbi Dunes",
  },
  {
    image: "/images/bestofmorocco/img_slides_slide_5.jpg",
    alt: "Aït Benhaddou Ancient Berber Kasbah",
    label: "Aït Benhaddou Kasbah",
  },
  {
    image: "/images/bestofmorocco/img_slides_slide_6.jpg",
    alt: "Marrakech Historic Medina Sunset",
    label: "Marrakech Old Medina",
  },
  {
    image: "/images/bestofmorocco/img_slides_slide_1.jpg",
    alt: "Casablanca & Atlantic Ocean Heritage",
    label: "Casablanca & Atlantic",
  },
];

export default function HeroEditorial({ onSearch }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDates, setSearchDates] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Subtle auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Compute live match suggestions
  const searchResults: SearchMatchResult[] = searchTours(masterTours, searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      onSearch(searchQuery);
    }
    setIsDropdownOpen(false);
    const el = document.getElementById("tours");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectCityChip = (city: string) => {
    setSearchQuery(city);
    onSearch(city);
    setIsDropdownOpen(true);
  };

  return (
    <section className="relative w-full pb-16 sm:pb-20">
      {/* Hero Panoramic Window Frame matching Ui.jpg */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: easeOutExpo }}
        className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(74,53,37,0.14)] bg-[#2A231C]"
      >
        {/* Subtle Palace Corner Arabesques inside Hero Frame */}
        <div className="absolute top-5 left-5 z-20 pointer-events-none hidden sm:block">
          <MoroccanCornerSpandrel size={68} opacity={0.45} />
        </div>
        <div className="absolute top-5 right-5 z-20 pointer-events-none hidden sm:block">
          <MoroccanCornerSpandrel size={68} opacity={0.45} flip={true} />
        </div>

        {/* Floating Trust Badge 1 (Top-right) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-8 z-20 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/95 text-xs shadow-lg"
        >
          <ShieldCheck className="w-4 h-4 text-amber-300" />
          <span className="font-medium tracking-wide">Tour Guide Licence No. 2816</span>
        </motion.div>

        {/* Floating Trust Badge 2 (Bottom-left) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-28 left-8 z-20 hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/95 text-xs shadow-lg"
        >
          <MoroccanMedallionArt size={20} className="text-amber-300" opacity={0.9} />
          <span className="font-medium tracking-wide">100% Native Local Guides · Authentic Morocco</span>
        </motion.div>

        {/* Background Image Carousel with Smooth Fade & Gentle Zoom */}
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-center transition-transform duration-10000 ease-out hover:scale-105"
            />
          </div>
        ))}

        {/* Cinematic Warm Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70 pointer-events-none" />

        {/* Centered Hero Content with Staggered Entrance Animations */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10 pt-10 sm:pt-6">
          {/* Welcome Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOutExpo }}
            className="flex flex-col items-center gap-1.5 text-white/85 font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase"
          >
            <Compass className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "14s" }} />
            <span>WELCOME TO YOUR</span>
          </motion.div>

          {/* Main Headline with blur entrance */}
          <motion.h1 
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.25, ease: easeOutExpo }}
            className="font-serif text-[54px] sm:text-[76px] lg:text-[88px] font-bold text-white tracking-tight leading-[1.04] mt-2 drop-shadow-md"
          >
            Best of Morocco
          </motion.h1>

          {/* Clean Subtext Narrative */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: easeOutExpo }}
            className="mt-4 sm:mt-5 max-w-[580px] text-white/90 font-sans text-[14px] sm:text-[16px] leading-relaxed font-light drop-shadow"
          >
            We organize private bespoke tours across Morocco. Discover ancient imperial medinas, golden Sahara dunes, and authentic Berber hospitality with our certified native guides.
          </motion.p>
        </div>

        {/* Carousel Pagination Dots matching Ui.jpg */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              suppressHydrationWarning
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Switch to slide ${idx + 1}: ${slide.label}`}
              className={`transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? "w-7 h-2 rounded-full bg-white shadow-sm"
                  : "w-2 h-2 rounded-full bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Search Pill Overlapping Bottom Edge matching Ui.jpg */}
      <motion.div 
        ref={searchContainerRef}
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.45, ease: easeOutExpo }}
        className="absolute left-1/2 bottom-0 w-full max-w-[1040px] -translate-x-1/2 translate-y-1/2 z-30 px-4"
      >
        <form
          onSubmit={handleSearchSubmit}
          suppressHydrationWarning
          className="relative w-full rounded-[2rem] bg-white/98 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_15px_45px_rgba(74,53,37,0.14)] flex flex-col md:flex-row items-center justify-between gap-2 border border-stone-200/90 hover:shadow-[0_20px_55px_rgba(74,53,37,0.18)] transition-shadow duration-300"
        >
          {/* Input 1: Destination / Tour Name */}
          <div className="flex-1 flex items-center gap-3 px-5 py-2.5 md:py-0 border-b md:border-b-0 md:border-r border-stone-200/80 w-full relative">
            <Search className="w-4 h-4 text-[#C05621] shrink-0" />
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Enter tour name or city (e.g. Rabat, Marrakech, Fes, Merzouga...)"
              value={searchQuery}
              onFocus={() => setIsDropdownOpen(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsDropdownOpen(true);
              }}
              className="w-full bg-transparent text-xs sm:text-sm text-[#1E1B18] placeholder-stone-400 focus:outline-none font-sans font-medium pr-6"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  onSearch("");
                  setIsDropdownOpen(false);
                }}
                className="absolute right-4 text-stone-400 hover:text-stone-700 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Input 2: Dates / Season */}
          <div className="flex-1 flex items-center gap-3 px-5 py-2.5 md:py-0 md:border-r border-stone-200/80 w-full">
            <Calendar className="w-4 h-4 text-[#D97706] shrink-0" />
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Travel window (e.g. Oct 2026 – May 2027)"
              value={searchDates}
              onChange={(e) => setSearchDates(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-[#1E1B18] placeholder-stone-400 focus:outline-none font-sans font-medium"
            />
          </div>

          {/* Action CTA Button */}
          <motion.button
            suppressHydrationWarning
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full md:w-auto rounded-full bg-[#4A3525] hover:bg-[#322318] px-8 py-3.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer shrink-0"
          >
            SEARCH TOURS
          </motion.button>
        </form>

        {/* =========================================================================
            INTERACTIVE SMART SEARCH SUGGESTION MODAL / DROPDOWN
            "Do you mean this itinerary?" with Word Highlighting & Direct Navigation
           ========================================================================= */}
        <AnimatePresence>
          {isDropdownOpen && searchQuery.trim().length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
              className="absolute top-full left-4 right-4 mt-3 rounded-[2rem] bg-white/98 backdrop-blur-2xl border border-stone-200/95 shadow-[0_25px_65px_rgba(74,53,37,0.22)] p-5 sm:p-6 z-50 text-left overflow-hidden"
            >
              {/* Header: "Do you mean this itinerary?" */}
              <div className="flex items-start justify-between border-b border-stone-200/70 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#C05621]/10 flex items-center justify-center text-[#C05621] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                      Do you mean this itinerary?
                    </h3>
                    <p className="text-xs text-stone-500 font-light mt-0.5">
                      {searchResults.length > 0
                        ? `Found ${searchResults.length} private Moroccan ${searchResults.length === 1 ? 'circuit' : 'circuits'} matching your destination`
                        : `No preset tour directly matched "${searchQuery}"`}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(false)}
                  className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
                  aria-label="Close suggestions"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Suggestions List */}
              {searchResults.length > 0 ? (
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                  {searchResults.slice(0, 4).map(({ tour, matchReason, snippet }) => (
                    <Link
                      key={tour.id}
                      href={`/itineraries/${tour.id}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3.5 rounded-2xl bg-stone-50/70 hover:bg-amber-50/50 border border-stone-200/70 hover:border-[#C05621]/40 transition-all duration-300 cursor-pointer block"
                    >
                      {/* Left: Thumbnail & Route */}
                      <div className="flex items-start gap-3.5 flex-1 min-w-0">
                        <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-stone-200 shrink-0 shadow-2xs">
                          <Image
                            src={tour.image}
                            alt={tour.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute bottom-1 right-1 bg-black/65 backdrop-blur-xs text-[9px] font-bold text-white px-1.5 py-0.5 rounded">
                            {tour.duration.split(" ")[0]}D
                          </span>
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C05621] font-semibold bg-[#C05621]/10 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                              <MapPin className="w-2.5 h-2.5" />
                              <span>{matchReason}</span>
                            </span>
                          </div>

                          {/* Itinerary Title with Matched Word Highlighted */}
                          <h4 className="font-serif font-bold text-sm sm:text-base text-[#4A3525] group-hover:text-[#C05621] transition-colors line-clamp-1 leading-snug">
                            {highlightMatches(tour.name, searchQuery)}
                          </h4>

                          {/* Matched Context Excerpt with Highlighted Keyword */}
                          <p className="text-[11px] sm:text-xs text-stone-600 font-light leading-relaxed line-clamp-2">
                            {highlightMatches(snippet, searchQuery)}
                          </p>
                        </div>
                      </div>

                      {/* Right: Price & Direct Arrow CTA */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200/60">
                        <span className="font-serif font-bold text-[#C2272D] text-sm sm:text-base">
                          {tour.price}
                        </span>
                        <span className="text-[11px] font-semibold text-stone-700 group-hover:text-[#C05621] flex items-center gap-1 mt-1 transition-colors">
                          <span>View Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center space-y-3">
                  <p className="text-xs text-stone-600 font-light">
                    We can customize a private itinerary to any city in Morocco! Tell our travel architect where you want to go.
                  </p>
                  <a
                    href="#custom-trip"
                    onClick={() => setIsDropdownOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#4A3525] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#322318] transition-colors"
                  >
                    <span>Request Custom Trip for &quot;{searchQuery}&quot;</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Quick City Filters Footer */}
              <div className="mt-4 pt-4 border-t border-stone-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider shrink-0">
                    Popular:
                  </span>
                  {POPULAR_CITIES.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => handleSelectCityChip(city)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                        searchQuery.toLowerCase() === city.toLowerCase()
                          ? "bg-[#4A3525] text-white"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="font-bold text-[#C05621] hover:underline flex items-center gap-1 text-[11px] uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  <span>Filter catalog below</span>
                  <span>↓</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
