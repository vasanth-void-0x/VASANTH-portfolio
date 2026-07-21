"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, FileText, FolderGit2, Send } from "lucide-react";
import TypingText from "./TypingText";
import { profile } from "@/lib/data";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-neon/50" />
          <div className="absolute inset-2 animate-spin-slower rounded-full border border-volt/40" />
          <div className="absolute inset-0 rounded-full bg-radial-fade" />

          <div className="relative h-[85%] w-[85%] overflow-hidden rounded-full border-2 border-neon/70 shadow-neon-glow">
            {!imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/profile.jpg"
                alt="Vasanth Kumar profile photo"
                className="h-full w-full object-cover"
                onError={() => setImgError(true)}
                loading="eager"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-void-card via-void to-signal/20 font-display text-5xl text-neon">
                V
              </div>
            )}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="section-eyebrow text-xs text-volt"
        >
          &gt; SESSION_AUTHENTICATED :: WELCOME_OPERATIVE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-4xl font-bold uppercase tracking-wide text-white text-glow-green sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <div className="min-h-[4.5rem] max-w-3xl font-mono text-sm text-white/70 sm:text-base">
          <TypingText text={profile.tagline} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={profile.resumePath}
            download
            className="group flex items-center gap-2 rounded-sm bg-neon px-5 py-3 font-mono text-xs uppercase tracking-widest text-void shadow-neon-glow transition-transform hover:scale-105"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-volt/60 px-5 py-3 font-mono text-xs uppercase tracking-widest text-volt transition-all hover:bg-volt/10 hover:shadow-volt-glow"
          >
            <FileText size={16} /> View Resume
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-sm border border-signal/60 px-5 py-3 font-mono text-xs uppercase tracking-widest text-signal transition-all hover:bg-signal/10 hover:shadow-signal-glow"
          >
            <FolderGit2 size={16} /> View Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 font-mono text-xs uppercase tracking-widest text-white/80 transition-all hover:border-white/50 hover:text-white"
          >
            <Send size={16} /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex items-center gap-5 pt-2"
        >
          {[
            { icon: Github, href: profile.github, label: "GitHub" },
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            { icon: Phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-neon hover:text-neon hover:shadow-neon-glow"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
      >
        Scroll to decrypt ↓
      </motion.div>
    </section>
  );
}
