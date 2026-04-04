# Contributing to Atheer 🤝

First off — thank you for taking the time to contribute! Whether you're fixing a typo, reporting a bug, or proposing a new feature, every contribution makes Atheer better.

---

## Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How to Report a Bug](#-how-to-report-a-bug)
- [How to Request a Feature](#-how-to-request-a-feature)
- [Development Setup](#️-development-setup)
- [Branch & Commit Conventions](#-branch--commit-conventions)
- [Pull Request Process](#-pull-request-process)
- [Code Style & Quality](#-code-style--quality)

---

## 📜 Code of Conduct

Be kind and constructive. We follow a simple rule: **critique code, not people.**
Disrespectful or abusive interactions will not be tolerated.

---

## 🐛 How to Report a Bug

Before opening a bug report, please:

1. **Search existing issues** — it may already be reported.
2. **Reproduce it** — confirm it happens on a clean install.

When you open the issue, include:

| Field | What to include |
|:---|:---|
| **Description** | A clear summary of what went wrong |
| **Steps to Reproduce** | Numbered steps starting from scratch |
| **Expected Behavior** | What you expected to happen |
| **Actual Behavior** | What actually happened |
| **Environment** | Node version, OS, browser, screen size |
| **Screenshots / Logs** | Console errors, screenshots, or a screen recording |

> [!TIP]
> Add the `bug` label when creating the issue so it gets triaged faster.

---

## 💡 How to Request a Feature

When opening a feature request, please answer:

1. **What problem does this solve?** Frame it as a user need, not a solution.
2. **What is your proposed solution?** Describe the expected behavior.
3. **Are there alternatives?** Any other approaches you considered?
4. **Mockups or references?** Links, sketches, or screenshots are very helpful.

> [!NOTE]
> Features that align with the project roadmap are more likely to be accepted quickly.
> See [`docs/ROADMAP.md`](./docs/ROADMAP.md) for the current vision.

---

## 🛠️ Development Setup

### Requirements

- **Node.js**: >= 18.x
- **npm**: >= 9.x
- **Git**

### Steps

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/atheer.git
cd atheer

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → http://localhost:3000

# 4. Run lint before committing
npm run lint
```

> [!IMPORTANT]
> Always branch off `main` and never commit directly to it.

---

## 🌿 Branch & Commit Conventions

### Branch Naming

```
feat/short-description       # new feature
fix/short-description        # bug fix
docs/short-description       # documentation only
refactor/short-description   # code improvement, no behavior change
chore/short-description      # tooling, config, dependency updates
```

**Examples:**
```
feat/spotlight-cursor-effect
fix/mobile-sidebar-overflow
docs/update-architecture-notes
```

### Commit Messages

We follow **Conventional Commits**:

```
<type>(<optional scope>): <short summary>
```

| Type | When to use |
|:---|:---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation change |
| `style` | Formatting, no logic change |
| `refactor` | Code restructure, no behavior change |
| `perf` | Performance improvement |
| `chore` | Build process, dependency updates |

**Examples:**
```
feat(button): add glass variant with backdrop-blur
fix(sidebar): prevent overflow on small screens
docs(architecture): add key design decision notes
```

---

## 📬 Pull Request Process

1. **Sync with main** before pushing:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Open a PR** with a clear title and description:
   - What changed and why
   - Screenshots or GIFs for any visual changes
   - Link related issues with `Closes #123`

3. **Checklist before submitting:**
   - [ ] `npm run lint` passes with no errors
   - [ ] UI looks correct on desktop and mobile
   - [ ] No `console.log` or debug code left behind
   - [ ] TypeScript has no errors (`npx tsc --noEmit`)
   - [ ] Commit messages follow the convention above

> [!WARNING]
> PRs that break the build or introduce TypeScript errors will be blocked from merging until fixed.

---

## 🧹 Code Style & Quality

- **TypeScript**: Strict mode is on. Avoid `any` — use proper types or generics.
- **Components**: Atomic/reusable components go in `src/components/shared/`. Page-specific ones go in their own named folder.
- **Styling**: Tailwind utilities first. If a pattern repeats across 3+ components, extract it with `@apply` in a CSS file.
- **Icons**: `lucide-react` for UI icons. `react-icons/si` for brand logos only.
- **No magic numbers**: Use CSS variables or Tailwind tokens instead of hardcoded pixel values.
- **No direct hex colors**: Always use theme variables (e.g., `text-primary`, `bg-surface`).

For deeper context read:
- [Architecture Guide & Notes](./docs/ARCHITECTURE.md)
- [Theme System](./docs/THEME_SYSTEM.md)
- [Code Quality Standards](./docs/CODE_QUALITY.md)

---

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](./LICENSE).

---

*Thanks for contributing — you're awesome! 🚀*
