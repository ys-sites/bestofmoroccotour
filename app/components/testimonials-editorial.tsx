'use client';

import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { clientTestimonials } from "@/data/bestOfMoroccoData";
import { MoroccanMedallionArt, MoroccanLanternArt } from "./moroccan-art-motifs";
import { motion } from "motion/react";
import { easeOutExpo, lanternSway } from "@/lib/animations";

export default function TestimonialsEditorial() {
  return (
    <section id="reviews" className="bg-transparent py-20 px-4 sm:px-8 text-stone-900 border-t border-stone-200/60 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
          className="text-center max-w-xl mx-auto space-y-2 relative"
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div {...lanternSway} className="hidden sm:block">
              <MoroccanLanternArt height={65} opacity={0.5} />
            </motion.div>
            <div>
              <span className="text-[#C05621] font-serif italic text-lg capitalize block">
                Guest Reflections
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                Words from Travelers We Called Friends
              </h3>
            </div>
            <motion.div {...lanternSway} className="hidden sm:block">
              <MoroccanLanternArt height={65} opacity={0.5} />
            </motion.div>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-light">
            Real guest accounts from travel operators, private families, and international explorers who experienced Morocco with Ayoub and our guides.
          </p>
        </motion.div>

        {/* Endless Loop Review Marquee */}
        <div className="relative w-full overflow-hidden py-4 -mx-4 sm:-mx-8 px-4 sm:px-8">
          {/* Subtle Left & Right Edge Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10" />

          {/* Infinite Marquee Track (Pauses smoothly on hover) */}
          <div className="animate-marquee-infinite flex items-stretch gap-6 cursor-grab active:cursor-grabbing">
            {[...clientTestimonials, ...clientTestimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[420px] shrink-0 bg-white/95 backdrop-blur-sm p-7 rounded-[2rem] border border-stone-200/90 shadow-[0_6px_25px_rgba(74,53,37,0.04)] hover:shadow-[0_16px_40px_rgba(74,53,37,0.12)] hover:-translate-y-1.5 flex flex-col justify-between space-y-5 relative overflow-hidden group transition-all duration-300"
              >
                {/* Subtle Moroccan Rosette Hallmark Watermark */}
                <div className="absolute -bottom-3 -right-3 pointer-events-none transition-all duration-500 opacity-10 group-hover:opacity-25 group-hover:rotate-45">
                  <MoroccanMedallionArt size={65} />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-300/60 shadow-xs shrink-0 bg-stone-100">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-stone-900 leading-snug">{t.name}</h4>
                      <span className="text-xs text-stone-500 block">{t.location}</span>
                      <span className="text-[10px] text-stone-400 font-mono block mt-0.5">{t.date}</span>
                    </div>
                  </div>

                  {/* 5 Gold Stars Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                  <span className="text-[11px] text-[#C05621] font-semibold">{t.role}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Guest
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-stone-500 font-light text-center">
          <span className="inline-flex items-center gap-1.5 font-medium text-stone-800">
            <span className="text-amber-500 font-bold">★ 4.9 / 5.0</span> Average Client Satisfaction
          </span>
          <span className="text-stone-300 hidden sm:inline">•</span>
          <span>Hover over any review card to pause</span>
          <span className="text-stone-300 hidden sm:inline">•</span>
          <span className="text-stone-600 font-medium">100% Wholly Moroccan Certified Native Guides</span>
        </div>
      </div>
    </section>
  );
}

