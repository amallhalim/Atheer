# Naming Conventions

Consistent naming is crucial for code readability.

## Files & Directories

- **Components**: PascalCase (e.g., `ThemeSelector.tsx`, `UserProfile.tsx`).
- **Directories (Components)**: PascalCase (e.g., `components/UserProfile/`).
- **Utilities/Helpers**: kebab-case (e.g., `format-date.ts`) or camelCase (`formatDate.ts`) - *Prefer kebab-case for files*.
- **Styles**: kebab-case (e.g., `theme-dark.css`).
- **Next.js Routes**: kebab-case (e.g., `app/blog-posts/page.tsx`).

## Code

- **React Components**: PascalCase.
  ```tsx
  export default function UserProfile() { ... }
  ```
- **Functions**: camelCase.
  ```ts
  function calculateTotal() { ... }
  ```
- **Variables**: camelCase.
  ```ts
  const isActive = true;
  ```
- **Constants**: UPPER_SNAKE_CASE.
  ```ts
  const MAX_RETRY_COUNT = 3;
  ```
- **Types/Interfaces**: PascalCase.
  ```ts
  interface UserData { ... }
  ```

## CSS / Classes

- **Tailwind**: Utility-first.
- **Custom Classes**: kebab-case.
  ```css
  .nav-item-active { ... }
  ```
