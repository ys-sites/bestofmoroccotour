'use client';

import { useState, useEffect } from "react";
import { Send, Phone, Mail, Clock, ShieldCheck, Check, Sparkles } from "lucide-react";
import { siteConfig, masterTours } from "@/data/bestOfMoroccoData";
import { MoroccanArchWatermark, MoroccanMedallionArt, MoroccanTagineArt } from "./moroccan-art-motifs";

interface BookingFormProps {
  initialTourName?: string;
}

export default function BookingInquiryForm({ initialTourName = "" }: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedTour: initialTourName || "Custom Tailor-Made Itinerary",
    travelDate: "",
    travelers: "2 Adults",
    lodgingTier: "4* & 5* Hotels + Luxury Desert Camp",
    transportType: "Private A/C Minibus / 4x4",
    message: "",
    captcha: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialTourName) {
      setFormData((prev) => ({ ...prev, selectedTour: initialTourName }));
    }
  }, [initialTourName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captcha.trim() !== "4") {
      setError("Please answer the human check correctly (3 + 1 = 4).");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="custom-trip" className="bg-transparent py-20 px-4 sm:px-8 text-stone-900 border-t border-stone-200/60 relative overflow-hidden">
      {/* Subtle Moroccan Arch Watermark in background */}
      <MoroccanArchWatermark className="absolute -bottom-16 -right-12 w-80 sm:w-96 h-auto opacity-15 pointer-events-none text-[#C05621] -z-10 hidden lg:block" />

      <div className="max-w-[1360px] mx-auto space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
          <div className="flex items-center gap-3.5">
            <MoroccanMedallionArt size={42} opacity={0.75} className="shrink-0 hidden sm:block" />
            <div>
              <span className="text-[#C05621] font-serif italic text-base capitalize block">
                Tailor-Made Concierge
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Design Your Custom Morocco Journey
              </h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md font-light">
            Tell us your wishes. Whether it is an 8-day Imperial circuit, Sahara glamping, or high Atlas hiking, we will prepare a complete proposal within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form */}
          <div className="lg:col-span-8 bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-8 sm:p-10 border border-stone-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Inquiry Received with Warmth!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, {formData.firstName}. Your request for <strong className="text-[#C05621]">{formData.selectedTour}</strong> has been transmitted to Tour Manager Ayoub Sadeddine. We will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full text-xs font-semibold bg-stone-200 text-stone-800 hover:bg-stone-300 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Selected Tour or Circuit
                  </label>
                  <select
                    value={formData.selectedTour}
                    onChange={(e) => setFormData({ ...formData, selectedTour: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C05621]"
                  >
                    <option value="Custom Tailor-Made Itinerary">✨ Custom Tailor-Made Itinerary (Build from Scratch)</option>
                    {masterTours.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.duration})
                      </option>
                    ))}
                    <option value="MICE & Corporate Conference">🏢 MICE & Corporate Conference Event (20 to 500+ pax)</option>
                    <option value="Fez Sacred Music or Sufi Festival">🎵 Sacred Music, Sufi or Gnaoua Festival Tour</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marie"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C05621]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dubois"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C05621]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="marie@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C05621]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">Phone Number (with Country Code) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C05621]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">Estimated Travel Dates / Month</label>
                    <input
                      type="text"
                      placeholder="e.g. October 2026"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C05621]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-700 mb-1 font-medium">Party Size</label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Adults, 2 Children"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C05621]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone-700 mb-1 font-medium">Special Requests & Preferences</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what matters most to you (authentic riad architecture, camel rides, desert stargazing, cooking class, kosher options, private vehicle)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C05621] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-xs text-stone-700 font-medium">Human verification: What is 3 + 1? *</span>
                  <input
                    type="text"
                    required
                    placeholder="Answer"
                    value={formData.captcha}
                    onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                    className="w-24 px-3 py-1 rounded-lg bg-stone-100 border border-stone-300 text-xs text-center focus:outline-none focus:border-[#C05621]"
                  />
                  {error && <span className="text-xs text-red-600 font-medium">{error}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1E1B18] hover:bg-[#C05621] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>SUBMIT INQUIRY & RECEIVE PROPOSAL</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-[#FAF8F5] rounded-[2rem] p-7 border border-stone-200/90 space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] block font-semibold">
                  Direct Inquiries
                </span>
                <h4 className="font-serif text-xl font-bold text-stone-900 mt-1">
                  Speak Directly With an Advisor
                </h4>
              </div>

              <div className="space-y-3 text-xs text-stone-700">
                <a
                  href={`tel:${siteConfig.phoneUsCa.replace(/\s+/g, '')}`}
                  className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center gap-3 hover:border-[#C05621] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C05621] shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-semibold">US & Canada Direct</span>
                    <strong className="text-stone-900">{siteConfig.phoneUsCa}</strong>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phoneMa.replace(/\s+/g, '')}`}
                  className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center gap-3 hover:border-[#C05621] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C05621] shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-semibold">Morocco Operational Office</span>
                    <strong className="text-stone-900">{siteConfig.phoneMa}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-3.5 rounded-xl bg-white border border-stone-200 flex items-center gap-3 hover:border-[#C05621] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C05621] shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-semibold">Direct Email</span>
                    <strong className="text-stone-900">{siteConfig.email}</strong>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-stone-200 text-xs text-stone-500 space-y-1.5 font-light">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Mon – Sat: 8:00 – 18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ministry Licence No. 2816</span>
                </div>
              </div>
            </div>

            <div className="relative p-6 rounded-[2rem] bg-amber-50/70 border border-amber-200/80 space-y-2 overflow-hidden">
              <div className="absolute -bottom-2 -right-2 pointer-events-none hidden sm:block">
                <MoroccanTagineArt size={75} opacity={0.22} />
              </div>
              <span className="relative z-10 text-xs font-bold text-[#C05621] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Best Price Guarantee Active
              </span>
              <p className="relative z-10 text-xs text-stone-600 font-light leading-relaxed">
                We guarantee the best price and service in Morocco. Find a lower advertised price elsewhere on an identical package and we will match it + grant 5% extra discount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
