"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";

const accentMap = {
  neon: {
    border: "border-neon/30 hover:border-neon",
    text: "text-neon",
    glow: "hover:shadow-neon-glow",
    dot: "bg-neon",
  },
  volt: {
    border: "border-volt/30 hover:border-volt",
    text: "text-volt",
    glow: "hover:shadow-volt-glow",
    dot: "bg-volt",
  },
  signal: {
    border: "border-signal/30 hover:border-signal",
    text: "text-signal",
    glow: "hover:shadow-signal-glow",
    dot: "bg-signal",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="// LOADOUT" title="Skills & Arsenal" accent="signal" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const accent = accentMap[group.accent];
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (gi % 3) * 0.1 }}
              className="glass-card hud-corners rounded-lg p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${accent.dot} shadow-[0_0_8px_currentColor]`} />
                <h3 className={`font-display text-sm font-semibold uppercase tracking-widest ${accent.text}`}>
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border ${accent.border} bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/80 transition-all ${accent.glow}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
