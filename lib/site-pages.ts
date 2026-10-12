// Indexable static pages, shared by the pages and images sitemaps.
// images: hero/feature photos (the page's og:image is appended automatically).
export const sitePages: { path: string; priority: number; ogImage: string; images: string[] }[] = [
  { path: "/", priority: 1.0, ogImage: "/og/home.jpg", images: ["/images/royal_golf_aerial_1.jpg"] },
  { path: "/agence-de-voyage-montreal", priority: 0.9, ogImage: "/og/agence-de-voyage-montreal.jpg", images: ["/moroco.webp"] },
  { path: "/itineraries", priority: 0.8, ogImage: "/og/itineraries.jpg", images: ["/images/moroco.webp", "/images/royal_golf_aerial_1.jpg", "/images/imperial_cities_fes.jpg"] },
  { path: "/golf-itineraries/agadir", priority: 0.8, ogImage: "/og/golf-agadir.jpg", images: ["/images/tgz_course_ocean.jpg", "/images/pickalbatros-white-beach-resort-in-agadir.jpg", "/images/tgz_course_hotel.jpg"] },
  { path: "/golf-itineraries/marrakech", priority: 0.8, ogImage: "/og/golf-marrakech.jpg", images: ["/images/royal_golf_marrakech_1.jpg", "/images/royal_golf_marrakech_2.jpg"] },
  { path: "/mice", priority: 0.8, ogImage: "/og/mice.jpg", images: [] },
  { path: "/heritage", priority: 0.8, ogImage: "/og/heritage.jpg", images: [] },
  { path: "/custom-trip", priority: 0.8, ogImage: "/og/custom-trip.jpg", images: [] },
  { path: "/contact", priority: 0.7, ogImage: "/og/contact.jpg", images: [] },
  { path: "/travel-stories", priority: 0.5, ogImage: "/og/home.jpg", images: [] },
  { path: "/conditions", priority: 0.3, ogImage: "/og/home.jpg", images: [] },
];
