'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Compass, Eye, Phone, Sparkles, Target, Award } from "lucide-react";
import Navbar from "../components/navbar";
import FooterEditorial from "../components/footer-editorial";
import Breadcrumbs from "../components/breadcrumbs";
import { MoroccanFriezeDivider } from "../components/moroccan-art-motifs";
import { useLang, translate } from "../context/lang-context";
import { siteConfig } from "@/data/bestOfMoroccoData";

// Content from the original bestofmoroccotour.com/about.html
const features = [
  {
    icon: Award,
    title: { EN: "Moroccan Experts", FR: "Experts du Maroc" },
    body: {
      EN: "We are your Moroccan travel experts and a partner you and your customers can always count on, offering the best Moroccan experience for every budget.",
      FR: "Nous sommes vos experts du voyage au Maroc et un partenaire sur qui vous et vos clients pouvez toujours compter, avec la meilleure expérience marocaine pour chaque budget.",
    },
  },
  {
    icon: Compass,
    title: { EN: "Why Choose Us?", FR: "Pourquoi nous choisir ?" },
    body: {
      EN: "We don't operate a large network of tours worldwide. We focus solely on travel within Morocco, which, simply put, makes us good at it. True to our founding principles, the client's experience always comes first.",
      FR: "Nous n'exploitons pas un vaste réseau de circuits à travers le monde. Nous nous consacrons uniquement au Maroc, et c'est justement ce qui fait notre force. Fidèles à nos principes fondateurs, l'expérience du client passe toujours en premier.",
    },
  },
  {
    icon: BedDouble,
    title: { EN: "Hotels We Use", FR: "Nos hébergements" },
    body: {
      EN: "We have strong ties with hotels and resorts across Morocco and book business hotels, heritage hotels, palaces, beach resorts, guest houses, riads, luxury Berber camps and villas to suit your taste and budget. Rooms sell quickly in peak season, so we always advise booking in advance; if a hotel is sold out, we offer an alternative of the same category.",
      FR: "Nous entretenons des liens solides avec les hôtels et complexes du Maroc : hôtels d'affaires, hôtels de charme, palais, complexes balnéaires, maisons d'hôtes, riads, camps berbères de luxe et villas, selon vos goûts et votre budget. Les chambres partent vite en haute saison : nous recommandons de réserver tôt et, si un hôtel est complet, nous proposons une solution de même catégorie.",
    },
  },
  {
    icon: Sparkles,
    title: { EN: "Our Service Standard", FR: "Notre niveau de service" },
    body: {
      EN: "We constantly analyse and satisfy our visitors' requirements and expectations. Our itineraries and services are continuously enhanced, and our customized tours focus on each client's comfort, needs and budget.",
      FR: "Nous analysons et satisfaisons constamment les besoins et attentes de nos voyageurs. Nos itinéraires et services sont sans cesse améliorés, et nos circuits sur mesure sont pensés pour le confort, les besoins et le budget de chaque client.",
    },
  },
];

export default function AboutClient() {
  const { lang } = useLang();
  const fr = lang === "FR";

  return (
    <div className="min-h-screen bg-transparent text-[#1E1B18] font-sans antialiased">
      <Navbar />

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-16 space-y-12 sm:space-y-16">
        <Breadcrumbs
          items={[
            { name: { FR: "Accueil", EN: "Home" }, path: "/" },
            { name: { FR: "À propos", EN: "About Us" }, path: "/about" },
          ]}
        />

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#C05621] block">
              {fr ? "À propos de nous" : "About Us"}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              {fr ? "Votre réceptif et partenaire au Maroc" : "Your Morocco Tour Operator & Partner"}
            </h1>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              {fr
                ? "Best of Morocco Tours est une entreprise entièrement marocaine et l'un des principaux réceptifs du Maroc, offrant une gamme complète de services et produits de voyage aux groupes, voyagistes, agences de voyages et organisateurs d'événements du monde entier."
                : "Best of Morocco Tours is a wholly Moroccan-owned corporation and one of Morocco's leading incoming tour operators, providing a comprehensive range of Moroccan travel services and products for inbound groups, tour operators, travel agencies and event planners worldwide."}
            </p>
            <div className="rounded-2xl bg-white/95 border-l-4 border-[#C05621] border-y border-r border-y-stone-200/90 border-r-stone-200/90 p-5 sm:p-6 shadow-[0_8px_30px_rgba(74,53,37,0.05)]">
              <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                {fr ? "Fondée sur une idée simple :" : "Established with a simple idea:"}{" "}
                <em className="font-editorial font-normal text-[#C05621]">
                  {fr ? "vivre le Maroc avec des services locaux, plutôt que le visiter en foule." : "life-seeing with local services instead of sightseeing with crowded tours."}
                </em>
              </p>
              <p className="text-stone-600 text-sm font-light leading-relaxed mt-3">
                {fr
                  ? "Au fil des années, nous avons tissé des liens solides et fidèles avec nos partenaires (hôteliers, guides locaux, transporteurs) qui ajoutent une touche d'hospitalité marocaine à chaque voyage."
                  : "Over the years we have built strong, loyal relationships with our suppliers, especially hoteliers, local guides and transporters, who add a touch of Moroccan hospitality to every journey."}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-stone-200 shadow-lg">
              <Image src="/images/bestofmorocco/img_carousel_riad.jpg" alt="Traditional riad courtyard in Fes" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
            </div>
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-stone-200 shadow-lg mt-8">
              <Image src="/images/bestofmorocco/img_carousel_sahara.jpg" alt="Berber desert camp in Merzouga" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-[2rem] bg-[#1E1B18] text-white p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-3 text-amber-300">
              <Eye className="w-5 h-5" />
              <h2 className="font-serif text-2xl font-bold text-white">{fr ? "Notre vision" : "Our Vision"}</h2>
            </div>
            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              {fr
                ? "Nous croyons en la philosophie marocaine de notre grand roi Hassan II : « Le monde entier est notre famille ». Voyager abolit les barrières et rapproche les gens. Nous voulons faire du tourisme un instrument de paix, de lutte contre la pauvreté et d'un monde meilleur, tout en devenant une entreprise de voyage de calibre mondial."
                : "We believe in the traditional Moroccan philosophy of our great King Hassan II: “The entire world is our family.” Traveling removes barriers and brings people closer. We intend to use tourism as an instrument to promote peace, alleviate poverty and make the world a better place, and in the process become a world-class travel company."}
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/95 border border-stone-200/90 p-6 sm:p-8 space-y-3 shadow-[0_8px_30px_rgba(74,53,37,0.05)]">
            <div className="flex items-center gap-3 text-[#C05621]">
              <Target className="w-5 h-5" />
              <h2 className="font-serif text-2xl font-bold text-[#1E1B18]">{fr ? "Notre mission" : "Our Mission"}</h2>
            </div>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              {fr
                ? "Offrir des services de voyage de calibre mondial à des prix raisonnables, pour rendre le Maroc accessible au plus grand nombre."
                : "To provide world-class travel services at reasonable prices, bringing Morocco within the reach of everyone."}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-center">
            {fr ? "Ce qui nous distingue" : "What Sets Us Apart"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <article key={title.EN} className="rounded-2xl bg-white/95 border border-stone-200/90 p-6 sm:p-7 shadow-[0_8px_30px_rgba(74,53,37,0.05)] space-y-3">
                <div className="w-11 h-11 rounded-full bg-amber-500/10 text-[#C05621] border border-amber-500/25 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold">{translate(title, lang)}</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">{translate(body, lang)}</p>
              </article>
            ))}
          </div>
        </section>

        <MoroccanFriezeDivider className="opacity-40 py-2" />

        {/* CEO philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
          <div className="md:col-span-4">
            <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-stone-200/80 shadow-[0_20px_50px_rgba(74,53,37,0.14)]">
              <Image src="/images/bestofmorocco/img_team_team-1.jpg" alt="Ayoub Sadeddine, CEO & Founder" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#C05621] block">
              {fr ? "La philosophie de notre PDG" : "Our CEO's Philosophy"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">Ayoub Sadeddine</h2>
            <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed">
              {fr
                ? "« Passionné de voyage, j'ai beaucoup voyagé dans le monde et surtout au Maroc, du nord au sud en passant par l'Atlas. Mon objectif est de vous offrir la meilleure expérience que le Maroc peut offrir, en vous rapprochant de ses habitants et de sa culture. Je suis spécialiste des circuits privés sur mesure : en tant que conseiller, je planifie et organise votre voyage selon vos besoins et vos attentes, avec tous les conseils nécessaires pour créer des souvenirs inoubliables. »"
                : "“I am a travel enthusiast who has travelled a great deal around the world and especially in Morocco, getting to know the north, the south and the Atlas. My aim is to provide the best experience Morocco has to offer, taking you a step closer to understanding its people and culture. I specialize in customized, tailor-made Morocco tours: as your travel adviser, I plan and organize your trip to fit your needs and expectations, with all the tips you need to create lifelong memories.”"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/founder" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4A3525] hover:bg-[#322318] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors">
                <span>{fr ? "Voir son profil" : "View Founder Profile"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 hover:bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors">
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phoneUsCa}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterEditorial />
    </div>
  );
}
