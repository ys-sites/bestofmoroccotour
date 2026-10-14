/**
 * Maps a tour/itinerary numeric ID to the matching video source city key
 * used in data/videoSources.ts.
 *
 * Keep this in sync with the toursList id assignments in data/itineraries.ts.
 */
export type CityKey = 
  | "marrakech" 
  | "agadir" 
  | "rabat" 
  | "fez" 
  | "chefchaouen" 
  | "tangier" 
  | "casablanca" 
  | "dakhla" 
  | "ouarzazate" 
  | "essaouira";

export function getCityKey(id: number | string): CityKey {
  const strId = String(id).toLowerCase();
  if (strId.includes("agadir") || strId === "11" || strId === "12" || strId === "13") {
    return "agadir";
  }
  if (strId.includes("marrakech") || strId === "14" || strId === "15" || strId === "16" || strId === "8" || strId === "premium-tour" || strId === "jewish-heritage") {
    return "marrakech";
  }
  if (strId.includes("rabat") || strId === "10") {
    return "rabat";
  }
  if (strId.includes("tangier") || strId === "17") {
    return "tangier";
  }
  if (strId.includes("chefchaouen") || strId === "7" || strId === "north-south") {
    return "chefchaouen";
  }
  if (strId.includes("atlantic") || strId === "atlantic-ocean") {
    return "essaouira";
  }
  if (strId.includes("kasbah") || strId === "south-kasbahs") {
    return "ouarzazate";
  }
  if (strId.includes("imperial-cities")) {
    return "casablanca";
  }
  return "fez";
}
