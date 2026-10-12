// Generates 1200×630 og:image files into public/og/ from each page's hero photo.
// Run after changing a page's hero image or adding a tour: node scripts/generate-og-images.mjs
// Output names must match the ogImage paths in lib/site-pages.ts and data/itinerary-seo.ts.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const PUBLIC = path.resolve(import.meta.dirname, "..", "public");

const sources = {
  // Static pages
  "home": "/images/royal_golf_aerial_1.jpg",
  "agence-de-voyage-montreal": "/moroco.webp",
  "itineraries": "/images/morocco_culinary.png",
  "golf-agadir": "/images/tgz_course_aerial.jpg",
  "golf-marrakech": "/images/royal_golf_marrakech_2.jpg",
  "mice": "/images/royal_golf_clubhouse.jpg",
  "heritage": "/images/marrakech_sunset_hero.png",
  "custom-trip": "/images/rgdes_soleil_couchant.jpg",
  "contact": "/images/royal_golf_evening.jpg",
  // Tours (itinerariesData[id].image)
  "tour-10": "/images/rgdes_parcours_rouge_18.jpg",
  "tour-11": "/images/tgz_course_ocean.jpg",
  "tour-12": "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
  "tour-13": "/images/tgz_course_hotel.jpg",
  "tour-14": "/images/royal_golf_marrakech_1.jpg",
  "tour-15": "/images/almaaden_golf_5.jpg",
  "tour-16": "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal.webp",
  "tour-17": "/Tangier.jpg",
  "tour-18": "/michlifen.jpg",
  "tour-6": "/images/imperial_cities_fes.jpg",
  "tour-7": "/images/gulf-desert-sunset.png", // chefchaouen.png is not a Chefchaouen photo
  "tour-8": "/images/trekking_toubkal.png",
  "tour-9": "/images/german_circuit_morocco.jpg",
};

await mkdir(path.join(PUBLIC, "og"), { recursive: true });

for (const [name, src] of Object.entries(sources)) {
  const out = path.join(PUBLIC, "og", `${name}.jpg`);
  await sharp(path.join(PUBLIC, src))
    .resize(1200, 630, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log(`og/${name}.jpg  <-  ${src}`);
}
