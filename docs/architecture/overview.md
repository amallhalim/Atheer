# Architecture Overview

Atheer is a **portfolio platform** built on Next.js. It is designed to be data-driven — content is stored in static data files today, and fetched from an API when a dashboard is built.

---

## Tech Stack

| Layer | Technology | Why |
|:---|:---|:---|
| Framework | Next.js (App Router) | File-based routing, server components, SEO |
| Language | TypeScript | Type safety, better autocomplete, fewer bugs |
| Styling | Tailwind CSS | Utility-first, responsive, fast to prototype |
| Theming | next-themes | Light/dark/multi-theme support |
| Icons | react-icons | Large icon library, tree-shakeable |

---

## Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Header, Footer, ThemeProvider)
│   ├── globals.css               # CSS entry point (imports all style modules)
│   └── (pages)/
│       └── (user)/[slug_title]/  # Portfolio page (per-user)
│           ├── page.tsx          # Main layout (sidebar + content)
│           └── components/       # Page-specific components
│               ├── ShortBio.tsx
│               ├── ExperienceSection.tsx
│               ├── Projects.tsx
│               └── NavLinks.tsx
│
├── components/
│   ├── layout/                   # App-wide layout pieces
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Spotlight.tsx
│   └── shared/                   # Reusable UI components
│       ├── Button.tsx
│       └── ExternalLink.tsx
│
├── static-data/                  # Content (replace with API calls later)
│   ├── bio.ts
│   ├── experiences.ts
│   └── projects.ts
│
├── types/                        # TypeScript interfaces and types
│   ├── Bio.ts
│   └── Experience.ts
│
└── styles/                       # Modular CSS
    ├── theme/                    # Color tokens per theme
    ├── components/               # Component-level styles
    └── base.css                  # Global resets
```

---

## Data Flow

```
static-data/*.ts       →  Components  →  UI
(future: /api/*)       →  Components  →  UI
```

The component layer never changes — only the data source does.

---

## Page Layout (Desktop vs Mobile)

```
Desktop (≥ 1024px)              Mobile (< 1024px)
┌──────────┬──────────────┐     ┌──────────────────┐
│ Sidebar  │  Content     │     │     Header       │
│ (sticky) │  (scrolls)   │     │     Sidebar      │
│          │              │     │     Content      │
└──────────┴──────────────┘     └──────────────────┘
```

- On **desktop**: the left sidebar stays fixed, only the right column scrolls.
- On **mobile**: the layout stacks vertically, the whole `<main>` scrolls.

---

## Theming

Themes are applied via `data-theme` attribute on `<html>`. Each theme is a CSS file that overrides the CSS variables defined in `tokens.css`.

Available themes: `dark`, `light`, `red`, `green`, `yellow`, `purple`
