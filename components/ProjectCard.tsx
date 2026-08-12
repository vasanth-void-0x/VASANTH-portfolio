"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Terminal, Zap } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index, onCaseStudy }: { project: Project; index: number; onCaseStudy: (project: Project) => void }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (index % 3) * 0.12 }} whileHover={{ y: -8 }} className="project-card glass-card hud-corners group flex flex-col overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-neon-glow">
      <div className="relative h-44 w-full overflow-hidden border-b border-neon/15 bg-void-card">
        {!imgError ? <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" onError={() => setImgError(true)} /> : <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-void via-void-card to-signal/10 text-white/30"><Terminal size={32} /><span className="font-mono text-[10px] uppercase tracking-widest">preview_pending.png</span></div>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-base font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-white/65">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="project-tool-badge rounded-full border border-volt/30 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-volt/90">{tool}</span>)}</div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="lightning-blue-btn flex items-center justify-center gap-2 rounded-sm border py-2.5 font-mono text-[11px] uppercase tracking-widest"><Github size={14} /> GitHub</a> : <div className="flex items-center justify-center rounded-sm border border-white/10 py-2.5 font-mono text-[11px] uppercase tracking-widest text-white/35"><Terminal size={14} className="mr-2" /> Workflow</div>}
          {project.demo ? <a href={project.demo} target="_blank" rel="noopener noreferrer" className="lightning-purple-btn flex items-center justify-center gap-2 rounded-sm border py-2.5 font-mono text-[11px] uppercase tracking-widest"><Zap size={14} /> Live Demo</a> : <button type="button" onClick={() => onCaseStudy(project)} className="lightning-purple-btn flex items-center justify-center gap-2 rounded-sm border py-2.5 font-mono text-[11px] uppercase tracking-widest"><Zap size={14} /> View Case Study</button>}
        </div>
      </div>
    </motion.div>
  );
}
