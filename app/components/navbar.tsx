'use client';

import { useState } from "react";
import Link from "next/link";
import { Phone, Compass, Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/bestOfMoroccoData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Elevated Pill Navbar with dedicated spacing from hero image */}
      <div className="w-full h-[68px] rounded-full px-6 sm:px-8 flex items-center justify-between bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-[0_10px_35px_rgba(74,53,37,0.06)] text-[#1E1B18] transition-all duration-300">
        {/* Left: Brand Identity */}
        <Link href="/" className="flex items-center gap-2.5 group decoration-none shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#4A3525] text-amber-200 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 shadow-xs">
            <Compass className="w-4 h-4" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-[17px] sm:text-[19px] font-bold tracking-tight text-[#1E1B18]">
              Best of Morocco
            </span>
            <span className="font-serif italic text-[16px] sm:text-[18px] text-[#C05621]">
              Tours
            </span>
          </div>
        </Link>

        {/* Center: Clean Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 ml-4 lg:ml-8 text-[13px] font-medium tracking-wide">
          <a
            href="#tours"
            className="text-stone-700 hover:text-[#C05621] transition-colors"
          >
            Circuits ▾
          </a>
          <a
            href="#why-choose-us"
            className="text-stone-700 hover:text-[#C05621] transition-colors"
          >
            Why Choose Us
          </a>
          <a
            href="#guides"
            className="text-stone-700 hover:text-[#C05621] transition-colors"
          >
            Our Tour Guides
          </a>
          <a
            href="#festivals"
            className="text-stone-700 hover:text-[#C05621] transition-colors"
          >
            Festivals
          </a>
          <a
            href="#reviews"
            className="text-stone-700 hover:text-[#C05621] transition-colors"
          >
            Reviews
          </a>
          <a
            href="#custom-trip"
            className="text-stone-700 hover:text-[#C05621] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right: Phone Hotline & CTA Capsule */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Direct Phone / WhatsApp Toggle */}
          <a
            href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 transition-colors"
            title="Toll Free US & Canada Hotline"
          >
            <Phone className="w-3 h-3 text-[#C05621]" />
            <span>US & CA: {siteConfig.phoneUsCa}</span>
          </a>

          {/* Book / Custom Trip Capsule */}
          <a
            href="#custom-trip"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#4A3525] hover:bg-[#322318] text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Plan Tour</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 w-full rounded-[2rem] bg-white border border-stone-200 shadow-2xl p-6 text-[#1E1B18] space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-3 font-serif text-lg font-semibold">
            <a
              href="#tours"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C05621] transition-colors"
            >
              Circuits & Tours
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
              Contact & Inquiry
            </a>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5 text-xs">
            <div className="flex items-center gap-2 text-stone-600">
              <Phone className="w-3.5 h-3.5 text-[#C05621]" />
              <span>US & CA: <strong className="text-stone-900">{siteConfig.phoneUsCa}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-stone-600">
              <Phone className="w-3.5 h-3.5 text-[#059669]" />
              <span>WhatsApp MA: <strong className="text-stone-900">{siteConfig.phoneMa}</strong></span>
            </div>
            <div className="text-[11px] text-stone-500 pt-1">
              Ministry Licence No. 2816 · Wholly Moroccan-Owned
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
