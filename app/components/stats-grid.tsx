import { MoroccanMedallionArt } from "./moroccan-art-motifs";

export default function StatsGrid() {
  const metrics = [
    {
      value: "12 000+",
      sub: "kilometers",
      desc: "passed across Morocco by our happy travelers"
    },
    {
      value: "4 300+",
      sub: "hotel nights",
      desc: "booked in authentic luxury riads & royal desert camps"
    },
    {
      value: "20+",
      sub: "years of work",
      desc: "dedicated solely to inbound Moroccan travel excellence"
    },
    {
      value: "100%",
      sub: "certified guides",
      desc: "officially licensed by the Moroccan Ministry of Tourism (No. 2816)"
    }
  ];

  return (
    <section className="bg-transparent py-12 px-4 sm:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-[1.8rem] border border-stone-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-[#C5A880]/70 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle Moroccan Rosette Hallmark Watermark */}
              <div className="absolute -bottom-4 -right-4 transition-opacity duration-300 pointer-events-none">
                <MoroccanMedallionArt size={72} opacity={0.12} className="group-hover:opacity-25" />
              </div>

              <div className="relative z-10">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight block">
                  {m.value}
                </span>
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#C5A880] mt-1 block">
                  {m.sub}
                </span>
              </div>
              <div className="pt-4 border-t border-stone-100 mt-4">
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
