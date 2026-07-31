"use client";

import {
  Activity,
  BrainCircuit,
  Code2,
  Database,
  FileSearch,
  Globe2,
  LockKeyhole,
  Network,
  Radar,
  Search,
  Shield,
  Terminal,
  Workflow,
} from "lucide-react";

const iconFor = (tool: string) => {
  const t = tool.toLowerCase();
  if (t.includes("python") || t.includes("powershell") || t.includes("flask") || t.includes("streamlit")) return Code2;
  if (t.includes("splunk") || t.includes("sysmon") || t.includes("event")) return Activity;
  if (t.includes("virus") || t.includes("mitre") || t.includes("attack")) return Shield;
  if (t.includes("geo") || t.includes("api")) return Globe2;
  if (t.includes("kali") || t.includes("nmap") || t.includes("nikto") || t.includes("burp") || t.includes("metasploit")) return Terminal;
  if (t.includes("autopsy") || t.includes("ftk") || t.includes("forensic")) return FileSearch;
  if (t.includes("sqlite") || t.includes("database")) return Database;
  if (t.includes("ai") || t.includes("llm") || t.includes("groq")) return BrainCircuit;
  if (t.includes("firewall") || t.includes("block")) return LockKeyhole;
  if (t.includes("scapy") || t.includes("network")) return Network;
  if (t.includes("cyberchef") || t.includes("header")) return Search;
  if (t.includes("ioc") || t.includes("intel")) return Radar;
  return Workflow;
};

export default function ToolchainMap({ tools }: { tools: string[] }) {
  return (
    <div className="toolchain-map" aria-label="Toolchain flow">
      {tools.map((tool, index) => {
        const Icon = iconFor(tool);
        return (
          <div className="toolchain-step-wrap" key={`${tool}-${index}`}>
            <div className="toolchain-step">
              <div className="toolchain-logo"><Icon size={19} strokeWidth={1.7} /></div>
              <span>{tool}</span>
            </div>
            {index < tools.length - 1 && <span className="toolchain-connector" aria-hidden="true">›</span>}
          </div>
        );
      })}
    </div>
  );
}
