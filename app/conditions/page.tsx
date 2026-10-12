'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang, translate } from "../context/lang-context";
import { conditionsIntro, conditionsSections } from "../../data/conditionsData";

const t = {
  welcome: {
    EN: "LEGAL & COMPLIANCE",
    FR: "CADRE JURIDIQUE & CONFORMITÉ"
  },
  title: {
    EN: "General Terms & Conditions",
    FR: "Conditions Générales de Vente"
  },
  backHome: {
    EN: "Back to Home",
    FR: "Retour à l'accueil"
  }
};

export default function ConditionsPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      {/* Header section with radial background mask */}
      <section className="relative h-[35vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-10 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto w-full z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-zinc-900 font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{translate(t.backHome, lang)}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {translate(t.welcome, lang)}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-white tracking-wide uppercase leading-tight font-bold">
              {translate(t.title, lang)}
            </h1>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-white">
        <div className="prose prose-zinc max-w-none space-y-10 text-[13px] md:text-[14px] leading-relaxed text-zinc-600 font-light">
          
          <p className="font-medium text-zinc-900">
            {translate(conditionsIntro.p1, lang)}
          </p>

          <p>
            {translate(conditionsIntro.p2, lang)}
          </p>

          <hr className="border-zinc-200" />

          {conditionsSections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                {translate(sec.title, lang)}
              </h3>
              
              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx}>
                  {translate(para, lang)}
                </p>
              ))}

              {sec.list && (
                <ul className="list-disc pl-5 space-y-1">
                  {translate(sec.list, lang).map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {sec.subsections && sec.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="space-y-2 pt-2">
                  <h4 className="font-bold text-zinc-800 mt-4">
                    {translate(sub.title, lang)}
                  </h4>
                  <p>
                    {translate(sub.paragraph, lang)}
                  </p>
                </div>
              ))}

              {sec.grid && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-2">
                  {sec.grid.map((card, cIdx) => (
                    <div key={cIdx} className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                      <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">
                        {translate(card.title, lang)}
                      </h5>
                      <p className="text-[12px] text-zinc-600">
                        {translate(card.desc, lang)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}
