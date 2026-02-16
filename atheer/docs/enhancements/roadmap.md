# Portfolio Enhancement Roadmap

This document outlines the suggested improvements for the portfolio based on a senior developer review.

## 🎨 Design & UI
- [ ] **Spacing Balance**: In `Projects.tsx`, increase the gap between the `year/type` badge and the `title` for better readability.
- [ ] **Visual Consistency**: Unify the "Card" design between `ExperienceSection` and `ProjectCard` (same hover effects, padding, and border styles).
- [ ] **Mobile Layout Fix**: Verify the `flex-row md:flex-col` change in `page.tsx`. Usually, a mobile-first approach uses `flex-col md:flex-row` for side-by-side layouts on desktop.
- [ ] **Scrollbar Styling**: Add custom CSS scrollbar styling for the right-hand section to match the slate/cyan theme (since it's currently hidden with `none`).

## 🚀 User Experience (UX)
- [ ] **Adaptive Padding**: Replace fixed `px-[15%]` with responsive padding or a `max-w` container to prevent the layout from becoming too narrow on tablets.
- [ ] **Project Gallery Interactivity**: Make secondary thumbnails in `ProjectCard` clickable or implement a lightbox for viewing high-res screenshots.
- [ ] **Smooth Scrolling**: Ensure `scroll-behavior: smooth` is applied globally for the anchor navigation.
- [ ] **Loading States**: Add a skeleton loader or a subtle fade-in animation when the page first loads.

## 🛠️ Code Quality (Clean Code)
- [ ] **Unique Keys**: Replace `key={index}` with unique identifiers like `key={exp.title}` or `key={project.title}` in all map functions.
- [ ] **Tailwind DRYness**: Extract repeated card styles (glow effects, borders) into a single reusable component or a CSS utility class.
- [ ] **Image Optimization**: Use Next.js `placeholder="blur"` for project images to improve the perceived performance.
- [ ] **Code Cleanup**: Remove redundant empty lines in `ExperienceSection.tsx` and other components to maintain a tight codebase.

## 🔍 SEO & Accessibility
- [ ] **Dynamic Metadata**: Use Next.js `generateMetadata` to set unique page titles and descriptions based on the user's profile data.
- [ ] **ARIA Labels**: Add `aria-label` to `SocialLinks` and `NavLinks` for better screen reader support.
- [ ] **Semantic HTML**: Ensure section titles use appropriate heading levels (`h2`, `h3`) across all components.

## 💡 New Suggestions
- [ ] **Motion Enhancements**: Integrate `framer-motion` for subtle entry animations (e.g., items sliding in from the bottom).
- [ ] **Analytics**: Integrate a lightweight analytics tool (like Vercel Analytics or Plausible) to track visitor engagement.
- [ ] **Theme Switcher**: Consider adding a Light/Dark mode toggle (though the current dark theme is very premium).
