'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, MapPin, Car, Hotel, ShieldCheck, Check, 
  X, Phone, ArrowRight, Sparkles, Send, CheckCircle2,
  Clock, Compass, Users
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "../../components/navbar";
import FooterEditorial from "../../components/footer-editorial";
import Breadcrumbs, { type BreadcrumbItem } from "../../components/breadcrumbs";
import { useLang, translate } from "../../context/lang-context";
import { masterTours, TourItem, siteConfig } from "@/data/bestOfMoroccoData";
import { itinerariesData } from "@/data/itineraries";
import { 
  MoroccanMedallionArt, MoroccanLanternArt, 
  MoroccanArchWatermark, MoroccanFriezeDivider 
} from "../../components/moroccan-art-motifs";
import { easeOutExpo, lanternSway } from "@/lib/animations";

interface NormalizedItinerary {
  id: string;
  name: string;
  duration: string;
  badge: string;
  image: string;
  destinations: string[];
  overview: string;
  vehicles: string;
  hotels: string;
  price: string;
  priceSub: string;
  itinerary: Array<{
    day: number;
    title: string;
    desc: string;
  }>;
  inclusions: string[];
  exclusions: string[];
  dates?: string[];
  hotelList?: Array<{
    name: string;
    stars: number;
    desc: string;
  }>;
}

const getTourData = (id: string, lang: "FR" | "EN"): NormalizedItinerary | null => {
  // 1. Try masterTours first (Exact matching for 7 Master Circuits)
  const master = masterTours.find(
    (t) => t.id === id || t.id.toLowerCase() === id.toLowerCase()
  );

  if (master) {
    return {
      id: master.id,
      name: master.name,
      duration: master.duration,
      badge: master.badge || "Signature Tour",
      image: master.image || "/images/bestofmorocco/img_tour_list_1.jpg",
      destinations: master.destinations || [],
      overview: master.overview || "",
      vehicles: master.vehicles || "A/C Minivan / Coach, 4x4 in Merzouga dunes, Camel trek",
      hotels: master.hotels || "4* & 5* Hotels, Authentic Blue City Riad, Desert Camp",
      price: master.price || "On Request (Best Price Guarantee)",
      priceSub: master.priceSub || "Best Price Guarantee (+5% match)",
      itinerary: master.itinerary.map((day) => ({
        day: day.day,
        title: day.title,
        desc: day.desc,
      })),
      inclusions: master.inclusions || [
        "Private air-conditioned vehicle with dedicated driver",
        "Official licensed local guides in all imperial cities",
        "Accommodations on half-board (daily breakfast & dinner)",
        "Desert 4x4 transfers and sunrise camel trek",
        "Entrance fees to monuments & UNESCO sights",
      ],
      exclusions: master.exclusions || [
        "International flights",
        "Travel insurance",
        "Lunches & drinks not specified",
        "Personal expenses and tips",
      ],
      dates: [
        "Every Saturday (Weekly Guaranteed Departures)",
        "Private Custom Departure on Any Desired Date",
        "Spring Season 2025 / 2026",
        "Autumn & Winter 2025 / 2026",
      ],
      hotelList: [
        {
          name: "Handpicked 4★ & 5★ Boutique Riads & Heritage Palaces",
          stars: 5,
          desc: "Curated collection of premier boutique riads and luxury hotels (Hotel Chellah Rabat, Palais Ommeyad Fes, Riad Kniza Marrakech, Le Berbere Palace Ouarzazate).",
        },
        {
          name: "Private Sahara Luxury Desert Camp (Merzouga / Erg Chebbi)",
          stars: 5,
          desc: "Royal Berber tents featuring plush king beds, en-suite bathrooms, fine candlelight dinner, and traditional gnawa fire-pit rhythms under desert stars.",
        },
      ],
    };
  }

  // 2. Fallback to itinerariesData (Legacy golf & special circuits)
  const legacy = itinerariesData[id];
  if (legacy) {
    const rawTitle = typeof legacy.title === "object" ? (lang === "FR" ? legacy.title.FR : legacy.title.EN) : String(legacy.title);
    const rawDur = typeof legacy.duration === "object" ? (lang === "FR" ? legacy.duration.FR : legacy.duration.EN) : String(legacy.duration);
    const rawOverview = typeof legacy.overview === "object" ? (lang === "FR" ? legacy.overview.FR : legacy.overview.EN) : String(legacy.overview);
    const rawCost = typeof legacy.cost === "object" ? (lang === "FR" ? legacy.cost.FR : legacy.cost.EN) : String(legacy.cost);

    return {
      id,
      name: rawTitle,
      duration: rawDur,
      badge: "Signature Tour",
      image: legacy.image || legacy.contentImage || "/images/bestofmorocco/img_tour_list_1.jpg",
      destinations: [rawTitle.split("—")[0].trim()],
      overview: rawOverview,
      vehicles: "Private A/C Transport & Airport Transfers",
      hotels: "Selected 4★ & 5★ Accommodations & Desert Camps",
      price: rawCost || "On Request (Best Price Guarantee)",
      priceSub: "Best Price Guarantee (+5% match)",
      itinerary: (legacy.timeline || []).map((t) => ({
        day: t.day,
        title: typeof t.title === "object" ? (lang === "FR" ? t.title.FR : t.title.EN) : String(t.title),
        desc: typeof t.desc === "object" ? (lang === "FR" ? t.desc.FR : t.desc.EN) : String(t.desc),
      })),
      inclusions: legacy.inclusions ? (lang === "FR" ? legacy.inclusions.FR : legacy.inclusions.EN) : [],
      exclusions: legacy.exclusions ? (lang === "FR" ? legacy.exclusions.FR : legacy.exclusions.EN) : [],
      hotelList: (legacy.hotels || []).map((h) => ({
        name: h.name,
        stars: h.stars || 5,
        desc: typeof h.desc === "object" ? (lang === "FR" ? h.desc.FR : h.desc.EN) : String(h.desc),
      })),
    };
  }

  return null;
};

export default function ItineraryClient({ id, crumbs }: { id: string; crumbs: BreadcrumbItem[] }) {
  const { lang } = useLang();
  const tour = getTourData(id, lang);

  // Form State
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(2);
  const [bookingMessage, setBookingMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/info@bestofmoroccotour.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        _template: "box",
        "Tour Requested": tour?.name || id,
        "Duration": tour?.duration || "",
        "Client Name": bookingName,
        "Email Address": bookingEmail,
        "Phone Number": bookingPhone,
        "Preferred Travel Date": selectedDate,
        "Number of Guests": passengerCount,
        "Special Requests / Customizations": bookingMessage,
        _subject: `Best of Morocco Tours - Booking Inquiry: ${tour?.name || id}`,
      }),
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitted(true); // fall-through success UI
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const scrollToBooking = () => {
    const el = document.getElementById("booking-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const nameInput = document.getElementById("client-name");
      if (nameInput) nameInput.focus();
    }
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-transparent text-[#1E1B18] flex flex-col justify-center items-center px-4">
        <Navbar />
        <div className="text-center py-24 space-y-4">
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            {lang === "FR" ? "Itinéraire non trouvé" : "Itinerary Not Found"}
          </h2>
          <p className="text-stone-600 text-sm max-w-md mx-auto">
            {lang === "FR" 
              ? "Le circuit demandé est introuvable. Veuillez consulter notre catalogue complet de circuits au Maroc."
              : "The requested circuit could not be found. Please explore our complete catalog of Morocco private tours."}
          </p>
          <Link
            href="/#tours"
            className="inline-flex items-center gap-2 rounded-full bg-[#4A3525] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#322318] transition-colors"
          >
            <span>{lang === "FR" ? "Voir tous les circuits" : "View All Circuits"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <FooterEditorial />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-[#1E1B18] font-sans antialiased selection:bg-amber-200 selection:text-stone-900 relative pb-28">
      {/* Background Moroccan Arch Watermarks */}
      <MoroccanArchWatermark 
        className="fixed top-1/4 -left-32 xl:-left-40 w-[380px] xl:w-[460px] h-auto text-[#C05621] pointer-events-none -z-10 hidden xl:block" 
        opacity={0.16} 
      />
      <MoroccanArchWatermark 
        className="fixed top-2/3 -right-32 xl:-right-40 w-[380px] xl:w-[460px] h-auto text-[#D97706] pointer-events-none -z-10 hidden xl:block" 
        opacity={0.15} 
      />

      {/* Hanging Brass Lantern in Left Gutter */}
      <div className="absolute top-36 left-4 z-30 pointer-events-none hidden 2xl:block">
        <motion.div {...lanternSway} style={{ transformOrigin: "top center" }}>
          <MoroccanLanternArt height={130} opacity={0.38} />
        </motion.div>
      </div>

      {/* Sticky Top Header */}
      <div className="sticky top-4 z-50 w-full max-w-[1360px] mx-auto px-3 sm:px-6 pt-2">
        <Navbar />
      </div>

      {/* Main Subpage Container */}
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8">
        
        {/* Breadcrumb Navigation Trail */}
        <div className="px-1">
          <Breadcrumbs items={crumbs} />
        </div>

        {/* =========================================================================
            1. HERO HEADER CARD (Pixel-faithful to the pop-up modal, in high definition)
           ========================================================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOutExpo }}
          className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-[2.2rem] overflow-hidden shadow-[0_20px_50px_rgba(74,53,37,0.14)] border border-stone-200/80 bg-stone-900 flex flex-col justify-end p-6 sm:p-10 lg:p-12 text-white"
        >
          {/* Full Cover Backdrop Image */}
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            priority
            className="object-cover object-center brightness-75 scale-100 hover:scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Cinematic Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25 pointer-events-none" />

          {/* Content Lockup directly on Hero Image */}
          <div className="relative z-10 space-y-4 max-w-4xl">
            {/* Badges Row (Exact match to pop-up screenshot) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-stone-950 shadow-xs">
                {tour.badge}
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/55 text-white border border-white/25 backdrop-blur-md">
                {tour.duration}
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/35 backdrop-blur-md flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Best Price Guarantee (+5% Match)</span>
              </span>
            </div>

            {/* Title (Luxurious bold serif) */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-md">
              {tour.name}
            </h1>

            {/* Route MapPin Line */}
            {tour.destinations && tour.destinations.length > 0 && (
              <p className="text-xs sm:text-sm text-stone-200 flex items-center gap-2 flex-wrap font-light leading-relaxed drop-shadow">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{tour.destinations.join(" · ")}</span>
              </p>
            )}
          </div>
        </motion.section>

        {/* =========================================================================
            2. QUICK INFO FEATURE GRID (3 Columns in White / Off-White Theme)
           ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Duration */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-[0_8px_30px_rgba(74,53,37,0.05)] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-[#C05621] shrink-0 border border-amber-500/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                Duration
              </span>
              <span className="font-bold text-[#1E1B18] text-sm sm:text-base leading-snug block">
                {tour.duration}
              </span>
            </div>
          </div>

          {/* Card 2: Transportation */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-[0_8px_30px_rgba(74,53,37,0.05)] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-[#C05621] shrink-0 border border-amber-500/20">
              <Car className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                Transportation
              </span>
              <span className="font-bold text-[#1E1B18] text-sm sm:text-base leading-snug block">
                {tour.vehicles}
              </span>
            </div>
          </div>

          {/* Card 3: Lodging */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-[0_8px_30px_rgba(74,53,37,0.05)] flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-[#C05621] shrink-0 border border-amber-500/20">
              <Hotel className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                Lodging
              </span>
              <span className="font-bold text-[#1E1B18] text-sm sm:text-base leading-snug block">
                {tour.hotels}
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. PACKAGE PRICING BANNER (Off-White & Warm Beige)
           ========================================================================= */}
        <section className="rounded-2xl bg-white/95 backdrop-blur-md p-6 sm:p-8 border border-stone-200/90 shadow-[0_10px_35px_rgba(74,53,37,0.06)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#C05621] block">
              PACKAGE PRICING
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B18] tracking-tight">
              {tour.price}
            </div>
            <p className="text-xs text-stone-500 font-light">
              {tour.priceSub}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm font-light leading-relaxed">
              Private departures can be adjusted to any dates, hotel tiers, and group size.
            </p>
            <button
              type="button"
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2 rounded-full bg-[#4A3525] hover:bg-[#322318] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* =========================================================================
            4. MAIN DETAIL SECTION: Day-by-Day Timeline + In-Page Booking Sidebar
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
          
          {/* LEFT COLUMN: Day-by-Day Timeline & Inclusions (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section Header: Day-by-Day Itinerary */}
            <div className="flex items-center justify-between border-b border-stone-200/80 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B18] tracking-tight">
                Day-by-Day Itinerary <span className="text-stone-400 font-light text-xl">({tour.itinerary.length} Days)</span>
              </h2>
              <span className="text-xs font-semibold text-[#C05621] uppercase tracking-wider hidden sm:inline-block">
                Licensed Ministry Guides
              </span>
            </div>

            {/* Vertical Timeline Track */}
            <div className="relative pl-12 sm:pl-16 space-y-6 before:absolute before:left-[17px] sm:before:left-[21px] before:top-4 before:bottom-4 before:w-0.5 before:bg-amber-300/60">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="relative group">
                  {/* Amber Medallion Circle on the timeline track (Matching pop-up) */}
                  <div className="absolute -left-12 sm:-left-16 top-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400 text-stone-950 font-bold text-sm sm:text-base flex items-center justify-center shadow-md ring-4 ring-[#FAF8F5] shrink-0">
                    {day.day}
                  </div>

                  {/* Day Detail Card in Light / Beige Tone */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-[0_4px_20px_rgba(74,53,37,0.04)] group-hover:shadow-[0_8px_30px_rgba(74,53,37,0.08)] group-hover:border-amber-300/80 transition-all duration-300">
                    <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-3 mb-3.5">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#1E1B18] tracking-tight uppercase">
                        {day.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600 border border-stone-200 shrink-0">
                        Day {day.day}
                      </span>
                    </div>

                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
                      {day.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <MoroccanFriezeDivider className="opacity-40 py-2" />

            {/* Inclusions & Exclusions Side-by-Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions Card */}
              <div className="bg-white/95 rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#059669]">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    What&apos;s Included
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-light">
                  {tour.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions Card */}
              <div className="bg-white/95 rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-stone-600">
                  <div className="w-5 h-5 rounded-full bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-500 shrink-0 text-xs font-bold">
                    ✕
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    What&apos;s Not Included
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-light">
                  {tour.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Curated Hotels / Accommodations Spotlight */}
            {tour.hotelList && tour.hotelList.length > 0 && (
              <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#C05621]">
                  <Hotel className="w-5 h-5 shrink-0" />
                  <h4 className="font-serif text-lg font-bold text-stone-900">
                    Handpicked Luxury Accommodations
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {tour.hotelList.map((hotel, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-[#1E1B18]">
                          {hotel.name}
                        </span>
                        <span className="text-amber-500 text-xs">
                          {"★".repeat(hotel.stars)}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 font-light leading-relaxed">
                        {hotel.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Dedicated Sticky In-Page Booking Form (lg:col-span-4) */}
          <div className="lg:col-span-4 sticky top-24" id="booking-form">
            <div className="rounded-[2rem] bg-white/98 backdrop-blur-xl border border-stone-200/95 shadow-[0_16px_45px_rgba(74,53,37,0.08)] p-6 sm:p-7 relative overflow-hidden">
              {/* Subtle Moroccan Rosette Hallmark watermark */}
              <div className="absolute -top-6 -right-6 pointer-events-none opacity-10">
                <MoroccanMedallionArt size={110} />
              </div>

              {/* Form Title & Context */}
              <div className="space-y-1 mb-5 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C05621] block">
                  FAST INQUIRY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1B18]">
                  Plan This Itinerary
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Personalized response within 24h by certified Moroccan travel directors.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-stone-900">
                    Quote Request Received!
                  </h4>
                  <p className="text-xs text-stone-600 font-light max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong>{bookingName}</strong>. Our director has received your request for <strong>{tour.name}</strong> and will contact you directly via <strong>{bookingEmail}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#C05621] font-bold uppercase tracking-wider hover:underline pt-2 cursor-pointer"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4 relative z-10">
                  {/* Input: Full Name */}
                  <div>
                    <label htmlFor="client-name" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Sterling Hunt"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full rounded-xl bg-stone-50 border border-stone-200 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#C05621] transition-colors"
                    />
                  </div>

                  {/* Input: Email */}
                  <div>
                    <label htmlFor="client-email" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="e.g. sterling@example.com"
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      className="w-full rounded-xl bg-stone-50 border border-stone-200 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#C05621] transition-colors"
                    />
                  </div>

                  {/* Input: Phone */}
                  <div>
                    <label htmlFor="client-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="e.g. +1 (514) 123-4567"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full rounded-xl bg-stone-50 border border-stone-200 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#C05621] transition-colors"
                    />
                  </div>

                  {/* Row: Travel Date & Guests */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="client-date" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Travel Window
                      </label>
                      <input
                        id="client-date"
                        type="text"
                        placeholder="e.g. Oct 2026"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full rounded-xl bg-stone-50 border border-stone-200 px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#C05621] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="client-guests" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Guests
                      </label>
                      <div className="flex items-center rounded-xl bg-stone-50 border border-stone-200 p-1">
                        <button
                          type="button"
                          onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
                          className="w-7 h-7 rounded-lg bg-white border border-stone-200 text-stone-700 font-bold hover:bg-stone-100 flex items-center justify-center text-xs cursor-pointer"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-bold text-xs text-stone-800">
                          {passengerCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setPassengerCount(Math.min(16, passengerCount + 1))}
                          className="w-7 h-7 rounded-lg bg-white border border-stone-200 text-stone-700 font-bold hover:bg-stone-100 flex items-center justify-center text-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Input: Special Requests / Notes */}
                  <div>
                    <label htmlFor="client-notes" className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Wishes &amp; Dietary Requests
                    </label>
                    <textarea
                      id="client-notes"
                      rows={3}
                      placeholder="e.g. Vegetarian diet, luxury riad upgrade, private airport transfer..."
                      value={bookingMessage}
                      onChange={(e) => setBookingMessage(e.target.value)}
                      className="w-full rounded-xl bg-stone-50 border border-stone-200 px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-[#C05621] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full rounded-full bg-[#4A3525] hover:bg-[#322318] py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? "Sending Request..." : "Request Booking for this Tour"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>

                  <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-stone-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>No advance payment required · Instant confirmation</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* =========================================================================
          5. BOTTOM STICKY ACTION BAR (Exact match to pop-up screenshot bottom bar)
         ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1E1B18]/95 backdrop-blur-xl border-t border-stone-800 py-2.5 sm:py-3.5 px-3 sm:px-8 text-white flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.25)]">
        {/* Left: Questions? Call direct */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-stone-300 shrink-0">
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
          <span className="hidden md:inline">Questions? Call direct:</span>
          <a
            href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, '')}`}
            className="font-bold text-white hover:text-amber-300 transition-colors underline-offset-2 hover:underline text-[11px] sm:text-sm"
          >
            {siteConfig.phoneUsCa}
          </a>
        </div>

        {/* Right: Request Booking Button */}
        <div className="flex items-center gap-2 sm:gap-5 shrink-0">
          <Link
            href="/#catalog"
            className="text-[11px] sm:text-xs font-semibold text-stone-300 hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap"
          >
            All Tours
          </Link>
          <button
            type="button"
            onClick={scrollToBooking}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 px-3 sm:px-7 py-2 sm:py-2.5 text-[10.5px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105 shrink-0 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">REQUEST BOOKING FOR THIS TOUR</span>
            <span className="inline sm:hidden">BOOK THIS TOUR</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <FooterEditorial />
      </div>
    </div>
  );
}
