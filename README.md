# Independent Research

An independent research and editorial platform exploring strategic design, artificial intelligence, design systems, and organizational transformation.

Static Astro + MDX website. No database, subscription, external fonts, analytics, or runtime AI keys are needed. The first release is a homepage, Research and Writing sections, and an About page. No research articles have been fabricated or imported.

## Browser-based setup

1. Add this prepared source to `mani-ux/independent-research` on GitHub, preserving the folder structure and dependency lockfile. Review the changed files before committing to `main`.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the source.
3. Open **Actions → Deploy to GitHub Pages**. A push to `main` runs deployment; use **Run workflow** to retry after enabling Pages.
4. A successful run provides the website URL: `https://mani-ux.github.io/independent-research/`.

The URL above is the intended address, not a claim that deployment has completed.

For browser-based development, choose **Code → Codespaces → Create codespace on main**. The included dev container uses Node 24 and installs dependencies. In its terminal run `npm run dev`, then open port 4321 from the Ports panel. Keep the preview port private. The preview path is `/independent-research/`.

GitHub Pages provides the public hosting. Codespaces and AI assistants have separate usage allowances; they are optional and not unlimited free services. Routine approved text edits can use GitHub's web editor without running a Codespace.

## Local or Codespaces commands

Use Node 24 and npm:

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Publish approved work

Keep unpublished writing and confidential research **outside this public repository**. A hidden route, ignored folder, or `published: false` does not protect anything already committed. Do not upload private PDFs to `public/`: all files there are copied to the deployed site.

Only after the author approves a piece for public release, add an `.mdx` file under `src/content/publications/`. Use real metadata:

```yaml
---
title: "The approved article title"
description: "A concise, accurate summary."
section: writing
date: 2026-11-11
author: "The actual author's name"
published: true
---
```

Write the approved body below the metadata. Use `section: research` for research papers. The filename determines the URL; use lowercase words separated by hyphens. Avoid changing a published filename. Dates and authors above are examples to replace, not claims about an existing article.

Missing `published` defaults to false; unpublished entries get neither listings nor article routes. Their source would still be public if committed. Review MDX imports and expressions because MDX can execute code at build time.

Run the build, review the article and links, and commit only approved text and assets. All internal site links must account for `/independent-research/`. Pull requests build without deploying; `main` deploys.

## Reusable agent skills

Project skills live in `.github/skills/`, each with a portable `SKILL.md`:

- `research-review`: evidence, methods, argument, limitations.
- `editorial-writing`: clear, source-grounded essays in the author's voice.
- `academic-publishing`: approved MDX, metadata, links, and release checks.
- `visual-design`: restrained editorial typography and accessible layouts.

Ask a compatible assistant to use the relevant skill, for example: “Use the research-review skill to review this authorized manuscript without copying it into the public repository.” Skill discovery depends on the assistant; another tool can read the SKILL.md directly. These files guide an assistant; they do not themselves run AI or provide a paid assistant subscription.

## Implementation

- `src/content.config.ts`: validated publication metadata.
- `src/content/publications/`: approved public Markdown/MDX only.
- `src/layouts/` and `src/styles/`: shared editorial layout.
- `.github/workflows/`: pull-request build and Pages deployment.
- `.devcontainer/`: browser development setup.
- `AGENTS.md`: project and publication boundaries.

No license has been added. Choose separate terms for code and research later if desired.

Official references: [Astro GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/), [MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/), [Codespaces billing](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).
