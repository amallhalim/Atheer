# ADR-001: Use Segment Arrays for Rich Text Content

**Date:** 2026-02-19
**Status:** Accepted

---

## Context

The ShortBio (and future features) need to render paragraphs where some words are styled differently — as hyperlinks, bold text, or plain text. We needed a data format that:

1. Works with static files today
2. Can be stored in a database later
3. Can be edited from a dashboard UI
4. Does not require the user to know any special syntax

---

## Options Considered

### Option A: Plain string with HTML
```ts
content: "I'm a <a href='...'>Frontend Developer</a> with..."
```
❌ Unsafe — requires `dangerouslySetInnerHTML`
❌ Not database-friendly

### Option B: Template strings with {tokens}
```ts
content: "I'm a {Frontend Developer} with..."
links: { "Frontend Developer": "https://..." }
```
❌ User must learn `{token}` syntax to add links
❌ Easy to make mistakes (typos break links silently)

### Option C: Segment arrays ✅ (chosen)
```ts
paragraphs: [
  [
    { type: "text", content: "I'm a " },
    { type: "link", content: "Frontend Developer", marks: [...] }
  ]
]
```
✅ No special syntax — dashboard UI generates this automatically
✅ Same format as TipTap, Notion, Contentful (industry standard)
✅ Easy to add new segment types (bold, italic, code) without breaking changes

---

## Decision

Use **segment arrays** (`TextSegment[][]`) as the data format for all rich-text fields.

---

## Consequences

- All rich-text components must handle `TextSegment[][]`, not plain strings
- The dashboard must include a rich text editor (recommended: TipTap) that outputs this format
- A converter function will be needed to transform TipTap's JSON output into our `BioParagraph[]` type
