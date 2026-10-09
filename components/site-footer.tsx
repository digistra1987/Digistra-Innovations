import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-intro">
            <Link className="brand" href="/">
              <span className="brand-mark">D</span>
              <span className="brand-name">digistra <small>innovations</small></span>
            </Link>
            <p>Turning Ideas into Digital Reality. We design and build thoughtful digital experiences for ambitious businesses.</p>
            <a className="text-link" href="mailto:hello@digistrainnovations.com">hello@digistrainnovations.com <ArrowUpRight size={15} /></a>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <strong>Explore</strong>
              <Link href="/services">Services</Link>
              <Link href="/work">Our work</Link>
              <Link href="/about">About us</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <strong>Services</strong>
              <Link href="/services#web-development">Web development</Link>
              <Link href="/services#ui-ux">UI/UX design</Link>
              <Link href="/services#digital-products">Digital products</Link>
              <Link href="/services#optimization">Optimization</Link>
            </div>
            <div className="footer-col">
              <strong>Connect</strong>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>
              <a href="mailto:hello@digistrainnovations.com">Email <Mail size={12} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Digistra Innovations. All rights reserved.</span>
          <span>Designed with intent. Built with care.</span>
        </div>
      </div>
    </footer>
  );
}
