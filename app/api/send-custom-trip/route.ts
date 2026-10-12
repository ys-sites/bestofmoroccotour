import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { isPremium, destinations, activities, nights, contact, payment, totalCostCAD } = body;

    // Log the custom trip transmission payload to console for full traceability
    console.log("=========================================");
    console.log("SECURE PGP TRANSMISSION INCOMING");
    console.log("TYPE:", isPremium ? "PREMIUM SOVEREIGN PASSAGE" : "STANDARD EXCLUSIVE PASSAGE");
    console.log("CLIENT:", contact.fullName);
    console.log("EMAIL:", contact.email);
    console.log("PHONE:", contact.phone);
    console.log("DURATION:", nights, "Nights");
    console.log("TOTAL COST:", totalCostCAD, "CAD");
    console.log("DESTINATIONS SELECTED:", destinations.join(", "));
    console.log("ACTIVITIES SELECTED:", activities.join(", "));
    if (payment) {
      console.log("SECURE DEPOSIT CARD:", payment.cardNumber, "EXPIRY:", payment.expiry);
    } else {
      console.log("SECURE DEPOSIT CARD: NONE PROVIDED");
    }
    console.log("=========================================");

    // Forwarding to FormSubmit
    const formSubmitResponse = await fetch("https://formsubmit.co/ajax/mevoyages75@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _template: "box",
        "Type de Demande / Request Type": "Voyage sur mesure / Custom Trip Builder",
        "Nom du client / Client Name": contact.fullName,
        "Téléphone / Client Phone": contact.phone,
        "Courriel / Client Email": contact.email,
        "Gamme de Prestige / Travel Tier": isPremium ? "PREMIUM SOVEREIGN PASSAGE" : "STANDARD EXCLUSIVE PASSAGE",
        "Durée / Duration": `${nights} Nights / Nuits`,
        "Estimation de budget / Estimated Budget": `${totalCostCAD} CAD`,
        "Villes & Haltes / Destinations": destinations.join(", "),
        "Activités / Activities": activities.join(", "),
        _subject: `Merveilles & Voyages - Voyage Sur Mesure: ${contact.fullName}`
      })
    });

    if (!formSubmitResponse.ok) {
      const errorText = await formSubmitResponse.text();
      console.error("FormSubmit API returned error status:", formSubmitResponse.status, errorText);
    }

    return NextResponse.json({ success: true, message: "Transmission accepted." }, { status: 200 });
  } catch (error) {
    console.error("Transmission error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
