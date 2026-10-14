'use client';

import { motion } from "motion/react";
import { MoroccanMedallionArt } from "./moroccan-art-motifs";
import { easeOutExpo } from "@/lib/animations";

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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: easeOutExpo }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="bg-white/95 backdrop-blur-sm p-7 rounded-[1.8rem] border border-stone-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-[#C5A880]/80 hover:shadow-[0_16px_40px_rgba(197,168,128,0.16)] transition-all duration-300 relative overflow-hidden group cursor-default"
            >
              {/* Subtle Moroccan Rosette Hallmark Watermark */}
              <div className="absolute -bottom-4 -right-4 transition-transform duration-700 ease-out group-hover:rotate-45 pointer-events-none">
                <MoroccanMedallionArt size={72} opacity={0.14} className="group-hover:opacity-30 transition-opacity" />
              </div>

              <div className="relative z-10">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight block">
                  {m.value}
                </span>
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#C5A880] mt-1 block">
                  {m.sub}
                </span>
              </div>
              <div className="pt-4 border-t border-stone-100 mt-4 relative z-10">
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

