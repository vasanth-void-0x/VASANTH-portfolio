"use client";

import { motion } from "framer-motion";
import { Activity, Bug, FileSearch, Radar, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ToolchainMap from "./ToolchainMap";
import { projects } from "@/lib/data";

const cards = [
  {
    title: "Threat Hunting Experience",
    subtitle: "THREAT INTELLIGENCE • IOC INVESTIGATION",
    description: "Hands-on threat-hunting practice focused on investigating suspicious indicators, enriching IOC context, and connecting findings to analyst workflows.",
    points: ["IOC investigation & enrichment", "IP/domain reputation analysis", "MITRE ATT&CK mapping"],
    tools: ["Python", "VirusTotal API", "GeoIP API", "MITRE ATT&CK"],
    badge: "HANDS-ON EXPERIENCE",
    icon: Radar,
  },
  {
    title: "Cybersecurity Home Lab",
    subtitle: "SOC OPERATIONS • MONITORING • TRIAGE",
    description: "Practical SOC environment used to practice security telemetry, SIEM monitoring, alert triage, log analysis, and incident investigation.",
    points: ["SIEM monitoring & log correlation", "Alert triage and investigation", "SOC escalation workflow"],
    tools: ["Splunk", "Sysmon", "Windows Event Logs", "Kali Linux"],
    badge: "SOC HOME LAB",
    icon: Activity,
  },
  {
    title: "Penetration Testing Lab",
    subtitle: "RECON • ENUMERATION • VULNERABILITY ASSESSMENT",
    description: "Authorized lab practice covering network reconnaissance, service enumeration, web testing, vulnerability assessment, and findings documentation.",
    points: ["Network reconnaissance", "Service & web enumeration", "Controlled vulnerability testing"],
    tools: ["Kali Linux", "Nmap", "Nikto", "Burp Suite", "Metasploit"],
    badge: "PRACTICAL LAB",
    icon: Bug,
  },
  {
    title: "Digital Forensics Practice",
    subtitle: "EVIDENCE • ARTIFACT ANALYSIS • INVESTIGATION",
    description: "Forensics practice using simulated investigation scenarios to examine evidence, identify artifacts, and document defensible findings.",
    points: ["Evidence acquisition concepts", "Disk/image & artifact analysis", "Investigation documentation"],
    tools: ["FTK Imager", "Autopsy", "File System Analysis"],
    badge: "FORENSICS LAB",
    icon: FileSearch,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionHeading eyebrow="// SECURITY_OPERATIONS_RECORD" title="Hands-on Security Experience" accent="volt" />

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="experience-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] tracking-[.24em] text-neon/65">0{i + 1} // {item.subtitle}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="experience-icon"><Icon size={20} /></div>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/62">{item.description}</p>
                <div className="mt-5"><ToolchainMap tools={item.tools} /></div>

                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                  {item.points.map((point) => <li key={point} className="experience-point">{point}</li>)}
                </ul>
                <span className="experience-badge">{item.badge}</span>
              </motion.article>
            );
          })}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="experience-card experience-project-card mt-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] tracking-[.24em] text-signal">05 // PROJECT-BASED EXPERIENCE</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">5 Hands-on Cybersecurity Projects</h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/62">Applied threat hunting, SOC monitoring, incident triage, AI-assisted analysis, phishing investigation, and security automation concepts through practical projects.</p>
            </div>
            <div className="experience-icon experience-icon-purple"><ShieldCheck size={21} /></div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {projects.slice(0, 5).map((project, index) => (
              <div key={project.id} className="project-experience-mini">
                <span>0{index + 1}</span>
                <strong>{project.title}</strong>
                <small>{project.tools.slice(0, 3).join(" • ")}</small>
              </div>
            ))}
          </div>
          <span className="experience-badge experience-badge-purple">PROJECT-BASED EXPERIENCE</span>
        </motion.article>
      </div>
    </section>
  );
}
