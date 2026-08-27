"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Flame, Github, Radar, Terminal, Zap } from "lucide-react";
import type { Project } from "@/lib/data";

type ProjectVariant = "featured" | "engineering" | "lab" | "upcoming";

type ProjectCardProps = {
  project: Project;
  index: number;
  category?: "Cybersecurity" | "AI Security";
  variant?: ProjectVariant;
  status?: string;
  onCaseStudy: (project: Project) => void;
};

export default function ProjectCard({
  project,
  index,
  category,
  variant = "engineering",
  status,
  onCaseStudy,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const isFeatured = variant === "featured";
  const isUpcoming = variant === "upcoming";
  const isLab = variant === "lab";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: Math.min(index, 2) * 0.1 }}
      whileHover={isLab ? undefined : { y: -5 }}
      className={`${isLab || isUpcoming ? "" : "project-card"} hud-corners group relative overflow-hidden border bg-[#040b08]/90 backdrop-blur-xl transition-all duration-300 ${
        isUpcoming
          ? "grid border-orange-400/35 shadow-[0_0_45px_rgba(249,115,22,0.08)] lg:min-h-[430px] lg:grid-cols-[1.08fr_0.92fr]"
          : isFeatured
            ? "flex h-full flex-col border-neon/25 hover:border-neon/60 hover:shadow-neon-glow"
            : isLab
              ? "flex min-h-[96px] items-center gap-5 border-neon/20 bg-gradient-to-r from-neon/[0.045] to-transparent p-5 hover:border-neon/50 hover:bg-neon/[0.055]"
              : "flex h-full flex-col border-volt/20 hover:border-volt/50"
      }`}
      style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
    >
      {isUpcoming ? (
        <>
          <div className="relative aspect-[3/2] overflow-hidden border-b border-orange-400/20 bg-black/60 lg:aspect-auto lg:min-h-[430px] lg:border-b-0 lg:border-r">
            {!imgError ? (
              <img
                src={project.image}
                alt={`${project.title} concept preview`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain brightness-[0.94] contrast-110 transition-transform duration-700 group-hover:scale-[1.012]"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full min-h-[240px] items-center justify-center bg-gradient-to-br from-[#120807] to-[#09040d] text-orange-300/40">
                <Radar size={54} />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090504]/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#090504]/70" />
          </div>
          <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-11">
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-orange-500/10 blur-2xl" />
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/45 bg-orange-500/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-orange-300">
              <Flame size={13} className="text-orange-400" /> Upcoming · Biggest Build
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">AI Red Teaming Platform</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.65rem]">{project.title}</h3>
            <p className="mt-5 max-w-xl font-body text-base leading-7 text-white/72">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.slice(0, 6).map((tool) => (
                <span key={tool} className="rounded-full border border-orange-300/20 bg-orange-300/[0.04] px-2.5 py-1 font-mono text-[10px] text-orange-100/75">
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-sm border border-orange-400/30 bg-orange-400/[0.07] px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-orange-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" /> In Development
              </span>
              <button
                type="button"
                onClick={() => onCaseStudy(project)}
                className="lightning-purple-btn inline-flex items-center gap-2 rounded-sm border px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest"
              >
                <Zap size={13} /> View Concept
              </button>
            </div>
          </div>
        </>
      ) : isLab ? (
        <>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-neon/35 bg-neon/[0.08] font-mono text-sm font-bold text-neon shadow-[0_0_18px_rgba(57,255,140,0.08)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-semibold leading-snug text-white sm:text-lg">{project.title}</h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/55">{project.description}</p>
          </div>
          <button
            type="button"
            onClick={() => onCaseStudy(project)}
            className="shrink-0 rounded-sm border border-neon/30 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-neon transition-colors hover:bg-neon/10"
            aria-label={`View ${project.title} case study`}
          >
            View <ExternalLink size={11} className="ml-1 inline" />
          </button>
        </>
      ) : (
        <>
          <div className={`relative w-full overflow-hidden border-b ${
            isFeatured ? "aspect-video border-neon/15" : "h-40 border-volt/15"
          } bg-void-card`}>
            {category ? (
              <span className={`absolute left-3 top-3 z-10 rounded-sm border px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest backdrop-blur-md ${
                category === "AI Security"
                  ? "border-signal/50 bg-signal/15 text-signal"
                  : "border-neon/50 bg-neon/10 text-neon"
              }`}>
                {status ?? category}
              </span>
            ) : null}
            {project.demo ? (
              <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-neon/40 bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-neon backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
                </span>
                Live
              </span>
            ) : null}
            {!imgError ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover brightness-[1.08] contrast-[1.06] transition-transform duration-500 group-hover:scale-[1.035]"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-void via-void-card to-signal/10 text-white/30">
                <Terminal size={32} />
                <span className="font-mono text-[10px] uppercase tracking-widest">preview_pending.png</span>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className={`font-display font-semibold text-white ${isFeatured ? "text-lg" : "text-base"}`}>{project.title}</h3>
            <p className="mt-3 line-clamp-3 min-h-[4.5rem] font-body text-sm leading-relaxed text-white/64">{project.description}</p>
            <div className="mt-4 flex min-h-[4rem] flex-wrap content-start gap-2">
              {project.tools.slice(0, isFeatured ? 6 : 5).map((tool) => (
                <span key={tool} className="rounded-full border border-volt/25 bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] text-volt/85">
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightning-purple-btn flex items-center justify-center gap-2 rounded-sm border py-2.5 font-mono text-[10px] uppercase tracking-widest"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
                  </span>
                  Live
                </a>
              ) : null}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightning-blue-btn flex items-center justify-center gap-2 rounded-sm border py-2.5 font-mono text-[10px] uppercase tracking-widest"
                >
                  <Github size={13} /> GitHub
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => onCaseStudy(project)}
                className={`flex items-center justify-center gap-2 rounded-sm border border-white/15 py-2.5 font-mono text-[10px] uppercase tracking-widest text-white/65 transition-colors hover:border-neon/35 hover:text-neon ${
                  project.demo && project.github ? "sm:col-span-2" : ""
                }`}
              >
                <Zap size={13} /> Case Study
              </button>
            </div>
          </div>
        </>
      )}
    </motion.article>
  );
}
