# Personal Homepage

A minimal personal homepage deployed on GitHub Pages, built with VitePress.

## Tech Stack

- VitePress (Vue 3 + Vite) — static site generation
- Markdown for content, Vue SFC for interactive components
- GitHub Pages for deployment

## Project Structure

```
/
├── index.md           ← Home
├── about.md           ← About Me
├── projects.md        ← Projects
└── .vitepress/
    └── config.ts
```

## Design

- 3 pages: Home, About, Projects. No blog.
- Style: minimal, clean, generous whitespace, restrained color palette, typography-driven
- Full spec: `docs/superpowers/specs/2026-05-17-personal-homepage-design.md`

## Workflow

MUST follow superpowers workflow for EVERY task:
下一步是调用 writing-plans skill 生成实现计划

1. **brainstorming** — clarify requirements and design before touching code
2. **writing-plans** — write implementation plan before coding
3. **subagent-driven-development** — execute plan with independent tasks
4. **requesting-code-review** — code review after completing tasks
5. **verification-before-completion** — run verification before claiming completion

No code changes without going through this workflow. No exceptions for "simple" fixes.
