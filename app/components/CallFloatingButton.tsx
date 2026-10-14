'use client';

import React from "react";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/bestOfMoroccoData";

export default function CallFloatingButton() {
  const pathname = usePathname();
  if (pathname?.startsWith('/itineraries')) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 md:right-8 md:bottom-8 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.phoneMa.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2.5 bg-[#0C0D11]/90 hover:bg-black text-white border border-emerald-500/40 hover:border-emerald-400 px-4 py-2 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-xl group cursor-pointer"
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
          <MessageCircle className="w-4 h-4 fill-white text-white" />
        </div>
        <span className="text-xs font-semibold tracking-wide text-zinc-200 group-hover:text-white">
          WhatsApp MA
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${siteConfig.phoneUsCa.replace(/[^0-9+]/g, '')}`}
        aria-label="Call Best of Morocco Tours"
        className="flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-zinc-950 px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:scale-105 transition-all duration-300 font-bold text-xs uppercase tracking-wider group cursor-pointer"
      >
        <Phone className="w-4 h-4 text-zinc-950 group-hover:rotate-12 transition-transform" />
        <span>Call US & CA Hotline</span>
      </a>
    </div>
  );
}
