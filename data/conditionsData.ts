// Terms & Conditions and Cancellation Policy, taken from the original
// bestofmoroccotour.com/terms-conditions.html (EN) with French translations.

type Bi = { FR: string; EN: string };

export interface LegalSection {
  id: string;
  title: Bi;
  paragraphs: Bi[];
  list?: { FR: string[]; EN: string[] };
  ordered?: boolean;
}

export interface LegalPage {
  intro: Bi[];
  sections: LegalSection[];
}

export const termsPage: LegalPage = {
  intro: [
    {
      EN: "The use of all travel services offered by Best of Morocco Tours is subject to the terms of business set out below. They form the basis on which bookings are accepted by us, and we encourage you to read them carefully. If you have trouble accessing or understanding them, please contact us before making your booking.",
      FR: "L'utilisation de tous les services de voyage offerts par Best of Morocco Tours est soumise aux conditions générales ci-dessous. Elles constituent la base sur laquelle nous acceptons les réservations; nous vous invitons à les lire attentivement. Si vous avez de la difficulté à y accéder ou à les comprendre, veuillez nous contacter avant d'effectuer votre réservation.",
    },
    {
      EN: "These terms and conditions shall not be amended or waived except by written agreement between you and Best of Morocco Tours.",
      FR: "Ces conditions générales ne peuvent être modifiées ou levées que par un accord écrit entre vous et Best of Morocco Tours.",
    },
  ],
  sections: [
    {
      id: "booking-payment",
      title: { EN: "Booking & Payment Methods", FR: "Réservation et modes de paiement" },
      paragraphs: [
        {
          EN: "Our booking conditions are simple: send us an email at info@bestofmoroccotour.com. Once we have agreed together on your program and price, you can book any of our services (tours, hotels and more). As soon as we receive your booking, we will promptly contact you to confirm and process it.",
          FR: "Nos conditions de réservation sont simples : écrivez-nous à info@bestofmoroccotour.com. Une fois le programme et le prix convenus ensemble, vous pouvez réserver n'importe lequel de nos services (circuits, hôtels, etc.). Dès réception de votre réservation, nous vous contacterons rapidement pour la confirmer et la traiter.",
        },
      ],
      list: {
        EN: [
          "30% of the total tour price is transferred to our company account to confirm your booking.",
          "15 days prior to your departure, a further 40% of the total tour price is paid by bank transfer.",
          "The remaining balance is paid in cash or by credit card (Visa / MasterCard) right after your arrival. Card payments carry a 3% bank transaction fee on the total payment.",
        ],
        FR: [
          "30 % du prix total du circuit est viré au compte de l'entreprise pour confirmer votre réservation.",
          "15 jours avant votre départ, 40 % supplémentaires du prix total sont payés par virement bancaire.",
          "Le solde restant est payé en espèces ou par carte de crédit (Visa / MasterCard) dès votre arrivée. Les paiements par carte entraînent des frais de transaction bancaire de 3 % sur le montant total.",
        ],
      },
      ordered: true,
    },
    {
      id: "cancellations-refunds",
      title: { EN: "Cancellations & Refunds", FR: "Annulations et remboursements" },
      paragraphs: [
        {
          EN: "Clients can cancel at any time. A cancellation takes effect when Best of Morocco Tours receives a written request from the client, and the following charges apply to the total land cost:",
          FR: "Le client peut annuler à tout moment. L'annulation prend effet à la réception par Best of Morocco Tours d'une demande écrite du client, et les frais suivants s'appliquent sur le coût terrestre total :",
        },
        {
          EN: "Transfers, exceptional circumstances and refund timing are detailed in our Cancellation Policy.",
          FR: "Les transferts, les circonstances exceptionnelles et les délais de remboursement sont détaillés dans notre politique d'annulation.",
        },
      ],
      list: {
        EN: [
          "More than 6 weeks before departure: 15% of the total land cost.",
          "From 6 weeks to 4 weeks before departure: 25% of the total land cost.",
          "From 4 weeks to 2 weeks before departure: 50% of the total land cost.",
          "Within 2 weeks of departure: no refund is given.",
        ],
        FR: [
          "Plus de 6 semaines avant le départ : 15 % du coût terrestre total.",
          "De 6 à 4 semaines avant le départ : 25 % du coût terrestre total.",
          "De 4 à 2 semaines avant le départ : 50 % du coût terrestre total.",
          "Moins de 2 semaines avant le départ : aucun remboursement.",
        ],
      },
    },
    {
      id: "cancellation-by-us",
      title: { EN: "Cancellation by Best of Morocco Tours", FR: "Annulation par Best of Morocco Tours" },
      paragraphs: [
        {
          EN: "At times, due to low participation for a tour package or when an arrangement cannot be confirmed, the Company may cancel the entire tour before it begins. We will notify you at least fifteen (15) days in advance, excluding the departure date, and may recommend alternative tours to the same or another destination based on the tour fare of that period.",
          FR: "Il peut arriver qu'en raison d'une faible participation ou lorsqu'un arrangement ne peut être confirmé, l'entreprise annule le circuit avant son début. Nous vous en aviserons au moins quinze (15) jours à l'avance, date de départ exclue, et pourrons vous proposer des circuits de remplacement vers la même destination ou une autre, selon le tarif de la période.",
        },
        {
          EN: "Should you decide not to accept the alternatives, all refunds will be paid within two weeks to a month. During the peak period, refunds may take around six weeks.",
          FR: "Si vous refusez les solutions de remplacement, tous les remboursements seront versés dans un délai de deux semaines à un mois. En haute saison, ce délai peut atteindre environ six semaines.",
        },
      ],
    },
    {
      id: "children",
      title: { EN: "Children Fare", FR: "Tarifs enfants" },
      paragraphs: [],
      list: {
        EN: [
          "Under 6 years old, sharing a room with two adults without an extra bed: free of charge.",
          "6 to under 12 years old, sharing a room with two adults without an extra bed: 50% of the package cost.",
          "6 to under 12 years old, sharing a room with two adults with an extra bed: 75% of the package cost.",
          "Under 12 years old, sharing a room with one adult: 90% of the package cost.",
          "12 years old and above: 100% of the adult cost.",
        ],
        FR: [
          "Moins de 6 ans, partageant la chambre de deux adultes sans lit d'appoint : gratuit.",
          "De 6 à moins de 12 ans, partageant la chambre de deux adultes sans lit d'appoint : 50 % du prix du forfait.",
          "De 6 à moins de 12 ans, partageant la chambre de deux adultes avec lit d'appoint : 75 % du prix du forfait.",
          "Moins de 12 ans, partageant la chambre d'un seul adulte : 90 % du prix du forfait.",
          "12 ans et plus : 100 % du tarif adulte.",
        ],
      },
    },
    {
      id: "accommodation",
      title: { EN: "Accommodation", FR: "Hébergement" },
      paragraphs: [
        {
          EN: "If the accommodation stipulated in the tour itinerary, or a special arrangement you requested, is not available, the Company will make every effort to provide alternative accommodation of a similar standard.",
          FR: "Si l'hébergement prévu à l'itinéraire, ou un arrangement particulier demandé, n'est pas disponible, l'entreprise fera tout son possible pour offrir un hébergement de remplacement de catégorie similaire.",
        },
        {
          EN: "Single supplement: if you wish to occupy a single room, a single supplement applies.",
          FR: "Supplément chambre individuelle : si vous souhaitez occuper une chambre seule, un supplément s'applique.",
        },
      ],
    },
    {
      id: "exclusions",
      title: { EN: "Tour Fare Exclusions", FR: "Exclusions du tarif" },
      paragraphs: [
        {
          EN: "All travel services exclude airport taxes, airport security tax, airline insurance and fuel surcharges, visa fees, port tax, service fees set by airlines or airport authorities, customs user fees where applicable, excess baggage charges, room service, beverages, laundry, travel insurance, gratuities to drivers, tour guides and leaders, tips to hotel porters, and all items of a personal nature.",
          FR: "Tous les services de voyage excluent les taxes d'aéroport, la taxe de sûreté aéroportuaire, les surcharges d'assurance et de carburant des transporteurs aériens, les frais de visa, les taxes portuaires, les frais de service fixés par les compagnies aériennes ou les autorités aéroportuaires, les frais de douane le cas échéant, l'excédent de bagages, le service aux chambres, les boissons, la blanchisserie, l'assurance voyage, les pourboires aux chauffeurs, guides et accompagnateurs, les pourboires aux bagagistes ainsi que toute dépense personnelle.",
        },
      ],
    },
    {
      id: "documents",
      title: { EN: "Travel Documents", FR: "Documents de voyage" },
      paragraphs: [
        {
          EN: "You must hold a valid international passport with at least six (6) months' validity, and obtain any visas and health certificates required at the destinations in your tour itinerary.",
          FR: "Vous devez détenir un passeport international valide au moins six (6) mois et obtenir les visas et certificats de santé exigés pour les destinations de votre itinéraire.",
        },
      ],
    },
    {
      id: "insurance",
      title: { EN: "Travel Insurance", FR: "Assurance voyage" },
      paragraphs: [
        {
          EN: "We strongly advise all passengers to take out comprehensive travel insurance covering, among other things, loss of or damage to baggage and possessions (including money), the cost of cancelling the booking, and medical treatment and assistance in the event of illness or accident. Some airlines may not allow you to travel without proof of insurance. We can provide appropriate cover.",
          FR: "Nous recommandons fortement à tous les passagers de souscrire une assurance voyage complète couvrant notamment la perte ou les dommages aux bagages et effets personnels (y compris l'argent), les frais d'annulation de la réservation ainsi que les soins et l'assistance médicale en cas de maladie ou d'accident. Certaines compagnies aériennes peuvent refuser l'embarquement sans preuve d'assurance. Nous pouvons vous proposer une couverture adaptée.",
        },
        {
          EN: "We accept no liability arising from a failure to obtain adequate cover. Whether or not we issued your policy, please check it carefully to make sure all details are correct and all relevant information (e.g. pre-existing medical conditions) has been provided. Failure to disclose relevant information will affect your cover.",
          FR: "Nous déclinons toute responsabilité découlant d'une couverture insuffisante. Que nous ayons émis votre police ou non, vérifiez-la attentivement afin de vous assurer que tous les renseignements sont exacts et complets (p. ex. conditions médicales préexistantes). Toute omission peut affecter votre couverture.",
        },
      ],
    },
    {
      id: "health",
      title: { EN: "Health & Conduct", FR: "Santé et conduite" },
      paragraphs: [
        {
          EN: "All clients are expected to satisfy themselves before booking that they are fit and able to complete the itinerary of their chosen tour as described on our website. Clients with pre-existing medical conditions or illness must declare them at the time of booking and arrange for any medication or treatment required during the tour.",
          FR: "Chaque client doit s'assurer, avant de réserver, qu'il est apte à réaliser l'itinéraire du circuit choisi tel que décrit sur notre site. Les clients ayant une condition médicale ou une maladie préexistante doivent la déclarer au moment de la réservation et prévoir les médicaments ou traitements nécessaires pendant le circuit.",
        },
        {
          EN: "Such clients must provide a medical statement from a general practitioner confirming they are fit to travel. Failure to make this disclosure constitutes a breach of these booking conditions and relieves Best of Morocco Tours of any obligation and liability.",
          FR: "Ces clients doivent fournir une attestation d'un médecin généraliste confirmant leur aptitude à voyager. L'absence de cette déclaration constitue une violation des présentes conditions et dégage Best of Morocco Tours de toute obligation et responsabilité.",
        },
      ],
    },
    {
      id: "responsibility",
      title: { EN: "Traveler's Responsibility", FR: "Responsabilité du voyageur" },
      paragraphs: [
        {
          EN: "Travelers are responsible for choosing a trip suited to their abilities, communicating any special needs to Best of Morocco Tours before the trip begins, and being in sufficiently good health to undertake it. Unless otherwise specified in the itinerary, travelers bring the appropriate clothing and equipment. By sending the deposit and signing the terms and conditions, the traveler certifies that they have no physical or other condition that would create a hazard for themselves or other travelers.",
          FR: "Le voyageur est responsable de choisir un voyage adapté à ses capacités, de communiquer tout besoin particulier à Best of Morocco Tours avant le départ et d'être en assez bonne santé pour l'entreprendre. Sauf indication contraire, il apporte les vêtements et l'équipement appropriés. En versant l'acompte et en signant les conditions générales, le voyageur atteste ne présenter aucune condition physique ou autre pouvant constituer un danger pour lui-même ou pour les autres voyageurs.",
        },
        {
          EN: "If a trip must be extended or an itinerary modified because of weather, road conditions, lack of transportation, political or civil disputes, medical emergencies or other causes beyond our control, the associated costs (including non-recoverable costs) are not included in the trip rates or refunds. In such cases, travelers pay any actual extra costs in the field (e.g. food, transport, accommodation) directly.",
          FR: "Si un voyage doit être prolongé ou un itinéraire modifié en raison de la météo, de l'état des routes, d'un manque de transport, de conflits politiques ou civils, d'une urgence médicale ou d'autres causes indépendantes de notre volonté, les coûts associés (y compris les coûts non récupérables) ne sont ni inclus dans le tarif ni remboursables. Le voyageur paie alors directement les frais supplémentaires engagés sur place (repas, transport, hébergement).",
        },
        {
          EN: "Travelers must make sure their flights coincide with the trip itinerary. Best of Morocco Tours is not responsible for any forfeiture resulting from an inability to obtain airline tickets that allow participation in a reserved trip, nor for airline penalties or fees resulting from changes or cancellations once tickets have been issued.",
          FR: "Le voyageur doit s'assurer que ses vols concordent avec l'itinéraire. Best of Morocco Tours n'est pas responsable des pertes découlant de l'impossibilité d'obtenir des billets d'avion permettant de participer au voyage réservé, ni des pénalités ou frais imposés par les compagnies aériennes à la suite de modifications ou d'annulations après l'émission des billets.",
        },
      ],
    },
    {
      id: "special-requests",
      title: { EN: "Special Requests", FR: "Demandes spéciales" },
      paragraphs: [
        {
          EN: "Special requests such as special meals, dietary requirements, adjoining rooms or accommodation needs must be communicated when making your reservation. Such requests are subject to availability and confirmation by the Company.",
          FR: "Les demandes spéciales (repas particuliers, restrictions alimentaires, chambres communicantes, besoins d'hébergement, etc.) doivent être communiquées au moment de la réservation. Elles demeurent sujettes à disponibilité et à la confirmation de l'entreprise.",
        },
      ],
    },
    {
      id: "price-guarantee",
      title: { EN: "Best Price Guarantee", FR: "Garantie du meilleur prix" },
      paragraphs: [
        {
          EN: "If you find a better advertised price elsewhere for an identical vacation package, Best of Morocco Tours will match that price and give you an extra 5% discount.",
          FR: "Si vous trouvez ailleurs un prix annoncé plus avantageux pour un forfait identique, Best of Morocco Tours s'aligne sur ce prix et vous accorde 5 % de rabais supplémentaire.",
        },
      ],
    },
  ],
};

// Charges on the total land cost, by notice given before departure
export const cancellationTiers: { window: Bi; charge: string; note: Bi }[] = [
  { window: { EN: "More than 6 weeks", FR: "Plus de 6 semaines" }, charge: "15%", note: { EN: "of the total land cost", FR: "du coût terrestre total" } },
  { window: { EN: "6 to 4 weeks", FR: "De 6 à 4 semaines" }, charge: "25%", note: { EN: "of the total land cost", FR: "du coût terrestre total" } },
  { window: { EN: "4 to 2 weeks", FR: "De 4 à 2 semaines" }, charge: "50%", note: { EN: "of the total land cost", FR: "du coût terrestre total" } },
  { window: { EN: "Less than 2 weeks", FR: "Moins de 2 semaines" }, charge: "100%", note: { EN: "no refund is given", FR: "aucun remboursement" } },
];

export const cancellationPage: LegalPage = {
  intro: [
    {
      EN: "Plans change, and you can cancel your booking at any time. A cancellation takes effect on the day Best of Morocco Tours receives your written request, and the charges below are calculated from that date.",
      FR: "Les plans changent et vous pouvez annuler votre réservation à tout moment. L'annulation prend effet le jour où Best of Morocco Tours reçoit votre demande écrite, et les frais ci-dessous sont calculés à partir de cette date.",
    },
  ],
  sections: [
    {
      id: "transfers",
      title: { EN: "Changing Dates or Transferring Your Booking", FR: "Changer de dates ou transférer votre réservation" },
      paragraphs: [],
      list: {
        EN: [
          "You may transfer to another trip, with different dates and/or itinerary, without penalty by notifying us 60 days or more before departure. After that, the cancellation charges above apply.",
          "If a member of your party is prevented from travelling because of death, injury or serious illness of the client, a close relative or friend, redundancy or jury service, the booking may be transferred to another suitable person, departure date or tour of similar standard and cost, provided written notice is confirmed by Best of Morocco Tours.",
        ],
        FR: [
          "Vous pouvez transférer votre réservation vers un autre voyage (dates et/ou itinéraire différents) sans pénalité en nous avisant au moins 60 jours avant le départ. Passé ce délai, les frais d'annulation ci-dessus s'appliquent.",
          "Si un membre du groupe ne peut voyager en raison du décès, d'une blessure ou d'une maladie grave du client, d'un proche ou d'un ami, d'une mise à pied ou d'une convocation comme juré, la réservation peut être transférée à une autre personne, une autre date ou un circuit de catégorie et de coût similaires, sous réserve d'un avis écrit confirmé par Best of Morocco Tours.",
        ],
      },
    },
    {
      id: "refunds",
      title: { EN: "How Refunds Are Paid", FR: "Versement des remboursements" },
      paragraphs: [
        {
          EN: "Any refund is calculated according to the conditions above, with consideration given to evidence of exceptional circumstances. Best of Morocco Tours does not pay fees charged by the client's bank for processing the credited amount.",
          FR: "Tout remboursement est calculé selon les conditions ci-dessus, en tenant compte des preuves de circonstances exceptionnelles. Best of Morocco Tours ne prend pas en charge les frais facturés par la banque du client pour le traitement du montant crédité.",
        },
        {
          EN: "All refunds are paid within two weeks to a month. During the peak period, refunds may take around six weeks.",
          FR: "Tous les remboursements sont versés dans un délai de deux semaines à un mois. En haute saison, ce délai peut atteindre environ six semaines.",
        },
      ],
    },
    {
      id: "cancellation-by-us",
      title: { EN: "If We Cancel Your Tour", FR: "Si nous annulons votre circuit" },
      paragraphs: [
        {
          EN: "If a tour must be cancelled because of low participation or because an arrangement cannot be confirmed, we will notify you at least fifteen (15) days before departure (excluding the departure date). We may recommend alternative tours; if you prefer not to accept them, you receive a full refund within the timeframe above.",
          FR: "Si un circuit doit être annulé en raison d'une faible participation ou parce qu'un arrangement ne peut être confirmé, nous vous aviserons au moins quinze (15) jours avant le départ (date de départ exclue). Nous pourrons vous proposer d'autres circuits; si vous les refusez, vous serez remboursé intégralement dans les délais ci-dessus.",
        },
      ],
    },
    {
      id: "beyond-control",
      title: { EN: "Changes Beyond Our Control", FR: "Changements indépendants de notre volonté" },
      paragraphs: [
        {
          EN: "If a trip must be extended or modified because of weather, road conditions, lack of transportation, political or civil disputes, medical emergencies or other causes beyond our control, the associated costs are not refundable, and extra costs in the field (food, transport, accommodation) are paid directly by the traveler.",
          FR: "Si un voyage doit être prolongé ou modifié en raison de la météo, de l'état des routes, d'un manque de transport, de conflits politiques ou civils, d'une urgence médicale ou d'autres causes indépendantes de notre volonté, les coûts associés ne sont pas remboursables, et les frais supplémentaires sur place (repas, transport, hébergement) sont payés directement par le voyageur.",
        },
        {
          EN: "Best of Morocco Tours is not responsible for airline penalties or fees resulting from changes or cancellations once flight tickets have been issued.",
          FR: "Best of Morocco Tours n'est pas responsable des pénalités ou frais des compagnies aériennes découlant de modifications ou d'annulations après l'émission des billets d'avion.",
        },
      ],
    },
    {
      id: "insurance",
      title: { EN: "Protect Your Trip with Insurance", FR: "Protégez votre voyage avec une assurance" },
      paragraphs: [
        {
          EN: "We strongly recommend comprehensive travel insurance that covers the cost of cancelling your booking, as well as medical treatment, baggage and personal belongings. We can provide appropriate cover on request.",
          FR: "Nous recommandons fortement une assurance voyage complète couvrant les frais d'annulation de votre réservation, ainsi que les soins médicaux, les bagages et les effets personnels. Nous pouvons vous proposer une couverture adaptée sur demande.",
        },
      ],
    },
  ],
};
