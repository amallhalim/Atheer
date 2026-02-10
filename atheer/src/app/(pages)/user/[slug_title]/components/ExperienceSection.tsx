import SkillTags from '@/components/tags/SkillTags';
import React from 'react'

export default function ExperienceSection() {
    const skills = ["javascript", "react", "node.js", "firebase", "material-ui", "ant design", "html", "css", "git", "github", "agile", "scrum", "jenkins"] as const;
    return (
        <div
            className='flex'
        >


            <div className=' flex-1 '>
                <span>08/2023 – present </span>

            </div>
            <div className=' flex-3 border-amber-400'>

                <span>Zetaton , Full Stack Developer</span>
                <span>Milwaukee, WI, USA</span>

                •Full Stack Developer at a software house, contributing to multiple client and internal projects, primarily
                on Frontend development while performing some backend tasks as needed.
                •Created and maintained Frontend applications using React, Material-UI, Ant Design, with supportive
                backend work using Node.js and Firebase.

                •Guided development for projects like QuickTask, TubleTick, AntikSmart, and Harmony, implementing
                UI/UX enhancements, responsive design, and Single-Page Applications (SPA) architecture.

                •Mentored 4 junior developers, conducted code reviews, and maintained scalable, maintainable Frontend
                architecture within Agile teams.

                •Optimized application performance by lazy-loading components, reducing page load times, and removing
                unused packages, improving overall user experience.

                •Supported manual and Jenkins-based releases and deployments, maintaining technical documentation.

                •Contributed to the hiring process by reviewing candidate applications, participating in technical interviews,
                and assisting in onboarding new developers.

                <br />
                skills::
                <div className="flex flex-row flex-wrap gap-1 mt-2">

                    {skills?.map((skill) => {
                        return <SkillTags key={skill} skill={skill} />
                    })}
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
