# Architecture Design: Atheer Portfolio

A lightweight, scalable structure optimized for performance and developer experience.

---

## 🛠️ Technology Stack

| Layer | Technology | Why |
|:---|:---|:---|
| Framework | Next.js (App Router) | File-based routing, server components, SEO |
| Language | TypeScript | Type safety, better autocomplete, fewer bugs |
| Styling | Tailwind CSS | Utility-first, responsive, fast to prototype |
| Theming | next-themes | Light/dark/multi-theme support |
| Icons | react-icons | Large icon library, tree-shakeable |

---

## 🏗️ Directory Structure

- **`/src/app`**: Next.js App Router (Pages & Layouts).
- **`/src/components`**:
  - `ui/`: **Base UI Components** added via `shadcn/ui` (managed by CLI).
  - `shared/`: Atomic, reusable UI elements built internally.
  - `image/`: Specialized visual components with hover logic.
  - `[page_name]/`: Feature-specific components.
- **`/src/types`**: Centralized TypeScript interfaces for global data consistency.
- **`/src/static-data`**: Version-controlled content (JSON/TS) to keep components clean.
- **`/src/styles`**: Component-scoped CSS using Tailwind `@apply` for clean JSX.

---

## 🔄 Data Lifecycle

```mermaid
graph LR
    A[static-data/*.ts] --> B[Components]
    B --> C[UI]
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#ccf,stroke:#333,stroke-width:2px
```

1. **Definitions**: Core data shapes are defined in `/src/types`.
2. **Storage**: Content is managed in `/src/static-data` as typed TypeScript objects.
3. **Rendering**: Components import raw data and map them into specialized sub-components (e.g., `ProjectCard`).

---

## 📦 External Libraries

### [Lucide React](https://lucide.dev/) (Icons)
- **Why**: Performance-first, tree-shakeable, and visually consistent with premium designs.
- **Usage**: `import { ArrowUpRight } from 'lucide-react';`

### [React Icons](https://react-icons.github.io/react-icons/) (Brand Icons)
- **Why**: Handles **official brand logos** that are being deprecated in Lucide (e.g., Instagram, X/Twitter).
- **Usage**: Optimized imports from collections (e.g., `si` for SimpleIcons).

### [Radix UI Primitives](https://www.radix-ui.com/primitives) (Headless Components)
- **Why**: 
  - **Headless & Unstyled**: Provides 100% control over design (Tailwind) while Radix handles the "brains" (logic).
  - **A11y-First**: Built with WAI-ARIA standards. Handles keyboard navigation, screen reader support, and focus management (trapping/restoration) automatically.
  - **Polymorphism**: The `Slot` component allows shared styles to be applied to any child element (e.g., styling a Next.js `Link` exactly like a `Button`).
- **When to use**:
  - For complex interactive elements like **Dialogs, Popovers, Tabs, Accordions, and Selects**.
  - When the project requires **high accessibility compliance** (WCAG).
  - When standard HTML elements (like `<select>`) cannot be styled to meet premium design requirements.

### [Next.js Link](https://nextjs.org/docs/app/api-reference/components/link) (Navigation)
- **Why**: Optimized client-side navigation, prefetching, and SEO handling.
- **When to use**:
  - **Internal Navigation**: Always use `<Link>` for moving between routes within the app.
  - **External Links**: Use native `<a>` tags with `rel="noopener noreferrer"` for external domains.
- **Link vs Button Pattern**:
  - **Use a Link**: If the action changes the URL or moves the user to a different page/section.
  - **Use a Button**: If the action performs a function (submit, toggle, open modal, fetch data) without changing the route.
  - **Polymorphic Style**: In this project, we use the `asChild` pattern so a `<Link>` can visually appear as a `<Button>` while maintaining correct HTML semantics.
  https://www.radix-ui.com/primitives/docs

### [shadcn/ui](https://ui.shadcn.com/) (UI Components)
- **Why**: A collection of high-quality components built using **Radix UI** primitives and styled with **Tailwind CSS**.
- **Philosophy**: It is not a library; code is owned and customized directly in the project.
- **Storage**: Components reside in **`/src/components/ui`**.

---

---

## 🎨 Styling Strategy

All visual decisions, including our **Theme Choice**, **Tailwind Integration**, and **CSS Conventions**, are documented in:
- **[Theme System & Guidelines](./THEME_SYSTEM.md)**

#### ✅ Difference: CSS Modules vs Normal CSS File

| Feature | Normal CSS File | CSS Modules |
| :--- | :--- | :--- |
| **Scope** | Global 🌍 | Local to component 📦 |
| **Class conflict** | Possible ❌ | Almost impossible ✅ |
| **Maintainability** | Harder in large projects | Better for scalable apps |
| **Naming** | Manual | Automatically hashed |

---

## 🧠 Senior Design Considerations

### 1. Data-Driven UI (Static-to-API Ready)
We use a **Headless Pattern** for content. By separating TypeScript-typed data from React components, we achieve:
- **Portability**: Content can be moved to a remote API or CMS (Strapi, Sanity) with zero changes to the component structure.
- **Type Safety**: strict TypeScript interfaces ensure data integrity across the entire render tree.

### 2. Component Composition (Shadcn + Radix)
Our component strategy prioritizes **Accessibility (A11y)** and **Full Control**:
- **Radix UI**: Handles complex interactions (Dialogs, Popovers, Tabs) with ARIA standards baked in.
- **Tailwind CSS**: Provides the aesthetic layer without the bloat of traditional CSS-in-JS.

### 3. Modular CSS Orchestration
Unlike traditional Tailwind projects that suffer from "Attribute Bloat," we use a **Layered Orchestrator Pattern**:
- **Tailwind Utilities**: For one-off atomic adjustments.
- **SCSS-style @apply**: For repeating complex visual patterns (Cards, Navigation) to keep components readable and maintainable.

---

## 📐 Page Layout

### Desktop vs Mobile
- On **desktop**: The left sidebar stays fixed (sticky), only the right column scrolls.
- On **mobile**: The layout stacks vertically, and the entire page scrolls.

```
Desktop (≥ 1024px)              Mobile (< 1024px)
┌──────────┬──────────────┐     ┌──────────────────┐
│ Sidebar  │  Content     │     │     Header       │
│ (sticky) │  (scrolls)   │     │     Sidebar      │
│          │              │     │     Content      │
└──────────┴──────────────┘     └──────────────────┘
```
