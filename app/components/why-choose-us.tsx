'use client';

import { motion } from "motion/react";
import { Award, Compass, CreditCard, Landmark, Leaf, ShieldCheck, type LucideIcon } from "lucide-react";
import { sixPillars } from "@/data/bestOfMoroccoData";
import { easeOutExpo } from "@/lib/animations";
import { useLang } from "../context/lang-context";

const ICONS: Record<string, LucideIcon> = { ShieldCheck, Compass, Award, Leaf, Landmark, CreditCard };

// "Why Should You Choose Best of Morocco Tours?" from the original bestofmoroccotour.com homepage
export default function WhyChooseUs() {
  const { lang } = useLang();

  return (
    <section id="why-choose-us" className="scroll-mt-28 px-4 sm:px-8 py-16 sm:py-20 text-stone-900">
      <div className="max-w-[1280px] mx-auto space-y-10 sm:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <span className="font-editorial italic text-lg text-[#C05621] block">
            {lang === "FR" ? "Pourquoi nous choisir" : "Why Choose Us"}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            {lang === "FR" ? "Pourquoi choisir Best of Morocco Tours ?" : "Why Travel with Best of Morocco Tours?"}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            {lang === "FR"
              ? "Best of Morocco Tours est une entreprise entièrement marocaine et l'un des principaux réceptifs du Maroc, offrant une gamme complète de services de voyage aux groupes, voyagistes, agences de voyages et organisateurs d'événements du monde entier."
              : "Best of Morocco Tours is a wholly Moroccan-owned corporation and one of Morocco's leading incoming tour operators, providing a comprehensive range of travel services for inbound groups, tour operators, travel agencies and event planners worldwide."}
          </p>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            {lang === "FR"
              ? "Notre équipe cumule plus de 12 000 kilomètres en autocar, plus de 4 300 nuitées d'hôtel et plus de vingt ans d'expérience. Du nord fascinant au sud magique, de l'Atlas aux dunes de Merzouga jusqu'à l'Atlantique, nous partageons la beauté du Maroc comme le feraient des amis et de la famille."
              : "Our team of travel-industry professionals shares over 12,000 bus kilometres, over 4,300 hotel nights and more than twenty years of experience. From the amazing north to the magical south, over the Atlas Mountains to the Merzouga dunes and the Atlantic Ocean, we love sharing Morocco's beauty with you the way friends and family would."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sixPillars.map((pillar, i) => {
            const Icon = ICONS[pillar.iconName] ?? ShieldCheck;
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: easeOutExpo }}
                className="group rounded-2xl bg-white/95 border border-stone-200/90 p-6 sm:p-7 shadow-[0_8px_30px_rgba(74,53,37,0.05)] hover:shadow-[0_14px_40px_rgba(74,53,37,0.1)] hover:border-amber-300/80 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 text-[#C05621] border border-amber-500/25 flex items-center justify-center group-hover:bg-[#C05621] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">{pillar.title}</h3>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#C05621]">{pillar.subtitle}</span>
                </div>
                <p className="text-sm text-stone-600 font-light leading-relaxed">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
