import React from 'react';
import SkillTags from '@/components/tags/SkillTags';
import skills from '@/static-data/skills';

export default function SkillsSection() {
    return (
        <div
            id="skillsSection"
            className="relative flex flex-col gap-8 p-6 rounded-3xl
             hover:bg-muted/30 border border-transparent
              hover:border-border transition-all duration-500 scroll-mt-12 lg:scroll-mt-24"
        >
            {skills.categories.map((category) => (
                <div key={category.title} className='flex flex-col gap-3 group'>
                    <h3 className='text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors'>
                        {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill: string) => (
                            <SkillTags key={skill} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
