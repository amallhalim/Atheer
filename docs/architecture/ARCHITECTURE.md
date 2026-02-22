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

### [React Icons](https://react-icons.github.io/react-icons/) (Brand Icons)
- **Why**: Handles **official brand logos** that are being deprecated in Lucide (e.g., Instagram, X/Twitter). It ensures we use accurate, high-quality social brand identities.
- **Usage**: Use optimized imports from the respective collection (e.g., `si` for SimpleIcons).
  ```tsx
  import { SiInstagram } from "react-icons/si";
  ```

> **Note on Multiple Icon Packages**: We use both **Lucide** and **React Icons** to maintain a "smart" separation of concerns. Lucide handles our consistent UI utility icons (arrows, menus). However, **Lucide does not support brand icons** (like Instagram, X, etc.) as they are outside its scope. Therefore, we use React Icons to provide official, high-fidelity brand logos. Thanks to Next.js tree-shaking, this dual-library approach does not negatively impact our bundle size.

### [shadcn/ui](https://ui.shadcn.com/) (UI Components)
- **Why**: Low-level accessibility (Radix UI) combined with full styling control via Tailwind CSS. 
- **Storage**: Components reside in **`/src/components/ui`**. These are "owned" by the shadcn CLI but intended for manual customization if needed.
- **Usage**: Add components via CLI:
  ```bash
  npx shadcn-ui@latest add [component-name]
  ```

## 🎨 Styling Strategy

All visual decisions, including our **Theme Choice**, **Tailwind Integration**, and **CSS Conventions**, are documented in a unified guide:
- **[Style & Theme Guidelines](./styling/GUIDELINES.md)**: The single source of truth for our Brittany Chiang-inspired aesthetic and technical CSS rules.

## 🔄 Data Lifecycle

1. **Definitions**: Core data shapes are defined in `/src/types`.
2. **Storage**: Content is managed in `/src/staticData` as typed TypeScript objects.
3. **Rendering**: Components import raw data and map them into specialized sub-components (e.g., `ProjectCard`).

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (PostCSS)
- **Aesthetics**: Lucide Icons & Custom Hover Effects
- **Type Safety**: strict TypeScript
