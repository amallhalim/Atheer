import { BioData } from "@/types/Bio";

// Helper to create a link mark — keeps the data clean and DRY
const link = (href: string) => [{ type: "link" as const, attrs: { href, target: "_blank" } }];

// 🔄 Future: Replace this with fetch('/api/bio')
// The shape (BioData) stays the same — only the source changes.
const bio: BioData = {
    paragraphs: [
        [
            { type: "text", content: "I'm a " },
            { type: "link", content: "Frontend Developer", marks: link("https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer") },
            { type: "text", content: " with over 3 years of experience building scalable, responsive web applications using " },
            { type: "link", content: "React.js", marks: link("https://react.dev") },
            { type: "text", content: ", Material-UI, and Ant Design. I specialize in crafting digital experiences that are both performance-optimized and user-centric." }
        ],
        [
            { type: "text", content: "My expertise spans the full-stack, with a strong focus on " },
            { type: "link", content: "UI/UX optimization", marks: link("https://www.nngroup.com/articles/definition-user-experience/") },
            { type: "text", content: " and performance enhancements. I've consistently delivered measurable improvements in page load times and user engagement by leveraging modern JavaScript and tools like " },
            { type: "link", content: "Node.js", marks: link("https://nodejs.org") },
            { type: "text", content: "." }
        ],
        [
            { type: "text", content: "I am deeply committed to " },
            { type: "link", content: "Web Accessibility (A11y)", marks: link("https://www.w3.org/WAI/fundamentals/accessibility-intro/") },
            { type: "text", content: " and " },
            { type: "link", content: "SEO", marks: link("https://developers.google.com/search/docs/fundamentals/seo-starter-guide") },
            { type: "text", content: ". Beyond coding, I enjoy mentoring fellow developers and thriving in " },
            { type: "link", content: "Agile", marks: link("https://www.atlassian.com/agile") },
            { type: "text", content: " environments, always aiming to bridge the gap between technical complexity and intuitive design." }
        ]
    ]
};

export default bio;
