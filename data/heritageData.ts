export interface UNESCOSite {
  id: string;
  num: string;
  year: string;
  name: { FR: string; EN: string };
  city: { FR: string; EN: string };
  description: { FR: string; EN: string };
  bestFor: { FR: string; EN: string };
  image: string;
  slug: string;
}

export interface ImperialCity {
  id: string;
  name: { FR: string; EN: string };
  dynasty: { FR: string; EN: string };
  landmark: { FR: string; EN: string };
  craft: { FR: string; EN: string };
  highlight: { FR: string; EN: string };
  image: string;
}

export interface LandscapeItem {
  id: string;
  title: { FR: string; EN: string };
  region: { FR: string; EN: string };
  caption: { FR: string; EN: string };
  image: string;
}

export interface CraftTradition {
  id: string;
  title: { FR: string; EN: string };
  subtitle: { FR: string; EN: string };
  description: { FR: string; EN: string };
  origin: string;
  badge: { FR: string; EN: string };
}

export interface CuisineHighlight {
  id: string;
  title: { FR: string; EN: string };
  subtitle: { FR: string; EN: string };
  description: { FR: string; EN: string };
  image: string;
}

export const UNESCO_SITES: UNESCOSite[] = [
  {
    id: "fez",
    num: "01",
    year: "1981",
    name: { FR: "Médina de Fès (Fes el-Bali)", EN: "Medina of Fez (Fes el-Bali)" },
    city: { FR: "Fès", EN: "Fez" },
    description: {
      FR: "Fondée au IXe siècle, la plus grande zone piétonne urbaine au monde compte plus de 9 000 ruelles et héberge l'Université Al Quaraouiyine (859 ap. J.-C.), reconnue comme la plus ancienne université encore en activité.",
      EN: "Founded in the 9th century, the world's largest car-free urban area spans 9,000+ alleys and houses the University of Al Quaraouiyine (859 AD), the world's oldest continuously operating university."
    },
    bestFor: { FR: "Histoire & Artisanat", EN: "History & Master Craftsmanship" },
    image: "/heritage/Medina%20of%20Fez%20(Fes%20el-Bali).jpg",
    slug: "fez"
  },
  {
    id: "marrakech",
    num: "02",
    year: "1985",
    name: { FR: "Médina de Marrakech", EN: "Medina of Marrakech" },
    city: { FR: "Marrakech", EN: "Marrakech" },
    description: {
      FR: "Capitale almoravide fondée en 1070, célèbre pour le minaret de la Koutoubia, le Palais de la Bahia, les Tombeaux Saadiens et l'effervescence légendaire de la place Jemaa el-Fna.",
      EN: "Almoravid capital founded in 1070, famed for the Koutoubia Mosque minaret, Bahia Palace, Saadian Tombs, and the timeless energy of Jemaa el-Fnaa square."
    },
    bestFor: { FR: "Architecture & Vie Nocturne", EN: "Architecture & Vibrant Souks" },
    image: "/heritage/Medina%20of%20Marrakech.jpg",
    slug: "marrakech"
  },
  {
    id: "ait-ben-haddou",
    num: "03",
    year: "1987",
    name: { FR: "Ksar d'Aït-Ben-Haddou", EN: "Ksar of Aït-Ben-Haddou" },
    city: { FR: "Ouarzazate / Vallée du Draâ", EN: "Ouarzazate / Draa Valley" },
    description: {
      FR: "Ensemble de bâtiments en terre entourés de murailles sur l'ancienne route des caravanes reliant le Sahara à Marrakech, symbole majestueux de l'architecture en terre cuite du Sud marocain.",
      EN: "Fortified earthen-clay village along the ancient Sahara caravan route, an extraordinary masterpiece of southern Moroccan earthen architecture."
    },
    bestFor: { FR: "Cinéma & Décors Désertiques", EN: "Cinematic Horizons & Caravans" },
    image: "/heritage/Ksar%20of%20A%C3%AFt-Ben-Haddou.jpg",
    slug: "ait-ben-haddou"
  },
  {
    id: "meknes",
    num: "04",
    year: "1996",
    name: { FR: "Ville Historique de Meknès", EN: "Historic City of Meknes" },
    city: { FR: "Meknès", EN: "Meknes" },
    description: {
      FR: "Capitale coloniale et impériale du XVIIe siècle sous le règne du sultan Moulay Ismaïl, marquée par la porte monumentale Bab Mansour et d'immenses écuries royales.",
      EN: "17th-century imperial capital of Sultan Moulay Ismail, renowned for the monumental Bab Mansour gate and vast royal equestrian vaults."
    },
    bestFor: { FR: "Portes Monumentales & Écuries", EN: "Imperial Gates & Stables" },
    image: "/heritage/Historic%20City%20of%20Meknes.jpg",
    slug: "meknes"
  },
  {
    id: "volubilis",
    num: "05",
    year: "1997",
    name: { FR: "Site Archéologique de Volubilis", EN: "Archaeological Site of Volubilis" },
    city: { FR: "Près de Meknès", EN: "Near Meknes" },
    description: {
      FR: "Cité romaine la mieux préservée d'Afrique du Nord, ancienne capitale de la Maurétanie Tingitane, abritant d'impressionnantes mosaïques demeurées sur leur site d'origine.",
      EN: "The most pristine Roman archaeological site in North Africa, ancient capital of Mauretania Tingitana with remarkably preserved in-situ mosaics."
    },
    bestFor: { FR: "Ruines Romaines & Mosaïques", EN: "Roman Ruins & Mosaic Art" },
    image: "/heritage/Archaeological%20Site%20of%20Volubilis.jpg",
    slug: "volubilis"
  },
  {
    id: "tetouan",
    num: "06",
    year: "1997",
    name: { FR: "Médina de Tétouan (Titawin)", EN: "Medina of Tétouan" },
    city: { FR: "Tétouan", EN: "Tétouan" },
    description: {
      FR: "Témoin privilégié du métissage andalou, reconstruite au XVe siècle par les réfugiés d'Espagne. Son architecture et ses arts décoratifs reflètent une forte empreinte hispano-mauresque.",
      EN: "Reflects deep Andalusian heritage, rebuilt in the 15th century by refugees from Spain; distinct in its white-washed urban planning and master tilecraft."
    },
    bestFor: { FR: "Héritage Andalou", EN: "Andalusian Heritage" },
    image: "/heritage/Medina%20of%20T%C3%A9touan.jpg",
    slug: "tetouan"
  },
  {
    id: "essaouira",
    num: "07",
    year: "2001",
    name: { FR: "Médina d'Essaouira (Mogador)", EN: "Medina of Essaouira (Mogador)" },
    city: { FR: "Essaouira", EN: "Essaouira" },
    description: {
      FR: "Ville fortifiée de la fin du XVIIIe siècle construite selon les principes de l'architecture militaire européenne de Vauban adaptée au contexte arabo-musulman et au port atlantique.",
      EN: "Fortified 18th-century Atlantic port city combining European military ramparts with traditional Moroccan urban design and Gnaoua musical roots."
    },
    bestFor: { FR: "Remparts Atlantiques & Gnaoua", EN: "Atlantic Ramparts & Music" },
    image: "/heritage/Atlantic%20Coast%20%26%20Taghazou.jpg",
    slug: "essaouira"
  },
  {
    id: "mazagan",
    num: "08",
    year: "2004",
    name: { FR: "Cité Portugaise de Mazagan (El Jadida)", EN: "Portuguese City of Mazagan" },
    city: { FR: "El Jadida", EN: "El Jadida" },
    description: {
      FR: "Exemple exceptionnel du croisement entre les cultures européenne et marocaine, célèbre pour ses fortifications de la Renaissance et sa citerne portugaise souterraine voûtée.",
      EN: "Exceptional example of early-16th-century Portuguese fortification in West Africa, featuring the famous atmospheric subterranean Manueline cistern."
    },
    bestFor: { FR: "Citerne Souterraine & Bastions", EN: "Subterranean Cisterns & Forts" },
    image: "/heritage/Portuguese%20City%20of%20Mazagan.jpg",
    slug: "mazagan"
  },
  {
    id: "rabat",
    num: "09",
    year: "2012",
    name: { FR: "Rabat, Capitale Moderne & Ville Historique", EN: "Rabat, Modern Capital & Historic City" },
    city: { FR: "Rabat", EN: "Rabat" },
    description: {
      FR: "Harmonie unique entre le passé historique (Kasbah des Oudayas, Tour Hassan) et l'urbanisme éclairé du XXe siècle, symbole du dialogue entre tradition islamique et modernité.",
      EN: "Unique harmony between ancient monuments (Kasbah of the Udayas, Hassan Tower) and 20th-century garden city urbanism along the Bou Regreg river."
    },
    bestFor: { FR: "Kasbah Royale & Architecture", EN: "Royal Kasbah & Ocean Views" },
    image: "/heritage/Rabat%2C%20Modern%20Capital%20%26%20Historic%20City.jpg",
    slug: "rabat"
  }
];

export const IMPERIAL_CITIES: ImperialCity[] = [
  {
    id: "fez-imperial",
    name: { FR: "Fès — La Capitale Spirituelle", EN: "Fez — The Spiritual Capital" },
    dynasty: { FR: "Dynastie Idrisside & Mérinide", EN: "Idrisid & Marinid Dynasties" },
    landmark: { FR: "Université Al Quaraouiyine & Tannerie Chouara", EN: "Al Quaraouiyine & Chouara Tannery" },
    craft: { FR: "Céramique Fassi, Zellige & Cuir Tanné", EN: "Fassi Ceramics, Zellige & Tanned Leather" },
    highlight: {
      FR: "Cœur intellectuel et spirituel du Royaume depuis 808 ap. J.-C., réputé pour ses médersas sculptées et son artisanat d'excellence.",
      EN: "Morocco's intellectual heart since 808 AD, famed for intricate carved madrasas and centuries of leather tanning mastery."
    },
    image: "/heritage/Medina%20of%20Fez%20(Fes%20el-Bali).jpg"
  },
  {
    id: "marrakech-imperial",
    name: { FR: "Marrakech — La Perle du Sud", EN: "Marrakech — The Southern Pearl" },
    dynasty: { FR: "Dynastie Almoravide & Saadienne", EN: "Almoravid & Saadian Dynasties" },
    landmark: { FR: "Koutoubia, Palais Bahia & Jemaa el-Fna", EN: "Koutoubia, Bahia Palace & Jemaa el-Fnaa" },
    craft: { FR: "Plâtre Tadelakt, Boiserie Cèdre & Cuivres", EN: "Tadelakt Plaster, Cedar Woodwork & Brass" },
    highlight: {
      FR: "Cité ocre impériale au pied de l'Atlas, symbole des riads somptueux, de la gastronomie et de l'art de vivre d'exception.",
      EN: "Red-ochre imperial oasis at the foot of the High Atlas, synonymous with palatial riads, fine dining, and royal hospitality."
    },
    image: "/heritage/Medina%20of%20Marrakech.jpg"
  },
  {
    id: "meknes-imperial",
    name: { FR: "Meknès — La Cité de Moulay Ismaïl", EN: "Meknes — The Versaillese Empire" },
    dynasty: { FR: "Dynastie Alaouite (XVIIe siècle)", EN: "Alaouite Dynasty (17th Century)" },
    landmark: { FR: "Bab Mansour & Hri Swani (Écuries Royales)", EN: "Bab Mansour & Hri Swani Royal Stables" },
    craft: { FR: "Damasquinage sur Fer & Culture Équestre", EN: "Damascene Metal Inlay & Equestrian Arts" },
    highlight: {
      FR: "Fortifiée par des kilomètres de murailles et des portes monumentales sculptées, au milieu des oliviers et vignobles fertiles.",
      EN: "Ringed by massive ramparts and towering gates, surrounded by ancient olive groves and fertile plateau vineyards."
    },
    image: "/heritage/Historic%20City%20of%20Meknes.jpg"
  },
  {
    id: "rabat-imperial",
    name: { FR: "Rabat — La Capitale Royale Actuelle", EN: "Rabat — The Royal Seat of Power" },
    dynasty: { FR: "Dynastie Almohade & Monarchie Actuelle", EN: "Almohad Dynasty & Modern Crown" },
    landmark: { FR: "Kasbah des Oudayas & Tour Hassan", EN: "Kasbah of the Udayas & Hassan Tower" },
    craft: { FR: "Tapis Citadins & Architecture Jardins", EN: "Rabat City Carpets & Coastal Gardens" },
    highlight: {
      FR: "Siège actuel du Gouvernement et de la Famille Royale, alliant l'élégance côtière atlantique et les grands musées nationaux.",
      EN: "Current capital of the Crown, blending cliffside Atlantic fortresses, royal palaces, and world-class modern museums."
    },
    image: "/heritage/Rabat%2C%20Modern%20Capital%20%26%20Historic%20City.jpg"
  }
];

export const LANDSCAPE_STRIP: LandscapeItem[] = [
  {
    id: "sahara",
    title: { FR: "Désert du Sahara (Erg Chebbi)", EN: "Sahara Desert (Erg Chebbi)" },
    region: { FR: "Merzouga / Sud-Est", EN: "Merzouga / Southeast" },
    caption: {
      FR: "Dunes dorées s'élevant jusqu'à 150 mètres, caravanes à dos de dromadaire et bivouacs de luxe sous les étoiles.",
      EN: "Golden dunes towering 150 meters high, sunset camel rides, and luxury desert camps under crystal starlight."
    },
    image: "/heritage/Sahara%20Desert%20(Erg%20Chebbi).jpeg"
  },
  {
    id: "atlas",
    title: { FR: "Haut Atlas & Mont Toubkal", EN: "High Atlas & Mount Toubkal" },
    region: { FR: "Région du Toubkal", EN: "Toubkal National Park" },
    caption: {
      FR: "Sommets enneigés culminant à 4 167 m et villages berbéres authentiques à seulement 90 minutes de Marrakech.",
      EN: "Snow-capped peaks rising to 4,167m and cliffside Amazigh villages just 90 minutes from Marrakech."
    },
    image: "/heritage/igh%20Atlas%20%26%20Mount%20Toubkal.webp"
  },
  {
    id: "atlantic",
    title: { FR: "Côte Atlantique & Taghazout", EN: "Atlantic Coast & Taghazout" },
    region: { FR: "Essaouira - Agadir", EN: "Essaouira - Agadir Bay" },
    caption: {
      FR: "Plages océaniques préservées, ports de pêche traditionnels et resorts balnéaires 5 étoiles avec parcours de golf.",
      EN: "Pristine ocean beaches, colorful fishing harbors, and 5-star oceanfront golf resorts."
    },
    image: "/heritage/Atlantic%20Coast%20%26%20Taghazou.jpg"
  },
  {
    id: "chefchaouen",
    title: { FR: "Chefchaouen, la Cité Bleue", EN: "Chefchaouen, The Blue Pearl" },
    region: { FR: "Montagnes du Rif", EN: "Rif Mountains" },
    caption: {
      FR: "Médina sacrée nichée dans le Rif, réputée mondialement pour ses ruelles déclinées dans toutes les nuances de bleu.",
      EN: "Mountain sanctuary famous worldwide for its enchanting maze of cobalt and indigo washed streets."
    },
    image: "/heritage/Chefchaouen%2C%20The%20Blue%20Pearl.jpg"
  },
  {
    id: "oases",
    title: { FR: "Oasis de Palmiers & Vallée du Draâ", EN: "Palm Palmeries & Draa Valley" },
    region: { FR: "Skoura & Zagora", EN: "Skoura & Zagora Oasis" },
    caption: {
      FR: "Palmeraies séculaires bordées de kasbahs fortifiées et de systèmes d'irrigation ancestraux (khettaras).",
      EN: "Ancient palmeries sheltering centuries-old earthen kasbahs and traditional oasis agriculture."
    },
    image: "/heritage/Palm%20Palmeries%20%26%20Draa%20Valley.jpeg"
  },
  {
    id: "majorelle",
    title: { FR: "Jardin Majorelle & Ville Nouvelle", EN: "Majorelle Garden & Ville Nouvelle" },
    region: { FR: "Marrakech Hivernage", EN: "Marrakech Guéliz" },
    caption: {
      FR: "Oasis botanique créée par Jacques Majorelle et restaurée par Yves Saint Laurent, joyau du patrimoine moderne.",
      EN: "Botanical sanctuary restored by Yves Saint Laurent, showcasing Morocco's modern creative legacy."
    },
    image: "/heritage/Majorelle%20Garden%20%26%20Ville%20Nouvelle.jpg"
  }
];

export const CRAFT_TRADITIONS: CraftTradition[] = [
  {
    id: "zellige",
    title: { FR: "L'Art du Zellige", EN: "The Art of Zellige" },
    subtitle: { FR: "Mosaïque de Céramique Taillée à la Main", EN: "Hand-Cut Chiseled Geometric Tilework" },
    description: {
      FR: "Chaque carreau de terre cuite émaillée est taillé à la main avec une fassette par des maîtres maâlems à Fès et Meknès pour composer d'infinies géométries mathématiques.",
      EN: "Each glazed terracotta tile is hand-chiseled by master maâlems in Fez and Meknes to form infinite mathematical kaleidoscope patterns."
    },
    origin: "Fès & Meknès",
    badge: { FR: "Patrimoine Architectural", EN: "Architectural Mastery" }
  },
  {
    id: "tadelakt",
    title: { FR: "Le Tadelakt Impérial", EN: "Imperial Tadelakt Plaster" },
    subtitle: { FR: "Enduit de Chaux Poli au Galet de Rivière", EN: "Polished River-Stone Lime Plaster" },
    description: {
      FR: "Technique ancestrale marrakchie à base de chaux naturelle de Marrakech, lissée au galet de rivière et traitée au savon noir à l'huile d'olive pour un rendu doux et étanche.",
      EN: "Ancestral Marrakech lime plaster polished smooth with river stones and black olive-oil soap for a silky, waterproof finish."
    },
    origin: "Marrakech",
    badge: { FR: "Finition Royale", EN: "Royal Finishing" }
  },
  {
    id: "gnaoua",
    title: { FR: "Musique & Rituel Gnaoua", EN: "Gnaoua Music & Healing" },
    subtitle: { FR: "Patrimoine Immatériel de l'UNESCO", EN: "UNESCO Intangible Cultural Heritage" },
    description: {
      FR: "Musique spirituelle mystique combinant le son du guembri (luth à trois cordes) et des crotales en fer (qraqeb), célébrée chaque année au Festival d'Essaouira.",
      EN: "Mystic spiritual music blending the low resonant guembri lute and iron qraqeb castanets, celebrated at the annual Essaouira World Festival."
    },
    origin: "Essaouira & Marrakech",
    badge: { FR: "UNESCO 2019", EN: "UNESCO Listed 2019" }
  },
  {
    id: "tissage",
    title: { FR: "Tissage & Bijoux Amazighs", EN: "Amazigh Weaving & Silver" },
    subtitle: { FR: "Tapis Beni Ourain & Orfèvrerie du Souss", EN: "Beni Ourain Rugs & Souss Silverwork" },
    description: {
      FR: "Tapis en laine vierge des montagnes du Moyen Atlas aux motifs géométriques symboliques, accompagnés des bijoux en argent ciselé et émail de Tiznit.",
      EN: "Pure virgin wool rugs crafted in the High Atlas with tribal symbols, paired with hand-engraved silver jewelry from Tiznit."
    },
    origin: "Moyen Atlas & Tiznit",
    badge: { FR: "Savoir-Faire Tribal", EN: "Tribal Crafting" }
  }
];

export const CUISINE_HIGHLIGHTS: CuisineHighlight[] = [
  {
    id: "tea",
    title: { FR: "La Cérémonie du Thé à la Menthe", EN: "The Mint Tea Hospitality Ceremony" },
    subtitle: { FR: "L'Art de l'Accueil Marocain", EN: "The Art of Moroccan Welcome" },
    description: {
      FR: "Le thé au pignon et à la menthe fraîche servi en hauteur pour former la mousse 'mousse de verre', geste universel de fraternité et de bienvenue.",
      EN: "Fresh spearmint leaves steeped with green gunpowder tea, poured gracefully from high above to create the traditional crown of foam."
    },
    image: "/heritage/The%20Mint%20Tea%20Hospitality%20Ceremony.jpg"
  },
  {
    id: "tagine",
    title: { FR: "Le Tajine & Épices Souk", EN: "Tagine Simmer & Souk Spices" },
    subtitle: { FR: "Cuisine à l'Étouffée en Cones d'Argile", EN: "Clay Cone Slow-Cooked Mastery" },
    description: {
      FR: "Mijoté lent au safran de Taliouine, ras el hanout, citrons confits et olives de Meknès cuit dans un plat en terre cuite sur braises.",
      EN: "Infused with Taliouine saffron, ras el hanout, preserved lemons, and Meknes olives, slow-simmered over charcoal in conical clay tagines."
    },
    image: "/heritage/Tagine%20Simmer%20%26%20Souk%20Spices.jpg"
  },
  {
    id: "argan",
    title: { FR: "L'Arganier de la Réserve de Biosphère", EN: "Argan Oil Biosphere Reserve" },
    subtitle: { FR: "Patrimoine de l'UNESCO", EN: "UNESCO Protected Biosphere" },
    description: {
      FR: "L'or liquide extrait à la main par les coopératives de femmes dans la région d'Agadir-Essaouira, joyau gastronomique et cosmétique unique au monde.",
      EN: "Pure liquid gold hand-pressed by female cooperatives in the UNESCO-protected Arganeraie Biosphere, celebrated in fine dining worldwide."
    },
    image: "/heritage/Argan%20Oil%20Biosphere%20Reserve.jpg"
  }
];
