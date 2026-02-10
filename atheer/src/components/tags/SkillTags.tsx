import React from 'react'


export default function SkillTags({ skill }: { skill: string }) {
    return (
        <div className='px-4 py-1 bg-green-700 text-white rounded-2xl text-sm'>{skill}</div>
    )
}
