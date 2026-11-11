# Manivannan Kalyanasundaram — Personal Portfolio

This is Manivannan Kalyanasundaram's personal portfolio, currently showing only his career flow. It is not an independent research organization. Keep the design personal and editorial: white, charcoal typography, serif accents, and the owner’s cobalt blue (#2A48E8), and a vertical career timeline. Preserve keyboard navigation, mobile readability, and the `/independent-research` base path (the repository name is a hosting path, not the site's brand).

Career data lives in `src/data/career.ts`. Roles and dates come from the LinkedIn profile supplied by the owner. Summaries condense professional role descriptions; never invent metrics, employers, responsibilities, or qualifications. Do not copy private LinkedIn analytics, messages, connection data, or account controls. Current role has no responsibility description in the source, so do not invent one.

The public site has Career & Education, Research & Studies, and Perspectives sections. Education data lives in `src/data/education.ts`; use only sourced qualifications and dates. It remains a personal portfolio. Research & Studies uses the `/research/` route and Perspectives uses `/perspectives/`. Do not add other sections without a user request.

The owner requested exclusion from search results. Keep the shared `noindex, nofollow` robots meta tag on every page, including future articles. Do not block crawling in robots.txt: search engines need to crawl pages to see noindex. This is not access control; the public site and repository remain accessible by URL. Do not add a sitemap or remove noindex without a user request.

## Content boundary

Only material explicitly approved for public release belongs in this repository. Keep unpublished manuscripts, client information, raw interviews, credentials, and private notes outside the checkout. A `published: false` flag prevents a website route; it does not make committed source private. Everything under `public/` is copied to the website. Git history can retain removed files.

Never invent research findings, author credentials, quotations, citations, or publication dates. Do not turn sample material into claimed research. Use private source material only within its authorized context; never transfer it here automatically.

## Working conventions

- Publish approved MDX in `src/content/publications/` with title, description, section (`research` or `perspectives`), date, author, and `published` metadata. Research & Studies is for inquiries and studies; Perspectives is for essays and thought leadership. Do not represent a conceptual essay as validated research.
- `published` defaults to false. All public lists and routes must filter it. This is an editorial safeguard, not access control.
- Reusable skills are in `.github/skills/`. Consult the relevant skill for research review, writing, publication, or visual changes.
- Run `npm ci` after dependency changes and `npm run build` before delivery. Commit the lockfile. Check links under the repository base path.
- Do not add analytics, external fonts, paid services, or AI API keys without a concrete user request. This static site requires no runtime secrets.
- Publishing an article requires the user's approval of that article for public release. Authorization to build the website does not authorize release of unpublished research.
