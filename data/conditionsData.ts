export interface ConditionsSection {
  title: { FR: string; EN: string };
  paragraphs: { FR: string; EN: string }[];
  list?: { FR: string[]; EN: string[] };
  subsections?: {
    title: { FR: string; EN: string };
    paragraph: { FR: string; EN: string };
  }[];
  grid?: {
    title: { FR: string; EN: string };
    desc: { FR: string; EN: string };
  }[];
}

export const conditionsIntro = {
  p1: {
    FR: "Ces conditions générales s'appliquent à toutes les réservations et circuits organisés par Best of Morocco Tours (Titulaire de la licence du Ministère du Tourisme n° 2816). Spécialiste réceptif à 100% marocain, nous concevons des circuits privés et voyages sur mesure.",
    EN: "These terms of business apply to all bookings and private itineraries arranged through Best of Morocco Tours (Moroccan Ministry of Tourism Licence No. 2816). As a 100% wholly Moroccan-owned inbound tour operator, we specialize in customized private journeys."
  },
  p2: {
    FR: "Best of Morocco Tours garantit le meilleur tarif avec notre 'Garantie Meilleur Prix' : si vous trouvez un forfait privé identique moins cher, nous égalons le prix et vous offrons 5% de réduction supplémentaire.",
    EN: "Best of Morocco Tours guarantees the best service and value with our 'Best Price Guarantee': if you find an identical advertised private vacation package at a lower price elsewhere, we will match that price and grant an additional 5% discount."
  }
};

export const conditionsSections: ConditionsSection[] = [
  {
    title: {
      FR: "GARANTIE DU MEILLEUR PRIX (+5% MATCH)",
      EN: "BEST PRICE GUARANTEE (+5% MATCH)"
    },
    paragraphs: [
      {
        FR: "Best of Morocco Tours garantit le meilleur rapport qualité-prix sur toutes nos prestations privées au Maroc. Si vous découvrez une offre identique (même itinéraire, catégorie d'hébergement équivalente en riad ou hôtel, transport climatisé privatif et guides officiels) proposée par un opérateur légal à un tarif inférieur, nous nous engageons à égaler ce prix et à vous faire bénéficier d'une remise supplémentaire de 5%.",
        EN: "Best of Morocco Tours guarantees the best value on all private tours in Morocco. If you find an identical package (same itinerary, equivalent riad/hotel category, private air-conditioned transport, and certified guides) advertised for less by a licensed operator, we match the quote and offer an extra 5% reduction."
      }
    ]
  },
  {
    title: {
      FR: "MODES DE PAIEMENT & SÉCURITÉ",
      EN: "PAYMENT METHODS & SECURITY"
    },
    paragraphs: [
      {
        FR: "Nous offrons des solutions de paiement transparentes et sécurisées :",
        EN: "We offer transparent and secure payment options:"
      }
    ],
    list: {
      FR: [
        "Cartes de crédit (Visa, MasterCard) via passerelle bancaire cryptée SSL.",
        "PayPal pour des transactions internationales rapides et sécurisées.",
        "Virement bancaire direct (coordonnées bancaires au Maroc ou en Amérique du Nord sur demande).",
        "Aucun frais caché : devis clair avec détails complets des inclusions et exclusions."
      ],
      EN: [
        "Major Credit Cards (Visa, MasterCard) through 256-bit SSL encrypted merchant gateway.",
        "PayPal for swift and secure international processing.",
        "Direct Bank Wire transfers (bank coordinates in Morocco and North America provided upon reservation).",
        "Zero hidden fees: clear transparent quotes detailing all inclusions and exclusions."
      ]
    }
  },
  {
    title: {
      FR: "ACOMPTE & CALENDRIER DE PAIEMENT",
      EN: "DEPOSIT & PAYMENT SCHEDULE"
    },
    paragraphs: [
      {
        FR: "Un acompte de 25% à 30% est requis lors de la confirmation de votre itinéraire sur mesure afin de garantir vos réservations exclusives en riads et le chauffeur privé. Le solde peut être réglé avant le départ ou à l'arrivée au Maroc selon les modalités convenues dans votre contrat.",
        EN: "A deposit of 25% to 30% is required upon confirmation of your tailor-made itinerary to secure exclusive boutique riad bookings, private vehicle allocation, and licensed guides. The remaining balance is payable prior to departure or upon arrival in Morocco as agreed in your booking voucher."
      }
    ]
  },
  {
    title: {
      FR: "CONDITIONS D'ANNULATION & FLEXIBILITÉ",
      EN: "CANCELLATION & FLEXIBILITY POLICIES"
    },
    paragraphs: [
      {
        FR: "Conscients des aléas de voyage, nous privilégions la flexibilité. En cas de force majeure ou d'annulation signifiée plus de 30 jours avant le départ, votre acompte peut être reporté sans pénalité sur une période de 18 mois pour de nouvelles dates.",
        EN: "We understand travel plans can shift. In case of cancellation made more than 30 days prior to departure, your deposit may be rolled over without penalty for up to 18 months towards rescheduled dates."
      },
      {
        FR: "Pour toute annulation à moins de 30 jours, les frais réels engagés auprès des riads et prestataires tiers non remboursables seront déduits, et le solde crédité pour un futur voyage.",
        EN: "For cancellations within 30 days, non-recoverable supplier fees (committed boutique riads and desert bivouacs) are deducted, and all remaining balances credited toward a future journey."
      }
    ]
  },
  {
    title: {
      FR: "SERVICES DE GUIDES NATIONAUX ACCRÉDITÉS",
      EN: "OFFICIAL ACCREDITED TOUR GUIDES"
    },
    paragraphs: [
      {
        FR: "Tous les guides accompagnateurs et guides de villes travaillant pour Best of Morocco Tours sont titulaires de la carte professionnelle officielle délivrée par le Ministère du Tourisme du Royaume du Maroc. Notre fondateur et directeur général, Ayoub Sadeddine, est lui-même guide national diplômé (Licence n° 2816).",
        EN: "Every city guide and desert trekker provided by Best of Morocco Tours holds official professional accreditation issued by the Ministry of Tourism of the Kingdom of Morocco. Our founder and CEO, Ayoub Sadeddine, is a certified National Tour Guide (Licence No. 2816)."
      }
    ]
  }
];
