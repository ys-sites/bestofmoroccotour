'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/data/bestOfMoroccoData";

// Section links point at the home page ("/#...") so they also work from subpages.
const NAV_LINKS = [
  { href: "/#tours", label: "Circuits", mobileLabel: "Circuits & Tours" },
  { href: "/#why-choose-us", label: "Why Choose Us", mobileLabel: "Why Choose Us" },
  { href: "/#guides", label: "Our Tour Guides", mobileLabel: "Our Tour Guides" },
  { href: "/#reviews", label: "Reviews", mobileLabel: "Verified Reviews" },
  { href: "/#faq", label: "FAQ", mobileLabel: "FAQ & Policies" },
  { href: "/#custom-trip", label: "Contact", mobileLabel: "Contact & Inquiry" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      // Owns its own sticky positioning + gutters so every page gets the same header
      className="sticky top-0 z-50 w-full max-w-[1360px] mx-auto px-3 sm:px-6 pt-3 sm:pt-4"
    >
      <div className="relative">
      {/* Elevated Pill Navbar with dedicated spacing from hero image */}
      <div className="w-full h-16 sm:h-[80px] lg:h-[88px] rounded-full pl-3 pr-2 sm:px-6 lg:px-7 flex items-center justify-between gap-2 bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-[0_12px_40px_rgba(74,53,37,0.08)] text-[#1E1B18] transition-all duration-300">
        {/* Left: Brand Identity Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group decoration-none min-w-0 py-1">
          <img
            src="/logo.png"
            alt="Best of Morocco Tours - H & A Voyage et Tourisme Inc."
            className="h-10 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 drop-shadow-sm"
          />
          <div className="flex flex-col justify-center leading-tight min-w-0">
            <div className="flex items-baseline gap-1 sm:gap-1.5 whitespace-nowrap">
              <span className="font-serif text-[15px] min-[360px]:text-[17px] sm:text-[21px] lg:text-[20px] xl:text-[23px] font-bold tracking-tight text-[#1E1B18]">
                Best of Morocco
              </span>
              <span className="font-serif italic text-[15px] min-[360px]:text-[17px] sm:text-[21px] lg:text-[20px] xl:text-[23px] text-[#C05621] font-medium">
                Tours
              </span>
            </div>
            <span className="hidden sm:block font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold whitespace-nowrap mt-0.5">
              Customized Private Morocco Tours
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links (desktop only) */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-[12.5px] xl:text-[13.5px] font-medium tracking-wide whitespace-nowrap shrink-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-stone-700 hover:text-[#C05621] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Phone Hotline & CTA Capsule (desktop) + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
          <a
            href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, '')}`}
            className="hidden 2xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11.5px] font-medium bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 transition-colors whitespace-nowrap shrink-0"
            title="Toll Free US & Canada Hotline"
          >
            <Phone className="w-3.5 h-3.5 text-[#C05621] shrink-0" />
            <span className="whitespace-nowrap">US &amp; CA: {siteConfig.phoneUsCa}</span>
          </a>

          <Link
            href="/#custom-trip"
            className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[11.5px] font-bold uppercase tracking-wider bg-[#4A3525] hover:bg-[#322318] text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">Plan Tour</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </Link>

          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-full text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors cursor-pointer shrink-0"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (overlays the page instead of pushing it down) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute left-0 right-0 top-full mt-2 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-[1.75rem] bg-white border border-stone-200 shadow-2xl p-5 sm:p-6 text-[#1E1B18]"
          >
            <nav className="flex flex-col font-serif text-lg font-semibold divide-y divide-stone-100">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 hover:text-[#C05621] transition-colors"
                >
                  {link.mobileLabel}
                </Link>
              ))}
              <Link
                href="/itineraries"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 hover:text-[#C05621] transition-colors"
              >
                All Itineraries
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 hover:text-[#C05621] transition-colors"
              >
                About Us
              </Link>
            </nav>

            <div className="mt-3 pt-4 border-t border-stone-200 flex flex-col gap-2.5 text-xs">
              <a href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-stone-600">
                <Phone className="w-3.5 h-3.5 text-[#C05621] shrink-0" />
                <span>US &amp; CA: <strong className="text-stone-900">{siteConfig.phoneUsCa}</strong></span>
              </a>
              <a href={`https://wa.me/${siteConfig.phoneMa.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-600">
                <Phone className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                <span>WhatsApp MA: <strong className="text-stone-900">{siteConfig.phoneMa}</strong></span>
              </a>
              <div className="text-[11px] text-stone-500 pt-1">
                Ministry Licence No. 2816 · Wholly Moroccan-Owned
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.header>
  );
}
