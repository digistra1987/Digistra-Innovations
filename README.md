# Digistra Innovations

A responsive five-page digital agency website built with Next.js App Router, TypeScript, CSS and Framer Motion.

## Pages
- `/` — Home
- `/services` — Services and indicative starting prices
- `/work` — Concept portfolio
- `/about` — Studio approach
- `/contact` — Contact form

## Requirements
- Node.js 20.9+ (recommended for Next.js 16)
- npm

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Contact form email setup
The contact form API uses Resend. To enable delivery:
1. Create an account at https://resend.com/.
2. Verify a sending domain in Resend.
3. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in `.env.local`.
4. Set `NEXT_PUBLIC_SITE_URL` to the deployed website origin.
5. Restart the development server.

Without those environment variables, the API returns a helpful configuration error and the form will not claim the enquiry was sent.

## Before production
- Replace `hello@digistrainnovations.com` with your verified mailbox everywhere it appears.
- Verify ownership of the domain and configure DNS, HTTPS and email delivery.
- Replace concept projects with real work when available. Do not present the current concepts as client projects.
- Review all service prices and project scope before publishing.
- Add a privacy policy and terms appropriate to your business and analytics setup.
- Add rate limiting or a managed anti-abuse layer to `/api/contact` before exposing the endpoint publicly.
- Review metadata, Open Graph imagery and social profile links.
- Run `npm run build` and test keyboard navigation, mobile layouts and form delivery.
- If adding analytics, update the privacy notice and consent approach as required.

## Design notes
The visual direction uses dark charcoal, electric-lime accents, lilac details, bold typography, CSS artwork and restrained reveal/morph animations. It includes a reduced-motion fallback. Fonts are currently loaded from Google Fonts; self-host them if you prefer to avoid a third-party font request.
