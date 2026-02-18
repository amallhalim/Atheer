import React from 'react'


export default function SkillTags({ skill }: { skill: string }) {
    return (
        <div className='px-4 py-1 bg-muted text-primary rounded-2xl text-sm font-medium'>{skill}</div>
    )
}
