# Personal Homepage Design

## Overview

A minimal personal homepage deployed on GitHub Pages, built with VitePress (Vue static site generator). Three pages: Home, About, Projects.

## Tech Stack

- **Framework**: VitePress (Vue 3 + Vite)
- **Styling**: CSS (VitePress default theme customization)
- **Deployment**: GitHub Pages via `gh-pages` or GitHub Actions
- **Content**: Markdown + Vue SFC components where needed

## Site Structure

```
/
├── index.md           ← Home (avatar, intro, social links, project previews)
├── about.md           ← About Me (bio, tech stack, experience timeline, contact)
├── projects.md        ← Projects (grid of project cards)
└── .vitepress/
    └── config.ts      ← VitePress config & theme customization
```

Three pages, flat routing, no blog section.

## Page Designs

### Home (`/`)

Layout (top to bottom):
- Avatar image
- Name / ID
- One-line self-introduction
- Social icon row (GitHub, X, Email, etc.)
- Scroll-down hint
- Featured project cards (3-4, compact)
- Footer

### Projects (`/projects`)

- Page title "Projects"
- Responsive grid of project cards (2-3 columns)
- Each card: project name, one-line description, tech tags, GitHub + demo links

### About (`/about`)

Layout (top to bottom):
- Larger avatar + greeting
- Bio paragraph(s)
- Tech stack section (grouped tags)
- Experience timeline
- Contact section (email + social links)

## Visual Design

- **Style**: Minimal, clean — generous whitespace, restrained color palette, typography-driven
- **Color**: Neutral tones with one accent color
- **Typography**: System font stack or simple sans-serif
- **Dark/Light**: Follow system preference

## Non-Goals (explicitly out of scope)

- Blog with article listings
- Comments or analytics
- CMS integration
- Internationalization (Chinese-only for now)

## Deployment

GitHub Actions workflow: build VitePress → deploy to `gh-pages` branch → serve on `<username>.github.io/<repo>` or custom domain.
