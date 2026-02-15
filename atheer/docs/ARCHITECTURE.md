# Architecture Design: Atheer Portfolio

A lightweight, scalable structure optimized for performance and developer experience.

## 🏗️ Directory Structure

- **`/src/app`**: Next.js App Router (Pages & Layouts).
- **`/src/components`**:
  - `ui/`: **Base UI Components** added via `shadcn/ui` (managed by CLI).
  - `shared/`: Atomic, reusable UI elements built internally.
  - `image/`: Specialized visual components with hover logic.
  - `[page_name]/`: Feature-specific components.
- **`/src/types`**: Centralized TypeScript interfaces for global data consistency.
- **`/src/staticData`**: Version-controlled content (JSON/TS) to keep components clean.
- **`/src/styles`**: Component-scoped CSS using Tailwind `@apply` for clean JSX.

## 📦 External Libraries

### [Lucide React](https://lucide.dev/) (Icons)
- **Why**: Performance-first, tree-shakeable, and visually consistent with premium designs.
- **Usage**: Import specific icons as components.
  ```tsx
  import { ArrowUpRight } from 'lucide-react';
  <ArrowUpRight className="w-4 h-4" />
  ```

### [shadcn/ui](https://ui.shadcn.com/) (UI Components)
- **Why**: Low-level accessibility (Radix UI) combined with full styling control via Tailwind CSS. 
- **Storage**: Components reside in **`/src/components/ui`**. These are "owned" by the shadcn CLI but intended for manual customization if needed.
- **Usage**: Add components via CLI:
  ```bash
  npx shadcn-ui@latest add [component-name]
  ```

## 🔄 Data Lifecycle

1. **Definitions**: Core data shapes are defined in `/src/types`.
2. **Storage**: Content is managed in `/src/staticData` as typed TypeScript objects.
3. **Rendering**: Components import raw data and map them into specialized sub-components (e.g., `ProjectCard`).

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (PostCSS)
- **Aesthetics**: Lucide Icons & Custom Hover Effects
- **Type Safety**: strict TypeScript
