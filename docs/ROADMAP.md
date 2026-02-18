# Portfolio Enhancement Roadmap 🚀

This document outlines the planned improvements to elevate the portfolio to a world-class standard.

## 🟢 Phase 1: Interactive Motion
*   **Task**: Implement staggered entrance animations for page sections and list items.
    *   **Tool/Package**: `framer-motion`
*   **Task**: Create a "Glow Follow" cursor effect that creates a dynamic light source behind content.
    *   **Tool/Package**: Pure CSS (Radial Gradients) + `framer-motion` (for smooth mouse tracking).

## 🔵 Phase 2: Visual Depth & UI
*   **Task**: Build a "Bento Grid" layout for featured projects to break the linear list feel.
    *   **Tool/Package**: Tailwind Grid + `shadcn/ui`.
*   **Task**: Add a custom themed scrollbar to match the dark cyan aesthetic.
    *   **Tool/Package**: Tailwind CSS (scrollbar-hide or custom utility classes).

## 🟡 Phase 3: UX & Micro-interactions
*   **Task**: Add "Copy Email to Clipboard" functionality with a success state (check icon).
    *   **Tool/Package**: `lucide-react` (for icons) + Navigator Clipboard API.
*   **Task**: Implement a sticky scroll-progress indicator.
    *   **Tool/Package**: `framer-motion` (useScroll hook).

## 🟣 Phase 4: Performance & SEO
*   **Task**: Optimize image loading with blur-up placeholders.
    *   **Tool/Package**: `next/image` with `placeholder="blur"`.
*   **Task**: Implement a professional "Command Menu" (CMD+K) for quick navigation.
    *   **Tool/Package**: `cmdk` (works perfectly with `shadcn/ui`).
