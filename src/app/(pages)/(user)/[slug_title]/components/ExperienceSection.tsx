import SkillTags from '@/components/tags/SkillTags';
import React from 'react';
import experiences from '@/static-data/experiences';

export default function ExperienceSection() {



    return (
        <div
            id="experienceSection"
            className="relative flex flex-col gap-8 p-6 rounded-3xl 
             hover:bg-muted/30 border border-transparent
              hover:border-border transition-all duration-500 scroll-mt-12 lg:scroll-mt-24"
        >
            {experiences.map((exp, index) => (
                <div key={index} className='flex flex-col md:flex-row gap-4 md:gap-8 group'>
                    {/* Date Section */}
                    <div className='flex-1'>
                        <span className='text-muted-foreground font-medium text-sm bg-muted px-3 py-1 rounded-full whitespace-nowrap'>
                            {exp.date}
                        </span>
                    </div>

                    {/* Content Section */}
                    <div className='flex-4'>
                        <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
                            {exp.title} · {exp.company}
                        </h3>
                        <p className='text-muted-foreground text-sm mb-4'>{exp.location}</p>

                        <ul className='list-custom'>
                            {exp.description.map((item: string) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill: string) => (
                                <SkillTags key={skill} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
