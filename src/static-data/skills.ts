import { SkillsData } from "@/types/Skill";

// Grouped by category so the section reads as a capability overview,
// while the per-role skill lists in `experiences.ts` stay role-specific.
const skills: SkillsData = {
    categories: [
        {
            title: "Frontend",
            skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Ant Design", "Responsive UI"]
        },
        {
            title: "State & Data Management",
            skills: ["React Query", "Zustand", "Redux Toolkit", "React Hooks", "Context API", "REST APIs"]
        },
        {
            title: "Architecture & Performance",
            skills: ["Component Architecture", "SPA Architecture", "Design Systems", "Lazy Loading", "Code Splitting", "Web Performance", "SEO"]
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "Express.js", "MongoDB", "Firebase"]
        },
        {
            title: "Tools & Delivery",
            skills: ["Git", "GitHub", "GitLab", "Jenkins", "Jira", "Figma", "Agile / Scrum"]
        },
        {
            title: "AI-Assisted Development",
            skills: ["Cursor", "Claude Code", "Antigravity", "ChatGPT", "Gemini"]
        }
    ]
};

export default skills;
