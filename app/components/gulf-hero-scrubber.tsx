'use client';

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useLang } from "../context/lang-context";

import { videoSources } from "@/data/videoSources";

export default function GulfHeroScrubber() {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fast start hardening: play on mount, canplay event, and on user touch/click gesture
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const tryPlay = () => {
      vid.play().catch(() => {});
    };

    tryPlay();
    vid.addEventListener("canplay", tryPlay);

    const unlockOnGesture = () => {
      tryPlay();
      document.removeEventListener("touchstart", unlockOnGesture);
      document.removeEventListener("click", unlockOnGesture);
    };
    document.addEventListener("touchstart", unlockOnGesture, { once: true });
    document.addEventListener("click", unlockOnGesture, { once: true });

    return () => {
      vid.removeEventListener("canplay", tryPlay);
      document.removeEventListener("touchstart", unlockOnGesture);
      document.removeEventListener("click", unlockOnGesture);
    };
  }, [isMobile]);

  const asset = videoSources.hero;
  const posterUrl = asset.poster;
  const mp4Src = asset.mp4;

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (vid && vid.currentTime >= 60) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
  };

  return (
    <div
      className="relative w-full bg-black overflow-hidden"
      style={{ height: "min(100svh, 100dvh, 960px)" }}
    >
      {/* Render Native Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        <video
          ref={videoRef}
          key={isMobile ? "mobile" : "desktop"}
          className="w-full h-full object-cover bg-black bg-center bg-cover animate-kenburns"
          src={mp4Src}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          poster={posterUrl}
          onTimeUpdate={handleTimeUpdate}
          // @ts-ignore — fetchPriority is a valid HTML attribute in React 19 / Next 15
          fetchPriority="high"
          style={{
            backgroundImage: `url('${posterUrl}')`
          }}
        >
          <track kind="captions" srcLang="fr" label="Français" default />
        </video>
      </div>
      
      {/* Cinematic Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-1" />
      
      {/* Hero Corner Teaser to Heritage Sub-Page */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-24 right-4 sm:right-8 z-20 pointer-events-auto"
      >
        <Link
          href="/heritage"
          className="group flex items-center gap-2 bg-zinc-950/70 hover:bg-zinc-900/90 backdrop-blur-md border border-brand-gold/40 hover:border-brand-gold px-3.5 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-200 group-hover:text-brand-gold transition-colors">
            {lang === "FR" ? "Patrimoine Maroc →" : "Morocco Heritage →"}
          </span>
        </Link>
      </motion.div>

      {/* Cinematic Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[90px] pb-[80px] gap-5 sm:gap-6 md:gap-8 z-10 px-6 text-center select-none pointer-events-none">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex justify-center shrink-0"
        >
          <img
            src="/images/logo.png?v=3"
            alt="Merveilles et Voyages Logo"
            className="w-[110px] sm:w-[140px] md:w-[170px] lg:w-[190px] h-auto max-h-[22vh] object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        {/* Subtext & Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl pointer-events-auto space-y-4 sm:space-y-6"
        >
          <h1 className="font-serif text-xs sm:text-sm md:text-base lg:text-lg text-white tracking-[0.1em] uppercase font-light max-w-2xl leading-relaxed">
            {lang === "FR"
              ? "Agence de Voyage de Prestige — Golf au Maroc & Voyages Sur Mesure depuis Montréal"
              : "Luxury Travel Agency — Morocco Golf & Bespoke Journeys from Montreal"
            }
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xl mx-auto">
            <a
              href="#itineraries"
              className="w-full sm:w-auto border border-white bg-white hover:bg-brand-gold hover:border-brand-gold text-zinc-950 hover:text-zinc-950 font-semibold text-[10px] tracking-[0.2em] uppercase px-8 py-3 transition-luxury rounded-full shadow-md hover:-translate-y-0.5 inline-block text-center min-w-[180px] sm:min-w-[200px] cursor-pointer"
            >
              {lang === "FR" ? "Explorer les Itinéraires" : "Explore Itineraries"}
            </a>
            <Link
              href="/heritage"
              className="w-full sm:w-auto border border-white/80 bg-zinc-950/60 backdrop-blur-md hover:bg-brand-gold hover:border-brand-gold hover:text-zinc-950 text-white font-semibold text-[10px] tracking-[0.2em] uppercase px-8 py-3 transition-luxury rounded-full shadow-md hover:-translate-y-0.5 inline-block text-center min-w-[180px] sm:min-w-[200px] cursor-pointer"
            >
              {lang === "FR" ? "Patrimoine & Culture" : "Heritage & Culture"}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Highly Visible Mouse Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 text-white/80 pointer-events-none"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase mb-3">{lang === "FR" ? "Défiler pour Explorer" : "Scroll to Explore"}</span>
        <div className="w-[28px] h-[48px] rounded-full border-2 border-white/40 flex justify-center p-1.5 shadow-md">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-sm"
          />
        </div>
      </motion.div>
    </div>
  );
}
