---
name: academic-publishing
description: Prepare approved research or editorial MDX for Independent Research and validate its GitHub Pages output. Use when staging a specific publication or fixing publication metadata and routes.
---

Read AGENTS.md and inspect the current content schema, routes, and deployment workflow before editing. Confirm the specific text and assets are approved for public release. If approval is missing, finish non-content preparation and request approval without putting private text in the repository.

Place approved material in `src/content/publications/` with a stable descriptive filename and schema-valid metadata. Preserve real authorship and dates. Use `section: research` or `section: writing`. Ensure quotations, citations, image permissions, alt text, and internal links are correct. Prefix local links with the configured base path. Treat MDX as executable source: inspect imports and expressions before accepting outside material.

Validate with the installed package manager and build. Check the generated article, listing, canonical URL, and any referenced assets. A `published: false` file remains visible in the public source; `public/` assets are always emitted. Never describe either as private storage.

Summarize the exact public changes. A release uses main and the existing Pages workflow; do not change repository visibility, billing, or hosting providers as part of an article release.
