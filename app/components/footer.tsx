'use client';

import Link from "next/link";
import { useLang, translate } from "../context/lang-context";
import { getItineraryPath } from "@/data/itinerary-seo";

const t = {
  description: {
    FR: "Nous organisons des voyages de golf sur mesure et d'ultra-luxe au Maroc. Vivez l'expérience d'une intimité absolue et d'un voyage souverain.",
    EN: "We curate ultra-luxury exclusive golf journeys across Morocco. Experience absolute privacy and sovereign travel."
  },
  destinations: {
    FR: "Destinations",
    EN: "Destinations"
  },
  morocco: {
    FR: "Rabat — Royal Golf Dar Es Salam",
    EN: "Rabat — Royal Golf Dar Es Salam"
  },
  agadirGolf: {
    FR: "Golf Agadir",
    EN: "Agadir Golf"
  },
  marrakechGolf: {
    FR: "Golf Marrakech",
    EN: "Marrakech Golf"
  },
  mice: {
    FR: "MICE & Corporatif",
    EN: "MICE & Corporate"
  },

  company: {
    FR: "Expériences",
    EN: "Experiences"
  },
  about: {
    FR: "À Propos",
    EN: "About Us"
  },
  news: {
    FR: "Récits de Voyage",
    EN: "Travel Stories"
  },
  customTrip: {
    FR: "Voyage Sur Mesure",
    EN: "Custom Trip Builder"
  },
  contact: {
    FR: "Contacts",
    EN: "Contact"
  },
  copyright: {
    FR: "© 2026 Merveilles et Voyages. Tous droits réservés.",
    EN: "© 2026 Merveilles et Voyages. All rights reserved."
  },
  privacySignoff: {
    FR: "Politique de Confidentialité",
    EN: "Privacy signoff"
  },
  escrowTerms: {
    FR: "Conditions de Dépôt Fiduciaire",
    EN: "Security Escrow Terms"
  },
  brandName1: { FR: "Merveilles", EN: "Merveilles" },
  brandName2: { FR: "et Voyages", EN: "et Voyages" },
  phone: { FR: "514 919 MEV1", EN: "514 919 MEV1" },
  email: { FR: "info@mevoyages.com", EN: "info@mevoyages.com" }
};

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 relative overflow-hidden select-none" id="contacts">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white/70 px-6">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              className="h-24 md:h-28 w-auto object-contain hover:opacity-90 transition-opacity duration-300" 
              alt="Merveilles et Voyages Logo" 
            />
          </div>
          <p className="text-[12px] text-white/50 leading-relaxed font-light max-w-[240px]">
            {translate(t.description, lang)}
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            <a 
              href="https://www.facebook.com/share/1K4URaBPHt/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/50 hover:text-brand-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/m.e.voyages?utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/50 hover:text-brand-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a 
              href="https://wa.me/15149196381" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/50 hover:text-brand-gold transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-[18px] h-[18px] fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Destinations */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {translate(t.destinations, lang)}
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li><Link href={getItineraryPath(10)} className="hover:text-brand-gold transition-colors">Rabat</Link></li>
            <li><Link href={getItineraryPath(18)} className="hover:text-brand-gold transition-colors">Michlifen</Link></li>
            <li><Link href={getItineraryPath(6)} className="hover:text-brand-gold transition-colors">Casablanca</Link></li>
            <li><Link href={getItineraryPath(7)} className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Meknès" : "Meknes"}</Link></li>
            <li><Link href={getItineraryPath(7)} className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Fès" : "Fes"}</Link></li>
            <li><Link href={getItineraryPath(17)} className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Tanger" : "Tangier"}</Link></li>
            <li><Link href={getItineraryPath(6)} className="hover:text-brand-gold transition-colors">Chefchaouen</Link></li>
            <li><Link href={getItineraryPath(6)} className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Tétouan" : "Tetouan"}</Link></li>
            <li><Link href={getItineraryPath(9)} className="hover:text-brand-gold transition-colors">Merzouga</Link></li>
            <li><Link href={getItineraryPath(8)} className="hover:text-brand-gold transition-colors">Ouarzazate</Link></li>
            <li><Link href="/golf-itineraries/marrakech" className="hover:text-brand-gold transition-colors">Marrakech</Link></li>
            <li><Link href="/golf-itineraries/agadir" className="hover:text-brand-gold transition-colors">Agadir</Link></li>
            <li><Link href={getItineraryPath(7)} className="hover:text-brand-gold transition-colors">Essaouira</Link></li>
            <li><Link href="/custom-trip" className="hover:text-brand-gold transition-colors">Dakhla</Link></li>
          </ul>
        </div>

        {/* Column 3: Company & Services */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {lang === "FR" ? "Services & Compagnie" : "Services & Company"}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li><Link href="/#about" className="hover:text-brand-gold transition-colors">{translate(t.about, lang)}</Link></li>
            <li><Link href="/conditions" className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Conditions Générales" : "General Conditions"}</Link></li>
            <li><Link href="/#contacts" className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Contact" : "Contact"}</Link></li>
            <li><Link href="/conditions" className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Assurance Voyage" : "Travel Insurance"}</Link></li>
            <li><Link href="/mice" className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Services aux Entreprises (MICE)" : "Corporate Services (MICE)"}</Link></li>
            <li><Link href="/heritage" className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Patrimoine & Culture Maroc" : "Morocco Heritage & Culture"}</Link></li>
            <li><Link href="/custom-trip" className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Voyages Scolaires" : "School Trips"}</Link></li>
            <li><Link href="/travel-stories" className="hover:text-brand-gold transition-colors">{translate(t.news, lang)}</Link></li>
            <li><Link href="/agence-de-voyage-montreal" className="hover:text-brand-gold transition-colors">{lang === "FR" ? "Agence de Voyage Montréal" : "Montreal Travel Agency"}</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="flex flex-col gap-4" id="about">
          <h4 className="font-heading text-[12px] font-bold uppercase tracking-wider text-white">
            {translate(t.contact, lang)}
          </h4>
          <ul className="flex flex-col gap-2.5 text-[12px] text-white/50 font-light list-none p-0">
            <li>
              <a href="tel:5149196381" className="hover:text-brand-gold transition-colors">
                {translate(t.phone, lang)}
              </a>
            </li>
            <li>
              <a href={`mailto:${translate(t.email, lang)}`} className="hover:text-brand-gold transition-colors">
                {translate(t.email, lang)}
              </a>
            </li>
            <li className="pt-2 border-t border-white/5 text-white/40 leading-relaxed text-[11px]">
              14050 rue des saules<br />
              Mirabel, Québec J7N 3G3
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright border */}
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center text-[11px] text-white/55 px-6">
        {/* Left: Copyright */}
        <span className="text-center md:text-left order-3 md:order-none">{translate(t.copyright, lang)}</span>
        
        {/* Center: YS Marketing Solutions Signature */}
        <div className="flex justify-center items-center order-1 md:order-none">
          <a 
            href="https://www.ysdev.ca" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ys-signature-btn"
          >
            <img 
              src="/YS.png" 
              alt="YS Logo" 
              className="ys-sig-logo" 
            />
            <span className="ys-sig-text">
              Made by <strong className="ys-sig-highlight">YS Marketing Solutions</strong> <span className="ys-sig-divider">|</span> Marketing Agency
            </span>
          </a>
        </div>

        {/* Right: Legal links */}
        <div className="flex justify-center md:justify-end items-center gap-6 font-light order-2 md:order-none">
          <Link href="/conditions" className="hover:text-brand-gold transition-colors">{translate(t.privacySignoff, lang)}</Link>
        </div>
      </div>
    </footer>
  );
}
