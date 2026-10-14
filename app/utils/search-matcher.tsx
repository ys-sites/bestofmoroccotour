'use client';

import React from "react";
import { TourItem } from "@/data/bestOfMoroccoData";

export interface SearchMatchResult {
  tour: TourItem;
  score: number;
  matchReason: string;
  matchedCity?: string;
  snippet: string;
}

// Canonical city aliases to handle common tourist spellings
export const CITY_ALIASES: Record<string, string[]> = {
  marrakech: ["marrakesh", "marakech", "marrakch"],
  fes: ["fez", "fès", "fas"],
  chefchaouen: ["chaouen", "chechaouen", "xauen"],
  merzouga: ["sahara", "dunes", "erg chebbi", "desert"],
  casablanca: ["casa", "dar el beida"],
  ouarzazate: ["warzasat", "ouarzazat"],
  rabat: ["ribat", "chella", "chellah"],
  essaouira: ["mogador", "esawira"],
  volubilis: ["walili", "oualili"]
};

export const POPULAR_CITIES = [
  "Rabat",
  "Marrakech",
  "Fes",
  "Chefchaouen",
  "Merzouga Sahara",
  "Essaouira",
  "Casablanca",
  "Volubilis",
  "Ouarzazate"
];

/**
 * Normalizes text for accent-insensitive and case-insensitive comparison
 */
export function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Highlights all occurrences of query keywords in a string
 */
export function highlightMatches(text: string, query: string): React.ReactNode {
  if (!text) return "";
  if (!query || !query.trim()) return text;

  const rawTerms = query
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (rawTerms.length === 0) return text;

  // Build expanded terms with aliases
  const expanded: string[] = [];
  rawTerms.forEach((term) => {
    const clean = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    expanded.push(clean);
    const norm = normalize(clean);
    for (const [canonical, aliases] of Object.entries(CITY_ALIASES)) {
      if (canonical.includes(norm) || aliases.some((a) => a.includes(norm))) {
        expanded.push(canonical, ...aliases);
      }
    }
  });

  const uniqueTerms = Array.from(new Set(expanded)).filter(Boolean);
  if (uniqueTerms.length === 0) return text;

  try {
    const regex = new RegExp(`(${uniqueTerms.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark
          key={i}
          className="bg-amber-200/90 text-[#C05621] font-bold px-1 py-0.5 rounded-sm shadow-2xs"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  } catch {
    return text;
  }
}

/**
 * Searches tours and extracts the best snippet with context around the match
 */
export function searchTours(tours: TourItem[], rawQuery: string): SearchMatchResult[] {
  if (!rawQuery || !rawQuery.trim()) return [];

  const query = normalize(rawQuery);
  const terms = query.split(/\s+/).filter(Boolean);

  const results: SearchMatchResult[] = [];

  for (const tour of tours) {
    let score = 0;
    let matchReason = "";
    let matchedCity: string | undefined;
    let bestSnippet = "";

    const normName = normalize(tour.name);
    const normOverview = normalize(tour.overview);
    const normCategory = normalize(tour.category);

    // 1. Direct title match (Highest Priority)
    if (terms.every((t) => normName.includes(t))) {
      score += 100;
      matchReason = "Title match";
      bestSnippet = tour.overview.slice(0, 140) + "...";
    }

    // 2. Direct destination city match
    for (const dest of tour.destinations) {
      const normDest = normalize(dest);
      for (const t of terms) {
        if (normDest.includes(t)) {
          score += 60;
          matchReason = `Includes destination: ${dest}`;
          matchedCity = dest;
          break;
        }
        // Check aliases
        for (const [canonical, aliases] of Object.entries(CITY_ALIASES)) {
          if (
            (canonical.includes(t) || aliases.some((a) => a.includes(t))) &&
            (canonical.includes(normDest) || aliases.some((a) => a.includes(normDest)))
          ) {
            score += 55;
            matchReason = `Includes destination: ${dest}`;
            matchedCity = dest;
            break;
          }
        }
      }
    }

    // 3. Search Day-by-Day timeline for specific itinerary stops
    for (const day of tour.itinerary) {
      const normDayTitle = normalize(day.title);
      const normDayDesc = normalize(day.desc);

      const hitTitle = terms.some((t) => normDayTitle.includes(t));
      const hitDesc = terms.some((t) => normDayDesc.includes(t));

      if (hitTitle || hitDesc) {
        score += hitTitle ? 35 : 20;
        if (!matchReason) {
          matchReason = `Day ${day.day}: ${day.title}`;
        }
        if (!bestSnippet) {
          // Extract an excerpt around the match
          const fullText = `Day ${day.day} (${day.title}): ${day.desc}`;
          const idx = normalize(fullText).indexOf(terms[0]);
          const start = Math.max(0, idx - 40);
          const end = Math.min(fullText.length, idx + 100);
          bestSnippet = (start > 0 ? "..." : "") + fullText.slice(start, end) + (end < fullText.length ? "..." : "");
        }
      }
    }

    // 4. Overview & category matches
    if (terms.some((t) => normOverview.includes(t) || normCategory.includes(t))) {
      score += 15;
      if (!bestSnippet) {
        bestSnippet = tour.overview.slice(0, 140) + "...";
      }
      if (!matchReason) {
        matchReason = "Tour overview match";
      }
    }

    if (score > 0) {
      if (!bestSnippet) {
        bestSnippet = tour.overview.slice(0, 140) + "...";
      }
      results.push({
        tour,
        score,
        matchReason: matchReason || `Matches "${rawQuery}"`,
        matchedCity,
        snippet: bestSnippet
      });
    }
  }

  // Sort descending by relevance score
  return results.sort((a, b) => b.score - a.score);
}
