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
    <div className="min-h-screen bg-transparent text-[#1E1B18] font-sans antialiased selection:bg-amber-200 selection:text-stone-900">
      {/* Sticky Top Header with Dedicated Padding */}
      <div className="sticky top-4 z-50 w-full max-w-[1240px] mx-auto px-4 sm:px-6 pt-2">
        <Navbar />
      </div>

      {/* Main Container Framing Hero Window with Space from Header */}
      <div className="relative mx-auto max-w-[1360px] px-3 sm:px-6 pt-6 sm:pt-8">
        {/* Panoramic Hero with Search Pill */}
        <HeroEditorial onSearch={handleHeroSearch} />
      </div>

      {/* Main Page Content */}
      <main className="relative z-10 space-y-4">
        {/* Special for You — Master Circuits & Tours Catalog */}
        <ToursEditorial
          onSelectTourToBook={handleSelectTourToBook}
          searchFilter={searchFilter}
        />

        {/* 4 Elevated White Metric Cards (matching Ui.jpg) */}
        <StatsGrid />

        {/* Human Heritage & Official Tour Guides Spotlight */}
        <AboutAndPillars />

        {/* Verified Guest Testimonials */}
        <TestimonialsEditorial />

        {/* Tailor-Made Journey Concierge (Booking Inquiry) */}
        <BookingInquiryForm initialTourName={selectedTourForBooking} />

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
