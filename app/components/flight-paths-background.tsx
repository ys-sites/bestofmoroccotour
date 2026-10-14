'use client';

import { useSyncExternalStore } from "react";

// Dashed flight routes with planes gliding along them: a light texture behind the top of the page.
// Positioned absolutely (not fixed) so it stays in place and scrolls away with the content.
const ROUTES = [
  { d: "M-80 780 C 260 640, 520 860, 820 580 S 1300 260, 1540 170", dur: 75, begin: 0 },
  { d: "M1540 640 C 1220 720, 1060 430, 760 480 S 300 380, -80 450", dur: 90, begin: -40 },
];

// Small airliner silhouette pointing along +x, centred on the origin
const PLANE = "M15 0 L5 -2 L-1 -11 L-5 -11 L-1 -2 L-9 -2 L-12 -6 L-14 -6 L-12 0 L-14 6 L-12 6 L-9 2 L-1 2 L-5 11 L-1 11 L5 2 Z";
const PLANE_SCALE = "scale(0.7)";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

export default function FlightPathsBackground() {
  // Server render and first client render assume motion is allowed
  const reducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );

  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[900px] -z-20 overflow-hidden pointer-events-none select-none">
      <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        {ROUTES.map((route, i) => (
          <g key={i}>
            <path
              id={`flight-route-${i}`}
              d={route.d}
              fill="none"
              stroke="#C05621"
              strokeOpacity={0.1}
              strokeWidth={1.2}
              strokeDasharray="8 12"
              strokeLinecap="round"
            />
            <path
              d={PLANE}
              fill="#C05621"
              fillOpacity={0.2}
              transform={reducedMotion ? `${planeRestTransform(i)} ${PLANE_SCALE}` : PLANE_SCALE}
            >
              {!reducedMotion && (
                <animateMotion dur={`${route.dur}s`} begin={`${route.begin}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#flight-route-${i}`} />
                </animateMotion>
              )}
            </path>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Fixed resting spots on each route when motion is reduced
function planeRestTransform(i: number) {
  return ["translate(820 580) rotate(-38)", "translate(760 480) rotate(176)"][i];
}
