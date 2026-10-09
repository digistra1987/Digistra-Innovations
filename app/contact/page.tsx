import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = { title: "Contact", description: "Tell Digistra Innovations about your website, UI/UX or digital product project." };

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container"><SectionLabel>Contact / Start a conversation</SectionLabel><h1 className="heading-xl">Let’s build<br /><span className="accent">what’s next.</span></h1><p>Tell us a little about your idea, your goals and where you need support. We’ll get back to you to discuss a sensible next step.</p></div></section>
    <section className="section"><div className="container contact-layout">
      <aside className="contact-info"><div><SectionLabel>Get in touch</SectionLabel><h2 className="heading-lg" style={{ marginTop: 18 }}>A good project begins with a good conversation.</h2><p className="body-lg" style={{ fontSize: ".95rem" }}>Share your brief, ask a question or explore a development partnership.</p></div>
        <div className="contact-info-item"><Mail size={20} /><div><strong>Email us</strong><a href="mailto:hello@digistrainnovations.com">hello@digistrainnovations.com</a></div></div>
        <div className="contact-info-item"><MapPin size={20} /><div><strong>Based in India</strong><span>Working remotely with teams and businesses.</span></div></div>
        <div className="contact-info-item"><MessageCircle size={20} /><div><strong>What happens next?</strong><span>We review your enquiry and follow up to understand scope, timeline and fit.</span></div></div>
        <p className="note">Replace the email address above with your verified business inbox before launch.</p>
      </aside>
      <ContactForm />
    </div></section>
  </>;
}
