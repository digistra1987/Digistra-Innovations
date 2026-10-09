import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  theme: "purple" | "green" | "orange";
  headline: string;
  label: string;
};

export const projects: Project[] = [
  { slug: "northstar-finance", title: "Northstar Finance", category: "SaaS dashboard · Concept", description: "A clearer way to see business finances, spot trends and make confident decisions.", theme: "purple", headline: "Clarity for every decision.", label: "Finance platform" },
  { slug: "verdant-living", title: "Verdant Living", category: "E-commerce · Concept", description: "A calm, product-led shopping experience for a modern sustainable-living brand.", theme: "green", headline: "Make room to grow.", label: "Lifestyle store" },
  { slug: "form-and-field", title: "Form & Field", category: "Brand website · Concept", description: "A distinctive digital home for a design-led architecture and interiors studio.", theme: "orange", headline: "Spaces with a point of view.", label: "Studio website" }
];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/work#${project.slug}`} className={`project-art ${project.theme}`} aria-label={`View ${project.title} concept project`}>
        <div className="project-ui">
          <div className="project-ui-top"><i /><i /><i /></div>
          <span className="eyebrow">{project.label}</span>
          <h4>{project.headline}</h4>
          <p>Thoughtful digital experiences, shaped around real people and clear business goals.</p>
          <div className="project-ui-bars"><span /><span /><span /></div>
        </div>
      </Link>
      <div className="project-meta">
        <div><h3>{project.title}</h3><p>{project.category}</p></div>
        <Link className="project-arrow" href={`/work#${project.slug}`} aria-label={`View ${project.title}`}><ArrowUpRight size={18} /></Link>
      </div>
    </article>
  );
}
