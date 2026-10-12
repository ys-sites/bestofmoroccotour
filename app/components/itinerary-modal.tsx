'use client';

import { useEffect } from "react";
import Image from "next/image";
import { X, Calendar, MapPin, Check, Ban, Car, Hotel, ShieldCheck, Sparkles, Phone } from "lucide-react";
import { TourItem, siteConfig } from "@/data/bestOfMoroccoData";

interface ItineraryModalProps {
  tour: TourItem | null;
  onClose: () => void;
  onBook: (tourName: string) => void;
}

export default function ItineraryModal({ tour, onClose, onBook }: ItineraryModalProps) {
  useEffect(() => {
    if (tour) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [tour]);

  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#12131A] text-zinc-100 rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden z-10">
        {/* Header / Hero Cover */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-black">
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            className="object-cover brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12131A] via-[#12131A]/40 to-black/60" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/90 hover:text-white border border-white/20 transition-all hover:scale-105 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges & Title */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400 text-zinc-950">
                {tour.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white/90 border border-white/20 backdrop-blur-sm">
                {tour.duration}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-sm flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Best Price Guarantee (+5% Match)
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              {tour.name}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 flex items-center gap-2 flex-wrap">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{tour.destinations.join(" · ")}</span>
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-zinc-400 text-xs block">Duration</span>
                <span className="font-semibold text-white">{tour.duration}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="text-zinc-400 text-xs block">Transportation</span>
                <span className="font-semibold text-white">{tour.vehicles}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                <Hotel className="w-5 h-5" />
              </div>
              <div>
                <span className="text-zinc-400 text-xs block">Lodging</span>
                <span className="font-semibold text-white">{tour.hotels}</span>
              </div>
            </div>
          </div>

          {/* Pricing Banner if applicable */}
          {tour.price && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                  Package Pricing
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {tour.price}
                </span>
                {tour.priceSub && (
                  <span className="text-xs text-zinc-400 block mt-0.5">{tour.priceSub}</span>
                )}
              </div>
              <div className="text-xs text-zinc-300 max-w-xs">
                Private departures can be adjusted to any dates, hotel tiers, and group size.
              </div>
            </div>
          )}

          {/* Day by Day Detailed Timeline */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Day-by-Day Itinerary</span>
                <span className="text-xs font-sans font-normal text-zinc-400">({tour.itinerary.length} Days)</span>
              </h3>
              <span className="text-xs text-amber-400 font-medium">Licensed Ministry Guides</span>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="relative flex items-start gap-4 pl-1">
                  <div className="relative z-10 w-7 h-7 rounded-full bg-amber-500 text-zinc-950 font-bold text-xs flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30">
                    {day.day}
                  </div>
                  <div className="flex-1 bg-white/[0.02] hover:bg-white/[0.04] p-4 rounded-2xl border border-white/5 transition-colors">
                    <h4 className="font-serif text-base sm:text-lg font-semibold text-white mb-1.5 flex items-center justify-between gap-2">
                      <span>{day.title}</span>
                      <span className="text-[11px] font-sans font-normal text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded-full shrink-0">
                        Day {day.day}
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans font-light">
                      {day.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3">
              <h4 className="font-serif font-bold text-emerald-300 text-base flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Package Includes</span>
              </h4>
              <ul className="space-y-2 text-zinc-300">
                {tour.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-3">
              <h4 className="font-serif font-bold text-rose-300 text-base flex items-center gap-2">
                <Ban className="w-5 h-5 text-rose-400" />
                <span>Package Excludes</span>
              </h4>
              <ul className="space-y-2 text-zinc-300">
                {tour.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer / Direct Booking CTA */}
        <div className="p-4 sm:p-6 bg-[#0E0F14] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Questions? Call us direct: <strong className="text-white">{siteConfig.phoneUsCa}</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(tour.name);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-950/50 hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Booking for this Tour</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
