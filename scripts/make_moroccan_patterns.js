const fs = require('fs');

function generatePattern() {
  const size = 140;
  const half = 70;
  const rOut = 42;
  const rIn = 22.8;

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
  const centerInnerStar = starPoints(half, half, 22, 11.5, 22.5);

  const cornerTL = starPoints(0, 0, rOut, rIn, 0);
  const cornerTR = starPoints(size, 0, rOut, rIn, 0);
  const cornerBL = starPoints(0, size, rOut, rIn, 0);
  const cornerBR = starPoints(size, size, rOut, rIn, 0);

  // Connecting Moroccan kite / diamond rosettes at edge midpoints
  const midTop = starPoints(half, 0, 26, 13, 0);
  const midBottom = starPoints(half, size, 26, 13, 0);
  const midLeft = starPoints(0, half, 26, 13, 0);
  const midRight = starPoints(size, half, 26, 13, 0);

  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C05621" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#D97706" stop-opacity="0.03" />
    </linearGradient>
    <linearGradient id="ochreFill" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A880" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#9A7036" stop-opacity="0.02" />
    </linearGradient>
  </defs>

  <!-- Background Subtle Geometry & Radial Rings -->
  <circle cx="${half}" cy="${half}" r="58" fill="none" stroke="#C05621" stroke-width="0.7" stroke-opacity="0.04" />
  <circle cx="${half}" cy="${half}" r="33" fill="none" stroke="#C05621" stroke-width="0.7" stroke-opacity="0.04" />
  <circle cx="0" cy="0" r="58" fill="none" stroke="#C05621" stroke-width="0.7" stroke-opacity="0.04" />
  <circle cx="${size}" cy="0" r="58" fill="none" stroke="#C05621" stroke-width="0.7" stroke-opacity="0.04" />
  <circle cx="0" cy="${size}" r="58" fill="none" stroke="#C05621" stroke-width="0.7" stroke-opacity="0.04" />
  <circle cx="${size}" cy="${size}" r="58" fill="none" stroke="#C05621" stroke-width="0.7" stroke-opacity="0.04" />

  <!-- Diagonal interlaced lattice guidelines -->
  <g stroke="#C05621" stroke-width="0.7" stroke-opacity="0.05" stroke-linecap="round">
    <line x1="0" y1="0" x2="${size}" y2="${size}" />
    <line x1="${size}" y1="0" x2="0" y2="${size}" />
    <line x1="${half}" y1="0" x2="${half}" y2="${size}" />
    <line x1="0" y1="${half}" x2="${size}" y2="${half}" />
    <line x1="${half}" y1="0" x2="${size}" y2="${half}" />
    <line x1="${size}" y1="${half}" x2="${half}" y2="${size}" />
    <line x1="${half}" y1="${size}" x2="0" y2="${half}" />
    <line x1="0" y1="${half}" x2="${half}" y2="0" />
  </g>

  <!-- Corner 8-point Moroccan Stars -->
  <polygon points="${cornerTL}" fill="url(#ochreFill)" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.08" />
  <polygon points="${cornerTR}" fill="url(#ochreFill)" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.08" />
  <polygon points="${cornerBL}" fill="url(#ochreFill)" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.08" />
  <polygon points="${cornerBR}" fill="url(#ochreFill)" stroke="#C05621" stroke-width="0.9" stroke-opacity="0.08" />

  <!-- Midpoint Star Medallions -->
  <polygon points="${midTop}" fill="none" stroke="#C05621" stroke-width="0.8" stroke-opacity="0.07" />
  <polygon points="${midBottom}" fill="none" stroke="#C05621" stroke-width="0.8" stroke-opacity="0.07" />
  <polygon points="${midLeft}" fill="none" stroke="#C05621" stroke-width="0.8" stroke-opacity="0.07" />
  <polygon points="${midRight}" fill="none" stroke="#C05621" stroke-width="0.8" stroke-opacity="0.07" />

  <!-- Central Moroccan 8-point Star (Khatam) -->
  <polygon points="${centerStar}" fill="url(#terracottaGrad)" stroke="#C05621" stroke-width="1.0" stroke-opacity="0.09" />
  <!-- Inner Rosette -->
  <polygon points="${centerInnerStar}" fill="none" stroke="#D97706" stroke-width="0.8" stroke-opacity="0.09" />
  <circle cx="${half}" cy="${half}" r="4" fill="#C05621" fill-opacity="0.09" />

  <!-- Corner center dots -->
  <circle cx="0" cy="0" r="4" fill="#C05621" fill-opacity="0.09" />
  <circle cx="${size}" cy="0" r="4" fill="#C05621" fill-opacity="0.09" />
  <circle cx="0" cy="${size}" r="4" fill="#C05621" fill-opacity="0.09" />
  <circle cx="${size}" cy="${size}" r="4" fill="#C05621" fill-opacity="0.09" />
</svg>`;

  fs.writeFileSync('public/images/moroccan-zellij.svg', svg.trim());
  console.log('Saved public/images/moroccan-zellij.svg successfully');
}

generatePattern();
