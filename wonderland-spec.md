Build an elegant, organic, premium single-page landing page for a travel agency named **WonderLand**, matching the provided screenshot as closely as possible.

The page features a rich volcanic mountain visual identity, high-end floating glassmorphism navigation, modern serif headings paired with clean geometric body typography, an interactive search pill overlay, a staggered card carousel showcasing special adventure tours, a white metrics grid, and an immersive sepia Altai Mountains travel map section.

The visual direction should feel like:
- a luxury adventure travel curator
- a high-end natural landscape portfolio
- an editorial print-inspired travel magazine layout
- warm, sepia, earthy, and rich organic tones

The core visual metaphor is a volcanic mountain peak representing raw wilderness, discovery, adventure, and premium travel.

---

# TECH STACK

Use:

```json
{
  "next": "^16.2.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^3.4.13",
  "shadcn/ui": "latest",
  "motion": "^12.35.0",
  "lucide-react": "latest"
}
```

Recommended:
- Next.js 16 App Router (with React Server Components where applicable)
- Tailwind CSS
- shadcn/ui for Button, Card, and Input primitives
- motion/react for fade-in animations, slide transitions, and map pin reveals
- lucide-react for icons
- CSS custom properties for color tokens in HSL format
- CSS pseudo-elements for glassmorphism gradients and dotted grid layers

Useful lucide-react icons:
- Search
- Calendar
- Users
- MapPin
- ArrowRight
- ChevronLeft
- ChevronRight
- Globe
- Map

---

# GLOBAL PAGE DIRECTION

Create an organic, editorial travel agency landing page.

The screenshot shows a vertically stacked page mockup inside a laptop browser display. The visible layout comprises:

1. Floating transparent glass navbar inside the hero container
2. Hero section featuring a volcanic mountain landscape at sunrise, centered large headline, and pagination dots
3. Search bar pill overlapping the bottom border of the hero section
4. "Special for you" section displaying three adventure tour cards inside a slider/carousel layout
5. Stats counter section with 4 vertical white cards showing key travel metrics
6. "Get to Know Altai Mountains" banner displaying travel descriptions and an illustrative separator route map showing locations and hiking coordinates
7. Sensible default footer (implied, not visible in screenshot)

The design is grounded in natural tones: deep volcanic browns, sand cream, warm gold accents, and high-contrast red prices to guide the user's eye to booking options.

The overall page should feel premium, clean, high-contrast, and editorial-grade.

---

# GLOBAL DESIGN TOKENS

Define HSL color variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 26 24% 14%;

  --card: 0 0% 100%;
  --card-foreground: 26 24% 14%;

  --primary: 26 32% 21%; /* Earth brown: #4A3525 */
  --primary-foreground: 0 0% 100%;

  --secondary: 35 30% 98%; /* Cream: #FAF8F5 */
  --secondary-foreground: 26 32% 21%;

  --muted: 24 10% 92%;
  --muted-foreground: 24 8% 50%;

  --accent: 358 68% 46%; /* Red price accent: #c2272d */
  --accent-foreground: 0 0% 100%;

  --border: 24 10% 88%;
  --input: 24 10% 88%;
  --ring: 26 32% 21%;

  --radius: 1.5rem;

  /* Brand specifics */
  --brand-brown: #4A3525;
  --brand-brown-dark: #322318;
  --brand-cream: #FAF8F5;
  --brand-red: #c2272d;
  --brand-gray: #8c827a;
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.16);
}
```

---

# TAILWIND CONFIG

Extend the Tailwind config in `tailwind.config.ts`:

```ts
theme: {
  extend: {
    fontFamily: {
      heading: ["Montserrat", "sans-serif"],
      serif: ["Playfair Display", "Georgia", "serif"],
      body: ["Inter", "sans-serif"]
    },
    colors: {
      wonderland: {
        brown: "#4A3525",
        "brown-dark": "#322318",
        cream: "#FAF8F5",
        red: "#c2272d",
        gray: "#8c827a"
      }
    },
    borderRadius: {
      "4xl": "2rem",
      "5xl": "2.5rem"
    },
    boxShadow: {
      "card-soft": "0 10px 40px rgba(74, 53, 37, 0.04), 0 2px 8px rgba(74, 53, 37, 0.02)",
      "glass": "inset 0 1px 0 rgba(255,255,255,0.1), 0 12px 40px rgba(0,0,0,0.15)"
    }
  }
}
```

---

# FONTS

Use an editorial pairing of geometric headers, classic serifs, and neutral body typography.

Recommended Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap');
```

Font usage:
- Hero Logo & Title: `font-heading`
- Section Titles & Editorial headers: `font-serif`
- Navigation, metadata tags, and body text: `font-body`

Typography characteristics:
- Classic Editorial headings: bold, rich serif, warm tones
- Navigation: clean, thin, compact, white or dark brown depending on background
- Prices: large, bold, clean numbers, warning-red tone

---

# GLOBAL CSS UTILITIES

Create these reusable classes under `@layer components` in `app/globals.css`:

```css
@layer components {
  .glass-nav {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.12),
      0 12px 36px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .glass-tag {
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .fine-brown-border {
    position: relative;
  }

  .fine-brown-border::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      180deg,
      rgba(74, 53, 37, 0.12),
      rgba(74, 53, 37, 0.04) 45%,
      rgba(74, 53, 37, 0.2)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
}
```

---

# ASSETS REQUIRED

Gather or generate these high-fidelity assets:

## 1. Hero volcanic background
Volcanic mountain peaks (like Mount Bromo or Kamchatka volcanoes) during sunset, featuring warm orange/brown light casting shadows on hills and clouds below.
- Path: `/public/images/hero-volcano-bg.jpg`
- Format: high-quality WebP
- Dimensions: 1920x1080px minimum

## 2. Altai mountains sepia map background
A faded, high-key landscape photo of Mount Belukha with a misty forest valley in sepia-gray tones. The background acts as the canvas for the routes and dotted path map.
- Path: `/public/images/altai-map-bg.jpg`
- Format: WebP/JPG
- Dimensions: 1400x800px minimum

## 3. Tour card images
Three clean landscape photos matching the tour destinations:
- Altai mountains under morning sun: `/public/images/tour-altai.jpg` (400x300px)
- Kamchatka crater lakes: `/public/images/tour-kamchatka.jpg` (400x300px)
- Teriberka snowy Arctic coast: `/public/images/tour-teriberka.jpg` (400x300px)

## 4. People sitting on cliff
Cutout/transparent overlay image of two people sitting on a cliff looking towards the right side of the screen.
- Path: `/public/images/people-cliff.png`
- Format: transparent PNG
- Dimensions: 500x500px

## 5. Brand logo vector
Three minimalist peaks representing mountains.
- Path: `/public/icons/mountain-logo.svg`
- Format: SVG vector

---

# RESPONSIVE RULES

Configure responsive grids and layout shifts:

## Desktop (1024px+)
- Maximum content width: 1200px
- Floating navbar centered over the hero
- Tour card carousel displays 3 cards side-by-side
- Stats section displays 4 columns
- Altai mountains section split-layout: description on left, illustration and map route on right

## Tablet (768px–1024px)
- Navbar collapses to hamburger trigger
- Tour card carousel displays 2 cards side-by-side with horizontal scroll
- Stats section wraps to a 2x2 grid
- Altai Mountains route map collapses below the text description

## Mobile (<768px)
- Navbar uses simple glass bar with logo and menu icon
- Hero heading drops from `text-[54px]` to `text-[36px]`
- Search bar stacks inputs vertically inside a card
- Tour card carousel displays 1 card with indicator dots
- Stats section stacks vertically in 1 column
- Altai Mountains route map is hidden, displaying only the locations list with coordinate buttons

---

# PAGE STRUCTURE

```
app/
├── layout.tsx         // imports Montserrat, Playfair Display, and Inter; adds dark class support
├── page.tsx           // composes sections
├── globals.css        // tokens + @layer utilities
└── components/
    ├── navbar.tsx     // 'use client' glass navigation
    ├── hero.tsx       // mountain background container + title
    ├── search-bar.tsx // floating tour search pill
    ├── tours.tsx      // 'use client' card slider with Book button
    ├── stats.tsx      // 4-card metric section
    └── map-section.tsx// 'use client' sepia banner with interactive route path
```

## `app/page.tsx` JSX Skeleton:
```tsx
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import SearchBar from "./components/search-bar";
import ToursSection from "./components/tours";
import StatsSection from "./components/stats";
import MapSection from "./components/map-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-wonderland-brown font-body antialiased">
      <div className="relative mx-auto max-w-[1440px] px-4 pt-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-wonderland-cream">
          <Navbar />
          <HeroSection />
          <div className="absolute left-1/2 bottom-0 w-full max-w-[1000px] -translate-x-1/2 translate-y-1/2 z-30 px-4">
            <SearchBar />
          </div>
        </div>
      </div>
      <main className="mt-20">
        <ToursSection />
        <StatsSection />
        <MapSection />
      </main>
    </div>
  );
}
```

---

# SECTION 1 — NAVBAR

Create a floating, translucent glass pill navbar centered over the top portion of the hero panel.

## Position:
```txt
absolute top-6 left-1/2 z-50 w-[calc(100%-48px)] max-w-[1100px] -translate-x-1/2
```

## Inner Container:
```txt
glass-nav flex h-[64px] items-center justify-between rounded-full px-8 py-3
```

## Left Logo:
Mountain peaks glyph followed by "WonderLand" (capital W and L):
```txt
flex items-center gap-2 text-white font-heading font-semibold text-[16px] tracking-wider
```
Implementation:
```tsx
<div className="flex items-center gap-2 text-white font-heading font-semibold text-[16px] tracking-wider cursor-pointer">
  <img src="/icons/mountain-logo.svg" className="h-5 w-5 invert brightness-0" alt="logo" />
  <span>WonderLand</span>
</div>
```

## Center Navigation Links:
```txt
hidden lg:flex items-center gap-8 text-white/90 font-body text-[13px] font-medium
```
Nav Items (with chevron indicators for nested routes):
- Tours ∨
- Directions ∨
- About us
- News
- Vacancies
- Contacts

## Right Controls:
Two rounded toggles inside a pill container:
- "TN" (dark background circular toggle)
- "EN" (white background capsule button with chevron symbol)
```txt
flex items-center gap-2
```
Style — TN:
```txt
flex h-8 w-8 items-center justify-center rounded-full text-white/60 text-[11px] font-bold hover:text-white transition-colors
```
Style — EN:
```txt
flex h-8 items-center gap-1 rounded-full bg-white px-4 text-wonderland-brown text-[11px] font-bold shadow-sm
```

---

# SECTION 2 — HERO PANEL

A large canvas container that acts as the entry window, showing organic landscapes with high-contrast centered typography.

## Outer Spacing:
```txt
relative w-full h-[680px] overflow-hidden rounded-[2rem]
```

## Background Layers:
- Layer 1 (Base image): `/images/hero-volcano-bg.jpg` with `object-cover w-full h-full`
- Layer 2 (Muted overlay): Subtle dark brown/orange gradient mask to ensure text readability:
```txt
absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60
```

## Center Hero Copy Container:
```txt
absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10
```

## Welcome Subtitle:
- Mountain peaks icon (centered above text)
- Text: "WELCOME TO YOUR"
```txt
flex flex-col items-center gap-2 text-white/70 font-heading text-[11px] font-medium tracking-[0.25em]
```

## Main Headline:
```txt
WonderLand
```
Style:
```txt
font-heading text-[64px] font-bold text-white tracking-[0.02em] mt-3 md:text-[76px]
```

## Paragraph Subtext:
```txt
We organize tours in Russia and neighboring countries.
Discover the beauty of your home country with WonderLand Tour
```
Style:
```txt
mt-6 max-w-[520px] text-white/80 font-body text-[13px] leading-relaxed font-light
```

## Bottom Slider Indicator Dots:
Stands above the search bar position:
```txt
absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20
```
Dots: 4 horizontal circles (first dot is white, other 3 are semi-transparent white/20).

---

# SECTION 3 — SEARCH BAR

A horizontal pill overlay card that rests on the bottom border of the hero panel.

## Position:
```txt
relative w-full rounded-[2rem] bg-white p-2 shadow-card-soft flex flex-col md:flex-row items-center justify-between gap-2 border border-wonderland-cream
```

## Search Input (Left):
Magnifying glass icon + placeholder text:
```txt
flex-1 flex items-center gap-3 px-4 border-r border-wonderland-cream/60 w-full
```
Input element:
```txt
w-full border-none bg-transparent py-3 text-[13px] text-wonderland-brown placeholder:text-wonderland-gray/60 focus:outline-none
```

## Date Picker (Center):
Calendar icon + static dates display:
```txt
flex-1 flex items-center gap-3 px-4 border-r border-wonderland-cream/60 w-full
```
Date Range text:
```txt
text-[13px] font-medium text-wonderland-brown/80
```
Verbatim date values:
```txt
14.03.2022 - 14.04.2022
```

## CTA Button (Right):
```txt
SEARCH TOURS
```
Style:
```txt
rounded-full bg-wonderland-brown px-8 py-3 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-wonderland-brown-dark transition-all duration-300 w-full md:w-auto
```

---

# SECTION 4 — SPECIAL FOR YOU

A section presenting handpicked journeys, using a layout with left/right navigation arrows.

## Section Outer Spacing:
```txt
max-w-[1200px] mx-auto px-6 py-20 mt-12
```

## Section Header Container:
```txt
flex items-baseline justify-between mb-10
```

## Header Title:
```txt
Special for you
```
Style:
```txt
font-serif text-[38px] font-bold text-wonderland-brown
```

## Link All:
```txt
all tours →
```
Style:
```txt
font-body text-[13px] font-semibold text-wonderland-brown/85 hover:underline cursor-pointer
```

## Cards Grid Layout (with sliding slider):
```txt
relative grid grid-cols-1 md:grid-cols-3 gap-6
```
Navigation arrows positioned absolutely outside the grid edges:
- Left arrow: `absolute left-[-48px] top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-wonderland-cream bg-white text-wonderland-brown hover:bg-wonderland-cream transition-colors`
- Right arrow: `absolute right-[-48px] top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-wonderland-cream bg-white text-wonderland-brown hover:bg-wonderland-cream transition-colors`

---

## Tour Cards Specs:

### Card Container:
```txt
group flex flex-col rounded-[1.5rem] bg-[#FFFFFF] p-3 border border-wonderland-cream/60 shadow-sm hover:shadow-card-soft transition-all duration-300
```

### Card Image Wrapper:
```txt
relative w-full h-[220px] overflow-hidden rounded-[1.2rem]
```

### Card Image:
```txt
w-full h-full object-cover transition-transform duration-500 group-hover:scale-105
```

### Top-Right Icon Tag:
Overlay on image. Displays small destination icons:
```txt
glass-tag absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-white
```

### Card Content Details:
```txt
p-4 flex flex-col flex-1
```

### Category Tags:
```txt
text-[10px] uppercase font-bold tracking-wider text-wonderland-gray/80 mb-2
```

### Title:
```txt
font-heading text-[16px] font-bold text-wonderland-brown leading-snug group-hover:text-wonderland-brown-dark transition-colors
```

### Description:
```txt
text-[12px] text-wonderland-gray mt-2 leading-relaxed flex-1
```

### Details Row (Calendar & People Icons):
```txt
flex items-center gap-4 py-4 border-b border-wonderland-cream/60 text-[11px] text-wonderland-gray/90
```

### Footer Booking Row:
```txt
flex items-center justify-between pt-4 mt-auto
```

### Prices (Strikethrough and Current):
```txt
flex flex-col
```
- Strikethrough price: `text-[11px] line-through text-wonderland-gray/60`
- Current price: `text-[20px] font-bold text-wonderland-red font-heading`

### Book Button:
```txt
BOOK
```
Style:
```txt
rounded-full bg-wonderland-brown px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-wonderland-brown-dark transition-colors
```

---

## Specific Card Contents:

### Card 1:
- Image: `/images/tour-altai.jpg`
- Top-Right tag: Mountain peak vector
- Category Tags: `river rafting - mountain excursions - hiking with tents`
- Title: `Altai mountains — full immersion`
- Description: `The best sights of the Altai Territory in 2 weeks`
- Details:
  - Calendar icon + `14 days`
  - Users icon + `2 person`
  - Map icon
- Prices:
  - Strikethrough: `140 800 P`
  - Current: `120 800 P`

### Card 2:
- Image: `/images/tour-kamchatka.jpg`
- Top-Right tag: Volcano peak + Waves vector
- Category Tags: `hot springs - mountain excursions - geysers`
- Title: `Adventures by Kamchatka`
- Description: `In search of adventures. Tour to Kamchatka without tents and backpacks`
- Details:
  - Calendar icon + `7 days`
  - Users icon + `1 person`
  - Map icon
- Prices:
  - Strikethrough: `98 600 P`
  - Current: `84 200 P`

### Card 3:
- Image: `/images/tour-teriberka.jpg`
- Top-Right tag: Lighthouse vector
- Category Tags: `arctic tour - cruise in ship - northern lights`
- Title: `Journey to Teriberka`
- Description: `Reboot on the shores of the Barents Sea and find out how the Russian North lives`
- Details:
  - Calendar icon + `4 days`
  - Users icon + `1 person`
  - Map icon
- Prices:
  - Strikethrough: `68 800 P`
  - Current: `51 700 P`

---

# SECTION 5 — STATS COUNTERS

A metrics section that details company statistics inside white elevated cards.

## Container:
```txt
max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
```

## Stat Card Container:
```txt
flex flex-col bg-[#FFFFFF] p-6 rounded-[1.5rem] border border-wonderland-cream/40 shadow-sm
```

## Value Numbers:
```txt
font-heading text-[38px] font-extrabold text-wonderland-brown tracking-tight leading-none
```

## Label (Bold):
```txt
font-heading text-[12px] font-bold text-wonderland-brown uppercase mt-3 tracking-wider
```

## Subtext Description:
```txt
font-body text-[12px] text-wonderland-gray mt-1 leading-relaxed
```

## Values:
- **Card 1**: `2 124 000` | Label: `kilometers` | Subtext: `passed by our travelers`
- **Card 2**: `8 200` | Label: `travelers` | Subtext: `participated in our tours`
- **Card 3**: `345` | Label: `positive feedback` | Subtext: `for all years of the company`
- **Card 4**: `14` | Label: `years of work` | Subtext: `for your wonderful experiences`

---

# SECTION 6 — GET TO KNOW ALTAI

A wide editorial segment showcasing travel routes and peak geography.

## Outer Container:
```txt
relative max-w-[1200px] mx-auto my-20 px-8 py-16 rounded-[2.5rem] overflow-hidden bg-wonderland-cream/30 border border-wonderland-cream/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center
```

## Background Image Canvas:
Sepia landscape photo:
```txt
absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-multiply pointer-events-none
```
Suggested file: `/images/altai-map-bg.jpg`

## Left Content Column:
```txt
lg:col-span-5 flex flex-col items-start z-10
```

### Pre-Title Tag:
```txt
GET TO KNOW
```
Style:
```txt
text-[10px] font-bold uppercase tracking-[0.25em] text-wonderland-gray
```

### Section Title:
```txt
Altai Mountains
```
Style:
```txt
flex items-center gap-3 font-serif text-[42px] font-bold text-wonderland-brown mt-2
```
Mountain icon (from Lucide or outline SVG) positioned right before or overlaying the title text.

### Description:
```txt
Turquoise lakes and turbulent rivers, steppe expanses and mountain peaks, and the most beautiful roads in the world and a valley similar to Mars are waiting for you
```
Style:
```txt
text-[13px] leading-relaxed text-wonderland-gray/90 mt-6 max-w-[420px] font-light
```

### Dest Links:
```txt
flex flex-wrap items-center gap-6 mt-8
```
- attractions →
- similar destinations →
Style:
```txt
text-[12px] font-bold uppercase tracking-wider text-wonderland-brown/85 hover:text-wonderland-brown hover:underline
```

### CTA Button:
```txt
CHOOSE A TOUR
```
Style:
```txt
mt-8 rounded-full border-2 border-wonderland-brown px-8 py-3 text-[11px] font-bold uppercase tracking-wider text-wonderland-brown hover:bg-wonderland-brown hover:text-white transition-all duration-300
```

## Right Illustration Column (Travel Route Map):
```txt
lg:col-span-7 relative flex items-center justify-center z-10 min-h-[400px] w-full
```

### Map Artwork Layers:
- **Layer 1 (Overlay Graphic)**: Dotted travel line path tracing coordinates.
- **Layer 2 (People Graphic)**: Cutout image of hikers sitting on a ledge pointing at mountains (`/images/people-cliff.png`), placed on the bottom right.
- **Layer 3 (Location Pins)**: Coordinates with text labels:
  - Mount Belukha (top right pin)
  - Lake Teletskoye (far right pin)
  - Tavdinsky Caves (lower right pin)
  - Korbu Waterfall (center pin)
  - Katu-Yaryk (bottom pin)

### Slider Pagination:
Pagination indicator (dots style) floating at the bottom right:
- First dot filled, others hollow.

---

# SECTION 7 — FOOTER

Not visible in this screenshot — implement as sensible default.

## Style:
```txt
border-t border-wonderland-cream bg-wonderland-cream/20 py-12 px-6 mt-20
```

## Content:
- Brand column (WonderLand logo + tag line)
- Destination columns (Altai, Kamchatka, Baikal, Karelia)
- Contact Info (phone, email, socials)
- Copyright text

---

# ANIMATION SYSTEM

Use the following Framer Motion variants to ensure smooth transitions:

## 1. Global Page Entrance (fadeUp + blur):
```tsx
export const pageReveal = {
  initial: { opacity: 0, y: 30, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut" }
};
```

## 2. Card Carousel Scroll Animation:
Animate cards entrance in sequence:
```tsx
export const cardStagger = (index: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" }
});
```

## 3. Interactive Route Map Pins:
Map pins should pulse and reveal coordinates on scroll/hover:
```tsx
export const pinReveal = (index: number) => ({
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: { type: "spring", stiffness: 100, delay: index * 0.15 }
});
```

## 4. Navigation Link Hover:
Nav items have a subtle underline slide-in:
```tsx
// CSS-driven transition
className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
```

---

# EXACT VISUAL HIERARCHY

1. Large bold title "WonderLand" on sunset volcano background
2. Main Altai Mountains graphic section with people looking at landscape
3. Staggered price tags (red numbers) inside Tour Cards
4. Search bar pill overlapping the hero card border
5. Special for you section title and tour cards
6. Metric Values in statistics cards

---

# SPACING AND LAYOUT DETAILS

```json
{
  "page_max_width": "1440px",
  "content_container_max_width": "1200px",
  "hero_min_height": "680px",
  "navbar_height": "64px",
  "search_bar_offset": "50%",
  "tour_card_height": "510px",
  "stats_gap": "24px",
  "stats_columns": 4,
  "get_to_know_min_height": "540px",
  "map_overlay_opacity": "0.08"
}
```

---

# COMPONENT TREE

```
App
├── Navbar (tn/en language selector)
├── HeroSection (mountain background)
│   ├── Logo/Brand
│   ├── Subtitle & Mountain Icon
│   ├── Title: WonderLand
│   └── Slider Dots
├── SearchBar
│   ├── Input field (Tour name)
│   ├── Date selector range
│   └── Search tours button
├── ToursSection
│   ├── Section Title (Special for you)
│   ├── Slider arrows (left/right)
│   └── TourCards (3 items grid)
│       ├── Image (hover scaling)
│       ├── Location/Category Tag
│       ├── Stats Row (days/persons)
│       └── Footer (prices & BOOK button)
├── StatsCounters (4 cards grid)
└── MapSection (Get to know Altai)
    ├── Info Column (description, choosing button)
    └── Route Map Column
        ├── Interactive Pins
        └── Hiking routes dotted graphic overlay
```

---

# COPYWRITING CONTENT

## Navbar
```
WonderLand
Tours
Directions
About us
News
Vacancies
Contacts
TN
EN
```

## Hero Section
```
WELCOME TO YOUR
WonderLand
We organize tours in Russia and neighboring countries.
Discover the beauty of your home country with WonderLand Tour
Enter tour name
14.03.2022 - 14.04.2022
SEARCH TOURS
```

## Special for you Section
```
Special for you
all tours →
river rafting - mountain excursions - hiking with tents
Altai mountains — full immersion
The best sights of the Altai Territory in 2 weeks
14 days
2 person
140 800 P
120 800 P
BOOK
hot springs - mountain excursions - geysers
Adventures by Kamchatka
In search of adventures. Tour to Kamchatka without tents and backpacks
7 days
1 person
98 600 P
84 200 P
BOOK
arctic tour - cruise in ship - northern lights
Journey to Teriberka
Reboot on the shores of the Barents Sea and find out how the Russian North lives
4 days
1 person
68 800 P
51 700 P
BOOK
```

## Stats Counters Section
```
2 124 000
kilometers
passed by our travelers
8 200
travelers
participated in our tours
345
positive feedback
for all years of the company
14
years of work
for your wonderful experiences
```

## Get to know Altai Section
```
GET TO KNOW
Altai Mountains
Turquoise lakes and turbulent rivers, steppe expanses and mountain peaks, and the most beautiful roads in the world and a valley similar to Mars are waiting for you
attractions →
similar destinations →
CHOOSE A TOUR
Mount Belukha
Lake Teletskoye
Tavdinsky Caves
Korbu Waterfall
Katu-Yaryk
```

---

# VISUAL DETAILS TO MATCH

## Important details from the screenshot:
- The website is nested inside a sleek laptop border with a separate mountain peak wallpaper behind it. We focus on rebuilding the inside layout of the browser mockup.
- The hero card is nested inside a white container wrapper with strong border radius (`rounded-[2.5rem]`).
- The logo is a combination of a three-peak vector outline and the text "WonderLand" with a capital W and capital L.
- Nav items with submenus (Tours, Directions) have chevron markers beside them.
- Dot paginators appear in two places: below the hero title (4 dots) and on the right side of the map section (4 dots).
- Strikethrough prices in the tour cards are smaller and tinted gray. Current prices are larger, bolded, and colored in alert red.
- The "Special for you" heading is in a classic serif font, while the navigation text uses a clean sans-serif.
- The "Get to know Altai Mountains" heading is also in a classic serif font.
- Card tags overlays have a blur effect (`backdrop-filter: blur`).
- Route paths inside the Altai Mountains section are dotted lines winding between pins.

## Anti-patterns / things to avoid:
- Avoid utilizing emojis in place of SVG vectors (e.g. for calendar or users icons).
- Do not make the current prices dark brown; keep them highlighted in rich warning red to capture booking attention.
- Avoid flat container lines. Cards must have round borders of at least `1rem` and subtle shadows.
- Avoid removing the chevron indicators in navigation dropdowns; they indicate dropdown functionality.
- Do not use bright neon colors like lime green or cyan; keep colors limited to earthy browns, creams, sepia, grays, and warning red.
- Avoid leaving the interactive pins static; add hover-glow pulsing effects to make the travel path feel alive.

---

# FINAL IMPLEMENTATION GOAL

The final result should visually recreate the travel landing page screenshot inside a responsive Next.js 16 container. The website must feel organic, premium, and editorial. The volcanic sunset hero image establishes a rustic, adventurous theme, while the clean serif typography and clean white cards ensure high readability and professionalism. Interactive search overlays and map coordinates route path make the interface feel alive, inviting users to choose their next travel destination.
