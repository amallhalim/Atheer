# Documentation Policy

To keep the project maintainable, documentation must be treated as part of the code.

## 1. Architecture Updates
**Rule**: Any significant architectural change or new package installation MUST be documented in `ARCHITECTURE.md`.

- **Significant Changes**:
    - Adding a new library (e.g., State Management, Form Library).
    - Changing the folder structure.
    - Introducing a new pattern (e.g., moving from Context to Redux).
    - Changing the build process.

## 2. Feature Documentation
**Rule**: All business logic and feature specifications must be documented in `docs/FEATURES.md`.

- **What to Document**:
    - Complex business rules (e.g., "Users can only edit posts within 5 minutes").
    - Data flow for specific features.
    - Assumptions made during implementation.

## 3. Code Comments
- **Explain WHY, not WHAT**.
- Complex algorithms must have block comments explaining the logic.
