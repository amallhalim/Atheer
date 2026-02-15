// Move static data outside the component
import { Project } from "@/types";
import harmony from "./../app/assets/harmony.png";

const PROJECTS: Project[] = [
    {
        title: "Harmony — Cleaning Service Platform",
        description: "A comprehensive platform connecting cleaners with hosts. Features include real-time booking, admin dashboard, and separate apps for cleaners and hosts.",
        tech: ["React", "Material UI", "Firebase"],
        link: "https://harmony.com",
        images: [harmony], // Example multiple images
        year: "2024",
        type: "Web Application"
    }, {
        title: "Harmony — Cleaning Service Platform",
        description: "A comprehensive platform connecting cleaners with hosts. Features include real-time booking, admin dashboard, and separate apps for cleaners and hosts.",
        tech: ["React", "Material UI", "Firebase"],
        link: "https://harmony.com",
        images: [harmony, harmony], // Example multiple images
        year: "2024",
        type: "Web Application"
    },
    {
        title: "Harmony — Cleaning Service Platform",
        description: "A comprehensive platform connecting cleaners with hosts. Features include real-time booking, admin dashboard, and separate apps for cleaners and hosts.",
        tech: ["React", "Material UI", "Firebase"],
        link: "https://harmony.com",
        images: [harmony, harmony, harmony], // Example multiple images
        year: "2024",
        type: "Web Application"
    },
    {
        title: "QuickTask – Project Management Tool",
        description: "A streamlined project management tool designed for agile teams. Includes Kanban boards, sprint planning, and team analytics.",
        tech: ["Next.js", "Tailwind CSS", "Supabase"],
        link: "https://quicktask.com",
        images: [harmony, harmony, harmony, harmony, harmony, harmony],
        year: "2023",
        type: "SaaS Product"
    },
    {
        title: "AntikSmart – E-commerce for Antiques",
        description: "Niche e-commerce platform for high-value antiques with auction functionality and verified seller profiles.",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://antiksmart.com",
        images: [harmony, harmony, harmony, harmony, harmony, harmony],
        year: "2023",
        type: "E-Commerce"
    }
];

export default PROJECTS;