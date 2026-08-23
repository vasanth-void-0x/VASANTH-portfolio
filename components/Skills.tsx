"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Accent = "cyan" | "purple" | "red" | "green" | "amber";

type SkillCard = {
  title: string;
  image: string;
  accent: Accent;
  process: string[];
  skills: string[];
  visualLabel: string;
};

const accents: Record<
  Accent,
  { text: string; border: string; glow: string; soft: string; line: string }
> = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/35",
    glow: "shadow-[0_0_35px_rgba(34,211,238,0.2)]",
    soft: "bg-cyan-400/10",
    line: "from-cyan-400/10 via-cyan-300 to-cyan-400/10",
  },
  purple: {
    text: "text-violet-300",
    border: "border-violet-400/35",
    glow: "shadow-[0_0_38px_rgba(139,92,246,0.24)]",
    soft: "bg-violet-400/10",
    line: "from-violet-400/10 via-violet-300 to-violet-400/10",
  },
  red: {
    text: "text-red-400",
    border: "border-red-500/40",
    glow: "shadow-[0_0_38px_rgba(239,68,68,0.22)]",
    soft: "bg-red-500/10",
    line: "from-red-500/10 via-red-400 to-red-500/10",
  },
  green: {
    text: "text-emerald-300",
    border: "border-emerald-400/35",
    glow: "shadow-[0_0_38px_rgba(52,211,153,0.2)]",
    soft: "bg-emerald-400/10",
    line: "from-emerald-400/10 via-emerald-300 to-emerald-400/10",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-400/35",
    glow: "shadow-[0_0_38px_rgba(251,191,36,0.18)]",
    soft: "bg-amber-400/10",
    line: "from-amber-400/10 via-amber-300 to-amber-400/10",
  },
};

const skillCards: SkillCard[] = [
  {
    title: "SOC Operations",
    image: "/assets/skills/soc-operations.png",
    accent: "cyan",
    visualLabel: "LIVE MONITOR",
    process: ["Logs", "SIEM", "Alert", "Investigate", "Respond"],
    skills: ["Splunk", "Wazuh", "Sentinel", "Sysmon", "Alert Triage", "Threat Hunting", "Incident Response"],
  },
  {
    title: "VAPT",
    image: "/assets/skills/vapt.png",
    accent: "red",
    visualLabel: "TARGET SCAN",
    process: ["Recon", "Scan", "Validate", "Report"],
    skills: ["Nmap", "Burp Suite", "Nikto", "Metasploit", "Vulnerability Assessment", "Web Testing"],
  },
  {
    title: "DFIR",
    image: "/assets/skills/dfir.png",
    accent: "cyan",
    visualLabel: "EVIDENCE VERIFIED",
    process: ["Evidence", "Hash", "Analyze", "Timeline", "Report"],
    skills: ["Autopsy", "FTK Imager", "YARA-X", "EVTX", "SHA-256", "Timeline Analysis", "Chain of Custody"],
  },
  {
    title: "Cybersecurity",
    image: "/assets/skills/cybersecurity.png",
    accent: "green",
    visualLabel: "ETHICAL DEFENSE",
    process: ["Threat", "Detect", "Analyze", "Protect"],
    skills: ["Security Tools", "Threat Analysis", "IOC Analysis", "MITRE ATT&CK", "Cyber Kill Chain", "Linux"],
  },
  {
    title: "AI Security",
    image: "/assets/skills/ai-security.png",
    accent: "purple",
    visualLabel: "AI SECURITY CORE",
    process: ["LLM / RAG / MCP", "Scan", "Risk", "Allow · Review · Block"],
    skills: ["LLM Security", "RAG Security", "MCP Security", "Agentic AI", "Prompt Injection", "Document Poisoning", "Data Leakage", "Tool Misuse", "OWASP Agentic", "MITRE ATLAS"],
  },
  {
    title: "Security Automation",
    image: "/assets/skills/security-automation.png",
    accent: "purple",
    visualLabel: "WORKFLOW ACTIVE",
    process: ["Alert", "Webhook", "Enrich", "Decide", "Respond"],
    skills: ["Python", "PowerShell", "Bash", "n8n", "REST APIs", "Webhooks", "Groq API", "SOAR"],
  },
  {
    title: "Cloud Security",
    image: "/assets/skills/cloud-security.png",
    accent: "cyan",
    visualLabel: "CLOUD CONTROL",
    process: ["Identity", "Access", "Detect Risk", "Secure"],
    skills: ["Cloudflare Workers", "Cloudflare D1", "Microsoft Azure", "AWS Fundamentals", "IAM", "Docker", "CI/CD Security"],
  },
  {
    title: "Network Security",
    image: "/assets/skills/network-security.png",
    accent: "green",
    visualLabel: "PACKET CONTROL",
    process: ["Traffic", "Monitor", "Detect", "Block"],
    skills: ["TCP/IP", "OSI Model", "DNS", "HTTP/HTTPS", "Wireshark", "Network Ports", "Troubleshooting"],
  },
  {
    title: "Bug Bounty & CTF Player",
    image: "/assets/skills/bug-bounty-ctf.png",
    accent: "red",
    visualLabel: "BUG FOUND",
    process: ["Recon", "Find Bug", "Exploit Lab", "Flag / Report"],
    skills: ["TryHackMe", "Hack The Box", "Web Security Labs", "OSINT", "Gobuster", "Hydra", "John the Ripper"],
  },
];

function FloatingVisual({ card }: { card: SkillCard }) {
  const accent = accents[card.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="absolute -top-16 left-3 z-20"
      aria-hidden="true"
    >
      <div className={`relative flex h-28 w-32 items-center justify-center ${accent.glow}`}>
        <span className={`absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 ${accent.border}`} />
        <span className={`absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 ${accent.border}`} />
        <span className={`absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 ${accent.border}`} />
        <span className={`absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 ${accent.border}`} />
        <div className={`absolute inset-5 rounded-full ${accent.soft} blur-xl`} />
        <Image
          src={card.image}
          alt=""
          width={480}
          height={360}
          sizes="128px"
          className="relative h-24 w-28 object-contain drop-shadow-[0_0_12px_rgba(57,255,140,0.35)]"
        />
        <span className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ${card.accent === "red" ? "bg-red-500" : card.accent === "purple" ? "bg-violet-400" : card.accent === "green" ? "bg-emerald-400" : card.accent === "amber" ? "bg-amber-400" : "bg-cyan-400"} shadow-[0_0_12px_currentColor]`} />
      </div>
    </motion.div>
  );
}

function ProcessRail({ card }: { card: SkillCard }) {
  const accent = accents[card.accent];

  return (
    <div className="relative mb-5 overflow-hidden rounded-lg border border-white/5 bg-black/25 px-3 py-3">
      <div className={`absolute left-3 right-3 top-[1.14rem] h-px bg-gradient-to-r ${accent.line} opacity-45`} />
      <div className="relative flex items-start justify-between gap-1">
        {card.process.map((step) => (
          <div key={step} className="flex min-w-0 flex-1 flex-col items-center text-center">
            <span className={`mb-2 h-2 w-2 rounded-full border ${accent.border} bg-[#071015]`} />
            <span className="font-mono text-[9px] uppercase leading-tight tracking-wide text-white/55">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionHeading
          eyebrow="// CAPABILITY MATRIX"
          title="Skills In Action"
          accent="signal"
        />

        <p className="mx-auto -mt-5 mb-16 max-w-2xl text-center font-mono text-xs leading-relaxed text-white/45">
          Practical security capabilities visualized as clear operational workflows
          used to detect, investigate, test, automate, and protect.
        </p>

        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((card, index) => {
            const accent = accents[card.accent];

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative min-h-[350px] rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(10,20,28,0.86),rgba(4,9,15,0.72))] px-5 pb-5 pt-16 backdrop-blur-xl transition-all duration-300 hover:${accent.border} ${accent.glow}`}
              >
                <FloatingVisual card={card} />

                <div className="absolute right-5 top-4 flex items-center gap-2">
                  <ShieldCheck className={`h-3.5 w-3.5 ${accent.text}`} />
                  <span className={`font-mono text-[9px] tracking-[0.18em] ${accent.text} opacity-75`}>
                    {card.visualLabel}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">
                    Operational capability
                  </p>
                  <h3 className={`font-display text-lg font-semibold uppercase tracking-wider ${accent.text}`}>
                    {card.title}
                  </h3>
                </div>

                <ProcessRail card={card} />

                <div className="flex flex-wrap gap-1.5">
                  {card.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0.55 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.05 * skillIndex }}
                      className={`rounded-md border ${accent.border} bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] text-white/70 transition-colors group-hover:text-white/90`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
