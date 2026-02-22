# Icons

How icon components are structured and used across the app.

---

## Folder

```
src/components/icons/
└── SocialIcon.tsx    ← renders a social media platform icon by name
```

---

## SocialIcon

Renders a single social media platform icon. Takes a platform `name` (case-insensitive) and optional `className` for sizing/color.

### Props

| Prop | Type | Default | Description |
|:---|:---|:---|:---|
| `name` | `string` | required | Platform name e.g. `"github"`, `"linkedin"` |
| `className` | `string` | `"w-5 h-5"` | Tailwind classes for size and color |

### Supported Platforms

`github` · `linkedin` · `facebook` · `instagram` · `threads` · `tiktok` · `youtube` · `whatsapp` · `telegram` · `x` · `email`

### Usage

```tsx
// Default size
<SocialIcon name="github" />

// Custom size
<SocialIcon name="linkedin" className="w-7 h-7" />

// Custom color
<SocialIcon name="x" className="w-5 h-5 text-primary" />
```

### Adding a New Platform

1. Install/find the icon in `react-icons`
2. Import it at the top of `SocialIcon.tsx`
3. Add a `case` to the switch:

```tsx
import { SiSnapchat } from "react-icons/si"

case "snapchat": return <SiSnapchat className={className} />
```

4. Add the platform to `userData.ts` links:

```ts
{ name: "snapchat", url: "https://snapchat.com/..." }
```
