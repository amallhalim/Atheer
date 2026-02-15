# 🏗️ Theme Architecture & Styling Guidelines

This document tracks the core architectural decisions for the Atheer Portfolio's styling system. We follow a **Modular Orchestrator Pattern** to ensure high performance, maintainability, and a premium "Cinematic" user experience.

---

## 🚀 The Modular Architecture
Our CSS is no longer a single "junk drawer" file. It is split into specialized layers imported by `src/app/globals.css`.

### layer 1: The Design System (`/src/styles/theme/`)
We use a **Triple-File Separation** to handle themes automatically:
- **`constants.css`**: Stores values that never change (e.g., `--radius`).
- **`light.css`**: Defines adaptive variables for the Light theme.
- **`dark.css`**: Defines adaptive variables for the Dark theme (Signature Navy `#0a192f`).
- **`tokens.css`**: The **Bridge**. Maps raw CSS variables to Tailwind utility classes (e.g., `text-primary`).

### Layer 2: Feature & Component Styles (`/src/styles/components/`)
Specific logic for complex UI elements is kept in dedicated files:
- `navigation.css`
- `cards.css`
- `lists.css`
- `layout.css` (Handles the **Interactive Spotlight**)

### Layer 3: The Base Rules (`/src/styles/base.css`)
Handles global HTML resets and "Invisible UX" improvements:
- **Smoothing**: Custom font and scroll behaviors.
- **Selection**: Custom Teal highlight colors.
- **Images**: Automatic dimming and hover-glow for Dark Mode.

---

---

## 🛠️ Step-by-Step: Adding a New Component Style
When you create a new complex UI element (e.g., `buttons.css`):

1. **Create the file**: Place it in `src/styles/components/my-component.css`.
2. **Import it**: Open `src/app/globals.css` and add the import in **Section 2**:
   ```css
   @import '../styles/components/my-component.css';
   ```
3. **Usage**: Use the custom classes in your `.tsx` file alongside Tailwind utilities.

---

## 🛠️ Step-by-Step: Adding a New Color
Follow these 3 steps to ensure your new color works across all themes and follows the design system.

### Step 1: Define the Raw Variable
Pick a descriptive name like `--brand-gold` or `--success-green`.
- **Is it "Smart" (changes at night)?** Add it to both `light.css` and `dark.css`.
- **Is it "Constant" (stays same)?** Add it only to `constants.css`.

### Step 2: Create the Tailwind Token
Open `src/styles/theme/tokens.css` and map your new variable inside the `@theme` block.
```css
@theme {
  /* ... existing tokens ... */
  --color-brand-gold: var(--brand-gold);
}
```

---

## 🔡 Typography (Fonts)
We use **Geist Sans** and **Geist Mono** for a modern, tech-focused look. 
- **Mapping**: These are mapped in `tokens.css` using `--font-sans` and `--font-mono`.
- **Usage**: Use `font-sans` (default) for body text and `font-mono` for code-like details or metadata.

---

## 🪜 Layering (Z-Index Scale)
To prevent elements from overlapping incorrectly, we follow this standard scale:
- `z-negative`: Background decorations.
- `z-0`: Standard content items.
- `z-30`: The **Spotlight** (above content, below interactive menus).
- `z-50`: Fixed Navigation and Sticky headers.
- `z-100`: Modals, Popups, and Tooltips.

---

## 🔦 The Spotlight Effect
A signature premium feature inspired by Brittany Chiang.
- **Logic**: A 600px radial gradient tracking the mouse via CSS variables.
- **Automatic Switching**: The glow color is defined as `--spotlight-glow` in the theme files, allowing it to swap from **Blue** (Light) to **Sky** (Dark) automatically.

---

## 🛠️ Code Style: The Logical `@apply`
Avoid long "ribbon" lines of Tailwind classes. Group directives by function for maximum readability:

```css
.card {
  /* 1. Layout & Positioning */
  @apply relative flex flex-col gap-4;

  /* 2. Visual Styling */
  @apply bg-card border border-border rounded-xl;

  /* 3. Interaction & Animation */
  @apply transition-all duration-300 hover:scale-[1.02];
}
```

---

## 🎨 The Color Palette
Here are the specific values used in each mode for professional reference.

### ☀️ Light Mode Theme
- **Background**: `oklch(1 0 0)` (Pure White)
- **Foreground**: `oklch(0.145 0 0)` (Slate Dark)
- **Primary**: `oklch(0.205 0 0)` (Dark Accent)
- **Glow**: Blue-600 (`37, 99, 235`)

### 🌙 Dark Mode Theme (Signature Navy)
- **Background**: `#0a192f` (Deep Navy Slate)
- **Foreground**: `#e2e8f0` (Soft Light Slate)
- **Primary**: `#64ffda` (Signature Teal/Aquamarine)
- **Card/Surface**: `#112240` (Lighter Navy)
- **Muted Text**: `#8892b0` (Blue-Grey)
- **Glow**: Sky-400 (`56, 189, 248`)

---

## 💡 Key Philosophies
1. **Single Source of Truth**: Change a color in `/theme/` and it updates everywhere.
2. **Zero Hardcoding**: Never use hex codes directly in components. Always use Tailwind classes or CSS variables.
3. **Accessibility First**: Every interactive element must have a clean `:focus-visible` state.
