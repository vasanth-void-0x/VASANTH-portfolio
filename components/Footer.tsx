"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neon/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-white/40">
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/60 hover:text-neon">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-volt">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-white/60 hover:text-signal">
            <Mail size={18} />
          </a>
        </div>

        <a
          href="#hero"
          className="flex items-center gap-2 rounded-sm border border-white/15 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-white/60 transition-all hover:border-neon hover:text-neon"
        >
          <ArrowUp size={14} /> Back to top
        </a>
      </div>
    </footer>
  );
}
