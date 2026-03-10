# Storybook Guide 🎨

Storybook is used in **Atheer** to develop, document, and test UI components in isolation. It provides a sandbox environment where you can interact with components without worrying about application logic or data fetching.

---

## 🚀 Getting Started

### Run Storybook Locally
To start the Storybook development server, run:

```bash
npm run storybook
```

This will start Storybook on [http://localhost:6006](http://localhost:6006).

### Build for Production
To build a static version of Storybook (useful for deployment or sharing documentation):

```bash
npm run build-storybook
```

The output will be in the `storybook-static/` directory.

---

## 📁 Structure & Conventions

### Story Locations
Stories are located alongside their components or in a dedicated `src/stories` directory. 
- Component Stories: `src/components/[ComponentName]/[ComponentName].stories.tsx`
- Dedicated Stories: `src/stories/*.stories.ts`

### Naming Convention
Files should follow the `*.stories.ts` or `*.stories.tsx` pattern.

---

## ✍️ Creating a New Story

To add a story for a new component:

1. Create a file named `MyComponent.stories.tsx`.
2. Define the metadata and variants:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    label: 'Click Me',
  },
};
```

---

## 🛠️ Configuration
Storybook configuration is located in the `.storybook/` directory:
- `main.ts`: Main configuration (addons, framework, stories location).
- `preview.ts`: Global decorators and parameters (themes, backgrounds).
