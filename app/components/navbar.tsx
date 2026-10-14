'use client';

import { useState } from "react";
import Link from "next/link";
import { Phone, Compass, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/data/bestOfMoroccoData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {/* Elevated Pill Navbar with dedicated spacing from hero image */}
      <div className="w-full h-[66px] rounded-full px-4 sm:px-6 lg:px-7 flex items-center justify-between bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-[0_10px_35px_rgba(74,53,37,0.06)] text-[#1E1B18] transition-all duration-300">
        {/* Left: Brand Identity Logo (Strictly 1 Line) */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group decoration-none shrink-0 py-1 whitespace-nowrap">
          <img
            src="/logo.png"
            alt="H & A Voyage et Tourisme Inc. - Artisan du Bonheur"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
          />
          <div className="flex items-baseline gap-1.5 whitespace-nowrap">
            <span className="font-serif text-[16px] sm:text-[18px] font-bold tracking-tight text-[#1E1B18] whitespace-nowrap">
              Best of Morocco
            </span>
            <span className="font-serif italic text-[16px] sm:text-[18px] text-[#C05621] whitespace-nowrap">
              Tours
            </span>
          </div>
        </Link>

        {/* Center: Clean Navigation Links (Strictly 1 Line with No Wrapping) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7 mx-2 lg:mx-4 text-[13px] font-medium tracking-wide whitespace-nowrap shrink-0">
          <a
            href="#tours"
            className="text-stone-700 hover:text-[#C05621] transition-colors whitespace-nowrap inline-flex items-center gap-1"
          >
            <span>Circuits</span>
            <span className="text-[10px] text-stone-500">▾</span>
          </a>
          <a
            href="#why-choose-us"
            className="text-stone-700 hover:text-[#C05621] transition-colors whitespace-nowrap"
          >
            Why Choose Us
          </a>
          <a
            href="#guides"
            className="text-stone-700 hover:text-[#C05621] transition-colors whitespace-nowrap"
          >
            Our Tour Guides
          </a>
          <a
            href="#festivals"
            className="text-stone-700 hover:text-[#C05621] transition-colors whitespace-nowrap"
          >
            Festivals
          </a>
          <a
            href="#reviews"
            className="text-stone-700 hover:text-[#C05621] transition-colors whitespace-nowrap"
          >
            Reviews
          </a>
          <a
            href="#custom-trip"
            className="text-stone-700 hover:text-[#C05621] transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Right: Phone Hotline & CTA Capsule (Strictly 1 Line) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
          {/* Direct Phone / WhatsApp Toggle */}
          <a
            href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, '')}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] font-medium bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 transition-colors whitespace-nowrap shrink-0"
            title="Toll Free US & Canada Hotline"
          >
            <Phone className="w-3 h-3 text-[#C05621] shrink-0" />
            <span className="whitespace-nowrap">US &amp; CA: {siteConfig.phoneUsCa}</span>
          </a>

          {/* Book / Custom Trip Capsule */}
          <a
            href="#custom-trip"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#4A3525] hover:bg-[#322318] text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">Plan Tour</span>
            <ArrowUpRight className="w-3 h-3 shrink-0" />
          </a>

          {/* Mobile Menu Button */}
          <button
            suppressHydrationWarning
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-2 w-full rounded-[2rem] bg-white/98 backdrop-blur-2xl border border-stone-200 shadow-2xl p-6 text-[#1E1B18] space-y-4"
          >
            <div className="flex flex-col space-y-3 font-serif text-lg font-semibold">
              <a
                href="#tours"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C05621] transition-colors"
              >
                Circuits &amp; Tours
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C05621] transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#guides"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C05621] transition-colors"
              >
                Our Tour Guides
              </a>
              <a
                href="#festivals"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C05621] transition-colors"
              >
                Cultural Festivals
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C05621] transition-colors"
              >
                Verified Reviews
              </a>
              <a
                href="#custom-trip"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C05621] transition-colors"
              >
                Contact &amp; Inquiry
              </a>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5 text-xs">
              <div className="flex items-center gap-2 text-stone-600">
                <Phone className="w-3.5 h-3.5 text-[#C05621]" />
                <span>US &amp; CA: <strong className="text-stone-900">{siteConfig.phoneUsCa}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <Phone className="w-3.5 h-3.5 text-[#059669]" />
                <span>WhatsApp MA: <strong className="text-stone-900">{siteConfig.phoneMa}</strong></span>
              </div>
              <div className="text-[11px] text-stone-500 pt-1">
                Ministry Licence No. 2816 · Wholly Moroccan-Owned
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
