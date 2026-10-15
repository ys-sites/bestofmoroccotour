'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Languages, MapPin, Phone, Quote } from "lucide-react";
import Navbar from "../components/navbar";
import FooterEditorial from "../components/footer-editorial";
import Breadcrumbs from "../components/breadcrumbs";
import { MoroccanFriezeDivider } from "../components/moroccan-art-motifs";
import { useLang, translate } from "../context/lang-context";
import { siteConfig } from "@/data/bestOfMoroccoData";

// From the original bestofmoroccotour.com/profile.html
const bio = [
  {
    EN: "I am very proud of my identity as a Moroccan man, or rather a Moroccan Berber man. My parents are of Berber origin. They migrated from Ait Oumras, a small village in the Atlas Mountains close to Azilal, and came to Marrakech, then El Jadida, for a better life. Marrakech is where I was born and where I learned how to bring real value to tourism.",
    FR: "Je suis très fier de mon identité d'homme marocain, ou plutôt d'homme berbère marocain. Mes parents sont d'origine berbère. Ils ont quitté Aït Oumras, un petit village du Haut Atlas près d'Azilal, pour s'installer à Marrakech, puis à El Jadida, en quête d'une vie meilleure. C'est à Marrakech que je suis né et que j'ai appris à apporter une vraie valeur au tourisme.",
  },
  {
    EN: "I have been working in the tourism industry since I was a child, for the past 20 years, starting in my grandfather's restaurant in the heart of the Old Medina of Marrakech, then working as a tour guide for several tour operators and travel agencies.",
    FR: "Je travaille dans le tourisme depuis mon enfance, depuis plus de 20 ans, d'abord au restaurant de mon grand-père au cœur de la vieille médina de Marrakech, puis comme guide pour plusieurs voyagistes et agences de voyages.",
  },
  {
    EN: "I have an adventurous, honest and creative soul, and I am a great lover of history and architecture. Moroccan tourism gives me the opportunity to express my passion: explaining our Berber culture and history, while learning about places around the world from the travelers I meet.",
    FR: "J'ai une âme aventurière, honnête et créative, et je suis un grand passionné d'histoire et d'architecture. Le tourisme marocain me permet d'exprimer ma passion : faire découvrir notre culture et notre histoire berbères, tout en apprenant sur le monde grâce aux voyageurs que je rencontre.",
  },
];

const credentials = [
  { date: { EN: "September 2017", FR: "Septembre 2017" }, title: { EN: "Travel Advisor Certificate", FR: "Certificat de conseiller en voyages" }, place: "OPC — Québec, Canada" },
  { date: { EN: "October 2016", FR: "Octobre 2016" }, title: { EN: "Professional Degree in Travel & Tourism", FR: "Diplôme professionnel en voyage et tourisme" }, place: "ITHQ — Québec, Canada" },
  { date: { EN: "April 2015", FR: "Avril 2015" }, title: { EN: "Official Tour Guide Licence No. 2816", FR: "Licence officielle de guide n° 2816" }, place: "Ministry of Tourism — Morocco" },
  { date: { EN: "June 2009", FR: "Juin 2009" }, title: { EN: "Tourism & Hotel Management Degree", FR: "Diplôme en gestion du tourisme et de l'hôtellerie" }, place: "ISAT — Fes, Morocco" },
  { date: { EN: "June 2007", FR: "Juin 2007" }, title: { EN: "Advanced Event Management Degree", FR: "Diplôme supérieur en gestion d'événements" }, place: "ISTHT — El Jadida, Morocco" },
];

const facts = [
  { icon: Award, label: { EN: "Experience", FR: "Expérience" }, value: { EN: "20+ years in Moroccan tourism", FR: "Plus de 20 ans dans le tourisme marocain" } },
  { icon: MapPin, label: { EN: "Roots", FR: "Origines" }, value: { EN: "Ait Oumras (Azilal) · born in Marrakech", FR: "Aït Oumras (Azilal) · né à Marrakech" } },
  { icon: Languages, label: { EN: "Languages", FR: "Langues" }, value: { EN: "English, French, Arabic, Berber, Spanish", FR: "Anglais, français, arabe, berbère, espagnol" } },
  { icon: GraduationCap, label: { EN: "Studied in", FR: "Études" }, value: { EN: "Fes, El Jadida & Québec", FR: "Fès, El Jadida et Québec" } },
];

export default function FounderClient() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-transparent text-[#1E1B18] font-sans antialiased">
      <Navbar />

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-16 space-y-10">
        <Breadcrumbs
          items={[
            { name: { FR: "Accueil", EN: "Home" }, path: "/" },
            { name: { FR: "Profil du fondateur", EN: "Founder Profile" }, path: "/founder" },
          ]}
        />

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-[2.2rem] overflow-hidden border border-stone-200/80 shadow-[0_20px_50px_rgba(74,53,37,0.14)] bg-stone-200">
              <Image
                src="/images/bestofmorocco/img_team_team-1.jpg"
                alt="Ayoub Sadeddine, CEO & Founder of Best of Morocco Tours"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <span className="absolute left-4 bottom-4 px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/65 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                {lang === "FR" ? "PDG et fondateur" : "CEO & Founder"}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#C05621] block">
              {lang === "FR" ? "PDG et fondateur" : "CEO & Founder"}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              Ayoub Sadeddine
            </h1>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              {lang === "FR"
                ? "PDG et fondateur de Best of Morocco Tours, spécialiste des circuits privés sur mesure au Maroc."
                : "CEO & Founder of Best of Morocco Tours, specialist in customized, tailor-made private Morocco tours."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label.EN} className="flex items-start gap-3 rounded-2xl bg-white/95 border border-stone-200/90 p-4 shadow-[0_8px_30px_rgba(74,53,37,0.05)]">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-[#C05621] border border-amber-500/20 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-stone-400 block">{translate(label, lang)}</span>
                    <span className="text-sm font-semibold leading-snug block">{translate(value, lang)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MoroccanFriezeDivider className="opacity-40 py-2" />

        {/* Story + credentials */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              {lang === "FR" ? "Mon parcours" : "My Story"}
            </h2>
            {bio.map((p, i) => (
              <p key={i} className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">{translate(p, lang)}</p>
            ))}
            <figure className="relative rounded-2xl bg-white/95 border-l-4 border-[#C05621] border-y border-r border-y-stone-200/90 border-r-stone-200/90 p-6 shadow-[0_8px_30px_rgba(74,53,37,0.05)]">
              <Quote className="w-6 h-6 text-[#C05621]/40 mb-2" />
              <blockquote className="font-serif text-lg sm:text-xl italic leading-snug">
                {lang === "FR" ? "« Le monde entier est notre famille. »" : "“The entire world is our family.”"}
              </blockquote>
              <figcaption className="text-xs text-stone-500 mt-2">
                {lang === "FR"
                  ? "La philosophie du regretté roi Hassan II, qui guide notre façon d'accueillir chaque voyageur."
                  : "The philosophy of the late King Hassan II, which guides how we welcome every traveler."}
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-5 rounded-[2rem] bg-white/95 border border-stone-200/90 p-6 sm:p-8 shadow-[0_16px_45px_rgba(74,53,37,0.08)]">
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight mb-6">
              {lang === "FR" ? "Formation et accréditations" : "Education & Accreditations"}
            </h2>
            <ol className="relative space-y-6 pl-7 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-amber-300/60">
              {credentials.map((c) => (
                <li key={c.place} className="relative">
                  <span className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-[#FAF8F5]" />
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#C05621] block">{translate(c.date, lang)}</span>
                  <span className="font-semibold text-sm sm:text-base block leading-snug">{translate(c.title, lang)}</span>
                  <span className="text-xs text-stone-500 block">{c.place}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[2rem] bg-[#1E1B18] text-white p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              {lang === "FR" ? "Dites-le, ce sera fait." : "Name it, it will be yours."}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              {lang === "FR"
                ? "Vous souhaitez voyager au Maroc ou en Espagne, pour le plaisir ou pour affaires ? Contactez-nous."
                : "Do you wish to travel to Morocco or Spain for leisure or business? Just contact us."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/#custom-trip" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors">
              <span>{lang === "FR" ? "Planifier mon voyage" : "Plan My Trip"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors">
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phoneUsCa}</span>
            </a>
          </div>
        </section>
      </main>

      <FooterEditorial />
    </div>
  );
}
