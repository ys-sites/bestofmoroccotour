'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// Two planes, each flying its own dashed route that winds down the full length of the page.
// The layer is anchored to the page (absolute inside <body>), so it scrolls with the content.

// Small airliner silhouette pointing along +x, centred on the origin
const PLANE = "M15 0 L5 -2 L-1 -11 L-5 -11 L-1 -2 L-9 -2 L-12 -6 L-14 -6 L-12 0 L-14 6 L-12 6 L-9 2 L-1 2 L-5 11 L-1 11 L5 2 Z";
const SPEED = 70; // px per second along the route
const LEG = 760; // vertical distance between turns

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

// Meandering route: alternates between the left and right sides of the page on each leg
function buildRoute(w: number, h: number, startRight: boolean, offset: number) {
  const left = w * 0.12;
  const right = w * 0.88;
  let x = startRight ? w + 40 : -40;
  let y = offset;
  let d = `M${x} ${y}`;
  let length = 0;
  let toRight = !startRight;
  while (y < h + LEG) {
    const nx = toRight ? right : left;
    const ny = y + LEG;
    d += ` C ${x} ${y + LEG * 0.55}, ${nx} ${ny - LEG * 0.55}, ${nx} ${ny}`;
    length += Math.hypot(nx - x, LEG) * 1.15;
    x = nx;
    y = ny;
    toRight = !toRight;
  }
  return { d, dur: Math.max(30, Math.round(length / SPEED)) };
}

export default function FlightPathsBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  // Server render and first client render assume motion is allowed
  const reducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      const h = Math.round(entry.contentRect.height);
      // Ignore small height jitter so the animation is not restarted constantly
      setSize((prev) => (prev && prev.w === w && Math.abs(prev.h - h) < 200 ? prev : { w, h }));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const routes = size
    ? [
        { ...buildRoute(size.w, size.h, false, 140), phase: 0 },
        { ...buildRoute(size.w, size.h, true, 140 + LEG / 2), phase: 0.5 },
      ]
    : [];

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
      {size && (
        <svg width={size.w} height={size.h} viewBox={`0 0 ${size.w} ${size.h}`} className="block">
          {routes.map((route, i) => (
            <g key={`${i}-${size.w}-${size.h}`}>
              <path
                id={`flight-route-${i}`}
                d={route.d}
                fill="none"
                stroke="#C05621"
                strokeOpacity={0.12}
                strokeWidth={1.2}
                strokeDasharray="8 12"
                strokeLinecap="round"
              />
              {!reducedMotion && (
                <path d={PLANE} fill="#C05621" fillOpacity={0.24} transform="scale(0.75)">
                  <animateMotion dur={`${route.dur}s`} begin={`${-Math.round(route.dur * route.phase)}s`} repeatCount="indefinite" rotate="auto">
                    <mpath href={`#flight-route-${i}`} />
                  </animateMotion>
                </path>
              )}
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}
