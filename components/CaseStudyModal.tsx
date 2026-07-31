"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, X, ZoomIn } from "lucide-react";
import type { Project } from "@/lib/data";
import ToolchainMap from "./ToolchainMap";

export default function CaseStudyModal({ project, onClose, onNavigate }: { project: Project | null; onClose: () => void; onNavigate: (direction: -1 | 1) => void }) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => { if (!project) return; const fn=(e: KeyboardEvent)=>{ if(e.key==="Escape") galleryOpen ? setGalleryOpen(false) : onClose(); if(galleryOpen && e.key==="ArrowRight") setActiveImage(i => (i+1)%Math.max(project.caseStudy.evidence?.length||1,1)); if(galleryOpen && e.key==="ArrowLeft") setActiveImage(i => (i-1+Math.max(project.caseStudy.evidence?.length||1,1))%Math.max(project.caseStudy.evidence?.length||1,1)); }; document.body.style.overflow="hidden"; window.addEventListener("keydown",fn); return()=>{document.body.style.overflow="";window.removeEventListener("keydown",fn)}; }, [project, galleryOpen, onClose]);
  if (!project) return null;
  const c=project.caseStudy, evidence=c.evidence||[];
  const Section=({n,title,children}:{n:string,title:string,children:React.ReactNode})=><section className="case-study-section"><div className="font-mono text-[10px] tracking-[.28em] text-signal">{n} // {title}</div><div className="mt-3 text-sm leading-7 text-white/72">{children}</div></section>;
  return <AnimatePresence>
    <motion.div className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 p-3 backdrop-blur-md sm:p-6" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={(e)=>{if(e.target===e.currentTarget)onClose()}}>
      <motion.article initial={{opacity:0,y:24,scale:.985}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20}} className="case-study-shell relative mx-auto my-3 max-w-5xl overflow-hidden rounded-xl border border-signal/45 bg-[#07090f]/95 shadow-[0_0_55px_rgba(168,85,247,.2)]">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-signal/25 bg-[#07090f]/90 px-5 py-4 backdrop-blur-xl"><div><p className="font-mono text-[9px] tracking-[.35em] text-signal">SOC CASE STUDY</p><p className="mt-1 font-display text-sm text-white sm:text-base">{project.title}</p></div><button aria-label="Close case study" onClick={onClose} className="rounded border border-white/15 p-2 text-white/60 hover:border-signal hover:text-signal"><X size={18}/></button></div>
        <div className="p-5 sm:p-8">
          <div className="mb-8 flex flex-wrap items-center gap-3"><span className="rounded border border-signal/40 bg-signal/10 px-3 py-1 font-mono text-[10px] tracking-widest text-signal">{c.category}</span>{project.tools.map(t=><span key={t} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] text-white/50">{t}</span>)}</div>
          <div className="grid gap-5 lg:grid-cols-2">
            <Section n="01" title="OBJECTIVE"><p>{c.objective}</p></Section>
            <Section n="02" title="LAB ENVIRONMENT"><ul>{c.environment.map(x=><li key={x}>› {x}</li>)}</ul></Section>
            <Section n="03" title="SCENARIO"><p>{c.scenario}</p></Section>
            <Section n="04" title="DETECTION / DATA COLLECTION"><p>{c.collection}</p></Section>
            <Section n="05" title="INVESTIGATION"><ul>{c.investigation.map(x=><li key={x}>› {x}</li>)}</ul></Section>
            <Section n="06" title="FINDINGS"><ul>{c.findings.map(x=><li key={x}>› {x}</li>)}</ul></Section>
            <Section n="07" title="MITRE ATT&CK"><ul>{c.mitre.map(x=><li key={x}>› {x}</li>)}</ul></Section>
            <Section n="08" title="RESPONSE / REMEDIATION"><ul>{c.response.map(x=><li key={x}>› {x}</li>)}</ul></Section>
            <Section n="09" title="TOOLCHAIN / INVESTIGATION FLOW"><ToolchainMap tools={project.tools} /></Section>
            <Section n="10" title="KEY LEARNINGS"><ul>{c.learnings.map(x=><li key={x}>› {x}</li>)}</ul></Section>
          </div>
          {evidence.length>0 && <section className="mt-8 rounded-lg border border-white/10 bg-black/20 p-5"><div className="flex items-center justify-between"><div><p className="font-mono text-[10px] tracking-[.28em] text-neon">INVESTIGATION EVIDENCE</p><p className="mt-1 text-xs text-white/45">Compact preview — open for full-screen review</p></div><span className="font-mono text-[10px] text-white/35">{evidence.length} FILE{evidence.length!==1?"S":""}</span></div><div className="mt-4 grid gap-4 sm:grid-cols-2">{evidence.slice(0,2).map((ev,i)=><button key={ev.src} onClick={()=>{setActiveImage(i);setGalleryOpen(true)}} className="group overflow-hidden rounded border border-white/10 bg-black/30 text-left hover:border-signal/50"><div className="relative h-40 overflow-hidden"><img src={ev.src} alt={ev.caption} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105"/><div className="absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/35"><ZoomIn className="opacity-0 transition group-hover:opacity-100"/></div></div><p className="p-3 font-mono text-[10px] text-white/55">{ev.caption}</p></button>)}</div>{evidence.length>2&&<button onClick={()=>setGalleryOpen(true)} className="lightning-purple-btn mt-4 w-full rounded border py-2 font-mono text-[10px] tracking-widest">VIEW ALL EVIDENCE ({evidence.length})</button>}</section>}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6"><div className="flex gap-2"><button onClick={()=>onNavigate(-1)} className="rounded border border-white/15 px-3 py-2 text-white/55 hover:border-signal hover:text-signal" aria-label="Previous case study"><ArrowLeft size={16}/></button><button onClick={()=>onNavigate(1)} className="rounded border border-white/15 px-3 py-2 text-white/55 hover:border-signal hover:text-signal" aria-label="Next case study"><ArrowRight size={16}/></button></div><div className="flex flex-wrap gap-3"><a href={project.github} target="_blank" rel="noopener noreferrer" className="lightning-blue-btn flex items-center gap-2 rounded border px-4 py-2 font-mono text-[10px] tracking-widest"><Github size={14}/> VIEW GITHUB</a><button onClick={onClose} className="lightning-purple-btn rounded border px-4 py-2 font-mono text-[10px] tracking-widest">BACK TO PROJECTS</button></div></div>
        </div>
      </motion.article>
      {galleryOpen&&evidence[activeImage]&&<div className="fixed inset-0 z-[120] grid place-items-center bg-black/95 p-4" onClick={()=>setGalleryOpen(false)}><button className="absolute right-5 top-5 p-2 text-white/70" aria-label="Close evidence"><X/></button>{evidence.length>1&&<><button onClick={(e)=>{e.stopPropagation();setActiveImage(i=>(i-1+evidence.length)%evidence.length)}} className="absolute left-3 rounded-full bg-black/60 p-3 text-white sm:left-8"><ArrowLeft/></button><button onClick={(e)=>{e.stopPropagation();setActiveImage(i=>(i+1)%evidence.length)}} className="absolute right-3 rounded-full bg-black/60 p-3 text-white sm:right-8"><ArrowRight/></button></>}<figure onClick={e=>e.stopPropagation()} className="max-w-6xl"><img src={evidence[activeImage].src} alt={evidence[activeImage].caption} className="max-h-[82vh] max-w-full rounded border border-signal/35 object-contain"/><figcaption className="mt-3 text-center font-mono text-xs text-white/55">{evidence[activeImage].caption}</figcaption></figure></div>}
    </motion.div>
  </AnimatePresence>;
}
