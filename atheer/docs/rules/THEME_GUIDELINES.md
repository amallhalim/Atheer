# Theme Guidelines

The application uses a strict theming system.

## Golden Rules

1. **NO Static Colors**:
   - ❌ `bg-red-500`
   - ❌ `text-[#ff0000]`
   - ❌ `border-gray-200`
   
   **ALWAYS** use theme variables:
   - ✅ `bg-destructive`
   - ✅ `text-destructive-foreground`
   - ✅ `border-border`

2. **All Colors Must Be Documented**:
   - If you need a new color, it **MUST** be added to the theme system properly.

## Adding a New Color

To add a new semantic color (e.g., `sidebar-bg`):

1. **Define it in `src/styles/theme/constants.css`** (if it's a global constant) or appropriate theme file.
2. **Add it to EVERY theme file**:
   - `src/styles/theme/light.css`
   - `src/styles/theme/dark.css`
   - `src/styles/theme/red.css`
   - ... and all others.
   
   *Even if the value is the same, it must be defined to avoid breakage when switching themes.*

3. **Map it in `src/styles/theme/tokens.css`**:
   ```css
   @theme {
     --color-sidebar-bg: var(--sidebar-bg);
   }
   ```

4. **Use it in code**:
   ```tsx
   className="bg-sidebar-bg"
   ```

## Allowed Colors (Tailwind Palette Only)

**Rule**: When defining color variables in CSS files, you **MUST** use values from the standard Tailwind CSS color palette.

- **Use This**: `#3b82f6` (Blue-500), `#1e293b` (Slate-800)
- **Do NOT Use**: `#3a81f5` (Random variation), `#123456` (Arbitrary hex)

Refer to the [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) documentation for the hex codes.
