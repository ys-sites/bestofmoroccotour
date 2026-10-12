'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLang, translate } from "../context/lang-context";
import { homeFaqs } from "@/data/faqs";

const t = {
  tagline: { FR: "Questions Fréquentes", EN: "Frequently Asked Questions" },
  heading: { FR: "Tout Ce Que Vous Devez Savoir", EN: "Everything You Need to Know" },
  subheading: {
    FR: "Retrouvez les réponses à vos questions sur nos forfaits de voyage au Maroc.",
    EN: "Find answers to your questions about our Morocco travel packages.",
  },
};

export default function HomeFaqSection() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200/60" id="faq">
      <div className="max-w-[860px] mx-auto">

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

        {/* Accordion */}
        <div className="space-y-3">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-gold/40 bg-white shadow-sm"
                    : "border-zinc-200/70 bg-white/70 hover:bg-white hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-sm md:text-base font-semibold text-zinc-900 leading-snug pr-4">
                    {translate(faq.q, lang)}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-brand-gold text-white" : "bg-zinc-100 text-zinc-500"
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-zinc-100">
                        <p className="text-zinc-600 text-sm font-light leading-relaxed pt-4">
                          {translate(faq.a, lang)}
                        </p>
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
