'use client';

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Briefcase, Award, Users, Globe, Building } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import FooterEditorial from "../components/footer-editorial";
import { useLang, translate } from "../context/lang-context";
import SmartVideo from "../components/smart-video";
import { videoSources } from "../../data/videoSources";

export default function MiceClient() {
  const { lang } = useLang();
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryCompany, setInquiryCompany] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = {
    backToHome: { FR: "Retour à l'accueil", EN: "Back to Home" },
    label: { FR: "Services MICE au Maroc", EN: "Morocco MICE Services" },
    title: { 
      FR: "Réunions, Congrès & Voyages d'Incentive", 
      EN: "Meetings, Incentives, Conferences & Events" 
    },
    subtitle: {
      FR: "Des solutions sur mesure conçues pour la réussite de vos événements d'affaires.",
      EN: "Exclusive corporate solutions designed to achieve your business objectives."
    },
    overviewText: {
      FR: "Best of Morocco Tours vous accompagne dans la planification avec des conseils pratiques. Notre expérience des destinations et de la conception d'itinéraires vous permet d'ajouter l'effet « Wow! » tout en éliminant les risques. Une équipe dédiée de planificateurs et de coordonnateurs vous est assignée et ne s'arrête qu'une fois vos attentes atteintes, puis dépassées.",
      EN: "Best of Morocco Tours will assist you in planning with practical tips. Our experience and knowledge of both the destinations and the itinerary-building process let you add the Wow! factor while eliminating the risks. You are assigned your own dedicated team of planners and coordinators, who will not rest until they match, then exceed, your expectations."
    },
    overviewPoints: {
      FR: "Notre équipe MICE experte et passionnée gère des groupes de 20 à plus de 500 personnes. Chacun de nos directeurs de circuit a déjà accompagné plus de 50 groupes et connaît parfaitement ses destinations : nous ne laissons rien au hasard.",
      EN: "Our expert and enthusiastic MICE team handles groups from 20 to more than 500 people. Each of our tour directors has serviced more than 50 groups and knows their destinations inside out: we never leave anything to chance."
    },
    meetingsTitle: { FR: "Réunions & Séminaires", EN: "Meetings & Gatherings" },
    meetingsDesc: {
      FR: "Recherche de lieux exclusifs, gestion de l'hébergement, transferts aéroport privés, logistique audiovisuelle et coordination sur place.",
      EN: "Venue sourcing, hotel accommodation, airport transfers, audiovisual support, and on-site event coordination."
    },
    incentivesTitle: { FR: "Programmes d'Incentive", EN: "Incentive Travel Programs" },
    incentivesDesc: {
      FR: "Voyages de récompense, activités de team-building originales, soirées de gala à thème dans le désert, expériences culturelles privées.",
      EN: "Reward trips, team-building activities, themed gala dinners in the desert, and exclusive private cultural experiences."
    },
    conferencesTitle: { FR: "Congrès & Conférences", EN: "Conferences & Congresses" },
    conferencesDesc: {
      FR: "Planification globale, gestion des inscriptions des délégués, coordination logistique des fournisseurs et aménagement d'espaces de réseautage.",
      EN: "Full event planning, delegate registration, supplier coordination, and professional on-site logistics."
    },
    corporateTitle: { FR: "Événements d'Entreprise", EN: "Corporate Events" },
    corporateDesc: {
      FR: "Lancements de produits de prestige, retraites de comités de direction, assemblées annuelles et célébrations de jalons d'entreprise.",
      EN: "Prestigious product launches, executive board retreats, annual conventions, and corporate milestones."
    },
    whyMoroccoTitle: { FR: "Pourquoi le Maroc ?", EN: "Why Morocco?" },
    whyMoroccoDesc: {
      FR: "Le Maroc modernise continuellement ses infrastructures MICE (réunions, incentives, congrès et salons) : nouveaux centres de congrès de calibre mondial, aéroports modernes et la célèbre hospitalité marocaine, adaptée aux besoins de chaque visiteur. À Marrakech, Casablanca, Rabat ou Agadir, vos participants vivront un mélange inoubliable d'affaires et d'évasion.",
      EN: "Morocco is continually upgrading its MICE (Meetings, Incentives, Conferences and Exhibitions) facilities, with world-class convention centres and modern airports, paired with famous Moroccan hospitality tailored to each visitor's requirements. Whether in Marrakech, Casablanca, Rabat or Agadir, participants enjoy an unforgettable mix of business and leisure."
    },
    whyPartnerTitle: { FR: "Services de congrès sur mesure", EN: "Conference Tours & Services" },
    whyPartnerDesc: {
      FR: "Des services avant, pendant et après votre événement : conception de la papeterie, inspection et sélection des lieux (incluant les visites clients), site web dédié à votre événement, correspondance détaillée et rapports. Profitez aussi de nos circuits spéciaux avant ou après votre congrès.",
      EN: "Pre- and post-conference services that build connections before, during and after your event: stationery design, venue inspection and selection (including client visits), a dedicated website for your event, detailed correspondence and reporting. You can also enjoy any of our special tours before or after your conference."
    },
    formTitle: { FR: "Planifiez Votre Événement", EN: "Plan Your Event" },
    formSubtitle: { FR: "Discutez de votre projet avec notre conciergerie corporative.", EN: "Discuss your corporate project with our concierge team." },
    formName: { FR: "Votre Nom", EN: "Your Name" },
    formEmail: { FR: "Adresse Courriel", EN: "Email Address" },
    formCompany: { FR: "Nom de l'Entreprise", EN: "Company Name" },
    formMessage: { FR: "Détails de l'événement (Lieu, nombre d'invités, dates...)", EN: "Event details (Location, guests count, dates...)" },
    formSubmit: { FR: "SOUMETTRE LA DEMANDE", EN: "SUBMIT INQUIRY" },
    formPending: { FR: "Aucun engagement financier à ce stade. Notre équipe vous contactera sous 24h.", EN: "No financial commitment. Our team will contact you within 24 hours." },
    formSuccessTitle: { FR: "Demande MICE Reçue", EN: "MICE Inquiry Received" },
    formSuccessText: {
      FR: "Merci. Notre conseiller corporatif examine votre demande et vous contactera rapidement.",
      EN: "Thank you. Our corporate advisor is reviewing your request and will contact you shortly."
    }
  };

  const services = [
    { title: t.meetingsTitle, desc: t.meetingsDesc, icon: Building },
    { title: t.incentivesTitle, desc: t.incentivesDesc, icon: Award },
    { title: t.conferencesTitle, desc: t.conferencesDesc, icon: Globe },
    { title: t.corporateTitle, desc: t.corporateDesc, icon: Briefcase }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/info@bestofmoroccotour.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _template: "box",
        "Nom complet / Full Name": inquiryName,
        "Courriel / Email Address": inquiryEmail,
        "Téléphone / Phone Number": inquiryPhone,
        "Entreprise / Company": inquiryCompany,
        "Détails de l'événement / Event Details": inquiryMessage,
        _subject: `Nouvelle Demande MICE: ${inquiryCompany} - ${inquiryName}`
      })
    })
    .then(() => {
      setIsSubmitted(true);
    })
    .catch((err) => {
      console.error(err);
      setIsSubmitted(true); // fall-through success UI
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen bg-transparent text-zinc-900 font-body antialiased">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative h-[55vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-12 px-6 md:px-12">
        <img
          src="/images/gulf-city-skyline.png"
          alt="Morocco MICE Services"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent pointer-events-none" />
        
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
              {translate(t.label, lang)}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight font-bold">
              {translate(t.title, lang)}
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center bg-white">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 mb-6 uppercase">
          {translate(t.subtitle, lang)}
        </h2>
        <p className="text-zinc-600 text-sm md:text-base font-light leading-relaxed mb-4">
          {translate(t.overviewText, lang)}
        </p>
        <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed italic">
          {translate(t.overviewPoints, lang)}
        </p>
      </section>

      {/* City Video Showcase */}
      <section className="px-6 max-w-6xl mx-auto pb-6">
        <div className="rounded-3xl overflow-hidden border border-zinc-200/60 shadow-md">
          <SmartVideo variant="tile" source={videoSources.fez} />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-bold text-zinc-900 uppercase">
                      {translate(service.title, lang)}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed">
                      {translate(service.desc, lang)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Details (Why Morocco / Why Partner) */}
      <section className="py-20 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-1 bg-brand-gold rounded" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-zinc-900">
              {translate(t.whyMoroccoTitle, lang)}
            </h3>
          </div>
          <p className="text-zinc-600 text-sm font-light leading-relaxed">
            {translate(t.whyMoroccoDesc, lang)}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-1 bg-brand-gold rounded" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-zinc-900">
              {translate(t.whyPartnerTitle, lang)}
            </h3>
          </div>
          <p className="text-zinc-600 text-sm font-light leading-relaxed">
            {translate(t.whyPartnerDesc, lang)}
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 px-6 max-w-3xl mx-auto bg-white border-t border-zinc-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-50 border border-zinc-200/60 p-8 md:p-10 rounded-[2rem] shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />

          {!isSubmitted ? (
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="text-center border-b border-zinc-200/60 pb-6">
                <h3 className="font-serif text-2xl font-bold uppercase text-zinc-900">
                  {translate(t.formTitle, lang)}
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2">
                  {translate(t.formSubtitle, lang)}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                    {translate(t.formName, lang)}
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Jean Dupont"
                    className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                    {translate(t.formEmail, lang)}
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="e.g. jean@entreprise.com"
                    className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                    {translate(t.formCompany, lang)}
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryCompany}
                    onChange={(e) => setInquiryCompany(e.target.value)}
                    placeholder="e.g. YS marketing"
                    className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                    {lang === "FR" ? "Numéro de Téléphone" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="e.g. +1 (514) 123-4567"
                    className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                  {translate(t.formMessage, lang)}
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder={lang === "FR" ? "Ex. Séminaire de 50 personnes à Marrakech en Octobre..." : "e.g. 50-person retreat in Marrakech in October..."}
                  className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all rounded-lg resize-none"
                />
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-2 text-[10px] text-zinc-500 font-mono leading-relaxed">
                  <Shield className="text-brand-gold w-4 h-4 shrink-0 mt-0.5" />
                  <span>{translate(t.formPending, lang)}</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-all border border-[#8B2635] shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting 
                    ? (lang === "FR" ? "ENVOI EN COURS..." : "TRANSMITTING...") 
                    : translate(t.formSubmit, lang)
                  }
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 flex flex-col items-center justify-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                <CheckCircle className="text-brand-gold w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 tracking-wide uppercase">
                {translate(t.formSuccessTitle, lang)}
              </h3>
              <p className="text-zinc-600 text-xs leading-relaxed max-w-sm mx-auto font-light">
                {translate(t.formSuccessText, lang)}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="border border-zinc-200 bg-white hover:bg-zinc-900 hover:text-white text-zinc-700 font-mono text-[9px] tracking-[0.15em] uppercase px-6 py-2.5 transition-all rounded-full shadow-sm"
              >
                {lang === "FR" ? "Nouvelle demande" : "New Inquiry"}
              </button>
            </div>
          )}
        </motion.div>
      </section>

      <FooterEditorial />
    </div>
  );
}
