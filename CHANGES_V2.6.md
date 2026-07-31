# V2.6 Recruiter-Ready Update

- Corrected Open Graph and Twitter profile image from `profile.jpg` to `profile.png`.
- Updated production URL, sitemap, and robots metadata to the current Vercel deployment.
- Replaced the hero profile `<img>` with optimized Next.js `Image`.
- Shortened the hero tagline for better mobile readability.
- Updated the SOC terminal status line in the hero section.
- Hidden Live Demo buttons when no real demo URL is configured.
- Renamed Skills to “Tools & Technologies Practiced”.
- Renamed Experience to “Practical Experience & Labs”.
- Marked unverified TryHackMe paths as “In Progress”.
- Changed the contact form action label to “Send via Email”.
- Removed the unused `run` package dependency.
- Cleaned generated folders and dependencies from the deliverable ZIP.
- Updated README instructions and profile image path.

## Verification

TypeScript validation completed successfully with `tsc --noEmit`.
A full Next.js production build could not be completed in the packaging environment because the required platform-specific SWC binary was unavailable from its internal package registry. Run `npm install` and `npm run build` locally or on Vercel for the final production build.
