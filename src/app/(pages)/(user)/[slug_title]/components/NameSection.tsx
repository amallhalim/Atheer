import React from 'react'

import { userData } from '@/static-data/userData'

export default function NameSection() {
    return (
        <div className='flex flex-col justify-start '>
            <h1 className="text-6xl font-bold text-foreground">{userData.displayName} </h1>
            <h2 className="text-2xl font-semibold mt-2 text-foreground/80">{userData.title}</h2>
            <p className="text-sm mt-4 text-muted-foreground max-w-xs">{userData.bio}</p>
        </div>
    )
}
