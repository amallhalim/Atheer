
// A single group of related skills, e.g. "Frontend" or "Tooling"
export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface SkillsData {
    categories: SkillCategory[];
}
