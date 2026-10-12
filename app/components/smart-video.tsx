'use client';

import React, { useState, useEffect, useRef } from "react";
import { VideoSource } from "../../data/videoSources";

interface SmartVideoProps {
  source: VideoSource;
  variant: "hero" | "tile";
  className?: string;
}

export default function SmartVideo({ source, variant, className = "" }: SmartVideoProps) {
  // Hero starts "in view" immediately so it renders and starts loading on mount
  const [isInView, setIsInView] = useState(() => variant === "hero");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  // Resolved at runtime so SSR always matches client
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Detect prefers-reduced-motion + mobile width
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", listener);

    // Use screen width (not viewport) so tablet landscape is correctly classified
    setIsMobile(window.screen.width <= 768);

    return () => mq.removeEventListener("change", listener);
  }, []);

  // 2. Intersection Observer for tile lazy-loading
  useEffect(() => {
    if (variant === "hero") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "200px" }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [variant]);

  // 3. Play / pause on visibility change
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isInView) {
      vid.play().catch(() => { /* autoplay blocked — silently ignored */ });
    } else {
      vid.pause();
    }
  }, [isInView]);

  // 4. Re-load video when isMobile resolves (src changed)
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !isInView) return;
    vid.load();
    vid.play().catch(() => {});
  }, [isMobile]); // eslint-disable-line react-hooks/exhaustive-deps

  // 5. Force playback: retry on canplay, and unlock via the first user touch/click —
  // iOS Low Power Mode can block autoplay even when muted+playsInline until a real gesture happens.
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !isInView) return;

    const tryPlay = () => { vid.play().catch(() => {}); };
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
  }, [isInView, isMobile]);

  const handleLoadedData = () => setIsLoaded(true);
  const handleError = () => { setHasError(true); setIsLoaded(false); };
  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (vid && vid.currentTime >= 60) {
      vid.currentTime = 0;
    }
  };

  const aspectClass = variant === "hero" ? "h-full w-full" : "aspect-video w-full";
  const shouldRenderVideo = variant === "hero" || (isInView && !prefersReducedMotion && !hasError);

  // Pick the correct resolution based on actual device width
  const mp4Src  = isMobile ? source.mp4Mobile  : source.mp4;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectClass} ${className}`}
    >
      {/* Poster — always visible, fades when video loads */}
      <img
        src={source.poster}
        alt={`${source.id} destination`}
        className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-500 ${
          isLoaded ? "opacity-30" : "opacity-100"
        }`}
        style={{ objectFit: "cover", width: "100%", height: "100%", filter: "brightness(0.95)" }}
      />

      {/* Video — rendered only when in-view, motion allowed, no error */}
      {shouldRenderVideo && (
        <video
          ref={videoRef}
          key={isMobile ? "mobile" : "desktop"} /* remount on resolution switch */
          className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit: "cover", width: "100%", height: "100%", minWidth: "100%", minHeight: "100%" }}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          poster={source.poster}
          // @ts-ignore — fetchpriority is a valid HTML attribute not yet in React types
          fetchpriority={variant === "hero" ? "high" : "auto"}
          onLoadedData={handleLoadedData}
          onError={handleError}
          onTimeUpdate={handleTimeUpdate}
        >
          {/* MP4 (H.264 — universal) */}
          <source src={mp4Src} type="video/mp4" />
          {/* Captions track for accessibility */}
          <track kind="captions" srcLang="fr" label="Français" default />
        </video>
      )}
    </div>
  );
}
