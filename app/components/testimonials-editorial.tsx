'use client';

import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { clientTestimonials } from "@/data/bestOfMoroccoData";

export default function TestimonialsEditorial() {
  return (
    <section id="reviews" className="bg-transparent py-20 px-4 sm:px-8 text-stone-900 border-t border-stone-200/60">
      <div className="max-w-[1360px] mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[#C5A880] font-serif italic text-lg capitalize block">
            Guest Reflections
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Words from Travelers We Called Friends
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 font-light">
            Real guest accounts from travel operators, private families, and international explorers who experienced Morocco with Ayoub and our guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-[2rem] border border-stone-200/80 shadow-[0_6px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-stone-200 shrink-0 bg-stone-100">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-stone-900">{t.name}</h4>
                    <span className="text-xs text-stone-500 block">{t.location}</span>
                    <span className="text-[10px] text-stone-400 font-mono block">{t.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span className="text-[11px] text-stone-500 font-medium">{t.role}</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Guest
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
