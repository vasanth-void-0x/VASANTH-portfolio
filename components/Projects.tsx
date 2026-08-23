"use client";\n\n// Project showcase: 6 cybersecurity builds + 3 AI security builds.

import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";
import { projects, type Project } from "@/lib/data";

type ProjectFilter = "All" | "Cybersecurity" | "AI Security";

const additionalProjects: Project[] = [
  {
    id: "soc-alert-escalation",
    title: "SOC Alert Escalation Simulation",
    description:
      "Simulated a Tier-1 SOC investigation workflow using Windows and Sysmon telemetry, Splunk searches, alert validation, evidence collection, MITRE ATT&CK mapping, and analyst-ready escalation.",
    tools: ["Splunk", "Sysmon", "Windows Event Logs", "MITRE ATT&CK", "Incident Triage"],
    image: "/projects/soc-investigation.png",
    caseStudy: {
      category: "SOC INVESTIGATION & ESCALATION",
      objective: "Practice a defensible Tier-1 workflow from alert validation through documented escalation.",
      environment: ["Windows 11", "Sysmon", "Splunk", "Kali Linux", "MITRE ATT&CK"],
      scenario: "Controlled suspicious Windows activity generates telemetry for investigation and escalation.",
      collection: "Collected Sysmon and Windows event data and reviewed the events in Splunk.",
      investigation: [
        "Validated alert context and affected assets.",
        "Correlated related Windows and Sysmon events.",
        "Mapped supported behavior to MITRE ATT&CK.",
        "Prepared an analyst-ready escalation summary.",
      ],
      findings: [
        "Separated actionable evidence from false-positive context.",
        "Preserved event details required for the next investigation tier.",
      ],
      mitre: ["T1059.001 — PowerShell", "T1078 — Valid Accounts"],
      response: ["Document evidence and severity.", "Escalate validated activity with recommended next actions."],
      learnings: ["Alert triage", "Splunk investigation", "Evidence documentation", "SOC escalation"],
      evidence: [{ src: "/projects/soc-investigation.png", caption: "SOC investigation and escalation workflow" }],
    },
  },
  {
    id: "threat-hunting-dashboard",
    title: "Threat Hunting Dashboard",
    description:
      "Built an investigation dashboard that enriches suspicious indicators with reputation, GeoIP, and MITRE ATT&CK context to support faster threat-hunting decisions.",
    tools: ["Python", "Flask", "VirusTotal", "GeoIP", "MITRE ATT&CK", "OSINT"],
    image: "/projects/threat-hunting-dashboard.png",
    caseStudy: {
      category: "THREAT HUNTING & IOC ENRICHMENT",
      objective: "Centralize IOC enrichment and investigation context in a focused analyst dashboard.",
      environment: ["Python", "Flask", "VirusTotal API", "GeoIP", "MITRE ATT&CK"],
      scenario: "An analyst receives a suspicious IP, domain, URL, or file hash that requires rapid enrichment.",
      collection: "Accepted indicators and retained their original values alongside enrichment results.",
      investigation: [
        "Checked reputation and detection context.",
        "Added network and geographic context when available.",
        "Mapped supported behavior to MITRE ATT&CK.",
      ],
      findings: ["Reduced manual lookup steps.", "Presented enrichment in an investigation-focused view."],
      mitre: ["MITRE ATT&CK mapping based on supported indicator context"],
      response: ["Prioritize suspicious indicators for deeper investigation.", "Document evidence before containment."],
      learnings: ["IOC enrichment", "Threat intelligence APIs", "OSINT", "Analyst dashboard design"],
      evidence: [{ src: "/projects/threat-hunting-dashboard.png", caption: "Threat hunting and IOC enrichment dashboard" }],
    },
  },
  {
    id: "ragexploit",
    title: "RAGExploit — AI & RAG Security Scanner",
    description:
      "Developed an ethical security scanner for RAG and AI applications that tests document poisoning, indirect prompt injection, unauthorized retrieval, and sensitive-data leakage.",
    tools: ["Python", "LLM Security", "RAG Security", "MCP", "Prompt Injection", "CLI"],
    image: "/projects/1.png",
    github: "https://github.com/vasanth-void-0x/RAGExploit",
    caseStudy: {
      category: "AI / RAG SECURITY",
      objective: "Identify retrieval-layer weaknesses before they can influence model behavior or expose protected information.",
      environment: ["Python", "RAG pipelines", "LLM APIs", "MCP concepts", "CLI"],
      scenario: "An authorized target exposes retrieval and generation workflows that require controlled security testing.",
      collection: "Collected target responses only from explicitly configured test requests.",
      investigation: [
        "Tested document poisoning behavior.",
        "Evaluated indirect prompt-injection paths.",
        "Checked unauthorized retrieval and sensitive-data leakage.",
        "Produced explainable findings for analyst review.",
      ],
      findings: ["Connected retrieval behavior to practical AI security risks.", "Kept testing scoped to authorized targets."],
      mitre: ["MITRE ATLAS", "OWASP guidance for LLM and agentic applications"],
      response: ["Remove poisoned content.", "Enforce retrieval authorization.", "Validate context before generation."],
      learnings: ["RAG security", "Indirect prompt injection", "Retrieval authorization", "AI security scanning"],
      evidence: [{ src: "/projects/1.png", caption: "RAGExploit AI and RAG security scanner" }],
    },
  },
  {
    id: "ai-red-team-agent",
    title: "AI Red Team Agent",
    description:
      "Created an AI-focused red-team workbench for controlled adversarial testing, attack-scenario execution, risk scoring, evidence review, and security reporting.",
    tools: ["Python", "AI Red Teaming", "LLM", "Prompt Testing", "Risk Scoring", "MITRE ATLAS"],
    image: "/projects/2.png",
    caseStudy: {
      category: "AI RED TEAMING",
      objective: "Organize authorized adversarial tests against AI behavior and translate results into actionable findings.",
      environment: ["Python", "LLM APIs", "Prompt test cases", "MITRE ATLAS"],
      scenario: "A controlled AI system is evaluated using defined red-team scenarios and expected safety boundaries.",
      collection: "Stored test inputs, model responses, risk context, and evidence for each authorized scenario.",
      investigation: [
        "Executed structured adversarial prompt scenarios.",
        "Reviewed unsafe behavior and policy-boundary failures.",
        "Scored risk and retained evidence.",
        "Generated remediation-focused findings.",
      ],
      findings: ["Made AI testing repeatable and evidence-driven.", "Separated test execution from final analyst judgment."],
      mitre: ["MITRE ATLAS", "OWASP Agentic AI risk categories"],
      response: ["Apply guardrails and permission controls.", "Retest remediated behavior against the same scenarios."],
      learnings: ["AI red teaming", "Adversarial testing", "Risk scoring", "Security reporting"],
      evidence: [{ src: "/projects/2.png", caption: "AI Red Team Agent security dashboard" }],
    },
  },
];

const categoryById: Record<string, Exclude<ProjectFilter, "All">> = {
  itrap: "Cybersecurity",
  "aegis-flow": "Cybersecurity",
  "dfir-copilot": "Cybersecurity",
  "chain-guard": "Cybersecurity",
  "soc-alert-escalation": "Cybersecurity",
  "threat-hunting-dashboard": "Cybersecurity",
  "agent-shield": "AI Security",
  ragexploit: "AI Security",
  "ai-red-team-agent": "AI Security",
};

const currentById = Object.fromEntries(projects.map((project) => [project.id, project]));
const allProjects: Project[] = [
  currentById.itrap,
  currentById["aegis-flow"],
  currentById["dfir-copilot"],
  currentById["chain-guard"],
  ...additionalProjects.filter((project) => project.id === "soc-alert-escalation"),
  ...additionalProjects.filter((project) => project.id === "threat-hunting-dashboard"),
  currentById["agent-shield"],
  ...additionalProjects.filter((project) => project.id === "ragexploit"),
  ...additionalProjects.filter((project) => project.id === "ai-red-team-agent"),
].filter(Boolean) as Project[];

const filters: ProjectFilter[] = ["All", "Cybersecurity", "AI Security"];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? allProjects
        : allProjects.filter((project) => categoryById[project.id] === activeFilter),
    [activeFilter],
  );

  const navigate = (direction: -1 | 1) => {
    if (!selected) return;
    const index = allProjects.findIndex((project) => project.id === selected.id);
    setSelected(allProjects[(index + direction + allProjects.length) % allProjects.length]);
  };

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionHeading eyebrow="// DEPLOYED_BUILDS" title="Projects" accent="neon" />

        <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Project filters">
          {filters.map((filter) => {
            const active = filter === activeFilter;
            const count =
              filter === "All"
                ? allProjects.length
                : allProjects.filter((project) => categoryById[project.id] === filter).length;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={active}
                className={`rounded-sm border px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
                  active
                    ? "border-neon bg-neon/10 text-neon shadow-neon-glow"
                    : "border-white/15 bg-white/[0.025] text-white/55 hover:border-neon/45 hover:text-white"
                }`}
              >
                {filter}
                <span className="ml-2 text-[9px] opacity-60">[{count}]</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              category={categoryById[project.id]}
              onCaseStudy={setSelected}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={selected}
        onClose={() => setSelected(null)}
        onNavigate={navigate}
      />
    </section>
  );
}
