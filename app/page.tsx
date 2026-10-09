import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Blocks, Code2, Gauge, Layers3, Palette, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ProjectCard, projects } from "@/components/project-card";

const services = [
  { n: "01", title: "Web development", text: "Fast, responsive websites and web applications built to support your next stage of growth.", icon: Code2 },
  { n: "02", title: "UI/UX design", text: "Intuitive user journeys, thoughtful interfaces and scalable design systems that feel effortless.", icon: Palette },
  { n: "03", title: "Digital products", text: "From early MVPs to SaaS dashboards, turn a promising idea into a product people can use.", icon: Blocks },
  { n: "04", title: "Performance & growth", text: "Improve speed, accessibility, search foundations and the experience across every screen.", icon: Gauge },
  { n: "05", title: "Frontend partnerships", text: "Reliable React and Next.js delivery support for agencies, teams and ambitious founders.", icon: Workflow },
  { n: "06", title: "Ongoing support", text: "Keep your digital presence healthy with updates, enhancements and practical technical care.", icon: Layers3 }
];

const steps = [
  ["01", "Discover", "We align on your audience, goals, constraints and what success should look like."],
  ["02", "Design", "We map the experience and shape the visual direction before building."],
  ["03", "Develop", "We build responsively, test carefully and keep communication transparent."],
  ["04", "Launch & grow", "We ship, measure and help you make the next improvement with confidence."]
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <SectionLabel>Independent digital studio · India + worldwide</SectionLabel>
            <h1 className="display">Turning ideas<br />into <span className="accent">digital</span><br />reality<span className="accent">.</span></h1>
            <p className="hero-desc">We design and build distinctive digital experiences — from ambitious websites to products that make complex things feel simple.</p>
            <div className="hero-actions"><Link className="button" href="/contact">Start a project <ArrowUpRight size={17} /></Link><Link className="button secondary" href="/work">Explore our work <ArrowDown size={15} /></Link></div>
            <div className="hero-note"><span className="pulse-dot" /> Thoughtful design. Solid engineering. Real-world outcomes.</div>
          </Reveal>
          <Reveal className="hero-art" delay={0.18} aria-label="Abstract animated Digistra brand artwork">
            <div className="art-orbit" />
            <div className="art-core">D<span style={{ fontSize: "2rem", alignSelf: "start", marginTop: "25%" }}>.</span></div>
            <div className="float-card one"><strong>Design that moves</strong><small>IDEA → EXPERIENCE</small></div>
            <div className="float-card two"><strong>Built for what’s next</strong><small>REACT · NEXT.JS · UI/UX</small></div>
            <div className="float-chip"><Sparkles size={20} /></div>
          </Reveal>
        </div>
      </section>

      <div className="marquee" aria-label="Our capabilities"><div className="marquee-track" aria-hidden="true">{[0,1].map((copy) => <span key={copy}>Strategy <b>✳</b> UI/UX Design <b>✳</b> Web Development <b>✳</b> Digital Products <b>✳</b> React & Next.js <b>✳</b> Performance <b>✳</b></span>)}</div></div>

      <section className="section">
        <div className="container">
          <Reveal className="section-head"><div><SectionLabel>What we do</SectionLabel><h2 className="heading-lg" style={{ marginTop: 20 }}>Good ideas deserve<br /> <span className="accent">great execution.</span></h2></div><p>One flexible partner for the thinking, design and technology needed to move your business forward.</p></Reveal>
          <div className="services-grid">{services.map((service, index) => { const Icon = service.icon; return <Reveal key={service.n} delay={index * .05}><article className="service-card"><div className="service-top"><span className="service-icon"><Icon size={21} /></span><span className="service-num">{service.n}</span></div><h3>{service.title}</h3><p>{service.text}</p></article></Reveal>; })}</div>
          <div style={{ marginTop: 28 }}><Link className="text-link" href="/services">Explore all services <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section" style={{ background: "#141419" }}>
        <div className="container">
          <Reveal className="section-head"><div><SectionLabel>Selected concepts</SectionLabel><h2 className="heading-lg" style={{ marginTop: 20 }}>Made to make<br /><span className="accent">an impression.</span></h2></div><p>A glimpse of the experiences we love to create. These are concept projects created to demonstrate our approach, not client engagements.</p></Reveal>
          <div className="work-grid">{projects.slice(0,2).map((project) => <Reveal key={project.slug}><ProjectCard project={project} /></Reveal>)}</div>
          <div style={{ marginTop: 30 }}><Link className="text-link" href="/work">See all concept work <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head"><div><SectionLabel>A clear process</SectionLabel><h2 className="heading-lg" style={{ marginTop: 20 }}>Less guesswork.<br /><span className="accent">More momentum.</span></h2></div><p>Good collaboration is built on clear steps, honest conversations and steady progress.</p></Reveal>
          <div className="process-grid">{steps.map(([n,title,text]) => <Reveal className="process-step" key={n}><span>{n} / 04</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container"><Reveal className="cta-band"><SectionLabel>Have something in mind?</SectionLabel><h2>Let’s turn your next big idea into something real.</h2><p>Tell us what you’re working on. We’ll help you find a practical next step — whether you need a full build or an extra pair of expert hands.</p><Link className="button" href="/contact">Tell us about your project <ArrowUpRight size={16} /></Link></Reveal></div>
      </section>
    </>
  );
}
