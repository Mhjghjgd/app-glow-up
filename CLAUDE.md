# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

`app-glow-up` is a skills repository for Claude Code agents. It contains no application source code — only agent skill definitions under `.agents/skills/`. Each skill is a `SKILL.md` file that instructs the AI how to behave when that skill is active.

## Skill Inventory

| Skill name | Description |
|---|---|
| `brandkit` | Premium brand-kit image generation (logo systems, identity decks, brand-guidelines boards) |
| `design-taste-frontend` | Anti-slop frontend skill for landing pages, portfolios, and redesigns (current default v2) |
| `design-taste-frontend-v1` | Original v1 of the above; preserved for backward compatibility |
| `frontend-design` | Aesthetic direction and typography guidance for new UI |
| `full-output-enforcement` | Bans LLM truncation patterns; enforces complete code generation |
| `gpt-taste` | GSAP-heavy, AIDA-structured, wide editorial UI with strict scroll animations |
| `high-end-visual-design` | Awwwards-tier agency aesthetic with Double-Bezel components and spring-physics motion |
| `image-to-code` | Converts design images to frontend code |
| `imagegen-frontend-mobile` | Mobile-first image generation for frontend |
| `imagegen-frontend-web` | Web-focused image generation for frontend |
| `industrial-brutalist-ui` | Industrial/brutalist visual language |
| `minimalist-ui` | Warm monochrome editorial interfaces; flat bento grids; no gradients |
| `redesign-existing-projects` | Audit-then-upgrade workflow for existing codebases; works with any CSS stack |
| `stitch-design-taste` | Stitch-specific design taste variant |

## Adding or Updating Skills

Each skill lives in its own subdirectory:

```
.agents/skills/<skill-name>/SKILL.md
```

The file must begin with YAML frontmatter:

```yaml
---
name: <skill-name>
description: <one-line description shown in skill listings>
---
```

Everything after the frontmatter is the instruction content Claude receives when the skill is active. Skills are plain Markdown — no build step, no tests, no package manager.

## Key Design Conventions Used Across Skills

The skills share a common vocabulary and several hard rules that appear in multiple files. When editing or creating skills, maintain consistency with these:

- **Default stack:** React/Next.js (Server Components), Tailwind v4, Motion (`motion/react`), GSAP for scroll-pinning/horizontal-pan only.
- **Forbidden defaults across all skills:** Inter font, Lucide icons (unless explicitly requested), AI-purple gradients, three-equal-column feature cards, generic `box-shadow`, pure `#000000`/`#ffffff`.
- **Motion rules:** Animate only `transform` and `opacity`. Never `window.addEventListener('scroll')`. Always respect `prefers-reduced-motion`. GSAP is isolated in `"use client"` leaf components with `useEffect` cleanup.
- **Em-dash ban (`—`):** Explicitly banned in `design-taste-frontend`. Do not introduce em-dashes into skill copy.
- **Viewport stability:** `min-h-[100dvh]`, never `h-screen`.
- **Image sourcing priority:** image-gen tool → `picsum.photos/seed/{descriptive-seed}/{w}/{h}` → explicit placeholder slots. Div-based fake screenshots are banned.
