'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Briefcase, Award, Users, Globe, Building, Phone, Clock, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang, translate } from "../context/lang-context";

export default function AgenceDeVoyageMontrealClient() {
  const { lang } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = {
    backToHome: { FR: "Retour à l'accueil", EN: "Back to Home" },
    tagline: { FR: "Agence de Voyage de Prestige au Québec", EN: "Prestige Travel Agency in Quebec" },
    title: { FR: "Votre Agence de Voyage au Grand Montréal", EN: "Your Travel Agency in Greater Montreal" },
    subtitle: { FR: "Spécialiste en séjours de golf au Maroc, voyages de prestige et solutions MICE basés à Mirabel.", EN: "Specialist in Morocco golf packages, luxury travel, and MICE solutions based in Mirabel." },
    
    introTitle: { FR: "Merveilles et Voyages : Excellence et Proximité", EN: "Merveilles et Voyages: Excellence & Proximity" },
    introText1: {
      FR: "Merveilles et Voyages est votre agence de voyage de prestige basée à Mirabel, desservant fièrement Montréal, Laval et la Rive-Nord. Notre mission est de concevoir des expériences de voyage exclusives et haut de gamme, adaptées aux désirs uniques de notre clientèle. De la réservation de vols réguliers au départ de Montréal à la planification minutieuse de chaque détail au sol, nous assurons une tranquillité d'esprit absolue.",
      EN: "Merveilles et Voyages is your prestige travel agency based in Mirabel, proudly serving Montreal, Laval, and the North Shore. Our mission is to design exclusive and upscale travel experiences tailored to the unique desires of our clientele. From booking scheduled flights departing from Montreal to the meticulous planning of every detail on the ground, we ensure absolute peace of mind."
    },
    introText2: {
      FR: "Organisateur de voyages de confiance pour vos séjours de luxe au Maroc et à l'international, nous garantissons des prestations conformes aux plus hauts standards de l'industrie touristique canadienne. Grâce à notre conciergerie privée bilingue disponible 24/7, chaque itinéraire bénéficie d'une attention constante et d'un accompagnement personnalisé.",
      EN: "As a trusted travel planner for your luxury holidays in Morocco and worldwide, we guarantee premium services in compliance with the highest standards of the Canadian tourism industry. Thanks to our private bilingual concierge service available 24/7, every itinerary benefits from constant attention and personalized support."
    },

    servicesTitle: { FR: "Nos Services de Prestige", EN: "Our Prestige Services" },
    
    serviceGolfTitle: { FR: "Forfaits Golf au Maroc", EN: "Morocco Golf Packages" },
    serviceGolfDesc: { 
      FR: "Des séjours exclusifs combinant des parcours de classe mondiale à Marrakech, Agadir, Tanger, Fès et Michlifen avec un hébergement 5 étoiles et des transferts privés.", 
      EN: "Exclusive packages combining world-class courses in Marrakech, Agadir, Tangier, Fez, and Michlifen with 5-star accommodations and private transfers." 
    },
    serviceGolfLink: { FR: "Découvrir les Golfs", EN: "Discover Golf Packages" },

    serviceLuxeTitle: { FR: "Voyages de Luxe Sur Mesure", EN: "Bespoke Luxury Journeys" },
    serviceLuxeDesc: { 
      FR: "Création d'itinéraires uniques à travers le Royaume du Maroc (Marrakech, Fès, Rabat, Sahara, Chefchaouen) incluant des hébergements de luxe et un service VIP.", 
      EN: "Creation of unique bespoke itineraries across Morocco (Marrakech, Fez, Rabat, Sahara, Chefchaouen) including luxury lodging and VIP services." 
    },
    serviceLuxeLink: { FR: "Créer un Voyage", EN: "Build Custom Trip" },

    serviceMiceTitle: { FR: "Voyages Corporatifs & MICE", EN: "Corporate Travel & MICE" },
    serviceMiceDesc: { 
      FR: "Organisation complète de séminaires d'affaires, incentives, congrès et retraites de direction de A à Z avec une assistance de conciergerie continue.", 
      EN: "Full planning of business seminars, incentives, conferences, and executive board retreats from A to Z with continuous concierge support." 
    },
    serviceMiceLink: { FR: "Services MICE", EN: "MICE Services" },

    whyUsTitle: { FR: "Pourquoi Choisir Notre Agence ?", EN: "Why Choose Our Agency?" },
    
    whyFlightsTitle: { FR: "Vols de Montréal Inclus", EN: "Montreal Flights Included" },
    whyFlightsDesc: { FR: "Nous planifions vos vols réguliers depuis Montréal pour un voyage clé en main sans tracas.", EN: "We coordinate your scheduled flights departing from Montreal for a seamless, hassle-free journey." },
    
    whyConciergeTitle: { FR: "Conciergerie Bilingue 24/7", EN: "24/7 Bilingual Concierge" },
    whyConciergeDesc: { FR: "Une assistance personnalisée en français et en anglais à tout moment de votre voyage.", EN: "Personalized assistance in French and English at any point during your journey." },
    
    whyPrivateTitle: { FR: "Circuits Privés Exclusifs", EN: "Exclusive Private Tours" },
    whyPrivateDesc: { FR: "Des itinéraires personnalisés hors des sentiers battus avec guides locaux certifiés.", EN: "Bespoke itineraries off the beaten path with certified local guides." },
    
    whyExpertiseTitle: { FR: "Expertise Royaume du Maroc", EN: "Morocco Destination Expertise" },
    whyExpertiseDesc: { FR: "Une parfaite connaissance du terrain à travers toutes les régions et cités impériales du Maroc.", EN: "Flawless local knowledge across all regions, golf courses, and imperial cities of Morocco." },

    napTitle: { FR: "Coordonnées de l'Agence", EN: "Agency Contact Info" },
    napOffice: { FR: "Bureau Principal", EN: "Main Office" },
    napAddressLabel: { FR: "Adresse Civique", EN: "Street Address" },
    napPhoneLabel: { FR: "Téléphone", EN: "Phone" },
    napHoursLabel: { FR: "Heures d'Ouverture", EN: "Opening Hours" },
    napHoursValue: { FR: "Lun–Ven 9h–18h", EN: "Mon–Fri 9am–6pm" },
    napMapsLink: { FR: "Itinéraire Google Maps", EN: "Google Maps Directions" },

    faqTitle: { FR: "Foire Aux Questions (FAQ)", EN: "Frequently Asked Questions (FAQ)" },
  };

  const services = [
    {
      title: t.serviceGolfTitle,
      desc: t.serviceGolfDesc,
      btnText: t.serviceGolfLink,
      url: "/golf-itineraries/agadir",
      icon: Award
    },
    {
      title: t.serviceLuxeTitle,
      desc: t.serviceLuxeDesc,
      btnText: t.serviceLuxeLink,
      url: "/custom-trip",
      icon: Globe
    },
    {
      title: t.serviceMiceTitle,
      desc: t.serviceMiceDesc,
      btnText: t.serviceMiceLink,
      url: "/mice",
      icon: Briefcase
    }
  ];

  const whyChooseUs = [
    { title: t.whyFlightsTitle, desc: t.whyFlightsDesc, icon: Users },
    { title: t.whyConciergeTitle, desc: t.whyConciergeDesc, icon: Shield },
    { title: t.whyPrivateTitle, desc: t.whyPrivateDesc, icon: Building },
    { title: t.whyExpertiseTitle, desc: t.whyExpertiseDesc, icon: Globe }
  ];

  const faqs = [
    {
      q: {
        FR: "Quel est le coût moyen d'un forfait de golf de luxe au Maroc ?",
        EN: "What is the average cost of a luxury golf package in Morocco?"
      },
      a: {
        FR: "Le tarif de nos forfaits de golf de prestige au Maroc varie selon la saison, la catégorie d'hébergement (hôtels 5 étoiles, resorts de luxe) et le nombre de green fees inclus. Contactez notre conciergerie pour obtenir un devis personnalisé adapté à votre budget et à vos exigences.",
        EN: "The price of our luxury golf packages in Morocco varies depending on the season, accommodation class (5-star hotels, luxury resorts), and the number of green fees included. Contact our concierge team for a personalized quote tailored to your budget and needs."
      }
    },
    {
      q: {
        FR: "Quels sont les documents requis pour voyager du Canada au Maroc ?",
        EN: "What documents are required to travel from Canada to Morocco?"
      },
      a: {
        FR: "Les citoyens canadiens doivent présenter un passeport valide pour toute la durée de leur séjour au Maroc. Aucun visa n'est requis pour les séjours touristiques de moins de 90 jours. Nous vous conseillons de vérifier la validité de votre passeport avant votre départ.",
        EN: "Canadian citizens must present a passport valid for the entire duration of their stay in Morocco. No visa is required for tourist stays of less than 90 days. We advise you to verify your passport validity before departure."
      }
    },
    {
      q: {
        FR: "Organisez-vous des voyages corporatifs ou des événements MICE au Maroc ?",
        EN: "Do you organize corporate trips or MICE events in Morocco?"
      },
      a: {
        FR: "Oui, nous proposons des services MICE complets au Maroc (séminaires, incentives, congrès, lancements). Nous gérons la logistique de A à Z : réservation de salles de réunion haut de gamme, hébergement de groupe, transferts privés et activités de team-building exclusives.",
        EN: "Yes, we offer complete MICE services in Morocco (seminars, incentives, conferences, launches). We manage the logistics from A to Z: premium meeting room bookings, group accommodation, private transfers, and exclusive team-building activities."
      }
    },
    {
      q: {
        FR: "Comment fonctionne la planification d'un voyage sur mesure avec votre agence ?",
        EN: "How does the custom travel planning work with your agency?"
      },
      a: {
        FR: "Notre processus est simple et personnalisé. Vous complétez notre créateur de voyage en ligne ou contactez notre conciergerie. Un conseiller dédié élabore ensuite un itinéraire sur mesure ajusté à vos envies (choix des parcours de golf, hôtels, visites guidées privées).",
        EN: "Our process is simple and personalized. You complete our online trip builder or contact our concierge. A dedicated advisor will then design a bespoke itinerary tailored to your desires (choice of golf courses, hotels, private guided visits)."
      }
    },
    {
      q: {
        FR: "Quelles sont les zones desservies par votre agence au Québec ?",
        EN: "Which areas do you serve in Quebec?"
      },
      a: {
        FR: "Bien que nos bureaux soient situés à Mirabel sur la Rive-Nord, nous servons l'ensemble des voyageurs du Grand Montréal, de Laval et de la province de Québec grâce à notre service de conciergerie à distance disponible 24 heures sur 24 et 7 jours sur 7.",
        EN: "Although our offices are located in Mirabel on the North Shore, we serve all travelers in the Greater Montreal, Laval, and the province of Quebec through our remote concierge service available 24/7."
      }
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q.FR,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a.FR
          }
        }))
      },
      {
        "@type": "Service",
        "name": "Forfaits golf au Maroc",
        "serviceType": "Travel & Sports Packages",
        "provider": {
          "@type": "TravelAgency",
          "@id": "https://www.mevoyages.com/#agency"
        },
        "areaServed": "Grand Montréal"
      },
      {
        "@type": "Service",
        "name": "Voyages de luxe sur mesure",
        "serviceType": "Bespoke Luxury Travel",
        "provider": {
          "@type": "TravelAgency",
          "@id": "https://www.mevoyages.com/#agency"
        },
        "areaServed": "Grand Montréal"
      },
      {
        "@type": "Service",
        "name": "Voyages corporatifs MICE",
        "serviceType": "Corporate Travel & Events",
        "provider": {
          "@type": "TravelAgency",
          "@id": "https://www.mevoyages.com/#agency"
        },
        "areaServed": "Grand Montréal"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      {/* JSON-LD for local FAQ & Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="relative h-[55vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-12 px-6 md:px-12">
        <img
          src="/moroco.webp"
          alt="Merveilles et Voyages Montréal"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-white font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{translate(t.backToHome, lang)}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {translate(t.tagline, lang)}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight font-bold">
              {translate(t.title, lang)}
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto bg-white">
        <div className="text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 uppercase tracking-wide">
            {translate(t.introTitle, lang)}
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
          <p className="text-zinc-600 text-sm md:text-base font-light leading-relaxed max-w-3xl mx-auto">
            {translate(t.introText1, lang)}
          </p>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed italic max-w-3xl mx-auto pt-2 border-t border-zinc-100">
            {translate(t.introText2, lang)}
          </p>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 uppercase tracking-wide text-center mb-12">
            {translate(t.servicesTitle, lang)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm flex flex-col justify-between items-start space-y-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-3 flex-grow">
                    <h3 className="font-serif text-lg font-bold text-zinc-900 uppercase">
                      {translate(service.title, lang)}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed">
                      {translate(service.desc, lang)}
                    </p>
                  </div>
                  <Link
                    href={service.url}
                    className="inline-flex items-center space-x-1.5 text-brand-gold hover:text-zinc-900 font-mono text-[10px] tracking-wider uppercase font-semibold transition-colors"
                  >
                    <span>{translate(service.btnText, lang)}</span>
                    <span className="text-[12px]">→</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 uppercase tracking-wide text-center mb-16">
            {translate(t.whyUsTitle, lang)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 text-brand-gold flex items-center justify-center text-sm font-semibold shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-sm font-bold text-zinc-900 uppercase tracking-wide">
                      {translate(item.title, lang)}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed pl-11">
                    {translate(item.desc, lang)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & NAP Info Block */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200/50">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-gold rounded" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-zinc-900">
                {translate(t.napTitle, lang)}
              </h2>
            </div>
            <div className="space-y-4 font-light text-zinc-600 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-800 font-medium block mb-0.5">{translate(t.napOffice, lang)}</strong>
                  <span>Merveilles et Voyages</span><br />
                  <span>{translate(t.napAddressLabel, lang)} : 14050 rue des Saules</span><br />
                  <span>Mirabel, Québec J7N 3G3</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <strong className="text-zinc-800 font-medium block mb-0.5">{translate(t.napPhoneLabel, lang)}</strong>
                  <a href="tel:5149196381" className="hover:text-brand-gold transition-colors font-medium">+1 514 919 6381</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <strong className="text-zinc-800 font-medium block mb-0.5">{translate(t.napHoursLabel, lang)}</strong>
                  <span>{translate(t.napHoursValue, lang)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-zinc-200/60 p-8 rounded-3xl shadow-sm text-center flex flex-col items-center justify-center space-y-6 h-full min-h-[250px]">
            <MapPin className="w-12 h-12 text-brand-gold" />
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-zinc-900 uppercase">
                {lang === "FR" ? "Trouvez notre bureau" : "Locate our office"}
              </h3>
              <p className="text-zinc-500 text-xs font-light max-w-xs leading-relaxed">
                {lang === "FR" 
                  ? "Calculez votre itinéraire vers notre agence à Mirabel sur la Rive-Nord de Montréal."
                  : "Calculate your route to our agency office in Mirabel on the North Shore of Montreal."
                }
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Merveilles+et+Voyages+Mirabel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-200 hover:border-brand-gold bg-zinc-50 hover:bg-white text-zinc-800 hover:text-brand-gold font-mono text-[9px] tracking-[0.15em] uppercase px-6 py-3 transition-all rounded-full shadow-sm"
            >
              <span>{translate(t.napMapsLink, lang)}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white border-t border-zinc-200/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 uppercase tracking-wide text-center mb-12">
            {translate(t.faqTitle, lang)}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-zinc-200/60 rounded-2xl overflow-hidden transition-all bg-zinc-50/50 hover:bg-zinc-50">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif text-sm md:text-base font-bold text-zinc-900 pr-4">
                      {translate(faq.q, lang)}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-brand-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-zinc-600 text-xs md:text-sm font-light leading-relaxed border-t border-zinc-150">
                          {translate(faq.a, lang)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
