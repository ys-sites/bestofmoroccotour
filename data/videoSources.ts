export type VideoSource = {
  id: string;
  poster: string;
  webm: string;
  mp4: string;
  webmMobile: string;
  mp4Mobile: string;
};

// Cloudflare R2 CDN — files live flat in the MEvoyages/ folder
export const CDN =
  process.env.NEXT_PUBLIC_CDN_URL ?? "https://cdn.mevoyages.com";

// One mp4 per asset: MEvoyages/{assetId}.mp4 (+ optional MEvoyages/{assetId}.jpg poster)
export const videoAsset = (assetId: string): VideoSource => {
  const mp4 = `${CDN}/MEvoyages/${assetId}.mp4`;
  return {
    id: assetId,
    poster: `${CDN}/MEvoyages/${assetId}.jpg`,
    webm: mp4,
    mp4,
    webmMobile: `${CDN}/MEvoyages/${assetId}_mobile.mp4`,
    mp4Mobile: `${CDN}/MEvoyages/${assetId}_mobile.mp4`,
  };
};

const ASSETS: Record<string, string> = {
  hero: "Golf_in_Morocco_ssfati",
  marrakech: "Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv",
  agadir: "Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad",
  rabat: "Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw",
  fez: "Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u",
  chefchaouen: "Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt",
  tangier: "Morocco_Tangier_Hero_16x9_UpdatedLogo_f9kwsc",
  casablanca: "Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb",
  dakhla: "Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8",
  ouarzazate: "Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj",
  essaouira: "Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz",
};

export const videoSources: Record<string, VideoSource> = Object.fromEntries(
  Object.entries(ASSETS).map(([key, assetId]) => [
    key,
    { ...videoAsset(assetId), id: key },
  ])
);
