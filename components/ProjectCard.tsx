"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
      whileHover={{ y: -8 }}
      className="glass-card hud-corners group flex flex-col overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-neon-glow"
    >
      <div className="relative h-44 w-full overflow-hidden border-b border-neon/15 bg-void-card">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-void via-void-card to-signal/10 text-white/30">
            <Terminal size={32} />
            <span className="font-mono text-[10px] uppercase tracking-widest">
              preview_pending.png
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-base font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-white/65">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-volt/30 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-volt/90"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-white/20 py-2 font-mono text-xs uppercase tracking-widest text-white/80 transition-all hover:border-neon hover:text-neon"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={project.demo}
            className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-signal/40 py-2 font-mono text-xs uppercase tracking-widest text-signal transition-all hover:bg-signal/10 hover:shadow-signal-glow"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
