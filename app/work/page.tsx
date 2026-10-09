import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ProjectCard, projects } from "@/components/project-card";

export const metadata: Metadata = { title: "Our Work", description: "Explore concept projects showing how Digistra Innovations approaches digital design and development." };

export default function WorkPage() {
  return <>
    <section className="page-hero"><div className="container"><SectionLabel>Work / Selected concepts</SectionLabel><h1 className="heading-xl">Good work starts<br />with <span className="accent">good questions.</span></h1><p>We believe the best digital experiences balance useful ideas, intentional design and dependable engineering. Explore these concept projects to see our approach.</p><p className="note">Transparency note: the projects below are illustrative concepts, not commissioned client work. Replace them with approved client case studies as your portfolio grows.</p></div></section>
    <section className="section"><div className="container"><div className="work-grid">{projects.map((project) => <Reveal key={project.slug}><div id={project.slug} style={{ scrollMarginTop: 110 }}><ProjectCard project={project} /><p className="note" style={{ marginTop: 15 }}>{project.description}</p><div className="pill-list" style={{ marginTop: 15 }}><span className="pill">Responsive design</span><span className="pill">Product thinking</span><span className="pill">Frontend concept</span></div></div></Reveal>)}</div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><div className="cta-band"><SectionLabel>Your project could be next</SectionLabel><h2>Let’s make something worth showing.</h2><p>Tell us what you're building and what a successful outcome looks like.</p><Link className="button" href="/contact">Start a project <ArrowUpRight size={16} /></Link></div></div></section>
  </>;
}
