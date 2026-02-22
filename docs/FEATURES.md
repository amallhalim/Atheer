# Features & Business Logic

Use this file to document specific business rules, feature workflows, and logic that isn't immediately obvious from the code.

## Template

### [Feature Name]
**Status**: [Draft / In Progress / Completed]
**Owner**: [Name]

#### Overview
Brief description of the feature.

#### Business Rules
1. Rule 1...
2. Rule 2...

#### Implementation Details
- Key components involved.
- Data flow description.

---

## Implemented Features

*(Add features here as they are developed)*

### Theme System
**Status**: Completed
**Owner**: Atheer Team

#### Overview
A dynamic theming system allowing users to switch between multiple color themes (Light, Dark, Red, Green, etc.).

#### Business Rules
- Theme must persist on reload (localStorage).
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
