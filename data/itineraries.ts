export interface TourCard {
  id: number;
  image: string;
  category: { FR: string; EN: string };
  badge: { FR: string; EN: string };
  title: { FR: string; EN: string };
  description: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  flight: { FR: string; EN: string };
  meals: { FR: string; EN: string };
  oldPrice: string;
  price: { FR: string; EN: string };
  originalCost?: { FR: string; EN: string };
  tag: string;
  promoText?: { FR: string; EN: string };
  iconType: "mountain" | "water" | "lighthouse";
  city: { FR: string; EN: string };
}

export interface DealCard {
  id: number;
  image: string;
  badge: { FR: string; EN: string };
  title: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  flight: { FR: string; EN: string };
  meals: { FR: string; EN: string };
  inclusions: { FR: string; EN: string };
  oldPrice: string;
  newPrice: { FR: string; EN: string };
  originalCost?: { FR: string; EN: string };
  tag: string;
  promoText?: { FR: string; EN: string };
  city: { FR: string; EN: string };
}

export interface DayPlan {
  day: number;
  title: { FR: string; EN: string };
  desc: { FR: string; EN: string };
}

export interface HotelDetail {
  name: string;
  stars: number;
  desc: { FR: string; EN: string };
  link: string;
}

export interface ActivityDetail {
  title: { FR: string; EN: string };
  desc: { FR: string; EN: string };
}

export interface ItineraryDetail {
  id: number;
  image: string;
  contentImage: string;
  title: { FR: string; EN: string };
  duration: { FR: string; EN: string };
  cost: { FR: string; EN: string };
  overview: { FR: string; EN: string };
  timeline: DayPlan[];
  inclusions: { FR: string[]; EN: string[] };
  exclusions: { FR: string[]; EN: string[] };
  options: {
    FR: { name: string; price: string }[];
    EN: { name: string; price: string }[];
  };
  hotels: HotelDetail[];
  activities: ActivityDetail[];
  dates?: { FR: string[]; EN: string[] };
  originalCost?: { FR: string; EN: string };
  planLabel?: { FR: string; EN: string };
}

export interface MapPinDetail {
  name: { FR: string; EN: string };
  top: string;
  left: string;
}

export interface ExperienceCard {
  label: { FR: string; EN: string };
  img: string;
}

export interface ItineraryTheme {
  country: string;
  heroTitle: { FR: string; EN: string };
  heroSub: { FR: string; EN: string };
  heroBtn: { FR: string; EN: string };
  heroBg: string;
  themeColor: string;
  themeColorHover: string;
  watercolorColor: string;
  mapImage: string;
  discoverTitle: { FR: string; EN: string };
  discoverDesc: { FR: string; EN: string };
  experienceTitle: { FR: string; EN: string };
  experienceDesc: { FR: string; EN: string };
  mapPins: MapPinDetail[];
  experienceGrid: ExperienceCard[];
}

export const toursList: TourCard[] = [
  {
    id: 10,
    image: "/images/rgdes_parcours_rouge_18.jpg",
    category: { FR: "Golf & Prestige", EN: "Golf & Prestige" },
    badge: { FR: "Signature", EN: "Signature" },
    title: { FR: "Royal Golf Dar Es Salam", EN: "Royal Golf Dar Es Salam" },
    description: {
      FR: "Le joyau de Rabat conçu par Robert Trent Jones Sr, s'étendant sur 440 hectares de forêt. Un parcours légendaire qui accueille les compétitions internationales avec excursion culturelle à Fès.",
      EN: "Rabat's masterpiece designed by Robert Trent Jones Sr, set on 440 hectares of forest. A legendary championship course with a cultural day tour to Fez."
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "BB ou Demi-pension", EN: "BB or Half Board" },
    oldPrice: "",
    price: { FR: "Sur demande", EN: "On request" },
    tag: "golf",
    iconType: "lighthouse",
    city: { FR: "Rabat", EN: "Rabat" },
  },
  {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    category: { FR: "Golf & Océan", EN: "Golf & Ocean" },
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Hilton Taghazout Hôtel (7N)", EN: "Hilton Taghazout Hotel (7N)" },
    description: {
      FR: "Forfait comprenant vols de Montréal, 7 nuits au Hilton Taghazout 5★ en chambre vue piscine et 4 rondes sur les plus beaux parcours d'Agadir.",
      EN: "Package including Montreal flights, 7 nights at the 5★ Hilton Taghazout in a pool view room, and 4 rounds on Agadir's top courses."
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Demi-pension", EN: "Breakfast or Half board" },
    oldPrice: "",
    price: { FR: "À partir de 3 879 $", EN: "Starting from 3,879" },
    originalCost: { FR: "À partir de 4 079 $", EN: "Starting from 4,079" },
    tag: "golf",
    iconType: "water",
    city: { FR: "Agadir", EN: "Agadir" },
  },
  {
    id: 12,
    image: "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
    category: { FR: "Golf & Luxe", EN: "Golf & Luxury" },
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "White Beach Hôtel", EN: "White Beach Hotel" },
    description: {
      FR: "Séjour de luxe ultime tout compris (adulte seulement) au White Beach Resort 5★ en chambre vue jardin, vols de Montréal et 4 rondes de golf incluses.",
      EN: "Ultimate luxury all-inclusive stay (adults only) at the 5★ White Beach Resort in a garden view room, Montreal flights, and 4 rounds of golf included."
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Tout compris", EN: "All inclusive" },
    oldPrice: "",
    price: { FR: "4 255 $", EN: "C$ 4,255" },
    originalCost: { FR: "4 455 $", EN: "C$ 4,455" },
    tag: "golf",
    iconType: "lighthouse",
    city: { FR: "Agadir", EN: "Agadir" },
  },
  {
    id: 13,
    image: "/images/tgz_course_hotel.jpg",
    category: { FR: "Golf & Océan", EN: "Golf & Ocean" },
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Hilton Taghazout Hôtel (10N)", EN: "Hilton Taghazout Hotel (10N)" },
    description: {
      FR: "Profitez d'un séjour de golf de 10 nuits au Hilton Taghazout 5★ en chambre double vue jardin, avec 6 rondes sur les parcours d'Agadir et vols inclus.",
      EN: "Enjoy a 10-night golf package at the 5★ Hilton Taghazout in a double garden view room, including 6 rounds on Agadir courses and flights."
    },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Demi-pension", EN: "Breakfast or Half board" },
    oldPrice: "",
    price: { FR: "À partir de 4 989 $", EN: "Starting from 4,989" },
    originalCost: { FR: "À partir de 5 189 $", EN: "Starting from 5,189" },
    tag: "golf",
    iconType: "water",
    city: { FR: "Agadir", EN: "Agadir" },
  },
  {
    id: 14,
    image: "/images/royal_golf_marrakech_1.jpg",
    category: { FR: "Golf & Luxe", EN: "Golf & Luxury" },
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "Hôtel du Golf 5★", EN: "Hotel du Golf 5★" },
    description: {
      FR: "10 nuits tout inclus à l'Hôtel du Golf 5★ à Marrakech. Inclus vols de Montréal, transferts privés et 6 rondes de golf de championnat.",
      EN: "10 nights all-inclusive stay at the 5★ Hotel du Golf in Marrakech. Includes Montreal flights, private transfers, and 6 championship golf rounds."
    },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Tout Compris", EN: "All Inclusive" },
    oldPrice: "",
    price: { FR: "5 899 $", EN: "C$ 5,899" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "6 099 $", EN: "C$ 6,099" },
    tag: "golf",
    iconType: "lighthouse",
    city: { FR: "Marrakech", EN: "Marrakech" },
  },
  {
    id: 17,
    image: "/Tangier.jpg",
    category: { FR: "Golf & Océan", EN: "Golf & Ocean" },
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Tanger Golf & Resort 5★ (7N)", EN: "Tangier Golf & Resort 5★ (7N)" },
    description: {
      FR: "Forfait comprenant vols de Montréal, 7 nuits en resort 5★ à Tanger et 4 rondes de golf sur le Royal Golf de Tanger et Al Houara Golf Club.",
      EN: "Package including Montreal flights, 7 nights at a 5★ resort in Tangier, and 4 rounds of golf on Royal Golf de Tanger and Al Houara Golf Club."
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Demi-pension", EN: "Breakfast or Half board" },
    oldPrice: "",
    price: { FR: "Sur demande", EN: "On request" },
    tag: "golf",
    iconType: "water",
    city: { FR: "Tanger", EN: "Tangier" },
  },
  {
    id: 18,
    image: "/michlifen.jpg",
    category: { FR: "Golf & Altitude", EN: "Mountain & Golf" },
    badge: { FR: "Signature", EN: "Signature" },
    title: { FR: "Michlifen Resort & Golf 5★", EN: "Michlifen Resort & Golf 5★" },
    description: {
      FR: "Hébergement d'exception au Michlifen Resort 5★ à Ifrane et rondes de golf sur le prestigieux parcours d'altitude Jack Nicklaus Signature à Michlifen Golf & Country Club.",
      EN: "Luxury stay at the 5★ Michlifen Resort in Ifrane featuring rounds on the Jack Nicklaus Signature championship golf course at Michlifen Golf & Country Club."
    },
    duration: { FR: "7 jours / 7 nuits", EN: "7 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "BB ou Demi-pension", EN: "BB or Half Board" },
    oldPrice: "",
    price: { FR: "Sur demande", EN: "On request" },
    tag: "golf",
    iconType: "lighthouse",
    city: { FR: "Michlifen", EN: "Michlifen" },
  },
  {
    id: 15,
    image: "/images/almaaden_golf_5.jpg",
    category: { FR: "Golf & Luxe", EN: "Golf & Luxury" },
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Jaal Riad Hôtel 5★ (10N)", EN: "Jaal Riad Hotel 5★ (10N)" },
    description: {
      FR: "10 nuits au Jaal Riad Hôtel 5★ (Adults Only) à Marrakech. Inclus vols directs, formule petit-déjeuner ou pension complète, et 6 rondes de golf.",
      EN: "10 nights at 5★ Jaal Riad Hotel (Adults Only) in Marrakech. Includes direct flights, daily breakfast or full board, and 6 rounds of golf."
    },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Pension Complète", EN: "Breakfast or Full Board" },
    oldPrice: "",
    price: { FR: "4 669 $", EN: "C$ 4,669" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "4 869 $", EN: "C$ 4,869" },
    tag: "golf",
    iconType: "lighthouse",
    city: { FR: "Marrakech", EN: "Marrakech" },
  },
  {
    id: 16,
    image: "/images/royal_golf_marrakech_2.jpg",
    category: { FR: "Golf & Luxe", EN: "Golf & Luxury" },
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "Jaal Riad Hôtel 5★ (7N)", EN: "Jaal Riad Hotel 5★ (7N)" },
    description: {
      FR: "Séjour de 7 nuits à Marrakech au Jaal Riad Hôtel 5★ (Adults Only). Inclus vols directs de Montréal, transferts et 4 rondes de golf de championnat.",
      EN: "7 nights stay in Marrakech at 5★ Jaal Riad Hotel (Adults Only). Includes direct Montreal flights, transfers, and 4 championship golf rounds."
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Pension Complète", EN: "Breakfast or Full Board" },
    oldPrice: "",
    price: { FR: "3 979 $", EN: "C$ 3,979" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "4 179 $", EN: "C$ 4,179" },
    tag: "golf",
    iconType: "lighthouse",
    city: { FR: "Marrakech", EN: "Marrakech" },
  },
  {
    id: 6,
    image: "/images/gulf-desert-sunset.png",
    category: { FR: "Tours & Découvertes", EN: "Tours & Discovery" },
    badge: { FR: "Classique", EN: "Classic" },
    title: { FR: "Villes Impériales & Désert", EN: "Imperial Cities & Desert" },
    description: {
      FR: "Un circuit exceptionnel de 10 nuits reliant Casablanca, Rabat, Fès, Meknès et les magnifiques dunes du Sahara à Merzouga.",
      EN: "An exceptional 10-night tour connecting Casablanca, Rabat, Fes, Meknes, and the magnificent Sahara dunes in Merzouga."
    },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension", EN: "Half Board" },
    oldPrice: "",
    price: { FR: "Sur demande", EN: "On request" },
    tag: "tour",
    iconType: "lighthouse",
    city: { FR: "Villes Impériales", EN: "Imperial Cities" },
  },
  {
    id: 7,
    image: "/images/marrakech_sunset_hero.png",
    category: { FR: "Tours & Découvertes", EN: "Tours & Discovery" },
    badge: { FR: "Signature", EN: "Signature" },
    title: { FR: "Grand Tour Impérial & Chefchaouen", EN: "Grand Imperial Tour & Chefchaouen" },
    description: {
      FR: "Notre grand circuit de 14 nuits à travers le Maroc: Chefchaouen, Tanger, Fès, le désert de Merzouga, Marrakech et Essaouira.",
      EN: "Our grand 14-night tour across Morocco: Chefchaouen, Tangier, Fes, Merzouga desert, Marrakech, and Essaouira."
    },
    duration: { FR: "15 jours / 14 nuits", EN: "15 days / 14 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension", EN: "Half Board" },
    oldPrice: "",
    price: { FR: "Sur demande", EN: "On request" },
    tag: "tour",
    iconType: "lighthouse",
    city: { FR: "Villes Impériales & Sud", EN: "Imperial Cities & South" },
  },
  {
    id: 8,
    image: "/images/german_circuit_morocco.jpg",
    category: { FR: "Tours & Découvertes", EN: "Tours & Discovery" },
    badge: { FR: "Aventure", EN: "Adventure" },
    title: { FR: "Trekking Toubkal & Marrakech", EN: "Trekking Toubkal & Marrakech" },
    description: {
      FR: "Combinez 5 nuits de randonnée guidée dans l'Atlas avec séjour au Kasbah du Toubkal et 4 nuits en hôtel tout inclus 5★ à Marrakech.",
      EN: "Combine 5 nights of guided trekking in the Atlas with stay at Kasbah du Toubkal and 4 nights in a 5★ all-inclusive hotel in Marrakech."
    },
    duration: { FR: "10 jours / 9 nuits", EN: "10 days / 9 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Pension Complète & Tout Inclus", EN: "Full Board & All Inclusive" },
    oldPrice: "",
    price: { FR: "4 789 $", EN: "C$ 4,789" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "4 989 $", EN: "C$ 4,989" },
    tag: "tour",
    iconType: "mountain",
    city: { FR: "Marrakech & Atlas", EN: "Marrakech & Atlas" },
  },
  {
    id: 9,
    image: "/images/moroco.webp",
    category: { FR: "Tours & Découvertes", EN: "Tours & Discovery" },
    badge: { FR: "Découverte", EN: "Discovery" },
    title: { FR: "Villes Impériales", EN: "Imperial Cities" },
    description: {
      FR: "Un magnifique circuit de 7 nuits comprenant Marrakech, Beni Mellal, Fès, Meknès, Rabat et Casablanca avec des visites culturelles incluses.",
      EN: "A magnificent 7-night tour covering Marrakech, Beni Mellal, Fes, Meknes, Rabat, and Casablanca with cultural visits included."
    },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Demi-pension", EN: "Half Board" },
    oldPrice: "",
    price: { FR: "Sur demande", EN: "On request" },
    tag: "tour",
    iconType: "lighthouse",
    city: { FR: "Villes Impériales", EN: "Imperial Cities" },
  },
  {
    id: 99,
    image: "/images/corporate_meeting.png",
    category: { FR: "MICE & Corporatif", EN: "MICE & Corporate" },
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Séminaires & Événements d'Affaires", EN: "Meetings, Incentives & Business Events" },
    description: {
      FR: "Des solutions clés en main pour vos congrès, séminaires, retraites de direction et team-building au Maroc.",
      EN: "Turnkey solutions for your conferences, seminars, executive board retreats, and team-building in Morocco."
    },
    duration: { FR: "Sur mesure", EN: "Custom duration" },
    flight: { FR: "Prestations incluses", EN: "All services included" },
    meals: { FR: "Hébergement & Logistique", EN: "Accommodation & Logistics" },
    oldPrice: "",
    price: { FR: "Sur demande", EN: "On request" },
    tag: "mice",
    iconType: "lighthouse",
    city: { FR: "Toutes Villes", EN: "All Cities" },
  }
];




export const dealsList: DealCard[] = [
  {
    id: 10,
    image: "/images/rgdes_parcours_rouge_18.jpg",
    badge: { FR: "Signature", EN: "Signature" },
    title: { FR: "Royal Golf Dar Es Salam", EN: "Royal Golf Dar Es Salam" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "BB ou Demi-pension", EN: "BB or Half Board" },
    inclusions: { FR: "Parcours légendaires Rouge (18T) & Bleu (18T), séjour au Ritz-Carlton", EN: "Legendary Red (18H) & Blue (18H) courses, stay at Ritz-Carlton" },
    oldPrice: "",
    newPrice: { FR: "Sur demande", EN: "On request" },
    tag: "golf",
    city: { FR: "Rabat", EN: "Rabat" },
    promoText: {
      FR: "Chef-d'œuvre légendaire de Robert Trent Jones Sr.",
      EN: "Legendary Robert Trent Jones Sr. Masterpiece"
    }
  },
  {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Hilton Taghazout Hôtel (7N)", EN: "Hilton Taghazout Hotel (7N)" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Demi-pension", EN: "Breakfast or Half board" },
    inclusions: { FR: "4 rondes (Tazegzout, du Soleil, Les Dunes) & voiturette", EN: "4 rounds (Tazegzout, du Soleil, Les Dunes) & buggy" },
    oldPrice: "",
    newPrice: { FR: "3 879 $", EN: "C$ 3,879" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "4 079 $", EN: "C$ 4,079" },
    tag: "golf",
    city: { FR: "Agadir", EN: "Agadir" },
    promoText: {
      FR: "Tarif spécial — Vue piscine & vol inclus",
      EN: "Special Rate — Pool View & Flight Included"
    }
  },
  {
    id: 12,
    image: "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "White Beach Hôtel", EN: "White Beach Hotel" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Tout compris", EN: "All inclusive" },
    inclusions: { FR: "4 rondes (Tazegzout, du Soleil, Les Dunes) & voiturette", EN: "4 rounds (Tazegzout, du Soleil, Les Dunes) & buggy" },
    oldPrice: "",
    newPrice: { FR: "4 255 $", EN: "C$ 4,255" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "4 455 $", EN: "C$ 4,455" },
    tag: "golf",
    city: { FR: "Agadir", EN: "Agadir" },
    promoText: {
      FR: "Séjour de luxe — Vue jardin & vol inclus",
      EN: "Luxury Stay — Garden View & Flight Included"
    }
  },
  {
    id: 13,
    image: "/images/tgz_course_hotel.jpg",
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Hilton Taghazout Hôtel (10N)", EN: "Hilton Taghazout Hotel (10N)" },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Demi-pension", EN: "Breakfast or Half board" },
    inclusions: { FR: "6 rondes de golf, voiturette électrique et vols inclus", EN: "6 rounds of golf, electric buggy and flights included" },
    oldPrice: "",
    newPrice: { FR: "4 989 $", EN: "C$ 4,989" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "5 189 $", EN: "C$ 5,189" },
    tag: "golf",
    city: { FR: "Agadir", EN: "Agadir" },
    promoText: {
      FR: "Tarif spécial 10 Nuits — Chambre double vue jardin",
      EN: "Special 10 Nights Rate — Double garden view room"
    }
  },
  {
    id: 14,
    image: "/images/royal_golf_marrakech_1.jpg",
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "Hôtel du Golf 5★", EN: "Hotel du Golf 5★" },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Tout Compris", EN: "All Inclusive" },
    inclusions: { FR: "6 rondes de golf (Marrakech), hébergement tout inclus 5★", EN: "6 rounds of golf (Marrakech), 5★ all-inclusive stay" },
    oldPrice: "",
    newPrice: { FR: "5 899 $", EN: "C$ 5,899" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "6 099 $", EN: "C$ 6,099" },
    tag: "golf",
    city: { FR: "Marrakech", EN: "Marrakech" },
    promoText: {
      FR: "Golf & Riad Marrakech — Vol direct inclus",
      EN: "Marrakech Golf & Riad — Direct flight included"
    }
  },
  {
    id: 15,
    image: "/images/almaaden_golf_5.jpg",
    badge: { FR: "Exclusif", EN: "Exclusive" },
    title: { FR: "Jaal Riad Hôtel 5★ (10N)", EN: "Jaal Riad Hotel 5★ (10N)" },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Pension Complète", EN: "Breakfast or Full Board" },
    inclusions: { FR: "6 rondes de golf, transfert privé et Adults Only", EN: "6 rounds of golf, private transfers and Adults Only" },
    oldPrice: "",
    newPrice: { FR: "4 669 $", EN: "C$ 4,669" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "4 869 $", EN: "C$ 4,869" },
    tag: "golf",
    city: { FR: "Marrakech", EN: "Marrakech" },
    promoText: {
      FR: "Évasion de luxe Marrakech — Vol direct inclus",
      EN: "Luxury Escape Marrakech — Direct flight included"
    }
  },
  {
    id: 16,
    image: "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal.webp",
    badge: { FR: "Premium", EN: "Premium" },
    title: { FR: "Jaal Riad Hôtel 5★ (7N)", EN: "Jaal Riad Hotel 5★ (7N)" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Petit-déjeuner ou Pension Complète", EN: "Breakfast or Full Board" },
    inclusions: { FR: "4 rondes de golf, transferts et séjour de luxe 7 nuits", EN: "4 rounds of golf, transfers and 7 nights luxury stay" },
    oldPrice: "",
    newPrice: { FR: "3 979 $", EN: "C$ 3,979" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "4 179 $", EN: "C$ 4,179" },
    tag: "golf",
    city: { FR: "Marrakech", EN: "Marrakech" },
    promoText: {
      FR: "Séjour court Marrakech — Vol direct inclus",
      EN: "Short Stay Marrakech — Direct flight included"
    }
  },
  {
    id: 99,
    image: "/images/corporate_meeting.png",
    badge: { FR: "Corporate", EN: "Corporate" },
    title: { FR: "Séminaires & Team-Building", EN: "Seminars & Corporate Retreats" },
    duration: { FR: "Sur mesure", EN: "Custom duration" },
    flight: { FR: "Prestations incluses", EN: "All services included" },
    meals: { FR: "Hébergement & Logistique", EN: "Accommodation & Logistics" },
    inclusions: { FR: "Salles de conférence, logistique, activités de team building", EN: "Conference rooms, local logistics, and customized team building" },
    oldPrice: "",
    newPrice: { FR: "Sur demande", EN: "On request" },
    tag: "mice",
    city: { FR: "Séminaires d'Affaires", EN: "Business Events" },
    promoText: {
      FR: "Solutions clés en main pour entreprises",
      EN: "Turnkey corporate solutions & retreats"
    }
  },
  {
    id: 8,
    image: "/images/german_circuit_morocco.jpg",
    badge: { FR: "Aventure", EN: "Adventure" },
    title: { FR: "Trekking Toubkal & Marrakech", EN: "Trekking Toubkal & Marrakech" },
    duration: { FR: "10 jours / 9 nuits", EN: "10 days / 9 nights" },
    flight: { FR: "Vol inclus", EN: "Flight included" },
    meals: { FR: "Pension Complète & Tout Inclus", EN: "Full Board & All Inclusive" },
    inclusions: { FR: "5 nuits trek Atlas & lodge, 4 nuits resort 5★ Marrakech", EN: "5 nights Atlas trek & lodge, 4 nights 5★ resort Marrakech" },
    oldPrice: "",
    newPrice: { FR: "4 789 $", EN: "C$ 4,789" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "4 989 $", EN: "C$ 4,989" },
    tag: "tour",
    city: { FR: "Marrakech & Atlas", EN: "Marrakech & Atlas" },
    promoText: {
      FR: "Vol direct inclus",
      EN: "Direct Flight Included"
    }
  }
];

export const itinerariesData: Record<string, ItineraryDetail> = {
  "10": {
    id: 10,
    planLabel: { FR: "BB / Demi-pension", EN: "BB / HB Plan" },
    image: "/images/rgdes_parcours_rouge_18.jpg",
    contentImage: "/images/rgdes_parcours_rouge_09_17.jpg",
    title: { FR: "Royal Golf Dar Es Salam", EN: "Royal Golf Dar Es Salam" },
    duration: { FR: "7 jours / 7 nuits", EN: "7 days / 7 nights" },
    // TODO(JAY): confirm final id 10 price with client (flights + all-inclusive now included)
    // TODO(JAY): client to confirm if any other package needs flights moved to inclusions
    cost: { FR: "Sur demande", EN: "On request" },
    overview: {
      FR: "Né de la vision de Feu SM Le Roi Hassan II et dessiné par Robert Trent Jones Sr, le Royal Golf Dar Es Salam est un écosystème naturel somptueux de 440 hectares à seulement 15 minutes du centre de Rabat. Avec son légendaire Parcours Rouge (18 trous, parcours signature), son Parcours Bleu (18 trous) et son Parcours Vert (9 trous), ce site d'exception accueille chaque année le prestigieux Trophée Hassan II. Un séjour inoubliable alliant passion du golf, biodiversité riche et hébergement de très haut standing au Ritz-Carlton Rabat Dar Es Salam.",
      EN: "Born under the vision of His Majesty the late King Hassan II and designed by Robert Trent Jones Sr, Royal Golf Dar Es Salam is a majestic natural ecosystem spanning 440 hectares of forest, just 15 minutes from Rabat city center. Featuring the legendary Red Course (18H, signature), the Blue Course (18H), and the Green Course (9H), this exceptional venue hosts the annual Hassan II Golf Trophy. An unforgettable journey blending golf passion, rich biodiversity, and ultra-luxury stay at The Ritz-Carlton Rabat Dar Es Salam."
    },
    timeline: [
      {
        day: 1,
        title: { FR: "Arrivée à Rabat & Ritz-Carlton", EN: "Arrival in Rabat & Ritz-Carlton" },
        desc: { FR: "Accueil VIP à l'aéroport de Casablanca, transfert privé et installation au Ritz-Carlton Rabat Dar Es Salam 5★. Dîner gastronomique de bienvenue.", EN: "VIP welcome at Casablanca airport, private transfer and check-in at The Ritz-Carlton Rabat Dar Es Salam 5★. Gourmet welcome dinner." }
      },
      {
        day: 2,
        title: { FR: "Parcours Rouge — Le Signature (18 Trous)", EN: "Red Course — The Signature (18 Holes)" },
        desc: { FR: "Une journée complète sur le parcours signature. Voiturette électrique et caddie inclus pour relever les défis de ce chef-d'œuvre restauré par James Duncan.", EN: "A full day on the signature course. Electric cart and caddie included to challenge this masterpiece restored by James Duncan." }
      },
      {
        day: 3,
        title: { FR: "Journée Découverte — Fès", EN: "Discovery Day — Fez" },
        desc: { FR: "Excursion d'une journée complète dans la légendaire ville de Fès : découverte de son riche patrimoine culturel, promenade dans sa médina historique et visite de sites classés au patrimoine mondial de l'UNESCO. Dîner et nuit à l'hôtel.", EN: "Enjoy a full-day tour of the legendary city of Fez, where you'll discover its rich cultural heritage, wander through its historic medina, and visit remarkable UNESCO World Heritage sites. Dinner and overnight at the hotel." }
      },
      {
        day: 4,
        title: { FR: "Parcours Bleu (18 Trous) & Détente", EN: "Blue Course (18 Holes) & Relaxation" },
        desc: { FR: "Ronde matinale sur le Parcours Bleu. Après-midi détente au Spa et à la piscine du Ritz-Carlton, ou visite guidée de la médina de Rabat.", EN: "Morning round on the Blue Course. Afternoon relaxation at the Ritz-Carlton Spa and pool, or guided visit of Rabat's medina." }
      },
      {
        day: 5,
        title: { FR: "Parcours Vert (9 Trous) & Session Practice", EN: "Green Course (9 Holes) & Practice Session" },
        desc: { FR: "Ronde matinale sur le Parcours Vert (9 trous), suivie d'une session d'entraînement au practice du driving range de l'Académie Nationale de Golf. Soirée libre au Ritz-Carlton.", EN: "Morning round on the Green Course (9 holes), followed by a training session at the National Golf Academy driving range. Free evening at the Ritz-Carlton." }
      },
      {
        day: 6,
        title: { FR: "Parcours Bahia Golf (18 Trous)", EN: "Bahia Golf Course (18 Holes)" },
        desc: { FR: "Journée complète sur le Parcours Bahia Golf. Voiturette électrique incluse.", EN: "A full day on the Bahia Golf Course. Electric cart included." }
      },
      {
        day: 7,
        title: { FR: "Journée Libre, Détente & Départ", EN: "Day Off, Relaxation & Departure" },
        desc: { FR: "Journée libre pour profiter de Rabat à votre rythme — détente à l'hôtel, exploration de la médina, visite des marchés locaux ou activités optionnelles telles qu'un hammam traditionnel ou une excursion à la Kasbah des Oudayas. Petit-déjeuner le lendemain matin et transfert privé vers l'aéroport pour votre vol de retour.", EN: "Free day to enjoy Rabat at your own pace — relax at the hotel, explore the medina, visit local markets, or enjoy optional activities such as a traditional hammam or an excursion to the Kasbah of the Udayas. Breakfast the following morning and private transfer to the airport for your return flight." }
      }
    ],
    inclusions: {
      FR: [
        "Vols internationaux aller-retour depuis Montréal",
        "Hébergement 5★ de luxe au Ritz-Carlton Rabat Dar Es Salam",
        "Formule BB ou HB (Petit-déjeuner ou Demi-pension)",
        "Green fees",
        "Voiturette électrique partagée et buggy de practice inclus",
        "Accès complet au Driving Range, Chipping & Putting greens",
        "Transferts privés aéroport ↔ hôtel",
        "Assistance conciergerie bilingue 24/7"
      ],
      EN: [
        "Round-trip international flights from Montreal",
        "Luxury 5★ accommodation at The Ritz-Carlton Rabat Dar Es Salam",
        "BB or HB plan (Bed & Breakfast or Half Board)",
        "Green fees",
        "Shared electric golf cart and practice buggy included",
        "Full access to Driving Range, Chipping & Putting greens",
        "Private airport ↔ hotel transfers",
        "24/7 bilingual concierge assistance"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Repas et boissons non spécifiés",
        "Frais de caddie (env. 30$ CAD par ronde)",
        "Dépenses personnelles et pourboires"
      ],
      EN: [
        "Travel insurance",
        "Meals and beverages not specified",
        "Caddie fee (approx. $30 CAD per round)",
        "Personal expenses and gratuities"
      ]
    },
    options: {
      FR: [
        { name: "Upgrade Suite Ritz-Carlton", price: "Sur demande" },
        { name: "Excursion historique guidée de Rabat", price: "Sur demande" },
        { name: "Leçon privée avec un pro PGA", price: "Sur demande" }
      ],
      EN: [
        { name: "Ritz-Carlton Suite Upgrade", price: "On request" },
        { name: "Guided historical tour of Rabat", price: "On request" },
        { name: "Private pro PGA lesson", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "The Ritz-Carlton Rabat Dar Es Salam",
        stars: 5,
        desc: {
          FR: "Un havre de paix 5★ niché au cœur d'une forêt de chênes, à côté du prestigieux golf. Spa de classe mondiale, restaurants raffinés et service d'exception.",
          EN: "A 5★ oasis nestled in an oak forest adjacent to the prestigious golf course. World-class spa, fine dining, and legendary service."
        },
        link: "https://www.ritzcarlton.com/en/hotels/rbarz-the-ritz-carlton-rabat-dar-es-salam/overview/"
      }
    ],
    activities: [
      {
        title: { FR: "Parcours Rouge Signature (18T)", EN: "Red Signature Course (18H)" },
        desc: {
          FR: "Dessiné par Robert Trent Jones Sr. Un tracé technique et majestueux bordé d'arbres.",
          EN: "Designed by Robert Trent Jones Sr. A technical and majestic tree-lined layout."
        }
      },
      {
        title: { FR: "Parcours Bleu (18T)", EN: "Blue Course (18H)" },
        desc: {
          FR: "Parcours de championnat technique, très apprécié pour son tracé varié.",
          EN: "Technical championship course, highly appreciated for its varied layout."
        }
      },
      {
        title: { FR: "Practice de l'Académie Nationale", EN: "National Academy Practice" },
        desc: {
          FR: "Installations de pratique haut de gamme pour affiner votre swing.",
          EN: "Premium practice facilities to perfect your swing."
        }
      }
    ]
  },
  "11": {
    id: 11,
    image: "/images/tgz_course_ocean.jpg",
    contentImage: "/images/hilton_taghazout_1.avif",
    title: { FR: "Hilton Taghazout Hôtel (7N)", EN: "Hilton Taghazout Hotel (7N)" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: { FR: "À partir de 3 879 $", EN: "Starting from 3,879" },
    originalCost: { FR: "À partir de 4 079 $", EN: "Starting from 4,079" },
    overview: {
      FR: "Offrez-vous un séjour de golf inoubliable à Agadir en résidant au prestigieux Hilton Taghazout Bay Beach Resort 5★. Ce forfait complet comprend les vols directs aller-retour de Montréal à Agadir. Vous profiterez de 7 nuits d'hébergement en chambre double vue piscine, avec formule petit-déjeuner ou option demi-pension. Jouez 4 rondes de golf de classe mondiale sur les plus beaux parcours de la région : Tazegzout Golf (Championship face à l'océan), Golf du Soleil et Golf Les Dunes. Une voiturette électrique partagée est comprise pour chaque ronde.",
      EN: "Indulge in an unforgettable golf trip in Agadir, staying at the prestigious 5★ Hilton Taghazout Bay Beach Resort. This complete package includes direct round-trip flights from Montreal to Agadir. You'll enjoy 7 nights of accommodation in a double occupancy room with pool view, on a daily breakfast (BB) or optional half-board (HB) basis. Play 4 rounds of golf on Agadir's premier courses: Tazegzout Golf (oceanfront Championship course), Golf du Soleil, and Golf Les Dunes. A shared electric cart is included for each round."
    },
    timeline: [
      {
        day: 1,
        title: { FR: "Vol Montréal – Agadir & Installation 5★", EN: "Montreal – Agadir Flight & Arrival" },
        desc: { FR: "Vol direct vers Agadir. Accueil VIP, transfert privé vers le Hilton Taghazout Bay 5★ et verre de bienvenue.", EN: "Direct flight to Agadir. VIP welcome, private transfer to 5★ Hilton Taghazout Bay, and welcome drink." }
      },
      {
        day: 2,
        title: { FR: "Première Ronde — Golf Tazegzout (18 Trous)", EN: "Opening Round — Golf Tazegzout (18 Holes)" },
        desc: { FR: "Première ronde au Tazegzout Golf surplombant l'océan Atlantique. Voiturette électrique partagée.", EN: "Opening round at Tazegzout Golf overlooking the Atlantic Ocean. Shared electric cart included." }
      },
      {
        day: 3,
        title: { FR: "Deuxième Ronde — Golf Du Soleil", EN: "Second Round — Golf Du Soleil" },
        desc: { FR: "Parcours au cœur d'une oasis de palmiers et d'eucalyptus. Voiturette électrique partagée.", EN: "Play amidst palm and eucalyptus trees at Golf Du Soleil with shared electric cart." }
      },
      {
        day: 4,
        title: { FR: "Troisième Ronde — Golf Les Dunes", EN: "Third Round — Golf Les Dunes" },
        desc: { FR: "Tracé exigeant de Cabell B. Robinson à travers la forêt d'eucalyptus.", EN: "Challenging Cabell B. Robinson design through the eucalyptus forest." }
      },
      {
        day: 5,
        title: { FR: "Journée Libre & Spa eforea", EN: "Leisure Day & eforea Spa" },
        desc: { FR: "Journée de détente au resort. Plage privée, piscines et soin au spa eforea.", EN: "Relaxation day at the resort. Private beach, pools, and eforea spa session." }
      },
      {
        day: 6,
        title: { FR: "Quatrième Ronde — Golf Tazegzout", EN: "Fourth Round — Golf Tazegzout" },
        desc: { FR: "Dernière ronde sur le tracé signature de Tazegzout face au coucher de soleil.", EN: "Final golf round on Tazegzout's signature layout facing the sunset." }
      },
      {
        day: 7,
        title: { FR: "Journée Souk & Dîner de Clôture", EN: "Souk Exploration & Farewell Dinner" },
        desc: { FR: "Visite du Souk El Had d'Agadir et dîner gastronomique de clôture.", EN: "Visit Agadir's Souk El Had and enjoy a gourmet farewell dinner." }
      },
      {
        day: 8,
        title: { FR: "Vol de retour vers Montréal", EN: "Return Flight to Montreal" },
        desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport d'Agadir pour votre vol de retour.", EN: "Breakfast, private transfer to Agadir airport for your return flight." }
      }
    ],
    inclusions: {
      FR: [
        "Vols directs aller-retour Montréal – Agadir",
        "7 nuits au Hilton Taghazout Hôtel 5★ en Chambre double Vue Piscine",
        "Formule Petit-déjeuner (BB) ou option Demi-pension",
        "4 rondes de golf (Tazegzout, Golf du Soleil, Golf Les Dunes)",
        "Réservations de Tee times & Voiturette électrique partagée",
        "Transferts privés aéroport ↔ hôtel et terrains de golf",
        "Assistance conciergerie 24/7 sur place"
      ],
      EN: [
        "Direct round-trip flights Montreal – Agadir",
        "7 nights at 5★ Hilton Taghazout Hotel in double occupancy Pool View Room",
        "Daily breakfast (BB) or optional Half Board",
        "4 rounds of golf (Tazegzout, Golf du Soleil, Golf Les Dunes)",
        "Tee time reservations & Shared electric golf cart",
        "Private airport ↔ hotel and golf course transfers",
        "24/7 on-site concierge assistance"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage enregistré",
        "Activités optionnelles hors programme",
        "Repas et boissons non spécifiés",
        "Pourboires"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Optional activities not specified",
        "Meals and beverages not specified",
        "Gratuities"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement Chambre Vue Mer", price: "Sur demande" },
        { name: "Pension Demi-pension", price: "Sur demande" }
      ],
      EN: [
        { name: "Ocean View Room Upgrade", price: "On request" },
        { name: "Half Board Option", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Hilton Taghazout Bay Beach Resort & Spa",
        stars: 5,
        desc: {
          FR: "Resort 5★ haut de gamme en bord de mer, proposant un spa primé, plusieurs piscines et un service d'excellence.",
          EN: "Premium 5★ beachfront resort, featuring an award-winning spa, multiple pools, and excellent service."
        },
        link: "https://www.hilton.com/en/hotels/agatmhi-hilton-taghazout-bay-beach-resort-and-spa/"
      }
    ],
    activities: [
      { title: { FR: "Golf Tazegzout (18T)", EN: "Golf Tazegzout (18H)" }, desc: { FR: "Dessiné par Kyle Phillips face à l'océan.", EN: "Designed by Kyle Phillips facing the ocean." } },
      { title: { FR: "Golf Les Dunes (18T)", EN: "Golf Les Dunes (18H)" }, desc: { FR: "Dessiné par Cabell B. Robinson.", EN: "Designed by Cabell B. Robinson." } },
      { title: { FR: "Golf Du Soleil (18T)", EN: "Golf Du Soleil (18H)" }, desc: { FR: "Splendide oasis de 85 hectares.", EN: "Splendid 85-hectare oasis." } }
    ]
  },
  "12": {
    id: 12,
    image: "/images/pickalbatros-white-beach-resort-in-agadir.jpg",
    contentImage: "/images/deluxe-room-sea-view.jpg",
    title: { FR: "White Beach Hôtel", EN: "White Beach Hotel" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: { FR: "À partir de 4 255\u00A0$", EN: "Starting from 4,255" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "À partir de 4 455\u00A0$", EN: "Starting from 4,455" },
    overview: {
      FR: "Découvrez le summum du confort tout compris au Pickalbatros White Beach Resort 5★ (Adults Only) à Agadir. Ce forfait exclusif de 8 jours comprend des vols directs Montréal – Agadir. Séjournez 7 nuits en Chambre Vue Jardin de luxe avec pension tout compris haut de gamme. Profitez de 4 rondes de golf sur les parcours incontournables d'Agadir (Tazegzout Golf, Golf du Soleil et Golf Les Dunes) avec voiturette électrique partagée incluse. Un voyage d'exception alliant relaxation absolue en bord de mer et golf passionnant.",
      EN: "Discover the pinnacle of adults-only all-inclusive comfort at the 5★ Pickalbatros White Beach Resort in Agadir. This exclusive 8-day package features direct flights from Montreal to Agadir. Stay 7 nights in a luxury Garden View Room with premium all-inclusive boarding. Enjoy 4 rounds of golf on Agadir's premier courses (Tazegzout Golf, Golf du Soleil, and Golf Les Dunes) with a shared electric cart included. A perfect blend of absolute seaside relaxation and exceptional golf."
    },
    timeline: [
      {
        day: 1,
        title: { FR: "Vol Montréal – Agadir & Accueil VIP", EN: "Montreal – Agadir Flight & VIP Welcome" },
        desc: { FR: "Vol direct. Transfert privé et installation au White Beach Resort 5★. Dîner gastronomique inclus.", EN: "Direct flight. Private transfer and check-in at 5★ White Beach Resort. Gourmet dinner included." }
      },
      {
        day: 2,
        title: { FR: "Golf du Soleil — Ronde d'Ouverture", EN: "Golf du Soleil — Opening Round" },
        desc: { FR: "Ronde sur le parcours soigné du Golf du Soleil. Buggy et practice inclus.", EN: "Opening round on the pristine Golf du Soleil course. Buggy and practice range included." }
      },
      {
        day: 3,
        title: { FR: "Tazegzout Golf — Face à l'Atlantique", EN: "Tazegzout Golf — Oceanfront Challenge" },
        desc: { FR: "Ronde à Tazegzout Golf. Défiez ses trous spectaculaires suspendus au-dessus des falaises côtières.", EN: "Golf round at Tazegzout Golf. Challenge its spectacular holes suspended over coastal cliffs." }
      },
      {
        day: 4,
        title: { FR: "Spa de Luxe & Plage Privée", EN: "Luxury Spa & Private Beach" },
        desc: { FR: "Journée libre. Détendez-vous au spa du resort ou profitez du service tout compris sur la plage privée.", EN: "Free day. Relax at the resort's premium spa or enjoy all-inclusive services on the private beach." }
      },
      {
        day: 5,
        title: { FR: "Golf Les Dunes — 18 Trous Robinson", EN: "Golf Les Dunes — 18 Holes Robinson" },
        desc: { FR: "Troisième ronde de golf au Golf Les Dunes sur un tracé varié bordé de genêts et de palmiers.", EN: "Third golf round at Golf Les Dunes on a varied layout bordered by palm trees and broom." }
      },
      {
        day: 6,
        title: { FR: "Deuxième Ronde Tazegzout", EN: "Second Tazegzout Round" },
        desc: { FR: "Dernière ronde à Tazegzout Golf pour apprécier à nouveau les vues imprenables et peaufiner vos coups.", EN: "Final round at Tazegzout Golf to enjoy the stunning ocean views again and polish your shots." }
      },
      {
        day: 7,
        title: { FR: "Détente Tout Compris & Shopping", EN: "All-Inclusive Relaxation & Shopping" },
        desc: { FR: "Journée libre au resort. Cocktails à la piscine, activités de détente ou visite des souks d'Agadir.", EN: "Free day at the resort. Poolside cocktails, relaxing activities, or optional Agadir souks shopping." }
      },
      {
        day: 8,
        title: { FR: "Vol de retour", EN: "Return Flight" },
        desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport d'Agadir pour votre vol direct vers Montréal.", EN: "Breakfast, private transfer to Agadir airport for your direct return flight to Montreal." }
      }
    ],
    inclusions: {
      FR: [
        "Vols directs aller-retour Montréal – Agadir (1er bagage enregistré inclus)",
        "7 nuits à l'hôtel 5★ White Beach Resort en Chambre double Vue Jardin",
        "Pension Tout Compris (All-Inclusive) incluant repas, collations et boissons",
        "4 rondes de golf sur Tazegzout, Golf du Soleil et Golf Les Dunes",
        "Voiturette électrique partagée pour chaque ronde",
        "Assistance conciergerie 24/7 sur place",
        "Toutes les taxes de vol et contribution au FICAV incluse"
      ],
      EN: [
        "Direct round-trip flights Montreal – Agadir (first checked bag included)",
        "7 nights at the 5★ White Beach Resort in a double occupancy Garden View Room",
        "Premium All-Inclusive boarding including meals, snacks, and drinks",
        "4 rounds of golf on Tazegzout, Golf du Soleil, and Golf Les Dunes",
        "Shared electric golf cart for each round",
        "24/7 on-site concierge assistance",
        "All flight taxes & FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage enregistré",
        "Activités optionnelles hors programme",
        "Frais de caddie (env. 30$ CAD par ronde)",
        "Taxes d'hôtel (env. 5$ CAD par nuit)",
        "Dépenses personnelles et pourboires"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Optional activities not specified",
        "Caddie fee (approx. $30 CAD per round)",
        "Hotel taxes (approx. $5 CAD per night)",
        "Personal expenses and gratuities"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Chambre Vue Mer", price: "Sur demande" },
        { name: "Chambre Swim-Up avec accès piscine", price: "Sur demande" },
        { name: "Ronde de golf supplémentaire", price: "Sur demande" }
      ],
      EN: [
        { name: "Sea View Room Upgrade", price: "On request" },
        { name: "Swim-Up Room with pool access", price: "On request" },
        { name: "Extra golf round", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Pickalbatros White Beach Resort Agadir",
        stars: 5,
        desc: {
          FR: "Un resort ultra-moderne 5★ tout compris en bord de mer (réservé aux adultes), offrant des piscines magnifiques, un grand spa et un service d'excellence.",
          EN: "An ultra-modern 5★ adults-only beachfront resort, offering stunning swimming pools, a huge spa, and excellent service."
        },
        link: "https://www.pickalbatros.com/"
      }
    ],
    activities: [
      {
        title: { FR: "Tazegzout Golf (18T)", EN: "Tazegzout Golf (18H)" },
        desc: {
          FR: "Parcours dessiné par Kyle Phillips, mondialement connu pour ses trous côtiers.",
          EN: "Designed by Kyle Phillips, world-renowned for its dramatic coastal holes."
        }
      },
      {
        title: { FR: "Golf Du Soleil (18T)", EN: "Golf Du Soleil (18H)" },
        desc: {
          FR: "Un oasis magnifique de 85 hectares avec des lacs scintillants.",
          EN: "A beautiful 85-hectare oasis with shimmering lakes."
        }
      },
      {
        title: { FR: "Golf Les Dunes (18T)", EN: "Golf Les Dunes (18H)" },
        desc: {
          FR: "Tracé exceptionnel vallonné dessiné par Cabell B. Robinson.",
          EN: "Exceptional hilly layout designed by Cabell B. Robinson."
        }
      }
    ]
  },
  "13": {
    id: 13,
    image: "/images/tgz_course_hotel.jpg",
    contentImage: "/images/hilton_taghazout_2.avif",
    title: { FR: "Hilton Taghazout Hôtel (10N)", EN: "Hilton Taghazout Hotel (10N)" },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    cost: { FR: "À partir de 4 989 $", EN: "Starting from 4,989" },
    originalCost: { FR: "À partir de 5 189 $", EN: "Starting from 5,189" },
    overview: {
      FR: "Séjour prolongé de golf à Agadir au Hilton Taghazout Bay Beach Resort 5★. Ce forfait de 10 nuits comprend des vols aller-retour directs de Montréal (avec Royal Air Maroc via Casablanca, premier bagage et sac de golf inclus) et 6 rondes de golf de championnat sur les plus beaux parcours d'Agadir (Tazegzout, Les Dunes, Du Soleil) avec voiturette électrique partagée.",
      EN: "Extended golf stay in Agadir at the 5★ Hilton Taghazout Bay Beach Resort. This 10-night package includes direct round-trip flights from Montreal (via Casablanca with Royal Air Maroc, first checked bag and golf bag included) and 6 rounds of championship golf on Agadir's top courses (Tazegzout, Les Dunes, Du Soleil) with shared buggy."
    },
    timeline: [
      { day: 1, title: { FR: "Vol Montréal – Agadir & Installation 5★", EN: "Montreal – Agadir Flight & Arrival" }, desc: { FR: "Vol international vers Agadir via Casablanca. Transfert privé vers le Hilton Taghazout Bay 5★. Installation et cocktail d'accueil.", EN: "International flight to Agadir via Casablanca. Private transfer to 5★ Hilton Taghazout Bay. Check-in and welcome drink." } },
      { day: 2, title: { FR: "Première Ronde — Golf Tazegzout (18 Trous)", EN: "Opening Round — Golf Tazegzout (18 Holes)" }, desc: { FR: "Première ronde sur le somptueux parcours de Tazegzout surplombant la baie. Voiturette électrique partagée.", EN: "First golf round on the oceanfront Tazegzout course overlooking the bay. Shared electric cart included." } },
      { day: 3, title: { FR: "Deuxième Ronde — Golf Du Soleil", EN: "Second Round — Golf Du Soleil" }, desc: { FR: "Parcours au cœur d'une oasis de palmiers et d'eucalyptus. Perfectionnez votre swing sur un tracé accessible.", EN: "Play amidst palm and eucalyptus trees at Golf Du Soleil. Refine your swing on a fair layout." } },
      { day: 4, title: { FR: "Troisième Ronde — Golf Les Dunes", EN: "Third Round — Golf Les Dunes" }, desc: { FR: "Ronde de golf sur le tracé exigeant de Cabell B. Robinson à travers la forêt d'eucalyptus.", EN: "Golf round on Cabell B. Robinson's challenging design through eucalyptus trees." } },
      { day: 5, title: { FR: "Journée Libre & Spa eforea", EN: "Leisure Day & eforea Spa" }, desc: { FR: "Journée de détente au resort. Profitez de la plage privée, de la piscine et d'un soin au spa eforea.", EN: "Relaxing day at the resort. Enjoy the private beach, swimming pools, and eforea spa treatment." } },
      { day: 6, title: { FR: "Quatrième Ronde — Golf Tazegzout", EN: "Fourth Round — Golf Tazegzout" }, desc: { FR: "Deuxième passage sur le parcours signature de Tazegzout pour défier les trous du cliffside.", EN: "Return to Tazegzout signature layout to challenge the dramatic cliffside holes." } },
      { day: 7, title: { FR: "Cinquième Ronde — Golf Du Soleil", EN: "Fifth Round — Golf Du Soleil" }, desc: { FR: "Cinquième ronde de golf sur le tracé du Golf Du Soleil. Voiturette électrique partagée.", EN: "Fifth golf round on Golf Du Soleil layout with shared electric cart." } },
      { day: 8, title: { FR: "Sixième Ronde — Golf Les Dunes", EN: "Sixth Round — Golf Les Dunes" }, desc: { FR: "Dernière ronde de compétition pour achever votre séjour golfique en beauté.", EN: "Final competition round to conclude your golf journey in style." } },
      { day: 9, title: { FR: "Journée Escapade — Vallée du Paradis & Souk", EN: "Excursion Day — Paradise Valley & Souk" }, desc: { FR: "Découverte des piscines naturelles de la Vallée du Paradis et visite du célèbre Souk El Had.", EN: "Explore Paradise Valley natural pools and visit the vibrant Souk El Had." } },
      { day: 10, title: { FR: "Détente Plage & Dîner de Clôture", EN: "Beach Relaxation & Farewell Dinner" }, desc: { FR: "Dernière journée farniente au resort et dîner de clôture face au coucher de soleil sur l'Atlantique.", EN: "Final leisure day at the resort followed by a farewell dinner facing Atlantic sunset." } },
      { day: 11, title: { FR: "Vol de retour vers Montréal", EN: "Return Flight to Montreal" }, desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport d'Agadir Al Massira pour votre vol de retour.", EN: "Breakfast, private transfer to Agadir Al Massira airport for your return flight." } }
    ],
    inclusions: {
      FR: [
        "Vols Montréal – Agadir (via Casablanca) avec Royal Air Maroc (1er bagage et sac de golf inclus)",
        "10 nuits au Hilton Taghazout Hôtel 5★ en Chambre double Vue Jardin",
        "Formule Petit-déjeuner (BB) ou option Demi-pension (dîner 3 services, vin, eau, café/thé)",
        "6 rondes de golf (Tazegzout, Golf du Soleil, Golf Les Dunes)",
        "Réservations de Tee times & Voiturette électrique partagée",
        "Transferts privés aéroport ↔ hôtel et terrains de golf",
        "Assistance conciergerie 24/7 sur place",
        "Contribution FICAV incluse"
      ],
      EN: [
        "Montreal – Agadir flights (via Casablanca) with Royal Air Maroc (1st bag & golf bag included)",
        "10 nights at 5★ Hilton Taghazout Hotel in double occupancy Garden View Room",
        "Daily breakfast (BB) or Half Board (HB) with 3-course dinner, wine, water, coffee/tea",
        "6 rounds of golf (Tazegzout, Golf du Soleil, Golf Les Dunes)",
        "Tee time reservations & Shared electric golf cart",
        "Private airport ↔ hotel and golf course transfers",
        "24/7 on-site concierge assistance",
        "FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage enregistré",
        "Activités optionnelles hors programme",
        "Repas et boissons non spécifiés",
        "Pourboires",
        "Frais de caddie (env. 30$ CAD par ronde)",
        "Taxes d'hôtel (env. 5$ CAD par nuit)"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Optional activities not specified",
        "Meals and beverages not specified",
        "Gratuities",
        "Caddie fee (approx. $30 CAD per round)",
        "Hotel taxes (approx. $5 CAD per night)"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement Chambre Vue Mer", price: "Sur demande" },
        { name: "Pension Complète", price: "Sur demande" },
        { name: "Ronde de golf supplémentaire", price: "Sur demande" }
      ],
      EN: [
        { name: "Ocean View Room Upgrade", price: "On request" },
        { name: "Full Board Upgrade", price: "On request" },
        { name: "Extra golf round", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Hilton Taghazout Bay Beach Resort & Spa",
        stars: 5,
        desc: {
          FR: "Resort 5★ haut de gamme en bord de mer, proposant un spa primé, plusieurs piscines et un service d'excellence.",
          EN: "Premium 5★ beachfront resort, featuring an award-winning spa, multiple pools, and excellent service."
        },
        link: "https://www.hilton.com/en/hotels/agatmhi-hilton-taghazout-bay-beach-resort-and-spa/"
      }
    ],
    activities: [
      { title: { FR: "Golf Tazegzout (18T)", EN: "Golf Tazegzout (18H)" }, desc: { FR: "Dessiné par Kyle Phillips face à l'océan.", EN: "Designed by Kyle Phillips facing the ocean." } },
      { title: { FR: "Golf Les Dunes (18T)", EN: "Golf Les Dunes (18H)" }, desc: { FR: "Dessiné par Cabell B. Robinson.", EN: "Designed by Cabell B. Robinson." } },
      { title: { FR: "Golf Du Soleil (18T)", EN: "Golf Du Soleil (18H)" }, desc: { FR: "Splendide oasis de 85 hectares.", EN: "Splendid 85-hectare oasis." } }
    ],
    dates: {
      FR: [
        "26 septembre 2026 – 7 octobre 2026",
        "17 octobre 2026 – 28 octobre 2026",
        "31 octobre 2026 – 11 novembre 2026",
        "21 novembre 2026 – 2 décembre 2026",
        "12 décembre 2026 – 23 décembre 2026",
        "9 janvier 2027 – 20 janvier 2027"
      ],
      EN: [
        "September 26, 2026 – October 07, 2026",
        "October 17, 2026 – October 28, 2026",
        "October 31, 2026 – November 11, 2026",
        "November 21, 2026 – December 02, 2026",
        "December 12, 2026 – December 23, 2026",
        "January 09, 2027 – January 20, 2027"
      ]
    }
  },
  "14": {
    id: 14,
    image: "/images/royal_golf_marrakech_1.jpg",
    contentImage: "/images/royal_golf_marrakech_2.jpg",
    title: { FR: "Hôtel du Golf 5★ (10N)", EN: "Hotel du Golf 5★ (10N)" },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    cost: { FR: "À partir de 5 899 $", EN: "Starting from 5,899" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "À partir de 6 099 $", EN: "Starting from 6,099" },
    overview: {
      FR: "Séjour de golf tout inclus ultime de 10 nuits au somptueux Hôtel du Golf 5★ à Marrakech. Ce forfait de prestige comprend les vols directs Montréal – Marrakech (1er bagage inclus), l'hébergement tout inclus de luxe et 6 rondes de golf de classe mondiale sur les plus beaux parcours de Marrakech (Royal Golf, Amelkis, Noria, Akenza, Maaden, Assoufid, Palm Ourika) avec voiturette électrique.",
      EN: "Ultimate 10-night all-inclusive golf escape at the prestigious 5★ Hotel du Golf in Marrakech. This luxury package includes direct flights from Montreal to Marrakech (1st bag included), premium all-inclusive boarding, and 6 rounds of world-class golf on Marrakech's top courses (Royal Golf, Amelkis, Noria, Akenza, Maaden, Assoufid, Palm Ourika) with electric buggy."
    },
    timeline: [
      { day: 1, title: { FR: "Vol Montréal – Marrakech & Installation", EN: "Montreal – Marrakech Flight & Arrival" }, desc: { FR: "Vol direct. Transfert privé et installation à l'Hôtel du Golf 5★ en formule Tout Inclus.", EN: "Direct flight. Private transfer and check-in at 5★ Hotel du Golf, All-Inclusive basis." } },
      { day: 2, title: { FR: "Royal Golf de Marrakech (18 Trous)", EN: "Royal Golf de Marrakech (18 Holes)" }, desc: { FR: "Ronde d'ouverture sur l'historique Royal Golf de Marrakech, apprécié pour ses allées bordées de palmiers.", EN: "Opening round on the historic Royal Golf de Marrakech, beloved for its palm-lined fairways." } },
      { day: 3, title: { FR: "Golf Amelkis (18 Trous)", EN: "Golf Amelkis (18 Holes)" }, desc: { FR: "Deuxième ronde au Golf Amelkis, tracé spectaculaire dessiné par Cabell B. Robinson.", EN: "Second round at Golf Amelkis, a spectacular layout designed by Cabell B. Robinson." } },
      { day: 4, title: { FR: "Détente au Spa & Exploration", EN: "Spa Relaxation & Exploration" }, desc: { FR: "Journée libre. Détendez-vous au spa du resort ou explorez les magnifiques jardins de l'hôtel.", EN: "Free day. Relax at the resort spa or explore the hotel's gorgeous gardens." } },
      { day: 5, title: { FR: "Golf Noria (18 Trous)", EN: "Golf Noria (18 Holes)" }, desc: { FR: "Troisième ronde de golf au Golf Noria, offrant un tracé unique avec des bassins rectilignes.", EN: "Third round of golf at Golf Noria, featuring a unique design with rectangular reflecting pools." } },
      { day: 6, title: { FR: "Golf Akenza (18 Trous)", EN: "Golf Akenza (18 Holes)" }, desc: { FR: "Quatrième ronde sur les fairways du Golf Akenza pour défier ses obstacles stratégiques.", EN: "Fourth round on the fairways of Golf Akenza to challenge its strategic hazards." } },
      { day: 7, title: { FR: "Shopping Médina & Place Jemaa el-Fna", EN: "Medina Shopping & Jemaa el-Fna" }, desc: { FR: "Journée libre pour visiter la Médina historique, faire du shopping dans les souks et voir Jemaa el-Fna.", EN: "Free day to visit the historic Medina, shop in the souks, and experience Jemaa el-Fna." } },
      { day: 8, title: { FR: "Golf Al Maaden (18 Trous)", EN: "Golf Al Maaden (18 Holes)" }, desc: { FR: "Cinquième ronde au Golf Al Maaden, célèbre pour ses bassins géométriques et ses sculptures.", EN: "Fifth round at Golf Al Maaden, famous for its geometric water hazards and sculptures." } },
      { day: 9, title: { FR: "Golf Assoufid (18 Trous)", EN: "Golf Assoufid (18 Holes)" }, desc: { FR: "Sixième ronde sur le parcours primé d'Assoufid, offrant des vues imprenables sur l'Atlas.", EN: "Sixth round on the award-winning Assoufid course, offering stunning views of the Atlas." } },
      { day: 10, title: { FR: "Détente & Soirée All Inclusive", EN: "Relaxation & All-Inclusive Evening" }, desc: { FR: "Journée de repos complète pour savourer la formule tout inclus et se détendre au soleil.", EN: "Full day of rest to savor the all-inclusive formula and relax under the sun." } },
      { day: 11, title: { FR: "Vol de retour vers Montréal", EN: "Return Flight to Montreal" }, desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport de Marrakech pour votre vol de retour.", EN: "Breakfast, private transfer to Marrakech airport for your return flight." } }
    ],
    inclusions: {
      FR: [
        "Vols directs aller-retour Montréal – Marrakech (1er bagage inclus)",
        "10 nuits à l'Hôtel du Golf 5★ en Chambre double occupancy",
        "Formule Tout Inclus (All Inclusive) incluant repas, collations et boissons à volonté",
        "6 rondes de golf de championnat à Marrakech (Royal, Amelkis, Noria, Akenza, Maaden, Assoufid, Palm Ourika)",
        "Réservations de Tee times & Voiturette électrique partagée",
        "Transferts privés aéroport ↔ hôtel et terrains de golf",
        "Assistance conciergerie 24/7 sur place",
        "Contribution FICAV incluse"
      ],
      EN: [
        "Direct round-trip flights Montreal – Marrakech (first checked bag included)",
        "10 nights at the 5★ Hotel du Golf in a double occupancy room",
        "All Inclusive plan including meals, snacks, and unlimited drinks",
        "6 rounds of championship golf in Marrakech (Royal, Amelkis, Noria, Akenza, Maaden, Assoufid, Palm Ourika)",
        "Tee time reservations & Shared electric golf cart",
        "Private airport ↔ hotel and golf course transfers",
        "24/7 on-site concierge assistance",
        "FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage enregistré",
        "Activités optionnelles hors programme",
        "Repas et boissons non spécifiés dans la formule",
        "Pourboires et dépenses personnelles",
        "Frais de caddie (env. 30$ CAD par ronde)",
        "Taxes d'hôtel (env. 5$ CAD par nuit)"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Optional activities not specified",
        "Meals and beverages not included in the plan",
        "Gratuities and personal expenses",
        "Caddie fee (approx. $30 CAD per round)",
        "Hotel taxes (approx. $5 CAD per night)"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Suite", price: "Sur demande" },
        { name: "Excursion d'une journée dans l'Atlas", price: "Sur demande" },
        { name: "Ronde de golf supplémentaire", price: "Sur demande" }
      ],
      EN: [
        { name: "Suite Upgrade", price: "On request" },
        { name: "Full day Atlas Mountains excursion", price: "On request" },
        { name: "Extra golf round", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Hôtel du Golf Marrakech 5★",
        stars: 5,
        desc: {
          FR: "Élégant hôtel 5★ situé au cœur du circuit de Palmeraie, offrant une architecture contemporaine, de superbes piscines et des options gastronomiques exceptionnelles.",
          EN: "Elegant 5★ hotel set in the heart of the Palmeraie circuit, offering contemporary architecture, superb pools, and exceptional dining options."
        },
        link: "https://www.pickalbatros.com/hotel-du-golf-palmeraie"
      }
    ],
    activities: [
      { title: { FR: "Royal Golf de Marrakech (18T)", EN: "Royal Golf de Marrakech (18H)" }, desc: { FR: "Le parcours légendaire datant de 1933.", EN: "The legendary course dating back to 1933." } },
      { title: { FR: "Golf Assoufid (18T)", EN: "Golf Assoufid (18H)" }, desc: { FR: "Dessiné par Niall Cameron avec vue Atlas.", EN: "Designed by Niall Cameron with Atlas views." } },
      { title: { FR: "Golf Al Maaden (18T)", EN: "Golf Al Maaden (18H)" }, desc: { FR: "Dessiné par Kyle Phillips.", EN: "Designed by Kyle Phillips." } }
    ],
    dates: {
      FR: [
        "23 septembre 2026 – 4 octobre 2026",
        "7 octobre 2026 – 18 octobre 2026",
        "21 octobre 2026 – 1 novembre 2026",
        "18 novembre 2026 – 29 novembre 2026",
        "9 décembre 2026 – 20 décembre 2026",
        "6 janvier 2027 – 17 janvier 2027"
      ],
      EN: [
        "September 23, 2026 – October 04, 2026",
        "October 7, 2026 – October 18, 2026",
        "October 21, 2026 – November 01, 2026",
        "November 18, 2026 – November 29, 2026",
        "December 09, 2026 – December 20, 2026",
        "January 06, 2027 – January 17, 2027"
      ]
    }
  },
  "15": {
    id: 15,
    image: "/images/almaaden_golf_5.jpg",
    contentImage: "/images/almaaden_golf_3.jpg",
    title: { FR: "Jaal Riad Hôtel 5★ (10N)", EN: "Jaal Riad Hotel 5★ (10N)" },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    cost: { FR: "À partir de 4 669 $", EN: "Starting from 4,669" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "À partir de 4 869 $", EN: "Starting from 4,869" },
    overview: {
      FR: "Découvrez Marrakech au Jaal Riad Resort 5★ (Adults Only). Ce forfait de golf de prestige de 10 nuits comprend des vols directs Montréal – Marrakech, l'hébergement haut de gamme en formule petit-déjeuner (BB) ou pension complète (FB), et 6 rondes de golf sur les parcours emblématiques de Marrakech avec voiturette.",
      EN: "Discover Marrakech staying at the 5★ Jaal Riad Resort (Adults Only). This premium 10-night golf package features direct flights from Montreal to Marrakech, upscale accommodation with daily breakfast (BB) or full board (FB) option, and 6 rounds of golf on Marrakech's iconic courses with shared buggy."
    },
    timeline: [
      { day: 1, title: { FR: "Vol Montréal – Marrakech & Installation", EN: "Montreal – Marrakech Flight & Arrival" }, desc: { FR: "Vol direct. Accueil VIP, transfert privé et installation au Jaal Riad Hôtel 5★.", EN: "Direct flight. VIP welcome, private transfer and check-in at 5★ Jaal Riad Hotel." } },
      { day: 2, title: { FR: "Golf du Soleil / Royal Golf (18 Trous)", EN: "Royal Golf de Marrakech (18 Holes)" }, desc: { FR: "Première ronde sur le parcours historique du Royal Golf de Marrakech.", EN: "First round on the historical course of Royal Golf de Marrakech." } },
      { day: 3, title: { FR: "Golf Amelkis (18 Trous)", EN: "Golf Amelkis (18 Holes)" }, desc: { FR: "Deuxième ronde au Golf Amelkis, parcours exigeant bordé d'arbres.", EN: "Second round at Golf Amelkis, a challenging tree-lined course." } },
      { day: 4, title: { FR: "Spa & Détente Adults Only", EN: "Spa & Relaxation Adults Only" }, desc: { FR: "Journée libre. Profitez de l'atmosphère calme et reposante du Jaal Riad, réservé aux adultes.", EN: "Free day. Enjoy the quiet and restful adults-only atmosphere of Jaal Riad." } },
      { day: 5, title: { FR: "Golf Noria (18 Trous)", EN: "Golf Noria (18 Holes)" }, desc: { FR: "Troisième ronde de golf au Golf Noria, offrant un tracé au design géométrique contemporain.", EN: "Third round of golf at Golf Noria, featuring a contemporary geometric design." } },
      { day: 6, title: { FR: "Golf Akenza (18 Trous)", EN: "Golf Akenza (18 Holes)" }, desc: { FR: "Quatrième ronde de golf sur le tracé technique d'Akenza.", EN: "Fourth round of golf on the technical layout of Akenza." } },
      { day: 7, title: { FR: "Visite guidée de la Médina", EN: "Medina Guided Tour" }, desc: { FR: "Journée libre pour explorer les souks, visiter le Palais de la Bahia et le Musée Yves Saint Laurent.", EN: "Free day to explore the souks, visit the Bahia Palace and the Yves Saint Laurent Museum." } },
      { day: 8, title: { FR: "Golf Al Maaden (18 Trous)", EN: "Golf Al Maaden (18 Holes)" }, desc: { FR: "Cinquième ronde au Golf Al Maaden, magnifique parcours dessiné par Kyle Phillips.", EN: "Fifth round at Golf Al Maaden, a beautiful course designed by Kyle Phillips." } },
      { day: 9, title: { FR: "Golf Assoufid (18 Trous)", EN: "Golf Assoufid (18 Holes)" }, desc: { FR: "Sixième ronde au Golf Assoufid, offrant des panoramas magiques sur les cimes enneigées.", EN: "Sixth round at Golf Assoufid, offering magical views of the snow-capped mountains." } },
      { day: 10, title: { FR: "Relaxation & Soirée Traditionnelle", EN: "Relaxation & Traditional Dinner" }, desc: { FR: "Profitez de votre dernière journée pour un massage au spa ou des achats de souvenirs de dernière minute.", EN: "Enjoy your final day for a massage at the spa or last-minute souvenir shopping." } },
      { day: 11, title: { FR: "Vol de retour vers Montréal", EN: "Return Flight to Montreal" }, desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport pour votre vol de retour.", EN: "Breakfast, private transfer to the airport for your return flight." } }
    ],
    inclusions: {
      FR: [
        "Vols directs aller-retour Montréal – Marrakech (1er bagage inclus)",
        "10 nuits au Jaal Riad Hôtel 5★ en Chambre double double occupancy (Adults Only)",
        "Formule Petit-déjeuner (BB) ou pension complète (Full Board) selon option",
        "6 rondes de golf (Royal, Amelkis, Noria, Akenza, Maaden, Assoufid, Palm Ourika)",
        "Réservations de Tee times & Voiturette électrique partagée",
        "Transferts privés aéroport ↔ hôtel et terrains de golf",
        "Assistance conciergerie 24/7 sur place",
        "Contribution FICAV incluse"
      ],
      EN: [
        "Direct round-trip flights Montreal – Marrakech (first checked bag included)",
        "10 nights at the 5★ Jaal Riad Hotel in a double occupancy room (Adults Only)",
        "Daily breakfast (BB) or optional Full Board (FB)",
        "6 rounds of golf (Royal, Amelkis, Noria, Akenza, Maaden, Assoufid, Palm Ourika)",
        "Tee time reservations & Shared electric golf cart",
        "Private airport ↔ hotel and golf course transfers",
        "24/7 on-site concierge assistance",
        "FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage enregistré",
        "Activités optionnelles hors programme",
        "Repas et boissons non spécifiés",
        "Pourboires et dépenses personnelles",
        "Frais de caddie (env. 30$ CAD par ronde)",
        "Taxes d'hôtel (env. 5$ CAD par nuit)"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Optional activities not specified",
        "Meals and beverages not specified",
        "Gratuities and personal expenses",
        "Caddie fee (approx. $30 CAD per round)",
        "Hotel taxes (approx. $5 CAD per night)"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Chambre Deluxe", price: "Sur demande" },
        { name: "Excursion Essaouira d'une journée", price: "Sur demande" },
        { name: "Ronde de golf supplémentaire", price: "Sur demande" }
      ],
      EN: [
        { name: "Deluxe Room Upgrade", price: "On request" },
        { name: "Full day Essaouira excursion", price: "On request" },
        { name: "Extra golf round", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Jaal Riad Resort 5★",
        stars: 5,
        desc: {
          FR: "Splendide resort 5★ réservé aux adultes, alliant design contemporain et touches artisanales marocaines, spa majestueux et service d'exception.",
          EN: "Splendid adults-only 5★ resort blending contemporary design and Moroccan artisanal touches, majestic spa, and exceptional service."
        },
        link: "https://www.jaalriad.com/"
      }
    ],
    activities: [
      { title: { FR: "Royal Golf de Marrakech (18T)", EN: "Royal Golf de Marrakech (18H)" }, desc: { FR: "Parcours historique de 1933.", EN: "Historic course from 1933." } },
      { title: { FR: "Golf Assoufid (18T)", EN: "Golf Assoufid (18H)" }, desc: { FR: "Dessiné par Niall Cameron.", EN: "Designed by Niall Cameron." } },
      { title: { FR: "Golf Al Maaden (18T)", EN: "Golf Al Maaden (18H)" }, desc: { FR: "Dessiné par Kyle Phillips.", EN: "Designed by Kyle Phillips." } }
    ],
    dates: {
      FR: [
        "23 septembre 2026 – 4 octobre 2026",
        "7 octobre 2026 – 18 octobre 2026",
        "21 octobre 2026 – 1 novembre 2026",
        "18 novembre 2026 – 29 novembre 2026",
        "9 décembre 2026 – 20 décembre 2026",
        "6 janvier 2027 – 17 janvier 2027"
      ],
      EN: [
        "September 23, 2026 – October 04, 2026",
        "October 7, 2026 – October 18, 2026",
        "October 21, 2026 – November 01, 2026",
        "November 18, 2026 – November 29, 2026",
        "December 09, 2026 – December 20, 2026",
        "January 06, 2027 – January 17, 2027"
      ]
    }
  },
  "16": {
    id: 16,
    image: "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal.webp",
    contentImage: "/images/client_request/hotel_jaal_marrakech/hotel_le_jaal_(2).webp",
    title: { FR: "Jaal Riad Hôtel 5★ (7N)", EN: "Jaal Riad Hotel 5★ (7N)" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: { FR: "À partir de 3 979 $", EN: "Starting from 3,979" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "À partir de 4 179 $", EN: "Starting from 4,179" },
    overview: {
      FR: "Escapade golf de 7 nuits à Marrakech au Jaal Riad Resort 5★ (Adults Only). Ce forfait comprend des vols directs Montréal – Marrakech, l'hébergement de luxe en formule petit-déjeuner (BB) ou pension complète (FB), et 4 rondes de golf de championnat sur les plus beaux parcours de Marrakech avec voiturette électrique partagée.",
      EN: "7-night golf getaway to Marrakech staying at the 5★ Jaal Riad Resort (Adults Only). This package features direct flights from Montreal to Marrakech, luxury accommodation with daily breakfast (BB) or full board (FB), and 4 rounds of championship golf on Marrakech's premier courses with shared buggy."
    },
    timeline: [
      { day: 1, title: { FR: "Vol Montréal – Marrakech & Installation", EN: "Montreal – Marrakech Flight & Arrival" }, desc: { FR: "Vol direct. Transfert privé et installation au Jaal Riad Hôtel 5★.", EN: "Direct flight. Private transfer and check-in at 5★ Jaal Riad Hotel." } },
      { day: 2, title: { FR: "Royal Golf de Marrakech (18 Trous)", EN: "Royal Golf de Marrakech (18 Holes)" }, desc: { FR: "Première ronde sur le parcours historique du Royal Golf de Marrakech.", EN: "First round on the historical course of Royal Golf de Marrakech." } },
      { day: 3, title: { FR: "Golf Amelkis (18 Trous)", EN: "Golf Amelkis (18 Holes)" }, desc: { FR: "Deuxième ronde au Golf Amelkis, parcours de championnat dessiné par Cabell B. Robinson.", EN: "Second round at Golf Amelkis, a championship course designed by Cabell B. Robinson." } },
      { day: 4, title: { FR: "Détente au Spa & Piscine", EN: "Spa Relaxation & Pool" }, desc: { FR: "Journée libre pour relaxer près de la piscine ou réserver un hammam traditionnel.", EN: "Free day to relax near the pool or book a traditional hammam." } },
      { day: 5, title: { FR: "Golf Noria (18 Trous)", EN: "Golf Noria (18 Holes)" }, desc: { FR: "Troisième ronde de golf au Golf Noria, offrant un tracé géométrique exceptionnel.", EN: "Third round of golf at Golf Noria, offering a stunning geometric layout." } },
      { day: 6, title: { FR: "Golf Al Maaden (18 Trous)", EN: "Golf Al Maaden (18 Holes)" }, desc: { FR: "Quatrième ronde de golf sur les fairways vallonnés d'Al Maaden.", EN: "Fourth round of golf on the rolling fairways of Al Maaden." } },
      { day: 7, title: { FR: "Exploration des Souks & Médina", EN: "Souks & Medina Exploration" }, desc: { FR: "Journée libre pour visiter Marrakech, faire des emplettes ou vous prélasser dans les salons du Riad.", EN: "Free day to visit Marrakech, go shopping, or lounge in the Riad's salons." } },
      { day: 8, title: { FR: "Vol de retour vers Montréal", EN: "Return Flight to Montreal" }, desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport pour votre vol de retour.", EN: "Breakfast, private transfer to the airport for your return flight." } }
    ],
    inclusions: {
      FR: [
        "Vols directs aller-retour Montréal – Marrakech (1er bagage inclus)",
        "7 nuits au Jaal Riad Hôtel 5★ en Chambre double double occupancy (Adults Only)",
        "Formule Petit-déjeuner (BB) ou pension complète (Full Board) selon option",
        "4 rondes de golf (Royal, Amelkis, Noria, Akenza, Maaden, Assoufid, Palm Ourika)",
        "Réservations de Tee times & Voiturette électrique partagée",
        "Transferts privés aéroport ↔ hôtel et terrains de golf",
        "Assistance conciergerie 24/7 sur place",
        "Contribution FICAV incluse"
      ],
      EN: [
        "Direct round-trip flights Montreal – Marrakech (first checked bag included)",
        "7 nights at the 5★ Jaal Riad Hotel in a double occupancy room (Adults Only)",
        "Daily breakfast (BB) or optional Full Board (FB)",
        "4 rounds of golf (Royal, Amelkis, Noria, Akenza, Maaden, Assoufid, Palm Ourika)",
        "Tee time reservations & Shared electric golf cart",
        "Private airport ↔ hotel and golf course transfers",
        "24/7 on-site concierge assistance",
        "FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage enregistré",
        "Activités optionnelles hors programme",
        "Repas et boissons non spécifiés dans la formule",
        "Pourboires et dépenses personnelles",
        "Frais de caddie (env. 30$ CAD par ronde)",
        "Taxes d'hôtel (env. 5$ CAD par nuit)"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Optional activities not specified",
        "Meals and beverages not included in the plan",
        "Gratuities and personal expenses",
        "Caddie fee (approx. $30 CAD per round)",
        "Hotel taxes (approx. $5 CAD per night)"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Chambre Deluxe", price: "Sur demande" },
        { name: "Excursion à la journée à Essaouira", price: "Sur demande" },
        { name: "Ronde de golf supplémentaire", price: "Sur demande" }
      ],
      EN: [
        { name: "Deluxe Room Upgrade", price: "On request" },
        { name: "Full day Essaouira excursion", price: "On request" },
        { name: "Extra golf round", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Jaal Riad Resort 5★",
        stars: 5,
        desc: {
          FR: "Superbe hôtel 5★ de luxe réservé aux adultes, combinant design contemporain et touches artisanales marocaines, spa majestueux et service d'exception.",
          EN: "Superb adults-only 5★ luxury hotel, combining contemporary design and Moroccan artisanal touches, majestic spa, and exceptional service."
        },
        link: "https://www.jaalriad.com/"
      }
    ],
    activities: [
      { title: { FR: "Royal Golf de Marrakech (18T)", EN: "Royal Golf de Marrakech (18H)" }, desc: { FR: "Parcours historique de 1933.", EN: "Historic course from 1933." } },
      { title: { FR: "Golf Amelkis (18T)", EN: "Golf Amelkis (18H)" }, desc: { FR: "Dessiné par Cabell B. Robinson.", EN: "Designed by Cabell B. Robinson." } },
      { title: { FR: "Golf Al Maaden (18T)", EN: "Golf Al Maaden (18H)" }, desc: { FR: "Dessiné par Kyle Phillips.", EN: "Designed by Kyle Phillips." } }
    ],
    dates: {
      FR: [
        "26 septembre 2026 – 4 octobre 2026",
        "17 octobre 2026 – 25 octobre 2026",
        "31 octobre 2026 – 8 novembre 2026",
        "21 novembre 2026 – 29 novembre 2026",
        "12 décembre 2026 – 20 décembre 2026",
        "9 janvier 2027 – 17 janvier 2027"
      ],
      EN: [
        "September 26, 2026 – October 04, 2026",
        "October 17, 2026 – October 25, 2026",
        "October 31, 2026 – November 08, 2026",
        "November 21, 2026 – November 29, 2026",
        "December 12, 2026 – December 20, 2026",
        "January 09, 2027 – January 17, 2027"
      ]
    }
  },
  "17": {
    id: 17,
    image: "/Tangier.jpg",
    contentImage: "/Tangier.jpg",
    title: { FR: "Tanger Golf & Resort 5★ (7N)", EN: "Tangier Golf & Resort 5★ (7N)" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: { FR: "Sur demande", EN: "On request" },
    overview: {
      FR: "Découvrez la magie du golf au nord du Maroc à Tanger. Ce séjour d'exception de 7 nuits en hôtel 5★ comprend vos vols au départ de Montréal et 4 rondes de golf de championnat sur le mythique Royal Golf de Tanger (fondé en 1914, plus ancien golf d'Afrique) et l'Al Houara Golf Club bordant l'océan Atlantique. Voiturette électrique partagée et transferts privés inclus.",
      EN: "Discover golf magic in northern Morocco in Tangier. This 7-night luxury package in a 5★ resort includes flights departing from Montreal and 4 championship golf rounds on the historic Royal Golf de Tanger (founded in 1914, Africa's oldest golf course) and the oceanfront Al Houara Golf Club. Shared buggy and private transfers included."
    },
    timeline: [
      {
        day: 1,
        title: { FR: "Vol Montréal – Tanger & Installation 5★", EN: "Montreal – Tangier Flight & 5★ Check-In" },
        desc: { FR: "Vol international. Accueil à l'aéroport de Tanger Ibn Battouta, transfert privé et installation en resort 5★ face à l'océan.", EN: "International flight. Welcome at Tangier Ibn Battouta Airport, private transfer and check-in at 5★ oceanfront resort." }
      },
      {
        day: 2,
        title: { FR: "Royal Golf de Tanger — Tracé Historique", EN: "Royal Golf de Tanger — Historic Course" },
        desc: { FR: "Première ronde au Royal Golf de Tanger, fondé en 1914. Un digne tracé au cœur de pins et d'eucalyptus avec buggy inclus.", EN: "First golf round at Royal Golf de Tanger, founded in 1914. A historic pine and eucalyptus course with buggy included." }
      },
      {
        day: 3,
        title: { FR: "Al Houara Golf Club — Parcours Côtier", EN: "Al Houara Golf Club — Coastal Layout" },
        desc: { FR: "Deuxième ronde à l'Al Houara Golf Club, tracé de championnat dessiné par Graham Cooke & Vijay Singh au bord de l'océan.", EN: "Second golf round at Al Houara Golf Club, a championship oceanfront layout designed by Graham Cooke & Vijay Singh." }
      },
      {
        day: 4,
        title: { FR: "Découverte de Tanger & Cap Spartel", EN: "Exploring Tangier & Cap Spartel" },
        desc: { FR: "Journée libre. Visite guidée du Cap Spartel, des Grottes d'Hercule et de la Kasbah historique surplombant le détroit de Gibraltar.", EN: "Free day. Guided tour of Cap Spartel, Hercules Caves, and the historic Kasbah overlooking the Strait of Gibraltar." }
      },
      {
        day: 5,
        title: { FR: "Deuxième Ronde — Royal Golf de Tanger", EN: "Second Round — Royal Golf de Tanger" },
        desc: { FR: "Troisième ronde de golf pour affiner votre jeu sur les vallonnements et greens rapides du Royal Golf.", EN: "Third golf round to refine your game on the rolling fairways and fast greens of the Royal Golf." }
      },
      {
        day: 6,
        title: { FR: "Deuxième Ronde — Al Houara Golf Club", EN: "Second Round — Al Houara Golf Club" },
        desc: { FR: "Quatrième ronde de golf sur le tracé marin d'Al Houara pour profiter une seconde fois du vent et des vues océaniques.", EN: "Fourth golf round on Al Houara coastal links to enjoy the ocean breeze and dramatic views." }
      },
      {
        day: 7,
        title: { FR: "Détente en Resort & Médina de Tanger", EN: "Resort Relaxation & Tangier Medina" },
        desc: { FR: "Dernière journée libre pour vous détendre au spa, profiter de la piscine et faire vos achats dans la médina.", EN: "Final free day relaxing at the spa, poolside lounging, and local medina shopping." }
      },
      {
        day: 8,
        title: { FR: "Vol de retour", EN: "Return Flight" },
        desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport de Tanger et vol de retour vers Montréal.", EN: "Breakfast, private transfer to Tangier airport and return flight to Montreal." }
      }
    ],
    inclusions: {
      FR: [
        "Vols internationaux aller-retour Montréal – Tanger",
        "7 nuits en Hôtel / Resort 5★ de luxe à Tanger",
        "Formule Petit-déjeuner quotidien (BB) ou option Demi-pension (HB)",
        "4 rondes de golf sur le Royal Golf de Tanger et Al Houara Golf Club",
        "Réservations de Tee times & Voiturette électrique partagée",
        "Transferts privés aéroport ↔ hôtel et terrains de golf",
        "Assistance conciergerie 24/7 sur place"
      ],
      EN: [
        "Round-trip international flights Montreal – Tangier",
        "7 nights at 5★ luxury Resort / Hotel in Tangier",
        "Daily breakfast (BB) or optional Half Board (HB)",
        "4 rounds of golf on Royal Golf de Tanger and Al Houara Golf Club",
        "Tee time reservations & Shared electric golf cart",
        "Private airport ↔ hotel and golf transfers",
        "24/7 on-site concierge assistance"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Repas et boissons non spécifiés",
        "Dépenses personnelles et pourboires"
      ],
      EN: [
        "Travel insurance",
        "Meals and beverages not specified",
        "Personal expenses and gratuities"
      ]
    },
    options: {
      FR: [
        { name: "Excursion d'une journée à Chefchaouen", price: "Sur demande" },
        { name: "Surclassement en Suite 5★", price: "Sur demande" }
      ],
      EN: [
        { name: "Day trip excursion to Chefchaouen", price: "On request" },
        { name: "5★ Suite Upgrade", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Hilton Tangier Al Houara Resort & Spa 5★",
        stars: 5,
        desc: {
          FR: "Resort 5★ haut de gamme en bord de mer à Tanger, proposant un spa d'exception, plusieurs piscines et un accès direct au golf.",
          EN: "Premium 5★ beachfront resort in Tangier featuring a luxury spa, pools, and direct golf access."
        },
        link: "https://www.hilton.com"
      }
    ],
    activities: [
      {
        title: { FR: "Royal Golf de Tanger (18T)", EN: "Royal Golf de Tanger (18H)" },
        desc: {
          FR: "Fondé en 1914, le plus ancien golf d'Afrique au cœur des pins.",
          EN: "Founded in 1914, Africa's oldest golf course nestled in pines."
        }
      },
      {
        title: { FR: "Al Houara Golf Club (18T)", EN: "Al Houara Golf Club (18H)" },
        desc: {
          FR: "Parcours de championnat sur la côte Atlantique dessiné par Graham Cooke & Vijay Singh.",
          EN: "Oceanfront championship layout designed by Graham Cooke & Vijay Singh."
        }
      }
    ],
    dates: {
      FR: [
        "25 septembre 2026 – 3 octobre 2026",
        "2 octobre 2026 – 10 octobre 2026",
        "9 octobre 2026 – 17 octobre 2026",
        "16 octobre 2026 – 24 octobre 2026"
      ],
      EN: [
        "September 25, 2026 – October 3, 2026",
        "October 2, 2026 – October 10, 2026",
        "October 9, 2026 – October 17, 2026",
        "October 16, 2026 – October 24, 2026"
      ]
    }
  },
  "18": {
    id: 18,
    planLabel: { FR: "BB / Demi-pension", EN: "BB / HB Plan" },
    image: "/michlifen.jpg",
    contentImage: "/michlifen.jpg",
    title: { FR: "Michlifen Resort & Golf 5★", EN: "Michlifen Resort & Golf 5★" },
    duration: { FR: "7 jours / 7 nuits", EN: "7 days / 7 nights" },
    cost: { FR: "Sur demande", EN: "On request" },
    overview: {
      FR: "Le Michlifen Golf & Country Club à Ifrane est un parcours d'altitude d'exception dessiné par la légende Jack Nicklaus (18 trous, par 72). Niché à 1 650 mètres d'altitude au cœur des magnifiques forêts de cèdres du Moyen Atlas, ce joyau offre des panoramas alpins spectaculaires, une académie de golf à la pointe de la technologie et un séjour somptueux au Michlifen Resort & Golf 5★.",
      EN: "Michlifen Golf & Country Club in Ifrane is an exceptional high-altitude championship course designed by golf legend Jack Nicklaus (18 holes, par 72). Perched at 1,650 meters altitude amidst the cedar forests of the Middle Atlas mountains, this jewel offers breathtaking mountain views, a state-of-the-art golf academy, and an ultra-luxury stay at the 5★ Michlifen Resort & Golf."
    },
    timeline: [
      {
        day: 1,
        title: { FR: "Arrivée & Installation au Michlifen Resort 5★", EN: "Arrival & Check-in at Michlifen Resort 5★" },
        desc: { FR: "Accueil VIP à l'aéroport de Fès-Saïss, transfert privé vers Ifrane et installation au Michlifen Resort & Golf 5★. Dîner gastronomique de bienvenue.", EN: "VIP welcome at Fez-Saïss airport, private transfer to Ifrane, and check-in at 5★ Michlifen Resort & Golf. Gourmet welcome dinner." }
      },
      {
        day: 2,
        title: { FR: "Michlifen Golf — Jack Nicklaus Signature (18 Trous)", EN: "Michlifen Golf — Jack Nicklaus Signature (18 Holes)" },
        desc: { FR: "Première ronde sur le tracé spectaculaire d'altitude. Voiturette électrique et buggy de practice inclus.", EN: "First golf round on the spectacular high-altitude course. Electric cart and practice buggy included." }
      },
      {
        day: 3,
        title: { FR: "Académie de Golf & Session Swing", EN: "Golf Academy & Swing Session" },
        desc: { FR: "Session personnalisée à l'Académie de Golf Michlifen équipée des dernières technologies d'analyse de swing. Après-midi détente au Spa alpin.", EN: "Personalized coaching session at Michlifen Golf Academy with cutting-edge swing tech. Afternoon relaxation at the Alpine Spa." }
      },
      {
        day: 4,
        title: { FR: "Deuxième Ronde Michlifen & Panoramas du Moyen Atlas", EN: "Second Michlifen Round & Middle Atlas Panoramas" },
        desc: { FR: "Deuxième ronde de golf pour relever le défi des trous signatures surplombant les falaises de cèdres.", EN: "Second golf round challenging the signature holes overlooking cedar cliffs." }
      },
      {
        day: 5,
        title: { FR: "Journée Découverte — Fès Médina UNESCO", EN: "Discovery Day — Fez UNESCO Medina" },
        desc: { FR: "Excursion d'une journée complète dans la ville historique de Fès : découverte des souks artisanaux et des palais impériaux avec un guide certifié.", EN: "Full-day excursion to historic Fez: explore artisanal souks and imperial palaces with a certified local guide." }
      },
      {
        day: 6,
        title: { FR: "Troisième Ronde Michlifen & Challenge d'Altitude", EN: "Third Michlifen Round & High Altitude Challenge" },
        desc: { FR: "Dernière ronde de championnat sur le tracé Jack Nicklaus pour peaufiner votre carte de score.", EN: "Final championship round on the Jack Nicklaus layout to refine your scorecard." }
      },
      {
        day: 7,
        title: { FR: "Détente au Spa Alpin, Gastronomie & Départ", EN: "Alpine Spa Relaxation, Fine Dining & Departure" },
        desc: { FR: "Matinée libre au spa et déjeuner au restaurant gastronomique. Transfert privé vers l'aéroport pour votre vol de retour.", EN: "Free morning at the spa and lunch at the fine-dining restaurant. Private airport transfer for your return flight." }
      }
    ],
    inclusions: {
      FR: [
        "Vols internationaux aller-retour depuis Montréal",
        "Hébergement 5★ de luxe au Michlifen Resort & Golf à Ifrane",
        "Formule BB ou HB (Petit-déjeuner ou Demi-pension)",
        "Rondes de golf sur le parcours Michlifen Jack Nicklaus Signature",
        "Voiturette électrique partagée et buggy de practice inclus",
        "Accès complet au Driving Range & Académie de Golf",
        "Transferts privés aéroport ↔ hôtel",
        "Assistance conciergerie bilingue 24/7"
      ],
      EN: [
        "Round-trip international flights from Montreal",
        "Luxury 5★ accommodation at Michlifen Resort & Golf in Ifrane",
        "BB or HB plan (Bed & Breakfast or Half Board)",
        "Golf rounds on Michlifen Jack Nicklaus Signature Course",
        "Shared electric golf cart and practice buggy included",
        "Full access to Driving Range & Golf Academy",
        "Private airport ↔ hotel transfers",
        "24/7 bilingual concierge assistance"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Repas et boissons non spécifiés",
        "Dépenses personnelles et pourboires"
      ],
      EN: [
        "Travel insurance",
        "Meals and beverages not specified",
        "Personal expenses and gratuities"
      ]
    },
    options: {
      FR: [
        { name: "Upgrade Suite Michlifen Resort", price: "Sur demande" },
        { name: "Excursion guidée de Fès", price: "Sur demande" },
        { name: "Leçon privée Académie Golf", price: "Sur demande" }
      ],
      EN: [
        { name: "Michlifen Resort Suite Upgrade", price: "On request" },
        { name: "Guided tour of Fez", price: "On request" },
        { name: "Private Golf Academy lesson", price: "On request" }
      ]
    },
    hotels: [
      {
        name: "Michlifen Resort & Golf",
        stars: 5,
        desc: {
          FR: "Un chalet alpin d'exception 5★ niché à Ifrane. Spa d'exception de 3 500 m², piscine couverte chauffée et gastronomie raffinée.",
          EN: "An exceptional 5★ alpine luxury resort in Ifrane. Features a 3,500 sqm spa, heated indoor pool, and fine dining restaurants."
        },
        link: "https://www.michlifen.com"
      }
    ],
    activities: [
      {
        title: { FR: "Michlifen Golf (18T Jack Nicklaus)", EN: "Michlifen Golf (18H Jack Nicklaus)" },
        desc: {
          FR: "Parcours de championnat d'altitude dessiné par Jack Nicklaus.",
          EN: "High-altitude championship course designed by Jack Nicklaus."
        }
      },
      {
        title: { FR: "Académie de Golf Michlifen", EN: "Michlifen Golf Academy" },
        desc: {
          FR: "Centre d'entraînement haute technologie avec analyse de swing.",
          EN: "High-tech training center with swing analysis."
        }
      }
    ]
  },
  "6": {
    id: 6,
    image: "/images/imperial_cities_fes.jpg",
    contentImage: "/images/morocco-sahara-dunes.png",
    title: { FR: "Villes Impériales & Désert", EN: "Imperial Cities & Desert" },
    duration: { FR: "11 jours / 10 nuits", EN: "11 days / 10 nights" },
    // TODO(JAY): confirm id 6 price with client now that flights are included
    cost: { FR: "Sur demande", EN: "On request" },
    overview: {
      FR: "Un circuit culturel exceptionnel de 10 nuits à travers les cités impériales marocaines et les dunes grandioses du Sahara. Visitez Casablanca, Rabat, Fès et Meknès, explorez les ruines romaines de Volubilis, traversez le Moyen Atlas et vivez la magie d'une nuit en bivouac au milieu des dunes de sable de l'Erg Chebbi à Merzouga avec promenade en chameau au coucher du soleil.",
      EN: "An exceptional 10-night cultural tour across the imperial strongholds of Morocco and the grand dunes of the Sahara. Discover Casablanca, Rabat, Fes, and Meknes, explore the ancient Roman ruins of Volubilis, traverse the Middle Atlas, and experience a magical overnight under the desert stars in Erg Chebbi dunes after a camel trek at sunset."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Casablanca", EN: "Arrival in Casablanca" }, desc: { FR: "Accueil à l'aéroport Mohammed V de Casablanca et transfert privé vers votre hôtel. Soirée libre pour relaxer.", EN: "Welcome at Casablanca Mohammed V Airport and private transfer to your hotel. Free evening to relax." } },
      { day: 2, title: { FR: "Casablanca & Visite de la Mosquée Hassan II", EN: "Casablanca & Hassan II Mosque Visit" }, desc: { FR: "Visite guidée de Casablanca incluant l'impressionnante Mosquée Hassan II (extérieur), la place Mohammed V et la Corniche.", EN: "Guided tour of Casablanca including the impressive Hassan II Mosque (exterior), Mohammed V Square, and the Corniche." } },
      { day: 3, title: { FR: "Casablanca – Rabat", EN: "Casablanca – Rabat" }, desc: { FR: "Départ pour Rabat. Visite guidée de la capitale administrative: Tour Hassan, Mausolée Mohammed V et la pittoresque Kasbah des Oudayas.", EN: "Departure to Rabat. Guided visit of the administrative capital: Hassan Tower, Mohammed V Mausoleum, and the picturesque Oudayas Kasbah." } },
      { day: 4, title: { FR: "Rabat – Meknès – Volubilis – Fès", EN: "Rabat – Meknes – Volubilis – Fes" }, desc: { FR: "Départ vers Meknès. Visite panoramique de la ville (porte Bab Mansour) et découverte du site archéologique romain de Volubilis. Route vers Fès.", EN: "Departure to Meknes. Panoramic visit of the city (Bab Mansour gate) and exploration of the Roman ruins of Volubilis. Continue to Fes." } },
      { day: 5, title: { FR: "Fès — Visite Historique Guidée", EN: "Fes — Guided Historical Tour" }, desc: { FR: "Journée complète d'exploration de Fès, la plus ancienne ville impériale: la Médina El Bali (UNESCO), l'Université Al Quaraouiyine et les célèbres tanneries.", EN: "Full-day exploration of Fes, the oldest imperial city: Fes El Bali Medina (UNESCO), Al Quaraouiyine University, and the famous tanneries." } },
      { day: 6, title: { FR: "Fès – Ifrane – Midelt – Merzouga", EN: "Fes – Ifrane – Midelt – Merzouga" }, desc: { FR: "Longue route spectaculaire (7-8h) à travers Ifrane (la Suisse marocaine), les forêts de cèdres d'Azrou, Midelt et la vallée du Ziz. Arrivée à Merzouga.", EN: "Scenic drive (7-8h) passing through Ifrane (Moroccan Switzerland), Azrou cedar forests, Midelt, and the beautiful Ziz Valley. Arrival in Merzouga." } },
      { day: 7, title: { FR: "Merzouga & Bivouac dans le Sahara", EN: "Merzouga & Sahara Desert Camp" }, desc: { FR: "Matinée libre pour se reposer. L'après-midi, départ en caravane de chameaux à travers les dunes dorées de l'Erg Chebbi. Dîner et nuit sous les étoiles.", EN: "Free morning to rest. In the afternoon, set off on a camel trek across the golden dunes of Erg Chebbi. Dinner and overnight at a desert camp." } },
      { day: 8, title: { FR: "Merzouga – Vallée du Draa – Ouarzazate", EN: "Merzouga – Draa Valley – Ouarzazate" }, desc: { FR: "Départ vers Ouarzazate par Rissani et la vallée du Draa. Visite du village fortifié d'Aït Ben Haddou, inscrit à l'UNESCO.", EN: "Drive to Ouarzazate via Rissani and the Draa Valley. Visit the UNESCO world heritage site of Ait Ben Haddou fortified village." } },
      { day: 9, title: { FR: "Ouarzazate – Col du Tizi n'Tichka – Marrakech", EN: "Ouarzazate – Tizi n'Tichka Pass – Marrakech" }, desc: { FR: "Traversée du Haut Atlas par le col spectaculaire du Tizi n'Tichka (2260m). Arrivée dans l'après-midi à Marrakech.", EN: "Traverse the High Atlas Mountains via the scenic Tizi n'Tichka Pass (2260m). Afternoon arrival in Marrakech." } },
      { day: 10, title: { FR: "Marrakech — Visite Guidée de la Ville", EN: "Marrakech — City Guided Visit" }, desc: { FR: "Visite des joyaux de Marrakech: le Palais de la Bahia, la Mosquée Koutoubia, les souks et la trépidante place Jemaa el-Fna.", EN: "Discover Marrakech's highlights: Bahia Palace, Koutoubia Mosque, the vibrant souks, and the bustling Jemaa el-Fna square." } },
      { day: 11, title: { FR: "Marrakech – Casablanca & Départ", EN: "Marrakech – Casablanca & Departure" }, desc: { FR: "Petit-déjeuner, transfert vers l'aéroport Mohammed V de Casablanca pour votre vol retour.", EN: "Breakfast, transfer to Casablanca Mohammed V Airport for your departure flight." } }
    ],
    inclusions: {
      FR: [
        "Vols internationaux aller-retour depuis Montréal",
        "10 nuits d'hébergement dans des hôtels de catégorie supérieure 4★/5★ et bivouac de luxe",
        "Formule Demi-pension (petit-déjeuner quotidien et dîners)",
        "Transferts et transports privés climatisés avec chauffeur professionnel",
        "Guides locaux certifiés pour les visites à Casablanca, Rabat, Fès, Meknès et Marrakech",
        "Frais d'entrée pour les monuments et musées inscrits au programme",
        "Randonnée en chameau dans le désert de Merzouga",
        "Assistance conciergerie 24/7",
        "Contribution FICAV incluse"
      ],
      EN: [
        "Round-trip international flights from Montreal",
        "10 nights accommodation in premium 4★/5★ hotels and luxury desert camp",
        "Half-board plan (daily breakfast and dinners)",
        "Private air-conditioned transportation with a professional driver",
        "Certified local guides in Casablanca, Rabat, Fes, Meknes, and Marrakech",
        "Entrance fees to monuments and museums specified in the itinerary",
        "Camel trek in the Merzouga desert",
        "24/7 concierge assistance",
        "FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Déjeuners et boissons non mentionnés",
        "Pourboires et dépenses personnelles",
        "Activités optionnelles"
      ],
      EN: [
        "Travel insurance",
        "Lunches and beverages not specified",
        "Gratuities and personal expenses",
        "Optional activities"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Riad Privé de luxe", price: "Sur demande" },
        { name: "Option Pension Complète (déjeuners inclus)", price: "Sur demande" }
      ],
      EN: [
        { name: "Upgrade to luxury Private Riad", price: "On request" },
        { name: "Full Board option (lunches included)", price: "On request" }
      ]
    },
    hotels: [
      { name: "Kenzi Tower Casablanca 5★", stars: 5, desc: { FR: "Hôtel haut de gamme offrant des vues panoramiques sur la ville.", EN: "Upscale hotel offering panoramic views over the city." }, link: "#" },
      { name: "Riad Fes Relais & Châteaux 5★", stars: 5, desc: { FR: "Riad de grand luxe alliant tradition et confort moderne.", EN: "Luxury Riad combining tradition and modern comfort." }, link: "#" },
      { name: "Bivouac de Luxe Erg Chebbi", stars: 5, desc: { FR: "Campement de luxe sous tentes nomades avec salle d'eau privée.", EN: "Luxury desert camp under nomad tents with private bathrooms." }, link: "#" }
    ],
    activities: [
      { title: { FR: "Mosquée Hassan II", EN: "Hassan II Mosque" }, desc: { FR: "Chef-d'œuvre architectural au bord de l'océan.", EN: "Architectural masterpiece on the oceanfront." } },
      { title: { FR: "Tanneries de Fès", EN: "Fes Tanneries" }, desc: { FR: "Découverte des méthodes médiévales de traitement du cuir.", EN: "Discovery of medieval leather tanning methods." } },
      { title: { FR: "Aït Ben Haddou", EN: "Ait Ben Haddou" }, desc: { FR: "Célèbre village fortifié classé à l'UNESCO.", EN: "Famous UNESCO-listed fortified village." } }
    ]
  },
  "7": {
    id: 7,
    image: "/images/chefchaouen.png",
    // TODO(JAY): swap for a distinct second Chefchaouen photo (Google Drive)
    contentImage: "/images/chefchaouen.png",
    title: { FR: "Grand Tour Impérial & Chefchaouen", EN: "Grand Imperial Tour & Chefchaouen" },
    duration: { FR: "15 jours / 14 nuits", EN: "15 days / 14 nights" },
    cost: { FR: "Sur demande", EN: "On request" },
    overview: {
      FR: "Notre grand circuit de 14 nuits est le voyage culturel ultime au Maroc. Parcourez le royaume du Nord au Sud: de Casablanca et la capitale Rabat, découvrez Tanger face à l'Espagne, perdez-vous dans les ruelles bleues de Chefchaouen, visitez Fès, passez une nuit magique sous tente au Sahara à Merzouga, franchissez l'Atlas vers Marrakech, explorez Essaouira sur l'Atlantique et revenez par Casablanca.",
      EN: "Our grand 14-night tour is the ultimate cultural voyage across Morocco. Traverse the kingdom from North to South: starting in Casablanca and Rabat, discover Tangier overlooking the Strait of Gibraltar, explore the blue lanes of Chefchaouen, visit Fes, experience a magical night under the stars in the Sahara desert at Merzouga, cross the Atlas to Marrakech, enjoy coastal Essaouira, and return to Casablanca."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Casablanca", EN: "Arrival in Casablanca" }, desc: { FR: "Accueil à l'aéroport de Casablanca et transfert privé vers votre hôtel. Soirée de repos.", EN: "Welcome at Casablanca Airport and private transfer to your hotel. Rest of the day free." } },
      { day: 2, title: { FR: "Casablanca – Rabat", EN: "Casablanca – Rabat" }, desc: { FR: "Visite de Casablanca (Mosquée Hassan II) puis départ vers Rabat. Découverte de la Tour Hassan et de la Kasbah des Oudayas.", EN: "Visit Casablanca (Hassan II Mosque) then depart to Rabat. Discover the Hassan Tower and the Oudayas Kasbah." } },
      { day: 3, title: { FR: "Rabat – Tanger", EN: "Rabat – Tangier" }, desc: { FR: "Route vers Tanger. Découverte du Cap Spartel, des Grottes d'Hercule et de la Kasbah surplombant le détroit de Gibraltar.", EN: "Drive to Tangier. Explore Cap Spartel, the Hercules Caves, and the Kasbah overlooking the Strait of Gibraltar." } },
      { day: 4, title: { FR: "Excursion à Chefchaouen", EN: "Chefchaouen Excursion" }, desc: { FR: "Départ pour la ville bleue de Chefchaouen dans le Rif. Temps libre pour explorer la médina magique et retour en soirée à Tanger.", EN: "Depart for the blue city of Chefchaouen in the Rif. Free time to explore the magical medina, return to Tangier in the evening." } },
      { day: 5, title: { FR: "Tanger – Fès", EN: "Tangier – Fes" }, desc: { FR: "Départ matinal vers Fès (5-6h de route). Installation à l'hôtel et première immersion dans l'ancienne capitale impériale.", EN: "Morning departure to Fes (5-6h drive). Check-in at your hotel and first immersion in the ancient imperial capital." } },
      { day: 6, title: { FR: "Fès — Visite guidée historique", EN: "Fes — Guided Historical Visit" }, desc: { FR: "Journée de visite guidée de la médina Fes El Bali, l'Université Al Quaraouiyine, la Médersa Bou Inania et la tannerie Chouara.", EN: "Guided visit of Fes El Bali medina, Al Quaraouiyine University, Bou Inania Madrasa, and the Chouara tannery." } },
      { day: 7, title: { FR: "Fès – Ifrane – Merzouga", EN: "Fes – Ifrane – Merzouga" }, desc: { FR: "Départ vers le Sahara via Ifrane, les singes magots d'Azrou, Midelt et la vallée du Ziz. Installation à l'hôtel à Merzouga.", EN: "Depart to the Sahara via Ifrane, Azrou monkeys, Midelt, and the Ziz Valley. Check-in at a hotel in Merzouga." } },
      { day: 8, title: { FR: "Merzouga & Nuit sous les étoiles du Sahara", EN: "Merzouga & Sahara Desert Overnight" }, desc: { FR: "Matinée de détente. L'après-midi, excursion en dromadaire vers le campement nomade pour voir le coucher du soleil et dormir sous tente.", EN: "Free morning. In the afternoon, set off on a camel trek to the desert camp to watch the sunset and sleep in nomad tents." } },
      { day: 9, title: { FR: "Merzouga – Gorges – Ouarzazate", EN: "Merzouga – Gorges – Ouarzazate" }, desc: { FR: "Départ vers Ouarzazate par Rissani, les gorges du Todra et la vallée du Dadès. Visite d'Aït Ben Haddou.", EN: "Drive to Ouarzazate via Rissani, Todra Gorges, and Dades Valley. Visit the historic Ait Ben Haddou." } },
      { day: 10, title: { FR: "Ouarzazate – Marrakech", EN: "Ouarzazate – Marrakech" }, desc: { FR: "Route vers Marrakech à travers les montagnes du Haut Atlas par le col du Tizi n'Tichka.", EN: "Drive to Marrakech crossing the High Atlas Mountains via the Tizi n'Tichka Pass." } },
      { day: 11, title: { FR: "Marrakech — Visite historique complète", EN: "Marrakech — Guided City Tour" }, desc: { FR: "Visite guidée: Palais de la Bahia, Koutoubia, tombeaux Saadiens, souks et la célèbre place Jemaa el-Fna.", EN: "Guided visit: Bahia Palace, Koutoubia, Saadian tombs, souks, and the famous Jemaa el-Fna square." } },
      { day: 12, title: { FR: "Marrakech — Journée de détente libre", EN: "Marrakech — Free Relaxation Day" }, desc: { FR: "Journée libre pour vous détendre au spa, flâner dans la ville nouvelle de Guéliz ou faire des achats.", EN: "Free day to relax at the spa, wander through Gueliz new town, or go shopping." } },
      { day: 13, title: { FR: "Excursion à Essaouira", EN: "Essaouira Day Trip" }, desc: { FR: "Départ vers la perle de l'Atlantique, Essaouira. Visite de la médina, des remparts et du port de pêche historique.", EN: "Drive to Essaouira, the pearl of the Atlantic. Visit the medina, historical ramparts, and the fishing port." } },
      { day: 14, title: { FR: "Essaouira – Casablanca", EN: "Essaouira – Casablanca" }, desc: { FR: "Retour vers Casablanca par la route côtière (5h). Installation à l'hôtel pour votre dernière nuit.", EN: "Return to Casablanca along the coastal highway (5h). Check-in for your final overnight." } },
      { day: 15, title: { FR: "Casablanca & Départ", EN: "Casablanca & Departure" }, desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport pour votre vol retour.", EN: "Breakfast, private transfer to the airport for your return flight." } }
    ],
    inclusions: {
      FR: [
        "Vols internationaux aller-retour depuis Montréal",
        "14 nuits dans des riads et hôtels de luxe 4★/5★ et bivouac de luxe",
        "Formule Demi-pension (petit-déjeuner quotidien et dîners)",
        "Transports privés climatisés avec chauffeur professionnel",
        "Guides certifiés pour les visites de Casablanca, Rabat, Tanger, Fès, Marrakech et Essaouira",
        "Frais d'entrée pour les monuments inscrits",
        "Randonnée en chameau à Merzouga",
        "Assistance conciergerie 24/7",
        "Contribution FICAV incluse"
      ],
      EN: [
        "Round-trip international flights from Montreal",
        "14 nights in premium 4★/5★ hotels, riads, and luxury desert camp",
        "Half-board plan (daily breakfast and dinners)",
        "Private air-conditioned transport with professional driver",
        "Certified guides in Casablanca, Rabat, Tangier, Fes, Marrakech, and Essaouira",
        "Entrance fees to scheduled monuments",
        "Camel trek in Merzouga",
        "24/7 concierge assistance",
        "FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Déjeuners et boissons non spécifiés",
        "Pourboires et dépenses personnelles",
        "Activités optionnelles"
      ],
      EN: [
        "Travel insurance",
        "Lunches and beverages not specified",
        "Gratuities and personal expenses",
        "Optional activities"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Riads Prestige Relais & Châteaux", price: "Sur demande" },
        { name: "Option Pension Complète (déjeuners)", price: "Sur demande" }
      ],
      EN: [
        { name: "Relais & Chateaux Prestige Riad Upgrade", price: "On request" },
        { name: "Full Board option (lunches)", price: "On request" }
      ]
    },
    hotels: [
      { name: "Riad Fes 5★", stars: 5, desc: { FR: "Riad Relais & Châteaux au cœur de la médina.", EN: "Relais & Châteaux Riad in the heart of the medina." }, link: "#" },
      { name: "La Maison Arabe Marrakech 5★", stars: 5, desc: { FR: "Hôtel légendaire de Marrakech offrant luxe et tradition.", EN: "Legendary Marrakech hotel offering luxury and heritage." }, link: "#" },
      { name: "Heure Bleue Palais Essaouira 5★", stars: 5, desc: { FR: "Havre de paix historique membre de Relais & Châteaux.", EN: "Historic oasis and member of Relais & Châteaux." }, link: "#" }
    ],
    activities: [
      { title: { FR: "Chefchaouen", EN: "Chefchaouen Blue Lanes" }, desc: { FR: "Flânerie dans les ruelles peintes de bleu.", EN: "Wandering through the streets painted in blue." } },
      { title: { FR: "Grottes d'Hercule", EN: "Hercules Caves" }, desc: { FR: "Découverte des grottes mythiques de Tanger.", EN: "Exploring the mythical caves of Tangier." } },
      { title: { FR: "Médina d'Essaouira", EN: "Essaouira Medina" }, desc: { FR: "Ramparts maritimes et ruelles chargées d'histoire.", EN: "Sea ramparts and lanes full of history." } }
    ]
  },
  "8": {
    id: 8,
    image: "/images/trekking_toubkal.png",
    contentImage: "/images/trekking_toubkal.png",
    title: { FR: "Trekking Toubkal & Marrakech", EN: "Trekking Toubkal & Marrakech" },
    duration: { FR: "10 jours / 9 nuits", EN: "10 days / 9 nights" },
    cost: { FR: "À partir de 4 789 $", EN: "Starting from 4,789" },
    // TODO(JAY): confirm anchor price with client
    originalCost: { FR: "À partir de 4 989 $", EN: "Starting from 4,989" },
    overview: {
      FR: "Une expérience d'aventure et de luxe unique de 9 nuits combinant une randonnée guidée dans le Parc National du Toubkal (Haut Atlas) avec hébergement d'exception au Kasbah du Toubkal et au Azzaden Trekking Lodge, suivie d'un séjour de détente absolue de 4 nuits dans un hôtel tout inclus 5★ à Marrakech. Vols directs de Montréal inclus.",
      EN: "A unique 9-night adventure and luxury experience combining a guided trek in the Toubkal National Park (High Atlas) with outstanding stays at Kasbah du Toubkal and Azzaden Trekking Lodge, followed by 4 nights of absolute relaxation in an all-inclusive 5★ hotel in Marrakech. Direct flights from Montreal included."
    },
    timeline: [
      { day: 1, title: { FR: "Vol Montréal – Marrakech – Imlil", EN: "Montreal – Marrakech Flight & Imlil" }, desc: { FR: "Vol direct. Accueil et transfert avec votre guide privé vers Imlil dans l'Atlas. Dîner et nuit au Kasbah du Toubkal.", EN: "Direct flight. Welcome and transfer with your private guide to Imlil in the Atlas. Dinner and stay at Kasbah du Toubkal." } },
      { day: 2, title: { FR: "Exploration de la Vallée d'Imlil", EN: "Imlil Valley Exploration" }, desc: { FR: "Journée d'acclimatation libre ou randonnée avec votre guide personnel. Déjeuner pique-nique et nuit au Kasbah du Toubkal.", EN: "Acclimatization free day or guided walk with your personal guide. Picnic lunch and night at Kasbah du Toubkal." } },
      { day: 3, title: { FR: "Trek vers la Vallée d'Azzaden", EN: "Trek to the Azzaden Valley" }, desc: { FR: "Randonnée soutenue avec guide, muletier et mules vers notre lodge de montagne dans la vallée d'Azzaden. Pique-nique en cours de route. Nuit au Azzaden Trekking Lodge.", EN: "Supported trek with guide, muleer, and mules to our mountain lodge in the Azzaden Valley. Picnic lunch en route. Overnight at Azzaden Trekking Lodge." } },
      { day: 4, title: { FR: "Exploration de la Vallée d'Azzaden", EN: "Azzaden Valley Discovery" }, desc: { FR: "Journée de randonnée dans la superbe vallée d'Azzaden, à travers des villages de terre rouge. Dîner et nuit au Azzaden Trekking Lodge.", EN: "Day of trekking in the stunning Azzaden Valley, through red clay villages. Dinner and night at Azzaden Trekking Lodge." } },
      { day: 5, title: { FR: "Retour à Imlil", EN: "Trek back to Imlil" }, desc: { FR: "Trek de retour vers Imlil par un itinéraire différent. Dîner et nuit au Kasbah du Toubkal.", EN: "Trek back to Imlil via a different mountain route. Dinner and overnight at Kasbah du Toubkal." } },
      { day: 6, title: { FR: "Imlil – Transfert vers Marrakech", EN: "Imlil – Transfer to Marrakech" }, desc: { FR: "Dernier petit-déjeuner de montagne puis transfert privé vers votre complexe 5★ tout inclus à Marrakech. Début du séjour détente.", EN: "Last mountain breakfast, then private transfer to your 5★ all-inclusive resort in Marrakech. Start of your relaxation stay." } },
      { day: 7, title: { FR: "Détente All Inclusive à Marrakech", EN: "All-Inclusive Marrakech Comfort" }, desc: { FR: "Profitez des piscines, des cocktails et de la gastronomie de votre hôtel de luxe tout compris.", EN: "Enjoy pools, cocktails, and fine dining at your luxury all-inclusive resort." } },
      { day: 8, title: { FR: "Visite guidée des Souks & Hammam", EN: "Guided Souks & Hammam Tour" }, desc: { FR: "Journée libre. Option de massage hammam traditionnel ou découverte de la place Jemaa el-Fna.", EN: "Free day. Optional traditional hammam massage or discovery of Jemaa el-Fna square." } },
      { day: 9, title: { FR: "Journée Libre à Marrakech", EN: "Marrakech Leisure Day" }, desc: { FR: "Explorez à votre rythme: le Jardin Majorelle, le Palais Bahia ou relaxez au bord de la piscine.", EN: "Explore at your own pace: Majorelle Garden, Bahia Palace, or relax by the pool." } },
      { day: 10, title: { FR: "Vol de retour vers Montréal", EN: "Return Flight to Montreal" }, desc: { FR: "Petit-déjeuner, transfert privé vers l'aéroport de Marrakech pour votre vol de retour.", EN: "Breakfast, private transfer to Marrakech airport for your return flight." } }
    ],
    inclusions: {
      FR: [
        "Vols aller-retour Montréal – Marrakech (1er bagage inclus)",
        "5 nuits d'hébergement en pension complète au Kasbah du Toubkal & Azzaden Trekking Lodge",
        "4 nuits d'hébergement en formule Tout Inclus dans un hôtel 5★ de Marrakech",
        "Services d'un guide de montagne personnel certifié pour les treks",
        "Mules et muletiers pour le portage des bagages",
        "Transferts privés aéroport, Imlil et Marrakech",
        "Toutes les taxes incluses (dont 5% de contribution à l'Association des Bassins d'Imlil)",
        "Contribution FICAV incluse"
      ],
      EN: [
        "Round-trip flights Montreal – Marrakech (first bag included)",
        "5 nights full-board accommodation at Kasbah du Toubkal & Azzaden Trekking Lodge",
        "4 nights all-inclusive accommodation at a 5★ hotel in Marrakech",
        "Services of a certified personal mountain guide for treks",
        "Mules and muleteers for luggage carrying",
        "Private airport, Imlil, and Marrakech transfers",
        "All taxes included (including 5% levy to the Association des Bassins d'Imlil)",
        "FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Frais pour le 2ème bagage",
        "Repas et boissons non spécifiés",
        "Dépenses personnelles et pourboires",
        "Taxes de séjour de l'hôtel (env. 5$ CAD par nuit)"
      ],
      EN: [
        "Travel insurance",
        "Second checked bag fee",
        "Meals and beverages not specified",
        "Personal expenses and gratuities",
        "Hotel stay taxes (approx. $5 CAD per night)"
      ]
    },
    options: {
      FR: [
        { name: "Ascension du Mont Toubkal (4167m) avec guide", price: "Sur demande" },
        { name: "Surclassement Suite Riad à Marrakech", price: "Sur demande" }
      ],
      EN: [
        { name: "Mount Toubkal Ascent (4167m) with guide", price: "On request" },
        { name: "Suite Riad Upgrade in Marrakech", price: "On request" }
      ]
    },
    hotels: [
      { name: "Kasbah du Toubkal", stars: 4, desc: { FR: "Lodge de montagne primé offrant des vues uniques sur le Mont Toubkal.", EN: "Award-winning mountain lodge offering unique views over Mount Toubkal." }, link: "https://www.kasbahdutoubkal.com/" },
      { name: "Azzaden Trekking Lodge", stars: 4, desc: { FR: "Lodge écologique traditionnel de montagne dans un vallon paisible.", EN: "Traditional eco-friendly mountain lodge in a peaceful valley." }, link: "#" }
    ],
    activities: [
      { title: { FR: "Randonnée dans l'Atlas", EN: "Atlas Trekking" }, desc: { FR: "Marches guidées à la rencontre des Berbères.", EN: "Guided walks meeting local Berber communities." } },
      { title: { FR: "Hammam Kasbah", EN: "Kasbah Hammam" }, desc: { FR: "Bain de vapeur relaxant après la marche.", EN: "Relaxing steam bath after trekking." } }
    ]
  },
  "9": {
    id: 9,
    image: "/images/german_circuit_morocco.jpg",
    contentImage: "/images/imperial_cities_fes.jpg",
    // Title updated per client request 2026-06-28
    title: { FR: "Villes Impériales", EN: "Imperial Cities" },
    duration: { FR: "8 jours / 7 nuits", EN: "8 days / 7 nights" },
    cost: { FR: "Sur demande", EN: "On request" },
    overview: {
      FR: "Un circuit culturel très complet en français couvrant les joyaux du Maroc de Marrakech à Fès. Voyagez à travers Beni Mellal, Ifrane la ville de montagne, et découvrez l'histoire impériale à Fès, Meknès, la capitale administrative Rabat et la métropole côtière Casablanca, avant de revenir à Marrakech.",
      EN: "A comprehensive cultural tour in French covering Morocco's finest highlights from Marrakech to Fes. Travel through Beni Mellal, Ifrane mountain town, and explore the imperial history in Fes, Meknes, the administrative capital Rabat, and coastal Casablanca, before returning to Marrakech."
    },
    timeline: [
      { day: 1, title: { FR: "Arrivée à Marrakech", EN: "Arrival in Marrakech" }, desc: { FR: "Vol vers Marrakech ou Agadir, puis transfert à votre hôtel à Marrakech. Dîner et nuit à l'hôtel.", EN: "Flight to Marrakech or Agadir, then transfer to your hotel in Marrakech. Dinner and overnight at the hotel." } },
      { day: 2, title: { FR: "Marrakech – Beni Mellal – Ifrane – Fès", EN: "Marrakech – Beni Mellal – Ifrane – Fes" }, desc: { FR: "Départ pour Fès par Beni Mellal, Azrou et Ifrane. Paysages grandioses et explications sur les traditions. Dîner et nuit à Fès.", EN: "Departure to Fes passing through Beni Mellal, Azrou, and Ifrane. Great landscapes and explanations on traditions. Dinner and night in Fes." } },
      { day: 3, title: { FR: "Fès — Visite Historique & Meknès", EN: "Fes Historical Visit & Meknes" }, desc: { FR: "Visite guidée de Fès (Médina, Al Quaraouiyine). L'après-midi, route vers Meknès et visite historique (Bab Mansour, mausolée Moulay Ismaïl). Nuit à Meknès.", EN: "Guided visit of Fes (Medina, Al Quaraouiyine). In the afternoon, drive to Meknes and historical tour (Bab Mansour, Moulay Ismail mausoleum). Night in Meknes." } },
      { day: 4, title: { FR: "Meknès – Rabat – Casablanca", EN: "Meknes – Rabat – Casablanca" }, desc: { FR: "Départ pour Rabat. Visite guidée (nécropole de Chellah, Tour Hassan, mausolée). Route vers Casablanca, visite de la médina et nuit.", EN: "Departure to Rabat. Guided tour (Chellah necropolis, Hassan Tower, mausoleum). Drive to Casablanca, visit the medina and night stay." } },
      { day: 5, title: { FR: "Casablanca – Marrakech", EN: "Casablanca – Marrakech" }, desc: { FR: "Découverte de Casablanca (Place Mohammed V, Corniche, Mosquée Hassan II). L'après-midi, retour vers Marrakech. Dîner et nuit.", EN: "Discovery of Casablanca (Mohammed V square, Corniche, Hassan II mosque). In the afternoon, return to Marrakech. Dinner and night." } },
      { day: 6, title: { FR: "Marrakech — Visite des Monuments", EN: "Marrakech — Monuments Visit" }, desc: { FR: "Visite guidée de Marrakech: jardins de la Ménara, Mosquée Koutoubia, Musée Dar Si Saïd et Palais de la Bahia.", EN: "Guided visit of Marrakech: Menara gardens, Koutoubia mosque, Dar Si Said museum, and Bahia Palace." } },
      { day: 7, title: { FR: "Marrakech — Journée Libre", EN: "Marrakech — Free Day" }, desc: { FR: "Profitez d'une journée libre pour flâner dans la médina, faire du shopping dans les souks ou vous détendre à la piscine.", EN: "Enjoy a free day to wander through the medina, shop in the souks, or relax by the pool." } },
      { day: 8, title: { FR: "Marrakech — Départ", EN: "Marrakech — Departure" }, desc: { FR: "Petit-déjeuner puis transfert à l'aéroport pour votre vol de retour.", EN: "Breakfast then transfer to the airport for your return flight." } }
    ],
    inclusions: {
      FR: [
        "Vols internationaux aller-retour depuis Montréal",
        "7 nuits d'hébergement dans des hôtels de catégorie supérieure 4★/5★",
        "Formule Demi-pension (petit-déjeuner et dîner)",
        "Transferts privés climatisés tout au long du circuit",
        "Visites guidées et frais d'entrée inscrits (Hassan II, Chellah, Dar Si Saïd, Bahia)",
        "Cérémonie du thé authentique dans une famille marocaine à Fès",
        "5 déjeuners typiques inclus (Beni Mellal, Fès, Rabat, Casablanca, Marrakech)",
        "Assistance conciergerie 24/7",
        "Contribution FICAV incluse"
      ],
      EN: [
        "Round-trip international flights from Montreal",
        "7 nights accommodation in superior 4★/5★ hotels",
        "Half Board plan (breakfast and dinners)",
        "Private air-conditioned transfers throughout the tour",
        "Guided visits and entrance fees listed (Hassan II, Chellah, Dar Si Said, Bahia)",
        "Authentic tea ceremony with a Moroccan family in Fes",
        "5 typical lunches included (Beni Mellal, Fes, Rabat, Casablanca, Marrakech)",
        "24/7 concierge assistance",
        "FICAV protection included"
      ]
    },
    exclusions: {
      FR: [
        "Assurance voyage",
        "Boissons",
        "Pourboires et dépenses personnelles",
        "Activités facultatives"
      ],
      EN: [
        "Travel insurance",
        "Beverages",
        "Gratuities and personal expenses",
        "Optional activities"
      ]
    },
    options: {
      FR: [
        { name: "Surclassement en Chambre Single", price: "Sur demande" },
        { name: "Visite guidée supplémentaire", price: "Sur demande" }
      ],
      EN: [
        { name: "Single Room Upgrade", price: "On request" },
        { name: "Extra guided visit", price: "On request" }
      ]
    },
    hotels: [
      { name: "Hôtel Atlas Medina Marrakech 5★", stars: 5, desc: { FR: "Hôtel 5★ traditionnel avec d'immenses jardins et piscines.", EN: "Traditional 5★ hotel with massive gardens and pools." }, link: "#" },
      { name: "Hôtel Les Mérinides Fès 5★", stars: 5, desc: { FR: "Hôtel 5★ offrant une vue unique sur les collines de la médina.", EN: "5★ hotel offering unique views over the medina hills." }, link: "#" }
    ],
    activities: [
      { title: { FR: "Cérémonie du Thé", EN: "Tea Ceremony" }, desc: { FR: "Visite conviviale dans une famille traditionnelle de la médina.", EN: "Friendly visit with a traditional family in the medina." } },
      { title: { FR: "Palais de la Bahia", EN: "Bahia Palace" }, desc: { FR: "Chef-d'œuvre de l'architecture hispano-mauresque.", EN: "Masterpiece of Spanish-Moorish architecture." } }
    ]
  }
};

export const itineraryThemes: Record<string, ItineraryTheme> = {
  "1": {
    country: "Morocco",
    heroTitle: { FR: "Maroc Prestige", EN: "Morocco Prestige" },
    heroSub: {
      FR: "Maroc Prestige – Voyage de Luxe Ultime. Vivez comme des rois avec des séjours au Royal Mansour, des ateliers de calligraphie privés et un vol en montgolfière au lever du soleil.",
      EN: "Morocco Prestige – Ultimate Luxury Journey. Experience the royal treatment with stay at Royal Mansour riads, private calligraphy masterclass, and hot air balloon over Atlas."
    },
    heroBtn: { FR: "Découvrir le Prestige", EN: "Unveil the Luxury" },
    heroBg: "/images/morocco-marrakech-riad.png",
    themeColor: "#C5A880",
    themeColorHover: "#A3835B",
    watercolorColor: "#C5A880",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    discoverDesc: {
      FR: "Nous sommes des aventuriers dans l'âme. Découvrez ce que les régions du Maroc ont à vous offrir.",
      EN: "We are adventurers at heart, so uncovering the secrets of Morocco is something we've had a lot of experience in. Find out more about what the regions of Morocco have to offer."
    },
    experienceTitle: { FR: "Vivre le Maroc", EN: "Experience Morocco" },
    experienceDesc: {
      FR: "Le Maroc a de nombreuses facettes : Aventure, Gastronomie, Culture... Vivez ces expériences enrichissantes et passionnantes à votre manière.",
      EN: "Morocco has many different aspects to its personality. Adventure, Culinary, Culture; it's all here. Experience the many different, rich, exciting layers of Morocco. Experience it your way."
    },
    mapPins: [
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "32.9%", left: "30.5%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "28.0%", left: "35.1%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "28.1%", left: "46.3%" },
      { name: { FR: "Merzouga (Sahara)", EN: "Merzouga" }, top: "60.0%", left: "52.5%" },
      { name: { FR: "Skoura", EN: "Skoura" }, top: "60.2%", left: "36.8%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Ben Haddou" }, top: "60.4%", left: "33.3%" },
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "54.0%", left: "28.1%" }
    ],
    experienceGrid: [
      { label: { FR: "Aventure", EN: "Adventure" }, img: "/images/morocco_adventure.png" },
      { label: { FR: "Gastronomie", EN: "Culinary" }, img: "/images/morocco_culinary.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Insolite", EN: "Off Beat" }, img: "/images/morocco-sahara-dunes.png" },
      { label: { FR: "Immersion", EN: "Go Local" }, img: "/images/people-cliff.png" }
    ]
  },
  "2": {
    country: "Morocco",
    heroTitle: { FR: "Maroc Impérial", EN: "Imperial Morocco" },
    heroSub: {
      FR: "Maroc Impérial & Découverte du Sahara. Découvrez Casablanca, Rabat, la ville bleue de Chefchaouen, l'ancienne médina de Fès, et passez deux nuits sous les étoiles du Sahara.",
      EN: "Imperial Morocco & Sahara Discovery. Discover Casablanca, Rabat, Chefchaouen blue city, Fes ancient medina, and spend two nights under the Sahara desert stars."
    },
    heroBtn: { FR: "Découvrir la Culture", EN: "Unveil the Culture" },
    heroBg: "/images/moroco.webp",
    themeColor: "#5A8266",
    themeColorHover: "#476851",
    watercolorColor: "#5A8266",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    discoverDesc: {
      FR: "Explorez les villes impériales historiques, les montagnes du Rif, les ruines romaines de Volubilis et les dunes de Merzouga.",
      EN: "Explore historical imperial cities, the high Rif mountains, Roman ruins of Volubilis, and the vast dunes of Merzouga desert."
    },
    experienceTitle: { FR: "Vivre le Maroc", EN: "Experience Morocco" },
    experienceDesc: {
      FR: "Vivez l'expérience des racines architecturales et des traditions profondes du Maroc. Découvrez des récits historiques, goûtez à la cuisine de rue et visitez les tanneries.",
      EN: "Experience the deep architectural roots and traditions of Morocco. Learn historical stories, taste street foods, and see how tanneries still operate."
    },
    mapPins: [
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "32.9%", left: "30.5%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "28.0%", left: "35.1%" },
      { name: { FR: "Chefchaouen", EN: "Chefchaouen" }, top: "15.6%", left: "44.8%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "28.1%", left: "46.3%" },
      { name: { FR: "Meknès & Volubilis", EN: "Meknes & Volubilis" }, top: "29.4%", left: "43.0%" },
      { name: { FR: "Merzouga", EN: "Merzouga" }, top: "60.0%", left: "52.5%" },
      { name: { FR: "Gorges du Todra", EN: "Todra Gorges" }, top: "54.9%", left: "43.1%" },
      { name: { FR: "Vallée du Dadès", EN: "Dades Valley" }, top: "56.8%", left: "40.3%" },
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "54.0%", left: "28.1%" }
    ],
    experienceGrid: [
      { label: { FR: "Aventure", EN: "Adventure" }, img: "/images/morocco_adventure.png" },
      { label: { FR: "Gastronomie", EN: "Culinary" }, img: "/images/morocco_culinary.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Insolite", EN: "Off Beat" }, img: "/images/morocco-sahara-dunes.png" },
      { label: { FR: "Immersion", EN: "Go Local" }, img: "/images/people-cliff.png" }
    ]
  },
  "3": {
    country: "Morocco",
    heroTitle: { FR: "Immersion Sahara", EN: "Sahara Deep Dive" },
    heroSub: {
      FR: "Sahara Deep Dive – Immersion Désert. Passez trois nuits complètes dans les dunes de l'Erg Chebbi avec chameaux, sandboard, musique Gnawa locale et bivouac étoilé.",
      EN: "Sahara Deep Dive – Desert Immersion Experience. Spend three full nights in Erg Chebbi desert dunes with camels, sandboarding, local Gnawa music, and campfire stars."
    },
    heroBtn: { FR: "Découvrir le Sahara", EN: "Unveil the Sahara" },
    heroBg: "/images/morocco-sahara-dunes.png",
    themeColor: "#C2593F",
    themeColorHover: "#A14833",
    watercolorColor: "#C2593F",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Désert", EN: "Discover the Desert" },
    discoverDesc: {
      FR: "Vivez au rythme du Sahara : marche guidée dans les dunes silencieuses, photographie du désert et échanges culturels avec les communautés berbères.",
      EN: "Focus completely on the Sahara life: walk guided through silent dunes, do desert photography, and exchange culture with local Berber communities."
    },
    experienceTitle: { FR: "Vivre le Désert", EN: "Experience Desert Life" },
    experienceDesc: {
      FR: "Une immersion profonde dans le désert pour observer les étoiles sous le ciel le plus pur au monde, dormir sous tente et explorer les gorges du Todra et du Dadès.",
      EN: "Deep desert immersion allows you to stargaze under the world's cleanest skies, sleep in tents, and travel the sandstone gorges of Todra and Dades."
    },
    mapPins: [
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "54.0%", left: "28.1%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Ben Haddou" }, top: "60.4%", left: "33.3%" },
      { name: { FR: "Ouarzazate", EN: "Ouarzazate" }, top: "61.8%", left: "34.8%" },
      { name: { FR: "Vallée du Dadès", EN: "Dades Valley" }, top: "56.8%", left: "40.3%" },
      { name: { FR: "Gorges du Todra", EN: "Todra Gorges" }, top: "54.9%", left: "43.1%" },
      { name: { FR: "Merzouga — 3 nuits désert", EN: "Merzouga — 3 desert nights" }, top: "60.0%", left: "52.5%" }
    ],
    experienceGrid: [
      { label: { FR: "Aventure", EN: "Adventure" }, img: "/images/morocco_adventure.png" },
      { label: { FR: "Gastronomie", EN: "Culinary" }, img: "/images/morocco_culinary.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "/images/morocco-marrakech-riad.png" },
      { label: { FR: "Insolite", EN: "Off Beat" }, img: "/images/morocco-sahara-dunes.png" },
      { label: { FR: "Immersion", EN: "Go Local" }, img: "/images/people-cliff.png" }
    ]
  },
  "4": {
    country: "Morocco",
    heroTitle: { FR: "Golf à Taghazout", EN: "Golf in Taghazout" },
    heroSub: {
      FR: "Forfait Golf de Prestige à Taghazout Bay. Séjournez 7 nuits au Hilton Taghazout 5★ et jouez 4 parties de golf sur les parcours de Tazegzout, du Soleil et des Dunes.",
      EN: "Bespoke Golf Escape in Taghazout Bay. Stay 7 nights at the 5★ Hilton Taghazout and play 4 rounds of golf at Tazegzout, du Soleil, and Les Dunes courses."
    },
    heroBtn: { FR: "Découvrir le Forfait", EN: "Explore Golf Escape" },
    heroBg: "/images/tgz_course_ocean.jpg",
    themeColor: "#00A3C4",
    themeColorHover: "#00839C",
    watercolorColor: "#00A3C4",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir Taghazout", EN: "Discover Taghazout" },
    discoverDesc: {
      FR: "Vivez le golf de premier choix face à l'océan Atlantique, avec des plages de sable fin, la découverte de l'argan et le bien-être.",
      EN: "Experience first-class golf facing the Atlantic ocean, with pristine sandy beaches, argan oil discovery, and premium wellness."
    },
    experienceTitle: { FR: "Vivre le Golf Côtier", EN: "Experience Atlantic Golf" },
    experienceDesc: {
      FR: "Jouez sur fairways dessinés par Kyle Phillips au sommet des falaises côtières, savourez des dîners gastronomiques et détendez-vous à Taghazout.",
      EN: "Play on Kyle Phillips-designed fairways carved into seaside cliffs, enjoy gourmet dining with wine, and relax at Taghazout Bay."
    },
    mapPins: [
      { name: { FR: "Agadir", EN: "Agadir" }, top: "66%", left: "46%" },
      { name: { FR: "Taghazout Bay", EN: "Taghazout Bay" }, top: "65%", left: "45%" },
      { name: { FR: "Golf Tazegzout", EN: "Tazegzout Golf" }, top: "64%", left: "44%" },
      { name: { FR: "Golf du Soleil", EN: "Golf du Soleil" }, top: "67%", left: "46%" },
      { name: { FR: "Golf Les Dunes", EN: "Golf Les Dunes" }, top: "68%", left: "47%" }
    ],
    experienceGrid: [
      { label: { FR: "Fairways Côtiers", EN: "Clifftop Fairways" }, img: "/images/tgz_course_1.jpg" },
      { label: { FR: "Vue Océan", EN: "Ocean Views" }, img: "/images/tgz_course_ocean.jpg" },
      { label: { FR: "Trou 18", EN: "Hole 18" }, img: "/images/tgz_course_hotel.jpg" },
      { label: { FR: "Parcours Aérien", EN: "Aerial Course" }, img: "/images/tgz_course_aerial.jpg" },
      { label: { FR: "Face à la Mer", EN: "Beachfront" }, img: "/images/hilton_taghazout_5.avif" }
    ]
  },
  "5": {
    country: "Morocco",
    heroTitle: { FR: "Golf à Marrakech", EN: "Golf in Marrakech" },
    heroSub: {
      FR: "Séjour Golf Royal & Bien-être Tout-Inclus à Marrakech. Séjournez 11 nuits à l'Hôtel du Golf 5★ et jouez 6 parties sur les plus prestigieux parcours de Marrakech.",
      EN: "Royal Golf & All-Inclusive Wellness in Marrakech. Stay 11 nights at 5★ Hôtel du Golf and play 6 rounds at Royal Golf, Assoufid, Amelkis, Samanah, Ourika, and Noria."
    },
    heroBtn: { FR: "Découvrir le Golf Royal", EN: "Explore Royal Golf" },
    heroBg: "/images/almaaden_golf_2.jpg",
    themeColor: "#8B2635",
    themeColorHover: "#72202b",
    watercolorColor: "#8B2635",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir les Parcours", EN: "Discover Marrakech Golf" },
    discoverDesc: {
      FR: "Jouez sur des parcours de légende aux portes du désert et face aux sommets enneigés de l'Atlas.",
      EN: "Play on some of the world's most historic and design-signature courses located at the gates of the Sahara and facing the Atlas mountains."
    },
    experienceTitle: { FR: "Vivre le Golf de Légende", EN: "Experience Royal Courses" },
    experienceDesc: {
      FR: "Bénéficiez d'un vol direct Transat, d'une formule tout-inclus gourmet, de visites privées de la médina et d'un rituel bien-être hammam privé.",
      EN: "Experience direct flight Transat access, all-inclusive gourmet dining, historic clay medina tours, and wellness spa hammam buyouts."
    },
    mapPins: [
      { name: { FR: "Marrakech — Hôtel du Golf", EN: "Marrakech — Hotel du Golf" }, top: "55%", left: "53%" },
      { name: { FR: "Royal Golf de Marrakech", EN: "Royal Golf" }, top: "56%", left: "52%" },
      { name: { FR: "Golf Amelkis", EN: "Golf Amelkis" }, top: "54%", left: "54%" },
      { name: { FR: "Golf Assoufid", EN: "Golf Assoufid" }, top: "57%", left: "53%" },
      { name: { FR: "Vallée de l'Ourika", EN: "Ourika Valley" }, top: "59%", left: "55%" }
    ],
    experienceGrid: [
      { label: { FR: "Al Maaden — Vue Atlas", EN: "Al Maaden — Atlas Views" }, img: "/images/almaaden_golf_2.jpg" },
      { label: { FR: "Royal Golf de Marrakech", EN: "Royal Golf Club" }, img: "/images/royal_golf_marrakech_1.jpg" },
      { label: { FR: "Akenza Golf", EN: "Akenza Golf" }, img: "/images/akenza_golf_1.jpg" },
      { label: { FR: "Coucher de Soleil", EN: "Sunset Round" }, img: "/images/royal_golf_sunset.jpg" },
      { label: { FR: "Restaurant Gourmet", EN: "Gourmet Dining" }, img: "/images/almaaden_restaurant1.jpg" }
    ]
  },
  "6": {
    country: "Morocco",
    heroTitle: { FR: "Villes Impériales", EN: "Imperial Cities & Desert" },
    heroSub: {
      FR: "Villes Impériales & Découverte du Désert. Explorez Casablanca, Rabat, Fès, Meknès et vivez la magie d'une nuit en bivouac au milieu des dunes de l'Erg Chebbi.",
      EN: "Imperial Cities & Desert Discovery. Explore Casablanca, Rabat, Fes, and Meknes, combined with a magical camel ride and desert overnight under the stars."
    },
    heroBtn: { FR: "Découvrir le Circuit", EN: "Explore the Circuit" },
    heroBg: "/images/moroco.webp",
    themeColor: "#5A8266",
    themeColorHover: "#476851",
    watercolorColor: "#5A8266",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    discoverDesc: {
      FR: "Explorez les cités impériales historiques et passez de l'océan Atlantique aux dunes grandioses du Sahara.",
      EN: "Explore the historic imperial strongholds and transition from the Atlantic ocean to the grand dunes of the Sahara."
    },
    experienceTitle: { FR: "Vivre le Voyage", EN: "Experience the Voyage" },
    experienceDesc: {
      FR: "Découvrez des récits anciens, observez les étoiles depuis le campement du désert et visitez les magnifiques vestiges romains de Volubilis.",
      EN: "Discover ancient historic tales, gaze at infinite stars from the desert camp, and tour the beautiful Roman ruins of Volubilis."
    },
    mapPins: [
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "32.9%", left: "30.5%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "28.0%", left: "35.1%" },
      { name: { FR: "Meknès", EN: "Meknes" }, top: "29.4%", left: "43.0%" },
      { name: { FR: "Volubilis", EN: "Volubilis" }, top: "27.5%", left: "43.0%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "28.1%", left: "46.3%" },
      { name: { FR: "Merzouga", EN: "Merzouga" }, top: "60.0%", left: "52.5%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Ben Haddou" }, top: "60.4%", left: "33.3%" },
      { name: { FR: "Ouarzazate", EN: "Ouarzazate" }, top: "61.8%", left: "34.8%" },
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "54.0%", left: "28.1%" }
    ],
    experienceGrid: [
      { label: { FR: "Histoire", EN: "History" }, img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80" },
      { label: { FR: "Désert", EN: "Desert" }, img: "/images/gulf-desert-sunset.png" },
      { label: { FR: "Culture", EN: "Culture" }, img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80" },
      { label: { FR: "Monuments", EN: "Monuments" }, img: "/images/german_circuit_morocco.jpg" },
      { label: { FR: "Tradition", EN: "Tradition" }, img: "/images/morocco_culinary.png" }
    ]
  },
  "7": {
    country: "Morocco",
    heroTitle: { FR: "Grand Tour", EN: "Grand Imperial Tour" },
    heroSub: {
      FR: "Villes Impériales, Chefchaouen & Côte Atlantique. Notre grand circuit de 15 jours couvrant Chefchaouen la bleue, Tanger, Fès, le Sahara, Marrakech et Essaouira.",
      EN: "Imperial Cities, Chefchaouen & Atlantic Coast. A comprehensive 15-day itinerary covering Chefchaouen blue city, Tangier, Fes, Sahara camp, Marrakech, and Essaouira."
    },
    heroBtn: { FR: "Découvrir le Grand Voyage", EN: "Explore Grand Voyage" },
    heroBg: "/images/chefchaouen.png",
    themeColor: "#C5A880",
    themeColorHover: "#A3835B",
    watercolorColor: "#C5A880",
    mapImage: "/images/moroco.webp",
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    discoverDesc: {
      FR: "Explorez tout le Maroc du Nord au Sud, des montagnes du Rif aux plages de l'Atlantique et aux dunes du désert.",
      EN: "Explore the entirety of Morocco from North to South, from Rif mountain peaks to Atlantic beaches and Sahara desert dunes."
    },
    experienceTitle: { FR: "Vivre le Grand Tour", EN: "Experience the Grand Tour" },
    experienceDesc: {
      FR: "Vivez le voyage ultime: ruelles bleues, souks de Marrakech, nuit au camp de désert et air marin d'Essaouira.",
      EN: "Experience the ultimate Moroccan journey: blue pathways, Marrakech souks, desert camp stargazing, and sea air at Essaouira."
    },
    mapPins: [
      { name: { FR: "Casablanca", EN: "Casablanca" }, top: "32.9%", left: "30.5%" },
      { name: { FR: "Rabat", EN: "Rabat" }, top: "28.0%", left: "35.1%" },
      { name: { FR: "Tanger", EN: "Tangier" }, top: "9.1%", left: "41.3%" },
      { name: { FR: "Chefchaouen", EN: "Chefchaouen" }, top: "15.6%", left: "44.8%" },
      { name: { FR: "Fès", EN: "Fes" }, top: "28.1%", left: "46.3%" },
      { name: { FR: "Merzouga", EN: "Merzouga" }, top: "60.0%", left: "52.5%" },
      { name: { FR: "Aït-Ben-Haddou", EN: "Ait Ben Haddou" }, top: "60.4%", left: "33.3%" },
      { name: { FR: "Ouarzazate", EN: "Ouarzazate" }, top: "61.8%", left: "34.8%" },
      { name: { FR: "Marrakech", EN: "Marrakech" }, top: "54.0%", left: "28.1%" },
      { name: { FR: "Essaouira", EN: "Essaouira" }, top: "55.3%", left: "17.1%" }
    ],
    experienceGrid: [
      { label: { FR: "Chefchaouen la Bleue", EN: "Chefchaouen Blue" }, img: "/images/chefchaouen.png" },
      { label: { FR: "Essaouira", EN: "Essaouira Coast" }, img: "/images/marrakech_sunset_hero.png" },
      { label: { FR: "Sahara Dunes", EN: "Sahara Desert" }, img: "/images/gulf-desert-sunset.png" },
      { label: { FR: "Marrakech Souk", EN: "Marrakech Life" }, img: "/images/morocco_culinary.png" },
      { label: { FR: "Volubilis", EN: "Ancient Heritage" }, img: "/images/german_circuit_morocco.jpg" }
    ]
  }
};
