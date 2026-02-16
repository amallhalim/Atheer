# Theme System Documentation

## Overview

This document explains the complete theming system for the application. The theme architecture uses CSS custom properties (variables) that are mapped to Tailwind utility classes, allowing for dynamic theme switching without page reloads.

## File Structure

```
src/styles/theme/
├── constants.css      # Theme-agnostic values (border radius, etc.)
├── light.css          # Light mode color palette
├── dark.css           # Default dark mode (blue/teal accent)
├── red.css            # Ruby Red dark theme
├── green.css          # Emerald Green dark theme
├── yellow.css         # Golden Yellow dark theme
├── purple.css         # Royal Purple dark theme
└── tokens.css         # Maps CSS variables to Tailwind
```

## How It Works

### 1. Theme Selection

Themes are controlled by the `data-theme` attribute on the `<html>` element:

```html
<html data-theme="red">
  <!-- Your app -->
</html>
```

The `ThemeSelector` component manages this attribute and persists the selection to `localStorage`.

### 2. CSS Variable Architecture

Each theme file defines a complete set of CSS variables:

```css
/* Example: red.css */
[data-theme='red'] {
  --background: #0f0a0a;        /* Page background */
  --foreground: #fef2f2;        /* Primary text color */
  --primary: #f87171;           /* Accent color (buttons, links, etc.) */
  --card: #1a1414;              /* Card backgrounds */
  --border: #450a0a;            /* Border colors */
  /* ... and more */
}
```

### 3. Tailwind Integration

The `tokens.css` file maps these CSS variables to Tailwind's design system:

```css
@theme {
  --color-background: var(--background);
  --color-primary: var(--primary);
  /* ... etc */
}
```

This allows you to use Tailwind classes that automatically adapt to the theme:

```tsx
<div className="bg-background text-foreground">
  <button className="text-primary hover:bg-primary/10">
    Click me
  </button>
</div>
```

## Available Themes

| Theme | Value | Primary Color | Use Case |
|-------|-------|---------------|----------|
| **Light** | `light` | Black (#000) | Daytime reading |
| **Dark** | `dark` | Teal (#64ffda) | Default dark mode |
| **Red** | `red` | Red (#f87171) | Bold, energetic |
| **Green** | `green` | Green (#4ade80) | Natural, calm |
| **Yellow** | `yellow` | Yellow (#facc15) | Warm, optimistic |
| **Purple** | `purple` | Purple (#c084fc) | Creative, luxurious |

## CSS Variables Reference

### Core Colors
- `--background` - Main page background
- `--foreground` - Primary text color

### Surface Colors
- `--card` - Card/panel backgrounds
- `--card-foreground` - Text on cards
- `--popover` - Dropdown/modal backgrounds
- `--popover-foreground` - Text in popovers

### Action Colors
- `--primary` - Main accent color (buttons, links, highlights)
- `--primary-foreground` - Text on primary-colored elements
- `--secondary` - Secondary accent color
- `--secondary-foreground` - Text on secondary elements
- `--accent` - Tertiary accent color
- `--accent-foreground` - Text on accent elements
- `--destructive` - Error/danger color

### UI Elements
- `--muted` - Muted backgrounds
- `--muted-foreground` - Muted text
- `--border` - Border colors
- `--input` - Input field borders
- `--ring` - Focus ring color

### Specialized
- `--spotlight-glow` - RGB values for spotlight effect (e.g., `248, 113, 113`)

## Creating a New Theme

To add a new theme:

1. **Create a new CSS file** (e.g., `blue.css`):

```css
/* 🔵 BLUE THEME */
[data-theme='blue'] {
  --background: #0a1929;
  --foreground: #e3f2fd;
  --primary: #42a5f5;
  --primary-foreground: #0d47a1;
  /* ... define all required variables */
}
```

2. **Import it in `globals.css`**:

```css
@import '../styles/theme/blue.css';
```

3. **Add to the dark variant** in `globals.css`:

```css
@custom-variant dark (&:where(
  [data-theme='dark'],
  [data-theme='blue'],  /* ← Add here */
  /* ... other themes */
  [data-theme='blue'] *, /* ← And here */
));
```

4. **Add to ThemeSelector**:

```tsx
const items = [
  // ... existing themes
  { label: "Ocean Blue", value: "blue", color: "#42a5f5" },
];
```

## Best Practices

### ✅ DO

- Use theme variables for all colors: `text-primary` instead of `text-cyan-400`
- Define ALL required CSS variables in each theme file
- Use semantic variable names (`--primary`, not `--teal-color`)
- Test your theme in both light and dark contexts

### ❌ DON'T

- Hardcode colors: `text-[#64ffda]` ❌
- Mix theme variables with arbitrary colors
- Skip variables - each theme needs a complete set
- Use `dark:` classes for theme-specific logic (use theme variables instead)

## Troubleshooting

### Theme not applying?

1. Check the `data-theme` attribute on `<html>` in DevTools
2. Verify the theme file is imported in `globals.css`
3. Ensure the theme is listed in the `@custom-variant dark` selector
4. Clear localStorage: `localStorage.removeItem('theme')`

### Colors not changing on hover?

Make sure you're using theme variables, not hardcoded colors:

```css
/* ❌ Wrong */
.nav-link {
  @apply hover:text-cyan-400;
}

/* ✅ Correct */
.nav-link {
  @apply hover:text-primary;
}
```

### Dark mode classes not working?

Verify your theme is included in the `@custom-variant dark` configuration in `globals.css`.

## Technical Details

### CSS Specificity

Theme files are imported in this order:

1. `constants.css` - Base values
2. `light.css` - Light mode (`:root` selector)
3. `dark.css` - Dark mode (`[data-theme='dark']`)
4. Color themes - `red.css`, `green.css`, etc. (`[data-theme='red']`)
5. `tokens.css` - Tailwind mappings

Later imports override earlier ones when selectors have equal specificity.

### Performance

- Theme switching is instant (no page reload)
- CSS variables are hardware-accelerated
- Minimal runtime overhead
- Theme preference persists via `localStorage`

## Related Files

- [`src/app/globals.css`](../src/app/globals.css) - Main stylesheet with theme imports
- [`src/components/layout/ThemeSelector.tsx`](../src/components/layout/ThemeSelector.tsx) - Theme switcher UI
- [`src/styles/base.css`](../src/styles/base.css) - Global base styles
- [`src/styles/theme/`](../src/styles/theme/) - Theme CSS files

## Further Reading

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS v4 Theming](https://tailwindcss.com/docs/theme)
- [Data Attributes (MDN)](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
