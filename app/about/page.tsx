import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, HeartHandshake, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = { title: "About", description: "Meet the approach behind Digistra Innovations: clear thinking, thoughtful design and solid engineering." };

const values = [
  { icon: Compass, title: "Clarity over complexity", text: "We make the problem understandable, define the important decisions and keep the path forward visible." },
  { icon: Lightbulb, title: "Intentional creativity", text: "Visual ideas should serve the audience and the business — not distract from either." },
  { icon: HeartHandshake, title: "Partnership, not handoff", text: "Good work comes from collaboration, candid communication and shared ownership of outcomes." }
];

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="container"><SectionLabel>About / Our point of view</SectionLabel><h1 className="heading-xl">Small by design.<br /><span className="accent">Ambitious by nature.</span></h1><p>Digistra Innovations is an independent digital studio built around a simple belief: technology should make good ideas easier to bring to life.</p></div></section>
    <section className="section"><div className="container split"><div><SectionLabel>Why Digistra</SectionLabel><h2 className="heading-lg" style={{ marginTop: 20 }}>A thoughtful partner for your next step.</h2></div><div className="copy-stack"><p>We bring together user-focused design and modern web engineering to help businesses launch new experiences, improve existing platforms and test digital product ideas.</p><p>Our approach is deliberately collaborative. We start by understanding what you need to achieve, choose tools that fit the problem and keep delivery practical, transparent and measurable.</p><p>We work as a flexible partner for founders, growing businesses and agencies that value quality execution without unnecessary process.</p><div className="pill-list"><span className="pill">React</span><span className="pill">Next.js</span><span className="pill">TypeScript</span><span className="pill">UI/UX</span><span className="pill">Performance</span><span className="pill">Digital products</span></div></div></div></section>
    <section className="section" style={{ background: "#141419" }}><div className="container"><Reveal className="section-head"><div><SectionLabel>What guides us</SectionLabel><h2 className="heading-lg" style={{ marginTop: 20 }}>Principles behind<br /><span className="accent">every project.</span></h2></div><p>Clear decisions, careful craft and a working relationship you can count on.</p></Reveal><div className="value-grid">{values.map(({icon: Icon,title,text}) => <Reveal className="value-card" key={title}><span className="service-icon"><Icon size={22} /></span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><div className="cta-band"><SectionLabel>Let’s get to know your idea</SectionLabel><h2>Good collaboration starts with a conversation.</h2><p>Whether you have a clear brief or just the beginning of an idea, we can help define a practical way forward.</p><Link className="button" href="/contact">Meet us at the brief <ArrowUpRight size={16} /></Link></div></div></section>
  </>;
}
