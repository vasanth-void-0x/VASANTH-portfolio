"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Bug, FileSearch, Radar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    title: "SOC Operations",
    description: "SIEM monitoring, alert triage, log correlation, investigation, and escalation practice.",
    tools: "Splunk • Wazuh • Sysmon • Windows Event Logs",
    icon: Activity,
  },
  {
    title: "Threat Hunting",
    description: "IOC enrichment, reputation analysis, threat correlation, and MITRE ATT&CK mapping.",
    tools: "VirusTotal • GeoIP • MITRE ATT&CK • Python",
    icon: Radar,
  },
  {
    title: "VAPT Lab",
    description: "Authorized reconnaissance, enumeration, vulnerability validation, and reporting.",
    tools: "Nmap • Burp Suite • Nikto • Metasploit",
    icon: Bug,
  },
  {
    title: "Digital Forensics",
    description: "Evidence acquisition, hash verification, artifact analysis, and forensic documentation.",
    tools: "FTK Imager • Autopsy • YARA • CyberChef",
    icon: FileSearch,
  },
  {
    title: "AI Security",
    description: "Practical LLM, RAG, MCP, prompt-injection, data-leakage, and agent security testing.",
    tools: "RAGExploit • AgentShield • AI Red Team • MITRE ATLAS",
    icon: BrainCircuit,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow="// PRACTICAL_EXPOSURE" title="Hands-on Experience" accent="volt" />

        <div className="experience-compact-list">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="experience-compact-row"
              >
                <div className="experience-compact-index">0{index + 1}</div>
                <div className="experience-compact-icon"><Icon size={28} strokeWidth={1.5} /></div>
                <div className="experience-compact-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>{item.tools}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
