# Folder Structure Guidelines

The project follows a strict folder structure to ensure scalability and maintainability.

## `src/` Directory Layout

### `app/`
Contains the Next.js App Router pages and layouts.
- **Rule**: strict file routing.
- **Rule**: `page.tsx`, `layout.tsx`, `loading.tsx` only.
- **Rule**: Colocate simple, page-specific components if they are NOT reused.

### `components/`
Contains reusable UI components.
- **`ui/`**: Shadcn/Radix primitives (Buttons, Inputs, etc.).
- **`layout/`**: Structural components (Navbar, Footer, Sidebar).
- **`features/`**: Feature-specific components (e.g., `features/auth/LoginForm.tsx`).
- **`shared/`**: widely reused common components.

### `styles/`
Follows a simplified 7-1 pattern:
- **`base/`**: Global resets and typography.
- **`components/`**: Component-specific overrides.
- **`theme/`**: Theme definitions (light.css, dark.css, etc.).
- **`utils/`**: Mixins or helpers.

### `lib/`
Utility functions, hooks, and shared logic.
- **`utils.ts`**: Common helper functions (cn, etc.).
- **`hooks/`**: Custom React hooks.

### `types/`
Global TypeScript definitions and interfaces.

## Rules
1. **No random files** in the root of `src/`.
2. **Assets** go in `public/` (images, fonts).
3. **New Features** should try to group related files (colocation) where possible, or follow the breakdown above.
