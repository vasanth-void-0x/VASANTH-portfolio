"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Radar, Bug, Cpu, MapPin, Crosshair } from "lucide-react";
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

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative isolate mb-10 overflow-hidden rounded-2xl border border-neon/20 bg-[#020706]/75 shadow-[0_22px_70px_rgba(0,0,0,0.42),0_0_34px_rgba(57,255,140,0.08)] max-sm:-mx-2 max-sm:rounded-xl"
      >
        <div className="pointer-events-none absolute left-2.5 top-2.5 z-10 h-12 w-12 border-l-2 border-t-2 border-neon/80" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 h-12 w-12 border-b-2 border-r-2 border-neon/80" aria-hidden="true" />
        <Image
          src="/assets/vasanth-security-core.webp"
          alt="Vasanth security core connecting SOC Operations, AI Security, Cybersecurity and Security Automation"
          width={1680}
          height={945}
          sizes="(max-width: 768px) 100vw, 1152px"
          className="h-auto w-full object-contain"
          priority={false}
        />
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-card hud-corners rounded-lg p-7 sm:p-9"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-neon/70" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-neon text-glow-green sm:text-sm">
              Security Profile
            </p>
          </div>
          <p className="font-body text-lg font-medium leading-8 text-white/85 sm:text-xl sm:leading-9">
            {profile.summary}
          </p>
          <div className="mt-7 space-y-4 border-t border-neon/15 pt-5">
            <div className="flex flex-wrap items-center gap-3">
              <Crosshair className="text-neon drop-shadow-[0_0_7px_rgba(57,255,140,0.7)]" size={19} />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50 sm:text-sm">
                Target roles
              </span>
              <span className="font-display text-base font-semibold tracking-wide text-white/90 sm:text-lg">
                SOC Analyst · Security Analyst · Cybersecurity Analyst
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <MapPin className="text-neon drop-shadow-[0_0_7px_rgba(57,255,140,0.7)]" size={19} />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50 sm:text-sm">
                Preferred locations
              </span>
              <span className="font-display text-base font-semibold tracking-wide text-neon text-glow-green sm:text-lg">
                Coimbatore · Chennai · Bangalore
              </span>
            </div>
          </div>
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
