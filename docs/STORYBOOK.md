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

## 📁 Directory Structure

### ⚙️ `.storybook/` (Configuration)
This folder contains the core configuration for Storybook.

- **`main.ts`**: The main configuration file. It defines where to find stories and which addons to use.
- **`preview.ts`**: Configures how stories are rendered in the preview pane. It's used for global decorators, theme providers, and backgrounds.
- **`vitest.setup.ts`**: Specifies the setup for testing stories with Vitest.

### 🍱 `src/stories/` (Examples & Assets)
This folder contains example stories and assets used by Storybook.

- **`Button.stories.ts`, `Header.stories.ts`, `Page.stories.ts`**: Example story definitions for basic components.
- **`*.tsx` & `*.css`**: The components and styles that support the example stories.
- **`Configure.mdx`**: The documentation page that appears as the home page in the Storybook UI.
- **`assets/`**: Images and icons used in the documentation and examples.

---

## 📁 Structure & Conventions

### Story Locations
Stories can be located in two places:
1. **Alongside Components**: Recommended for project components.
   - `src/components/[ComponentName]/[ComponentName].stories.tsx`
2. **Dedicated Folder**: Used for global or example stories.
   - `src/stories/*.stories.ts`

### Naming Convention
Files must follow the `*.stories.ts` or `*.stories.tsx` pattern to be detected by Storybook.

---

## ✍️ Creating a New Story

To add a story for a new component, follow these steps:

1. **Create the file**: If you have a component `src/components/MyComponent.tsx`, create `src/components/MyComponent.stories.tsx`.
2. **Import types**: Import `Meta` and `StoryObj` from `@storybook/react`.
3. **Define metadata**: Use the `meta` object to define the component's title (how it appears in the sidebar) and the component itself.
4. **Define stories**: Create and export story objects representing different states (variants) of the component.

### Example Template

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button'; // Adjust path to your component

const meta: Meta<typeof Button> = {
  title: 'Components/Button', // Sidebar hierarchy
  component: Button,
  tags: ['autodocs'], // Enables automatic documentation page
  argTypes: {
    // Define controls for props here
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// The "Default" state of the component
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

// A "Secondary" variant
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

// A "Large" variant using a different prop
export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'lg',
  },
};
```

---

## 🛠️ Configuration Details

- **Addons**: Extended features like Accessibility (`@storybook/addon-a11y`), Interactions, and Docs are managed in `.storybook/main.ts`.
- **Theming**: If your component requires a Theme Provider (like `next-themes`), it should be added as a decorator in `.storybook/preview.tsx`.
