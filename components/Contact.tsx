"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28">
      <SectionHeading eyebrow="// OPEN_CHANNEL" title="Contact" accent="volt" />

      <div className="grid gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card hud-corners flex flex-col justify-between rounded-lg p-7 md:col-span-2"
        >
          <div>
            <h3 className="font-display text-lg font-semibold text-white">Let&apos;s connect</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-white/65">
              Open to entry-level SOC Analyst and Security Analyst roles. Reach out directly or
              drop a message — I usually reply within a day.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 font-mono text-sm text-white/75 hover:text-neon">
              <Mail size={16} className="text-neon" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 font-mono text-sm text-white/75 hover:text-volt">
              <Phone size={16} className="text-volt" /> {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-sm text-white/75 hover:text-signal">
              <Github size={16} className="text-signal" /> github.com/vasanth-void-0x
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-sm text-white/75 hover:text-neon">
              <Linkedin size={16} className="text-neon" /> linkedin.com/in/vasanth-2k4
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card hud-corners space-y-5 rounded-lg p-7 md:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-white/50">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-neon"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-white/50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-neon"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-white/50">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="SOC Analyst opportunity"
              className="w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-neon"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-white/50">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about the role..."
              className="w-full resize-none rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-neon"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-neon py-3 font-mono text-xs uppercase tracking-widest text-void shadow-neon-glow transition-transform hover:scale-[1.02]"
          >
            {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
            {sent ? "Message drafted — check your mail app" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
