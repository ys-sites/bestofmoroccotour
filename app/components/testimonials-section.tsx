'use client';

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { useLang, translate } from "../context/lang-context";
import { Check, Shield } from "lucide-react";

interface Testimonial {
  quote: { EN: string; FR: string };
  name: string;
  location: string;
  tripName: { EN: string; FR: string };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: {
      EN: "From the tarmac greeting in Marrakech to the private helicopter over the Atlas — every detail was orchestrated with a level of care I've never experienced from any travel service. Truly sovereign.",
      FR: "De l'accueil sur le tarmac à Marrakech au vol en hélicoptère privé au-dessus de l'Atlas — chaque détail a été orchestré avec un niveau de soin que je n'ai jamais expérimenté. Véritablement souverain."
    },
    name: "Sophie L.",
    location: "Montréal, QC",
    tripName: { EN: "Morocco Prestige – Ultimate Luxury", FR: "Maroc Prestige – Luxe Ultime" },
    rating: 5
  },
  {
    quote: {
      EN: "The Royal Mansour Desert Camp was unlike anything in our 20 years of travel. Our concierge anticipated every need before we even knew we had one. We've already reserved our return.",
      FR: "Le Royal Mansour Desert Camp était sans égal en 20 ans de voyage. Notre concierge a anticipé tous nos besoins avant même que nous les connaissions. Nous avons déjà réservé notre retour."
    },
    name: "Karim & Nadia B.",
    location: "Toronto, ON",
    tripName: { EN: "Marrakech & Sahara Escape", FR: "Fuite Marrakech & Sahara" },
    rating: 5
  },
  {
    quote: {
      EN: "The Taghazout Bay Golf package was flawlessly planned. Tazegzout Golf's cliffside holes are unlike anything I've played in Europe. The Hilton staff treated us like royalty throughout.",
      FR: "Le forfait Golf de Taghazout Bay était impeccablement planifié. Les trous en falaise de Tazegzout Golf sont uniques en leur genre. Le personnel du Hilton nous a traités comme des rois."
    },
    name: "Marc-André T.",
    location: "Québec City, QC",
    tripName: { EN: "Bespoke Golf Escape in Taghazout", FR: "Golf de Prestige à Taghazout" },
    rating: 5
  },
  {
    quote: {
      EN: "Six rounds across Marrakech's finest courses — Royal Golf, Amelkis, Assoufid — with Atlas peaks as a backdrop. The all-inclusive experience at Hôtel du Golf was absolutely world-class.",
      FR: "Six parties sur les plus beaux parcours de Marrakech — Royal Golf, Amelkis, Assoufid — avec les sommets de l'Atlas en toile de fond. L'expérience tout-inclus à l'Hôtel du Golf était de classe mondiale."
    },
    name: "Jean-Paul R.",
    location: "Laval, QC",
    tripName: { EN: "Royal Golf & All-Inclusive Marrakech", FR: "Séjour Golf Royal à Marrakech" },
    rating: 5
  },
  {
    quote: {
      EN: "Chefchaouen, Fes, the Sahara, and Essaouira in one perfectly woven journey. Our private driver-guide was extraordinarily knowledgeable and felt like a true friend by the end.",
      FR: "Chefchaouen, Fès, le Sahara et Essaouira en un voyage parfaitement tissé. Notre chauffeur-guide privé était extraordinairement cultivé et semblait être un véritable ami à la fin."
    },
    name: "Isabelle & François D.",
    location: "Ottawa, ON",
    tripName: { EN: "Imperial Cities & Atlantic Coast", FR: "Villes Impériales & Côte Atlantique" },
    rating: 5
  },
  {
    quote: {
      EN: "Three nights in Erg Chebbi dunes was transformative. The Tiziri camp's silence, the Gnawa music in Khamlia, the stargazing — this is how travel should feel. 10/10 without hesitation.",
      FR: "Trois nuits dans les dunes d'Erg Chebbi fut transformateur. Le silence du camp Tiziri, la musique Gnawa à Khamlia, l'observation des étoiles — c'est ainsi que doit se sentir le voyage."
    },
    name: "Amélie G.",
    location: "Brossard, QC",
    tripName: { EN: "Sahara Deep Dive – Desert Immersion", FR: "Sahara Deep Dive – Immersion Désert" },
    rating: 5
  },
  {
    quote: {
      EN: "The family trip through Morocco's imperial cities was everything we hoped for and more. Volubilis at golden hour, the Fes medina, and the camel sunset in Merzouga — magical memories forever.",
      FR: "Le voyage en famille à travers les villes impériales du Maroc était tout ce que nous espérions. Volubilis à l'heure dorée, la médina de Fès et le coucher de soleil à chameau à Merzouga — des souvenirs magiques."
    },
    name: "The Bergeron Family",
    location: "Longueuil, QC",
    tripName: { EN: "Imperial Cities & Desert Discovery", FR: "Villes Impériales & Découverte Désert" },
    rating: 5
  },
  {
    quote: {
      EN: "I was skeptical about booking through a boutique agency, but Merveilles et Voyages exceeded every expectation. The attention to detail, the hand-picked hotels, and the 24/7 support were extraordinary.",
      FR: "J'étais sceptique quant à la réservation via une agence boutique, mais Merveilles et Voyages a dépassé toutes mes attentes. L'attention aux détails, les hôtels sélectionnés à la main et le support 24/7 étaient extraordinaires."
    },
    name: "David H.",
    location: "Vancouver, BC",
    tripName: { EN: "Morocco Prestige – Ultimate Luxury", FR: "Maroc Prestige – Luxe Ultime" },
    rating: 5
  }
];

const trustBadges = [
  { label: { EN: "Bilingual Assistance & Support", FR: "Assistance Bilingue & Accompagnement" }, icon: Check },
  { label: { EN: "256-Bit Secure Booking", FR: "Réservation Sécurisée 256-Bit" }, icon: Shield },
  { label: { EN: "100% Tailor-Made Itineraries", FR: "100% Itinéraires Sur Mesure" }, icon: Check },
  { label: { EN: "Canadian-Based, Globally Connected", FR: "Basé au Canada, Mondialement Connecté" }, icon: Check }
];

// Duplicate for seamless loop
const doubled = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const { lang } = useLang();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-24 bg-[#faf9f5]"
      style={{ background: "linear-gradient(135deg, #faf9f5 0%, #f5f3eb 50%, #faf9f5 100%)" }}
    >
      {/* Subtle radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,168,128,0.04)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,38,53,0.02)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 space-y-14">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3"
        >
          <span className="text-[#C5A880] font-mono text-[10px] tracking-[0.3em] uppercase block">
            {lang === "EN" ? "GUEST CHRONICLES" : "CHRONIQUES DE NOS VOYAGEURS"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            {lang === "EN" ? "Voices from the Journey" : "Voix du Voyage"}
          </h2>
          <p className="text-zinc-500 text-sm font-light max-w-xl mx-auto">
            {lang === "EN"
              ? "What our guests say about their curated Moroccan experience."
              : "Ce que nos voyageurs disent de leur expérience sur mesure au Maroc."
            }
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scroll Strip */}
      <div
        className="mt-12 w-full overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #faf9f5, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #faf9f5, transparent)" }} />

        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee-scroll 40s linear infinite;
          }
          .marquee-track.paused {
            animation-play-state: paused;
          }
        `}</style>

        <div className={`marquee-track flex gap-6 w-max ${isPaused ? 'paused' : ''}`}>
          {doubled.map((testimonial, index) => (
            <div
              key={index}
              className="w-[340px] shrink-0 relative rounded-2xl border p-7 space-y-5 backdrop-blur-sm shadow-sm"
              style={{
                background: "rgba(255,255,255,0.85)",
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              {/* Gold quote mark */}
              <span
                className="absolute top-5 right-7 text-5xl font-serif leading-none select-none pointer-events-none"
                style={{ color: "rgba(197,168,128,0.22)" }}
              >
                "
              </span>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: "#C5A880" }} className="text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[13.5px] leading-relaxed text-zinc-600 font-light italic line-clamp-4">
                &ldquo;{translate(testimonial.quote, lang)}&rdquo;
              </blockquote>

              {/* Guest Info */}
              <div className="border-t pt-4 space-y-0.5" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <p className="font-semibold text-zinc-800 text-sm">{testimonial.name}</p>
                <p className="text-[12px] text-zinc-500 font-light">{testimonial.location}</p>
                <p className="text-[11px] font-mono tracking-wide" style={{ color: "#C5A880" }}>
                  {translate(testimonial.tripName, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-[1200px] mx-auto px-6 mt-16">
        <div className="border-t pt-8" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-[12px] text-zinc-600 font-light"
                >
                  <IconComponent style={{ color: "#C5A880" }} className="w-4 h-4 shrink-0" />
                  <span>{translate(badge.label, lang)}</span>
                  {index < trustBadges.length - 1 && (
                    <span className="hidden md:inline text-zinc-300 ml-2">•</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
