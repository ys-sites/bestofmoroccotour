'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Shield, Lock, Send, CheckCircle2 } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang, translate } from "../context/lang-context";

// Places/Experiences from Client Request itineraries
const DESTINATIONS = [
  { id: "marrakech", title: { EN: "Marrakech (Medina & Bahia Palace)", FR: "Marrakech (Médina & Palais de la Bahia)" }, region: "Morocco" },
  { id: "rabat", title: { EN: "Rabat (Mausoleum & Oudayas)", FR: "Rabat (Mausolée & Oudayas)" }, region: "Morocco" },
  { id: "casablanca", title: { EN: "Casablanca (Hassan II Mosque)", FR: "Casablanca (Mosquée Hassan II)" }, region: "Morocco" },
  { id: "chefchaouen", title: { EN: "Chefchaouen (Rif Mountains & Blue Medina)", FR: "Chefchaouen (Monts du Rif & Médina Bleue)" }, region: "Morocco" },
  { id: "sahara", title: { EN: "Sahara Dunes (Erg Chebbi Desert Camp)", FR: "Dunes du Sahara (Campement Erg Chebbi)" }, region: "Morocco" },
  { id: "fes", title: { EN: "Fes (Ancient Medina & Tanneries)", FR: "Fès (Ancienne Médina & Tanneries)" }, region: "Morocco" },
  { id: "meknes", title: { EN: "Meknes & Volubilis (Roman Ruins)", FR: "Meknès & Volubilis (Ruines Romaines)" }, region: "Morocco" },
  { id: "skoura", title: { EN: "Skoura & Dades Valley (Valley of Roses)", FR: "Skoura & Vallée du Dadès (Vallée des Roses)" }, region: "Morocco" },
  { id: "ouarzazate", title: { EN: "Ouarzazate & Ait Ben Haddou (Kasbahs)", FR: "Ouarzazate & Aït Ben Haddou (Kasbahs)" }, region: "Morocco" },
  { id: "essaouira", title: { EN: "Essaouira (Atlantic Coast Port)", FR: "Essaouira (Port de la Côte Atlantique)" }, region: "Morocco" },
  { id: "atlas", title: { EN: "Atlas Mountains (Imlil Valley Trekking)", FR: "Montagnes de l'Atlas (Trek Vallée d'Imlil)" }, region: "Morocco" },
  { id: "tangier", title: { EN: "Tangier (Gibraltar Strait & Cap Spartel)", FR: "Tanger (Détroit de Gibraltar & Cap Spartel)" }, region: "Morocco" }
];

// Activities / Add-ons from Client Request itineraries
const ACTIVITIES = [
  { id: "fasttrack", title: { EN: "VIP Airport Meet & Greet & Fast-Track", FR: "Accueil VIP & Fast-Track Aéroport" }, standard: true, premiumOnly: false, cost: 200 },
  { id: "aperitif", title: { EN: "Sunset Bouregreg River Aperitif", FR: "Apéritif au Coucher du Soleil sur le Bouregreg" }, standard: true, premiumOnly: false, cost: 150 },
  { id: "workshop", title: { EN: "Private Calligraphy or Pottery Masterclass", FR: "Atelier Privé de Calligraphie ou Poterie" }, standard: true, premiumOnly: false, cost: 250 },
  { id: "camel", title: { EN: "Camel Trekking & Sunset Campfire Experience", FR: "Randonnée à Chameau & Feu de Camp Experience" }, standard: true, premiumOnly: false, cost: 180 },
  { id: "excursion", title: { EN: "Private 4x4 Excursion in Erg Chebbi", FR: "Excursion Privée en 4x4 dans l'Erg Chebbi" }, standard: true, premiumOnly: false, cost: 350 },
  { id: "balloon", title: { EN: "Marrakech Hot Air Balloon Flight", FR: "Vol en Montgolfière au-dessus de Marrakech" }, standard: true, premiumOnly: false, cost: 450 },
  { id: "spa", title: { EN: "Traditional Hammam & Luxury Spa Treatment", FR: "Hammam Traditionnel & Soins de Spa de Luxe" }, standard: true, premiumOnly: false, cost: 300 },
  { id: "tea", title: { EN: "Moroccan Tea Ceremony with Local Family", FR: "Cérémonie du Thé Traditionnelle chez l'Habitant" }, standard: true, premiumOnly: false, cost: 120 },
  { id: "trekking", title: { EN: "Atlas Mountain Guided Trekking", FR: "Trek Guidé dans les Montagnes de l'Atlas" }, standard: true, premiumOnly: false, cost: 280 },
  { id: "anima", title: { EN: "Anima Garden & Bahia Palace Guided Tour", FR: "Visite Guidée Jardin Anima & Palais de la Bahia" }, standard: true, premiumOnly: false, cost: 160 }
];

const t = {
  headerWelcome: {
    EN: "ORCHESTRATE YOUR MOROCCAN JOURNEY",
    FR: "ORCHESTREZ VOTRE VOYAGE AU MAROC"
  },
  headerTitle: {
    EN: "Custom Morocco Itinerary",
    FR: "Votre Voyage sur Mesure au Maroc"
  },
  standardTab: {
    EN: "Exclusive Passage",
    FR: "Passage Sur Mesure"
  },
  premiumTab: {
    EN: "Sovereign Prestige",
    FR: "Souverain de Prestige"
  },
  stepDestinations: {
    EN: "1. Select Destinations / Experiences",
    FR: "1. Sélectionnez les Destinations / Expériences"
  },
  stepActivities: {
    EN: "2. Premium Activities & Charters",
    FR: "2. Activités & Chartes de Prestige"
  },
  stepDuration: {
    EN: "3. Duration & Timeline",
    FR: "3. Durée & Chronologie"
  },
  stepContact: {
    EN: "4. Contact & Selected Itineraries",
    FR: "4. Contact & Itinéraires Sélectionnés"
  },
  estimateCost: {
    EN: "Estimated Package Value",
    FR: "Valeur Estimée du Package"
  },
  estimateCostVal: {
    EN: "On Request",
    FR: "Sur demande"
  },
  submitInquiry: {
    EN: "Send My Enquiry →",
    FR: "Envoyer Mon Enquête →"
  },
  reassurance: {
    EN: "No payment is taken at this stage. Our concierge will contact you within 24 hours to begin crafting your passage.",
    FR: "Aucun paiement n'est effectué à ce stade. Notre concierge vous contactera dans les 24 heures pour commencer à concevoir votre passage."
  },
  moroccoLabel: { EN: "Morocco", FR: "Maroc" }
};

export default function CustomTripClient() {
  const { lang } = useLang();
  
  // Custom states
  const isPremium = true;
  const [selectedDests, setSelectedDests] = useState<string[]>([]);
  const [selectedActs, setSelectedActs] = useState<string[]>([]);
  const [nights, setNights] = useState(7);
  
  // Contact & Travel details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [departureCity, setDepartureCity] = useState("Montreal");

  // Passenger details
  const [passengerCount, setPassengerCount] = useState(1);
  const [passengerAges, setPassengerAges] = useState<number[]>([0]);

  const updatePassengerCount = (delta: number) => {
    setPassengerCount(prev => {
      const next = Math.min(12, Math.max(1, prev + delta));
      setPassengerAges(ages => {
        const copy = [...ages];
        while (copy.length < next) copy.push(0);
        return copy.slice(0, next);
      });
      return next;
    });
  };

  const updatePassengerAge = (idx: number, val: number) => {
    setPassengerAges(ages => ages.map((age, i) => i === idx ? val : age));
  };

  // Submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Toggle handlers
  const toggleDest = (id: string) => {
    setSelectedDests(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleAct = (id: string) => {
    setSelectedActs(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Cost calculations in CAD
  const calculateTotalCost = () => {
    const destsCount = selectedDests.length;
    const baseCostPerNight = isPremium ? 4500 : 1200;
    const destCost = destsCount * 800; // C$800 premium per destination
    
    // Sum activities
    const actCost = selectedActs.reduce((acc, actId) => {
      const act = ACTIVITIES.find(a => a.id === actId);
      return acc + (act ? act.cost : 0);
    }, 0);

    return (baseCostPerNight * nights) + destCost + actCost;
  };

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Compile payload
    const payload = {
      isPremium,
      destinations: selectedDests,
      activities: selectedActs,
      nights,
      departureCity,
      contact: { fullName, email, phone },
      totalCostCAD: calculateTotalCost()
    };

    try {
      // API request to trigger simulated/SMTP email
      const response = await fetch("/api/send-custom-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        // Confetti burst
        if (typeof window !== "undefined" && "confetti" in window) {
          const globalWindow = window as Window & {
            confetti?: (options: {
              particleCount: number;
              spread: number;
              origin: { y: number };
              colors: string[];
            }) => void;
          };
          if (typeof globalWindow.confetti === "function") {
            globalWindow.confetti({
              particleCount: 150,
              spread: 80,
              origin: { y: 0.6 },
              colors: ['#D4AF37', '#FFFFFF', '#FFDF73']
            });
          }
        }
      }
    } catch (err) {
      console.error("API error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-body antialiased bg-white text-zinc-900">
      <Navbar />

      {/* Parallax Header */}
      <section className="relative h-[45vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-12 px-6 md:px-12">
        {/* Background image */}
        <img
          src="/images/custom_trip_hero_bg.png"
          alt="Exclusive Custom Trip"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-white" />
        {/* Extra top darkening so navbar text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-brand-gold font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold hover:text-zinc-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{lang === "FR" ? "Retour à l'accueil" : "Back to Home"}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {translate(t.headerWelcome, lang)}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight font-bold">
              {translate(t.headerTitle, lang)}
            </h1>
          </div>
        </div>
      </section>


      {/* Main Form Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto z-20 relative">
        


        {/* Form Wizard */}
        {!isSuccess ? (
          <form onSubmit={handleCustomSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Steps Panel (Span 8) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Step 1: Destinations */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl md:text-2xl border-b pb-4 text-zinc-900 border-zinc-200">
                  {translate(t.stepDestinations, lang)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DESTINATIONS.map((dest) => {
                    const active = selectedDests.includes(dest.id);
                    return (
                      <div
                        key={dest.id}
                        onClick={() => toggleDest(dest.id)}
                        className={`p-4 border rounded-[1.2rem] flex items-center justify-between cursor-pointer transition-luxury ${
                          active
                            ? 'border-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.08)]'
                            : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400">
                            {dest.region}
                          </span>
                          <h4 className="text-xs md:text-sm font-semibold text-zinc-800">
                            {translate(dest.title, lang)}
                          </h4>
                        </div>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 ${active ? 'border-brand-gold bg-brand-gold text-black' : 'border-zinc-200 bg-transparent'}`}>
                          {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Activities */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl md:text-2xl border-b pb-4 text-zinc-900 border-zinc-200">
                  {translate(t.stepActivities, lang)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ACTIVITIES.map((act) => {
                    const active = selectedActs.includes(act.id);
                    const disabled = act.premiumOnly && !isPremium;
                    return (
                      <div
                        key={act.id}
                        onClick={() => !disabled && toggleAct(act.id)}
                        className={`p-4 border rounded-[1.2rem] flex items-center justify-between transition-luxury ${
                          disabled
                            ? 'opacity-30 border-zinc-200 bg-transparent cursor-not-allowed'
                            : active
                              ? 'border-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.08)] cursor-pointer'
                              : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300 cursor-pointer'
                        }`}
                      >
                        <div className="space-y-1 pr-4">
                          {act.premiumOnly && (
                            <span className="text-[8px] font-mono uppercase bg-brand-gold/10 text-brand-gold border border-brand-gold/25 px-1.5 py-0.5 rounded">
                              {lang === "FR" ? "PRESTIGE UNIQUEMENT" : "PREMIUM ONLY"}
                            </span>
                          )}
                          <h4 className="text-xs md:text-sm font-semibold pt-1 text-zinc-800">
                            {translate(act.title, lang)}
                          </h4>
                        </div>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 ${active ? 'border-brand-gold bg-brand-gold text-black' : 'border-zinc-200 bg-transparent'}`}>
                          {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Duration & Budget */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl md:text-2xl border-b pb-4 text-zinc-900 border-zinc-200">
                  {translate(t.stepDuration, lang)}
                </h3>
                <div className="p-6 md:p-8 border rounded-[1.5rem] space-y-4 bg-zinc-50/50 border-zinc-200">
                  {/* Display-only duration value — controlled by the sidebar slider */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400">
                        {lang === "FR" ? "Durée sélectionnée" : "Selected duration"}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold font-heading tabular-nums text-zinc-900">
                          {nights}
                        </span>
                        <span className="text-sm font-light text-zinc-500">
                          {lang === "FR" ? "nuits" : "nights"}
                        </span>
                      </div>
                    </div>
                    <div className="text-[11px] font-light text-right max-w-[160px] leading-relaxed text-zinc-400">
                      {lang === "FR"
                        ? "Ajustez via le curseur dans le panneau de droite →"
                        : "Adjust with the slider in the booking panel →"
                      }
                    </div>
                  </div>

                  {/* Mini visual progress bar — read-only */}
                  <div className="h-[3px] rounded-full overflow-hidden bg-zinc-200">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${((nights - 5) / 25) * 100}%`,
                        background: '#C5A880'
                      }}
                    />
                  </div>

                  <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                    <span>5 {lang === "FR" ? "nuits" : "nights"}</span>
                    <span>30 {lang === "FR" ? "nuits" : "nights"}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Booking Sidebar Panel (Span 4) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
              
              <div className="p-6 md:p-8 border rounded-[1.5rem] relative overflow-hidden space-y-6 bg-zinc-50/50 border-zinc-200 shadow-md text-zinc-900">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />
                
                <div className="pb-4 space-y-1 border-b border-zinc-200">
                  <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase block">
                    {translate(t.estimateCost, lang)}
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold font-serif uppercase tracking-wide text-zinc-900">
                      {translate(t.estimateCostVal, lang)}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] tracking-widest uppercase border-b pb-2 border-zinc-200">
                    {translate(t.stepContact, lang)}
                  </h4>
                  
                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Votre nom" : "Your name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sterling Hunt"
                      className="w-full px-4 py-3 text-xs focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Votre adresse courriel" : "Your email address"}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sterling@portfolio.com"
                      className="w-full px-4 py-3 text-xs focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Numéro de téléphone" : "Your phone number"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (514) 555-0199"
                      className="w-full px-4 py-3 text-xs focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 bg-white border border-zinc-200 text-zinc-800 placeholder-zinc-400"
                    />
                  </div>

                  {/* Departure City Selector */}
                  <div>
                    <label htmlFor="departure-city-select" className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Ville de départ préférée" : "Preferred departure city"}
                    </label>
                    <select
                      id="departure-city-select"
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      aria-label={lang === "FR" ? "Ville de départ préférée" : "Preferred departure city"}
                      className="w-full px-4 py-3 text-xs focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 bg-white border border-zinc-200 text-zinc-800 font-medium cursor-pointer"
                    >
                      <option value="Montreal">Montréal (YUL) — Québec / Canada</option>
                      <option value="New York">New York (JFK / EWR) — USA</option>
                      <option value="Washington D.C.">Washington D.C. (IAD) — USA</option>
                      <option value="Los Angeles">Los Angeles (LAX) — USA</option>
                      <option value="Toronto">Toronto (YYZ) — Ontario / Canada</option>
                      <option value="Other">Other North American City / Autre ville</option>
                    </select>
                  </div>

                  {/* Travelling party (Passengers) */}
                  <div className="pt-4 border-t space-y-3 border-zinc-200">
                    <div className="flex items-center justify-between">
                      <label className="text-[9px] font-mono tracking-widest uppercase text-brand-gold font-bold">
                        {lang === "FR" ? "Groupe de voyage" : "Travelling party"}
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updatePassengerCount(-1)}
                          aria-label={lang === "FR" ? "Réduire le nombre de passagers" : "Decrease passenger count"}
                          className="w-7 h-7 rounded-full border flex items-center justify-center font-bold text-sm transition-colors cursor-pointer border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700"
                        >−</button>
                        <span className="text-[14px] font-bold font-heading tabular-nums w-5 text-center text-zinc-900">{passengerCount}</span>
                        <button
                          type="button"
                          onClick={() => updatePassengerCount(1)}
                          aria-label={lang === "FR" ? "Augmenter le nombre de passagers" : "Increase passenger count"}
                          className="w-7 h-7 rounded-full border flex items-center justify-center font-bold text-sm transition-colors cursor-pointer border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700"
                        >+</button>
                      </div>
                    </div>

                    {/* Per-passenger age inputs */}
                    <div className="grid grid-cols-2 gap-2">
                      {passengerAges.map((age, idx) => (
                        <div key={idx} className="flex flex-col gap-0.5">
                          <label htmlFor={`passenger-age-${idx}`} className="text-[8px] font-mono uppercase tracking-wider text-zinc-400">
                            {lang === "FR" ? `Passager ${idx + 1}` : `Passenger ${idx + 1}`}
                          </label>
                          <div className="flex items-center gap-1.5 border rounded-lg px-2.5 py-1.5 bg-zinc-50 border-zinc-200">
                            <input
                              id={`passenger-age-${idx}`}
                              type="number"
                              min={0}
                              max={120}
                              value={age === 0 ? "" : age}
                              onChange={(e) => updatePassengerAge(idx, parseInt(e.target.value) || 0)}
                              placeholder="Age"
                              aria-label={lang === "FR" ? `Âge passager ${idx + 1}` : `Passenger ${idx + 1} age`}
                              className="w-full bg-transparent text-xs focus:outline-none tabular-nums text-zinc-800 placeholder-zinc-300"
                            />
                            <span className="text-[9px] font-mono shrink-0 text-zinc-400">
                              {lang === "FR" ? "ans" : "yrs"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nights Duration Slider */}
                  <div className="pt-4 border-t space-y-3 border-zinc-200">
                    <div className="flex items-center justify-between">
                      <label htmlFor="duration-nights-slider" className="text-[9px] font-mono tracking-widest uppercase text-brand-gold font-bold">
                        {lang === "FR" ? "Durée préférée" : "Preferred duration"}
                      </label>
                      <span className="text-[13px] font-bold font-heading tabular-nums text-zinc-900">
                        {nights} {lang === "FR" ? "Nuits" : "Nights"}
                      </span>
                    </div>
                    <div className="relative pt-1">
                      <input
                        id="duration-nights-slider"
                        type="range"
                        min={5}
                        max={30}
                        step={1}
                        value={nights}
                        onChange={(e) => setNights(Number(e.target.value))}
                        aria-label={lang === "FR" ? "Durée du séjour en nuits" : "Stay duration in nights"}
                        className="w-full h-[3px] appearance-none rounded-full cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #C5A880 ${((nights - 5) / 25) * 100}%, #e4e4e7 ${((nights - 5) / 25) * 100}%)`
                        }}
                      />
                      <div className="flex justify-between mt-2 font-mono text-[9px] text-zinc-400">
                        <span>5</span>
                        <span>15</span>
                        <span>30</span>
                      </div>
                    </div>
                  </div>

                  {/* Selected Itineraries / Experiences */}
                  {selectedDests.length > 0 && (
                    <div className="pt-4 border-t space-y-2 border-zinc-200">
                      <label className="block text-[9px] font-mono tracking-widest uppercase text-zinc-500">
                        {lang === "FR" ? "Destinations sélectionnées" : "Selected Itineraries"}
                      </label>
                      <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                        {selectedDests.map(id => {
                          const dest = DESTINATIONS.find(d => d.id === id);
                          return dest ? (
                            <span key={id} className="text-[9px] font-medium border px-2.5 py-1 rounded-full transition-colors duration-1000 bg-zinc-100 border-zinc-200 text-zinc-700">
                              {translate(dest.title, lang)}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* Selected Activities */}
                  {selectedActs.length > 0 && (
                    <div className="pt-4 border-t space-y-2 border-zinc-200">
                      <label className="block text-[9px] font-mono tracking-widest uppercase text-zinc-500">
                        {lang === "FR" ? "Activités sélectionnées" : "Selected Activities"}
                      </label>
                      <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                        {selectedActs.map(id => {
                          const act = ACTIVITIES.find(a => a.id === id);
                          return act ? (
                            <span key={id} className="text-[9px] font-medium border px-2.5 py-1 rounded-full transition-colors duration-1000 bg-brand-gold/15 border-brand-gold/30 text-brand-gold-dark">
                              {translate(act.title, lang)}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center space-x-2 text-[9px] font-mono text-zinc-500">
                    <Lock className="text-brand-gold w-3.5 h-3.5" />
                    <span>{lang === "FR" ? "Canal Concierge Chiffré 256-Bits" : "256-Bit Encrypted Concierge Channel"}</span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-zinc-600">
                    {translate(t.reassurance, lang)}
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-luxury hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 bg-zinc-950 hover:bg-transparent text-white hover:text-zinc-950 border border-zinc-950"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'TRANSMITTING...' : translate(t.submitInquiry, lang)}</span>
                  </button>
                </div>

              </div>

            </div>

          </form>
        ) : (
          <div className="text-center py-20 flex flex-col items-center justify-center space-y-6 max-w-lg mx-auto border p-12 rounded-[2rem] bg-zinc-50/50 border-zinc-200 shadow-md text-zinc-900">
            <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
              <CheckCircle2 className="text-brand-gold w-9 h-9" />
            </div>
            <div className="space-y-2">
              <span className="text-brand-gold font-mono text-[10px] tracking-[0.3em] uppercase block">
                {lang === "FR" ? "Transmission Sécurisée" : "PGP Transmission Secured"}
              </span>
              <h2 className="font-serif text-3xl tracking-wide uppercase font-bold text-zinc-900">
                {lang === "FR" ? "Demande Enregistrée" : "Inquiry Active"}
              </h2>
            </div>
            <p className="text-xs md:text-sm leading-relaxed font-light text-zinc-600">
              {lang === "FR"
                ? `Merci, ${fullName}. Les détails de votre passage de prestige de ${nights} nuits ont été encryptés et envoyés. Votre architecte de voyage exclusif vous répondra dans 15 minutes.`
                : `Thank you, ${fullName}. Your customized package parameters for ${nights} nights are encrypted and transmitted. Your private travel architect will verify booking conditions within 15 minutes.`
              }
            </p>
            
            {/* Package Recap summary */}
            <div className="w-full text-left p-6 rounded-2xl border bg-zinc-50 border-zinc-200 text-zinc-900 space-y-4">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-gold">
                {lang === "FR" ? "Itinéraire Personnalisé" : "Custom Package Recap"}
              </h4>
              <div className="text-[11px] font-mono space-y-1">
                <div>
                  <span className="text-zinc-400">{lang === "FR" ? "Durée:" : "Duration:"}</span>{" "}
                  <span className="font-bold text-brand-gold">{nights} {lang === "FR" ? "Nuits" : "Nights"}</span>
                </div>
                <div>
                  <span className="text-zinc-400">{lang === "FR" ? "Départ:" : "Departure:"}</span>{" "}
                  <span className="font-bold text-brand-gold">{departureCity}</span>
                </div>
                <div>
                  <span className="text-zinc-400">{lang === "FR" ? "Catégorie:" : "Tier:"}</span>{" "}
                  <span className="font-bold text-brand-gold">{lang === "FR" ? "Voyage de Prestige" : "Prestige Journey"}</span>
                </div>
              </div>
              
              {selectedDests.length > 0 && (
                <div className="space-y-1">
                  <span className="block text-[10px] font-mono uppercase text-zinc-400">{lang === "FR" ? "Destinations:" : "Selected Itineraries:"}</span>
                  <ul className="list-disc pl-4 text-xs font-light space-y-1 text-zinc-700">
                    {selectedDests.map(id => {
                      const dest = DESTINATIONS.find(d => d.id === id);
                      return dest ? <li key={id}>{translate(dest.title, lang)}</li> : null;
                    })}
                  </ul>
                </div>
              )}

              {selectedActs.length > 0 && (
                <div className="space-y-1">
                  <span className="block text-[10px] font-mono uppercase text-zinc-400">{lang === "FR" ? "Activités de Prestige:" : "Activities selected:"}</span>
                  <ul className="list-disc pl-4 text-xs font-light space-y-1 text-zinc-700">
                    {selectedActs.map(id => {
                      const act = ACTIVITIES.find(a => a.id === id);
                      return act ? <li key={id}>{translate(act.title, lang)}</li> : null;
                    })}
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                setSelectedDests([]);
                setSelectedActs([]);
                setFullName("");
                setEmail("");
                setPhone("");
              }}
              className="border font-mono text-[9px] tracking-[0.15em] uppercase px-8 py-3 transition-all duration-500 rounded-full border-zinc-200 bg-white hover:bg-zinc-900 hover:text-white hover:border-zinc-900 text-zinc-700"
            >
              {lang === "FR" ? "Créer un autre itinéraire" : "Build another passage"}
            </button>
          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}
