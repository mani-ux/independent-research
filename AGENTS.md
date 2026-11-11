# Manivannan Kalyanasundaram — Personal Portfolio

This is Manivannan Kalyanasundaram's personal portfolio, currently showing only his career flow. It is not an independent research organization. Keep the design personal and editorial: warm paper, charcoal typography, serif accents, restrained burnt orange, and a vertical career timeline. Preserve keyboard navigation, mobile readability, and the `/independent-research` base path (the repository name is a hosting path, not the site's brand).

Career data lives in `src/data/career.ts`. Roles and dates come from the LinkedIn profile supplied by the owner. Summaries condense professional role descriptions; never invent metrics, employers, responsibilities, or qualifications. Do not copy private LinkedIn analytics, messages, connection data, or account controls. Current role has no responsibility description in the source, so do not invent one.

The current public site has one page. Do not add publication sections, case studies, education, services, or other content without a user request. Astro + MDX support and the publishing skills are retained for future use.

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
