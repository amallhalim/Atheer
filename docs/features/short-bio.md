# ShortBio Feature

A short bio that summarizes who the user is, what they do, and what they care about. It renders as a set of paragraphs where specific words or phrases can be styled as links, bold, or plain text.

---

## Current Behavior

- Renders the bio from `src/static-data/bio.ts`
- Each paragraph is an array of **segments**
- Each segment is either `text` (plain) or `link` (clickable)
- Links open in a new tab via the `ExternalLink` component

## File Structure

```
src/
├── static-data/
│   └── bio.ts          ← the actual bio content (edit this)
├── types/
│   └── Bio.ts          ← TypeScript types (shape of the data)
└── app/(pages)/(user)/[slug_title]/components/
    └── ShortBio.tsx    ← the component that renders it
```

## How Data Works

Each paragraph is stored as an ordered list of segments:

```ts
// Plain text
{ type: "text", content: "I'm a " }

// A hyperlink
{ type: "link", content: "React.js", marks: [{ type: "link", attrs: { href: "https://react.dev" } }] }
```

The `link()` helper in `bio.ts` keeps the data clean:
```ts
const link = (href: string) => [{ type: "link" as const, attrs: { href, target: "_blank" } }];

{ type: "link", content: "React.js", marks: link("https://react.dev") }
```

---

## Future: Dashboard Support

When a dashboard is added, users will be able to write their bio using a **rich text editor** (recommended: [TipTap](https://tiptap.dev)).

### How it will work

1. User types and formats their bio in the editor (select text → click Bold / Link)
2. TipTap outputs a JSON document automatically
3. A converter function transforms it into `BioParagraph[]`
4. The data is saved to the database and fetched via API

### Data the editor will support

| Format | Example | Stored as |
|:---|:---|:---|
| Plain text | `I'm a developer` | `{ type: 'text' }` |
| Hyperlink | `React.js` → link | `{ type: 'link', marks: [...] }` |
| Bold *(future)* | `**React.js**` | `marks: [{ type: 'bold' }]` |
| Italic *(future)* | `*React.js*` | `marks: [{ type: 'italic' }]` |

### To connect the API (when ready)

In `bio.ts`, replace the static export with a fetch call:

```ts
// Before (static):
const bio: BioData = { paragraphs: [...] }

// After (from API):
const bio: BioData = await fetch('/api/bio').then(r => r.json())
```

The `ShortBio.tsx` component does not need any changes — only the data source changes.

---

## To Update the Bio Now (Before Dashboard)

Edit `src/static-data/bio.ts` directly:
- **Add text** → `{ type: "text", content: "your text here" }`
- **Add a link** → `{ type: "link", content: "Label", marks: link("https://...") }`
- **Add a paragraph** → add a new `[...]` array to `paragraphs`
