'use client';

import { useState } from "react";
import { motion } from "motion/react";
import { Shield, CheckCircle, Mail, Phone, MessageSquare } from "lucide-react";
import { useLang, translate } from "../context/lang-context";

const t = {
  tagline: { FR: "Nous Contacter", EN: "Get in Touch" },
  heading: { FR: "Planifiez Votre Voyage", EN: "Plan Your Journey" },
  subheading: {
    FR: "Une question ? Un projet de voyage ? Parlez-nous de votre rêve et nous vous préparerons une proposition sur mesure.",
    EN: "A question? A travel project? Tell us about your dream and we'll prepare a bespoke proposal for you.",
  },
  labelName: { FR: "Votre Nom Complet", EN: "Your Full Name" },
  labelEmail: { FR: "Adresse Courriel", EN: "Email Address" },
  labelPhone: { FR: "Numéro de Téléphone", EN: "Phone Number" },
  labelSubject: { FR: "Objet de la Demande", EN: "Subject of Inquiry" },
  labelMessage: { FR: "Votre Message", EN: "Your Message" },
  placeholderName: { FR: "ex. Jean Dupont", EN: "e.g. John Smith" },
  placeholderEmail: { FR: "ex. jean@email.com", EN: "e.g. john@email.com" },
  placeholderPhone: { FR: "ex. +1 (514) 123-4567", EN: "e.g. +1 (514) 123-4567" },
  placeholderSubject: { FR: "ex. Forfait golf Marrakech pour 2 personnes", EN: "e.g. Marrakech golf package for 2" },
  placeholderMessage: {
    FR: "Décrivez votre projet de voyage : destination souhaitée, nombre de voyageurs, dates approximatives, budget…",
    EN: "Describe your travel project: desired destination, number of travelers, approximate dates, budget…",
  },
  disclaimer: {
    FR: "Aucun engagement financier à ce stade. Nous vous répondrons dans les 24h ouvrables.",
    EN: "No financial commitment at this stage. We'll reply within 24 business hours.",
  },
  btnSend: { FR: "ENVOYER LA DEMANDE", EN: "SEND INQUIRY" },
  btnSending: { FR: "ENVOI EN COURS…", EN: "SENDING…" },
  successTitle: { FR: "Message Reçu !", EN: "Message Received!" },
  successText: {
    FR: "Merci de nous avoir contacté. Notre équipe examinera votre demande et vous répondra dans les plus brefs délais.",
    EN: "Thank you for reaching out. Our team will review your request and get back to you shortly.",
  },
  btnNewMsg: { FR: "Envoyer un Autre Message", EN: "Send Another Message" },
  // Contact info sidebar
  callUs: { FR: "Appelez-nous", EN: "Call Us" },
  emailUs: { FR: "Écrivez-nous", EN: "Email Us" },
  whatsapp: { FR: "WhatsApp", EN: "WhatsApp" },
};

const subjectOptions = {
  FR: [
    "Forfait Golf Maroc",
    "Voyage de Luxe Sur Mesure",
    "Voyage Corporatif / MICE",
    "Voyage Scolaire ou Groupe",
    "Circuits Villes Impériales & Désert",
    "Autre Demande",
  ],
  EN: [
    "Morocco Golf Package",
    "Bespoke Luxury Journey",
    "Corporate / MICE Travel",
    "School or Group Trip",
    "Imperial Cities & Desert Tour",
    "Other Inquiry",
  ],
};

export default function HomeContactForm() {
  const { lang } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputClass =
    "w-full bg-white border border-zinc-400 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200";
  const labelClass = "block text-[10px] font-mono tracking-[0.18em] uppercase text-zinc-500 mb-1.5";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/mevoyages75@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _template: "box",
        "Nom complet": name,
        "Courriel": email,
        "Téléphone": phone,
        "Objet": subject,
        "Message": message,
        _subject: `Nouvelle Demande Générale: ${subject} — ${name}`,
      }),
    })
      .catch(() => {}) // silent fallback
      .finally(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      });
  };

  return (
    <section className="py-24 px-6 bg-white border-t border-zinc-100" id="contact-form">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-brand-gold">
            {translate(t.tagline, lang)}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            {translate(t.heading, lang)}
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
            {translate(t.subheading, lang)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Left Sidebar: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Phone */}
            <a
              href="tel:5149196381"
              className="flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-200/70 rounded-2xl hover:border-brand-gold/40 hover:bg-white transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-200">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-400 mb-0.5">
                  {translate(t.callUs, lang)}
                </p>
                <p className="font-semibold text-zinc-800 text-sm">+1 514 919 6381</p>
                <p className="text-zinc-400 text-[11px] font-mono mt-0.5">Lun–Ven 9h–18h</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@mevoyages.com"
              className="flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-200/70 rounded-2xl hover:border-brand-gold/40 hover:bg-white transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-200">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-400 mb-0.5">
                  {translate(t.emailUs, lang)}
                </p>
                <p className="font-semibold text-zinc-800 text-sm">info@mevoyages.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/15149196381"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-200/70 rounded-2xl hover:border-brand-gold/40 hover:bg-white transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-200">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-400 mb-0.5">
                  {translate(t.whatsapp, lang)}
                </p>
                <p className="font-semibold text-zinc-800 text-sm">+1 514 919 6381</p>
                <p className="text-zinc-400 text-[11px] font-mono mt-0.5">24/7</p>
              </div>
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-zinc-50 border border-zinc-300 rounded-[2rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 blur-[60px] rounded-full pointer-events-none" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-form-name" className={labelClass}>{translate(t.labelName, lang)}</label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={translate(t.placeholderName, lang)}
                        aria-label={translate(t.labelName, lang)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-form-email" className={labelClass}>{translate(t.labelEmail, lang)}</label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={translate(t.placeholderEmail, lang)}
                        aria-label={translate(t.labelEmail, lang)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-form-phone" className={labelClass}>{translate(t.labelPhone, lang)}</label>
                      <input
                        id="contact-form-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={translate(t.placeholderPhone, lang)}
                        aria-label={translate(t.labelPhone, lang)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-form-subject" className={labelClass}>{translate(t.labelSubject, lang)}</label>
                      <select
                        id="contact-form-subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        aria-label={translate(t.labelSubject, lang)}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled>{lang === "FR" ? "Choisissez un sujet" : "Select a subject"}</option>
                        {subjectOptions[lang as "FR" | "EN"].map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-form-message" className={labelClass}>{translate(t.labelMessage, lang)}</label>
                    <textarea
                      id="contact-form-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={translate(t.placeholderMessage, lang)}
                      aria-label={translate(t.labelMessage, lang)}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Disclaimer + Submit */}
                  <div className="space-y-4 pt-1">
                    <div className="flex items-start gap-2 text-[10px] text-zinc-500 font-mono leading-relaxed">
                      <Shield className="text-brand-gold w-4 h-4 shrink-0 mt-0.5" />
                      <span>{translate(t.disclaimer, lang)}</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-zinc-900 hover:bg-brand-gold text-white hover:text-zinc-900 font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-all duration-300 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? translate(t.btnSending, lang) : translate(t.btnSend, lang)}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 flex flex-col items-center justify-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                    <CheckCircle className="text-brand-gold w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl text-zinc-900 tracking-wide uppercase">
                    {translate(t.successTitle, lang)}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto font-light">
                    {translate(t.successText, lang)}
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage(""); }}
                    className="border border-zinc-200 bg-white hover:bg-zinc-900 hover:text-white text-zinc-700 font-mono text-[9px] tracking-[0.15em] uppercase px-6 py-2.5 transition-all rounded-full shadow-sm cursor-pointer"
                  >
                    {translate(t.btnNewMsg, lang)}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
