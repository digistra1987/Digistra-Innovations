 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our work" },
  { href: "/about", label: "About" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Digistra Innovations home" onClick={() => setOpen(false)}>
          <span className="brand-mark">D</span>
          <span className="brand-name">digistra <small>innovations</small></span>
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>Contact <ArrowUpRight size={14} /></Link>
        </nav>
        <Link className="button nav-cta" href="/contact">Start a project <ArrowUpRight size={15} /></Link>
        <button className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}
