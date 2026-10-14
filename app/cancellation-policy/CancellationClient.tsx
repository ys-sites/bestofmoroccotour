'use client';

import LegalPage from "../components/legal-page";
import { useLang, translate } from "../context/lang-context";
import { cancellationPage, cancellationTiers } from "@/data/conditionsData";

function CancellationTiers() {
  const { lang } = useLang();
  return (
    <section aria-labelledby="charges-heading" className="space-y-4">
      <h2 id="charges-heading" className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
        {lang === "FR" ? "Frais d'annulation selon le préavis" : "Cancellation charges by notice given"}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {cancellationTiers.map((tier, i) => (
          <div
            key={tier.charge}
            className={`rounded-2xl p-4 sm:p-5 border shadow-[0_8px_30px_rgba(74,53,37,0.05)] ${
              i === cancellationTiers.length - 1 ? "bg-[#1E1B18] border-[#1E1B18] text-white" : "bg-white/95 border-stone-200/90"
            }`}
          >
            <span className={`text-[10.5px] font-bold uppercase tracking-[0.16em] block ${i === cancellationTiers.length - 1 ? "text-amber-300" : "text-stone-400"}`}>
              {translate(tier.window, lang)}
            </span>
            <span className="font-serif text-3xl sm:text-4xl font-bold block mt-2">{tier.charge}</span>
            <span className={`text-xs block mt-1 ${i === cancellationTiers.length - 1 ? "text-stone-300" : "text-stone-500"}`}>
              {translate(tier.note, lang)}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-stone-500">
        {lang === "FR"
          ? "Délais calculés avant la date de départ, à partir de la réception de votre demande écrite."
          : "Time before your departure date, counted from when we receive your written request."}
      </p>
    </section>
  );
}

export default function CancellationClient() {
  return (
    <LegalPage
      eyebrow={{ EN: "Booking Flexibility", FR: "Flexibilité de réservation" }}
      title={{ EN: "Cancellation Policy", FR: "Politique d'annulation" }}
      crumbs={[
        { name: { FR: "Accueil", EN: "Home" }, path: "/" },
        { name: { FR: "Politique d'annulation", EN: "Cancellation Policy" }, path: "/cancellation-policy" },
      ]}
      data={cancellationPage}
      highlight={<CancellationTiers />}
      related={[
        { href: "/conditions", label: { EN: "Full Terms & Conditions", FR: "Conditions générales complètes" } },
        { href: "/founder", label: { EN: "Founder Profile", FR: "Profil du fondateur" } },
      ]}
    />
  );
}
