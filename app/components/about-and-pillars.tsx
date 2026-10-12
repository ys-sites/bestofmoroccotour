'use client';

import Image from "next/image";
import { ShieldCheck, Award, Users, HeartHandshake, MapPin, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/bestOfMoroccoData";
import { MoroccanArchWatermark, MoroccanTeapotArt, MoroccanCamelDuneArt } from "./moroccan-art-motifs";

export default function AboutAndPillars() {
  return (
    <section id="why-choose-us" className="bg-transparent py-20 px-4 sm:px-8 text-stone-900 border-t border-stone-200/60 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto space-y-20">
        {/* =========================================================================
            SECTION 1: FOUNDER STORY & KING HASSAN II PHILOSOPHY
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Subtle authentic Moroccan Archway Watermark */}
            <MoroccanArchWatermark className="absolute -top-14 -left-10 w-72 sm:w-84 h-auto pointer-events-none text-[#C05621] -z-10 hidden sm:block" opacity={0.32} />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#C05621] text-xs font-semibold uppercase tracking-wider">
              <span>Our Heritage & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-[1.12]">
              &ldquo;The Entire World Is <br />
              <em className="font-editorial italic font-normal text-[#C05621] text-4xl sm:text-6xl">
                Our Family.&rdquo;
              </em>
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed font-light">
              Established with a simple ideal: <strong className="font-semibold text-stone-900">life-seeing with native local guides instead of crowded sightseeing</strong>. For over two decades, Best of Morocco Tours has built enduring relationships with licensed scholars, historic riads, and desert nomad families to provide travelers an intimate, authentic Moroccan welcome.
            </p>

            <blockquote className="relative text-xs sm:text-sm text-stone-700 leading-relaxed font-light italic pl-5 border-l-2 border-[#C05621] bg-stone-50 py-3.5 pr-4 rounded-r-2xl overflow-hidden">
              <div className="absolute right-2 -bottom-2 pointer-events-none hidden sm:block">
                <MoroccanTeapotArt size={65} opacity={0.25} />
              </div>
              <span className="relative z-10 block">
                &ldquo;We embrace the philosophy of our late King Hassan II: traveling removes barriers and brings people closer. Our calling is to use tourism to promote peace, celebrate our Amazigh and Moorish culture, and give every guest memories that last a lifetime.&rdquo;
              </span>
            </blockquote>

            {/* Direct Core Commitments (Clean horizontal badges instead of generic AI boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
                <ShieldCheck className="w-5 h-5 text-[#C05621] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-900">Wholly Moroccan-Owned</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">
                    Direct local pricing with zero overseas agent commissions or intermediaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
                <Award className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-900">Best Price Guarantee</h4>
                  <p className="text-[11px] text-stone-500 font-light mt-0.5">
                    Find an identical private package advertised for less? We match it + give you 5% extra discount.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real Photo Mosaic with Atmospheric Captioning */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-stone-200">
              <Image
                src="/images/bestofmorocco/img_carousel_riad.jpg"
                alt="Authentic Moorish Riad in Fes Medina"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">Boutique Heritage</span>
                <span className="font-serif font-bold text-base sm:text-lg">Historic Riads & Courtyards</span>
              </div>
            </div>

            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-stone-200 mt-6 sm:mt-8">
              <Image
                src="/images/bestofmorocco/img_carousel_sahara.jpg"
                alt="Royal Luxury Desert Camp in Erg Chebbi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">Erg Chebbi Merzouga</span>
                  <span className="font-serif font-bold text-base sm:text-lg">Royal Berber Desert Bivouacs</span>
                </div>
                <div className="hidden sm:block shrink-0">
                  <MoroccanCamelDuneArt size={80} opacity={0.75} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: FOUNDER & LICENSED TOUR GUIDES SPOTLIGHT
           ========================================================================= */}
        <div id="guides" className="pt-12 border-t border-stone-200/80 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
                The Human Touch
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                Official Ministry Tour Guides
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md font-light">
              Every city guide and desert trekker in our roster is licensed by the Moroccan Ministry of Tourism, multilingual, and passionate about cultural storytelling.
            </p>
          </div>

          {/* Founder Bio Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-6 sm:p-10 border border-stone-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/bestofmorocco/img_team_team-1.jpg"
                alt="Ayoub Sadeddine - CEO & Licensed National Tour Guide"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-300 border border-amber-400/30">
                Licence No. 2816
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#C05621]">
                  CEO & Founder · Licensed National Tour Guide
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Ayoub Sadeddine
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-light">
                  <MapPin className="w-3.5 h-3.5 text-[#C05621]" />
                  <span>Moroccan Berber origin (Ait Oumras, High Atlas) · Born in Marrakech</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                &ldquo;Working in tourism since childhood for over 20 years, starting in my grandfather&apos;s restaurant in the heart of the Old Medina of Marrakech, then serving as a licensed guide for prominent tour operators worldwide. My mission is to share our Amazigh culture, architecture, and living history with genuine warmth.&rdquo;
              </p>

              <div className="pt-3 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600 font-light">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C05621] shrink-0" />
                  <span>OPC Quebec Travel Advisor Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C05621] shrink-0" />
                  <span>ITHQ Montreal Professional Tourism Degree</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C05621] shrink-0" />
                  <span>ISAT Fes Tourism & Hotel Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C05621] shrink-0" />
                  <span>ISTHT El Jadida Advanced Event Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
