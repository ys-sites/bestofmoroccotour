'use client';

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, Compass, ShieldCheck, Award, Heart } from "lucide-react";
import { siteConfig } from "@/data/bestOfMoroccoData";
import { MoroccanFriezeDivider, MoroccanArchWatermark } from "./moroccan-art-motifs";

export default function FooterEditorial() {
  return (
    <footer className="bg-[#0A0B0E] text-white border-t border-white/10 pt-12 pb-12 px-4 sm:px-8 relative overflow-hidden">
      {/* Subtle Dark Gold Moroccan Palace Gate Watermark in Footer */}
      <MoroccanArchWatermark className="absolute -bottom-20 -right-16 w-96 h-auto opacity-10 pointer-events-none text-amber-400 z-0" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        <MoroccanFriezeDivider className="pb-4 opacity-40" />

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-4 sm:gap-5 group">
              <img
                src="/logo-gold.svg"
                alt="H & A Voyage et Tourisme Inc. - Artisan du Bonheur"
                className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_14px_rgba(197,168,128,0.3)]"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                  H &amp; A Voyage <span className="text-amber-400 font-editorial italic font-normal text-2xl sm:text-3xl">et Tourisme</span>
                </span>
                <span className="text-[10.5px] uppercase tracking-[0.22em] text-amber-200/80 font-medium mt-1">
                  Artisan du Bonheur &middot; Best of Morocco
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light max-w-md">
              A wholly Moroccan-owned inbound tour operator with over 20 years of experience. We specialize in life-seeing with local services, customized itineraries, UNESCO imperial cities, and Sahara desert expeditions.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Tour Guide Licence No. 2816 (Ministry of Tourism)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 text-[11px]">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Best Price Guarantee (+5% Match)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Featured Circuits
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
              <li>
                <Link href="/itineraries/imperial-cities" className="hover:text-amber-400 transition-colors">
                  Imperial Cities of Morocco (8 Days)
                </Link>
              </li>
              <li>
                <Link href="/itineraries/imperial-sahara" className="hover:text-amber-400 transition-colors">
                  Morocco Imperial Cities &amp; Sahara (10 Days)
                </Link>
              </li>
              <li>
                <Link href="/itineraries/north-south" className="hover:text-amber-400 transition-colors">
                  North &amp; South of Morocco (10 Days)
                </Link>
              </li>
              <li>
                <Link href="/itineraries/atlantic-ocean" className="hover:text-amber-400 transition-colors">
                  Morocco Atlantic Ocean Journey (10 Days)
                </Link>
              </li>
              <li>
                <Link href="/itineraries/south-kasbahs" className="hover:text-amber-400 transition-colors">
                  Morocco Great South &amp; Kasbahs (8 Days)
                </Link>
              </li>
              <li>
                <Link href="/itineraries/jewish-heritage" className="hover:text-amber-400 transition-colors">
                  Jewish Heritage of Morocco (10 Days)
                </Link>
              </li>
              <li>
                <Link href="/itineraries/premium-tour" className="hover:text-amber-400 transition-colors">
                  Premium Morocco Tour (9 Days)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & legal pages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-amber-400 transition-colors">Founder Profile</Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-amber-400 transition-colors">Cancellation Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Direct Inquiries & Offices
            </h4>
            <div className="space-y-3 text-xs text-zinc-300">
              <a
                href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>US & Canada Hotline: <strong className="text-white">{siteConfig.phoneUsCa}</strong></span>
              </a>

              <a
                href={`tel:${siteConfig.phoneMa.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Morocco Operational HQ: <strong className="text-white">{siteConfig.phoneMa}</strong></span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="min-w-0">Email: <strong className="text-white break-all">{siteConfig.email}</strong></span>
              </a>

              <div className="flex items-center gap-2.5 text-zinc-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Office Hours: {siteConfig.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider block mb-2 font-medium">
                Accepted Payment Methods
              </span>
              <div className="flex flex-wrap items-center gap-2 text-[10px] text-zinc-300">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Visa</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">MasterCard</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">PayPal</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">International Bank Wire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, YS Agency Signature & Legal */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center text-xs text-zinc-500">
          {/* Left: Copyright */}
          <p className="text-center md:text-left order-2 md:order-none">
            © {new Date().getFullYear()} Best of Morocco Tours. All rights reserved.
          </p>

          {/* Right: YS Marketing Solutions Signature */}
          <div className="flex justify-center md:justify-end items-center order-1 md:order-none">
            <a 
              href="https://www.ysdev.ca" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ys-signature-btn"
              title="YS Marketing Solutions - Agency"
            >
              <img 
                src="/YS.png" 
                alt="YS Logo" 
                className="ys-sig-logo" 
              />
              <span className="ys-sig-text">
                Made by <strong className="ys-sig-highlight">YS Marketing Solutions</strong> <span className="ys-sig-divider">|</span> Marketing Agency
              </span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
