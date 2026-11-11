# Independent Research

This is a public Astro + MDX publication. Keep the editorial design calm: warm paper, charcoal text, serif headings, readable line lengths, and restrained olive accents. Preserve keyboard navigation and the `/independent-research` base path.

## Content boundary

Only material explicitly approved for public release belongs in this repository. Keep unpublished manuscripts, client information, raw interviews, credentials, and private notes outside the checkout. A `published: false` flag prevents a website route; it does not make committed source private. Everything under `public/` is copied to the website. Git history can retain removed files.

Never invent research findings, author credentials, quotations, citations, or publication dates. Do not turn sample material into claimed research. Use private source material only within its authorized context; never transfer it here automatically.

## Working conventions

- Publish approved MDX in `src/content/publications/` with title, description, section (`research` or `writing`), date, author, and `published` metadata.
- `published` defaults to false. All public lists and routes must filter it. This is an editorial safeguard, not access control.
- Reusable skills are in `.github/skills/`. Consult the relevant skill for research review, writing, publication, or visual changes.
- Run `npm ci` after dependency changes and `npm run build` before delivery. Commit the lockfile. Check links under the repository base path.
- Do not add analytics, external fonts, paid services, or AI API keys without a concrete user request. This static site requires no runtime secrets.
- Publishing an article requires the user's approval of that article for public release. Authorization to build the website does not authorize release of unpublished research.
