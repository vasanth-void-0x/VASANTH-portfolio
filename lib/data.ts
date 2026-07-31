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
  github: string;
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
    id: "phishing-lab",
    title: "Enterprise Phishing Email Triage Lab",
    description:
      "Built a structured phishing investigation workflow to extract IOCs and document findings from suspicious emails end to end.",
    tools: ["VirusTotal", "CyberChef", "Email Header Analyzer", "SMTP Header Analysis"],
    image: "/projects/phishing-lab.png",
    github: "https://github.com/vasanth-void-0x",
    caseStudy: {
      category: "PHISHING TRIAGE",
      objective: "Practice a repeatable SOC workflow for reviewing suspicious email indicators and documenting a defensible triage decision.",
      environment: ["Controlled lab", "Email headers", "VirusTotal", "CyberChef"],
      scenario: "A suspicious email is treated as an analyst triage scenario. Header metadata, URLs, domains, and other observable indicators are reviewed without interacting with live malicious content.",
      collection: "Collected sender and routing metadata, URLs/domains, header fields, and reputation context for analysis.",
      investigation: ["Reviewed sender and routing headers for inconsistencies.", "Extracted observable indicators and normalized them for reputation checks.", "Correlated indicator context before recording the triage outcome."],
      findings: ["Documented suspicious indicators and supporting context.", "Created a structured analyst-style investigation trail rather than relying on a single reputation result."],
      mitre: ["T1566 — Phishing"],
      response: ["Document findings and recommended containment/escalation steps for a simulated SOC workflow.", "Avoid opening or executing suspicious content during analysis."],
      learnings: ["Email-header analysis", "IOC handling", "Evidence-based triage documentation"],
      evidence: [{ src: "/projects/phishing-lab.png", caption: "Phishing triage lab overview" }],
    },
    demo: "",
  },
  {
    id: "soc-investigation",
    title: "SOC Incident Investigation & Alert Triage Lab",
    description:
      "Implemented alert triage and IOC analysis workflows to document and respond to simulated incident attacks in an enterprise-style SOC environment.",
    tools: ["Splunk", "Sysmon", "Windows Event Logs", "MITRE ATT&CK"],
    image: "/projects/soc-investigation.png",
    github: "https://github.com/vasanth-void-0x",
    caseStudy: {
      category: "SOC INCIDENT TRIAGE",
      objective: "Practice alert triage, log correlation, severity assessment, and escalation in a simulated SOC investigation.",
      environment: ["Splunk", "Sysmon", "Windows Event Logs", "MITRE ATT&CK"],
      scenario: "Simulated security events are reviewed as analyst alerts to determine what happened, what evidence supports the conclusion, and whether escalation is required.",
      collection: "Used Windows/Sysmon telemetry and SIEM searches to collect process, host, and event context relevant to the alert.",
      investigation: ["Validated the alert and identified the affected host/context.", "Pivoted through related Windows and Sysmon events.", "Mapped observed behavior to relevant ATT&CK techniques and documented escalation context."],
      findings: ["Built a repeatable investigation sequence for moving from alert to supporting evidence.", "Captured analyst notes suitable for a simulated escalation."],
      mitre: ["MITRE ATT&CK mapping based on observed lab behavior"],
      response: ["Document severity, affected assets, evidence, and recommended next action.", "Escalate higher-confidence suspicious activity in the simulated workflow."],
      learnings: ["SIEM triage", "Event correlation", "Escalation documentation"],
      evidence: [{ src: "/projects/soc-investigation.png", caption: "SOC investigation and alert-triage lab" }],
    },
    demo: "",
  },
  {
    id: "threat-hunting-dashboard",
    title: "Threat Hunting Dashboard",
    description:
      "Automated IOC enrichment with VirusTotal and GeoIP APIs to improve visibility into threat indicators across the environment.",
    tools: ["Python", "Flask", "Splunk", "VirusTotal API", "GeoIP API", "MITRE ATT&CK"],
    image: "/projects/threat-hunting-dashboard.png",
    github: "https://github.com/vasanth-void-0x",
    caseStudy: {
      category: "THREAT HUNTING / IOC ENRICHMENT",
      objective: "Reduce manual IOC lookup work by combining enrichment and analyst context in a single dashboard workflow.",
      environment: ["Python", "Flask", "VirusTotal API", "GeoIP API", "MITRE ATT&CK"],
      scenario: "An analyst submits an indicator for enrichment and reviews reputation, location/context, and ATT&CK-oriented information from one interface.",
      collection: "The application accepts analyst-supplied indicators and enriches them using configured external intelligence sources.",
      investigation: ["Validate and normalize the submitted indicator.", "Request enrichment context from configured APIs.", "Present relevant context in a dashboard to support analyst review and follow-up."],
      findings: ["Centralized multiple enrichment steps into one workflow.", "Improved consistency of the context available during manual threat-hunting practice."],
      mitre: ["ATT&CK context is used to organize relevant adversary behavior where applicable"],
      response: ["Use enriched context to guide further SIEM searches or analyst escalation.", "Keep API results as supporting context rather than treating one source as a final verdict."],
      learnings: ["API integration", "IOC enrichment", "Analyst-oriented dashboard design"],
      evidence: [{ src: "/projects/threat-hunting-dashboard.png", caption: "Threat Hunting Dashboard interface" }],
    },
    demo: "",
  },
  {
    id: "ai-soc-dashboard",
    title: "AI-Driven SOC Monitoring Dashboard",
    description:
      "Integrated LLM-based analysis into SOC workflows to assist with alert context, prioritization, and faster incident response.",
    tools: ["Python", "Streamlit", "Scapy", "Groq AI API", "LLM", "SQLite"],
    image: "/projects/ai-soc-dashboard.png",
    github: "https://github.com/vasanth-void-0x",
    caseStudy: {
      category: "AI-ASSISTED SOC MONITORING",
      objective: "Explore how an LLM can assist an analyst with alert context and prioritization while keeping the analyst in control of decisions.",
      environment: ["Python", "Streamlit", "Scapy", "Groq API", "SQLite"],
      scenario: "Lab-generated monitoring data is presented in a dashboard and augmented with AI-generated context to support faster analyst review.",
      collection: "Collected lab network/monitoring observations and stored relevant context for dashboard review.",
      investigation: ["Present monitoring events in a SOC-style interface.", "Send selected context to the configured LLM workflow.", "Compare AI assistance with the underlying evidence before analyst action."],
      findings: ["Demonstrated an AI-assisted workflow for summarizing alert context.", "Kept evidence visible so AI output remains advisory rather than authoritative."],
      mitre: ["ATT&CK references can be attached to analyst-reviewed behaviors where evidence supports mapping"],
      response: ["Require analyst validation before escalation or response decisions.", "Avoid exposing unnecessary sensitive data to external AI services."],
      learnings: ["LLM integration", "SOC UX", "Human-in-the-loop security analysis"],
      evidence: [{ src: "/projects/ai-soc-dashboard.png", caption: "AI-driven SOC monitoring dashboard" }],
    },
    demo: "",
  },
  {
    id: "auto-blocking-system",
    title: "Real-Time Threat Detection & Auto-Blocking System",
    description:
      "Implemented automated response workflows that detect suspicious IP activity, block it via Windows Firewall, and generate security alerts.",
    tools: ["Python", "Groq AI API", "Windows Firewall", "PowerShell", "psutil"],
    image: "/projects/auto-blocking-system.png",
    github: "https://github.com/vasanth-void-0x",
    caseStudy: {
      category: "DETECTION & AUTOMATED RESPONSE",
      objective: "Build a controlled lab workflow that detects suspicious IP activity and demonstrates an automated Windows Firewall response.",
      environment: ["Python", "PowerShell", "Windows Firewall", "psutil", "Groq API"],
      scenario: "Suspicious network activity in the local lab is evaluated against detection logic and can trigger a controlled firewall-blocking workflow with an alert record.",
      collection: "Collected local connection/process context required by the lab detection logic.",
      investigation: ["Observe relevant network activity.", "Evaluate events against the project detection conditions.", "Record the event and invoke the controlled response path when conditions are met."],
      findings: ["Connected detection, alerting, and response into one lab workflow.", "Highlighted the need for validation and safeguards before automated blocking in real environments."],
      mitre: ["Technique mapping is documented only when supported by the observed lab behavior"],
      response: ["Apply a Windows Firewall block only inside the authorized lab workflow.", "Maintain logs so automated actions can be reviewed and reversed."],
      learnings: ["Security automation", "Windows Firewall scripting", "Response guardrails"],
      evidence: [{ src: "/projects/auto-blocking-system.png", caption: "Real-time detection and auto-blocking project" }],
    },
    demo: "",
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
      "Applied threat hunting, SOC monitoring, incident triage, phishing analysis, AI-assisted SOC workflows, and security automation across five practical cybersecurity projects.",
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
