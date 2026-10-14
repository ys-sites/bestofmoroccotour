'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Calendar, Compass, ShieldCheck, Award } from "lucide-react";
import { motion } from "motion/react";
import { MoroccanCornerSpandrel, MoroccanMedallionArt } from "./moroccan-art-motifs";
import { easeOutExpo } from "@/lib/animations";

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

  // Subtle auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      onSearch(searchQuery);
    }
    const el = document.getElementById("tours");
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.45, ease: easeOutExpo }}
        className="absolute left-1/2 bottom-0 w-full max-w-[1020px] -translate-x-1/2 translate-y-1/2 z-30 px-4"
      >
        <form
          onSubmit={handleSearchSubmit}
          suppressHydrationWarning
          className="relative w-full rounded-[2rem] bg-white/98 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_15px_45px_rgba(74,53,37,0.14)] flex flex-col md:flex-row items-center justify-between gap-2 border border-stone-200/90 hover:shadow-[0_20px_55px_rgba(74,53,37,0.18)] transition-shadow duration-300"
        >
          {/* Input 1: Destination / Tour Name */}
          <div className="flex-1 flex items-center gap-3 px-5 py-2.5 md:py-0 border-b md:border-b-0 md:border-r border-stone-200/80 w-full">
            <Search className="w-4 h-4 text-[#C05621] shrink-0" />
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Enter tour name or city (e.g. Marrakech, Fes, Merzouga...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-[#1E1B18] placeholder-stone-400 focus:outline-none font-sans font-medium"
            />
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
      </motion.div>
    </section>
  );
}
