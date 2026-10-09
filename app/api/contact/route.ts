import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  budget?: unknown;
  details?: unknown;
  website?: unknown;
};

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot field: silently accept bot submissions without sending email.
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 100);
    const email = clean(body.email, 254);
    const company = clean(body.company, 120);
    const service = clean(body.service, 120);
    const budget = clean(body.budget, 80);
    const details = clean(body.details, 5000);

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || details.length < 10) {
      return NextResponse.json({ error: "Please provide a valid name, email and project description." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { error: "The contact form email service is not configured yet. Please email hello@digistrainnovations.com directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service || "Not selected"}`,
        `Budget: ${budget || "Not provided"}`,
        "",
        "Project details:",
        details
      ].join("\n")
    });

    if (result.error) {
      console.error("Contact email provider error:", result.error);
      return NextResponse.json({ error: "We couldn't send your enquiry. Please try again or email us directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please check the form and try again." }, { status: 400 });
  }
}
