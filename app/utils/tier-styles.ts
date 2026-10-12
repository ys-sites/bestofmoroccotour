export interface TierStyle {
  background: string;
  color: string;
}

export function getTierStyle(badgeText: string): TierStyle {
  const text = badgeText.toUpperCase();
  
  if (text.includes("ULTRA LUXURY") || text.includes("ULTRA LUXE") || text.includes("PRESTIGE ACCESS") || text.includes("PRESTIGE DE LUXE") || text.includes("PREMIUM")) {
    // Diamond
    return {
      background: "linear-gradient(135deg, #b9f2ff, #e0f7ff, #a8edea)",
      color: "#0a2e3d",
    };
  }
  
  if (text.includes("SIGNATURE") || text.includes("IMPERIAL DISCOVERY") || text.includes("DECOUVERTE IMPÉRIALE")) {
    // Gold
    return {
      background: "linear-gradient(135deg, #f5d020, #f6a800, #D4AF37)",
      color: "#3b2700",
    };
  }
  
  if (text.includes("GRAND VOYAGE")) {
    // Platinum
    return {
      background: "linear-gradient(135deg, #e8e8e8, #c0c0c0, #a8a8a8)",
      color: "#1a1a1a",
    };
  }
  
  if (text.includes("PREMIUM GOLF") || text.includes("GOLF EXCLUSIF") || text.includes("GOLF PRESTIGE") || text.includes("GOLFE DE PRESTIGE")) {
    // Silver
    return {
      background: "linear-gradient(135deg, #d0d0d0, #b0b0b0, #909090)",
      color: "#111",
    };
  }
  
  if (text.includes("ROYAL GOLF") || text.includes("GOLF ROYAL") || text.includes("LUXURY GOLF") || text.includes("GOLF DE LUXE")) {
    // Rose Gold
    return {
      background: "linear-gradient(135deg, #f7cac9, #e8a598, #c97b6e)",
      color: "#3b0f0b",
    };
  }
  
  if (text.includes("ADVENTURE") || text.includes("AVENTURE") || text.includes("DESERT IMMERSION") || text.includes("IMMERSION DESERT")) {
    // Bronze
    return {
      background: "linear-gradient(135deg, #cd7f32, #a0522d, #8B4513)",
      color: "#fff8f0",
    };
  }
  
  if (text.includes("CULTURE")) {
    // Copper
    return {
      background: "linear-gradient(135deg, #b87333, #9c6327, #7d4f1e)",
      color: "#fff8f0",
    };
  }
  
  // Default fallback
  return {
    background: "linear-gradient(135deg, #e8e8e8, #c0c0c0, #a8a8a8)",
    color: "#111",
  };
}
