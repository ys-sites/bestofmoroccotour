'use client';

import React from "react";
import { useLang, translate } from "../context/lang-context";
import { itinerariesData } from "@/data/itineraries";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ChevronRight, Phone } from "lucide-react";
import { getItineraryPath } from "@/data/itinerary-seo";

const SOCIALS = {
  instagram: "https://www.instagram.com/m.e.voyages?utm_source=qr",
  tiktok: "TODO_TIKTOK_URL",
  facebook: "https://www.facebook.com/share/1K4URaBPHt/?mibextid=wwXIfr",
  website: "/",
};
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=15149196381";
const PHONE = "15149196381";

const SIGNATURE_IDS = ["10", "11", "6"];

const QUICK_LINKS = [
  {
    label: { FR: "Golf Marrakech", EN: "Golf Marrakech" },
    url: "/golf-itineraries/marrakech",
  },
  {
    label: { FR: "Golf Agadir", EN: "Golf Agadir" },
    url: "/golf-itineraries/agadir",
  },
  {
    label: { FR: "Circuits & Tours", EN: "Tours & Circuits" },
    url: "/itineraries",
  },
  {
    label: { FR: "MICE & Corporatif", EN: "MICE & Corporate" },
    url: "/mice",
  },
  {
    label: { FR: "Voyage sur mesure", EN: "Custom Journey" },
    url: "/custom-trip",
  },
];

const TikTokIcon = () => (
  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Premium fadeUp with blur dissolve from hyliox-pixel-perfect
const premiumFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut" as any, delay },
});

export default function PortfolioClient() {
  const { lang, setLang } = useLang();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#eef2f3] to-[#e4e7eb] flex items-center justify-center font-sans antialiased text-zinc-800 selection:bg-[#C5A880]/20 selection:text-zinc-900 relative overflow-hidden">
      
      {/* Background Soft Glow Blobs matching screenshot */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C5A880]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[430px] mx-auto min-h-screen md:min-h-[850px] md:my-10 md:rounded-[2.5rem] md:border md:border-white/50 md:shadow-[0_25px_60px_rgba(0,0,0,0.06)] bg-white/45 backdrop-blur-2xl overflow-hidden flex flex-col relative px-6 py-10">
        
        {/* Cover Strip (Fast Loading Hero Image) */}
        <div className="relative w-full h-[180px] flex-shrink-0 bg-transparent overflow-hidden rounded-3xl shadow-inner z-10 border border-white/20">
          <img
            src="/images/golf_cover.jpg"
            alt="Golf in Morocco"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 pointer-events-none"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/95 z-10" />
        </div>

        {/* Animated Contents Column */}
        <div className="flex-1 flex flex-col -mt-12 relative z-10">
          
          {/* Logo & Header Info */}
          <motion.div {...premiumFadeUp(0)} className="flex flex-col items-center text-center space-y-3.5">
            {/* Double layered logo circle */}
            <div className="relative w-[100px] h-[100px] rounded-full p-1 border-2 border-[#C5A880] shadow-lg flex items-center justify-center bg-black">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/20 flex items-center justify-center bg-black">
                <img 
                  src="/images/logo.png" 
                  alt="Merveilles et Voyages Logo" 
                  className="w-[85%] h-[85%] object-contain" 
                  loading="eager" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 justify-center">
                <span className="font-sans text-xl font-extrabold tracking-tight text-zinc-900 leading-none">
                  Merveilles et Voyages
                </span>
                {/* Gold Verification badge icon */}
                <svg className="w-[18px] h-[18px] fill-current text-[#C5A880] shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>

              <p className="text-zinc-600 text-xs font-medium max-w-[280px] mx-auto leading-relaxed">
                {lang === "FR" ? "Golf & Voyages de Prestige — Maroc" : "Prestige Golf & Travel — Morocco"}
              </p>
              <p className="text-zinc-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                Canada
              </p>
            </div>
          </motion.div>

          {/* Social Icons (Theme colored circular buttons) */}
          <motion.div {...premiumFadeUp(0.04)} className="flex justify-center gap-3 mt-6">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] rounded-full bg-[#C5A880] hover:bg-[#b5966c] active:scale-90 text-zinc-950 flex items-center justify-center hover:scale-110 transition-all duration-150 shadow-[0_4px_10px_rgba(197,168,128,0.25)] cursor-pointer"
            >
              <InstagramIcon />
            </a>

            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] rounded-full bg-[#C5A880] hover:bg-[#b5966c] active:scale-90 text-zinc-950 flex items-center justify-center hover:scale-110 transition-all duration-150 shadow-[0_4px_10px_rgba(197,168,128,0.25)] cursor-pointer"
            >
              <FacebookIcon />
            </a>
            
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] rounded-full bg-[#C5A880] hover:bg-[#b5966c] active:scale-90 text-zinc-950 flex items-center justify-center hover:scale-110 transition-all duration-150 shadow-[0_4px_10px_rgba(197,168,128,0.25)] cursor-pointer"
            >
              <WhatsAppIcon />
            </a>

            <a
              href={`tel:${PHONE}`}
              className="w-[42px] h-[42px] rounded-full bg-[#C5A880] hover:bg-[#b5966c] active:scale-90 text-zinc-950 flex items-center justify-center hover:scale-110 transition-all duration-150 shadow-[0_4px_10px_rgba(197,168,128,0.25)] cursor-pointer"
            >
              <Phone className="w-4 h-4 stroke-2" />
            </a>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div {...premiumFadeUp(0.08)} className="grid grid-cols-2 gap-3 mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C5A880] hover:bg-[#b5966c] active:scale-95 text-zinc-950 font-bold uppercase text-[10px] tracking-wider rounded-full py-4 text-center transition-all shadow-[0_4px_12px_rgba(197,168,128,0.2)] hover:scale-[1.03] duration-150 cursor-pointer block"
            >
              {lang === "FR" ? "Écrivez-nous" : "Chat with us"}
            </a>
            <Link
              href="/"
              prefetch={true}
              className="border border-zinc-300/80 bg-white/40 hover:bg-white/80 active:scale-95 text-zinc-800 font-bold uppercase text-[10px] tracking-wider rounded-full py-4 text-center transition-all hover:scale-[1.03] duration-150 cursor-pointer block"
            >
              {lang === "FR" ? "Visiter le site" : "Visit website"}
            </Link>
          </motion.div>

          {/* Save Contact (Full-width outline button) */}
          <motion.div {...premiumFadeUp(0.12)} className="mt-4">
            <a
              href="/mevoyages.vcf"
              download="Merveilles-et-Voyages.vcf"
              className="flex items-center justify-center gap-2 w-full border border-zinc-300/90 bg-white/20 hover:bg-white/50 active:scale-95 text-zinc-700 hover:text-zinc-900 rounded-full py-4 text-center font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] duration-150 cursor-pointer"
            >
              <Download className="w-4 h-4 text-zinc-500" />
              <span>{lang === "FR" ? "Enregistrer le contact" : "Save contact"}</span>
            </a>
          </motion.div>

          {/* Signature Packages (Feature Cards layout matching screenshot) */}
          <div className="mt-8 space-y-4">
            <motion.h3 {...premiumFadeUp(0.16)} className="text-[#C5A880] font-mono text-[10px] tracking-[0.15em] font-bold uppercase mb-1">
              {lang === "FR" ? "Nos Signatures" : "Signature Journeys"}
            </motion.h3>
            <div className="space-y-4">
              {SIGNATURE_IDS.map((id, index) => {
                const pkg = itinerariesData[id];
                if (!pkg) return null;
                return (
                  <motion.div key={id} {...premiumFadeUp(0.18 + index * 0.04)}>
                    <div className="bg-white/40 border border-white/60 rounded-[2rem] p-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col space-y-3.5 hover:border-[#C5A880]/30 transition-all duration-200">
                      
                      {/* Package Card Top Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden bg-zinc-100 border border-white/40 shrink-0">
                          <img
                            src={pkg.image}
                            alt={translate(pkg.title, lang)}
                            className="w-full h-full object-cover"
                            loading="eager"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-[15px] font-bold text-zinc-900 leading-snug line-clamp-1">
                            {translate(pkg.title, lang)}
                          </h4>
                          <p className="text-zinc-500 text-xs mt-1 font-light leading-relaxed">
                            {translate(pkg.duration, lang)}
                          </p>
                          <span className="inline-block text-[#C5A880] font-mono text-[9px] tracking-wider uppercase font-bold mt-1.5">
                            {lang === "FR" ? "Forfait prestige" : "Prestige package"}
                          </span>
                        </div>
                      </div>

                      {/* Package Card Bottom Full Width Button (beige theme) */}
                      <Link
                        href={getItineraryPath(id)}
                        prefetch={true}
                        className="w-full bg-[#C5A880] hover:bg-[#b5966c] active:scale-95 text-zinc-950 font-sans font-bold text-[10px] tracking-[0.2em] uppercase py-3.5 rounded-full transition-all duration-150 shadow-[0_4px_12px_rgba(197,168,128,0.25)] text-center cursor-pointer block hover:scale-[1.01]"
                      >
                        {lang === "FR" ? "Voir l'itinéraire" : "View Itinerary"}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Glass Pills) */}
          <div className="mt-8 space-y-3">
            {QUICK_LINKS.map((link, idx) => (
              <motion.div key={idx} {...premiumFadeUp(0.30 + idx * 0.04)}>
                <Link
                  href={link.url}
                  prefetch={true}
                  className="block w-full bg-white/45 hover:bg-white/85 active:scale-95 border border-zinc-200 hover:border-[#C5A880]/50 rounded-full py-4 text-center text-xs font-bold uppercase tracking-wider text-zinc-800 transition-all hover:scale-[1.02] duration-150 shadow-sm cursor-pointer"
                >
                  {translate(link.label, lang)}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Micro */}
          <motion.div {...premiumFadeUp(0.78)} className="mt-auto pt-12 flex flex-col items-center gap-4">
            <div className="flex gap-4 text-xs font-mono">
              <button
                onClick={() => setLang("FR")}
                className={`transition-colors uppercase cursor-pointer font-bold ${
                  lang === "FR" ? "text-[#C5A880]" : "text-zinc-400 hover:text-zinc-900"
                }`}
              >
                FR
              </button>
              <span className="text-zinc-200">|</span>
              <button
                onClick={() => setLang("EN")}
                className={`transition-colors uppercase cursor-pointer font-bold ${
                  lang === "EN" ? "text-[#C5A880]" : "text-zinc-400 hover:text-zinc-900"
                }`}
              >
                EN
              </button>
            </div>
            <p className="text-zinc-400 text-[10px] tracking-widest uppercase font-mono">
              © Merveilles et Voyages
            </p>
          </motion.div></div>
      </div>
    </div>
  );
}
