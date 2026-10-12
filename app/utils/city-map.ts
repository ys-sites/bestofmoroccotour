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

export function getCityKey(id: number): CityKey {
  switch (id) {
    case 11:
    case 12:
    case 13:
      return "agadir";
    case 14:
    case 15:
    case 16:
    case 8: // Toubkal trekking & Marrakech
      return "marrakech";
    case 10:
      return "rabat";
    case 7:
      return "chefchaouen";
    case 6:
    case 9:
    default:
      return "fez";
  }
}
