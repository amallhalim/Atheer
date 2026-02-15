# Portfolio Style & Theme Guidelines

This document tracks all visual and technical decisions related to the theme, styling, and Tailwind implementation for the Atheer Portfolio.

---

## 🎨 Theme Decisions
Our portfolio follows a **Cinematic Dark** aesthetic, heavily inspired by premium frontend engineering portfolios (e.g., Brittany Chiang).

### Dark Mode Palette (Navy/Slate)
- **Background**: `Slate-950` (#020617) - A deep, professional navy.
- **Foreground**: `Slate-50` (#f8fafc) - High contrast for readability.
- **Subtle Text**: `Slate-400` (#94a3b8) - For descriptions and metadata.
- **Accents**: `Cyan-400` and `Blue-500` - Used for highlights, badges, and interactive states.

### Interactive "Spotlight"
- **Color**: `theme('colors.blue.500 / 15%')`
- **Logic**: A 600px radial gradient that follows the mouse to create depth and focus. We use a `Spotlight` client component that updates CSS variables (`--mouse-x`, `--mouse-y`) on the document root.

---

## ⚡ Tailwind CSS Integration & the `theme()` Bridge
We use Tailwind as our primary design engine. When writing custom CSS (like the Spotlight), we **never** hardcode colors. Instead, we use the `theme()` function.

```css
/* ✅ Correct Way */
background: theme('colors.blue.500 / 10%');
```
*Why?* This keeps our custom styles 100% synced with Tailwind's global design system.

---

## 🛠️ CSS Conventions & Best Practices
We organize our CSS into modules located in `src/styles/components/`.

### Effective `@apply`
Avoid long, unreadable lines. Group your `@apply` directives by function:

```css
.card {
  /* 1. Layout & Positioning */
  @apply relative flex flex-col items-center justify-center;

  /* 2. Spacing & Sizing */
  @apply p-4 m-2;

  /* 3. Visual Styling (Background, Border, Radius, Shadow) */
  @apply bg-slate-900 border border-slate-800 rounded-3xl;

  /* 4. Interactions & Animations */
  @apply transition-all duration-300 hover:scale-105 hover:shadow-lg;
}
```

### Why do this?
1. **Readability**: You can scan the code and find exactly what you are looking for.
2. **Debugging**: If a layout is broken, you know exactly which grouping to check.
3. **Consistency**: Ensures every developer follows the same grouping logic.

---

## 🖼️ Image Styling
Images use a cinematic `16/10` aspect ratio with:
- Hover scale effects (`scale-105`).
- Subtle overlays that fade to reveal the full image on interaction.

---

## 💡 Summary of Decisions
1. **Consistency**: Use Tailwind tokens for everything via `theme()` or utility classes.
2. **Modular**: Keep specific component styles out of `globals.css`.
3. **Motion**: Use hover scales and radial gradients to make the UI feel "alive".



# Theme & Design Decisions

This document tracks the core visual decisions made for the Atheer Portfolio.

## 🎨 Color Palette

### Dark Theme (Slate/Navy)
Our dark theme is inspired by premium engineering portfolios (Brittany Chiang style).
- **Background**: `Slate-950` (#020617) - A deep, professional navy.
- **Primary Text**: `Slate-50` (#f8fafc) - High contrast for readability.
- **Subtle Text**: `Slate-400` (#94a3b8) - For descriptions and metadata.
- **Accents**: `Cyan-400` and `Blue-500` - Used for highlights, badges, and interactive states.

## 🔦 Spotlight Effect (Mouse Tracking)
The "Glow Follow" effect is a key premium feature.
- **Radius**: `600px` circle.
- **Color**: `theme('colors.blue.500 / 15%')`.
- **Implementation**: We use a `Spotlight` client component that updates CSS variables (`--mouse-x`, `--mouse-y`) on the document root. This allows the layout to remain a Server Component while providing dynamic feedback.

## 🌉 The `theme()` Bridge
In custom CSS files (e.g., `layout.css`), we **always** use the Tailwind `theme()` function.
- **Example**: `background: theme('colors.blue.500 / 15%')`.
- **Why**: This ensures that even our custom manual CSS is perfectly synced with the global Tailwind design system. It allows us to use Tailwind's color names and opacity modifiers inside standard CSS.

## 🖼️ Image Styling
Images use a cinematic `16/10` aspect ratio with:
- Hover scale effects (`scale-105`).
- Subtle overlays that fade to reveal the full image on interaction.



# Portfolio Style & Theme Guidelines

This document tracks all visual and technical decisions related to the theme, styling, and Tailwind implementation.

---

## 🎨 Theme Decisions
Our portfolio follows a **Cinematic Dark** aesthetic, heavily inspired by premium frontend engineering portfolios (e.g., Brittany Chiang).

### Dark Mode Palette (Navy/Slate)
- **Background**: `oklch(0.18 0.04 258)` (#0f172a) - A deep, professional navy slate.
- **Foreground**: `oklch(0.92 0.01 255)` - Crisp off-white for primary text.
- **Subtle/Muted**: `oklch(0.72 0.03 258)` - Slate grey for secondary info and descriptions.

### Interactive "Spotlight"
- **Color**: `theme('colors.blue.500 / 15%')`
- **Logic**: A 600px radial gradient that follows the mouse to create depth and focus.

---

## ⚡ Tailwind CSS Integration
We use Tailwind as our primary design engine.

### The `theme()` Bridge
When writing custom CSS (like the Spotlight), we **never** hardcode colors. Instead, we use the `theme()` function.
```css
/* Good Example */
background: theme('colors.blue.500 / 10%');
```
*Why?* This keeps our custom styles 100% synced with Tailwind's global design system.

---

## 🛠️ CSS Conventions
We organize our CSS into modules located in `src/styles/components/`.

### Effective `@apply`
Avoid long, unreadable lines. Group your `@apply` directives by function:
```css
.card {
  /* Layout */
  @apply relative flex flex-col gap-4;
  
  /* Visuals */
  @apply bg-slate-900 border border-slate-800 rounded-3xl;
  
  /* Interaction */
  @apply transition-all duration-300 hover:scale-105;
}
```

---

## 💡 Summary of Decisions
1. **Consistency**: Use Tailwind tokens for everything.
2. **Modular**: Keep specific component styles out of `globals.css`.
3. **Motion**: Use hover scales and radial gradients to make the UI feel "alive".


# Styling Guidelines

## Best Practices for `@apply` in CSS modules

When using Tailwind CSS's `@apply` directive, avoid stuffing everything into a single line. Instead, **split your classes into logical groups** using multiple `@apply` lines.

### ❌ Bad Example (Hard to read)
Everything is jumbled together. It's unclear what is layout, what is decoration, and what is interaction.
```css
.card {
  @apply relative flex flex-col items-center justify-center p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200;
}
```

### ✅ Good Example (Easy to read)
Split the classes based on their function. This makes the code self-documenting and easier to debug.

```css
.card {
  /* 1. Layout & Positioning */
  @apply relative flex flex-col items-center justify-center;

  /* 2. Spacing & Sizing */
  @apply p-4 m-2;

  /* 3. Visual Styling (Background, Border, Radius, Shadow) */
  @apply bg-white border border-gray-200 rounded-lg shadow-md;

  /* 4. Interactions & Animations */
  @apply transition-all duration-300 hover:shadow-lg;
}
```

### Why do this?
1.  **Readability**: You can scan the code and find exactly what you are looking for (e.g., "Where is the padding defined?").
2.  **Debugging**: If a layout is broken, you know exactly which line to check.
3.  **Organization**: It clearly separates structural styles from cosmetic styles.
