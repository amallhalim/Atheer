import SkillTags from '@/components/tags/SkillTags';
import React from 'react';

export default function ExperienceSection() {

    const experiences = [
        {
            date: "08/2023 – Present",
            title: "Full Stack Developer",
            company: "Zetaton",
            location: "Milwaukee, WI, USA (Remote)",
            description: [
                "Contribute to multiple client and internal projects, primarily on Frontend development while performing backend tasks as needed.",
                "Create and maintain applications using React, Material-UI, Ant Design, Node.js, and Firebase.",
                "Guided development for projects like QuickTask, TubleTick, AntikSmart, and Harmony, implementing UI/UX enhancements and SPA architecture.",
                "Mentored 4 junior developers, conducted code reviews, and maintained scalable Frontend architecture within Agile teams.",
                "Optimized performance by lazy-loading components and removing unused packages, improving page load times.",
                "Supported Jenkins-based releases and contributed to the technical hiring and onboarding process."
            ], skills: ["javascript", "react", "node.js", "firebase", "material-ui", "ant design", "html", "css", "git", "github", "agile", "scrum", "jenkins"]
        }
    ];

    return (
        <div
            className="relative flex flex-col gap-8 p-6 rounded-3xl 
             hover:bg-slate-800/20 border border-transparent
              hover:border-slate-700/50"
        >
            {experiences.map((exp, index) => (
                <div key={index} className='flex flex-col md:flex-row gap-4 md:gap-8 group'>
                    {/* Date Section */}
                    <div className='flex-1'>
                        <span className='text-slate-500 font-medium text-sm bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap'>
                            {exp.date}
                        </span>
                    </div>

                    {/* Content Section */}
                    <div className='flex-4'>
                        <h3 className='text-xl font-bold text-slate-100 group-hover:text-cyan-500 '>
                            {exp.title} · {exp.company}
                        </h3>
                        <p className='text-slate-500 text-sm mb-4'>{exp.location}</p>

                        <ul className='list-custom'>
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                                <SkillTags key={skill} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
