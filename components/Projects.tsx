"use client";

// Project showcase: 6 cybersecurity builds + 3 AI security builds.

import { useState } from "react";
import { ExternalLink, Flag, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";
import { projects, type Project } from "@/lib/data";

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
    image: "/projects/ragexploit-dashboard.webp",
    github: "https://github.com/vasanth-void-0x/RAGExploit",
    demo: "https://rag-exploit-scanner.vercel.app/",
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
      evidence: [{ src: "/projects/ragexploit-dashboard.webp", caption: "RAGExploit AI and RAG security scanner" }],
    },
  },
  {
    id: "ai-red-team-agent",
    title: "AI Red Team Agent",
    description:
      "Created an AI-focused red-team workbench for controlled adversarial testing, attack-scenario execution, risk scoring, evidence review, and security reporting.",
    tools: ["Python", "AI Red Teaming", "LLM", "Prompt Testing", "Risk Scoring", "MITRE ATLAS"],
    image: "/projects/ai-red-team-agent-dashboard.webp",
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
      evidence: [{ src: "/projects/ai-red-team-agent-dashboard.webp", caption: "AI Red Team Agent security dashboard" }],
    },
  },
];

const categoryById: Record<string, "Cybersecurity" | "AI Security"> = {
  itrap: "Cybersecurity",
  blueorch: "Cybersecurity",
  "dfir-copilot": "Cybersecurity",
  "chain-guard": "Cybersecurity",
  "soc-alert-escalation": "Cybersecurity",
  "threat-hunting-dashboard": "Cybersecurity",
  "agent-shield": "AI Security",
  ragexploit: "AI Security",
  "ai-red-team-agent": "AI Security",
};

const currentById = Object.fromEntries(projects.map((project) => [project.id, project]));
const additionalById = Object.fromEntries(additionalProjects.map((project) => [project.id, project]));
const projectById: Record<string, Project> = { ...currentById, ...additionalById };

const featuredIds = ["blueorch", "ragexploit", "agent-shield"];
const engineeringIds = ["dfir-copilot", "itrap", "chain-guard"];
const labIds = ["threat-hunting-dashboard", "soc-alert-escalation"];

const labPlatforms = [
  {
    title: "TryHackMe",
    role: "Hands-on Security Labs",
    description: "Practical learning across SOC operations, threat analysis, networking, Linux, and offensive security fundamentals.",
    href: "https://tryhackme.com/",
    cta: "View TryHackMe",
    icon: ShieldCheck,
    accent: "neon",
  },
  {
    title: "VulnHub",
    role: "CTF Player",
    description: "Practicing enumeration, vulnerability discovery, exploitation, privilege escalation, and evidence-driven CTF walkthroughs.",
    href: "https://www.vulnhub.com/",
    cta: "View VulnHub",
    icon: Flag,
    accent: "volt",
  },
] as const;

const selectProjects = (ids: string[]) => ids.map((id) => projectById[id]).filter(Boolean);

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featuredProjects = selectProjects(featuredIds);
  const engineeringProjects = selectProjects(engineeringIds);
  const labProjects = selectProjects(labIds);
  const upcomingProject = projectById["ai-red-team-agent"];
  const navigableProjects = [...featuredProjects, upcomingProject, ...engineeringProjects, ...labProjects].filter(Boolean);

  const navigate = (direction: -1 | 1) => {
    if (!selected) return;
    const index = navigableProjects.findIndex((project) => project.id === selected.id);
    setSelected(navigableProjects[(index + direction + navigableProjects.length) % navigableProjects.length]);
  };

  return (
    <>
    <section id="projects" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(57,255,140,0.06),transparent_34%),radial-gradient(circle_at_85%_45%,rgba(168,85,247,0.05),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="// DEPLOYED_SECURITY_PRODUCTS" title="Security Projects" accent="neon" eyebrowAccent="signal" highlight />

        <p className="mx-auto mb-8 mt-[-2rem] max-w-2xl text-center font-mono text-[11px] leading-relaxed tracking-wide text-volt/75">
          SOC automation, RAG security testing, and agentic AI runtime defence.
        </p>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              category={categoryById[project.id]}
              variant="featured"
              status={project.id === "blueorch" ? "SOC Flagship" : project.id === "ragexploit" ? "AI Security" : "Runtime Defense"}
              onCaseStudy={setSelected}
            />
          ))}
        </div>

        {upcomingProject ? (
          <div className="mt-12">
            <ProjectCard
              project={upcomingProject}
              index={0}
              category="AI Security"
              variant="upcoming"
              onCaseStudy={setSelected}
            />
          </div>
        ) : null}

        <div className="mt-16 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-volt">Security Engineering</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-white">Detection, Forensics & DevSecOps</h3>
          </div>
          <span className="hidden font-mono text-[9px] uppercase tracking-widest text-white/30 sm:block">03 Builds</span>
        </div>

        <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {engineeringProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              category={categoryById[project.id]}
              variant="engineering"
              onCaseStudy={setSelected}
            />
          ))}
        </div>

      </div>
    </section>

    <section id="labs" className="relative scroll-mt-16 overflow-hidden border-y border-neon/10 bg-[#020806]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(57,255,140,0.07),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(59,130,246,0.05),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="// HANDS_ON_SECURITY_OPERATIONS" title="Security Labs" accent="neon" />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {labPlatforms.map((platform) => {
            const Icon = platform.icon;
            const isNeon = platform.accent === "neon";

            return (
              <article
                key={platform.title}
                className={`group relative overflow-hidden border bg-[#040b08]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  isNeon
                    ? "border-neon/25 hover:border-neon/60 hover:shadow-neon-glow"
                    : "border-volt/25 hover:border-volt/60 hover:shadow-[0_0_28px_rgba(59,130,246,0.16)]"
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-px ${isNeon ? "bg-neon/70" : "bg-volt/70"}`} />
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-11 w-11 items-center justify-center border bg-black/30 ${isNeon ? "border-neon/35 text-neon" : "border-volt/35 text-volt"}`}>
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <span className={`font-mono text-[9px] uppercase tracking-[0.22em] ${isNeon ? "text-neon" : "text-volt"}`}>
                    {platform.role}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{platform.title}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-white/58">{platform.description}</p>

                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center gap-2 border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                    isNeon
                      ? "border-neon/35 text-neon hover:bg-neon/10"
                      : "border-volt/35 text-volt hover:bg-volt/10"
                  }`}
                >
                  {platform.cta}
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <div className="mb-5 flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-neon">SOC Labs & Investigations</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-white">Hands-on Analyst Workflows</h3>
            </div>
            <span className="hidden font-mono text-[9px] uppercase tracking-widest text-white/30 sm:block">Evidence-led</span>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            {labProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                category={categoryById[project.id]}
                variant="lab"
                onCaseStudy={setSelected}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    <CaseStudyModal project={selected} onClose={() => setSelected(null)} onNavigate={navigate} />
    </>
  );
}
