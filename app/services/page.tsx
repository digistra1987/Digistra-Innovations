import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Blocks, Code2, Gauge, Layers3, Palette, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = { title: "Services", description: "Web development, UI/UX design, digital products and performance optimization from Digistra Innovations." };

const offerings = [
  { id: "web-development", n: "01", title: "Web development", icon: Code2, intro: "A digital foundation built for speed, clarity and growth.", items: ["Business and marketing websites", "React and Next.js applications", "Responsive frontend development", "API and third-party integrations", "CMS-powered content experiences"], price: "Projects typically start from ₹25,000" },
  { id: "ui-ux", n: "02", title: "UI/UX design", icon: Palette, intro: "Make every interaction feel clear, useful and considered.", items: ["Discovery and user flows", "Wireframes and clickable prototypes", "Responsive interface design", "Design systems and component libraries", "Developer-ready Figma handoff"], price: "Projects typically start from ₹15,000" },
  { id: "digital-products", n: "03", title: "Digital products & SaaS", icon: Blocks, intro: "Move from a promising idea to a testable digital product.", items: ["MVP scoping and prototyping", "SaaS dashboards and portals", "Authentication and role-based UI", "Product iteration and feature delivery", "Pilot builds and technical discovery"], price: "Scoped to your product roadmap" },
  { id: "optimization", n: "04", title: "Performance & optimization", icon: Gauge, intro: "Find friction, fix the important things and measure the result.", items: ["Core Web Vitals review", "Frontend performance audits", "Accessibility and responsive fixes", "SEO technical foundations", "Bundle and asset optimization"], price: "Audits typically start from ₹5,000" },
  { id: "partnerships", n: "05", title: "Agency development partner", icon: Workflow, intro: "Extend your delivery capacity without adding permanent overhead.", items: ["White-label frontend implementation", "Figma-to-code delivery", "React / Next.js feature development", "Code review and component refactoring", "Project-based or agreed retainer support"], price: "Capacity and scope agreed together" },
  { id: "maintenance", n: "06", title: "Ongoing support", icon: Layers3, intro: "Keep your website current, stable and ready to evolve.", items: ["Dependency and content updates", "Small feature enhancements", "Bug fixes and technical support", "Routine performance checks", "Monthly reporting and planning"], price: "Retainers typically start from ₹3,000/month" }
];

export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container"><SectionLabel>Services / What we bring</SectionLabel><h1 className="heading-xl">Thoughtful design.<br /><span className="accent">Engineering that delivers.</span></h1><p>Flexible digital services for businesses that need a reliable partner to plan, design, build and improve their online experience.</p><Link className="button" href="/contact">Discuss your project <ArrowUpRight size={16} /></Link></div></section>
    <section className="section"><div className="container" style={{ display: "grid", gap: 18 }}>{offerings.map((item) => { const Icon = item.icon; return <Reveal key={item.id}><article id={item.id} className="value-card" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "start", scrollMarginTop: 110 }}><span className="service-icon"><Icon size={22} /></span><div><span className="eyebrow">{item.n} / Service</span><h2 style={{ margin: "14px 0 10px", fontSize: "clamp(1.5rem,3vw,2.2rem)", letterSpacing: "-.06em" }}>{item.title}</h2><p>{item.intro}</p><ul style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px 24px", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7, fontSize: ".88rem" }}>{item.items.map((x) => <li key={x}>{x}</li>)}</ul><span className="note">{item.price}</span></div><span className="service-num">{item.n}</span></article></Reveal>; })}</div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><div className="cta-band"><SectionLabel>Not sure what you need?</SectionLabel><h2>Let’s work it out together.</h2><p>Share the goal, the challenge and what you have so far. We’ll help shape a sensible scope and next step.</p><Link className="button" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link></div></div></section>
  </>;
}
