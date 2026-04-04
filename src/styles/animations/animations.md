# 🎬 Animation System

## Architecture

The animation system is split into **3 composable layers**:

```
┌─────────────────────┐   ┌────────────────────┐   ┌─────────────────────┐
│  1. ANIMATION CLASS │ + │  2. DELAY CLASS     │ + │  3. DURATION CLASS  │
│  (What happens)     │   │  (When it starts)   │   │  (How long it lasts)│
│                     │   │                     │   │                     │
│  .fade-in-bottom    │   │  .anim-delay-200    │   │  .anim-fast         │
│  .focus-in-expand   │   │  .anim-delay-400    │   │  .anim-normal       │
│  .tracking-in-...   │   │  .anim-delay-700    │   │  .anim-slow         │
└─────────────────────┘   └────────────────────┘   └─────────────────────┘
```

## Why This Pattern?

Previously, **duration and delay were hardcoded** inside each animation class:

```css
/* ❌ Old approach — not reusable */
.fade-in-bottom {
    animation: fade-in-bottom 0.6s ease 0.8s both;
    /*                        ^^^^       ^^^^       */
    /*                   duration=0.6s  delay=0.8s  */
}
```

**Problem:** If you wanted the same animation with a different delay or speed, you'd need to duplicate the entire class. This doesn't scale.

**Solution:** Keep a sensible default duration in the animation class, then override with utility classes:

```css
/* ✅ New approach — composable */
.fade-in-bottom { animation: fade-in-bottom 0.6s ease both; }  /* default */
.anim-delay-200 { animation-delay: 0.2s; }                     /* override delay */
.anim-fast      { animation-duration: 0.3s; }                  /* override speed */
```

---

## Files

| File | Purpose |
|------|---------|
| `keyframes.css` | `@keyframes` definitions (the raw animation steps) |
| `utilities.css` | Utility classes that apply keyframes + delay/duration overrides |

---

## Available Animations

| Class | Effect | Default Duration |
|-------|--------|-----------------|
| `.tracking-in-contract-bck` | Letters fly in from far apart and tighten | 1s |
| `.focus-in-expand` | Starts blurry and cramped, clears up | 0.8s |
| `.fade-in-bottom` | Slides up from below while fading in | 0.6s |

## Delay Classes

| Class | Delay |
|-------|-------|
| `.anim-delay-100` | 0.1s |
| `.anim-delay-200` | 0.2s |
| `.anim-delay-300` | 0.3s |
| `.anim-delay-400` | 0.4s |
| `.anim-delay-500` | 0.5s |
| `.anim-delay-600` | 0.6s |
| `.anim-delay-700` | 0.7s |

## Duration Classes

| Class | Speed |
|-------|-------|
| `.anim-fast` | 0.3s |
| `.anim-normal` | 0.6s |
| `.anim-slow` | 1s |

---

## Usage Examples

### Basic — single element
```html
<h1 class="fade-in-bottom">Hello</h1>
```

### Staggered entrance — multiple elements in a section
```html
<!-- Best practice: use ONE animation type per section, stagger with delays -->
<h1 class="fade-in-bottom">Name</h1>
<h2 class="fade-in-bottom anim-delay-200">Title</h2>
<p  class="fade-in-bottom anim-delay-200">Bio</p>
```

### Custom speed
```html
<h1 class="fade-in-bottom anim-slow">Slow dramatic entrance</h1>
<h2 class="fade-in-bottom anim-fast anim-delay-200">Quick follow-up</h2>
```

### Combining all three layers
```html
<div class="tracking-in-contract-bck anim-slow anim-delay-300">
    <!-- animation: tracking-in-contract-bck -->
    <!-- duration:  1s → overridden to 1s (anim-slow) -->
    <!-- delay:     0s → overridden to 0.3s -->
</div>
```

---

## Best Practices

1. **One animation type per section** — use the same animation for all elements within a section, differentiate only with delays
2. **Use delay classes for stagger** — don't use inline `style={{ animationDelay }}`, compose with `.anim-delay-*` classes
3. **Duration override is optional** — each animation has a sensible default; only override when needed
4. **Prefix with `anim-`** — avoids conflicts with Tailwind's `delay-*` / `duration-*` transition utilities
