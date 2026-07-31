"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Radar, Bug, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const readouts = [
  { icon: ShieldCheck, label: "Focus", value: "SOC & Incident Response" },
  { icon: Radar, label: "Specialty", value: "Threat Hunting & SIEM" },
  { icon: Bug, label: "Practice", value: "Pen Testing & Forensics" },
  { icon: Cpu, label: "Edge", value: "AI-Assisted Security Automation" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="// IDENTITY_FILE" title="About the Operative" accent="volt" />

      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-card hud-corners rounded-lg p-8"
        >
          <p className="font-body text-base leading-relaxed text-white/80 sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-white/40">
            status: actively seeking SOC / Security Analyst roles — Chennai · Coimbatore · Remote
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {readouts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-lg p-5"
            >
              <item.icon className="mb-3 text-neon" size={24} />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                {item.label}
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
