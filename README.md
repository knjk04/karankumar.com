<div align="center">

# ⌁ karankumar.com

<br />

[![Live site](https://img.shields.io/badge/Live_site-↗-1a1a1a?style=for-the-badge)](https://knjk04.github.io/karankumar.com/)

<br />

## Quick start

Prerequisites: Node.js 22+ and npm.

```bash
npm install
npm run dev # start the dev server at http://localhost:4321
npm run build # build the static site to ./dist
npm run preview # preview the production build
```

## Project structure

```
src/
  consts.ts          # site name, description, nav, footer
  content/           # projects/ and writing/ Markdown & MDX entries
  content.config.ts  # collection schemas (Content Layer API)
  layouts/           # BaseLayout (head, nav, theme toggle)
  pages/             # routes: /, /about, /projects, /writing, tags, rss.xml
  styles/            # global.css design tokens
astro.config.mjs     # site URL, integrations, Shiki config
```
