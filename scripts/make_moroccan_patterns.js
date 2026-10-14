const fs = require('fs');

function generatePatternLight() {
  const size = 160;
  const half = 80;
  const rOut = 48;
  const rIn = 26;

  function starPoints(cx, cy, rO, rI, rot = 0) {
    const pts = [];
    for (let i = 0; i < 16; i++) {
      const a = (i * 22.5 + rot) * Math.PI / 180;
      const r = (i % 2 === 0) ? rO : rI;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return pts.join(' ');
  }

  // 8-star polygons
  const centerStar = starPoints(half, half, rOut, rIn, 0);
  const centerInnerStar = starPoints(half, half, 26, 14, 22.5);

  const cornerTL = starPoints(0, 0, rOut, rIn, 0);
  const cornerTR = starPoints(size, 0, rOut, rIn, 0);
  const cornerBL = starPoints(0, size, rOut, rIn, 0);
  const cornerBR = starPoints(size, size, rOut, rIn, 0);

  // Moroccan kite / diamond rosettes at edge midpoints
  const midTop = starPoints(half, 0, 30, 15, 0);
  const midBottom = starPoints(half, size, 30, 15, 0);
  const midLeft = starPoints(0, half, 30, 15, 0);
  const midRight = starPoints(size, half, 30, 15, 0);

  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C05621" stop-opacity="0.18" />
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.14" />
      <stop offset="100%" stop-color="#B45309" stop-opacity="0.16" />
    </linearGradient>
    <linearGradient id="sandGoldFill" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A880" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#9A7036" stop-opacity="0.12" />
    </linearGradient>
  </defs>

  <!-- Concentric Zellij Rosette Circles -->
  <circle cx="${half}" cy="${half}" r="68" fill="none" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.16" stroke-dasharray="4 3" />
  <circle cx="${half}" cy="${half}" r="38" fill="none" stroke="#D97706" stroke-width="0.9" stroke-opacity="0.15" />
  <circle cx="0" cy="0" r="68" fill="none" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.16" stroke-dasharray="4 3" />
  <circle cx="${size}" cy="0" r="68" fill="none" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.16" stroke-dasharray="4 3" />
  <circle cx="0" cy="${size}" r="68" fill="none" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.16" stroke-dasharray="4 3" />
  <circle cx="${size}" cy="${size}" r="68" fill="none" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.16" stroke-dasharray="4 3" />

  <!-- Interlaced Moroccan Lattice Ribbons (Girih Strapwork) -->
  <g stroke="#C05621" stroke-width="1.1" stroke-opacity="0.17" stroke-linecap="round">
    <line x1="0" y1="0" x2="${size}" y2="${size}" />
    <line x1="${size}" y1="0" x2="0" y2="${size}" />
    <line x1="${half}" y1="0" x2="${half}" y2="${size}" />
    <line x1="0" y1="${half}" x2="${size}" y2="${half}" />
    <line x1="${half}" y1="0" x2="${size}" y2="${half}" />
    <line x1="${size}" y1="${half}" x2="${half}" y2="${size}" />
    <line x1="${half}" y1="${size}" x2="0" y2="${half}" />
    <line x1="0" y1="${half}" x2="${half}" y2="0" />
  </g>

  <!-- Corner 8-point Moroccan Khatam Stars -->
  <polygon points="${cornerTL}" fill="url(#sandGoldFill)" stroke="#C05621" stroke-width="1.2" stroke-opacity="0.24" />
  <polygon points="${cornerTR}" fill="url(#sandGoldFill)" stroke="#C05621" stroke-width="1.2" stroke-opacity="0.24" />
  <polygon points="${cornerBL}" fill="url(#sandGoldFill)" stroke="#C05621" stroke-width="1.2" stroke-opacity="0.24" />
  <polygon points="${cornerBR}" fill="url(#sandGoldFill)" stroke="#C05621" stroke-width="1.2" stroke-opacity="0.24" />

  <!-- Midpoint Star Medallions -->
  <polygon points="${midTop}" fill="url(#sandGoldFill)" stroke="#C05621" stroke-width="1.1" stroke-opacity="0.20" />
  <polygon points="${midBottom}" fill="url(#sandGoldFill)" stroke="#C05621" stroke-width="1.1" stroke-opacity="0.20" />
  <polygon points="${midLeft}" fill="url(#sandGoldFill)" stroke="#C05621" stroke-width="1.1" stroke-opacity="0.20" />
  <polygon points="${midRight}" fill="url(#sandGoldFill)" stroke="#C05621" stroke-width="1.1" stroke-opacity="0.20" />

  <!-- Central Moroccan 8-point Khatam Suleimani Star -->
  <polygon points="${centerStar}" fill="url(#terracottaGrad)" stroke="#C05621" stroke-width="1.4" stroke-opacity="0.28" />
  <!-- Inner Rosette Star -->
  <polygon points="${centerInnerStar}" fill="none" stroke="#D97706" stroke-width="1.1" stroke-opacity="0.26" />
  <circle cx="${half}" cy="${half}" r="5" fill="#C05621" fill-opacity="0.30" />

  <!-- Corner center dots -->
  <circle cx="0" cy="0" r="5" fill="#C05621" fill-opacity="0.30" />
  <circle cx="${size}" cy="0" r="5" fill="#C05621" fill-opacity="0.30" />
  <circle cx="0" cy="${size}" r="5" fill="#C05621" fill-opacity="0.30" />
  <circle cx="${size}" cy="${size}" r="5" fill="#C05621" fill-opacity="0.30" />
</svg>`;

  fs.writeFileSync('public/images/moroccan-zellij.svg', svg.trim());
  console.log('Saved public/images/moroccan-zellij.svg successfully');
}

function generatePatternDark() {
  const size = 160;
  const half = 80;
  const rOut = 48;
  const rIn = 26;

  function starPoints(cx, cy, rO, rI, rot = 0) {
    const pts = [];
    for (let i = 0; i < 16; i++) {
      const a = (i * 22.5 + rot) * Math.PI / 180;
      const r = (i % 2 === 0) ? rO : rI;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return pts.join(' ');
  }

  const centerStar = starPoints(half, half, rOut, rIn, 0);
  const centerInnerStar = starPoints(half, half, 26, 14, 22.5);

  const cornerTL = starPoints(0, 0, rOut, rIn, 0);
  const cornerTR = starPoints(size, 0, rOut, rIn, 0);
  const cornerBL = starPoints(0, size, rOut, rIn, 0);
  const cornerBR = starPoints(size, size, rOut, rIn, 0);

  const midTop = starPoints(half, 0, 30, 15, 0);
  const midBottom = starPoints(half, size, 30, 15, 0);
  const midLeft = starPoints(0, half, 30, 15, 0);
  const midRight = starPoints(size, half, 30, 15, 0);

  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A880" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#D97706" stop-opacity="0.08" />
    </linearGradient>
  </defs>

  <circle cx="${half}" cy="${half}" r="68" fill="none" stroke="#C5A880" stroke-width="0.8" stroke-opacity="0.10" stroke-dasharray="4 3" />
  <circle cx="${half}" cy="${half}" r="38" fill="none" stroke="#C5A880" stroke-width="0.8" stroke-opacity="0.09" />
  <circle cx="0" cy="0" r="68" fill="none" stroke="#C5A880" stroke-width="0.8" stroke-opacity="0.10" stroke-dasharray="4 3" />
  <circle cx="${size}" cy="0" r="68" fill="none" stroke="#C5A880" stroke-width="0.8" stroke-opacity="0.10" stroke-dasharray="4 3" />
  <circle cx="0" cy="${size}" r="68" fill="none" stroke="#C5A880" stroke-width="0.8" stroke-opacity="0.10" stroke-dasharray="4 3" />
  <circle cx="${size}" cy="${size}" r="68" fill="none" stroke="#C5A880" stroke-width="0.8" stroke-opacity="0.10" stroke-dasharray="4 3" />

  <g stroke="#C5A880" stroke-width="0.9" stroke-opacity="0.10" stroke-linecap="round">
    <line x1="0" y1="0" x2="${size}" y2="${size}" />
    <line x1="${size}" y1="0" x2="0" y2="${size}" />
    <line x1="${half}" y1="0" x2="${half}" y2="${size}" />
    <line x1="0" y1="${half}" x2="${size}" y2="${half}" />
    <line x1="${half}" y1="0" x2="${size}" y2="${half}" />
    <line x1="${size}" y1="${half}" x2="${half}" y2="${size}" />
    <line x1="${half}" y1="${size}" x2="0" y2="${half}" />
    <line x1="0" y1="${half}" x2="${half}" y2="0" />
  </g>

  <polygon points="${cornerTL}" fill="url(#goldDarkGrad)" stroke="#C5A880" stroke-width="1.0" stroke-opacity="0.16" />
  <polygon points="${cornerTR}" fill="url(#goldDarkGrad)" stroke="#C5A880" stroke-width="1.0" stroke-opacity="0.16" />
  <polygon points="${cornerBL}" fill="url(#goldDarkGrad)" stroke="#C5A880" stroke-width="1.0" stroke-opacity="0.16" />
  <polygon points="${cornerBR}" fill="url(#goldDarkGrad)" stroke="#C5A880" stroke-width="1.0" stroke-opacity="0.16" />

  <polygon points="${midTop}" fill="none" stroke="#C5A880" stroke-width="0.9" stroke-opacity="0.14" />
  <polygon points="${midBottom}" fill="none" stroke="#C5A880" stroke-width="0.9" stroke-opacity="0.14" />
  <polygon points="${midLeft}" fill="none" stroke="#C5A880" stroke-width="0.9" stroke-opacity="0.14" />
  <polygon points="${midRight}" fill="none" stroke="#C5A880" stroke-width="0.9" stroke-opacity="0.14" />

  <polygon points="${centerStar}" fill="url(#goldDarkGrad)" stroke="#C5A880" stroke-width="1.2" stroke-opacity="0.22" />
  <polygon points="${centerInnerStar}" fill="none" stroke="#D97706" stroke-width="0.9" stroke-opacity="0.20" />
  <circle cx="${half}" cy="${half}" r="4" fill="#C5A880" fill-opacity="0.22" />
</svg>`;

  fs.writeFileSync('public/images/moroccan-zellij-dark.svg', svg.trim());
  console.log('Saved public/images/moroccan-zellij-dark.svg successfully');
}

generatePatternLight();
generatePatternDark();

