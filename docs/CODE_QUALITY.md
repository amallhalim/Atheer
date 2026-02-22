# Code Quality & Linting Guide

To maintain the premium standard of the Atheer codebase, we use **ESLint 9** with a consolidated flat configuration. This ensures consistency, catches potential bugs early, and enforces React/Next.js best practices.

---

## 🛠️ ESLint Infrastructure

We use a unified configuration file: [**`eslint.config.mjs`**](../eslint.config.mjs). This single source of truth handles:
- **Core JavaScript**: Base rules for logical correctness.
- **TypeScript**: Strict type checking and TS-specific best practices.
- **React**: Hook usage validation and JSX security.
- **Next.js**: performance and SEO optimization rules (Core Web Vitals).

---

## ⚡ Available Commands

Run these commands from the project root to maintain code health:

### 1. Check for Issues
Identify all linting errors and warnings across the project.
```bash
npm run lint
```

### 2. Automatic Fix
Automatically repair basic formatting, syntax, and minor logic issues.
```bash
npm run lint:fix
```

---

## 📖 Key Rules & Overrides

While we follow industry standards, we have specific overrides for the Atheer project:

- **React in Scope**: Disabled `react-in-jsx-scope` as it is not required in Next.js.
- **Prop Types**: Disabled in favor of strict **TypeScript Interfaces** for better type safety.
- **Imports**: We encourage the use of absolute paths (e.g., `@/components/...`) for cleaner module resolutions.

---

## 🧠 Best Practices for Developers

1.  **Run before PRs**: Always run `npm run lint` before submitting a Pull Request.
2.  **IDE Integration**: We highly recommend installing the **ESLint extension** for VS Code to get real-time feedback while you type.
3.  **Fix early**: Use `npm run lint:fix` frequently to avoid a large backlog of formatting issues.

---

## 📂 Related Files
- [`eslint.config.mjs`](../eslint.config.mjs) - Main configuration
- [`package.json`](../package.json) - Tooling dependencies
- [`CONTRIBUTING.md`](../CONTRIBUTING.md) - Contribution workflow
