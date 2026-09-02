"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  accent = "neon",
  eyebrowAccent,
  highlight = false,
}: {
  eyebrow: string;
  title: string;
  accent?: "neon" | "volt" | "signal";
  eyebrowAccent?: "neon" | "volt" | "signal";
  highlight?: boolean;
}) {
  const accentClass =
    accent === "neon" ? "text-neon" : accent === "volt" ? "text-volt" : "text-signal";
  const glowClass =
    accent === "neon" ? "text-glow-green" : accent === "volt" ? "text-glow-blue" : "text-glow-purple";
  const eyebrowClass =
    eyebrowAccent === "neon"
      ? "text-neon"
      : eyebrowAccent === "volt"
        ? "text-volt"
        : eyebrowAccent === "signal"
          ? "text-signal"
          : accentClass;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 flex flex-col items-center text-center"
    >
      <span className={`section-eyebrow text-[10px] ${eyebrowClass}`}>{eyebrow}</span>
      <h2
        className={`mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl ${glowClass} ${
          highlight ? "border border-neon/35 bg-neon/[0.07] px-5 py-2 shadow-[0_0_24px_rgba(57,255,140,0.12)]" : ""
        }`}
      >
        {title}
      </h2>
      <div className={`mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-current to-transparent ${accentClass}`} />
    </motion.div>
  );
}
