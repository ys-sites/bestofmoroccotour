// Best of Morocco Tours — Master Data Repository
// Extracted directly from http://www.bestofmoroccotour.com

export interface SiteConfig {
  name: string;
  tagline: string;
  legalStructure: string;
  phoneUsCa: string;
  phoneMa: string;
  email: string;
  hours: string;
  website: string;
  stats: { value: string; label: string }[];
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface DayPlan {
  day: number;
  title: string;
  desc: string;
}

export interface TourItem {
  id: string;
  name: string;
  duration: string;
  category: string;
  badge: string;
  image: string;
  price: string;
  priceSub?: string;
  destinations: string[];
  overview: string;
  vehicles: string;
  hotels: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: DayPlan[];
  departures?: string[];
  rating?: string;
}

export interface CatalogTour {
  name: string;
  duration: string;
  category: string;
  rating: string;
  summary: string;
  image: string;
}

export interface GuideProfile {
  name: string;
  role: string;
  license: string;
  education: string[];
  experience: string;
  background: string;
  languages: string;
  philosophy: string;
  image?: string | null;
}

export interface Testimonial {
  name: string;
  date: string;
  location: string;
  role: string;
  image: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig: SiteConfig = {
  name: "Best of Morocco Tours",
  tagline: "Customized Private Morocco Tours",
  legalStructure: "Wholly Moroccan-owned Corporation (Incoming Tour Operator)",
  phoneUsCa: "+1 514 515 8382",
  phoneMa: "+212 660 189 147",
  email: "info@bestofmoroccotour.com",
  hours: "Mon - Sat 8:00 - 18:00",
  website: "https://www.bestofmoroccotour.com",
  stats: [
    { value: "20+", label: "Years Experience" },
    { value: "12,000+", label: "Bus Kilometers" },
    { value: "4,300+", label: "Hotel Nights" },
    { value: "100%", label: "Moroccan Owned" }
  ]
};

export const sixPillars: Pillar[] = [
  {
    id: "price-guarantee",
    title: "Best Price Guarantee",
    subtitle: "5% Additional Discount Match",
    description: "Best of Morocco Tours guarantees the best service and best price! If you find a better advertised price elsewhere on an identical vacation package, we’ll match that price exactly and give you an extra 5% discount.",
    iconName: "ShieldCheck"
  },
  {
    id: "local-guides",
    title: "Professional Local Guides",
    subtitle: "Ministry of Tourism Certified",
    description: "From our selective recruitment efforts, we have assembled an outstanding team of official, licensed tour guides in Morocco. They are native Moroccans and the true pride and soul of our company.",
    iconName: "Compass"
  },
  {
    id: "moroccan-expert",
    title: "20+ Years Moroccan Expert",
    subtitle: "Wholly Moroccan-Owned Inbound Agency",
    description: "We don't operate a generic network across many countries. We focus solely on travel within Morocco with 20+ years of outstanding service, which makes us exceptionally good at it.",
    iconName: "Award"
  },
  {
    id: "sustainable-tourism",
    title: "Sustainable & Eco-Friendly",
    subtitle: "Supporting Indigenous Communities",
    description: "We work diligently towards protecting natural assets and sustaining indigenous Berber cultures. Tourism directly supports local economies, family cooperatives, and eco-friendly stays.",
    iconName: "Leaf"
  },
  {
    id: "monuments-vip",
    title: "Monuments & VIP Access",
    subtitle: "Zero Waiting in Lines",
    description: "Arrive at your destination with a seamless plan: no waiting in lines at museums and monuments, no transit confusion, and guaranteed warm personal hospitality throughout your stay.",
    iconName: "Landmark"
  },
  {
    id: "flexible-payment",
    title: "Flexible Payment Methods",
    subtitle: "Credit Cards, PayPal & Bank Wire",
    description: "We accept Credit cards (Visa, MasterCard), PayPal, and International bank wire transfers. As long as you are paid in full before departure, we are easy to work with on payment schedules.",
    iconName: "CreditCard"
  }
];

export const masterTours: TourItem[] = [
  {
    "id": "imperial-cities",
    "name": "Imperial Cities of Morocco Tour",
    "duration": "8 Days / 7 Nights",
    "category": "Imperial Cities & Culture",
    "badge": "Most Popular",
    "image": "/images/bestofmorocco/img_tour_list_2.jpg",
    "price": "On Request (Best Price Guarantee)",
    "priceSub": "Best Price Guarantee (+5% match)",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Volubilis",
      "Moulay Idriss",
      "Meknes",
      "Fes",
      "Azrou",
      "Khenifra",
      "Marrakech",
      "El Jadida"
    ],
    "overview": "A comprehensive 8 Days / 7 Nights journey exploring Casablanca, Rabat, Volubilis, Moulay Idriss and beyond. Fully customized private tour operated with our licensed native guides and modern vehicles.",
    "vehicles": "New model private A/C Minivan / Coach",
    "hotels": "4-star & 5-star comfortable hotels and Riads",
    "inclusions": [
      "Private A/C Transport",
      "Local Licensed City Guides (Fes, Marrakech, Rabat, Meknes)",
      "4* & 5* Hotel Accommodations",
      "Daily Breakfast & Dinners (Half Board)",
      "Entrance Fees to Monuments"
    ],
    "exclusions": [
      "International Flights",
      "Travel Insurance",
      "Lunches",
      "Drinks during meals",
      "Personal Tips"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "CASABLANCA - RABAT",
        "desc": "As you arrive in Casablanca you will find your host waiting for you to greet you and then transfer you to Rabat. Rabat is an imperial city with a rich history of kingdoms that have swept through it for many centuries; leaving behind a collage of different architectural styles and a unique legacy. Afternoon sightseeing will highlight the Mellah (Jewish quarter), the Mohamed V mausoleum, the Oudaya Kasbah and the Andalous gardens. Dinner at the well centered Hotel Chellah."
      },
      {
        "day": 2,
        "title": "RABAT - VOLUBILIS - MEKNES - FES",
        "desc": "Travel to Fez via Volubilis, the Roman capital of Northwestern Africa. Walk through the narrow streets of Moulay Idris: this venerated 8th century citadel is considered to be the first islamic for the first Arab dynasty and the cradle of Sufism to the Moroccan society. Founded in the 8th century by Moulay Idris Al Akbar the grand son of Prophet Mohamed. Ultimately for locals, its Holiness make out of it a pilgrimage place for those who can not afford to make it to Mekkah for the Hajj Duty. Continue exploring the region on to Fez with sightseeing of the ramparts, the gates, and the Borjes (Moorish Forts). Dinner at the Hotel."
      },
      {
        "day": 3,
        "title": "FES CITY TOUR",
        "desc": "The most ancient of imperial capitals, and the most complete medieval city of the Islamic world, Fez is undeniably unique. Sensually stimulating with its haunting and beautiful sounds, infinite visual details, and unfiltered odors, Fez seems to exist suspended in time somewhere between the Middle Ages and today. Besides its electricity it owes absolutely nothing to the Western civilization. As a spectacle, this is an entirely satisfying experience and a learning process about the sophistication of the Moroccan artisan. the whole day will be at the Medina visiting in the morning, lunch in a typical Moroccan restaurant then continue on your quest visiting and shopping for the remainder of the day."
      },
      {
        "day": 4,
        "title": "FES - AZROU - KHENIFRA - MARRAKECH",
        "desc": "Travel in the morning to Marrakech via Azrou across the middle Atlas mountains, with visits to Berber villages, scenic views and classic markets. Lunch in Khenifra then continue on your quest in the Atlas to descend the foothills overlooking the magnificent oasis of Marrakech Alhamra, a city that captivates the imagination and reserves a satisfaction for every taste. Dinner in your hotel."
      },
      {
        "day": 5,
        "title": "MARRAKECH CITY TOUR",
        "desc": "The morning is devoted to discovering the historical sights. Historic visit of Marrakech will include the Menara, a magnificent pool surrounded by flower beds, reflecting the image of a beautiful Moorish construction built in 1866 for the dignitaries to enjoy glorious sunsets over the snow capped Atlas mountains that provide an ethereal backdrop. The pool is also a unique and functional irrigation system that belongs to an ancient design adapted by life in the desert. The tour will cover several impressive sights: The Koutoubia Minaret (the twin tower of la Giralda in Sevilla, Spain), the Saadian tombs demonstrating Moorish architecture in its perfection. The tombs, consisting of splendid mausoleums built in the sixteenth century, were walled for some time, not to be discovered until 1917. Overnight at the Hotel."
      },
      {
        "day": 6,
        "title": "MARRAKECH – EL JADIDA",
        "desc": "after your breakfast, you will travel to the city of El jadida, You will begin your city tour by exploring El Mallah (The Jewish carter) and the citadel, evidence of the 11th century Portuguese occupation, then you will take the road, to one of the best beaches of the Atlantic ocean Sidi Bouzid, where you will have lunch at the famous restaurant Le Requin bleu. After your lunch you will have the remain of the day at leisure to enjoy the blue Atlantic Ocean. You will conclude your day with dinner at your hotel."
      },
      {
        "day": 7,
        "title": "ELJADIDA - CASABLANCA -HOME",
        "desc": "Early morning transfer to Mohamed V Airport, for your connect flight home with a memorable Morocco Imperial Cities Tour of a lifetime."
      }
    ]
  },
  {
    "id": "imperial-sahara",
    "name": "Morocco Imperial Cities & Sahara",
    "duration": "10 Days / 9 Nights",
    "category": "Imperial Cities & Sahara Desert",
    "badge": "Bestseller",
    "image": "/images/bestofmorocco/img_tour_list_1.jpg",
    "price": "On Request (Best Price Guarantee)",
    "priceSub": "Best Price Guarantee (+5% match)",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Meknes",
      "Fes",
      "Midelt",
      "Erfoud",
      "Merzouga Dunes (Erg Chebbi)",
      "Tinghir",
      "Todra Gorges",
      "Ouarzazate",
      "Ait Ben Haddou",
      "Marrakech",
      "El Jadida"
    ],
    "overview": "A comprehensive 10 Days / 9 Nights journey exploring Casablanca, Rabat, Meknes, Fes and beyond. Fully customized private tour operated with our licensed native guides and modern vehicles.",
    "vehicles": "A/C Mini Van, 4x4 Land Cruiser in Merzouga, Camel Caravan",
    "hotels": "4* & 5* Hotels and Luxury Berber Desert Camp in Erg Chebbi",
    "inclusions": [
      "All transfers by A/C Mini Van",
      "4x4 Merzouga desert transfer",
      "Sunrise Camel ride",
      "9 nights accommodation at 4* & 5* hotels based on H.B basis",
      "Official English-speaking guide"
    ],
    "exclusions": [
      "Travel Insurance",
      "Lunches",
      "Drinks during meals",
      "Tips",
      "Local taxes (15% VAT)"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "CASABLANCA",
        "desc": "Upon your arrival to Mohamed V Airport, you will find your guide waiting for you to greet you and then transfer you to your hotel. In the afternoon you will go on a historic quest exploring Casablanca, \"principal city in Morocco, and capital in all but administration.\" Casablanca is now the largest port of the Maghreb- even busier than Marseille, the city on which it was modeled by the French. Dinner and overnight at the Hotel."
      },
      {
        "day": 2,
        "title": "CASABLANCA – RABAT",
        "desc": "Depart in the morning to Rabat the capital of the nation. This city in many ways is what you would expect: elegant in its spacious European grid, slightly self conscious in its very civilized modern aspect. rich with its ancient legacy of multiple civilizations that have swept through since the earliest historical archives leaving behind a collage of architectural styles, some of them are from the Phoenician and Roman era. Dinner and accommodation in your Hotel."
      },
      {
        "day": 3,
        "title": "RABAT – MEKNES – FES",
        "desc": "Travel to Meknes via Volubilis and Moulay Idris, an excursion which embodies much of Morocco's early history: Volubilis as its Roman provincial capital and Moulay Idris in the creation of the country's first Arab dynasty . Continuation to Fez, dinner and accommodation at the Hotel."
      },
      {
        "day": 4,
        "title": "FES CITY TOUR",
        "desc": "The most ancient of imperial capitals, and the most complete medieval city of the Islamic world, Fez is undeniably unique. Sensually stimulating with its haunting and beautiful sounds, infinite visual details, and unfiltered odors, Fez seems to exist suspended in time somewhere between the Middle Ages and today. Besides its electricity it owes absolutely nothing to the Western civilization. As a spectacle, this is an entirely satisfying experience and a learning process about the sophistication of the Moroccan artisan. the whole day will be at the Medina visiting in the morning, lunch in a typical Moroccan restaurant then continue on your quest visiting and shopping for the remainder of the day."
      },
      {
        "day": 5,
        "title": "FES – MIDELT – ERFOUD – MERZOUGA DUNES",
        "desc": "Today we will explore the rural and natural aspect of the Berbers of the Atlas Mountains. The first hills you see of the Middle Atlas seem oddly un-Moroccan. Evergreen pines, tall cedar trees on the peaks and poplars stand copiously on the foot hills, laced with flowing streams. The road across is almost ceremonial. Azrou, the first real town of the Middle Atlas, stands at a major junction of routes, it's an important market center for Berber tribes of the region. The Middle Atlas cease at Midelt, where suddenly, through the haze, appear the much greater peaks of the High Atlas formidably rise behind the town to reach a massive range, the Dgebel Ayashi at over 12,000 ft. The drama of this sight, tremendous in the clear, cool noon, is the most compelling reason to stop over for lunch. Erfoud, one of the most pleasing of all southern routes: a dry, red belt of desert, and then suddenly, a drop into the lush valley of Ziz filled with date palm groves and flowing streams. Dinner in your hotel."
      },
      {
        "day": 6,
        "title": "MERZOUGA – TODRA GORGES – OUARZAZATE",
        "desc": "Early Morning devoted to the camel ride to reach the sun rise, and then you will back to the Kasbah for Breakfast. Departing desert we set into village of Tinghir and to the nearby Todra Gorge. This gorge in the High Atlas present asthonishing spectacle, its gigantic rock walls change colors to magical effect as the day unfolds.The 300 meters tall cliff walls are mere 15 meters apart from each other. We have some time to stretch our legs and then go back to Tinghir for lunch. After lunch we will pay a visit to a Berber house for a cup of tea and to explore Berbere carpets and heritage jewels. After that we will travel along small villages painted in pink-grey colors merging into the local rock, ruins of kasbahs and ksours and parts of fertile shafts of land creating breathtaking contrast to the arid land. Later we continue the journey to Ouarzazate. You will conclude your day with dinner and other accommodations will be served at your hotel.."
      },
      {
        "day": 7,
        "title": "OUARZAZATE – AIT BENHADDOU – MARRAKECH",
        "desc": "You will spend most of your day en route to Marrakech, exploring the legendary Kasbah of AÃ¯t-Benhaddou, a renowned architectural marvel, and stopping in Taddart and Tizi Tishka pass, at an altitude of 11,000 feet. The pass divides the mountains into two distinct facets: the harsh, stark side acting as a shield that protects the hinterland from the harsh, dry expansion of the Sahara, and a lush side, soft and evergreen, which collects the moisture from the Gherbi winds of the Atlantic Ocean. You will arrive in Marrakech, a city of pleasure for both visitors and locals, where southern tribesmen and Berber villagers bring their goods to market and find a variety of entertainment. To tourists, the city is a feast for the imagination, full of incomparable beauty, situated before the towering mountains that provide a thrilling backdrop. After a visit to the bustling Jemaa El Fna square, you will conclude your day with dinner and other accommodations at your hotel.."
      },
      {
        "day": 8,
        "title": "MARRAKECH CITY TOUR",
        "desc": "The morning is devoted to discovering the historical sights. Historic visit of Marrakech will include the Menara, a magnificent pool surrounded by flower beds, reflecting the image of a beautiful Moorish construction built in 1866 for the dignitaries to enjoy glorious sunsets over the snow capped Atlas mountains that provide an ethereal backdrop. The pool is also a unique and functional irrigation system that belongs to an ancient design adapted by life in the desert. The tour will cover several impressive sights: The Koutoubia Minaret (the twin tower of la Giralda in Sevilla, Spain), the Saadian tombs demonstrating Moorish architecture in its perfection. The tombs, consisting of splendid mausoleums built in the sixteenth century, were walled for some time, not to be discovered until 1917. Overnight at the Hotel."
      },
      {
        "day": 9,
        "title": "MARRAKECH – EL JADIDA",
        "desc": "after your breakfast, you will travel to the city of El jadida, You will begin your city tour by exploring El Mallah (The Jewish carter) and the citadel, evidence of the 11th century Portuguese occupation, then you will take the road, to one of the best beaches of the Atlantic ocean Sidi Bouzid, where you will have lunch at the famous restaurant Le Requin bleu. After your lunch you will have the remain of the day at leisure to enjoy the blue Atlantic Ocean. You will conclude your day with dinner at your hotel."
      },
      {
        "day": 10,
        "title": "ELJADIDA - CASABLANCA -HOME",
        "desc": "Early morning transfer to Mohamed V Airport, for your connect flight home with a memorable trip of a lifetime."
      }
    ]
  },
  {
    "id": "north-south",
    "name": "North & South of Morocco",
    "duration": "10 Days / 9 Nights",
    "category": "Grand Tour (North, Mediterranean, Imperial & Desert)",
    "badge": "Signature Tour",
    "image": "/images/bestofmorocco/img_tour_list_5.jpg",
    "price": "On Request (Best Price Guarantee)",
    "priceSub": "Best Price Guarantee (+5% match)",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen (The Blue City)",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Midelt",
      "Erfoud",
      "Merzouga",
      "Tinghir",
      "Todra Gorges",
      "Ouarzazate",
      "Marrakech",
      "El Jadida"
    ],
    "overview": "A comprehensive 10 Days / 9 Nights journey exploring Casablanca, Rabat, Tangier, Chefchaouen (The Blue City) and beyond. Fully customized private tour operated with our licensed native guides and modern vehicles.",
    "vehicles": "A/C Minivan / Coach, 4x4 in Merzouga dunes, Camel trek",
    "hotels": "4* & 5* Hotels, Authentic Blue City Riad, Desert Camp",
    "inclusions": [
      "All transfers by A/C Mini Van",
      "4x4 Merzouga",
      "Sunrise Camel ride",
      "9 nights accommodation at 4* & 5* hotels (H.B)",
      "Professional Guide"
    ],
    "exclusions": [
      "Travel Insurance",
      "Lunches",
      "Drinks during meals",
      "Tips"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "CASABLANCA - RABAT",
        "desc": "As you arrive in Casablanca you will find your host waiting for you to greet you and then transfer you to Rabat. Rabat is an imperial city with a rich history of kingdoms that have swept through it for many centuries; leaving behind a collage of different architectural styles and a unique legacy. Afternoon sightseeing will highlight the Mellah (Jewish quarter), the Mohamed V mausoleum, the Oudaya Kasbah and the Andalous gardens. Dinner at the well centered Hotel Chellah."
      },
      {
        "day": 2,
        "title": "RABAT – TANGIER – CHEFCHAOUEN",
        "desc": "After breakfasts you will continue the road through Chefchaouen via Tangier, our North South Morocco Tours, we give you time to explore this bustling port city that was once the playground of international socialites, including artists, musicians, politicians and writers (Paul Bowles). The city is a lively, cosmopolitan, historic Mediterranean place where you get to explore a number of museums and sites. After lunch in the city Centre of Tangier you will continue to Chefchaouen, a beautiful blue and white-washed Andalusian town nestled in the Rif Mountains. The town is very relaxed, with small winding alleyways and market squares, where the women of the surrounding Rif come to sell their handmade products. Dinner is at the hotel."
      },
      {
        "day": 3,
        "title": "CHEFCHAOUEN – VOLUBILIS – MEKNES – FES",
        "desc": "On your way to Fez, you will first make an excursion to Volubilis, the remains of a Roman city, and Moulay Idriss, the burial place of the founder of Morocco's first imperial dynasty. For Moroccans it is a place of pilgrimage. You continue to Meknes, the smallest and friendliest of the five imperial cities of Morocco. The old part of Meknes is beautiful and has a feel of the oriental and the Mediterranean at the same time. The immense city walls and gates lead the visitors' imagination into times long gone. The labyrinth of alleyways and market stands is a joy to any visitor and the friendly inhabitants will gladly show you the products they are selling, like spices, olives, pottery, then toward to Fes."
      },
      {
        "day": 4,
        "title": "FES CITY TOUR",
        "desc": "After breakfast you will begin your guided tour of the medina, one of the world's largest walled in cities, this tour will start from the panoramic view of the old Medina, nearby the Saadian Fortress, from there you will go inside of the old medina via the famous gate of Boujloud (blue gate). You will explore the narrow streets lined with fresh fruit, mounds of spices, intricately woven Berber carpets and many other art objects of Morocco. A visit to the Kings Palace, the tanneries, and potters are just a few places you will experience. For lunch you will eat in traditional restaurant in the heart of the medina. After lunch you will complete the tour by visiting Kairaouine Mosque, Merdersa Bou Imaniaand Mosque Abou El Hassan then return to your hotel for the evening."
      },
      {
        "day": 5,
        "title": "FES – IFRANE – MIDELT – ERFOUD – MERZOUGA",
        "desc": "Travel to Ifrane, a pleasant mountain city oddly out of place with its wooden chalets and steep-pitched roofs that stud this skiing village, evoking a Swiss resort. An area long popular with Moroccans on holiday, five tranquil lakes rest near dense holm oak and cedar forests, where raptors, acrobatic booted eagles, and Egyptian vultures fly overhead. You will spend your day discovering the rural environs of the Atlas Mountains' Berbers. Covered with evergreen pines, tall cedar trees, and poplars, and laced with flowing streams, your first view of the Middle Atlases will appear oddly un-Moroccan. You will soon come across the first real town of the Middle Atlases, Azrou, and an important market center for the region's Berber tribes that are located at a major junction of mountain routes. At Midelt, the Middle Atlases give way to the High Atlas Mountains, whose peaks are visible through the haze, soaring to over 12,000 feet. You will stop in Midelt for lunch, enjoying the dramatic sight before you leave. You will then continue to Erfoud, one of the most delightful southern regions consisting of a dry, red belt of desert with a sudden drop into the lush valley of Ziz, with copious date palm groves and flowing streams. From there you will ride the 4x4 to get the lake of the Sahara. You will conclude your day with dinner over the dunes of Merzouga."
      },
      {
        "day": 6,
        "title": "MERZOUGA – TINGHIR – TODRA GORGES – OUARZAZATE",
        "desc": "Early Morning devoted to the camel ride to reach the sun rise, and then you will back to the Kasbah for Breakfast. Departing desert we set into village of Tinghir and to the nearby Todra Gorge. This gorge in the High Atlas present asthonishing spectacle, its gigantic rock walls change colors to magical effect as the day unfolds.The 300 meters tall cliff walls are mere 15 meters apart from each other. We have some time to stretch our legs and then go back to Tinghir for lunch. After lunch we will pay a visit to a Berber house for a cup of tea and to explore Berbere carpets and heritage jewels. After that we will travel along small villages painted in pink-grey colors merging into the local rock, ruins of kasbahs and ksours and parts of fertile shafts of land creating breathtaking contrast to the arid land. Later we continue the journey to Ouarzazate. You will conclude your day with dinner and other accommodations will be served at your hotel."
      },
      {
        "day": 7,
        "title": "OUARZAZATE – AIT BENHADDOU – MARRAKECH",
        "desc": "You will spend most of your day en route to Marrakech, exploring the legendary Kasbah of AÃ¯t-Benhaddou, a renowned architectural marvel, and stopping in Taddart and Tizi Tishka pass, at an altitude of 11,000 feet. The pass divides the mountains into two distinct facets: the harsh, stark side acting as a shield that protects the hinterland from the harsh, dry expansion of the Sahara, and a lush side, soft and evergreen, which collects the moisture from the Gherbi winds of the Atlantic Ocean. You will arrive in Marrakech, a city of pleasure for both visitors and locals, where southern tribesmen and Berber villagers bring their goods to market and find a variety of entertainment. To tourists, the city is a feast for the imagination, full of incomparable beauty, situated before the towering mountains that provide a thrilling backdrop. After a visit to the bustling Jemaa El Fna square, the Koutoubia Mosque, Saadian Tombs, and Bahia Palace. You will conclude your day with dinner and other accommodations at your hotel."
      },
      {
        "day": 8,
        "title": "MARRAKECH CITY TOUR",
        "desc": "The morning is devoted to discovering the historical sights. Historic visit of Marrakech will include the Menara, a magnificent pool surrounded by flower beds, reflecting the image of a beautiful Moorish construction built in 1866 for the dignitaries to enjoy glorious sunsets over the snow capped Atlas mountains that provide an ethereal backdrop. The pool is also a unique and functional irrigation system that belongs to an ancient design adapted by life in the desert. The tour will cover several impressive sights: The Koutoubia Minaret (the twin tower of la Giralda in Sevilla, Spain), the Saadian tombs demonstrating Moorish architecture in its perfection. The tombs, consisting of splendid mausoleums built in the sixteenth century, were walled for some time, not to be discovered until 1917. Overnight at the Hotel."
      },
      {
        "day": 9,
        "title": "MARRAKECH – EL JADIDA",
        "desc": "after your breakfast, you will travel to the city of El jadida, You will begin your city tour by exploring El Mallah (The Jewish carter) and the citadel, evidence of the 11th century Portuguese occupation, then you will take the road, to one of the best beaches of the Atlantic ocean Sidi Bouzid, where you will have lunch at the famous restaurant Le Requin bleu. After your lunch you will have the remain of the day at leisure to enjoy the blue Atlantic Ocean. You will conclude your day with dinner at your hotel."
      },
      {
        "day": 10,
        "title": "ELJADIDA - CASABLANCA -HOME",
        "desc": "Early morning transfer to Mohamed V Airport, for your connect flight home with a memorable trip of a lifetime."
      }
    ]
  },
  {
    "id": "atlantic-ocean",
    "name": "Morocco Atlantic Ocean Journey",
    "duration": "10 Days / 9 Nights",
    "category": "Coastal, Seafood & Heritage Tour",
    "badge": "Ocean Escape",
    "image": "/images/bestofmorocco/img_tour_list_7.jpg",
    "price": "On Request (Best Price Guarantee)",
    "priceSub": "Best Price Guarantee (+5% match)",
    "destinations": [
      "Casablanca",
      "El Jadida (Portuguese Citadel & Mazagan)",
      "El Oualidia (Oyster lagoon)",
      "Essaouira (Mogador)",
      "Agadir (Marina & Beach)",
      "Taroudant",
      "Marrakech"
    ],
    "overview": "A comprehensive 10 Days / 9 Nights journey exploring Casablanca, El Jadida (Portuguese Citadel & Mazagan), El Oualidia (Oyster lagoon), Essaouira (Mogador) and beyond. Fully customized private tour operated with our licensed native guides and modern vehicles.",
    "vehicles": "Deluxe air-conditioned vehicle throughout",
    "hotels": "Oceanfront resorts, Beachfront boutique hotels, Marrakech Riad",
    "inclusions": [
      "Private A/C Minibus",
      "9 nights in oceanfront hotels & boutique Riads (H.B)",
      "Local guided tours in El Jadida",
      "Essaouira",
      "Marrakech",
      "Airport transfers"
    ],
    "exclusions": [
      "International Flights",
      "Travel Insurance",
      "Lunches (except optional seafood feasts)",
      "Surf/Fishing classes",
      "Tips"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "CASABLANCA - EL JADIDA",
        "desc": "Upon your arrival at the Mohamed V Airport in Casablanca, you will meet your guide, who will take you immediately to check in at your hotel in El Jadida (45 hour Drive). That afternoon will be devoted to relax and acclimate. You will conclude your day with dinner at your hotel."
      },
      {
        "day": 2,
        "title": "EL JADIDA",
        "desc": "You will begin your day by exploring the city of El jadida, where you will visit El Mallah (The Jewish carter) and the citadel, evidence of the 11th century Portuguese occupation, then you will take the road, to one of the best beaches of the Atlantic ocean Sidi Bouzide, where you will have lunch at the famous restaurant Le Requin bleu. After your lunch you will be transferred to sidi Moussa a wild beach private, where you will enjoy the blue Atlantic Ocean. You will conclude your day with dinner at your hotel."
      },
      {
        "day": 3,
        "title": "EL JADIDA - EL OUALIDIA",
        "desc": "Only 70 kilometers from El Jadida, you will reach El Oualidia, the pearl of the Atlantic Ocean, this town is a stunningly picturesque little resort - a fishing port and lagoon beach, flanked by a kasbah and a royal villa. The kasbah is seventeenth century, built by the Saadian Sultan El Oualid (after whom the village is named) as a counterweight and alternative to El Jadida, then held by the Portuguese. Until Sultan Sidi Mohammed took El Jadida, the extensive lagoon made an excellent harbour and, as late as 1875, a French geographer thought that \"by a little dredging the place would again become the safest shipping station on the whole Moroccan seaboard\". The royal villa, which now stands empty, was built by Mohammed V, who celebrated many birthdays and other family events here. Your afternoon will be devoted to enjoy the beach; a sea food lunch is available to be served at the beach. Your day will end with dinner and other accommodations at the Hotel."
      },
      {
        "day": 4,
        "title": "EL OUALIDIA - ESSAOUIRA",
        "desc": "You will begin your day by traveling to Essaouira (Mogador), a picturesque city with a rich history. With a fascinating antiquity, Essaouira was occupied by the Phoenicians and Carthaginians, supplied essential purple dyes to the Romans, absorbed the sophisticated Jewish arts of silversmith, and spent centuries as a Portuguese enclave. Despite the obvious influence of these civilizations, Essaouira has managed to remain a small, authentic Berber town. Alive with the breath of fresh air provided by the Atlantic, Essaouira is a jewel nestled in the ragged coast, with a vast expanse of empty sands trailing back along the promontory towards the South. After an introductory tour, you will conclude your day with dinner in your hotel."
      },
      {
        "day": 5,
        "title": "ESSAOUIRA",
        "desc": "After your breakfast you will do the City tour and rest of day at leisure to enjoy the sea. Dinner and other accommodations will be served at your Hotel."
      },
      {
        "day": 6,
        "title": "ESSAOUIRA - AGADIR",
        "desc": "In the morning, you will travel to Agadir, the city is located on the shore of the Atlantic Ocean, near the foot of the Atlas Mountains, just north of the point where the Sous River empties into the sea, founded by the Portuguese around 1500, the city came under Moroccan control in 1526. Agadir today is a seaport (exporting cobalt, manganese and zinc) and seaside resort with a large sandy beach. Because of its large buildings, wide roads, modern hotels, and European-style, some consider it not typically Moroccan. Agadir is famous for its sea foods and agriculture."
      },
      {
        "day": 7,
        "title": "AGADIR",
        "desc": "Day at leisure to enjoy the Atlantic Ocean. Fishing or Surf class are available on request."
      },
      {
        "day": 8,
        "title": "AGADIR - MARRAKECH",
        "desc": "After your breakfast Depart to Marrakech, the \"Morocco City\" as the early travelers called it for it has always been something of a pleasure city, a market place where the southern tribesmen and Berber villagers bring in their goods, spend their money, and find entertainment. For tourists, it's an enduring fantasy - a city of immense beauty, low, pink, and tent-like before a great shaft of mountains, and immediately exciting. Visit of the famous Jemaa El Fna square. Dinner and overnight at the hotel."
      },
      {
        "day": 9,
        "title": "MARRAKECH",
        "desc": "The morning is devoted to discovering the historical sights. Historic visit of Marrakech will include the Menara, a magnificent pool surrounded by flower beds, reflecting the image of a beautiful Moorish construction built in 1866 for the dignitaries to enjoy glorious sunsets over the snow capped Atlas Mountains that provide an ethereal backdrop. The pool is also a unique and functional irrigation system that belongs to an ancient design adapted by life in the desert. The tour will cover several impressive sights: The Koutoubia Minaret (the twin tower of la Giralda in Sevilla, Spain), the Saadian tombs demonstrating Moorish architecture in its perfection. The tombs, consisting of splendid mausoleums built in the sixteenth century, were walled for some time, not to be discovered until 1917. Overnight at the hotel."
      },
      {
        "day": 10,
        "title": "MARRAKECH - CASABLANCA -HOME",
        "desc": "Early morning transfer to Mohamed V Airport, for your connect flight home with a memorable trip of a lifetime."
      }
    ]
  },
  {
    "id": "south-kasbahs",
    "name": "Morocco Great South & Kasbahs",
    "duration": "8 Days / 7 Nights",
    "category": "Sahara, Oases & Fortress Kasbahs",
    "badge": "Adventure",
    "image": "/images/bestofmorocco/img_tour_list_10.jpg",
    "price": "On Request (Best Price Guarantee)",
    "priceSub": "Best Price Guarantee (+5% match)",
    "destinations": [
      "Marrakech",
      "Tizi n'Tichka Pass",
      "Tinghir",
      "Todra Gorges",
      "Erfoud",
      "Ziz Valley",
      "Erg Chebbi Merzouga",
      "Rissani",
      "Zagora",
      "M'Hamid El Ghizlane",
      "Tamegroute",
      "Ouarzazate"
    ],
    "overview": "A comprehensive 8 Days / 7 Nights journey exploring Marrakech, Tizi n'Tichka Pass, Tinghir, Todra Gorges and beyond. Fully customized private tour operated with our licensed native guides and modern vehicles.",
    "vehicles": "4x4 Land Rovers & A/C Minivan",
    "hotels": "Authentic Southern Kasbahs, Berber Desert bivouacs",
    "inclusions": [
      "4x4 Land Rover expeditions",
      "Sunrise Camel trek",
      "7 nights lodging in Kasbahs & desert camps (H.B)",
      "Professional driver/guide"
    ],
    "exclusions": [
      "Travel Insurance",
      "Lunches",
      "Beverages",
      "Gratuities",
      "Personal expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "MARRAKECH",
        "desc": "Upon arrival at Menara Airport in Marrakech you will find your guide waiting for you to greet you then transfer you to your hotel for check-in. Known as the 'Pearl of the South,' this unique city was founded in the 11th century by the Almoravides Dynasty and is situated where the desert meets the mountains. Today's sightseeing includes the Saadian tombs, the Dar Si Said Museum, the Menara Gardens, and the focal point of the city: the 12 century Koutoubia Minaret. After lunch you will have an opportunity to visit the amazing souks, a maze of alleyways and multicolored shops, and lastly the Djemaa El Fna Square, where snake charmers, acrobats, and fortune tellers put on a never-ending show. Dinner and accommodations in the Hotel."
      },
      {
        "day": 2,
        "title": "MARRAKECH - TINGHIR",
        "desc": "After breakfast, we will start our journey south to Tinghir via Taddert and the Tizin Tichka Pass in the heart of the Atlas Mountain chain. Visit to the Berber village of Ait Ben Haddou to reach Ouarzazate for lunch. Follow the route of a thousand Kasbahs through the Dades Valley to the village of Tinghir. Visit Kalaa des Mogouna the Persian roses haven. Dinner and accommodations at the Hotel."
      },
      {
        "day": 3,
        "title": "TINGHIR - ERFOUD",
        "desc": "Morning visit to the Todra gorges and continue to Erfoud exploring the Ziz valley. Erfoud, one of the most pleasing of all southern routes: a dry, red belt of desert, and then suddenly, a drop into the valley filled with date palm groves. A land lost in antiquity, your guide will elaborate on every detail. Dinner accommodations at the Hotel."
      },
      {
        "day": 4,
        "title": "MERZOUGA DUNES - RISSANI - ZAGORA",
        "desc": "Land Rovers will be out side your hotel ready to take across the desert to the magnificent dunes of Erg Chebbi. An experience not to be missed is to watch the sun rises from the spectacular Merzouga dunes of the Sahara. So beautiful that no word can describe. Breakfast with the Tuaregs who will offer their saddled camels as an option for those who like to take a stroll around the area. Continue on to explore the holy ancient city of Rissani and the desert to Zagora. Dinner and accommodations at the Hotel."
      },
      {
        "day": 5,
        "title": "ZAGORA - M'HAMID - TAMEGROUTE - ZAGORA",
        "desc": "A very interesting full day's excursion to the real gateway of the Moroccan Saharan Desert. We will drive through the lowlands and then along the mountain passes to Tamegroute. There, we will stop to visit the famous Moorish Koranic Library, with rare books and documents, some are written on gazelle hide from the 13th century, a humble village where deep knowledge is given in the most simplistic way. Return to Zagora for the night."
      },
      {
        "day": 6,
        "title": "ZAGORA - OUARZAZATE - MARRAKECH",
        "desc": "After breakfast, we will depart to Marrakech, stopping en route in Ouarzazate once again. Morning sightseeing of Ouarzazate where the women still weave the famous Ouazguita carpets noted for their natural colors, geometric and symbolic designs. Life is concentrated here in the oases and Kasbahs that contrast with the vast and stark desert plateaux that surround the city. Return to Marrakech for farewell dinner with a spectacle of the Fantasia, where you will experience a typical Moroccan meal under a caidal Berber tent. Enjoy the folklore entertainment!"
      },
      {
        "day": 7,
        "title": "MARRAKECH - CASABLANCA -HOME",
        "desc": "Early morning transfer to Mohamed V Airport, for your connect flight home with a memorable trip of a lifetime."
      }
    ]
  },
  {
    "id": "jewish-heritage",
    "name": "Jewish Heritage of Morocco",
    "duration": "10 Days / 9 Nights",
    "category": "Spiritual, Heritage & Historical Shrines",
    "badge": "Cultural Heritage",
    "image": "/images/bestofmorocco/img_tour_list_14.jpg",
    "price": "On Request (Best Price Guarantee)",
    "priceSub": "Best Price Guarantee (+5% match)",
    "destinations": [
      "Casablanca (Beth-El, Temple Em-Habanim, Jewish Museum)",
      "Rabat",
      "Fes (Mellah, Danan Synagogue, Jewish Cemetery)",
      "Meknes",
      "Khenifra",
      "Marrakech (Salat Al Azama Synagogue, Rabbi Hanania Ha-Cohen)",
      "Ourika Valley",
      "Essaouira (Rabbi Chaim Pinto shrine)",
      "Taroudant",
      "Arazan (Adobe synagogue)",
      "Tafraout"
    ],
    "overview": "A comprehensive 10 Days / 9 Nights journey exploring Casablanca (Beth-El, Temple Em-Habanim, Jewish Museum), Rabat and beyond. Fully customized private tour operated with our licensed native guides and modern vehicles.",
    "vehicles": "Private A/C deluxe transportation",
    "hotels": "4* & 5* historic hotels & Riads",
    "inclusions": [
      "Private A/C Minivan",
      "Specialized Jewish Heritage local guides",
      "9 nights in 4* & 5* hotels (Kosher / Kosher-friendly meal options on request)",
      "Entrance fees to synagogues and heritage museums"
    ],
    "exclusions": [
      "International flights",
      "Travel Insurance",
      "Lunches",
      "Gratuities"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "CASABLANCA",
        "desc": "You will arrive at the Mohamed V Airport in Casablanca, you will meet our guide, who will take you directly to your hotel, so that you can check in and relax before beginning your busy day. You will spend the remainder of your day visiting Casablanca's most esteemed monuments, including the recently completed Mosque Hassan II (one of the largest mosques outside of Mecca). You will tour the Quartier Habous, visiting the Law Courts and the Gates of the royal palace, and then at low tide, you will go to see the island of the Marabout Sidi Abderrahman. Afterward, you will return to your hotel for dinner and other accommodations."
      },
      {
        "day": 2,
        "title": "CASABLANCA – RABAT - FES",
        "desc": "After eating breakfast at your hotel, you will depart for Rabat, the capital city of Morocco. There, you will visit the Hassan Tower, the Chella Necropolis, and the Kasbah des Oudaias, which overlooks the Atlantic Ocean. Additionally, you will see the Mausoleum of Mohamed V, grandfather of the ruling king, Mohamed VI. Revered by Muslims and Jews alike, Mohamed V was able to save Moroccan Jews from the fate of their European brethren during the Vichy regime's occupation in World War Two. Additionally, he achieved Morocco's independence from France in 1961. After visiting these spectacular monuments, you will go to a newly opened, private museum just outside Rabat. Founded by the 1991 Prix d'Or recipient, a craftsman and collector responsible for the restoration of the 27 domes of the mosque at Medina, it holds one of the finest collections of Moroccan crafts and relics in the world. Your journey will continue until you reach Moulay Idriss. For those who are unable to make the pilgrimage to Mecca for the Hajj duty, it is of equal merit to make five trips to Moulay Idriss, the holiest Muslim site in all of Morocco. Afterward, you will visit the extensive ruins at Volubilis, once the Roman capital of Northwestern Africa. You will complete the last leg of the day's journey, and will arrive at Fez in the evening. There, you will check into your hotel in the Ville Nouvelle, where you will conclude your day with dinner and other accommodations."
      },
      {
        "day": 3,
        "title": "FES",
        "desc": "You will spend your morning exploring the Fez J'did and the Mellah (Jewish quarter.) There, you will visit synagogues that date back to the seventeenth century, as well as the vast Jewish cemetery, which is adjacent to the gates of the Royal Palace, and the Jewish Museum, located at the Em HaBanim synagogue. Afterward, you will tour Fez el-Bali, visiting the medressa Bou Inania (a Koranic university), the Fondouk Nejjarine, the mausoleum of Moulay Idriss II, the Medressa Attarine, the famous tanneries, the House of Maimonides, which its fascinating water clock, and several other intriguing sites. The narrow, cobbled streets of Fez are lined with ancient mosques, towering minarets, crumbling fondouks (inns for medieval travelers), and narrow openings, which lead to a fascinating world filled with carved cedar portals, brilliantly colored mosaic tiles, delicately carved stucco ornaments, and green glazed roofs. This is a world caught in the past; veiled women hurry through the streets, donkeys plod along, laden with goods, and craftsmen forge their wares almost ceremoniously. Here, our staff will arrange for you a visit to a privately owned, 18th century Riad, a traditional Islamic courtyard house which was once one of the wealthiest mansions in Fez. You will conclude your day with dinner and other accommodations at your hotel."
      },
      {
        "day": 4,
        "title": "FES – MEKNES – FES",
        "desc": "You will spend your morning on an excursion to Meknes, visiting its famous city gates and the tomb of Moulay Ismail, both magnificent examples of Islamic architecture. You will then explore the Imperial quarters of Moulay Ismail, including the renowned Imperial Stables. You will spend your afternoon hiking at Ifrane and Immouzer heights, after which you will return to Fez for dinner and other accommodations."
      },
      {
        "day": 5,
        "title": "FES – KHENIFRA – MARRAKECH",
        "desc": "Your morning will be spent traveling to Marrakech via the Middle Atlas Mountains and Ifrane. You will stop briefly to visit the Cascade of Ouzoud, and will spend your afternoon hiking. That evening, you will arrive in Marrakech, where you will immediately check into your hotel. Afterward, you will spend the remainder of your time before dinner at the bustling Jemaa el Fnaa Square, alive with storytellers, snake charmers, magicians, and street performers. You will conclude your day with dinner and other accommodations at your hotel."
      },
      {
        "day": 6,
        "title": "MARRAKECH",
        "desc": "After eating breakfast at your hotel, you will spend your morning exploring the Mellah, where you will see the cemetery and numerous synagogues. Afterward, you will discover the most exotic features of Marrakech, including the towering Koutoubia minaret, the Saadien Tombs, the Menara Gardens, the Medersa ben Youssef, the domed Koubba, the Dar Si Said Museum, the Maison Tiskiwin, the Bahia Palace, and Yves St. Laurent's Majorelle Gardens. You will return to your hotel for lunch and then venture into the colorful markets of Marrakech, replete with spices, carpets, jewelry, and countless other items. You will conclude your day with dinner and other accommodations at your hotel."
      },
      {
        "day": 7,
        "title": "MARRAKECH - OURIKA VALLEY - MARRAKECH",
        "desc": "You will eat breakfast at your hotel, after which there will be an optional morning excursion to the Ourika Valley of the High Atlas Mountains. There, you can stroll through adobe villages with centuries of Jewish heritage. You will devote your afternoon to hiking in the valley, full of breathtaking scenery. In the evening, there will be an optional dinner at Yacout, the finest restaurant in all of Morocco."
      },
      {
        "day": 8,
        "title": "MARRAKECH – ESSAOUIRA",
        "desc": "Breakfast will be available in your hotel, and you will have the remainder of the morning at your leisure. In the early afternoon, you will travel to the seaside city of Essaouira, where you will check into your hotel. Afterward, you will have the opportunity to explore this former Portuguese colony. The town was once over thirty percent Jewish and contained over thirty synagogues, some dating back to the eighteenth century. You will visit some of these synagogues, as well as the tomb of Rabbi Chaim Pinto, who is the object of an annual pilgrimage in the week preceding Rosh Hashanah, situated in the vast Jewish cemetery adjacent to the Atlantic Ocean. You will spend the rest of your day discovering the delights of Essaouira, including the ramparts, and the street of Thuya craftsmen. You will conclude your day with dinner and other accommodations at your hotel."
      },
      {
        "day": 9,
        "title": "ESSAOUIRA - TAROUDANT",
        "desc": "After eating breakfast at your hotel, you will have the remainder of the morning to complete your exploration of Essaouira. In the afternoon, you will depart for Taroudant, where you will check into your hotel, a former palace built against the city ramparts, where peacocks roam freely through the colorful gardens. You will conclude your day with dinner and other accommodations."
      },
      {
        "day": 10,
        "title": "TAROUDANT - ARAZAN - TAROUDANT",
        "desc": "You will eat breakfast at your hotel, and then enjoy an excursion to the nearby village of Arazan. There, you will visit the newly restored adobe synagogue, which is believed to be the only adobe synagogue in the world. With Hebrew prayers painted on its earthen walls, this gem is one of Morocco's best-kept secrets. You will spend the remainder of the morning exploring the village, with the rare opportunity of visiting a private home. You will have the afternoon to discover the beauty of Taroudant, followed by dinner and other accommodations at your hotel."
      },
      {
        "day": 11,
        "title": "TAROUDANT - TAFROUT - AMELN VALLEY - TAROUDANT",
        "desc": "You will spend your morning on an excursion to Tafraout and the beautiful Valley des Ameln. Then, you will visit a weekly souk, one of the vital institutions of rural Morocco's economy, in the village of Ait Baha. You will spend the remainder of your day exploring the village of Tafrout and hiking to \"Les Pierres Bleues,\" a project completed in 1984 by Belgian artist Jean Verame, who used over 18 tons of paint. You will then return to your hotel in Taroudant for dinner and other accommodations."
      },
      {
        "day": 12,
        "title": "TAROUDANT - AGADIR - CASABLANCA - HOME",
        "desc": "After breakfast at your hotel, your driver will take you to Agadir airport, where you will catch a plane to Casablanca. There, you will board a plane home bound."
      }
    ]
  },
  {
    "id": "premium-tour",
    "name": "Premium Morocco Tour",
    "duration": "9 Days / 8 Nights",
    "category": "All-Inclusive Luxury Guided Tour",
    "badge": "All-Inclusive €999",
    "image": "/images/bestofmorocco/img_carousel_palace.jpg",
    "price": "€999.00 EUR per person (Single Supplement: €299.00 EUR; Children ≤5 yrs Free)",
    "priceSub": "Single Supplement: €299 | Kids ≤5 Free",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Midelt",
      "Erfoud",
      "Merzouga Dunes",
      "Tinghir",
      "Todra Gorges",
      "Ouarzazate",
      "Ait Ben Haddou",
      "Marrakech",
      "Essaouira",
      "El Jadida"
    ],
    "overview": "A comprehensive 9 Days / 8 Nights journey exploring Casablanca, Rabat, Chefchaouen, Volubilis and beyond. Fully customized private tour operated with our licensed native guides and modern vehicles.",
    "vehicles": "2022 Deluxe A/C Coach, 4x4 in Merzouga, Camel ride",
    "hotels": "Hotel Barcelo Casablanca/Rabat, Hotel Parador Chefchaouen, Hotel Barcelo Fes, Royal Luxury Camp Merzouga, Oscar Hotel Ouarzazate, Palm Plaza Hotel Marrakech, Hotel Atlas Essaouira, Grand Mogador Casablanca",
    "inclusions": [
      "All transfers by 2022 A/C coach",
      "4x4 Merzouga transfer",
      "Camel ride",
      "8 nights accommodation at 4* & 5* hotels based on H.B basis",
      "All lunches",
      "dinners and mineral water during meals",
      "Daily 3 small bottles of mineral water per person in VAN",
      "English speaking guide throughout whole tour",
      "Entrance ticket fees for all sites including Hassan II Mosque"
    ],
    "exclusions": [
      "Travel Insurance",
      "Personal alcoholic drinks",
      "Tips ($7/day: $4 guide",
      "$3 driver)"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "CASABLANCA - RABAT - CHEFCHAOUEN",
        "desc": "As you arrive in Casablanca you will find your host waiting for you to greet you and then transfer you to Rabat. Rabat is an imperial city with a rich history of kingdoms that have swept through it for many centuries; leaving behind a collage of different architectural styles and a unique legacy, sightseeing will highlight the Mellah (Jewish quarter), the Mohamed V mausoleum, the Oudaya Kasbah and the Andalous gardensAfter lunch Dar Rbatia in the old Medina you will continue to Chefchaouen, a beautiful blue and white-washed Andalusian town nestled in the Rif Mountains. The town is very relaxed, with small winding alleyways and market squares, where the women of the surrounding Rif come to sell their handmade products. Dinner is at the amazing Guest House Dar Echchaouen."
      },
      {
        "day": 2,
        "title": "CHEFCHAOUEN – VOLUBILIS – MEKNES – FES",
        "desc": "The morning is divoted to explore the blue perle of Morocco with your guide, On your way to Fez, you will stop at Motel Rif for a seafood lunch then you will make an excursion to Volubilis, the remains of a Roman city, and Moulay Idriss, the burial place of the founder of Morocco's first imperial dynasty. For Moroccans it is a place of pilgrimage. You continue to Meknes, the smallest and friendliest of the five imperial cities of Morocco. The old part of Meknes is beautiful and has a feel of the oriental and the Mediterranean at the same time. The immense city walls and gates lead the visitors' imagination into times long gone. The labyrinth of alleyways and market stands is a joy to any visitor and the friendly inhabitants will gladly show you the products they are selling, like spices, olives, pottery, then toward to Fes. Overnight at Hotel Barcelo Fes."
      },
      {
        "day": 3,
        "title": "FES CITY TOUR",
        "desc": "After breakfast you will begin your guided tour of the medina, one of the world's largest walled in cities, this tour will start from the panoramic view of the old Medina, nearby the Saadian Fortress, from there you will go inside of the old medina via the famous gate of Boujloud (blue gate). You will explore the narrow streets lined with fresh fruit, mounds of spices, intricately woven Berber carpets and many other art objects of Morocco. A visit to the Kings Palace, the tanneries, and potters are just a few places you will experience. For lunch you will eat in traditional restaurant in the heart of the medina. After lunch you will complete the tour by visiting Kairaouine Mosque, Merdersa Bou Imaniaand Mosque Abou El Hassan then return to your hotel for the evening. Overnight at Hotel Barcelo Fes."
      },
      {
        "day": 4,
        "title": "FES – IFRANE – MIDELT – ERFOUD – MERZOUGA",
        "desc": "Travel to Ifrane, a pleasant mountain city oddly out of place with its wooden chalets and steep-pitched roofs that stud this skiing village, evoking a Swiss resort. An area long popular with Moroccans on holiday, five tranquil lakes rest near dense holm oak and cedar forests, where raptors, acrobatic booted eagles, and Egyptian vultures fly overhead. You will spend your day discovering the rural environs of the Atlas Mountains' Berbers. Covered with evergreen pines, tall cedar trees, and poplars, and laced with flowing streams, your first view of the Middle Atlases will appear oddly un-Moroccan. You will soon come across the first real town of the Middle Atlases, Azrou, and an important market center for the region's Berber tribes that are located at a major junction of mountain routes. At Midelt, the Middle Atlases give way to the High Atlas Mountains, whose peaks are visible through the haze, soaring to over 12,000 feet. You will stop in Midelt for lunch, enjoying the dramatic sight before you leave. You will then continue to Erfoud, one of the most delightful southern regions consisting of a dry, red belt of desert with a sudden drop into the lush valley of Ziz, with copious date palm groves and flowing streams. From there you will ride the 4x4 to get the lake of the Sahara. You will conclude your day with dinner over the dunes of Merzouga. Overnight at Royal Luxury Camp."
      },
      {
        "day": 5,
        "title": "MERZOUGA – TINGHIR – TODRA GORGES – OUARZAZATE",
        "desc": "Early Morning devoted to the camel ride to reach the sun rise, and then you will back to the Kasbah for Breakfast. Departing desert we set into village of Tinghir and to the nearby Todra Gorge. This gorge in the High Atlas present asthonishing spectacle, its gigantic rock walls change colors to magical effect as the day unfolds.The 300 meters tall cliff walls are mere 15 meters apart from each other. We have some time to stretch our legs and then go back to Tinghir for lunch. After lunch we will pay a visit to a Berber house for a cup of tea and to explore Berbere carpets and heritage jewels. After that we will travel along small villages painted in pink-grey colors merging into the local rock, ruins of kasbahs and ksours and parts of fertile shafts of land creating breathtaking contrast to the arid land. Later we continue the journey to Ouarzazate. You will conclude your day with dinner and other accommodations will be served at your hotel. Overnight at Oscar Hotel."
      },
      {
        "day": 6,
        "title": "OUARZAZATE – AIT BENHADDOU – MARRAKECH",
        "desc": "You will spend most of your day en route to Marrakech, exploring the legendary Kasbah of AÃ¯t-Benhaddou, a renowned architectural marvel, and stopping in Taddart and Tizi Tishka pass, at an altitude of 11,000 feet. The pass divides the mountains into two distinct facets: the harsh, stark side acting as a shield that protects the hinterland from the harsh, dry expansion of the Sahara, and a lush side, soft and evergreen, which collects the moisture from the Gherbi winds of the Atlantic Ocean. You will arrive in Marrakech, a city of pleasure for both visitors and locals, where southern tribesmen and Berber villagers bring their goods to market and find a variety of entertainment. To tourists, the city is a feast for the imagination, full of incomparable beauty, situated before the towering mountains that provide a thrilling backdrop. After a visit to the bustling Jemaa El Fna square, the Koutoubia Mosque, Saadian Tombs, and Bahia Palace. You will conclude your day with dinner and other accommodations at your hotel. Overnight at Hotel Palm Plaza Hotel."
      },
      {
        "day": 7,
        "title": "MARRAKECH - ESSAOUIRA",
        "desc": "The morning is devoted to discovering the historical sights. The tour will cover several impressive sights: The Koutoubia Minaret (the twin tower of la Giralda in Sevilla, Spain), Bahia Palace and the Majorel Gardens. after lunch you will leave to Essaouira (Mogador), a picturesque city with a rich history. With a fascinating antiquity, Essaouira was occupied by the Phoenicians and Carthaginians, supplied essential purple dyes to the Romans, absorbed the sophisticated Jewish arts of silversmith, and spent centuries as a Portuguese enclave. Despite the obvious influence of these civilizations, Essaouira has managed to remain a small, authentic Berber town. Alive with the breath of fresh air provided by the Atlantic, Essaouira is a jewel nestled in the ragged coast, with a vast expanse of empty sands trailing back along the promontory towards the South before arriving Essaouira, we will make a visit to one of our farms with plenty of Argan trees were we Guarantee to admire the goats eating leaves of this unique tree. After an introductory tour, you will conclude your day with dinner in your hotel Atlas Essaouira"
      },
      {
        "day": 8,
        "title": "ESSAOUIRA – EL JADIDA - CASABLANCA",
        "desc": "after your breakfast, you will travel to the city of El jadida, You will begin your city tour by exploring El Mallah (The Jewish carter) and the citadel, evidence of the 11th century Portuguese occupation, then you will take the road, to one of the best beaches of the Atlantic ocean Sidi Bouzid, where you will have lunch at the famous restaurant Le Requin bleu. After your lunch you will have the remain of the day at leisure to enjoy the blue Atlantic Ocean in Casablanca. You will conclude your day with dinner at your hotel Grand Mogador Casablanca."
      },
      {
        "day": 9,
        "title": "CASABLANCA -HOME",
        "desc": "The morning is devoted to a guided tour of the great mosque of Hassan II, then a transfer to Mohamed V Airport, for your connect flight home with a memorable trip of a lifetime."
      }
    ],
    "departures": [
      "12-20 April 2024",
      "2-10 May 2024",
      "11-19 Oct 2024",
      "27 Dec 2024 - 4 Jan 2025"
    ]
  }
];

export const catalogTours: CatalogTour[] = [
  {
    "name": "Hike Morocco High Atlas Valleys",
    "duration": "7 Days / 6 Nights",
    "category": "Trekking & Mountain Adventure",
    "rating": "9.5 / 10 (Very Good)",
    "summary": "Guided trekking through Toubkal National Park, Imlil Valley, Ait Bougmez (Happy Valley), and Berber mountain villages with certified mountain guides and mule support.",
    "image": "/images/bestofmorocco/img_tour_list_11.jpg"
  },
  {
    "name": "Best of Morocco & Spain",
    "duration": "10 Days / 9 Nights",
    "category": "Cross-Border Andalusian & Moorish Tour",
    "rating": "9.5 / 10 (Very Good)",
    "summary": "Combined Mediterranean journey linking Madrid, Seville, Granada (Alhambra), ferry across Strait of Gibraltar, Tangier, Chefchaouen, Fes, and Marrakech.",
    "image": "/images/bestofmorocco/img_tour_list_12.jpg"
  },
  {
    "name": "Fez World Sacred Music Festival 2023",
    "duration": "10 Days / 9 Nights",
    "category": "Music & Spiritual Festival",
    "rating": "9.5 / 10 (Good)",
    "summary": "VIP access and guided excursions for the 27th Annual World Sacred Music Festival in Fez, celebrating spiritual chants, world music ensembles, and medina Sufi nights.",
    "image": "/images/bestofmorocco/img_tour_list_13.jpg"
  },
  {
    "name": "Fez Sufi Festival 2023",
    "duration": "9 Days / 8 Nights",
    "category": "Sufism & Mystical Heritage",
    "rating": "9.5 / 10 (Very Good)",
    "summary": "Deep dive into Moroccan spiritual culture, Tariqas (Sufi brotherhoods), Samaa recitations, and sacred architecture in Fez and Moulay Idriss.",
    "image": "/images/bestofmorocco/img_tour_list_3.jpg"
  },
  {
    "name": "Imilchil Wedding Festival 2023",
    "duration": "10 Days / 9 Nights",
    "category": "Berber Folklore & Cultural Festival",
    "rating": "8.5 / 10 (Superb)",
    "summary": "Annual September gathering of Ait Hadiddou tribes in the High Atlas plateaus, featuring the legendary bridal festival, traditional ceremonies, poetry, and vibrant souks.",
    "image": "/images/bestofmorocco/img_tour_list_4.jpg"
  },
  {
    "name": "Essaouira Gnaoua Festival 2023",
    "duration": "7 Days / 6 Nights",
    "category": "Gnaoua & World Music Festival",
    "rating": "9.5 / 10 (Superb)",
    "summary": "Electrifying cultural celebration on the Atlantic coast, featuring Master Maâlems, trance music, jazz-fusion concerts, and Atlantic beach excursions.",
    "image": "/images/bestofmorocco/img_tour_list_6.jpg"
  },
  {
    "name": "Morocco Cooking Class Journey",
    "duration": "8 Days / 7 Nights",
    "category": "Gastronomy & Culinary Masterclasses",
    "rating": "9.5 / 10 (Very Good)",
    "summary": "Hands-on culinary expeditions through spice souks, organic farms, and traditional riads learning tajine preparation, couscous rolling, pastilla crafting, and Moroccan mint tea rituals from Master Dadas.",
    "image": "/images/bestofmorocco/img_tour_list_9.jpg"
  },
  {
    "name": "Morocco Honeymoon Package",
    "duration": "8 Days / 7 Nights",
    "category": "Romantic Luxury Escapes",
    "rating": "7.5 / 10 (Superb)",
    "summary": "Intimate romantic getaway featuring VIP riad suites, private candlelit dinners in desert dunes, horse carriage rides in Marrakech, and luxury spa hammam sessions.",
    "image": "/images/bestofmorocco/img_tour_list_8.jpg"
  }
];

export const teamGuides: GuideProfile[] = [
  {
    "name": "Ayoub Sadeddine",
    "role": "CEO & Founder / Senior Tour Manager",
    "license": "Tour Guide Licence No. 2816 (Ministry of Tourism, Morocco - April 2015)",
    "education": [
      "OPC QC Canada Travel Advisor Certificate (Sep 2017)",
      "ITHQ QC Canada Professional Degree in Travel & Tourism (Oct 2016)",
      "ISAT Fes Tourism & Hotel Management Degree (Jun 2009)",
      "ISTHT El Jadida Advanced Event Management Degree (Jun 2007)"
    ],
    "experience": "20+ Years in Moroccan Tourism Industry (Family heritage starting in grandfather's medina restaurant in Marrakech)",
    "background": "Moroccan Berber origin, family rooted in Ait Oumras (Atlas Mountains, Azilal), born in Marrakech, educated in Fes, El Jadida, and Montreal/Quebec, Canada.",
    "languages": "English, French, Arabic, Moroccan Berber, Spanish",
    "philosophy": "Based on King Hassan II philosophy: 'The entire world is our family'. Life-seeing with local services rather than crowded sightseeing.",
    "image": "/images/bestofmorocco/img_team_team-1.jpg"
  },
  {
    "name": "Mohamed",
    "role": "Lead Tour Guide & Cultural Ambassador",
    "license": "Licensed National Tourist Guide (Ministry of Tourism)",
    "education": [
      "Certified National Tour Guide accreditation & Cultural Heritage studies"
    ],
    "experience": "15+ Years guiding international travelers, families, and VIP groups",
    "background": "Renowned for warm Moroccan hospitality, deep medina navigation, and treating guests as true lifelong friends (as commended in client testimonials).",
    "languages": "English, French, Spanish, Arabic, Berber",
    "philosophy": "Creating genuine human connections and unforgettable cultural immersion.",
    "image": "/images/bestofmorocco/img_team_team-profile.jpg"
  },
  {
    "name": "Morocco National & Local City Guides Team",
    "role": "Licensed Official City Guides (Casablanca, Rabat, Fes, Marrakech, Meknes, Chefchaouen)",
    "license": "Official Badged Guides Licensed by the Moroccan Ministry of Tourism",
    "education": [
      "Degrees in Moroccan History, Islamic Architecture, Archeology, and Foreign Languages"
    ],
    "experience": "Over 20 years combined guiding across historical medinas, imperial palaces, Roman ruins, and souks",
    "background": "Native Moroccans born and raised in each imperial city with generational heritage and exclusive monument access.",
    "languages": "English, French, Spanish, German, Italian, Russian, Arabic",
    "philosophy": "Expert narrative storytelling, zero waiting in museum lines, and protection from tourist traps.",
    "image": null
  },
  {
    "name": "High Atlas Mountain & Desert Trekking Guides",
    "role": "Certified Mountain Hikers & Sahara Camel Caravaneers",
    "license": "Federation of Mountain Guides & Desert Operations Licences",
    "education": [
      "Wilderness First Aid, Mountain Navigation, Eco-Tourism & Leave No Trace Principles"
    ],
    "experience": "Over 12,000 km guided through Toubkal peaks, Dades & Todra Gorges, Erg Chebbi, and Erg Chigaga dunes",
    "background": "Native Amazigh (Berber) tribesmen from the High Atlas and Sahara nomadic traditions.",
    "languages": "Berber (Tashelhit/Tamazight), French, English, Arabic",
    "philosophy": "Authentic mountain hospitality, sustainable eco-friendly stays, and deep respect for nature.",
    "image": null
  },
  {
    "name": "Professional Chauffeurs & Transportation Fleet Team",
    "role": "Licensed Tourist Transport Drivers",
    "license": "Professional Tourist Transport Driving Permits & Defensive Driving Certified",
    "education": [
      "Moroccan Road Transport Safety, Passenger Care & Mechanics"
    ],
    "experience": "Over 12,000 bus kilometers navigated with spotless safety records",
    "background": "Equipped with brand-new 2022 A/C luxury coaches, Mercedes Sprinter minivans, and 4x4 Toyota Land Cruisers.",
    "languages": "English, French, Arabic, Berber",
    "philosophy": "Utmost passenger comfort, complimentary mineral water onboard, seamless airport transfers, and total safety.",
    "image": null
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    "name": "Nick Kontis",
    "date": "17 May 2014",
    "location": "San Francisco, United States",
    "role": "Travel Industry Veteran & Tour Operator",
    "image": "/images/bestofmorocco/img_testimonial_1.jpg",
    "quote": "As someone who has been in the business all of my working life, I have had the pleasure of dealing with travel agents and operators throughout the world. When it comes to sending clients to Morocco, I can tell you Ayoub and Best of Morocco Tours are your trusted source for all Morocco travel needs. Ayoub covers every detail and my clients praised his wonderful service. Ayoub, thank you again for your fine work."
  },
  {
    "name": "Fath Katif",
    "date": "28 June 2016",
    "location": "Almere, Nederland",
    "role": "Private Family Traveler",
    "image": "/images/bestofmorocco/img_testimonial_2.jpg",
    "quote": "Thank you so much for all your help planning our family trip to Morocco! Everything was planned wonderfully. The tour guide and driver were incredible, but I wanted to note in particular that Tour Manager Ayoub was amazing. Mohamed was not just a tour guide, but a friend to all of us and that is so rare to find. This was truly an amazing experience and I would highly recommend Best of Morocco Tours to anyone."
  },
  {
    "name": "Irina Stepanova",
    "date": "20 October 2017",
    "location": "St. Petersburg, Russia",
    "role": "Private Leisure Traveler",
    "image": "/images/bestofmorocco/img_testimonial_3.jpg",
    "quote": "Dear Ayoub, Yesterday we came home, but our hearts are still in Morocco. Thank you for your warm welcoming. The tour was organized very well. I am so satisfied with the trip. It is so good that I had the opportunity to experience the high caliber of service your company provides. My warmest regards to everyone."
  },
  {
    "name": "Dr. Jean-Marc Tremblay",
    "date": "14 April 2023",
    "location": "Montréal, Québec, Canada",
    "role": "Imperial Cities & Sahara Traveler",
    "image": "/images/bestofmorocco/img_testimonial_1.jpg",
    "quote": "Partir avec une agence qui détient à la fois les permis du Québec et du Ministère marocain apporte une tranquillité d'esprit inestimable. De la nuit magique à Merzouga dans les tentes de luxe aux ruines de Volubilis avec notre guide érudit, tout a dépassé nos espérances. Service d'une élégance rare."
  },
  {
    "name": "Eleanor & Marcus Davies",
    "date": "08 November 2023",
    "location": "London, United Kingdom",
    "role": "Bespoke Cultural Journey",
    "image": "/images/bestofmorocco/img_testimonial_2.jpg",
    "quote": "From our private Mercedes van with cool bottled water each morning to the secret rooftop tea tastings in Fes and Marrakech, Ayoub's team orchestrated the trip of a lifetime. The native guides brought centuries of Moorish history vividly to life without rushing us once."
  },
  {
    "name": "Claire & Sophie Laurent",
    "date": "22 January 2024",
    "location": "Paris, France",
    "role": "Jewish Heritage of Morocco Tour",
    "image": "/images/bestofmorocco/img_testimonial_3.jpg",
    "quote": "Un voyage mémoriel et émotionnel d'une précision remarquable. Les visites des Mellahs d'Essaouira et de Fès, les synagogues historiques préservées et la rencontre avec les artisans locaux étaient empreintes d'un respect et d'une chaleur humaine exceptionnels. Chapeau bas à toute l'équipe."
  },
  {
    "name": "David Kensington",
    "date": "04 March 2024",
    "location": "Melbourne, Australia",
    "role": "Great South & Kasbahs Circuit",
    "image": "/images/bestofmorocco/img_testimonial_1.jpg",
    "quote": "Crossing the High Atlas through the Tizi n'Tichka pass down to Ait Ben Haddou was breathtaking. Best of Morocco Tours provided spotless private transport and true VIP access at every monument. You won't find better hospitality anywhere in North Africa."
  }
];

export const siteFaqs: FAQItem[] = [
  {
    "question": "What is the Best Price Guarantee offered by Best of Morocco Tours?",
    "answer": "Best of Morocco Tours guarantees both top service and the most competitive pricing. If you find a better advertised price elsewhere on an identical Morocco vacation package, we will match that price exactly and provide you with an extra 5% discount."
  },
  {
    "question": "Who are your tour guides and what are their qualifications?",
    "answer": "All our city and regional guides are officially licensed and certified by the Moroccan Ministry of Tourism. Our founder, Ayoub Sadeddine (Tour Guide Licence No. 2816), holds professional degrees from ITHQ and OPC in Canada, ISAT Fes, and ISTHT El Jadida. Our guides are native Moroccans and fluent in English, French, Spanish, German, Italian, and Arabic."
  },
  {
    "question": "Can your Morocco tours be customized for our private group?",
    "answer": "Yes! All our tour itineraries can be completely customized to fit your specific group size, dates, budget, and travel preferences. You can choose private chauffeured minivans or 4x4s, preferred hotel categories (from luxury boutique Riads to 5-star palace hotels), or book accommodations separately if you prefer our guided transport services only."
  },
  {
    "question": "What is your cancellation and refund policy?",
    "answer": "If Best of Morocco Tours must cancel a tour prior to commencement due to unforeseen circumstances, we notify travelers at least 15 days in advance (excluding departure date). We will either provide alternative arrangements or issue a full refund within 2 to 4 weeks (up to 6 weeks during peak seasons)."
  },
  {
    "question": "What payment methods do you accept?",
    "answer": "We accept major Credit Cards (Visa, MasterCard), PayPal, and International bank wire transfers. As long as your package is paid in full before departure, we provide flexible and clear payment milestones."
  },
  {
    "question": "Do I need travel insurance for my trip to Morocco?",
    "answer": "We strongly advise all passengers to obtain comprehensive travel insurance covering baggage loss, trip cancellation, emergency medical care, and medical evacuation prior to departure."
  }
];
