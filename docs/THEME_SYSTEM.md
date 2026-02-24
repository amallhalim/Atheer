# Theme System & Guidelines

This document provides a complete guide to the application's theming architecture, technical implementation, and the strict guidelines that must be followed to maintain visual consistency.

---

## 🏆 Golden Rules

1.  **NO Static Colors**:
    - ❌ `bg-red-500` | `text-[#ff0000]` | `border-gray-200`
    - ✅ **ALWAYS** use theme variables: `bg-destructive`, `text-primary`, `border-border`.
2.  **All Colors Must Be Documented**:
    - If you need a new color, it **MUST** be added to the theme system properly.
3.  **Tailwind Palette Only**:
    - When defining color variables in CSS files, you **MUST** use values from the standard Tailwind CSS color palette.
    - ✅ **Use This**: `#3b82f6` (Blue-500), `#1e293b` (Slate-800)
    - ❌ **Do NOT Use**: `#3a81f5` (Random variation), `#123456` (Arbitrary hex)

---

## 🎨 Overview

The system is built on **[next-themes](https://github.com/pacocoursey/next-themes)** for state management and persistence, combined with CSS custom properties (variables) mapped to Tailwind utility classes.

### Fixed vs. Adaptive Colors

Our system distinguishes between two types of tokens:

1.  **Fixed Colors (Global)**: Statically defined in `constants.css`. These **never change**, regardless of the active theme (e.g., Success green, Error red, Brand primary).
2.  **Adaptive Colors (Dynamic)**: Defined in individual theme files (`light.css`, `dark.css`). These **shift values** when the user swaps themes (e.g., Background, Foreground, Muted).

### Available Themes
| Theme | Value | Primary Color | Use Case |
| :--- | :--- | :--- | :--- |
| **Light** | `light` | Black (#000) | Daytime reading |
| **Dark** | `dark` | Teal (#64ffda) | Default dark mode |
| **Red** | `red` | Red (#f87171) | Bold, energetic |
| **Green** | `green` | Green (#4ade80) | Natural, calm |
| **Yellow** | `yellow` | Yellow (#facc15) | Warm, optimistic |
| **Purple** | `purple` | Purple (#c084fc) | Creative, luxurious |

---

## 📁 File Structure

Themes are defined and managed within `src/styles/theme/`:
- `constants.css`: Theme-agnostic values (border radius, font sizes, etc.).
- `light.css`: Light mode color palette (uses `:root`).
- `dark.css`: Default dark mode (blue/teal accent).
- `red.css`, `green.css`, `yellow.css`, `purple.css`: Specialized color themes.
- `tokens.css`: The "Bridge" that maps CSS variables to Tailwind utility classes.

---

## 🚀 Technical Implementation

### 1. Theme State Management (`next-themes`)
The `ThemeProvider` is configured in `src/app/layout.tsx` to use the `data-theme` attribute:

```tsx
<ThemeProvider
  attribute="data-theme"
  defaultTheme="dark"
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

#### Preventing Hydration Mismatch
To prevent hydration warnings when reading theme from `localStorage`, `suppressHydrationWarning` is added to the `<html>` tag:
```tsx
<html lang="en" dir="ltr" suppressHydrationWarning>
```

### 2. Theme Selection
The active theme is controlled by the `data-theme` attribute on the `<html>` element. The `ThemeSelector` component uses the `useTheme` hook:

```tsx
import { useTheme } from 'next-themes';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  return (
    <Select value={theme} onValueChange={setTheme}>
      {/* Theme items */}
    </Select>
  );
}
```

### 3. CSS Variable Architecture
Each theme file defines a complete set of CSS variables. Example from `red.css`:
```css
[data-theme='red'] {
  --background: #0f0a0a;
  --foreground: #fef2f2;
  --primary: #f87171;
  --card: #1a1414;
  --border: #450a0a;
  /* ... more variables */
}
```

### 4. Tailwind Integration (`tokens.css`)
CSS variables are mapped to Tailwind in `src/styles/theme/tokens.css`:
```css
@theme {
  --color-background: var(--background);
  --color-primary: var(--primary);
  /* ... etc */
}
```

---

## 🛠️ Developer Guide

### How to Add a New Theme
1.  **Create CSS File**: Create `src/styles/theme/blue.css` and define ALL required variables.
2.  **Import in globals.css**: `@import '../styles/theme/blue.css';`
3.  **Add to Dark Variant**: In `src/app/globals.css`, update `@custom-variant dark`:
    ```css
    @custom-variant dark (&:where([data-theme='dark'], [data-theme='blue'], ...));
    ```
4.  **Update Selector UI**: Add the new theme to `ThemeSelector.tsx`.

### How to Add a New Color

#### 1. Adaptive Colors (Change per Theme)
Use these for branding and interface elements that should feel different in Light/Dark modes.
1.  **Define Variable**: Add the variable to **ALL** theme files (`light.css`, `dark.css`, `red.css`, etc.) with theme-specific values.
2.  **Map Token**: Open `tokens.css` and map it in the **Adaptive/Theme-Specific** section of `@theme`.
    ```css
    --color-sidebar-bg: var(--sidebar-bg);
    ```

#### 2. Fixed Colors (Global Across All Themes)
Use these for semantic feedback (success, error) or strict brand elements that must never change.
1.  **Define Variable**: Add the variable to `constants.css` in the `:root` block.
    ```css
    --brand-gold: #ffd700;
    ```
2.  **Map Token**: Open `tokens.css` and map it in the **Fixed/Static Tokens** section of `@theme`.
    ```css
    --color-gold: var(--brand-gold);
    ```

---

## 📋 CSS Variables Reference

| Category | Variables |
| :--- | :--- |
| **Core** | `--background`, `--foreground` |
| **Surface** | `--card`, `--card-foreground`, `--popover`, `--popover-foreground` |
| **Action** | `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--accent`, `--accent-foreground`, `--destructive` |
| **UI** | `--muted`, `--muted-foreground`, `--border`, `--input`, `--ring` |
| **Special** | `--spotlight-glow` (RGB values, e.g., `248, 113, 113`) |

---

## 🔍 Troubleshooting

### Theme not applying?
1. Check the `data-theme` attribute on `<html>` in DevTools.
2. Verify the theme file is imported in `globals.css`.
3. Ensure the theme is listed in the `@custom-variant dark` selector.
4. Clear localStorage: `localStorage.removeItem('theme')`.

### Colors not changing on hover?
Avoid hardcoded Tailwind colors:
- ❌ `.nav-link { @apply hover:text-cyan-400; }`
- ✅ `.nav-link { @apply hover:text-primary; }`

### Dark mode classes not working?
Verify your theme is included in the `@custom-variant dark` configuration in `globals.css`.

---

---

## 🎨 Visual System & Standards

### 🔡 Typography
We use **Geist Sans** (Inter-like modern) and **Geist Mono** for the interface.
- **Mapping**: Mapped in `tokens.css` via `--font-sans` and `--font-mono`.
- **Usage**: Use `font-sans` for body text; `font-mono` for metadata, dates, and code snippets.

### 🪜 Layering (Z-Index Scale)
To maintain visual depth without conflicts, follow this standard scale:
- `z-negative`: Background decorations.
- `z-0`: Standard content.
- `z-30`: **Interactive Spotlight** (above content, below menus).
- `z-50`: Fixed Navigation & Sticky headers.
- `z-100`: Modals, Popups, and Tooltips.

### 🔦 Signature Spotlight Effect
The "Glow" follow-effect is a central cinematic element.
- **Logic**: A radial gradient tracking the mouse via CSS variables.
- **Color**: Automatically swaps using the `--spotlight-glow` theme variable.
- **Style**: Defined in `src/styles/components/layout.css`.

---

## 🏗️ CSS Orchestration Pattern
We follow a **Modular Orchestrator Pattern** to keep Tailwind clean:
- **Tailwind Utilities**: For atomic adjustments.
- **Component Classes**: Defined in `src/styles/components/` using `@apply` for complex layouts (e.g., `.nav-link`, `.project-card`).

---

## ⚙️ Technical Details

- **Specificity**: Theme files are imported in a specific order (`constants` → `light` → `dark` → `colors` → `tokens`). Later imports override earlier ones for equal specificity.
- **Performance**: Theme switching is instant via hardware-accelerated CSS variables with minimal runtime overhead.

---

## 📁 Related Files
- [`src/app/globals.css`](../src/app/globals.css) - Main stylesheet
- [`src/styles/theme/`](../src/styles/theme/) - Theme CSS definitions
- [`src/components/layout/ThemeSelector.tsx`](../src/components/layout/ThemeSelector.tsx) - Theme switcher component
