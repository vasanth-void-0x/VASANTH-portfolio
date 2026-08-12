export const profile = {
  name: "Vasanth Kumar",
  role: "SOC Analyst | Security Analyst",
  tagline:
    "Cybersecurity Graduate | SOC Analyst | SIEM | Threat Hunting | Incident Response | Security Automation",
  email: "iamvasanth2k4@gmail.com",
  phone: "+91 9786183898",
  github: "https://github.com/vasanth-void-0x",
  linkedin: "https://linkedin.com/in/vasanth-2k4",
  resumePath: "/Vasanth_Kumar_Resume.pdf",
  summary:
    "Cybersecurity graduate with hands-on experience in SOC operations, SIEM monitoring, alert triage, threat hunting, incident response, and security automation through practical home labs and cybersecurity projects. Seeking an entry-level SOC Analyst, Security Analyst, or Cybersecurity Analyst role.",
};

export const skillGroups = [
  {
    title: "SOC & Security Operations",
    accent: "neon" as const,
    skills: [
      "SOC Operations",
      "Alert Triage",
      "Threat Hunting",
      "Incident Response",
      "Log Analysis",
      "IOC Analysis",
      "Phishing Analysis",
      "Vulnerability Assessment",
      "Jira (Ticketing)",
    ],
  },
  {
    title: "Networking",
    accent: "volt" as const,
    skills: [
      "OSI Model",
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "SMTP",
      "DHCP",
      "Common Network Ports",
      "Network Troubleshooting",
    ],
  },
  {
    title: "SIEM & Detection",
    accent: "signal" as const,
    skills: [
      "Splunk",
      "Microsoft Sentinel",
      "Wazuh",
      "Sysmon",
      "Active Directory",
      "Windows Event Logs",
      "EDR Concepts",
    ],
  },
  {
    title: "AI & Automation",
    accent: "neon" as const,
    skills: ["LLM Integration", "Prompt Engineering", "Groq API", "n8n"],
  },
  {
    title: "Cybersecurity Tools",
    accent: "volt" as const,
    skills: [
      "Wireshark",
      "VirusTotal",
      "CyberChef",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Nikto",
      "John the Ripper",
    ],
  },
  {
    title: "Digital Forensics",
    accent: "signal" as const,
    skills: ["Autopsy", "FTK Imager", "Evidence Acquisition", "File System Analysis"],
  },
  {
    title: "Programming",
    accent: "neon" as const,
    skills: ["Python", "PowerShell", "Bash"],
  },
  {
    title: "Frameworks",
    accent: "volt" as const,
    skills: ["MITRE ATT&CK", "Cyber Kill Chain"],
  },
  {
    title: "Additional Skills",
    accent: "signal" as const,
    skills: ["Microsoft Azure", "Git", "GitHub", "Visual Studio Code"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  image: string;
  github?: string;
  demo?: string;
  caseStudy: {
    category: string;
    objective: string;
    environment: string[];
    scenario: string;
    collection: string;
    investigation: string[];
    findings: string[];
    mitre: string[];
    response: string[];
    learnings: string[];
    evidence?: { src: string; caption: string }[];
  };
};

export const projects: Project[] = [
  {
    id: "itrap",
    title: "iTRAP — Identity Threat Response Automation Platform",
    description:
      "Built an identity-focused SOC platform that normalizes Windows, Sysmon, Splunk, and Wazuh telemetry, detects attack patterns, correlates alerts, and applies policy-gated response workflows.",
    tools: ["Python", "Streamlit", "Splunk", "Wazuh", "Sysmon", "MITRE ATT&CK", "SQLite"],
    image: "/projects/320e4183-407d-4af5-97a5-143dffe60773.png",
    github: "https://github.com/vasanth-void-0x/Identity-Threat-Response-Automation-Platform",
    caseStudy: {
      category: "SOC DETECTION & RESPONSE",
      objective: "Demonstrate an end-to-end SOC workflow for identity threats, from multi-source log ingestion and normalization to triage, correlation, investigation, and guarded response.",
      environment: ["Python", "Streamlit", "SQLite", "Windows Event Logs", "Sysmon", "Splunk", "Wazuh", "MITRE ATT&CK"],
      scenario: "Synthetic Windows and identity telemetry represents brute-force attempts, suspicious PowerShell, privilege escalation, impossible travel, and multi-stage attacker behavior.",
      collection: "Parsers convert Windows, Sysmon, Splunk-export, and Wazuh alert data into a shared normalized event schema before detection.",
      investigation: [
        "Applied 11 configurable detection rules to normalized events.",
        "Correlated alerts sharing users, hosts, IP addresses, or devices into incidents.",
        "Mapped observed behavior to MITRE ATT&CK and generated investigation guidance.",
        "Reviewed threat-intelligence context, risk contributions, and response eligibility."
      ],
      findings: [
        "Produced explainable risk scores instead of opaque severity labels.",
        "Grouped related alerts into triage-ready incidents with supporting evidence.",
        "Validated the platform with an extensive automated test suite."
      ],
      mitre: ["T1110 — Brute Force", "T1059.001 — PowerShell", "T1078 — Valid Accounts", "T1098 — Account Manipulation"],
      response: [
        "Default all containment actions to simulation mode.",
        "Require policy checks and two-person approval before eligible real actions.",
        "Protect allowlisted users, hosts, and networks from automated response."
      ],
      learnings: ["Detection engineering", "Log normalization", "Alert correlation", "MITRE-driven investigation", "Safe response automation"],
      evidence: [
        { src: "/projects/320e4183-407d-4af5-97a5-143dffe60773.png", caption: "iTRAP operational overview and attack map" },
        { src: "/projects/66bc4272-84be-4edf-b81b-6c38156c881d.png", caption: "Splunk connection and Wazuh integration settings" },
      ],
    },
  },
  {
    id: "agent-shield",
    title: "AgentShield — Agentic AI Security Gateway",
    description:
      "Created a security decision layer that evaluates AI-agent prompts and proposed tool actions for prompt injection, sensitive-data exposure, excessive permissions, and unsafe execution.",
    tools: ["TypeScript", "Cloudflare Workers", "Cloudflare D1", "Groq API", "OWASP Agentic", "MITRE ATLAS"],
    image: "/projects/d31d894a-2024-47e5-9cc3-b0a0f3625d68.png",
    github: "https://github.com/vasanth-void-0x/AgentShield---AI-Gateway",
    demo: "https://agent-shield.iamvasanth2k4.workers.dev/",
    caseStudy: {
      category: "AGENTIC AI SECURITY",
      objective: "Inspect agent requests before execution and return an explainable ALLOW, REVIEW, or BLOCK decision with a traceable audit record.",
      environment: ["TypeScript", "Cloudflare Workers", "Cloudflare D1", "Groq API", "Drizzle", "OWASP Agentic AI", "MITRE ATLAS"],
      scenario: "An AI agent receives untrusted instructions and proposes actions such as accessing local files, exporting credentials, or invoking high-impact tools.",
      collection: "The gateway receives the prompt, requested tool, permission context, and proposed action without executing arbitrary external tools.",
      investigation: [
        "Normalized prompt and tool context.",
        "Combined deterministic security rules with contextual Groq analysis.",
        "Aggregated findings into a risk score and policy verdict.",
        "Mapped relevant risks to OWASP Agentic AI and MITRE ATLAS."
      ],
      findings: [
        "Detected instruction override, system-prompt extraction, credential exposure, and tool misuse patterns.",
        "Routed reviewable actions to a human approval queue.",
        "Stored decisions and findings in Cloudflare D1 for auditability."
      ],
      mitre: ["MITRE ATLAS — Prompt manipulation and unsafe model interaction", "OWASP Agentic — Goal hijacking, tool misuse, excessive permissions"],
      response: ["Allow low-risk actions.", "Pause ambiguous or high-impact actions for human approval.", "Block high-risk requests and retain an audit record."],
      learnings: ["Agentic AI threat modeling", "Hybrid detection", "Human-in-the-loop controls", "Edge deployment", "Security audit design"],
      evidence: [
        { src: "/projects/d31d894a-2024-47e5-9cc3-b0a0f3625d68.png", caption: "AgentShield security operations overview" },
        { src: "/projects/a4cc7b20-1ca0-4224-8273-e79836138c62.png", caption: "Prompt-injection request scored 100/100 and blocked" },
      ],
    },
  },
  {
    id: "dfir-copilot",
    title: "DFIR Copilot — AI-Assisted Digital Forensics",
    description:
      "Developed a local-first Windows forensic workbench that preserves evidence, verifies SHA-256 integrity, reconstructs timelines, correlates artifacts, and produces evidence-cited assistance and reports.",
    tools: ["Python", "PySide6", "YARA-X", "Windows EVTX", "SHA-256", "Groq API", "PDF Reporting"],
    image: "/projects/51b9f6b7-db37-47fa-bcd1-aca30fa606ec.png",
    github: "https://github.com/vasanth-void-0x/DFIR-Copilot",
    caseStudy: {
      category: "DIGITAL FORENSICS & INCIDENT RESPONSE",
      objective: "Create a defensible investigation workflow where deterministic forensic evidence is established before AI assistance is used.",
      environment: ["Windows 10/11", "Python", "PySide6", "YARA-X", "EVTX", "Autopsy/FTK exports", "Groq API"],
      scenario: "A synthetic Windows incident contains suspicious downloads, PowerShell activity, network connections, and post-connection file deletion.",
      collection: "Evidence is copied into a case-scoped store, hashed before and after preservation, and recorded in an atomic manifest and custody log.",
      investigation: [
        "Re-verified evidence integrity before analysis.",
        "Parsed EVTX, JSON, JSONL, CSV, and Autopsy-style records.",
        "Applied YARA-X rules and MITRE-mapped correlations.",
        "Reconstructed a timeline and required artifact citations from Copilot answers."
      ],
      findings: [
        "Correlated download, PowerShell, and network activity into a supported finding.",
        "Identified post-connection deletion as possible anti-forensic behavior.",
        "Stopped analysis when evidence integrity verification failed."
      ],
      mitre: ["T1059.001 — PowerShell", "T1070 — Indicator Removal", "MITRE ATT&CK mappings attached only to supported findings"],
      response: ["Preserve original evidence unchanged.", "Report findings with artifact IDs and examiner warnings.", "Export PDF, HTML, and JSON case records."],
      learnings: ["Evidence integrity", "Chain of custody", "Timeline reconstruction", "YARA-X", "Evidence-grounded AI"],
      evidence: [
        { src: "/projects/51b9f6b7-db37-47fa-bcd1-aca30fa606ec.png", caption: "Evidence-grounded AI Copilot investigation" },
        { src: "/projects/8a29bf8a-e4c2-4e5d-9064-de43469c8115.png", caption: "Deleted-file evidence and supported findings" },
      ],
    },
  },
  {
    id: "chain-guard",
    title: "ChainGuard — Automated DevSecOps Security Pipeline",
    description:
      "Implemented a GitHub Actions security gate that scans commits for leaked secrets, vulnerable code, dependencies, and container images, then generates an SBOM and blocks critical findings.",
    tools: ["GitHub Actions", "Gitleaks", "Semgrep", "Trivy", "Syft", "Docker", "Python"],
    image: "/projects/3.png",
    github: "https://github.com/vasanth-void-0x/ChainGuard",
    caseStudy: {
      category: "DEVSECOPS / CI-CD SECURITY",
      objective: "Shift security checks left by automatically testing source code, dependencies, and container artifacts on every push and pull request.",
      environment: ["GitHub Actions", "Gitleaks", "Semgrep", "Trivy", "Syft", "Docker", "Vulnerable Flask demo"],
      scenario: "A controlled vulnerable Flask application includes patterns that security tools should identify before code is allowed to merge.",
      collection: "The workflow checks the repository, builds the application container, and preserves machine-generated scan outputs and SBOM data.",
      investigation: [
        "Scanned repository history and content for secrets.",
        "Applied Semgrep rules for insecure code patterns.",
        "Scanned dependencies and the built image with Trivy.",
        "Generated a software bill of materials using Syft."
      ],
      findings: ["Demonstrated automated security gates using production-relevant open-source tools.", "Separated intentionally vulnerable demo code from pipeline controls."],
      mitre: ["Secure software supply-chain controls", "CWE-oriented static-analysis findings"],
      response: ["Fail the workflow when configured High or Critical findings are detected.", "Use scan evidence to remediate code or dependency risk before merge."],
      learnings: ["CI/CD security", "SAST", "Secret scanning", "Container scanning", "SBOM generation"],
      evidence: [{ src: "/projects/3.png", caption: "ChainGuard automated pipeline preview" }],
    },
  },
  {
    id: "aegis-flow",
    title: "AegisFlow — AI-Assisted SOC Automation",
    description:
      "Designed an n8n-driven SOC workflow that receives security alerts, enriches and scores them, uses AI for analyst-ready context, and forwards structured events to the investigation workflow.",
    tools: ["n8n", "Webhooks", "Splunk", "Groq API", "REST APIs", "Security Automation"],
    image: "/projects/1.png",
    caseStudy: {
      category: "SOAR / SECURITY AUTOMATION",
      objective: "Reduce repetitive Tier-1 triage work by connecting alert intake, normalization, enrichment, AI-assisted summarization, and analyst handoff.",
      environment: ["n8n", "Webhook API", "Splunk", "Groq API", "Local security lab"],
      scenario: "A security alert enters through a webhook and moves through a controlled workflow that prepares consistent investigation context for the analyst.",
      collection: "The workflow receives structured alert fields, validates the payload, and prepares them for enrichment and downstream logging.",
      investigation: ["Accepted alerts through an n8n webhook.", "Normalized important security fields.", "Added AI-assisted context while retaining the original evidence.", "Forwarded the structured result toward Splunk and analyst review."],
      findings: ["Created a repeatable automation path instead of manual copy-and-paste triage.", "Kept AI output advisory and preserved the originating alert context."],
      mitre: ["MITRE ATT&CK mapping can be added when supported by incoming evidence"],
      response: ["Require analyst validation before containment.", "Record workflow failures and preserve original alert data for investigation."],
      learnings: ["n8n workflow design", "Webhook integration", "SOC automation", "Human-in-the-loop AI", "Splunk ingestion"],
      evidence: [{ src: "/projects/1.png", caption: "AegisFlow SOC automation workflow" }],
    },
  },
];

export const experience = [
  {
    title: "Threat Hunting Experience",
    period: "Hands-on",
    points: [
      "Practiced IOC investigation, reputation analysis, enrichment, and MITRE ATT&CK mapping through threat-hunting projects and labs.",
    ],
  },
  {
    title: "SOC & Cybersecurity Home Lab",
    period: "Ongoing",
    points: [
      "Practiced SIEM monitoring, Windows telemetry analysis, alert triage, log correlation, incident investigation, and escalation workflows.",
    ],
  },
  {
    title: "Penetration Testing Lab",
    period: "Ongoing",
    points: [
      "Conducted reconnaissance, enumeration, vulnerability assessment, and controlled web/network testing in authorized lab environments.",
    ],
  },
  {
    title: "Digital Forensics Practice",
    period: "Ongoing",
    points: [
      "Performed evidence acquisition concepts, forensic image examination, artifact analysis, and investigation documentation on simulated scenarios.",
    ],
  },
  {
    title: "Project Experience",
    period: "5 Hands-on Projects",
    points: [
      "Built five portfolio projects spanning SOC detection engineering, agentic AI security, digital forensics, DevSecOps, and AI-assisted security automation.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Sri Sai Bharath College of Arts & Science",
    period: "2026 – 2028",
  },
  {
    degree: "B.Sc. Cybersecurity & Digital Forensics",
    school: "Rev. Jacob Memorial Christian College",
    period: "2023 – 2026",
  },
];

export const certifications = [
  {
    name: "TryHackMe – SOC Level 1 Path",
    status: "In Progress",
  },
  {
    name: "TryHackMe – Jr. Penetration Tester Path",
    status: "In Progress",
  },
  {
    name: "Microsoft Student SOC Program Foundations",
    status: "Completed",
  },
];
