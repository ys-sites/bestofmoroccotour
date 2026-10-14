'use client';

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteFaqs } from "@/data/bestOfMoroccoData";
import { MoroccanMedallionArt, MoroccanFriezeDivider, MoroccanArchWatermark } from "./moroccan-art-motifs";
import { motion, AnimatePresence } from "motion/react";
import { easeOutExpo } from "@/lib/animations";

export default function FaqAndPolicies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-transparent py-20 px-4 sm:px-8 text-stone-900 border-t border-stone-200/60 relative overflow-hidden">
      {/* Subtle Moroccan Arch Watermark */}
      <MoroccanArchWatermark className="absolute -top-12 -left-16 w-80 h-auto opacity-15 pointer-events-none text-[#C05621] -z-10 hidden md:block" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <MoroccanFriezeDivider className="pb-2 opacity-50" />

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
          className="text-center space-y-2"
        >
          <div className="flex items-center justify-center gap-2">
            <MoroccanMedallionArt size={32} opacity={0.65} />
            <span className="text-[#C05621] font-serif italic text-lg capitalize block">
              Essential Questions
            </span>
            <MoroccanMedallionArt size={32} opacity={0.65} />
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Frequently Asked Questions &amp; Policies
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 font-light">
            Clear cancellation rules, payment methods, guide credentials, and terms of business.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {siteFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: easeOutExpo }}
                className="rounded-2xl bg-white/95 backdrop-blur-sm border border-stone-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-100 text-[#C05621]" : "text-stone-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

