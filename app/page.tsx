'use client';

import { useState } from "react";
import Navbar from "./components/navbar";
import HeroEditorial from "./components/hero-editorial";
import StatsGrid from "./components/stats-grid";
import ToursEditorial from "./components/tours-editorial";
import AboutAndPillars from "./components/about-and-pillars";
import TestimonialsEditorial from "./components/testimonials-editorial";
import BookingInquiryForm from "./components/booking-inquiry-form";
import FaqAndPolicies from "./components/faq-and-policies";
import FooterEditorial from "./components/footer-editorial";
import CallFloatingButton from "./components/CallFloatingButton";
import { MoroccanArchWatermark, MoroccanLanternArt, MoroccanMedallionArt, MoroccanFriezeDivider } from "./components/moroccan-art-motifs";
import { motion } from "motion/react";
import { lanternSway } from "@/lib/animations";

export default function Home() {
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<string>("");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const handleSelectTourToBook = (tourName: string) => {
    setSelectedTourForBooking(tourName);
    const formElement = document.getElementById("custom-trip");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHeroSearch = (searchTerm: string) => {
    setSearchFilter(searchTerm);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#1E1B18] font-sans antialiased selection:bg-amber-200 selection:text-stone-900 relative overflow-x-hidden">
      {/* Authentic Moroccan Background Ambient Accents */}
      {/* Hanging Brass Lantern 1 (Top-Left Gutter) */}
      <div className="absolute top-28 left-2 sm:left-4 z-40 pointer-events-none hidden xl:block">
        <motion.div {...lanternSway} style={{ transformOrigin: "top center" }}>
          <MoroccanLanternArt height={140} opacity={0.42} />
        </motion.div>
      </div>

      {/* Hanging Brass Lantern 2 (Mid-Right Gutter) */}
      <div className="absolute top-[820px] right-2 sm:right-5 z-40 pointer-events-none hidden xl:block">
        <motion.div 
          animate={{
            rotate: [2.5, -2.5, 2.5],
            y: [-3, 3, -3]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "top center" }}
        >
          <MoroccanLanternArt height={150} opacity={0.38} />
        </motion.div>
      </div>

      {/* Large Palace Gate Archway Watermarks in Background Margins */}
      <MoroccanArchWatermark 
        className="fixed top-1/4 -left-28 xl:-left-36 w-[360px] xl:w-[440px] h-auto text-[#C05621] pointer-events-none -z-10 hidden xl:block" 
        opacity={0.18} 
      />
      <MoroccanArchWatermark 
        className="fixed top-2/3 -right-28 xl:-right-36 w-[360px] xl:w-[440px] h-auto text-[#D97706] pointer-events-none -z-10 hidden xl:block" 
        opacity={0.17} 
      />

      {/* Sticky Top Header with Dedicated Padding */}
      <div className="sticky top-4 z-50 w-full max-w-[1360px] mx-auto px-3 sm:px-6 pt-2">
        <Navbar />
      </div>

      {/* Main Container Framing Hero Window with Space from Header */}
      <div className="relative mx-auto max-w-[1360px] px-3 sm:px-6 pt-6 sm:pt-8">
        {/* Panoramic Hero with Search Pill */}
        <HeroEditorial onSearch={handleHeroSearch} />
      </div>

      {/* Main Page Content */}
      <main className="relative z-10 space-y-8">
        {/* Special for You — Master Circuits & Tours Catalog */}
        <ToursEditorial
          onSelectTourToBook={handleSelectTourToBook}
          searchFilter={searchFilter}
        />

        {/* 4 Elevated White Metric Cards (matching Ui.jpg) */}
        <StatsGrid />

        <MoroccanFriezeDivider className="opacity-40 max-w-5xl mx-auto py-2" />

        {/* Human Heritage & Official Tour Guides Spotlight */}
        <AboutAndPillars />

        <MoroccanFriezeDivider className="opacity-40 max-w-5xl mx-auto py-2" />

        {/* Verified Guest Testimonials */}
        <TestimonialsEditorial />

        <MoroccanFriezeDivider className="opacity-40 max-w-5xl mx-auto py-2" />

        {/* Tailor-Made Journey Concierge (Booking Inquiry) */}
        <BookingInquiryForm initialTourName={selectedTourForBooking} />

        <MoroccanFriezeDivider className="opacity-40 max-w-5xl mx-auto py-2" />

        {/* FAQ & Terms of Business Policies */}
        <FaqAndPolicies />
      </main>

      {/* Footer */}
      <FooterEditorial />

      {/* Floating Support & WhatsApp Hotlines */}
      <CallFloatingButton />
    </div>
  );
}
