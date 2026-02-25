import React from 'react'
import { Badge } from '@/components/ui/badge'

export default function SkillTags({ skill }: { skill: string }) {
    return (
        <Badge variant="secondary" className="px-4 py-1 rounded-2xl text-sm font-medium">
            {skill}
        </Badge>
    )
}
