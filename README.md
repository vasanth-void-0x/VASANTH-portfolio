# Vasanth Kumar — Cybersecurity Portfolio

A premium "Alien Cyber HUD" themed portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

## 2. Where to put your files

All three already have working placeholders in this project, so the site runs immediately — replace them any time with your real files, same filenames, no code changes needed.

| What | Path | Status |
|---|---|---|
| Profile photo | `public/profile.jpg` | ✅ Your uploaded photo is already here. Replace this file to change it — falls back to a "V" avatar automatically if the file is ever missing. |
| Resume PDF | `public/` | ✅ Your uploaded resume is already here. Replace with a newer version any time; filename must stay the same (or update `resumePath` in `lib/data.ts`). |
| Project screenshots | `public/projects/*.png` | ⚠️ Currently auto-generated placeholder graphics. Swap in real screenshots of each project using the exact filenames below. |

Project screenshot filenames (drop your real screenshots in, same names):
```
public/projects/phishing-lab.png
public/projects/soc-investigation.png
public/projects/threat-hunting-dashboard.png
public/projects/ai-soc-dashboard.png
public/projects/auto-blocking-system.png
```

## 3. Edit your content

Everything text-based (summary, skills, projects, experience, education, certifications, contact info) lives in one place:

```
lib/data.ts
```

Update that file and every section on the site updates automatically.

## 4. Update project GitHub / live demo links

In `lib/data.ts`, each project object has a `github` and `demo` field — point these at your actual repo and (if you have one) a hosted demo URL.

## 5. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push this repo to GitHub and import it at https://vercel.com/new — zero config needed, Vercel auto-detects Next.js.

Before going live, update the placeholder domain `https://vasanthkumar.dev` in:
- `app/layout.tsx` (metadataBase, Open Graph URL)
- `app/sitemap.ts`
- `app/robots.ts`

to your real deployed domain.

## 6. Project structure

```
app/
  layout.tsx        → fonts, SEO metadata, Open Graph
  page.tsx           → assembles all sections
  globals.css        → theme tokens, glass cards, HUD corner styles
  sitemap.ts          → dynamic sitemap.xml
  robots.ts           → dynamic robots.txt
components/
  Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx,
  ProjectCard.tsx, Experience.tsx, Education.tsx,
  Certifications.tsx, Contact.tsx, Footer.tsx,
  CyberBackground.tsx, TypingText.tsx, SectionHeading.tsx
lib/
  data.ts             → ALL resume content — edit here
public/
  profile.jpg, Vasanth_Kumar_Resume.pdf, favicon.ico, projects/*.png
```

## 7. Design notes

- Theme: black futuristic background, neon green primary (`#39ff8c`), electric blue secondary (`#00b4ff`), purple glow accents (`#a855f7`).
- Signature element: an alien-HUD frame — rotating dashed radar rings around the profile photo, corner-bracket "targeting" frames on every glass card, and a scanning highlight sweep, echoing a SOC operator's monitoring console rather than a generic gradient hero.
- Fonts: Orbitron (display/headings), Rajdhani (body), JetBrains Mono (labels, eyebrows, badges — the "terminal readout" texture).
- Respects `prefers-reduced-motion`, has visible keyboard focus states, and is fully responsive from mobile to desktop.

## 8. Contact form

The contact form is front-end only (no backend/email service wired up) — submitting it opens the visitor's email client with the message pre-filled, addressed to your email. If you later want it to submit silently without opening a mail client, wire the `handleSubmit` function in `components/Contact.tsx` to a service like Formspree, Resend, or a Vercel serverless function.
