# Manivannan Kalyanasundaram — Personal Portfolio

A personal portfolio focused on career progression in product design, UX, and strategy. The public site currently contains only the career journey, with roles and dates sourced from the LinkedIn profile supplied by the owner: https://www.linkedin.com/in/get2knowmani/.

Live site: https://mani-ux.github.io/independent-research/

The repository name is retained for hosting continuity; it is not the public brand. The site represents Manivannan, not an independent research organization.

## Edit career details

Update `src/data/career.ts`. Each role has an organization, title, start and end dates, location, summary, and areas of work. Entries are displayed most recent first. Current responsibilities are omitted because no description was supplied in the source profile. Do not invent achievements or metrics.

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

## Future research and writing

Astro + MDX support and the four project skills in `.github/skills/` are retained for later use. Research is one possible part of this personal space; it is not the site's identity. There are currently no Research, Writing, or About routes or navigation items.

Keep unpublished manuscripts and confidential information outside this public repository. A `published: false` flag cannot make committed source private. Files in `public/` are copied to the website, and Git history can retain removed files.

No license has been added. See `AGENTS.md` for project boundaries.
