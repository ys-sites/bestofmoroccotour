'use client';

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteFaqs } from "@/data/bestOfMoroccoData";

export default function FaqAndPolicies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-transparent py-20 px-4 sm:px-8 text-stone-900 border-t border-stone-200/60">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[#C5A880] font-serif italic text-lg capitalize block">
            Essential Questions
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Frequently Asked Questions & Policies
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 font-light">
            Clear cancellation rules, payment methods, guide credentials, and terms of business.
          </p>
        </div>

        <div className="space-y-3.5">
          {siteFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-stone-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
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

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
