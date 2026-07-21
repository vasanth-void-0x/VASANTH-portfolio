"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="// FIELD_LOG" title="Experience Timeline" accent="volt" />

      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-neon via-volt to-signal opacity-40" />

        {experience.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-neon bg-void shadow-neon-glow" />
            <div className="glass-card rounded-lg p-6">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <span className="font-mono text-[11px] uppercase tracking-widest text-neon/80">
                  {item.period}
                </span>
              </div>
              <ul className="space-y-2">
                {item.points.map((point, pi) => (
                  <li key={pi} className="flex gap-2 font-body text-sm leading-relaxed text-white/70">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-volt" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
