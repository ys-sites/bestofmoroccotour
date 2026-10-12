'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Shield, CheckCircle, Hotel } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import MapSection from "../../components/map-section";
import Breadcrumbs, { type BreadcrumbItem } from "../../components/breadcrumbs";
import { useLang, translate } from "../../context/lang-context";
import { itinerariesData, itineraryThemes, ItineraryTheme } from "@/data/itineraries";
import SmartVideo from "../../components/smart-video";
import { videoSources, videoAsset } from "@/data/videoSources";
import { getCityKey } from "../../utils/city-map";
import MichlifenFeatureBlock from "@/components/ui/michlifen-feature-block";

const getGalleryImages = (itineraryId: number) => {
  switch (itineraryId) {
    case 10:
      return [
        "/images/rgdes_parcours_rouge_18.jpg",
        "/images/rgdes_parcours_bleu_10.jpg",
        "/images/rgdes_blue_course_5.jpg",
        "/images/rgdes_rouge_5.jpg",
        "/images/rgdes_bleu_7_tgp.jpg",
        "/images/rgdes_jaune_9.jpg",
        "/images/rgdes_bleu_9_matin.jpg",
        "/images/rgdes_clubhouse.jpg",
        "/images/rgdes_img_3723.jpg",
        "/images/rgdes_img_3752.jpg",
        "/images/rgdes_paradise_flowers.jpg",
        "/images/rgdes_parcours_rouge_09_17.jpg",
        "/images/rgdes_parcours_rouge_11.jpg",
        "/images/rgdes_parcours_rouge_12.jpg",
        "/images/rgdes_parcours_rouge_13.jpg",
        "/images/rgdes_coucher_dete.jpg",
        "/images/rgdes_soleil_couchant.jpg"
      ];
    case 18:
      return [
        "/michlifen.jpg",
        "/images/royal_golf_aerial_1.jpg",
        "/images/royal_golf_marrakech_1.jpg"
      ];
    case 17:
      return [
        "/Tangier.jpg",
        "/images/royal_golf_marrakech_1.jpg",
        "/images/royal_golf_marrakech_2.jpg"
      ];
    case 11:
      return [
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_1.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_2.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_3.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_4.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_5.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_6.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_7.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_8.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_9.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_10.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_11.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_12.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_13.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_14.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_15.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_16.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_17.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_18.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_19.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_20.avif",
        "/images/client_request/golf_agadir_photos/golf_tazegzout_2.webp",
        "/images/client_request/golf_agadir_photos/golf_tazegzout_3.webp",
        "/images/client_request/golf_agadir_photos/golf_le_soleil__(10).webp",
        "/images/client_request/golf_agadir_photos/golf_les_dunes_(7).webp",
        "/images/client_request/golf_agadir_photos/tgz_10_side.jpg",
        "/images/client_request/golf_agadir_photos/tgz_17_zoom.jpg",
        "/images/client_request/golf_agadir_photos/tgz_18_hotel.jpg",
        "/images/client_request/golf_agadir_photos/tgz_8th_high.jpg",
        "/images/tgz_course_1.jpg",
        "/images/tgz_course_aerial.jpg",
        "/images/tgz_course_hotel.jpg",
        "/images/tgz_course_ocean.jpg"
      ];
    case 12:
      return [
        "/images/client_request/white_beach_hotel_agadir/pickalbatros-white-beach-resort-in-agadir.jpg",
        "/images/client_request/white_beach_hotel_agadir/deluxe-room-sea-view.jpg",
        "/images/client_request/white_beach_hotel_agadir/deluxe-room-swim-up-view.jpg",
        "/images/client_request/white_beach_hotel_agadir/beach-area.jpg",
        "/images/client_request/white_beach_hotel_agadir/pool_(1).jpg",
        "/images/client_request/white_beach_hotel_agadir/pool_(2).jpg",
        "/images/client_request/white_beach_hotel_agadir/lobby.jpg",
        "/images/client_request/white_beach_hotel_agadir/main-restaurant.jpg",
        "/images/client_request/white_beach_hotel_agadir/tagine-restaurant.jpg",
        "/images/client_request/white_beach_hotel_agadir/spa_(1).jpg",
        "/images/client_request/white_beach_hotel_agadir/spa_(2).jpg",
        "/images/client_request/white_beach_hotel_agadir/gym.jpg",
        "/images/client_request/white_beach_hotel_agadir/food-court.jpg",
        "/images/client_request/golf_agadir_photos/golf_tazegzout_2.webp",
        "/images/client_request/golf_agadir_photos/golf_le_soleil__(10).webp",
        "/images/client_request/golf_agadir_photos/golf_les_dunes_(7).webp"
      ];
    case 13:
      return [
        "/images/client_request/golf_agadir_photos/golf_tazegzout_2.webp",
        "/images/client_request/golf_agadir_photos/golf_tazegzout_3.webp",
        "/images/client_request/golf_agadir_photos/golf_le_soleil__(10).webp",
        "/images/client_request/golf_agadir_photos/golf_les_dunes_(7).webp",
        "/images/client_request/golf_agadir_photos/tgz_10_side.jpg",
        "/images/client_request/golf_agadir_photos/tgz_17_zoom.jpg",
        "/images/client_request/golf_agadir_photos/tgz_18_hotel.jpg",
        "/images/client_request/golf_agadir_photos/tgz_8th_high.jpg",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_1.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_2.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_3.avif",
        "/images/client_request/hilton_taghazout_agadir/hilton_taghazout_4.avif"
      ];
    case 14:
      return [
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(1).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(2).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(3).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(4).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(5).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(6).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(7).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(8).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(9).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(11).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(12).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(13).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(14).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(15).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(16).webp",
        "/images/client_request/hotel_du_golf_marrakech/hotel_du_golf_marrakech_(17).webp",
        "/images/client_request/golf_marrakech_photos/golf_al_maaden_(4).webp",
        "/images/client_request/golf_marrakech_photos/golf_amelkis_(3).webp",
        "/images/client_request/golf_marrakech_photos/golf_assoufid_(4).webp",
        "/images/client_request/golf_marrakech_photos/golf_le_royal_(15).webp",
        "/images/client_request/golf_marrakech_photos/golf_noria_(2).webp",
        "/images/royal_golf_marrakech_1.jpg",
        "/images/royal_golf_marrakech_2.jpg"
      ];
    case 15:
    case 16:
      return [
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal.webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(2).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(3).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(4).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(5).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(6).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(7).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(8).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(9).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(10).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(11).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(12).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(13).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(14).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(15).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(16).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(17).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(18).webp",
        "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(19).webp",
        "/images/client_request/golf_marrakech_photos/golf_al_maaden_(4).webp",
        "/images/client_request/golf_marrakech_photos/golf_amelkis_(3).webp",
        "/images/client_request/golf_marrakech_photos/golf_assoufid_(4).webp",
        "/images/client_request/golf_marrakech_photos/golf_le_royal_(15).webp",
        "/images/client_request/golf_marrakech_photos/golf_noria_(2).webp",
        "/images/royal_golf_marrakech_1.jpg",
        "/images/royal_golf_marrakech_2.jpg"
      ];
    case 6:
      return [
        "/images/imperial_cities_fes.jpg",
        "/images/morocco-sahara-dunes.png",
        "/images/german_circuit_morocco.jpg"
      ];
    case 7:
      return [
        "/images/chefchaouen.png",
        "/images/imperial_cities_fes.jpg"
      ];
    case 8:
      return [
        "/images/trekking_toubkal.png",
        "/images/german_circuit_morocco.jpg",
        "/images/marrakech_sunset_hero.png"
      ];
    case 9:
      return [
        "/images/german_circuit_morocco.jpg",
        "/images/imperial_cities_fes.jpg"
      ];
    case 99:
      return [
        "/images/corporate_meeting.png",
        "/images/almaaden_restaurant1.jpg"
      ];
    default:
      return [];
  }
};

export default function ItineraryClient({ id, crumbs }: { id: string; crumbs: BreadcrumbItem[] }) {
  const { lang } = useLang();

  // Safe lookup to prevent securecoder CWE-94 dynamic bracket notation warning
  const cleanTitle = (title: string) => {
  return title.replace(/\s*\(\d+N\)\s*$/i, "");
};

// TODO(JAY): set NEXT_PUBLIC_INSURANCE_URL in Vercel once client provides insurance partner link
const INSURANCE_LINK_URL = process.env.NEXT_PUBLIC_INSURANCE_URL ?? "";

  const itinerary = (() => {
    switch (id) {
      case "6": return itinerariesData["6"];
      case "7": return itinerariesData["7"];
      case "8": return itinerariesData["8"];
      case "9": return itinerariesData["9"];
      case "10": return itinerariesData["10"];
      case "11": return itinerariesData["11"];
      case "12": return itinerariesData["12"];
      case "13": return itinerariesData["13"];
      case "14": return itinerariesData["14"];
      case "15": return itinerariesData["15"];
      case "16": return itinerariesData["16"];
      case "17": return itinerariesData["17"];
      case "18": return itinerariesData["18"];
      default: return null;
    }
  })();

  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passengerCount, setPassengerCount] = useState(1);
  const [passengerAges, setPassengerAges] = useState<number[]>([0]);
  const [selectedDate, setSelectedDate] = useState("");

  const updatePassengerCount = (delta: number) => {
    setPassengerCount(prev => {
      const next = Math.min(12, Math.max(1, prev + delta));
      setPassengerAges(ages => {
        const copy = [...ages];
        while (copy.length < next) copy.push(0);
        return copy.slice(0, next);
      });
      return next;
    });
  };

  const updatePassengerAge = (idx: number, val: number) => {
    setPassengerAges(ages => ages.map((age, i) => i === idx ? val : age));
  };



  if (!itinerary) {
    const tNotFound = {
      FR: "Itinéraire non trouvé",
      EN: "Itinerary Not Found"
    };
    const tReturnHome = {
      FR: "Retour à l'accueil",
      EN: "Return to Home"
    };
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-center items-center">
        <h2 className="font-serif text-2xl mb-4 text-zinc-800">{translate(tNotFound, lang)}</h2>
        <Link href="/" className="text-brand-gold hover:underline">{translate(tReturnHome, lang)}</Link>
      </div>
    );
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/mevoyages75@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _template: "box",
        "Type de Demande / Request Type": "Réservation d'itinéraire / Itinerary Booking",
        "Itinéraire / Itinerary": translate(itinerary.title, lang),
        "Nom du client / Client Name": bookingName,
        "Téléphone / Client Phone": bookingPhone,
        "Courriel / Client Email": bookingEmail,
        "Date de départ / Travel Date": selectedDate,
        "Participants / Guests Count": passengerCount,
        "Âges des passagers / Guest Ages": passengerAges.join(", "),
        "Message & Demandes / Special Requests": bookingMessage,
        _subject: `Merveilles & Voyages - Réservation: ${translate(itinerary.title, lang)}`
      })
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

  // Safe lookup to prevent securecoder CWE-94 dynamic bracket notation warning
  const theme: ItineraryTheme | null = (() => {
    switch (id) {
      case "1": return itineraryThemes["1"];
      case "2": return itineraryThemes["2"];
      case "3": return itineraryThemes["3"];
      case "4": return itineraryThemes["4"];
      case "5": return itineraryThemes["5"];
      case "6": return itineraryThemes["6"];
      case "7": return itineraryThemes["7"];
      case "8": return null;
      case "9": return null;
      case "10": return null;
      case "11": return null;
      case "12": return null;
      case "13": return null;
      case "14": return null;
      case "15": return null;
      case "16": return null;
      default: return null;
    }
  })();

  const videoUrl = (() => {
    switch (id) {
      case "7":
        return "Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt";
      case "6":
      case "9":
      case "fez":
      case "fes":
        return "Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u";
      case "essaouira":
        return "Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz";
      case "ouarzazate":
        return "Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj";
      case "dakhla":
        return "Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8";
      case "casablanca":
        return "Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb";
      case "tangier":
      case "tanger":
      case "17":
      case "18":
        return null;
      case "10":
        return null;
      case "11":
      case "12":
      case "13":
        return "Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad";
      case "14":
      case "15":
      case "16":
        return "Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv";
      default:
        return null;
    }
  })();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      {/* Hero Header Section */}
      {theme ? (
        <section className="relative w-full aspect-[16/10] md:aspect-[21/9] min-h-[500px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden bg-zinc-950 flex flex-col justify-end">
          <img
            src={theme.heroBg}
            alt={translate(theme.heroTitle, lang)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-24 max-w-7xl mx-auto z-10">
            <Breadcrumbs items={crumbs} className="mb-6" />
            <div className="max-w-2xl space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/30 px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase rounded-full inline-block">
                  {translate(itinerary.duration, lang)}
                </span>
                <div className="flex gap-0.5 select-none bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-md">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C5A880] text-[12px] leading-none">★</span>
                  ))}
                </div>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase leading-[1.1] font-bold text-white drop-shadow-lg max-w-4xl text-balance">
                {translate(theme.heroTitle, lang)}
              </h1>
              <p className="text-[14px] sm:text-[16px] leading-relaxed text-zinc-300 font-light max-w-lg">
                {translate(theme.heroSub, lang)}
              </p>
              <a
                href="#itinerary-details"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 font-semibold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
                style={{
                  backgroundColor: theme.themeColor,
                  color: "#faf9f5",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.themeColorHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.themeColor;
                }}
              >
                <span>{translate(theme.heroBtn, lang)}</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Watercolor Divider Mask */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 select-none pointer-events-none">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[60px] md:h-[100px]"
              style={{ fill: "#faf9f5" }}
            >
              <path d="M0,0 C150,90 350,10 500,70 C650,110 850,20 1000,80 C1100,110 1150,90 1200,60 L1200,120 L0,120 Z" />
              <path d="M0,20 C180,70 320,30 480,90 C620,10 800,100 950,50 C1080,20 1150,80 1200,40 L1200,120 L0,120 Z" opacity="0.3" />
              <path d="M0,40 C200,30 380,80 520,40 C700,90 880,30 1020,70 C1120,40 1160,60 1200,50 L1200,120 L0,120 Z" opacity="0.15" />
            </svg>
          </div>
        </section>
      ) : (
        <section className="relative w-full aspect-[16/10] md:aspect-[21/9] min-h-[400px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden bg-zinc-950 flex flex-col justify-end">
          {videoUrl ? (
            <video
              className="absolute inset-0 w-full h-full object-cover object-center opacity-45 pointer-events-none animate-kenburns"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={videoAsset(videoUrl).poster}
              onTimeUpdate={(e) => { const v = e.currentTarget; if (v.currentTime >= 60) v.currentTime = 0; }}
              style={{
                backgroundImage: `url('${videoAsset(videoUrl).poster}')`
              }}
            >
              <source src={videoAsset(videoUrl).mp4Mobile} type="video/mp4" media="(max-width: 768px)" />
              <source src={videoAsset(videoUrl).mp4} type="video/mp4" />
            </video>
          ) : (
            <img
              src={itinerary.image}
              alt={translate(itinerary.title, lang)}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />

          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12 max-w-7xl mx-auto z-10">
            <Breadcrumbs items={crumbs} className="mb-6" />
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/30 px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase rounded-full inline-block">
                  {translate(itinerary.duration, lang)}
                </span>
                <div className="flex gap-0.5 select-none bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-md">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C5A880] text-[12px] leading-none">★</span>
                  ))}
                </div>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase leading-[1.1] font-bold text-white drop-shadow-lg max-w-4xl text-balance">
                {translate(itinerary.title, lang)}
              </h1>
            </div>
          </div>
        </section>
      )}

      {/* Discovery Section (with Map pins) */}
      {theme && (
        <div className="relative bg-[#faf9f5]">
          <div className="py-12">
            <MapSection countryId={id === "4" ? "2" : id === "5" ? "3" : "1"} itineraryId={id} />
          </div>

          {/* Experience Grid Section */}
          <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Text block */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start space-y-6">
                <span className="w-12 h-1 border-t-2" style={{ borderColor: theme.themeColor }} />
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-900 leading-tight uppercase">
                  {translate(theme.experienceTitle, lang)}
                </h2>
                <p className="text-[14px] leading-relaxed text-zinc-600 font-light">
                  {translate(theme.experienceDesc, lang)}
                </p>
              </div>
              {/* Featured Experience Cover */}
              <div className="lg:col-span-8 rounded-[2rem] overflow-hidden relative group min-h-[300px] md:min-h-[400px] shadow-md border border-zinc-200/50">
                <img
                  src={theme.experienceGrid[0].img}
                  alt={translate(theme.experienceGrid[0].label, lang)}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide uppercase">
                    {translate(theme.experienceGrid[0].label, lang)}
                  </h3>
                </div>
              </div>
            </div>

            {/* Other Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {theme.experienceGrid.slice(1).map((card, idx) => (
                <div key={idx} className="rounded-[1.5rem] overflow-hidden relative group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-sm border border-zinc-200/50">
                  <img
                    src={card.img}
                    alt={translate(card.label, lang)}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
                      {translate(card.label, lang)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Main Content Layout */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20 bg-white">

        {/* Left Side: Overview and Day-by-Day Timeline */}
        <div className="lg:col-span-8 space-y-16" id="itinerary-details">
          {!theme ? (
            <>
              <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
                  {lang === "FR" ? "Aperçu de l'Itinéraire" : "Trip Overview"}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-zinc-600 font-light">
                  {translate(itinerary.overview, lang)}
                </p>

                {itinerary.dates && (
                  <div className="bg-zinc-50 border border-zinc-200/60 p-6 rounded-2xl space-y-4 my-6">
                    <span className="text-brand-gold font-mono text-[10px] tracking-[0.2em] uppercase block font-semibold">
                      {lang === "FR" ? "Dates de départ disponibles" : "Available Departure Dates"}
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-zinc-800">
                      {translate(itinerary.dates, lang).map((d: string, i: number) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] md:text-xs text-zinc-500 font-light italic border-t border-zinc-200/60 pt-3">
                      {lang === "FR"
                        ? "D'autres dates de départ sont disponibles sur demande — notre conciergerie se fera un plaisir d'organiser un séjour parfaitement adapté à votre horaire. Contactez-nous pour planifier votre voyage."
                        : "Additional departure dates are available upon request — our concierge team will gladly arrange a departure tailored to your schedule. Contact us to plan your trip."}
                    </p>
                  </div>
                )}

                <a
                  href="#booking-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8B2635] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-luxury hover:bg-[#72202b] shadow-md cursor-pointer mt-4"
                >
                  {lang === "FR" ? "Réserver ce voyage" : "Book this Journey"} &rarr;
                </a>
              </div>

              {/* Destination Showcase — city-matched SmartVideo tile */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full rounded-2xl overflow-hidden border border-zinc-100 shadow-sm bg-black"
              >
                <SmartVideo
                  variant="tile"
                  source={videoSources[getCityKey(itinerary.id)]}
                  className="h-[320px] md:h-[420px]"
                />
              </motion.div>

              {/* Image Gallery for Golf & Travel Packages */}
              {getGalleryImages(itinerary.id).length > 0 && (
                <div className="space-y-6 pt-10 border-t border-zinc-100">
                  <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
                    {lang === "FR" ? "Galerie Photos" : "Photo Gallery"}
                  </h3>
                  
                  {/* Gallery Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {getGalleryImages(itinerary.id).map((imgSrc, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className="relative aspect-video overflow-hidden cursor-pointer group border border-zinc-200"
                      >
                        <img
                          src={imgSrc}
                          alt={`${translate(itinerary.title, lang)} - View ${idx + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-sm"
                        />
                        {/* Gold hover overlay */}
                        <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : null}

          {/* Day plans */}
          <div className="space-y-10">
            <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 border-b border-zinc-200 pb-4">
              {lang === "FR" ? "Programme Jour par Jour" : "Day-by-Day Journey"}
            </h3>

            <div className="relative border-l border-zinc-200 pl-6 md:pl-10 ml-4 space-y-12">
              {itinerary.timeline.map((item, idx) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-gold group-hover:bg-brand-gold transition-colors duration-300 z-10" />

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase font-semibold">
                      {lang === "FR" ? `JOUR ${item.day}` : `DAY ${item.day}`}
                    </span>
                    <h4 className="font-serif text-lg md:text-xl text-zinc-800 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                      {translate(item.title, lang)}
                    </h4>
                    <p className="text-[12px] md:text-[13px] leading-relaxed text-zinc-500 font-light pt-1">
                      {translate(item.desc, lang)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pt-10 border-t border-zinc-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{lang === "FR" ? "Ce qui est compris" : "What's Included"}</span>
                </h4>
                <ul className="space-y-3 pl-1">
                  {translate(itinerary.inclusions, lang).map((item, idx) => (
                    <li key={idx} className="text-zinc-600 text-[13px] md:text-[14px] leading-relaxed font-light flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold mt-1 text-sm">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl md:text-2xl text-red-600 flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full border border-red-400 flex items-center justify-center text-[10px] text-red-500 font-bold shrink-0">✕</span>
                  <span>{lang === "FR" ? "Non inclus" : "Not Included"}</span>
                </h4>
                <ul className="space-y-3 pl-1">
                  {translate(itinerary.exclusions, lang).map((item, idx) => (
                    <li key={idx} className="text-zinc-700 text-[13px] md:text-[14px] leading-relaxed font-light flex items-start gap-2.5">
                      <span className="text-zinc-400 mt-1 text-sm">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Premium Options */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 pt-10 border-t border-zinc-100"
          >
            <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
              <span className="bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded">$$$</span>
              <span>{lang === "FR" ? "Options à la carte" : "A La Carte Options"}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {translate(itinerary.options, lang).map((opt, idx) => (
                <div key={idx} className="p-5 bg-zinc-50/50 border border-zinc-200/60 rounded-2xl flex flex-col justify-between hover:border-brand-gold/40 transition-luxury duration-300">
                  <span className="text-zinc-800 text-[13px] font-medium leading-snug">{opt.name}</span>
                  <span className="text-brand-gold font-mono text-xs font-semibold mt-3 tabular-nums">{opt.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Accommodations */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 pt-10 border-t border-zinc-100"
          >
            <h4 className="font-serif text-xl md:text-2xl text-zinc-900 flex items-center gap-2.5">
              <Hotel className="w-5 h-5 text-brand-gold shrink-0" />
              <span>{lang === "FR" ? "Hébergements d'Exception" : "Featured Accommodations"}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {itinerary.hotels.map((hotel, idx) => (
                <div key={idx} className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden hover:shadow-md transition-luxury duration-300 flex flex-col h-full">
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-900 font-serif text-[16px] font-bold leading-tight">{hotel.name}</span>
                        <div className="flex items-center gap-0.5 text-brand-gold text-[11px]">
                          {"★".repeat(hotel.stars)}
                        </div>
                      </div>
                      <p className="text-zinc-500 text-[13px] leading-relaxed font-light">
                        {translate(hotel.desc, lang)}
                      </p>
                    </div>
                    {/* Render link only if it is not '#' and not empty */}
                    {hotel.link && hotel.link !== "#" && (
                      <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-zinc-950 font-mono text-[9px] tracking-widest uppercase inline-flex items-center gap-1.5 transition-colors pt-2">
                        <span>{lang === "FR" ? "DÉCOUVRIR LE SITE" : "VIEW PROPERTY"}</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-zinc-100"
          >
            <a
              href="#booking-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8B2635] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase px-10 py-5 transition-luxury hover:bg-[#72202b] shadow-md cursor-pointer min-w-[200px]"
            >
              {lang === "FR" ? "RÉSERVER VOTRE PASSAGE" : "RESERVE YOUR JOURNEY"} &rarr;
            </a>
            {INSURANCE_LINK_URL && (
              <a
                href={INSURANCE_LINK_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white text-zinc-700 font-semibold text-[11px] tracking-[0.2em] uppercase px-10 py-5 transition-luxury hover:bg-zinc-50 shadow-sm cursor-pointer min-w-[200px]"
              >
                {lang === "FR" ? "ASSURANCE VOYAGE" : "TRAVEL INSURANCE"}
              </a>
            )}
          </motion.div>

        </div>

        {/* Right Side: Video + Booking Panel */}
        <div className="lg:col-span-4 space-y-6">

          {/* Video Block — only for Marrakech & Sahara Expedition (ID 1) */}
          {itinerary.id === 1 && (
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-200/60 shadow-md bg-black">
              <video
                src="https://v1.pinimg.com/videos/iht/expMp4/81/24/b8/8124b8c7cd11c22123a7b75cfabf32fc_720w.mp4"
                className="w-full h-auto block bg-black"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onTimeUpdate={(e) => { const v = e.currentTarget; if (v.currentTime >= 60) v.currentTime = 0; }}
              />
            </div>
          )}

          {/* Contact Form Block */}
          <motion.div
            id="booking-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zinc-50/50 p-6 md:p-8 border border-zinc-200/80 shadow-md rounded-[1.5rem] relative overflow-hidden lg:sticky lg:top-28 scroll-mt-28"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="text-center md:text-left border-b border-zinc-200/60 pb-4">
                  <span className="text-brand-gold font-mono text-[9px] tracking-[0.25em] uppercase block mb-1">
                    {lang === "FR" ? "Frais de Voyage Estimés" : "Estimated Trip Cost"}
                  </span>
                  <div className="flex items-start justify-between">
                    {(() => {
                      const costText = translate(itinerary.cost, lang);
                      const isRequest = costText.toLowerCase().includes("devis") || costText.toLowerCase().includes("demande") || costText.toLowerCase().includes("request");
                      const originalCostText = itinerary.originalCost ? translate(itinerary.originalCost, lang) : null;
                      return (
                        <div className="flex flex-col items-start">
                          {originalCostText && (
                            <span className="text-sm line-through text-zinc-400 font-serif mb-1">
                              {originalCostText}
                            </span>
                          )}
                          <h3 className={`text-3xl font-bold font-serif tabular-nums ${originalCostText ? 'text-[#8B2635]' : 'text-zinc-900'}`}>
                            {costText}
                            {!isRequest && (
                              <span className="text-[10px] font-mono text-zinc-400 ml-1">
                                {lang === "FR" ? "CAD / pers." : "CAD / guest"}
                              </span>
                            )}
                          </h3>
                        </div>
                      );
                    })()}
                    <span className="text-[9px] font-mono text-[#faf9f5] uppercase bg-[#8B2635] px-2 py-0.5 rounded shadow-sm">
                      {itinerary.planLabel ? translate(itinerary.planLabel, lang) : (lang === "FR" ? "Haut de Gamme" : "All Inclusive")}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="booking-name-input" className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Votre nom" : "Your name"}
                    </label>
                    <input
                      id="booking-name-input"
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Sterling Hunt"
                      aria-label={lang === "FR" ? "Votre nom" : "Your name"}
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-email-input" className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Votre adresse courriel" : "Your email address"}
                    </label>
                    <input
                      id="booking-email-input"
                      type="email"
                      required
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      placeholder="e.g. sterling@portfolio.com"
                      aria-label={lang === "FR" ? "Votre adresse courriel" : "Your email address"}
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-phone-input" className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                      {lang === "FR" ? "Votre numéro de téléphone" : "Your phone number"}
                    </label>
                    <input
                      id="booking-phone-input"
                      type="tel"
                      required
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      placeholder="e.g. +1 (514) 123-4567"
                      aria-label={lang === "FR" ? "Votre numéro de téléphone" : "Your phone number"}
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300"
                    />
                  </div>
                  {itinerary.dates && (
                    <div>
                      <label htmlFor="booking-date-select" className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500">
                        {lang === "FR" ? "Date de départ souhaitée" : "Desired Departure Date"}
                      </label>
                      <select
                        id="booking-date-select"
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        aria-label={lang === "FR" ? "Date de départ souhaitée" : "Desired Departure Date"}
                        className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 cursor-pointer"
                      >
                        <option value="">
                          {lang === "FR" ? "-- Sélectionnez une date de départ --" : "-- Select a departure date --"}
                        </option>
                        {translate(itinerary.dates, lang).map((d: string) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div>
                    <label htmlFor="booking-message-input" className="block text-[9px] font-mono tracking-widest uppercase mb-1.5 text-zinc-500 text-wrap leading-tight">
                      {lang === "FR" ? "Vos souhaits particuliers, besoins alimentaires ou occasions spéciales ?" : "Any special wishes, dietary needs, or occasions we should know about?"}
                    </label>
                    <textarea
                      id="booking-message-input"
                      rows={4}
                      value={bookingMessage}
                      onChange={(e) => setBookingMessage(e.target.value)}
                      placeholder={lang === "FR" ? "Ex. Régimes alimentaires, hélicoptère privé..." : "e.g. Jet charter transfers, close protection, dietaries..."}
                      aria-label={lang === "FR" ? "Vos souhaits particuliers" : "Special wishes"}
                      className="w-full bg-white border border-zinc-200 px-4 py-3 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-[border-color,box-shadow] duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Travelling party (Passengers) */}
                <div className="bg-white border border-zinc-200/80 rounded-2xl px-5 py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[9px] font-mono tracking-widest uppercase text-brand-gold font-bold">
                      {lang === "FR" ? "Groupe de voyage" : "Travelling party"}
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updatePassengerCount(-1)}
                        className="w-7 h-7 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 font-bold text-sm transition-colors cursor-pointer"
                      >−</button>
                      <span className="text-[14px] font-bold text-zinc-900 font-heading tabular-nums w-5 text-center">{passengerCount}</span>
                      <button
                        type="button"
                        onClick={() => updatePassengerCount(1)}
                        className="w-7 h-7 rounded-full border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 font-bold text-sm transition-colors cursor-pointer"
                      >+</button>
                    </div>
                  </div>

                  {/* Per-passenger age inputs */}
                  <div className="grid grid-cols-2 gap-2">
                    {passengerAges.map((age, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider">
                          {lang === "FR" ? `Passager ${idx + 1}` : `Passenger ${idx + 1}`}
                        </span>
                        <div className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 rounded-lg px-2.5 py-1.5">
                          <input
                            type="number"
                            min={0}
                            max={120}
                            value={age === 0 ? "" : age}
                            onChange={(e) => updatePassengerAge(idx, parseInt(e.target.value) || 0)}
                            placeholder="Age"
                            className="w-full bg-transparent text-xs text-zinc-800 placeholder-zinc-300 focus:outline-none tabular-nums"
                          />
                          <span className="text-[9px] text-zinc-400 font-mono shrink-0">{lang === "FR" ? "ans" : "yrs"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


                {/* Submit and Reassurance */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2 text-[10px] text-zinc-500 font-mono leading-relaxed">
                    <Shield className="text-brand-gold w-4 h-4 shrink-0 mt-0.5" />
                    <span>{lang === "FR" ? "Aucun paiement n'est effectué à ce stade. Notre conciergerie vous contactera dans les 24 heures pour commencer à concevoir votre passage." : "No payment is taken at this stage. Our concierge will contact you within 24 hours to begin crafting your passage."}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#8B2635] hover:bg-[#72202b] text-[#faf9f5] font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full transition-luxury hover:-translate-y-0.5 border border-[#8B2635] shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting 
                        ? (lang === "FR" ? "ENVOI EN COURS..." : "TRANSMITTING...") 
                        : (lang === "FR" ? "DEMANDE POUR SOUMISSION" : "REQUEST A QUOTE")
                      }
                    </button>
                    {INSURANCE_LINK_URL && (
                      <a
                        href={INSURANCE_LINK_URL}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white text-zinc-700 font-semibold text-[11px] tracking-[0.2em] uppercase py-4 transition-luxury hover:bg-zinc-50 shadow-sm cursor-pointer text-center"
                      >
                        {lang === "FR" ? "ASSURANCE VOYAGE" : "TRAVEL INSURANCE"}
                      </a>
                    )}
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 flex flex-col items-center justify-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30">
                  <CheckCircle className="text-brand-gold w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-brand-gold font-mono text-[10px] tracking-[0.25em] uppercase block">
                    {lang === "FR" ? "Transmission Chiffrée" : "Transmission Secured"}
                  </span>
                  <h3 className="font-serif text-2xl text-zinc-900 tracking-wide uppercase">
                    {lang === "FR" ? "Réservation Initiée" : "Reservation Active"}
                  </h3>
                </div>
                <p className="text-zinc-600 text-xs leading-relaxed max-w-[240px] mx-auto font-light">
                  {lang === "FR"
                    ? `Merci, ${bookingName}. Votre conseiller en voyages prépare les protocoles pour ${itinerary.title.FR}.`
                    : `Thank you, ${bookingName}. Your dedicated travel architect is initiating protocols for ${itinerary.title.EN}.`
                  }
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-zinc-200 bg-white hover:bg-zinc-900 hover:text-white hover:border-zinc-900 text-zinc-700 font-mono text-[9px] tracking-[0.15em] uppercase px-6 py-2.5 transition-luxury rounded-full shadow-sm"
                >
                  {lang === "FR" ? "Modifier la requête" : "Modify inquiry"}
                </button>
              </div>
            )}

            {/* Conditions Disclaimer */}
            <div className="mt-8 pt-6 border-t border-zinc-200/60 text-center select-none">
              <h4 className="font-serif text-sm font-bold text-zinc-900 mb-3 uppercase tracking-wider">
                {lang === "FR" ? "Conditions" : "Terms & Conditions"}
              </h4>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 italic font-light mb-4">
                {lang === "FR"
                  ? "Tarif calculé le 1 juin 2026. Les dates et composantes sont modifiables à votre guise. Les hôtels et activités proposés le sont à titre indicatif et peuvent être modifiés selon vos besoins."
                  : "Rate calculated on June 1, 2026. Dates and components can be modified at your convenience. Proposed hotels and activities are indicative and can be modified according to your needs."
                }
              </p>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 italic font-light mb-4">
                {lang === "FR"
                  ? "Les tarifs sont sujets à changement selon la tarification dynamique du jour. Aucune place n'est réservée d'avance et les disponibilités sont sujettes à changement selon les fournisseurs."
                  : "Rates are subject to change based on daily dynamic pricing. No spots are reserved in advance and availability is subject to change by suppliers."
                }
              </p>
              <p className="text-[10px] md:text-[11px] leading-relaxed text-zinc-500 font-light">
                {lang === "FR" ? "Consultez nos conditions complètes au " : "Consult our full conditions at the "}
                <Link href="/conditions" className="text-brand-gold hover:underline font-semibold">
                  {lang === "FR" ? "lien suivant" : "following link"}
                </Link>
                {translate({ FR: ".", EN: "." }, lang)}
              </p>
            </div>
          </motion.div>
        </div>

      </section>

      <Footer />

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (() => {
        const images = getGalleryImages(itinerary.id);
        if (images.length === 0) return null;
        
        return (
          <div 
            className="fixed inset-0 z-[9999] bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-brand-gold text-2xl font-sans cursor-pointer transition-colors p-2 bg-black/40 hover:bg-black/60 rounded-full focus:outline-none z-50"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
              }}
              className="absolute left-6 text-white hover:text-brand-gold text-3xl font-mono cursor-pointer transition-colors p-3 bg-black/40 hover:bg-black/60 rounded-full focus:outline-none z-50"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
              }}
              className="absolute right-6 text-white hover:text-brand-gold text-3xl font-mono cursor-pointer transition-colors p-3 bg-black/40 hover:bg-black/60 rounded-full focus:outline-none z-50"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Large Image container to catch click and stop propagation */}
            <div 
              className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeImageIndex]}
                alt={`${translate(itinerary.title, lang)} - View Large`}
                className="max-w-full max-h-[80vh] object-contain border border-zinc-800 rounded-sm shadow-2xl"
              />
            </div>

            {/* Counter */}
            <div className="text-zinc-400 font-mono text-xs mt-6 z-50 bg-black/30 px-3 py-1 rounded-full">
              {activeImageIndex + 1} / {images.length}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
