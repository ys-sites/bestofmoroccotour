'use client';

/**
 * Authentic Moroccan Cultural Art Motifs
 * Handcrafted vector artwork capturing authentic Moroccan architecture & craftsmanship:
 * 1. Moorish Horseshoe Archway with Arabesque Stucco Carving (Bab)
 * 2. Eight-fold Moroccan Rosette Medallion (Khatam Zillij)
 * 3. Filigree Moroccan Brass Hanging Lantern (Fanous)
 * 4. Architectural Corner Arabesque Spandrel
 * 5. Authentic Moroccan Silver Teapot (Berrad) & Tea Ceremony Flourish
 * 6. Authentic Palace Geometric Frieze Ribbon
 */

export function MoroccanArchWatermark({ 
  className = "", 
  opacity = 0.22 
}: { 
  className?: string; 
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 320 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="moroccanArchGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C05621" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#C5A880" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Outer Rectangular Palace Gate Frame (Alfiz) */}
      <rect x="20" y="20" width="280" height="400" rx="8" stroke="url(#moroccanArchGold)" strokeWidth="1.5" strokeDasharray="8 4" />
      <rect x="30" y="30" width="260" height="380" rx="6" stroke="url(#moroccanArchGold)" strokeWidth="1" />

      {/* Corner Spandrel Arabesque Flourishes */}
      <path
        d="M 35 35 Q 85 45 65 95 Q 45 75 35 35 Z"
        fill="url(#moroccanArchGold)"
        opacity="0.3"
      />
      <path
        d="M 285 35 Q 235 45 255 95 Q 275 75 285 35 Z"
        fill="url(#moroccanArchGold)"
        opacity="0.3"
      />

      {/* Polylobed Outer Arch Crown */}
      <path
        d="
          M 55 240
          L 55 180
          C 48 160, 52 135, 75 115
          C 85 95, 110 80, 135 75
          C 145 65, 175 65, 185 75
          C 210 80, 235 95, 245 115
          C 268 135, 272 160, 265 180
          L 265 240
        "
        stroke="url(#moroccanArchGold)"
        strokeWidth="1.6"
      />

      {/* Classic Moorish Horseshoe Keyhole Arch */}
      <path
        d="
          M 75 410
          L 75 240
          C 60 210, 65 160, 105 130
          C 135 105, 185 105, 215 130
          C 255 160, 260 210, 245 240
          L 245 410
        "
        stroke="url(#moroccanArchGold)"
        strokeWidth="2"
      />

      {/* Inner Keyhole Inset Band */}
      <path
        d="
          M 90 410
          L 90 245
          C 78 220, 84 175, 115 150
          C 140 128, 180 128, 205 150
          C 236 175, 242 220, 230 245
          L 230 410
        "
        stroke="url(#moroccanArchGold)"
        strokeWidth="1.1"
        strokeDasharray="5 3"
      />

      {/* Keystone Rosette / Star of Morocco at Apex */}
      <g transform="translate(160, 125)">
        <polygon
          points="0,-14 4,-4 14,0 4,4 0,14 -4,4 -14,0 -4,-4"
          fill="url(#moroccanArchGold)"
          opacity="0.8"
        />
        <circle cx="0" cy="0" r="3.5" fill="#C05621" opacity="0.6" />
      </g>

      {/* Arch Column Capitals */}
      <rect x="68" y="235" width="16" height="8" rx="2" stroke="url(#moroccanArchGold)" strokeWidth="1.2" />
      <rect x="236" y="235" width="16" height="8" rx="2" stroke="url(#moroccanArchGold)" strokeWidth="1.2" />

      {/* Base Pedestals */}
      <rect x="65" y="402" width="22" height="8" rx="1" stroke="url(#moroccanArchGold)" strokeWidth="1.2" />
      <rect x="233" y="402" width="22" height="8" rx="1" stroke="url(#moroccanArchGold)" strokeWidth="1.2" />
    </svg>
  );
}

export function MoroccanMedallionArt({ 
  className = "", 
  size = 96,
  opacity = 0.8
}: { 
  className?: string; 
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="medallionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C05621" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Concentric Moroccan Rosette Rings */}
      <circle cx="50" cy="50" r="46" stroke="url(#medallionGrad)" strokeWidth="0.9" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="40" stroke="url(#medallionGrad)" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="26" stroke="url(#medallionGrad)" strokeWidth="0.9" />
      <circle cx="50" cy="50" r="14" stroke="url(#medallionGrad)" strokeWidth="0.9" />

      {/* Eight-Pointed Star (Khatam) */}
      <polygon
        points="
          50,14 57,28 71,21 68,36 82,43 73,55 82,67 68,74 
          71,89 57,82 50,96 43,82 29,89 32,74 18,67 27,55 
          18,43 32,36 29,21 43,28
        "
        fill="url(#medallionGrad)"
        fillOpacity="0.12"
        stroke="url(#medallionGrad)"
        strokeWidth="1.2"
      />

      {/* Inner Rosette Petals */}
      <g stroke="url(#medallionGrad)" strokeWidth="1.0">
        <line x1="50" y1="26" x2="50" y2="74" />
        <line x1="26" y1="50" x2="74" y2="50" />
        <line x1="33" y1="33" x2="67" y2="67" />
        <line x1="33" y1="67" x2="67" y2="33" />
      </g>

      <circle cx="50" cy="50" r="4.5" fill="#C05621" fillOpacity="0.5" />
    </svg>
  );
}

export function MoroccanLanternArt({ 
  className = "", 
  height = 120,
  opacity = 0.35 
}: { 
  className?: string; 
  height?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={height * 0.45}
      height={height}
      viewBox="0 0 54 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="lanternGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C05621" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#D97706" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C5A880" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Hanging Chain Links */}
      <line x1="27" y1="0" x2="27" y2="22" stroke="url(#lanternGrad)" strokeWidth="1.2" strokeDasharray="3 2" />
      <circle cx="27" cy="24" r="2.5" stroke="url(#lanternGrad)" strokeWidth="1.2" />

      {/* Top Onion Dome Cap */}
      <path
        d="M 16 38 C 18 28, 36 28, 38 38 Z"
        stroke="url(#lanternGrad)"
        strokeWidth="1.3"
        fill="url(#lanternGrad)"
        fillOpacity="0.1"
      />
      <circle cx="27" cy="28" r="2" fill="#D97706" />

      {/* Hexagonal Filigree Glass Body */}
      <path
        d="
          M 12 40
          L 42 40
          L 35 78
          L 19 78
          Z
        "
        stroke="url(#lanternGrad)"
        strokeWidth="1.5"
        fill="url(#lanternGrad)"
        fillOpacity="0.08"
      />

      {/* Inner Lattice Struts */}
      <line x1="27" y1="40" x2="27" y2="78" stroke="url(#lanternGrad)" strokeWidth="1.2" />
      <path d="M 18 56 L 36 56 M 15 48 L 39 48 M 21 66 L 33 66" stroke="url(#lanternGrad)" strokeWidth="0.9" />

      {/* Star of Morocco cutout in glass center */}
      <polygon
        points="27,51 28.5,54.5 32,56 28.5,57.5 27,61 25.5,57.5 22,56 25.5,54.5"
        fill="#D97706"
        opacity="0.8"
      />

      {/* Bottom Tapered Finial */}
      <path d="M 21 78 L 27 92 L 33 78" stroke="url(#lanternGrad)" strokeWidth="1.3" fill="none" />
      <circle cx="27" cy="95" r="2" fill="#C05621" />
      <line x1="27" y1="97" x2="27" y2="105" stroke="url(#lanternGrad)" strokeWidth="1" />
    </svg>
  );
}

export function MoroccanCornerSpandrel({ 
  className = "", 
  size = 80,
  flip = false,
  opacity = 0.25 
}: { 
  className?: string; 
  size?: number;
  flip?: boolean;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{
        opacity,
        transform: flip ? "scaleX(-1)" : "none",
      }}
    >
      <defs>
        <linearGradient id="spandrelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C05621" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Corner Outer Border */}
      <path d="M 10 90 L 10 10 L 90 10" stroke="url(#spandrelGrad)" strokeWidth="1.5" />
      <path d="M 18 80 L 18 18 L 80 18" stroke="url(#spandrelGrad)" strokeWidth="1" strokeDasharray="4 2" />

      {/* Flowing Arabesque Leaf Vines */}
      <path
        d="
          M 18 18
          C 35 25, 45 45, 40 65
          C 55 50, 65 35, 80 18
        "
        stroke="url(#spandrelGrad)"
        strokeWidth="1.2"
      />
      <path
        d="M 25 35 Q 40 30 35 45"
        stroke="url(#spandrelGrad)"
        strokeWidth="1"
      />
      <circle cx="32" cy="36" r="2.5" fill="#C05621" />
      <circle cx="50" cy="50" r="3" fill="#D97706" />
    </svg>
  );
}

export function MoroccanTeapotArt({ 
  className = "", 
  size = 110,
  opacity = 0.7 
}: { 
  className?: string; 
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 140 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="teapotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C05621" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#D97706" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#9C6E42" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Moroccan Silver Berrad Teapot */}
      {/* Curved Tripod Feet */}
      <path d="M 42 98 Q 40 108 35 110" stroke="url(#teapotGrad)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 72 98 Q 75 108 80 110" stroke="url(#teapotGrad)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 57 99 L 57 110" stroke="url(#teapotGrad)" strokeWidth="1.6" strokeLinecap="round" />

      {/* Spherical Teapot Body with Engraved Ribs */}
      <ellipse cx="57" cy="74" rx="28" ry="24" stroke="url(#teapotGrad)" strokeWidth="1.8" fill="url(#teapotGrad)" fillOpacity="0.06" />
      <path d="M 40 74 C 40 60, 74 60, 74 74 C 74 88, 40 88, 40 74 Z" stroke="url(#teapotGrad)" strokeWidth="0.9" strokeDasharray="3 2" />
      <path d="M 48 56 Q 57 74 48 92" stroke="url(#teapotGrad)" strokeWidth="0.9" />
      <path d="M 66 56 Q 57 74 66 92" stroke="url(#teapotGrad)" strokeWidth="0.9" />

      {/* Domed Lid with Pointed Finial */}
      <path d="M 43 52 C 45 42, 69 42, 71 52 Z" stroke="url(#teapotGrad)" strokeWidth="1.6" fill="url(#teapotGrad)" fillOpacity="0.12" />
      <path d="M 57 42 L 57 32" stroke="url(#teapotGrad)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="57" cy="30" r="3" fill="#D97706" />

      {/* Long Elegant S-Curved Swan Spout */}
      <path
        d="
          M 34 82
          C 16 80, 5 62, 8 42
          C 12 42, 18 48, 28 64
        "
        stroke="url(#teapotGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="url(#teapotGrad)"
        fillOpacity="0.08"
      />

      {/* Ornate Scrolled Handle */}
      <path
        d="
          M 78 58
          C 102 54, 106 82, 80 88
        "
        stroke="url(#teapotGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Stream of Tea Arching Down from Spout into Glass */}
      <path
        d="M 8 42 C 6 28, 25 10, 50 12 C 75 14, 105 28, 115 54"
        stroke="url(#teapotGrad)"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        strokeLinecap="round"
      />

      {/* Moroccan Mint Tea Glass (Kass) */}
      <path
        d="M 108 58 L 110 82 C 110 85, 124 85, 124 82 L 126 58 Z"
        stroke="url(#teapotGrad)"
        strokeWidth="1.4"
        fill="url(#teapotGrad)"
        fillOpacity="0.08"
      />
      <line x1="109" y1="67" x2="125" y2="67" stroke="url(#teapotGrad)" strokeWidth="0.9" />
      <line x1="110" y1="72" x2="124" y2="72" stroke="url(#teapotGrad)" strokeWidth="0.9" />

      {/* Fresh Mint Sprig */}
      <path d="M 117 58 C 119 50, 123 48, 126 45" stroke="url(#teapotGrad)" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 116 57 C 114 51, 110 50, 107 48" stroke="url(#teapotGrad)" strokeWidth="1.3" strokeLinecap="round" />

      {/* Delicate Steam Flourish */}
      <path d="M 117 42 Q 115 32 120 25" stroke="url(#teapotGrad)" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function MoroccanTagineArt({ 
  className = "", 
  size = 90,
  opacity = 0.65 
}: { 
  className?: string; 
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.9}
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="tagineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C05621" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Bottom Clay Dish */}
      <path
        d="M 14 70 C 18 84, 82 84, 86 70 Z"
        stroke="url(#tagineGrad)"
        strokeWidth="1.8"
        fill="url(#tagineGrad)"
        fillOpacity="0.08"
      />
      <line x1="10" y1="70" x2="90" y2="70" stroke="url(#tagineGrad)" strokeWidth="1.4" strokeLinecap="round" />

      {/* Conical Fluted Lid */}
      <path
        d="
          M 18 68
          C 30 50, 42 26, 46 18
          L 54 18
          C 58 26, 70 50, 82 68
          Z
        "
        stroke="url(#tagineGrad)"
        strokeWidth="1.8"
        fill="url(#tagineGrad)"
        fillOpacity="0.06"
      />

      {/* Top Knob Handle */}
      <ellipse cx="50" cy="14" rx="6" ry="4.5" stroke="url(#tagineGrad)" strokeWidth="1.5" fill="url(#tagineGrad)" fillOpacity="0.2" />

      {/* Traditional Berber Zig-Zag & Diamond Etchings */}
      <path
        d="
          M 30 58 Q 50 63 70 58
          M 36 46 Q 50 50 64 46
          M 42 34 Q 50 37 58 34
        "
        stroke="url(#tagineGrad)"
        strokeWidth="1.0"
        strokeLinecap="round"
      />

      {/* Gentle Steam Curls */}
      <path d="M 48 8 Q 45 2 49 -4" stroke="url(#tagineGrad)" strokeWidth="1.0" strokeLinecap="round" opacity="0.6" />
      <path d="M 53 7 Q 56 1 52 -5" stroke="url(#tagineGrad)" strokeWidth="1.0" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function MoroccanCamelDuneArt({ 
  className = "", 
  size = 140,
  opacity = 0.5 
}: { 
  className?: string; 
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 160 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="camelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C05621" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Sahara Erg Chebbi Dunes Horizon */}
      <path
        d="
          M 0 95
          C 35 75, 75 92, 110 78
          C 130 70, 145 80, 160 76
        "
        stroke="url(#camelGrad)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="
          M 20 95
          C 55 88, 90 94, 140 92
        "
        stroke="url(#camelGrad)"
        strokeWidth="0.8"
        strokeDasharray="4 3"
      />

      {/* Dromedary Camel Silhouette */}
      <path
        d="
          M 60 78
          C 60 66, 64 60, 70 60
          C 74 52, 82 48, 89 56
          C 93 58, 99 60, 102 66
          C 105 62, 109 50, 112 40
          C 113 37, 116 34, 120 35
          C 123 36, 124 39, 122 42
          C 119 46, 117 53, 116 64
          C 115 72, 111 76, 108 78
        "
        stroke="url(#camelGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="url(#camelGrad)"
        fillOpacity="0.08"
      />
      {/* Camel Legs */}
      <path d="M 65 70 L 64 85 L 67 96 M 70 72 L 69 84 L 72 95" stroke="url(#camelGrad)" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 104 74 L 103 85 L 106 96 M 100 75 L 99 84 L 101 95" stroke="url(#camelGrad)" strokeWidth="1.3" strokeLinecap="round" />
      {/* Little Tail */}
      <path d="M 61 68 Q 58 75 60 80" stroke="url(#camelGrad)" strokeWidth="1.2" strokeLinecap="round" />

      {/* 8-Point Moroccan Evening Star in Sahara Sky */}
      <g transform="translate(138, 22)">
        <polygon
          points="0,-8 2.5,-2.5 8,0 2.5,2.5 0,8 -2.5,2.5 -8,0 -2.5,-2.5"
          fill="#D97706"
          opacity="0.8"
        />
        <circle cx="0" cy="0" r="1.5" fill="#C05621" />
      </g>
    </svg>
  );
}

export function MoroccanFriezeDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center gap-3 py-6 ${className}`}>
      <div className="h-[1px] flex-1 max-w-sm bg-gradient-to-r from-transparent via-[#C05621]/30 to-[#C05621]/50" />
      
      {/* Traditional Moroccan Geometric Ribbon with 8-Point Stars and Diamonds */}
      <div className="flex items-center gap-2.5 text-[#C05621]/60">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
          <polygon points="5,0 10,5 5,10 0,5" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <polygon points="8,0 10,5 15,4 12,8 15,12 10,11 8,16 6,11 1,12 4,8 1,4 6,5" />
        </svg>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" className="text-[#C05621]">
          <polygon points="11,0 13.5,7 21,5.5 16.5,11 21,16.5 13.5,15 11,22 8.5,15 1,16.5 5.5,11 1,5.5 8.5,7" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <polygon points="8,0 10,5 15,4 12,8 15,12 10,11 8,16 6,11 1,12 4,8 1,4 6,5" />
        </svg>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
          <polygon points="5,0 10,5 5,10 0,5" />
        </svg>
      </div>

      <div className="h-[1px] flex-1 max-w-sm bg-gradient-to-l from-transparent via-[#C05621]/30 to-[#C05621]/50" />
    </div>
  );
}
