# Component Guidelines

## Reusability Principles

1. **DRY (Don't Repeat Yourself)**: If code appears in 3+ places, extract it into a component or hook.
2. **Single Responsibility**: A component should do one thing well. Break complex components into smaller sub-components.

## Component Structure

```tsx
// Imports
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Interfaces
interface MyComponentProps {
  title: string;
  isActive?: boolean;
  children: ReactNode;
}

// Component Definition
export default function MyComponent({ title, isActive = false, children }: MyComponentProps) {
  // Logic
  
  // Render
  return (
    <div className={cn("base-class", isActive && "active-class")}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
```

## Rules

1. **Props Interface**: EVERY component must have a clearly defined interface for its props. Avoid `any`.
2. **No Hardcoded Strings**: Use constants or configuration files for text that might change or need translation.
3. **No Static Colors**: NEVER use `bg-red-500` or `#ff0000`. ALWAYS use theme variables (e.g., `bg-primary`, `text-muted`).
4. **Composition over Inheritance**: Use `children` prop to compose UI elements.
5. **No Inline Styles**: Avoid using the `style` prop.
   - ❌ `<div style={{ marginTop: '10px' }}>`
   - ✅ `<div className="mt-2.5">`
   - *Exception*: Dynamic values that cannot be represented by classes (e.g., coordinates, user-defined colors), though CSS variables are preferred.
