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
