"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Crosshair } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="// IDENTITY_FILE" title="About the Operative" accent="volt" />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-stretch">
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
          <p className="font-body text-lg font-medium leading-8 text-white/80 sm:text-xl sm:leading-9">
            Cybersecurity and Digital Forensics graduate with hands-on exposure to{" "}
            <span className="text-neon text-glow-green">SOC Operations</span>,{" "}
            <span className="text-neon text-glow-green">AI Security</span>, and{" "}
            <span className="text-neon text-glow-green">Security Automation</span>.
            I investigate alerts, analyze SIEM telemetry, hunt threats, assess vulnerabilities,
            and build practical defensive tools through home labs and project simulations.
            Ready to contribute as an entry-level SOC Analyst or Security Analyst.
          </p>
        </motion.div>

        <div className="flex min-w-0 flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.985 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative isolate flex min-h-[330px] items-center overflow-hidden rounded-2xl border border-neon/20 bg-[#020706]/75 shadow-[0_22px_70px_rgba(0,0,0,0.42),0_0_34px_rgba(57,255,140,0.08)] max-sm:-mx-2 max-sm:min-h-0 max-sm:rounded-xl"
          >
            <div className="pointer-events-none absolute left-2.5 top-2.5 z-10 h-12 w-12 border-l-2 border-t-2 border-neon/80" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 h-12 w-12 border-b-2 border-r-2 border-neon/80" aria-hidden="true" />
            <Image
              src="/assets/vasanth-security-core.webp"
              alt="Vasanth security core connecting SOC Operations, AI Security, Cybersecurity and Security Automation"
              width={1680}
              height={945}
              sizes="(max-width: 1024px) 100vw, 640px"
              className="h-auto w-full object-contain"
              priority={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="border-l-2 border-neon/65 bg-gradient-to-r from-neon/[0.07] via-[#06110d]/70 to-transparent px-5 py-5 sm:px-7"
          >
            <div className="flex items-start gap-4">
              <Crosshair className="mt-1 shrink-0 text-neon drop-shadow-[0_0_8px_rgba(57,255,140,0.65)]" size={24} />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">Target roles</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-display text-lg font-semibold leading-relaxed tracking-wide text-white sm:text-xl">
                  <span className="whitespace-nowrap">SOC Analyst</span>
                  <span className="text-neon">•</span>
                  <span className="whitespace-nowrap">Security Analyst</span>
                  <span className="text-neon">•</span>
                  <span className="whitespace-nowrap">AI Security Trainee</span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-4 border-t border-neon/10 pt-5">
              <MapPin className="mt-1 shrink-0 text-neon drop-shadow-[0_0_8px_rgba(57,255,140,0.65)]" size={24} />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">Preferred locations</p>
                <p className="mt-2 font-display text-lg font-semibold tracking-wide text-neon text-glow-green sm:text-xl">
                  Coimbatore <span className="text-white/35">•</span> Chennai <span className="text-white/35">•</span> Bangalore
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
