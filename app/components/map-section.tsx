'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useLang, translate } from "../context/lang-context";
import { itineraryThemes, MapPinDetail } from "@/data/itineraries";

const MAP_BACKGROUND_IMAGE = "/images/moroco.webp"; // Current map aspect ratio: 830 x 553 (approx 3:2)

// GEOGRAPHIC CALIBRATION (Morocco map "1") — generated from Natural Earth 50m (public domain).
// Equirectangular projection, cos-lat corrected. viewBox 900x600 == the aspect-[3/2] wrapper,
// so SVG coords and HTML pin percentages are THE SAME SPACE. Never eyeball a pin again:
//   left% = (lng + 12.55) / 16.273 * 100
//   top%  = (36.6 - lat) / 9.2 * 100
//   svgX = left% * 9   svgY = top% * 6
// Bounds: lat 27.4..36.6, lng -12.55..3.723

// Detailed maps data configuration for each country
const mapsData: Record<string, {
  discoverRealm: { FR: string; EN: string };
  exploringRegions: { FR: string; EN: string };
  discoverTitle: { FR: string; EN: string };
  defaultDesc: { FR: string; EN: string };
  exploreBtn: { FR: string; EN: string };
  highlightsLabel: { FR: string; EN: string };
  hoverPrompt: { FR: string; EN: string };
  
  viewBox: string;
  oceanPath: string;
  oceanLabel: { FR: string; EN: string };
  oceanLabelPos: { x: number; y: number };
  
  landPath: string;
  spainLandPath?: string;
  spainLabel?: { FR: string; EN: string };
  spainLabelPos?: { x: number; y: number };
  
  extraLandPaths?: { path: string }[];
  extraLabels?: { text: { FR: string; EN: string }; x: number; y: number }[];
  
  regions: {
    id: string;
    name: { EN: string; FR: string };
    labelPos: { x: number; y: number; align: "start" | "end" | "middle" };
    pinPos: { x: number; y: number };
    hasLine: boolean;
    linePath?: string;
    path: string;
    highlights: { EN: string; FR: string };
    description: { EN: string; FR: string };
  }[];
}> = {
  // Morocco — ID "1"
  "1": {
    discoverRealm: { FR: "DÉCOUVREZ LE ROYAUME", EN: "DISCOVER THE REALM" },
    exploringRegions: { FR: "EXPLORATION DES RÉGIONS", EN: "EXPLORING REGIONS" },
    discoverTitle: { FR: "Découvrir le Maroc", EN: "Discover Morocco" },
    defaultDesc: {
      FR: "Aventuriers dans l'âme, dévoiler les secrets du Maroc est notre spécialité. Découvrez ce que les régions du Maroc ont de plus exceptionnel à offrir.",
      EN: "We are adventurers at heart, so uncovering the secrets of Morocco is something we've had a lot of experience in. Find out more about what the regions of Morocco have to offer."
    },
    exploreBtn: { FR: "EXPLORER NOS PORTFOLIOS", EN: "EXPLORE PORTFOLIOS" },
    highlightsLabel: { FR: "POINTS FORTS DE LA RÉGION :", EN: "REGION HIGHLIGHTS:" },
    hoverPrompt: { FR: "Survolez les régions pour explorer le Royaume.", EN: "Hover over regions to explore the Kingdom." },
    
    viewBox: "0 0 900 600",
    oceanPath: "M 0 0 L 900 0 L 900 600 L 0 600 Z",
    oceanLabel: { FR: "Océan Atlantique Nord", EN: "North Atlantic Ocean" },
    oceanLabelPos: { x: 35.9, y: 326.1 },

    landPath: "M 214.1 515.9 L 213.9 691.6 L 29.5 691.6 L 29.5 697.8 L -83.0 697.8 L -83.0 661.6 L -77.5 659.4 L -56.7 643.4 L -52.3 634.4 L -47.6 616.5 L -39.1 597.7 L -34.6 583.3 L -27.1 575.9 L -22.1 566.5 L -13.5 562.3 L 4.5 560.3 L 31.2 552.4 L 55.2 540.6 L 61.9 536.0 L 69.2 526.6 L 81.2 514.3 L 103.8 499.6 L 114.1 491.4 L 129.9 470.8 L 140.5 453.8 L 149.2 442.9 L 155.2 433.2 L 159.4 423.3 L 161.8 407.4 L 160.2 401.2 L 153.6 391.1 L 149.1 388.4 L 147.9 383.6 L 150.3 375.2 L 151.6 337.5 L 159.0 318.8 L 177.1 294.4 L 180.5 284.3 L 182.7 262.7 L 205.4 240.0 L 218.7 222.6 L 223.3 218.3 L 235.0 210.4 L 275.9 193.0 L 299.0 180.6 L 312.4 171.6 L 320.5 160.9 L 342.7 119.0 L 366.4 53.1 L 383.1 50.3 L 395.6 43.7 L 402.2 45.5 L 398.9 48.5 L 398.9 55.7 L 403.6 64.3 L 411.7 73.8 L 426.6 86.0 L 438.1 90.9 L 454.6 93.8 L 473.9 88.5 L 484.6 88.4 L 489.8 86.1 L 495.5 89.5 L 506.4 90.5 L 516.8 88.8 L 524.7 83.7 L 529.7 77.8 L 530.8 83.8 L 537.0 96.0 L 571.3 97.6 L 572.9 102.4 L 576.2 106.2 L 594.8 120.5 L 595.0 122.4 L 591.8 130.0 L 597.9 137.2 L 598.2 139.1 L 595.0 145.6 L 599.7 158.1 L 600.5 170.2 L 599.3 183.8 L 599.9 188.0 L 603.9 197.8 L 601.2 214.0 L 604.2 222.8 L 608.3 230.0 L 610.6 242.8 L 613.9 248.8 L 632.7 264.0 L 635.2 269.5 L 625.5 278.0 L 624.3 282.3 L 626.3 289.3 L 626.3 293.0 L 623.6 294.2 L 558.7 291.5 L 535.7 295.1 L 532.0 297.2 L 527.2 310.8 L 503.9 319.3 L 485.7 320.2 L 482.5 322.0 L 481.4 324.8 L 481.2 328.3 L 484.1 336.7 L 484.5 341.6 L 482.1 352.3 L 483.3 354.4 L 491.0 358.0 L 493.6 360.9 L 493.5 365.2 L 491.3 367.6 L 489.4 368.8 L 473.7 370.9 L 455.0 384.9 L 429.8 394.4 L 419.3 400.1 L 407.6 419.6 L 401.3 426.6 L 392.8 433.2 L 374.7 439.0 L 362.0 441.4 L 350.4 442.8 L 335.7 442.2 L 334.2 444.5 L 333.5 452.6 L 331.0 456.3 L 327.1 458.6 L 299.1 455.2 L 294.0 458.2 L 280.1 470.1 L 272.4 471.2 L 269.1 472.9 L 251.7 487.0 L 237.0 496.9 L 220.8 510.8 L 215.2 514.0 L 214.1 515.9 Z",
    spainLandPath: "M 656.3 -90.8 L 652.5 -81.5 L 649.1 -76.3 L 648.6 -72.5 L 654.2 -67.2 L 648.6 -64.0 L 620.7 -62.7 L 603.4 -51.3 L 594.7 -41.3 L 586.9 -22.6 L 577.3 -11.5 L 573.1 -9.5 L 566.6 -14.3 L 558.4 -15.1 L 550.5 -13.5 L 546.4 -9.6 L 539.9 -7.5 L 533.6 -9.3 L 519.9 -10.3 L 513.9 -10.2 L 504.3 -7.0 L 496.2 -9.1 L 482.4 -10.2 L 452.6 -7.7 L 448.8 -6.5 L 445.1 -1.9 L 435.6 6.1 L 421.1 6.4 L 408.1 11.5 L 404.8 14.8 L 399.3 23.8 L 397.6 30.3 L 395.0 28.8 L 393.0 29.3 L 392.0 34.3 L 383.0 37.4 L 372.9 33.4 L 364.4 27.3 L 360.0 26.8 L 352.8 17.4 L 349.7 11.3 L 347.6 4.8 L 347.4 0.2 L 341.0 -2.4 L 339.5 -8.4 L 344.1 -16.2 L 350.3 -20.5 L 344.5 -20.1 L 340.4 -15.1 L 335.0 -23.1 L 313.3 -38.8 L 314.5 -44.3 L 310.9 -40.1 L 308.4 -39.0 L 297.3 -39.7 L 284.5 -37.8 L 279.1 -64.3 L 282.4 -73.6 L 290.8 -85.2 L 296.7 -91.7 L 305.7 -94.2 L 307.3 -97.8 L 657.7 -97.8 L 656.3 -90.8 Z M -68.2 505.7 L -72.4 504.2 L -70.4 494.8 L -68.5 492.0 L -60.8 487.9 L -54.5 486.2 L -52.6 481.9 L -50.5 480.2 L -48.3 482.8 L -50.0 485.8 L -51.3 495.2 L -55.6 498.2 L -64.5 501.4 L -68.2 505.7 Z M -83.0 523.0 L -80.4 514.8 L -77.7 512.5 L -72.3 512.7 L -70.6 515.8 L -70.7 522.7 L -72.6 534.2 L -76.2 544.3 L -83.0 546.8 L -83.0 523.0 Z",
    spainLabel: { FR: "ESPAGNE", EN: "SPAIN" },
    spainLabelPos: { x: 423.1, y: 17.6 },

    extraLandPaths: [
      { path: "M 344.2 697.8 L 213.9 607.4 L 214.1 515.9 L 269.1 472.9 L 280.1 470.1 L 298.1 455.7 L 327.1 458.6 L 333.5 452.6 L 335.7 442.2 L 362.0 441.4 L 392.8 433.2 L 407.6 419.6 L 419.3 400.1 L 455.0 384.9 L 473.7 370.9 L 491.3 367.6 L 493.6 360.9 L 482.1 352.3 L 484.5 341.6 L 481.4 324.8 L 485.7 320.2 L 503.9 319.3 L 527.2 310.8 L 532.0 297.2 L 535.7 295.1 L 558.7 291.5 L 626.3 293.0 L 625.5 278.0 L 635.2 269.5 L 632.7 264.0 L 613.9 248.8 L 601.2 214.0 L 603.9 197.8 L 599.3 183.8 L 599.7 158.1 L 595.0 145.6 L 598.2 139.1 L 591.8 130.0 L 594.8 120.5 L 576.2 106.2 L 571.3 97.6 L 588.3 98.2 L 601.5 92.4 L 620.2 80.6 L 634.0 66.6 L 670.5 48.2 L 691.4 50.0 L 702.5 35.0 L 711.4 28.5 L 747.9 10.2 L 763.6 5.2 L 837.5 -0.0 L 858.5 -12.0 L 888.8 -12.7 L 903.1 -19.3 L 957.3 -19.3 L 983.0 -4.5 L 983.0 697.8 L 344.2 697.8 Z" },
      { path: "M 29.5 691.6 L 213.9 691.6 L 213.9 607.4 L 344.2 697.8 L 29.5 697.8 L 29.5 691.6 Z" }
    ],
    extraLabels: [
      { text: { EN: "ALGERIA", FR: "ALGÉRIE" }, x: 757.7, y: 404.3 }
    ],
    
    regions: [
      {
        id: "north",
        name: { EN: "The North", FR: "Le Nord" },
        labelPos: { x: 465, y: 93, align: "start" },
        pinPos: { x: 403.0, y: 93.3 },
        hasLine: true,
        linePath: "M 403 93 L 459 90",
        path: "M 342.7 119.0 L 366.4 53.1 L 383.1 50.3 L 395.6 43.7 L 402.2 45.5 L 398.9 48.5 L 398.9 55.7 L 411.7 73.8 L 426.6 86.0 L 438.1 90.9 L 454.6 93.8 L 489.8 86.1 L 495.5 89.5 L 506.4 90.5 L 516.8 88.8 L 524.7 83.7 L 529.7 77.8 L 530.8 83.8 L 537.0 96.0 L 571.3 97.6 L 576.2 106.2 L 594.8 120.5 L 591.8 130.0 L 594.1 133.7 L 334.9 133.7 L 342.7 119.0 Z",
        highlights: { EN: "Chefchaouen, Tangier & Rif Mountains", FR: "Chefchaouen, Tanger & les montagnes du Rif" },
        description: {
          EN: "Discover the breathtaking blue streets of Chefchaouen, the historic coastal fortress of Tangier, and the dramatic pine forests of the Rif Mountains.",
          FR: "Découvrez les ruelles bleues de Chefchaouen, la forteresse côtière historique de Tanger et les forêts de pins spectaculaires du Rif."
        }
      },
      {
        id: "fes-meknes",
        name: { EN: "Fes, Meknes & The Middle Atlas", FR: "Fès, Meknès & le Moyen Atlas" },
        labelPos: { x: 479, y: 168, align: "start" },
        pinPos: { x: 417.1, y: 168.4 },
        hasLine: true,
        linePath: "M 417 168 L 473 165",
        path: "M 598.2 139.1 L 595.0 145.6 L 599.7 158.1 L 599.3 183.8 L 603.9 197.8 L 601.2 214.0 L 608.3 230.0 L 610.6 242.8 L 613.9 248.8 L 629.0 260.9 L 406.5 260.9 L 345.7 215.2 L 345.7 133.7 L 594.1 133.7 L 598.2 139.1 Z",
        highlights: { EN: "Imperial Medinas & Cedar Forests", FR: "Médinas impériales & forêts de cèdres" },
        description: {
          EN: "Explore the ancient medieval streets of Fes El Bali, the Roman ruins of Volubilis, and the majestic Barbary macaque cedar forests of Ifrane.",
          FR: "Explorez les ruelles médiévales de Fès El Bali, les ruines romaines de Volubilis et les forêts de cèdres peuplées de macaques de barbarie à Ifrane."
        }
      },
      {
        id: "casablanca",
        name: { EN: "Casablanca", FR: "Casablanca" },
        labelPos: { x: 212, y: 197, align: "end" },
        pinPos: { x: 274.3, y: 197.4 },
        hasLine: true,
        linePath: "M 274 197 L 218 194",
        path: "M 218.7 222.6 L 235.0 210.4 L 275.9 193.0 L 312.4 171.6 L 320.5 160.9 L 334.9 133.7 L 345.7 133.7 L 345.7 215.2 L 201.9 260.9 L 184.5 260.9 L 205.4 240.0 L 218.7 222.6 Z",
        highlights: { EN: "Hassan II Mosque & Coastal Elegance", FR: "Mosquée Hassan II & élégance côtière" },
        description: {
          EN: "Experience the grand architecture of Casablanca's Hassan II Mosque and the royal heritage sites of Rabat along the breezy Atlantic shores.",
          FR: "Découvrez la grande architecture de la mosquée Hassan II à Casablanca et l'héritage royal de Rabat le long des rivages de l'Atlantique."
        }
      },
      {
        id: "marrakech",
        name: { EN: "Marrakech & The Coastal Plain", FR: "Marrakech & la Plaine Côtière" },
        labelPos: { x: 191, y: 318, align: "end" },
        pinPos: { x: 252.7, y: 324.2 },
        hasLine: true,
        linePath: "M 253 324 L 197 315",
        path: "M 151.6 337.5 L 159.0 318.8 L 177.1 294.4 L 180.5 284.3 L 182.7 262.7 L 184.5 260.9 L 406.5 260.9 L 331.8 306.5 L 232.3 345.7 L 179.7 362.0 L 150.3 362.0 L 151.6 337.5 Z",
        highlights: { EN: "Vibrant Souks & Red City Walls", FR: "Souks vibrants & remparts rouges" },
        description: {
          EN: "Lose yourself in the bustling spice markets of Jemaa el-Fnaa, visit historic palaces, and wander through lush botanical gardens.",
          FR: "Perdez-vous dans les marchés d'épices animés de Jemaa el-Fnaa, visitez des palais historiques et flânez dans de somptueux jardins botaniques."
        }
      },
      {
        id: "high-atlas",
        name: { EN: "High Atlas Mountains", FR: "Montagnes du Haut Atlas" },
        labelPos: { x: 194, y: 371, align: "end" },
        pinPos: { x: 256.3, y: 361.3 },
        hasLine: true,
        linePath: "M 256 361 L 200 368",
        path: "M 331.8 306.5 L 406.5 260.9 L 439.7 287.0 L 290.4 352.2 L 273.8 383.5 L 201.9 394.6 L 179.7 362.0 L 232.3 345.7 L 331.8 306.5 Z",
        highlights: { EN: "Mount Toubkal & Berber Valleys", FR: "Mont Toubkal & vallées berbères" },
        description: {
          EN: "Trek through high altitude mountain passes, summit Mount Toubkal (4,167m), and experience warm hospitality in remote clay Berber villages.",
          FR: "Randonnez à travers des cols d'altitude, atteignez le sommet du Mont Toubkal (4 167 m) et découvrez l'hospitalité légendaire des villages berbères."
        }
      },
      {
        id: "ouarzazate",
        name: { EN: "Ouarzazate", FR: "Ouarzazate" },
        labelPos: { x: 375, y: 370, align: "start" },
        pinPos: { x: 312.9, y: 370.5 },
        hasLine: true,
        linePath: "M 313 370 L 369 367",
        path: "M 439.7 287.0 L 453.5 296.7 L 412.0 410.9 L 318.0 423.9 L 273.8 383.5 L 290.4 352.2 L 439.7 287.0 Z",
        highlights: { EN: "Ait Benhaddou & Desert Gates", FR: "Aït-Ben-Haddou & portes du désert" },
        description: {
          EN: "Marvel at the UNESCO clay fortress of Kasbah Ait Benhaddou, traverse the Dades Gorges, and see the gateways of Morocco's film capital.",
          FR: "Émerveillez-vous devant la kasbah fortifiée d'Aït-Ben-Haddou, traversez les gorges du Dadès et découvrez les portes de la capitale du cinéma."
        }
      },
      {
        id: "agadir",
        name: { EN: "Agadir & Anti-Atlas", FR: "Agadir & l'Anti-Atlas" },
        labelPos: { x: 101, y: 402, align: "end" },
        pinPos: { x: 163.3, y: 402.5 },
        hasLine: true,
        linePath: "M 163 402 L 107 399",
        path: "M 214.1 515.9 L 213.9 691.6 L 29.5 691.6 L 29.5 697.8 L -83.0 697.8 L -83.0 661.6 L -77.5 659.4 L -56.7 643.4 L -34.6 583.3 L -27.1 575.9 L -22.1 566.5 L -13.5 562.3 L 4.5 560.3 L 31.2 552.4 L 55.2 540.6 L 61.9 536.0 L 81.2 514.3 L 114.1 491.4 L 129.9 470.8 L 155.2 433.2 L 159.4 423.3 L 161.8 407.4 L 160.2 401.2 L 153.6 391.1 L 149.1 388.4 L 147.9 383.6 L 150.3 375.2 L 150.3 362.0 L 179.7 362.0 L 201.9 394.6 L 273.8 383.5 L 318.0 423.9 L 313.4 456.2 L 299.1 455.2 L 280.1 470.1 L 269.1 472.9 L 214.1 515.9 Z",
        highlights: { EN: "Argan Valleys & Sunny Coasts", FR: "Vallées d'arganiers & côtes ensoleillées" },
        description: {
          EN: "Unwind on the golden beaches of Agadir, see argan trees where goats climb, and hike through the bizarre red granite formations of Tafraout.",
          FR: "Détendez-vous sur les plages dorées d'Agadir, observez les chèvres grimper aux arganiers et explorez les formations rocheuses de Tafraout."
        }
      },
      {
        id: "sahara",
        name: { EN: "Sahara Desert", FR: "Désert du Sahara" },
        labelPos: { x: 472, y: 382, align: "middle" },
        pinPos: { x: 472.2, y: 360.0 },
        hasLine: false,
        path: "M 532.0 297.2 L 527.2 310.8 L 503.9 319.3 L 489.5 319.6 L 482.5 322.0 L 481.2 328.3 L 484.5 341.6 L 482.1 352.3 L 493.6 360.9 L 493.5 365.2 L 491.3 367.6 L 473.7 370.9 L 455.0 384.9 L 419.3 400.1 L 407.6 419.6 L 392.8 433.2 L 362.0 441.4 L 335.7 442.2 L 333.5 452.6 L 329.2 457.9 L 313.4 456.2 L 318.0 423.9 L 412.0 410.9 L 453.5 296.7 L 532.0 297.2 Z",
        highlights: { EN: "Erg Chebbi Dunes & Starry Nights", FR: "Dunes de l'Erg Chebbi & nuits étoilées" },
        description: {
          EN: "Journey deep into the golden dunes of Erg Chebbi on a camel, sleep in luxury desert camps, and stargaze under one of the world's clearest skies.",
          FR: "Voyagez au cœur des dunes dorées de l'Erg Chebbi à dos de chameau, dormez dans un camp de luxe et admirez le ciel étoilé du désert."
        }
      }
    ]
  }
};

export default function MapSection({ countryId = "1", itineraryId }: { countryId?: string; itineraryId?: string }) {
  const { lang } = useLang();

  // Map configuration for Morocco
  const mapConfig = mapsData["1"];

  const itineraryTheme = itineraryId ? itineraryThemes[itineraryId] : null;
  const itineraryPins = itineraryTheme?.mapPins || null;

  const [activeRegion, setActiveRegion] = useState<typeof mapConfig.regions[number] | null>(null);
  const [activeItineraryPin, setActiveItineraryPin] = useState<MapPinDetail | null>(null);

  // Dev-only pin calibration mode — visit an itinerary page with ?pinDebug=1 in development
  // to click/drag on the map and read off the exact top%/left% for a pin.
  const [pinDebugEnabled, setPinDebugEnabled] = useState(false);
  const [debugClickCoord, setDebugClickCoord] = useState<{ top: number; left: number } | null>(null);
  const [debugPinOverrides, setDebugPinOverrides] = useState<Record<number, { top: number; left: number }>>({});
  const [draggingPinIndex, setDraggingPinIndex] = useState<number | null>(null);
  const mapBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && new URLSearchParams(window.location.search).get("pinDebug") === "1") {
      setPinDebugEnabled(true);
    }
  }, []);

  const coordFromPointer = (clientX: number, clientY: number) => {
    const rect = mapBoxRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const left = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    const top = Math.min(100, Math.max(0, ((clientY - rect.top) / rect.height) * 100));
    return { top: Math.round(top * 10) / 10, left: Math.round(left * 10) / 10 };
  };

  const handleDebugMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pinDebugEnabled || draggingPinIndex !== null) return;
    const coord = coordFromPointer(e.clientX, e.clientY);
    if (!coord) return;
    setDebugClickCoord(coord);
    console.log(`[pinDebug] top: "${coord.top}%", left: "${coord.left}%"`);
  };

  const handlePinDragMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggingPinIndex === null) return;
    const coord = coordFromPointer(e.clientX, e.clientY);
    if (!coord) return;
    setDebugPinOverrides((prev) => ({ ...prev, [draggingPinIndex]: coord }));
  };

  const handlePinDragEnd = (index: number) => {
    setDraggingPinIndex(null);
    const coord = debugPinOverrides[index];
    if (coord) {
      console.log(`[pinDebug] pin ${index} dropped at top: "${coord.top}%", left: "${coord.left}%"`);
    }
  };

  // Determine current active text elements
  const currentTitle = activeRegion 
    ? translate(activeRegion.name, lang) 
    : (activeItineraryPin 
        ? translate(activeItineraryPin.name, lang) 
        : (itineraryTheme 
            ? translate(itineraryTheme.discoverTitle, lang) 
            : translate(mapConfig.discoverTitle, lang)));

  const currentDesc = activeRegion 
    ? translate(activeRegion.description, lang) 
    : (itineraryTheme 
        ? translate(itineraryTheme.discoverDesc, lang) 
        : translate(mapConfig.defaultDesc, lang));

  const currentSubtitle = activeRegion 
    ? translate(mapConfig.exploringRegions, lang) 
    : (itineraryTheme 
        ? translate(itineraryTheme.heroTitle, lang) 
        : translate(mapConfig.discoverRealm, lang));

  return (
    <div className="relative max-w-[1200px] mx-auto my-20 px-6 sm:px-12 py-16 rounded-[2.5rem] overflow-hidden bg-[#faf9f5] border border-zinc-200/80 shadow-card-soft grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-zinc-900 select-none">
      
      {/* Absolute Soft Watercolor Blots for visual layout depth */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A880]/15 rounded-full filter blur-[55px] pointer-events-none -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/10 rounded-full filter blur-[70px] pointer-events-none -translate-x-20 translate-y-20" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C5A880]/15 rounded-full filter blur-[60px] pointer-events-none translate-x-12 -translate-y-12" />

      {/* Map Column (lg:col-span-7) */}
      <div className="lg:col-span-7 relative w-full h-[460px] sm:h-[520px] bg-white rounded-3xl border border-zinc-200/40 p-4 shadow-sm overflow-hidden flex items-center justify-center z-10">

        {/* aspect-[3/2] box keeps the SVG/pins and any future swappable MAP_BACKGROUND_IMAGE in lockstep across viewports */}
        {/* If container heights h-[460px] sm:h-[520px] change, these min widths must be re-derived */}
        <div
          ref={mapBoxRef}
          onClick={handleDebugMapClick}
          onPointerMove={handlePinDragMove}
          onPointerUp={() => draggingPinIndex !== null && handlePinDragEnd(draggingPinIndex)}
          className={`aspect-[3/2] w-[min(100%,638px)] sm:w-[min(100%,726px)] relative flex items-center justify-center ${pinDebugEnabled ? "cursor-crosshair" : ""}`}
        >
        {/* Interactive SVG Map */}
        <svg
          viewBox={mapConfig.viewBox}
          className="w-full h-full object-contain"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions: Dotted background pattern for ocean water */}
          <defs>
            <pattern id="ocean-grid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#C5A880" opacity="0.25" />
            </pattern>
            
            {/* Shadow filter for highlighted regions */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#C5A880" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Ocean area filled with dotted grid */}
          <rect width="100%" height="100%" fill="url(#ocean-grid)" opacity="0.8" />
          
          {/* Ocean Label */}
          <text
            x={mapConfig.oceanLabelPos.x}
            y={mapConfig.oceanLabelPos.y}
            className="font-serif italic text-[11px] fill-[#8c827a]/60 font-semibold tracking-wider"
          >
            {translate(mapConfig.oceanLabel, lang)}
          </text>

          {/* Neighbor Landmass Decoration (Spain for Morocco) */}
          {mapConfig.spainLandPath && (
            <path
              d={mapConfig.spainLandPath}
              fill="#F4EFE6"
              stroke="#e4e4e7"
              strokeWidth="0.75"
              opacity="0.85"
            />
          )}
          {mapConfig.spainLabel && mapConfig.spainLabelPos && (
            <text
              x={mapConfig.spainLabelPos.x}
              y={mapConfig.spainLabelPos.y}
              className="font-sans text-[8px] tracking-[0.2em] fill-[#8c827a]/70 font-semibold uppercase"
            >
              {translate(mapConfig.spainLabel, lang)}
            </text>
          )}

          {/* Extra neighbor lands */}
          {mapConfig.extraLandPaths?.map((island, idx) => (
            <path
              key={idx}
              d={island.path}
              fill="#F4EFE6"
              stroke="#e4e4e7"
              strokeWidth="0.75"
            />
          ))}
          {mapConfig.extraLabels?.map((label, idx) => (
            <text
              key={idx}
              x={label.x}
              y={label.y}
              className="font-sans text-[8px] tracking-wider fill-[#8c827a]/70 font-medium"
            >
              {translate(label.text, lang)}
            </text>
          ))}

          {/* Base Country Landmass (Sand cream) */}
          <path
            d={mapConfig.landPath}
            fill="#F3EEE3"
            stroke="#d4d4d8"
            strokeWidth="1"
          />

          {/* Regional Interactive Layer Paths */}
          {mapConfig.regions.map((reg) => {
            const isActive = !itineraryPins && activeRegion?.id === reg.id;
            return (
              <path
                key={reg.id}
                d={reg.path}
                fill={isActive ? "#C5A880" : "transparent"}
                fillOpacity={isActive ? "0.6" : "0"}
                stroke={isActive ? "#A3835B" : "#e4e4e7"}
                strokeWidth={isActive ? "1.5" : "0.5"}
                filter={isActive ? "url(#glow)" : undefined}
                className={itineraryId ? "" : "cursor-pointer transition-all duration-300 ease-in-out hover:fill-[#C5A880]/30"}
                onMouseEnter={itineraryId ? undefined : () => setActiveRegion(reg)}
                onMouseLeave={itineraryId ? undefined : () => setActiveRegion(null)}
              />
            );
          })}

          {/* Sahara special text overlay (for Morocco map) */}
          {countryId === "1" && (
            <text
              x="442.5"
              y="459.8"
              pointerEvents="none"
              className="font-heading font-semibold text-[10px] tracking-[0.3em] fill-[#6B5335]/70 uppercase text-center"
              style={{ textAnchor: "middle" }}
            >
              {translate({ FR: "SAHARA", EN: "SAHARA" }, lang)}
            </text>
          )}

          {/* Connection Lines from Label to Pin */}
          {!itineraryPins && mapConfig.regions.map((reg) => {
            if (!reg.hasLine || !reg.linePath) return null;
            const isActive = activeRegion?.id === reg.id;
            return (
              <path
                key={`line-${reg.id}`}
                d={reg.linePath}
                fill="none"
                stroke={isActive ? "#A3835B" : "#C5A880"}
                strokeWidth={isActive ? "1.25" : "0.75"}
                strokeDasharray={isActive ? "none" : "2,2"}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Interactive Pointer Text Labels */}
          {!itineraryPins && mapConfig.regions.map((reg) => {
            const isActive = activeRegion?.id === reg.id;
            return (
              <text
                key={`label-${reg.id}`}
                x={reg.labelPos.x}
                y={reg.labelPos.y}
                className={`font-sans text-[9px] tracking-widest font-semibold uppercase cursor-pointer transition-colors duration-300 ${
                  isActive ? "fill-[#8B2635] font-bold" : "fill-[#6B5335]/90 hover:fill-[#8B2635]"
                }`}
                style={{ textAnchor: reg.labelPos.align as "start" | "end" | "middle" }}
                onMouseEnter={() => setActiveRegion(reg)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                {translate(reg.name, lang)}
              </text>
            );
          })}

          {/* Animated Cities / Regions Pin Nodes */}
          {!itineraryPins && mapConfig.regions.map((reg) => {
            const isActive = activeRegion?.id === reg.id;
            return (
              <g
                key={`pin-${reg.id}`}
                className="cursor-pointer"
                onMouseEnter={() => setActiveRegion(reg)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                {/* Ping Pulse ring for active location */}
                {isActive && (
                  <circle
                    cx={reg.pinPos.x}
                    cy={reg.pinPos.y}
                    r="8"
                    fill="#8B2635"
                    className="animate-ping"
                    style={{
                      transformOrigin: `${reg.pinPos.x}px ${reg.pinPos.y}px`
                    }}
                  />
                )}
                {/* Outer Ring */}
                <circle
                  cx={reg.pinPos.x}
                  cy={reg.pinPos.y}
                  r={isActive ? "5" : "3.5"}
                  fill={isActive ? "#8B2635" : "#FAF8F5"}
                  stroke={isActive ? "#FAF8F5" : "#A3835B"}
                  strokeWidth="1.25"
                  className="transition-all duration-300"
                />
                {/* Inner center dot */}
                <circle
                  cx={reg.pinPos.x}
                  cy={reg.pinPos.y}
                  r="1.2"
                  fill={isActive ? "#FAF8F5" : "#A3835B"}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* Dynamic Itinerary Specific Pins */}
        {itineraryPins && itineraryPins.map((pin, index) => {
          const isHovered = activeItineraryPin === pin;
          const isAnyPinHovered = activeItineraryPin !== null;
          const opacityVal = isHovered ? 1 : (isAnyPinHovered ? 0.25 : 1);
          const scaleVal = isHovered ? 1.25 : (isAnyPinHovered ? 0.8 : 1);
          const zIndexVal = isHovered ? 30 : 20;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: opacityVal, scale: scaleVal }}
              transition={{
                delay: isAnyPinHovered ? 0 : index * 0.1,
                opacity: { duration: 0.2 },
                scale: { type: "spring", stiffness: 200, damping: 20 }
              }}
              style={{ top: pin.top, left: pin.left, zIndex: zIndexVal }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto cursor-pointer"
              onMouseEnter={() => setActiveItineraryPin(pin)}
              onMouseLeave={() => setActiveItineraryPin(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" overflow="visible">
                {/* Pulsing outer ring — only when hovered */}
                {isHovered && (
                  <circle
                    cx="12" cy="12" r="10"
                    fill="#8B2635"
                    opacity="0.35"
                    className="animate-ping"
                    style={{ transformOrigin: '12px 12px' }}
                  />
                )}
                {/* Outer ring circle */}
                <circle
                  cx="12" cy="12" r="6"
                  fill={isHovered ? "#8B2635" : "#FAF8F5"}
                  stroke={isHovered ? "#FAF8F5" : "#A3835B"}
                  strokeWidth="1.5"
                  style={{ transition: 'all 0.3s ease' }}
                />
                {/* Inner center dot */}
                <circle
                  cx="12" cy="12" r="2.2"
                  fill={isHovered ? "#FAF8F5" : "#A3835B"}
                  style={{ transition: 'all 0.3s ease' }}
                />
              </svg>
              {/* Tooltip label — always visible */}
              <div className="bg-zinc-950/85 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-[#faf9f5] text-[9px] font-sans font-medium tracking-wide whitespace-nowrap mt-0.5 shadow-sm pointer-events-none">
                {translate(pin.name, lang)}
              </div>
            </motion.div>
          );
        })}

        {/* Dev-only pin calibration overlay (?pinDebug=1) */}
        {pinDebugEnabled && (
          <>
            {/* Reference background — swap MAP_BACKGROUND_IMAGE once the client picks a final map photo on the call */}
            <img
              src={MAP_BACKGROUND_IMAGE}
              alt="Calibration reference"
              className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
            />

            {itineraryPins && itineraryPins.map((pin, index) => {
              const override = debugPinOverrides[index];
              const top = override ? `${override.top}%` : pin.top;
              const left = override ? `${override.left}%` : pin.left;
              return (
                <div
                  key={`debug-${index}`}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setDraggingPinIndex(index);
                  }}
                  style={{ top, left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500/80 border-2 border-white shadow-lg cursor-grab active:cursor-grabbing z-40"
                  title={translate(pin.name, lang)}
                />
              );
            })}

            {/* Live coordinate readout */}
            <div className="absolute top-2 left-2 z-50 bg-black/85 text-white text-[10px] font-mono px-2 py-1.5 rounded-md pointer-events-none space-y-0.5">
              <div>pinDebug: click map or drag red dots</div>
              {debugClickCoord && (
                <div>last click → top: "{debugClickCoord.top}%", left: "{debugClickCoord.left}%"</div>
              )}
              {draggingPinIndex !== null && debugPinOverrides[draggingPinIndex] && (
                <div>
                  dragging pin {draggingPinIndex} → top: "{debugPinOverrides[draggingPinIndex].top}%", left: "{debugPinOverrides[draggingPinIndex].left}%"
                </div>
              )}
            </div>
          </>
        )}
        </div>

        {/* Hover/Tap Hint Badge */}
        <div className="absolute bottom-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white font-sans text-[8px] sm:text-[9px] tracking-wider uppercase font-semibold">
          {translate(mapConfig.hoverPrompt, lang)}
        </div>
      </div>

      {/* Content Column (lg:col-span-5) */}
      <div className="lg:col-span-5 flex flex-col items-start z-10 lg:pl-4">
        
        {/* Dynamic Title and descriptions */}
        <div className="min-h-[220px] flex flex-col justify-center">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#A3835B]">
            {currentSubtitle}
          </span>
          
          <h2 className="font-serif text-[36px] sm:text-[42px] font-bold text-zinc-900 mt-2 leading-none uppercase tracking-wide">
            {currentTitle}
          </h2>

          <p className="text-[13px] leading-relaxed text-zinc-600 mt-6 font-light">
            {currentDesc}
          </p>
        </div>

        {/* Show Region Highlights if active, else list of regions */}
        <div className="w-full mt-6 pt-6 border-t border-zinc-200/60 min-h-[140px]">
          <AnimatePresence mode="wait">
            {activeRegion ? (
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <h4 className="font-mono text-[9.5px] font-bold tracking-widest text-[#A3835B]">
                  {translate(mapConfig.highlightsLabel, lang)}
                </h4>
                <div className="flex items-center gap-2 bg-[#8B2635]/5 border border-[#8B2635]/10 rounded-xl px-4 py-3 text-zinc-800 font-sans text-[12px] font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#8B2635] shrink-0" />
                  {translate(activeRegion.highlights, lang)}
                </div>
              </motion.div>
            ) : itineraryPins ? (
              <motion.div
                key="itinerary-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 gap-x-4 gap-y-2.5"
              >
                {itineraryPins.map((pin, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-2 cursor-pointer group"
                    onMouseEnter={() => setActiveItineraryPin(pin)}
                    onMouseLeave={() => setActiveItineraryPin(null)}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 group-hover:bg-[#8B2635] transition-colors shrink-0" />
                    <span className="font-sans text-[11px] font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">
                      {translate(pin.name, lang)}
                    </span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 gap-x-4 gap-y-2.5"
              >
                {mapConfig.regions.map((reg) => (
                  <div
                    key={reg.id}
                    className="flex items-center gap-2 cursor-pointer group"
                    onMouseEnter={() => setActiveRegion(reg)}
                    onMouseLeave={() => setActiveRegion(null)}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 group-hover:bg-[#8B2635] transition-colors shrink-0" />
                    <span className="font-sans text-[11px] font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">
                      {translate(reg.name, lang)}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button Links */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full mt-8">
          <Link
            href="/#portfolios"
            className="w-full sm:w-auto border border-zinc-900 bg-zinc-900 text-white hover:bg-transparent hover:text-zinc-900 font-semibold text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 transition-luxury rounded-full shadow-sm text-center cursor-pointer"
          >
            {translate(mapConfig.exploreBtn, lang)}
          </Link>
        </div>
      </div>

    </div>
  );
}
