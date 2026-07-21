export const profile = {
  name: "Vasanth Kumar",
  role: "SOC Analyst | Security Analyst",
  tagline:
    "Cybersecurity Graduate | SOC Analyst | Threat Hunting | Incident Response | SIEM | Active Directory | Digital Forensics | AI Security | Python | Security Automation",
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
  demo: string;
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
    demo: "#",
  },
  {
    id: "soc-investigation",
    title: "SOC Incident Investigation & Alert Triage Lab",
    description:
      "Implemented alert triage and IOC analysis workflows to document and respond to simulated incident attacks in an enterprise-style SOC environment.",
    tools: ["Splunk", "Sysmon", "Windows Event Logs", "MITRE ATT&CK"],
    image: "/projects/soc-investigation.png",
    github: "https://github.com/vasanth-void-0x",
    demo: "#",
  },
  {
    id: "threat-hunting-dashboard",
    title: "Threat Hunting Dashboard",
    description:
      "Automated IOC enrichment with VirusTotal and GeoIP APIs to improve visibility into threat indicators across the environment.",
    tools: ["Python", "Flask", "Splunk", "VirusTotal API", "GeoIP API", "MITRE ATT&CK"],
    image: "/projects/threat-hunting-dashboard.png",
    github: "https://github.com/vasanth-void-0x",
    demo: "#",
  },
  {
    id: "ai-soc-dashboard",
    title: "AI-Driven SOC Monitoring Dashboard",
    description:
      "Integrated LLM-based analysis into SOC workflows to assist with alert context, prioritization, and faster incident response.",
    tools: ["Python", "Streamlit", "Scapy", "Groq AI API", "LLM", "SQLite"],
    image: "/projects/ai-soc-dashboard.png",
    github: "https://github.com/vasanth-void-0x",
    demo: "#",
  },
  {
    id: "auto-blocking-system",
    title: "Real-Time Threat Detection & Auto-Blocking System",
    description:
      "Implemented automated response workflows that detect suspicious IP activity, block it via Windows Firewall, and generate security alerts.",
    tools: ["Python", "Groq AI API", "Windows Firewall", "PowerShell", "psutil"],
    image: "/projects/auto-blocking-system.png",
    github: "https://github.com/vasanth-void-0x",
    demo: "#",
  },
];

export const experience = [
  {
    title: "Cybersecurity Home Lab",
    period: "Ongoing",
    points: [
      "Built and maintained a home lab to practice SOC operations, security monitoring, threat analysis, threat hunting, log analysis, alert triage, and incident response using Splunk, Wazuh, Sysmon, Kali Linux, and Windows.",
    ],
  },
  {
    title: "Penetration Testing Lab",
    period: "Ongoing",
    points: [
      "Conducted vulnerability assessments and web application testing using Nmap, Burp Suite, Nikto, and Metasploit in authorized lab environments.",
    ],
  },
  {
    title: "Digital Forensics Practice",
    period: "Ongoing",
    points: [
      "Performed evidence acquisition and forensic analysis using Autopsy and FTK Imager on simulated investigation scenarios.",
    ],
  },
  {
    title: "Security Automation",
    period: "Ongoing",
    points: [
      "Developed Python and PowerShell scripts with n8n workflows to automate repetitive security tasks and improve SOC efficiency.",
    ],
  },
  {
    title: "Full Stack Development Intern",
    period: "Livestream Technology, Coimbatore · 30 Days",
    points: [
      "Assisted in developing and testing web application features while following software development best practices.",
      "Collaborated with the team on debugging, documentation, and application maintenance tasks.",
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
    status: "Completed",
  },
  {
    name: "TryHackMe – Jr. Penetration Tester Path",
    status: "Completed",
  },
  {
    name: "Microsoft Student SOC Program Foundations",
    status: "Completed",
  },
];
