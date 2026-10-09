"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your message right now.");
      setStatus("success");
      setMessage("Thanks for reaching out. Your enquiry has been received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please email us directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Jane Smith" /></div>
        <div className="field"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="jane@company.com" /></div>
        <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" maxLength={120} placeholder="Your company" /></div>
        <div className="field"><label htmlFor="service">What do you need?</label><select id="service" name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Website design & development</option><option>React / Next.js development</option><option>UI/UX design</option><option>SaaS / digital product</option><option>Website optimization</option><option>Agency partnership</option><option>Something else</option></select></div>
        <div className="field full"><label htmlFor="budget">Approximate budget</label><select id="budget" name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under ₹25,000</option><option>₹25,000–₹50,000</option><option>₹50,000–₹1,00,000</option><option>₹1,00,000+</option><option>Not sure yet</option></select></div>
        <div className="field full"><label htmlFor="details">Tell us about your project *</label><textarea id="details" name="details" required minLength={10} maxLength={5000} placeholder="What are you looking to build, improve or launch?" /></div>
        <div className="field full" style={{ display: "none" }} aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      </div>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <>Sending <LoaderCircle size={16} className="spin" /></> : <>Send project enquiry <ArrowUpRight size={16} /></>}
      </button>
      {message && <p className={`form-message ${status === "error" ? "error" : status === "success" ? "success" : ""}`} role="status">{message}</p>}
      <p className="note">Your details are used only to respond to your enquiry. Please don't include confidential information in this form.</p>
    </form>
  );
}
