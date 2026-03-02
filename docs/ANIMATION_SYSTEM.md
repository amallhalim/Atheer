# Animation System & Guidelines

This document outlines the architecture for CSS animations in Atheer, ensuring smooth, performant, and professional entrance effects across the portfolio.

---

## 📁 Structure

Animations are organized in `src/styles/animations/` to separate visual logic from core theme definitions:

- **`keyframes.css`**: Contains global `@keyframes` definitions. Use vendor prefixes (`-webkit-`) only for critical cross-browser compatibility.
- **`utilities.css`**: Contains higher-level utility classes that apply keyframes with specific timing, easing, and delays.

---

## 🚀 Usage

### 1. Global Animations
Animations are automatically imported via `globals.css` and are available as standard utility classes.

```html
<h1 class="tracking-in-contract-bck">Welcome</h1>
```

### 2. Sequential Entrance
To create a premium "staggered" feel, combine different utilities with delays defined in `utilities.css`.

| Element | Class | Delay | Effect |
| :--- | :--- | :--- | :--- |
| Primary Heading | `.tracking-in-contract-bck` | 0s | Tightening tracking |
| Sub-heading | `.focus-in-expand` | 0.4s | Blur to focus |
| Description / Bio | `.fade-in-bottom` | 0.8s | Slide up + fade |

---

## 🎨 Animation Catalogue

| Class | Description | Best For |
| :--- | :--- | :--- |
| `.tracking-in-contract-bck` | Letters start far apart/away, then fly in and tighten. | Main branding headers |
| `.focus-in-expand` | Starts blurry and cramped, then clears up and spreads out. | Taglines or secondary info |
| `.fade-in-bottom` | Smoothly slides up from below while fading in. | Body text, list items |
| `.amal` | Cycles background color between Cyan, Red, and Yellow. | Experimental/Testing |
| `.slide-in-right` | Entrance (Slide) | Sidebar tools, side-panels |
| `.scale-in-center` | Entrance (Scale) | Project cards, modal popups |
| `.blur-in` | Entrance (Soft) | Background images, subtle tooltips |

---

## 🛠️ Developer Guide

### How to Add a New Animation
1. **Define Keyframes**: Add the name and logic to `keyframes.css`.
2. **Create Utility**: Add the class name, animation name, duration, and easing to `utilities.css`.
3. **Optional Delays**: If this animation is part of a sequence, define a class with a `cubic-bezier` timing function and a specific delay.

### Guidelines
- **Duration**: Keep entrance animations between `0.4s` and `1.2s`.
- **Easing**: Use `cubic-bezier(0.215, 0.610, 0.355, 1.000)` for standard "out-back" feel.
- **Performance**: Animate `transform` and `opacity` whenever possible to ensure high frame rates. Avoid animating `margin` or `padding`.
- **Text Wrapping**: Use `whitespace-nowrap` on headings during `tracking` animations to prevent accidental multi-line wrapping as letters expand.

---

## 📁 Related Files
- [`src/styles/animations/keyframes.css`](../src/styles/animations/keyframes.css)
- [`src/styles/animations/utilities.css`](../src/styles/animations/utilities.css)
- [`docs/THEME_SYSTEM.md`](./THEME_SYSTEM.md)
