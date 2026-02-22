# Features & Business Logic

Use this file to document specific business rules, feature workflows, and logic that isn't immediately obvious from the code.

## 🛠️ Implemented Features

### Theme System
**Status**: Completed
**Owner**: Atheer Team

#### Overview
A dynamic theming system allowing users to switch between multiple color themes (Light, Dark, Red, Green, etc.).

#### Business Rules
- Theme must persist on reload (`localStorage`).
- System preference should be detected initially if no preference is saved.
- Switching themes must not cause page reload.

#### Implementation Details
- Uses `next-themes` for state.
- CSS variables for colors.
- Tailwind for utility classes.

---

### Short Bio
**Status**: Completed
**Owner**: Atheer Team

#### Overview
A summarized bio of the user with interactive segments.
Detailed doc: [short-bio.md](./features/short-bio.md)

---

## 🏗️ Future Features

### Bento Grid Projects
- **Status**: Planning
- **Goal**: Break the linear project list with a modern Bento-style grid layout.

### CMD+K Command Menu
- **Status**: Planning
- **Goal**: Fast navigation and search using a command palette.
