"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";
import { projects, type Project } from "@/lib/data";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const navigate=(direction:-1|1)=>{if(!selected)return;const i=projects.findIndex(p=>p.id===selected.id);setSelected(projects[(i+direction+projects.length)%projects.length]);};
  return <section id="projects" className="relative overflow-hidden"><div className="relative z-10 mx-auto max-w-6xl px-6 py-28"><SectionHeading eyebrow="// DEPLOYED_BUILDS" title="Projects" accent="neon" /><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project,i)=><ProjectCard key={project.id} project={project} index={i} onCaseStudy={setSelected}/>)}</div></div><CaseStudyModal project={selected} onClose={()=>setSelected(null)} onNavigate={navigate}/></section>;
}
