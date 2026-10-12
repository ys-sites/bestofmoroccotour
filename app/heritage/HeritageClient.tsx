'use client';

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { 
  Building2, 
  MapPin, 
  Plane, 
  Compass, 
  Sparkles, 
  Music, 
  Camera, 
  ArrowRight, 
  Award, 
  Globe2, 
  CheckCircle2,
  Briefcase,
  Palmtree,
  Star,
  ChevronRight,
  Landmark,
  Utensils,
  Layers,
  ShieldCheck,
  Sun
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MapSection from "../components/map-section";
import SmartVideo from "../components/smart-video";
import { useLang, translate } from "../context/lang-context";
import { videoSources } from "@/data/videoSources";
import {
  UNESCO_SITES,
  IMPERIAL_CITIES,
  LANDSCAPE_STRIP,
  CRAFT_TRADITIONS,
  CUISINE_HIGHLIGHTS
} from "@/data/heritageData";

// Direct Flight Departure Gateways
const DEPARTURE_CITIES = [
  { code: "YUL", name: "Montréal", country: "Canada", note: { EN: "Direct non-stop service", FR: "Vols directs sans escale" } },
  { code: "JFK", name: "New York", country: "USA", note: { EN: "Daily direct flights", FR: "Vols directs quotidiens" } },
  { code: "IAD", name: "Washington D.C.", country: "USA", note: { EN: "Direct capital hub", FR: "Hub de la capitale" } },
  { code: "LAX", name: "Los Angeles", country: "USA", note: { EN: "West Coast gateway", FR: "Portail Côte Ouest" } },
  { code: "YYZ", name: "Toronto", country: "Canada", note: { EN: "Direct & connecting hubs", FR: "Vols directs & correspondances" } },
];

/**
 * React-Bits Inspired Interactive Spotlight Card
 * Tracks mouse movement across the card to display a dynamic golden light glow
 * and subtle 3D tilt effect.
 */
function SpotlightCard({ 
  children, 
  className = "", 
  spotlightColor = "rgba(184, 151, 90, 0.14)" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  spotlightColor?: string; 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Spotlight Radial Light Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

// Staggered Container Animation Variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 15,
    },
  },
};

export default function HeritageClient() {
  const { lang } = useLang();
  const [isYoutubePlaying, setIsYoutubePlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1A17] font-body antialiased selection:bg-[#C5A880] selection:text-white overflow-x-hidden">
      {/* Dark header band — gives the shared transparent Navbar a solid dark background on this page only */}
      <div className="relative bg-[#1C1A17]" style={{ height: "76px" }}>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 bg-gradient-to-b from-[#F4F0EA] via-[#FAF8F5] to-[#FAF8F5] text-[#1C1A17] overflow-hidden border-b border-[#E8E2D8]">
        {/* Ambient Pulsing Glow Backdrop (React-Bits Ambient Glow) */}
        <motion.div 
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-radial from-[#B8975A]/20 via-[#B8975A]/5 to-transparent rounded-full blur-[100px] pointer-events-none z-0" 
        />

        {/* Decorative Architectural Pattern Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1C1A17_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Editorial Copy Column */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#D4C8B5] bg-white/80 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8975A] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#8C6D37] uppercase font-semibold">
                {lang === "FR" ? "Patrimoine & Culture Exclusifs" : "Exclusive Heritage & Culture"}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1A17] leading-[1.08]">
                {lang === "FR" ? (
                  <>Une Seule Destination. <span className="block italic font-normal font-serif text-[#B8975A] animate-shimmer-gold-light">Une Expertise Sans Limites.</span></>
                ) : (
                  <>One Destination. <span className="block italic font-normal font-serif text-[#B8975A] animate-shimmer-gold-light">Endless Expertise.</span></>
                )}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-[#4A4640] text-base sm:text-lg font-light leading-relaxed max-w-xl"
            >
              {lang === "FR"
                ? "Que vous planifiiez un événement d'entreprise de prestige (MICE), un circuit culturel immersif ou des vacances classiques inoubliables, nous sommes vos spécialistes exclusifs du Maroc."
                : "Whether you are planning an executive corporate event (MICE), an immersive cultural tour, or an unforgettable classic vacation, we are your dedicated Morocco specialists."
              }
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="pt-2 flex flex-wrap gap-4 items-center"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/#contact-form"
                  className="bg-[#1C1A17] hover:bg-[#36332E] text-white font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2.5 group"
                >
                  <span>{lang === "FR" ? "Créer Mon Voyage Sur Mesure" : "Design Custom Journey"}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4B87E] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#unesco-sites"
                  className="bg-white border border-[#D4C8B5] hover:border-[#1C1A17] text-[#1C1A17] font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md block"
                >
                  {lang === "FR" ? "Découvrir les 9 Sites UNESCO" : "Explore 9 UNESCO Sites"}
                </a>
              </motion.div>
            </motion.div>

            {/* Quick Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="pt-6 border-t border-[#E8E2D8] flex items-center gap-8 text-[#78726A] text-xs font-mono uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8975A]" />
                <span>{lang === "FR" ? "100% Spécialiste Maroc" : "100% Morocco Specialist"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8975A]" />
                <span>{lang === "FR" ? "Conciergerie Bilingue 24/7" : "24/7 Bilingual Concierge"}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Video Card with Spotlight & 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(28,26,23,0.12)] border-4 border-white bg-white w-full h-[480px] lg:h-[540px] group">
              <SmartVideo
                source={videoSources.marrakech}
                variant="hero"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Overlay Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E2D8] shadow-lg text-[#1C1A17] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B8975A] font-bold">
                    {lang === "FR" ? "Joyau Architectural" : "Architectural Masterpiece"}
                  </span>
                  <span className="text-[10px] font-mono text-[#78726A]">Marrakech, Morocco</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C1A17]">
                  {lang === "FR" ? "L'Élégance des Riads Royaux" : "The Elegance of Royal Riads"}
                </h4>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Specialization Pillar Cards */}
      <section className="py-20 px-6 md:px-12 bg-white border-b border-[#E8E2D8]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          
          <motion.div variants={itemVariants}>
            <SpotlightCard className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-4 hover:border-[#B8975A] shadow-sm hover:shadow-md group h-full">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D4C8B5] flex items-center justify-center text-[#B8975A] group-hover:scale-110 transition-transform shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                {lang === "FR" ? "Spécialisation Exclusive" : "Exclusive Specialization"}
              </h3>
              <p className="text-[#4A4640] text-xs sm:text-sm leading-relaxed font-light">
                {lang === "FR"
                  ? "Contrairement aux agences généralistes, nous nous consacrons exclusivement au Maroc. Notre maîtrise du terrain vous garantit un accès inédit et privilégié."
                  : "Unlike generalist travel agencies, we focus exclusively on Morocco. Our deep ground expertise ensures unmatched access and privileged privileges."
                }
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SpotlightCard className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-4 hover:border-[#B8975A] shadow-sm hover:shadow-md group h-full">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D4C8B5] flex items-center justify-center text-[#B8975A] group-hover:scale-110 transition-transform shadow-sm">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                {lang === "FR" ? "Flexibilité Multi-Villes" : "Multi-City Departure Flexibility"}
              </h3>
              <p className="text-[#4A4640] text-xs sm:text-sm leading-relaxed font-light">
                {lang === "FR"
                  ? "Vols directs et réguliers au départ de Montréal, New York, Washington D.C., Los Angeles et Toronto pour une logistique aérienne fluide."
                  : "Scheduled direct flights departing from Montreal, New York, Washington D.C., Los Angeles, and Toronto tailored to your travel preference."
                }
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SpotlightCard className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-4 hover:border-[#B8975A] shadow-sm hover:shadow-md group h-full">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D4C8B5] flex items-center justify-center text-[#B8975A] group-hover:scale-110 transition-transform shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                {lang === "FR" ? "Conciergerie Bilingue 24/7" : "24/7 Bilingual Concierge"}
              </h3>
              <p className="text-[#4A4640] text-xs sm:text-sm leading-relaxed font-light">
                {lang === "FR"
                  ? "Assistance de prestige bilingue (français et anglais) disponible 24h/24, de l'élaboration de votre itinéraire jusqu'à votre retour."
                  : "Bilingual prestige concierge available round-the-clock in English and French from itinerary creation to your safe return."
                }
              </p>
            </SpotlightCard>
          </motion.div>

        </motion.div>
      </section>

      {/* SECTION 2: Nine Kingdoms of Heritage — Morocco's 9 UNESCO World Heritage Sites */}
      <section id="unesco-sites" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4C8B5] bg-white text-[#8C6D37] font-mono text-[10px] uppercase tracking-[0.25em] font-semibold shadow-sm">
              <Landmark className="w-3.5 h-3.5 text-[#B8975A]" />
              <span>{lang === "FR" ? "Un Royaume Reconnu par le Monde" : "A Kingdom Recognized by the World"}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1A17] tracking-tight">
              {lang === "FR" 
                ? "Neuf Sites du Patrimoine Mondial de l'UNESCO. Un Seul Pays Extraordinaire." 
                : "Nine UNESCO World Heritage Sites. One Extraordinary Country."
              }
            </h2>
            <p className="text-[#4A4640] text-sm sm:text-base font-light leading-relaxed">
              {lang === "FR"
                ? "Le Maroc abrite la plus forte concentration de joyaux du patrimoine protégé de l'Afrique du Nord-Ouest. Chaque cité préserve des siècles d'artisanat d'art, d'architecture en terre et d'épopées impériales."
                : "Morocco possesses the richest density of protected UNESCO heritage sites in Western North Africa. Each site holds centuries of master crafting, earthen fortresses, and imperial sagas."
              }
            </p>
          </motion.div>

          {/* 9 UNESCO Sites Grid with Stagger & Spotlight Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {UNESCO_SITES.map((site) => (
              <motion.div key={site.id} variants={itemVariants}>
                <SpotlightCard className="bg-white rounded-3xl border border-[#E8E2D8] overflow-hidden hover:border-[#B8975A] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    {/* Card Header Image & Overlay Badges */}
                    <div className="relative h-48 overflow-hidden bg-zinc-900">
                      <img 
                        src={site.image} 
                        alt={translate(site.name, lang)}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#D4B87E] bg-[#1C1A17]/90 px-3 py-1 rounded-full backdrop-blur-md border border-[#D4C8B5]/30">
                          {site.num}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-white bg-[#B8975A] px-2.5 py-1 rounded-full font-bold shadow-sm">
                          UNESCO {site.year}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 block">
                          {translate(site.city, lang)}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-white leading-snug">
                          {translate(site.name, lang)}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] text-[9px] font-mono uppercase tracking-wider text-[#8C6D37] font-semibold">
                        {translate(site.bestFor, lang)}
                      </div>
                      <p className="text-[#4A4640] text-xs leading-relaxed font-light">
                        {translate(site.description, lang)}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="px-6 pb-6 pt-2 border-t border-[#FAF8F5]">
                    <Link
                      href="/#contact-form"
                      className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-[#1C1A17] uppercase tracking-wider group-hover:text-[#B8975A] transition-colors"
                    >
                      <span>{lang === "FR" ? "Explorer cette région →" : "Explore This Region →"}</span>
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: The Four Imperial Cities Comparative Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F0EA] border-b border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8C6D37] font-semibold">
              {lang === "FR" ? "Quatre Capitales. Une Couronne Éternelle." : "Four Capitals. One Eternal Crown."}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1A17]">
              {lang === "FR" ? "Le Circuit des Cités Impériales" : "The Four Imperial Capitals"}
            </h2>
            <p className="text-[#4A4640] text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              {lang === "FR"
                ? "Contrairement aux destinations à capitale unique, le Maroc a vu quatre dynasties historiques ériger leur propre cité impériale. Un circuit multi-villes est la seule façon de saisir l'étendue du Royaume."
                : "Unlike single-capital destinations, Morocco has four historic royal seats founded by distinct dynasties. A multi-city passage is the authentic way to experience the Kingdom."
              }
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {IMPERIAL_CITIES.map((city) => (
              <motion.div key={city.id} variants={itemVariants}>
                <SpotlightCard className="bg-white rounded-3xl border border-[#E8E2D8] p-6 space-y-5 hover:border-[#B8975A] shadow-sm hover:shadow-lg flex flex-col justify-between group h-full">
                  <div className="space-y-4">
                    <div className="relative h-40 rounded-2xl overflow-hidden bg-zinc-900 border border-[#E8E2D8]">
                      <img 
                        src={city.image} 
                        alt={translate(city.name, lang)}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[8px] font-mono uppercase tracking-widest text-[#1C1A17] font-bold">
                        {translate(city.dynasty, lang)}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#1C1A17] leading-snug">
                      {translate(city.name, lang)}
                    </h3>

                    <div className="space-y-2 pt-1 border-t border-[#FAF8F5]">
                      <div className="text-[11px] text-[#2D2A26] font-medium flex items-center gap-2">
                        <Landmark className="w-3.5 h-3.5 text-[#B8975A] shrink-0" />
                        <span>{translate(city.landmark, lang)}</span>
                      </div>
                      <div className="text-[11px] text-[#8C6D37] font-mono uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#B8975A] shrink-0" />
                        <span>{translate(city.craft, lang)}</span>
                      </div>
                    </div>

                    <p className="text-[#4A4640] text-xs font-light leading-relaxed">
                      {translate(city.highlight, lang)}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: Beyond the Medinas — Landscape & Regional Diversity Strip */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D8] overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8C6D37] font-semibold">
                {lang === "FR" ? "Diversité Géographique" : "Geographic Diversity"}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1A17]">
                {lang === "FR" ? "Au-delà des Médinas : Déserts, Montagnes & Littoral" : "Beyond the Medinas: Deserts, Peaks & Swells"}
              </h2>
            </div>
            <p className="text-[#4A4640] text-xs sm:text-sm max-w-md font-light leading-relaxed">
              {lang === "FR"
                ? "Des sommets enneigés de 4 167m aux dunes géantes du Sahara et aux vagues atlantiques, découvrez la spectaculaire variété de paysages marocains."
                : "From 4,167m snow-capped mountains to Sahara dunes and Atlantic coastlines, explore Morocco's breath-taking landscape spectrum."
              }
            </p>
          </motion.div>

          {/* Horizontally Scrollable Strip (Snap Scroll) */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-none">
            {LANDSCAPE_STRIP.map((item) => (
              <div 
                key={item.id}
                className="snap-center shrink-0 w-[280px] sm:w-[340px] rounded-3xl overflow-hidden bg-white border border-[#E8E2D8] hover:border-[#B8975A] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-zinc-900">
                  <img 
                    src={item.image} 
                    alt={translate(item.title, lang)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/85 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[8px] font-mono uppercase tracking-widest bg-white/90 text-[#1C1A17] font-bold backdrop-blur-md shadow-sm">
                      {translate(item.region, lang)}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <h3 className="font-serif text-lg font-bold">
                      {translate(item.title, lang)}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-[#4A4640] text-xs font-light leading-relaxed">
                    {translate(item.caption, lang)}
                  </p>
                  <Link
                    href="/#contact-form"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1C1A17] uppercase tracking-wider group-hover:text-[#B8975A] transition-colors pt-2"
                  >
                    <span>{lang === "FR" ? "Explorer ce paysage →" : "Explore Landscape →"}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: UNESCO Cultural & Musical Spotlight & Craft Masterclass */}
      <section className="py-24 px-6 md:px-12 bg-[#F4F0EA] border-b border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4C8B5] pb-8"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#8C6D37] font-mono text-[10px] uppercase tracking-[0.25em] font-semibold">
                <Music className="w-3.5 h-3.5 text-[#B8975A]" />
                <span>{lang === "FR" ? "Spotlight Culturel & Musique UNESCO" : "UNESCO Cultural & Musical Spotlight"}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1A17] tracking-tight">
                {lang === "FR" ? "L'Âme & Le Patrimoine du Maroc" : "The Soul & Heritage of Morocco"}
              </h2>
            </div>
            <p className="text-[#4A4640] text-xs sm:text-sm max-w-md font-light leading-relaxed">
              {lang === "FR"
                ? "Découvrez l'harmonie fascinante entre les traditions musicales séculaires, l'architecture des médinas et le charme intemporel des cités royales."
                : "Experience the mesmerizing harmony between centuries-old musical traditions, Medina architecture, and the timeless charm of royal cities."
              }
            </p>
          </motion.div>

          {/* Embedded UNESCO YouTube Video Player (Facade for Performance) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(28,26,23,0.08)] bg-white relative">
              <div className="relative w-full aspect-video bg-zinc-900 group cursor-pointer overflow-hidden">
                {!isYoutubePlaying ? (
                  <div 
                    onClick={() => setIsYoutubePlaying(true)}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <img 
                      src="https://img.youtube.com/vi/9wfdX2N1RA0/hqdefault.jpg" 
                      alt="UNESCO Moroccan Heritage & Music" 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute w-16 h-16 rounded-full bg-[#B8975A] text-zinc-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-zinc-950 ml-1" />
                    </div>
                    <span className="absolute bottom-4 left-4 text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                      {lang === "FR" ? "Cliquer pour lire la vidéo" : "Click to Play Video"}
                    </span>
                  </div>
                ) : (
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/9wfdX2N1RA0?autoplay=1&vq=hd720&hd=1&rel=0&modestbranding=1" 
                    title="UNESCO Moroccan Heritage & Music" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-white text-[#8C6D37] border border-[#D4C8B5] font-semibold shadow-sm inline-block">
                  {lang === "FR" ? "Patrimoine Culturel Immatériel UNESCO" : "UNESCO Intangible Cultural Heritage"}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
                  {lang === "FR" ? "Musique Traditionnelle & Cités Impériales" : "Traditional Music & Imperial Cities"}
                </h3>
                <p className="text-[#4A4640] text-xs sm:text-sm font-light leading-relaxed">
                  {lang === "FR"
                    ? "De la médina millénaire de Fès el-Bali aux kasbahs spectaculaires d'Aït-Ben-Haddou et aux jardins luxuriants de Marrakech, chaque itinéraire que nous traçons célèbre le patrimoine authentique du royaume."
                    : "From the thousand-year-old Medina of Fes el-Bali to the majestic Kasbahs of Ait Ben Haddou and the lush gardens of Marrakech, every passage we design celebrates the authentic kingdom heritage."
                  }
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-[#2D2A26]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8975A] shrink-0 mt-0.5" />
                  <span>{lang === "FR" ? "Visites privées avec historiens du patrimoine agréés" : "Private guided tours with certified heritage historians"}</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#2D2A26]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8975A] shrink-0 mt-0.5" />
                  <span>{lang === "FR" ? "Séjours exclusifs dans des Riads royaux restaurés" : "Exclusive stays in authentically restored royal Riads"}</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#2D2A26]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8975A] shrink-0 mt-0.5" />
                  <span>{lang === "FR" ? "Expériences musicales andalouses et nomades privées" : "Private Andalusian and nomadic musical performances"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Master Craftsmanship Breakdown Grid with SpotlightCards */}
          <div className="pt-8 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
              {lang === "FR" ? "Les Merveilles de l'Artisanat Marocain" : "Master Crafts & Living Traditions"}
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
            >
              {CRAFT_TRADITIONS.map((craft) => (
                <motion.div key={craft.id} variants={itemVariants}>
                  <SpotlightCard className="bg-white rounded-3xl border border-[#E8E2D8] p-8 space-y-4 hover:border-[#B8975A] shadow-sm hover:shadow-md h-full">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#B8975A] font-bold bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#E8E2D8] whitespace-nowrap shrink-0">
                        {translate(craft.badge, lang)}
                      </span>
                      <span className="text-[10px] font-mono text-[#78726A] text-right">{craft.origin}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-[#1C1A17]">
                        {translate(craft.title, lang)}
                      </h4>
                      <p className="font-mono text-[10px] text-[#8C6D37]">
                        {translate(craft.subtitle, lang)}
                      </p>
                    </div>

                    <p className="text-[#4A4640] text-xs font-light leading-relaxed">
                      {translate(craft.description, lang)}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 6: Flavors of the Kingdom — Heritage Cuisine Trio */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4C8B5] bg-white text-[#8C6D37] font-mono text-[10px] uppercase tracking-[0.25em] font-semibold shadow-sm">
              <Utensils className="w-3.5 h-3.5 text-[#B8975A]" />
              <span>{lang === "FR" ? "Patrimoine Gastronomique" : "Culinary Heritage"}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1A17]">
              {lang === "FR" ? "Saveurs du Royaume : L'Hospitalité comme Art Ancestral" : "Flavors of the Kingdom: Hospitality as an Art"}
            </h2>
            <p className="text-[#4A4640] text-xs sm:text-sm font-light leading-relaxed">
              {lang === "FR"
                ? "De la cérémonie du thé à la menthe aux épices rares du souk et aux coopératives d'argan protégées par l'UNESCO, chaque repas est un voyage au cœur de la culture marocaine."
                : "From mint tea pouring ceremonies to rare souk spices and UNESCO-protected argan cooperatives, every feast tells an ancestral story."
              }
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {CUISINE_HIGHLIGHTS.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <SpotlightCard className="bg-white rounded-3xl border border-[#E8E2D8] overflow-hidden hover:border-[#B8975A] shadow-sm hover:shadow-xl group flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-48 overflow-hidden bg-zinc-900">
                      <img 
                        src={item.image} 
                        alt={translate(item.title, lang)}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#D4B87E] block font-bold">
                          {translate(item.subtitle, lang)}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-white leading-snug">
                          {translate(item.title, lang)}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-[#4A4640] text-xs font-light leading-relaxed">
                        {translate(item.description, lang)}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-[#FAF8F5]">
                    <Link
                      href="/#contact-form"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#1C1A17] uppercase tracking-wider group-hover:text-[#B8975A] transition-colors"
                    >
                      <span>{lang === "FR" ? "Réserver une table privée →" : "Book Private Dining →"}</span>
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3-Card Experience Showcase (Off-White Editorial Style) */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8C6D37] font-semibold">
              {lang === "FR" ? "Offres sur Mesure" : "Tailored Offerings"}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1A17]">
              {lang === "FR"
                ? "Que vous planifiiez un événement d'entreprise, un circuit culturel ou des vacances de luxe..."
                : "Whether you are planning a corporate event, cultural tour, or classic vacation..."
              }
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            
            {/* Card 1: MICE */}
            <motion.div variants={itemVariants}>
              <SpotlightCard className="p-8 rounded-3xl bg-white border border-[#E8E2D8] space-y-6 flex flex-col justify-between hover:border-[#B8975A] shadow-sm hover:shadow-lg group h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#D4C8B5] flex items-center justify-center text-[#B8975A] group-hover:scale-110 transition-transform shadow-sm">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#8C6D37] font-bold block">
                    {lang === "FR" ? "Événements d'Entreprise" : "Corporate Events"}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
                    {lang === "FR" ? "MICE & Séminaires de Prestige" : "MICE & Executive Retreats"}
                  </h3>
                  <p className="text-[#4A4640] text-xs sm:text-sm font-light leading-relaxed">
                    {lang === "FR"
                      ? "Organisation clé en main de congrès, séminaires, retraites exécutives et lancements de produits d'exception à Marrakech et Casablanca."
                      : "Turnkey event management of corporate conventions, executive retreats, and product launches in Marrakech and Casablanca."
                    }
                  </p>
                </div>
                <Link
                  href="/mice"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1C1A17] uppercase tracking-wider group-hover:text-[#B8975A] transition-colors"
                >
                  <span>{lang === "FR" ? "Explorer MICE →" : "Explore MICE →"}</span>
                </Link>
              </SpotlightCard>
            </motion.div>

            {/* Card 2: Cultural Tours */}
            <motion.div variants={itemVariants}>
              <SpotlightCard className="p-8 rounded-3xl bg-white border border-[#E8E2D8] space-y-6 flex flex-col justify-between hover:border-[#B8975A] shadow-sm hover:shadow-lg group h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#D4C8B5] flex items-center justify-center text-[#B8975A] group-hover:scale-110 transition-transform shadow-sm">
                    <Compass className="w-7 h-7" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#8C6D37] font-bold block">
                    {lang === "FR" ? "Immersion Culturelle" : "Cultural Immersion"}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
                    {lang === "FR" ? "Circuits Villes Impériales & Sahara" : "Imperial Cities & Sahara Tours"}
                  </h3>
                  <p className="text-[#4A4640] text-xs sm:text-sm font-light leading-relaxed">
                    {lang === "FR"
                      ? "Circuits privés guidés à la découverte des 4 cités impériales, des oasis du désert, des dunes de Merzouga et de l'artisanat d'art."
                      : "Private guided tours exploring Morocco's 4 imperial cities, desert oases, Merzouga sand dunes, and master craft workshops."
                    }
                  </p>
                </div>
                <Link
                  href="/#contact-form"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1C1A17] uppercase tracking-wider group-hover:text-[#B8975A] transition-colors"
                >
                  <span>{lang === "FR" ? "Personnaliser Mon Circuit →" : "Customize Cultural Tour →"}</span>
                </Link>
              </SpotlightCard>
            </motion.div>

            {/* Card 3: Golf & Relaxation */}
            <motion.div variants={itemVariants}>
              <SpotlightCard className="p-8 rounded-3xl bg-white border border-[#E8E2D8] space-y-6 flex flex-col justify-between hover:border-[#B8975A] shadow-sm hover:shadow-lg group h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#D4C8B5] flex items-center justify-center text-[#B8975A] group-hover:scale-110 transition-transform shadow-sm">
                    <Palmtree className="w-7 h-7" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#8C6D37] font-bold block">
                    {lang === "FR" ? "Vacances & Golf" : "Vacations & Golf"}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
                    {lang === "FR" ? "Séjours Golf Royal & Détente 5★" : "Royal Golf & 5★ Relaxation"}
                  </h3>
                  <p className="text-[#4A4640] text-xs sm:text-sm font-light leading-relaxed">
                    {lang === "FR"
                      ? "Forfaits golf d'élite sur les parcours de Tanger, Fès, Michlifen, Marrakech et Agadir avec hébergement 5★ et conciergerie 24/7."
                      : "Elite golf packages on premier courses in Tangier, Fez, Michlifen, Marrakech, and Agadir featuring 5★ luxury resorts and 24/7 concierge."
                    }
                  </p>
                </div>
                <Link
                  href="/itineraries?type=Golf"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1C1A17] uppercase tracking-wider group-hover:text-[#B8975A] transition-colors"
                >
                  <span>{lang === "FR" ? "Voir nos Forfaits Golf →" : "View Golf Packages →"}</span>
                </Link>
              </SpotlightCard>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Multi-City Direct Flight Gateway Hubs */}
      <section className="py-20 px-6 md:px-12 bg-[#F4F0EA] border-b border-[#E8E2D8]">
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8C6D37] font-semibold">
              {lang === "FR" ? "Vols Amérique du Nord → Maroc" : "North America → Morocco Direct Flights"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17]">
              {lang === "FR" ? "Envolez-vous Depuis Votre Métropole" : "Depart From Your Preferred Gateway"}
            </h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {DEPARTURE_CITIES.map((city, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <SpotlightCard className="p-5 rounded-2xl bg-white border border-[#E8E2D8] text-center space-y-2 hover:border-[#B8975A] shadow-sm">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF8F5] text-[#B8975A] mx-auto border border-[#E8E2D8]">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div className="font-mono text-sm font-bold text-[#8C6D37]">{city.code}</div>
                  <div className="font-serif text-base font-bold text-[#1C1A17]">{city.name}</div>
                  <div className="text-[10px] font-mono text-[#78726A]">{translate(city.note, lang)}</div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Kingdom Map Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-3 max-w-2xl mx-auto"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8C6D37] font-semibold">
              {lang === "FR" ? "Carte du Royaume" : "Interactive Kingdom Map"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A17]">
              {lang === "FR" ? "Explorez les Régions du Maroc" : "Explore Morocco's Regions"}
            </h2>
          </motion.div>
          <MapSection />
        </div>
      </section>

      {/* Editorial Luxury Concierge CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#1C1A17] text-white text-center relative overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#B8975A]/10 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8 relative z-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4B87E] block font-semibold">
            {lang === "FR" ? "Conciergerie de Prestige" : "Prestige Concierge"}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            {lang === "FR"
              ? "Prêt à vivre le vrai Maroc avec les spécialistes de la destination ?"
              : "Ready to experience authentic Morocco with true destination specialists?"
            }
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-light max-w-xl mx-auto">
            {lang === "FR"
              ? "Contactez nos architectes de voyage pour concevoir votre itinéraire sur mesure en 24h."
              : "Contact our travel architects to craft your bespoke passage within 24 hours."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#contact-form"
                className="bg-[#B8975A] hover:bg-[#9E7F44] text-zinc-950 font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#B8975A]/20 block"
              >
                {lang === "FR" ? "Demander Mon Devis Sur Mesure" : "Request Custom Quote"}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="tel:5149196381"
                aria-label="Call +1 514 919 6381"
                className="border border-zinc-600 hover:border-white text-zinc-200 hover:text-white font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-all duration-300 block"
              >
                {lang === "FR" ? "Appeler le 514 919 6381" : "Call +1 (514) 919-6381"}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
