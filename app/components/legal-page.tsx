'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Navbar from "./navbar";
import FooterEditorial from "./footer-editorial";
import Breadcrumbs, { type BreadcrumbItem } from "./breadcrumbs";
import { MoroccanFriezeDivider } from "./moroccan-art-motifs";
import { useLang, translate } from "../context/lang-context";
import { siteConfig } from "@/data/bestOfMoroccoData";
import type { LegalPage as LegalPageData } from "@/data/conditionsData";

type Bi = { FR: string; EN: string };

interface LegalPageProps {
  eyebrow: Bi;
  title: Bi;
  crumbs: BreadcrumbItem[];
  data: LegalPageData;
  // Rendered between the intro and the sections (e.g. the cancellation tiers)
  highlight?: React.ReactNode;
  related: { href: string; label: Bi }[];
}

// Shared layout for the Terms & Conditions and Cancellation Policy pages
export default function LegalPage({ eyebrow, title, crumbs, data, highlight, related }: LegalPageProps) {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-transparent text-[#1E1B18] font-sans antialiased">
      <Navbar />

      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-16 space-y-8">
        <Breadcrumbs items={crumbs} />

        {/* Header */}
        <header className="space-y-4">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#C05621] block">
            {translate(eyebrow, lang)}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            {translate(title, lang)}
          </h1>
          {data.intro.map((p, i) => (
            <p key={i} className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              {translate(p, lang)}
            </p>
          ))}
        </header>

        {highlight}

        {/* Table of contents */}
        <nav aria-label={lang === "FR" ? "Sommaire" : "Contents"} className="rounded-2xl bg-white/95 border border-stone-200/90 p-5 sm:p-6 shadow-[0_8px_30px_rgba(74,53,37,0.05)]">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-stone-400 block mb-3">
            {lang === "FR" ? "Sommaire" : "Contents"}
          </span>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {data.sections.map((section, i) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-stone-700 hover:text-[#C05621] transition-colors">
                  <span className="text-[#C05621] font-semibold mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {translate(section.title, lang)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-5">
          {data.sections.map((section, i) => {
            const items = section.list ? (lang === "FR" ? section.list.FR : section.list.EN) : [];
            const ListTag = section.ordered ? "ol" : "ul";
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-2xl bg-white/95 border border-stone-200/90 p-6 sm:p-8 shadow-[0_4px_20px_rgba(74,53,37,0.04)] space-y-3"
              >
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight flex items-baseline gap-3">
                  <span className="text-[#C05621] text-sm font-sans font-bold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span>{translate(section.title, lang)}</span>
                </h2>
                {section.paragraphs.slice(0, 1).map((p, j) => (
                  <p key={j} className="text-stone-700 text-sm sm:text-[15px] leading-relaxed font-light">{translate(p, lang)}</p>
                ))}
                {items.length > 0 && (
                  <ListTag className="space-y-2.5 text-stone-700 text-sm sm:text-[15px] font-light leading-relaxed">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        {section.ordered ? (
                          <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{j + 1}</span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C05621] shrink-0 mt-2.5" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ListTag>
                )}
                {section.paragraphs.slice(1).map((p, j) => (
                  <p key={j} className="text-stone-700 text-sm sm:text-[15px] leading-relaxed font-light">{translate(p, lang)}</p>
                ))}
              </section>
            );
          })}
        </div>

        <MoroccanFriezeDivider className="opacity-40 py-2" />

        {/* Questions + related pages */}
        <section className="rounded-[2rem] bg-[#1E1B18] text-white p-6 sm:p-10 space-y-5">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            {lang === "FR" ? "Des questions avant de réserver ?" : "Questions before you book?"}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            {lang === "FR"
              ? "Notre équipe vous répond du lundi au samedi, de 8 h à 18 h."
              : "Our team answers Monday to Saturday, 8:00 to 18:00."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors">
              <Phone className="w-4 h-4 shrink-0" />
              <span>{siteConfig.phoneUsCa}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors break-all">
              <Mail className="w-4 h-4 shrink-0" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {related.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors">
                <span>{translate(link.label, lang)}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <FooterEditorial />
    </div>
  );
}
