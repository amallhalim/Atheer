// Move static data outside the component
import { Project } from "@/types";
const PROJECTS: Project[] = [
    {
        title: "Harmony – Cleaning Service Platform",
        description: "Engineered the React.js Frontend for the host website and Admin Dashboard, implementing role-based access controls. Served as Scrum Master, coordinating sprints to ensure timely delivery.",
        tech: ["React.js", "Material-UI", "Firebase"],
        link: "https://harmony.com", // Placeholder - adjust if real link known
        images: ["/assets/projects/harmony/harmony.avif"],
        year: "2023",
        type: "Web Application"
    },
    {
        title: "QuickTask / Sydetasker Rebranding",
        description: "Managed Localization and rebranding for the UK market. Integrated static content and dynamic blogs using Gatsby and React.js while ensuring zero downtime for production.",
        tech: ["React.js", "Gatsby", "Material-UI", "Firebase"],
        link: "",
        images: ["/assets/projects/quicktask/quicktask.png"],
        year: "2023",
        type: "SaaS Product"
    },
    {
        title: "Antiquesmart – Online Marketplace",
        description: "Implemented slug-based URLs for SEO-friendly product pages. Configured markup schema and Helmet tags for improved SEO compliance. Optimized performance via lazy-loading.",
        tech: ["React.js", "Node.js", "Firebase", "SEO"],
        link: "https://antiquesmart.com",
        images: ["/assets/projects/antiquesmart/antiquesmart3.avif"],
        year: "2023",
        type: "E-Commerce"
    },
    {
        title: "Comfy – Furniture Ecommerce (MERN)",
        description: "Built a full-stack furniture platform as a capstone project. Features secure authentication, shopping cart, product catalog, and an efficient Admin Dashboard for management.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "CSS3", "Bootstrap"],
        link: "https://comfy-frontend.vercel.app/",
        images: ["/assets/projects/comfy/comfy1.png"],
        year: "2023",
        type: "E-Commerce"
    }
];

export default PROJECTS;