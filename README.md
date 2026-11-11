# Manivannan Kalyanasundaram — Personal Portfolio

A personal portfolio covering Career & Education, Research & Studies, and Perspectives. Career and education details are sourced from the LinkedIn profile supplied by the owner: https://www.linkedin.com/in/get2knowmani/.

Live site: https://mani-ux.github.io/independent-research/

The repository name is retained for hosting continuity; it is not the public brand. The site represents Manivannan, not an independent research organization.

## Edit career details

Update `src/data/career.ts` for roles and `src/data/education.ts` for education and certifications. Career entries are displayed most recent first. Current responsibilities are omitted because no description was supplied in the source profile. Do not invent achievements, qualifications, metrics, or missing dates.

The Career & Education navigation link jumps to `#career-education`; a local education link jumps directly to `#education`.

## Search visibility

Every page uses a shared `noindex, nofollow` robots meta tag at the owner's request. Keep crawlers able to access pages so they can see this instruction. Search engines may take time to remove previously indexed URLs. This does not make the site or source repository private; visitors can still access them by URL. Future PDF downloads would require separate indexing controls.

The homepage is `src/pages/index.astro`, the shared page shell is `src/layouts/Layout.astro`, and styling is `src/styles/global.css`.

## Browser development

On GitHub, choose **Code → Codespaces → Create codespace on main**. The included configuration installs dependencies with Node 24. Run `npm run dev`, then open port 4321 at `/independent-research/`. Keep preview visibility private. Codespaces and AI assistants have separate usage allowances; they are optional. Routine text changes can use GitHub's web editor.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Hosting

GitHub Pages uses the **GitHub Actions** source. Changes pushed to `main` build and deploy automatically through `.github/workflows/deploy.yml`. Pull requests run a build without deploying. Use the Actions tab to inspect a failed run.

Internal links must account for `/independent-research/`. The site has no database, runtime secrets, analytics, external fonts, or paid hosting dependencies.

## Research & Studies and Perspectives

Research & Studies (`/research/`) holds independent inquiries, frameworks, and studies. Perspectives (`/perspectives/`) holds essays, observations, and thought leadership. Research is part of this personal space; it is not the site's identity.

Only after text is approved for public release, add an `.mdx` file in `src/content/publications/` with metadata:

```yaml
---
title: "Approved article title"
description: "An accurate summary"
section: perspectives
date: 2026-11-12
author: "Manivannan Kalyanasundaram"
published: true
---
```

Use `section: research` for Research & Studies. Replace example metadata with the actual title, summary, and publication date. The filename determines the article URL. Level-two headings create the article's contents list. Missing `published` defaults to false; unpublished articles have no routes or listing links. This flag is an editorial safeguard, not privacy protection for files in a public repository. Reusable instructions are in `.github/skills/`.

Keep unpublished manuscripts and confidential information outside this public repository. A `published: false` flag cannot make committed source private. Files in `public/` are copied to the website, and Git history can retain removed files.

No license has been added. See `AGENTS.md` for project boundaries.
