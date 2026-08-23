"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="// TRAINING_RECORDS" title="Education" accent="signal" />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card hud-corners rounded-lg p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-signal/40 text-signal">
                {i === 0 ? <BookOpenCheck size={20} /> : <GraduationCap size={20} />}
              </div>
              <span className={`rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[.14em] ${item.status === "Completed" ? "border-neon/35 bg-neon/[.06] text-neon" : "border-signal/35 bg-signal/[.06] text-signal"}`}>
                {item.status}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-white">{item.degree}</h3>
            <p className="mt-2 font-body text-sm text-white/65">{item.school}</p>
            <p className="mt-3 border-l border-neon/35 pl-3 font-mono text-[10px] uppercase tracking-[.1em] text-white/45">{item.focus}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-volt/80">
              {item.period}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
