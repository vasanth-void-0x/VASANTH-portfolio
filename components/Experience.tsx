"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Bug, FileSearch, Radar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ToolchainMap from "./ToolchainMap";

const experiences = [
  {
    title: "SOC Operations Experience",
    subtitle: "MONITORING • TRIAGE • ESCALATION",
    description: "Hands-on SOC practice using security telemetry to validate alerts, correlate events, investigate suspicious activity, and prepare analyst-ready escalations.",
    workflow: ["Logs", "SIEM", "Alert", "Investigate", "Escalate"],
    evidence: ["SIEM monitoring", "Log correlation", "Incident triage"],
    tools: ["Splunk", "Wazuh", "Sysmon", "Windows Event Logs"],
    icon: Activity,
    code: "SOC",
  },
  {
    title: "Threat Hunting Experience",
    subtitle: "IOC • ENRICHMENT • CORRELATION",
    description: "Investigation practice focused on suspicious indicators, reputation intelligence, geographic context, and evidence-led threat decisions.",
    workflow: ["IOC", "Enrich", "Correlate", "Hunt", "Decide"],
    evidence: ["IOC investigation", "Reputation analysis", "MITRE mapping"],
    tools: ["VirusTotal", "GeoIP API", "MITRE ATT&CK", "Python"],
    icon: Radar,
    code: "HUNT",
  },
  {
    title: "VAPT & Penetration Testing Lab",
    subtitle: "RECON • ENUMERATION • VALIDATION",
    description: "Authorized lab testing across network and web targets, from reconnaissance and service discovery through controlled validation and reporting.",
    workflow: ["Recon", "Scan", "Enumerate", "Validate", "Report"],
    evidence: ["Network recon", "Web enumeration", "Finding validation"],
    tools: ["Nmap", "Burp Suite", "Nikto", "Metasploit", "Kali Linux"],
    icon: Bug,
    code: "VAPT",
  },
  {
    title: "Digital Forensics & Incident Response",
    subtitle: "EVIDENCE • ANALYSIS • TIMELINE",
    description: "Simulated forensic investigations covering evidence handling, integrity verification, artifact examination, timeline reconstruction, and defensible reporting.",
    workflow: ["Acquire", "Hash", "Analyze", "Timeline", "Report"],
    evidence: ["Evidence integrity", "Artifact analysis", "Timeline reconstruction"],
    tools: ["FTK Imager", "Autopsy", "YARA", "CyberChef"],
    icon: FileSearch,
    code: "DFIR",
  },
  {
    title: "AI Security Experience",
    subtitle: "LLM • RAG • MCP • AGENTIC AI",
    description: "Practical AI security testing across retrieval pipelines and agentic systems, including prompt injection, document poisoning, data leakage, and tool misuse.",
    workflow: ["Target", "Test", "Detect", "Review", "Protect"],
    evidence: ["RAG security", "Prompt testing", "Agent guardrails"],
    tools: ["RAGExploit", "AgentShield", "AI Red Team", "MITRE ATLAS"],
    icon: BrainCircuit,
    code: "AI SEC",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionHeading eyebrow="// SECURITY_OPERATIONS_RECORD" title="Hands-on Security Experience" accent="volt" />

        <div className="experience-timeline">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            const visualFirst = index % 2 === 0;
            const visual = (
              <motion.div
                initial={{ opacity: 0, scale: 0.86 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="experience-visual"
                aria-hidden="true"
              >
                <span className="experience-visual-ring" />
                <Icon size={58} strokeWidth={1.25} />
                <strong>{item.code}</strong>
              </motion.div>
            );
            const content = (
              <motion.div
                initial={{ opacity: 0, x: visualFirst ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="experience-content"
              >
                <p className="experience-kicker">0{index + 1} // {item.subtitle}</p>
                <h3>{item.title}</h3>
                <p className="experience-description">{item.description}</p>
                <div className="experience-workflow" aria-label={`${item.title} workflow`}>
                  {item.workflow.map((step, stepIndex) => (
                    <span key={step}>
                      <b>{step}</b>
                      {stepIndex < item.workflow.length - 1 && <i aria-hidden="true">›</i>}
                    </span>
                  ))}
                </div>
                <div className="experience-evidence">
                  {item.evidence.map((point) => <span key={point}>{point}</span>)}
                </div>
                <ToolchainMap tools={item.tools} />
              </motion.div>
            );

            return (
              <article className="experience-row" key={item.title}>
                <div className="experience-side experience-side-left">{visualFirst ? visual : content}</div>
                <div className="experience-axis" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="experience-side experience-side-right">{visualFirst ? content : visual}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
