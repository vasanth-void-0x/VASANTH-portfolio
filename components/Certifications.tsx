"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="// CLEARANCE_BADGES" title="Certifications" accent="neon" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card hud-corners flex flex-col items-center rounded-lg p-7 text-center"
          >
            <BadgeCheck className="mb-4 text-neon" size={32} />
            <h3 className="font-display text-sm font-semibold text-white">{cert.name}</h3>
            <span className="mt-3 rounded-full border border-neon/40 bg-neon/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon">
              {cert.status}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
