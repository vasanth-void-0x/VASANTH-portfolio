"use client";

import { motion } from "framer-motion";
import { BadgeCheck, BookOpenCheck, GraduationCap, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const icons = [ShieldCheck, BookOpenCheck, BadgeCheck, GraduationCap];

  return (
    <section id="certifications" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="// VERIFIED_LEARNING" title="Certifications & Training" accent="neon" />

      <div className="cert-training-grid">
        {certifications.map((cert, i) => {
          const Icon = icons[i] ?? BadgeCheck;
          return (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="cert-training-item"
            >
              <div className="cert-training-icon"><Icon size={26} strokeWidth={1.5} /></div>
              <div>
                <span>{cert.provider}</span>
                <h3>{cert.name}</h3>
                <p>{cert.type}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
      </div>
    </section>
  );
}
