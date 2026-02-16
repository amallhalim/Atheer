import React from 'react'

export default function NameSection() {
    return (
        <div className='flex flex-col justify-start '>
            <h1 className="text-6xl font-bold text-foreground">Amal Halim</h1>
            <h2 className="text-2xl font-semibold mt-2 text-foreground/80">Frontend Developer</h2>
            <p className="text-sm mt-4 text-muted-foreground max-w-xs">I build accessible, pixel-perfect digital experiences for the web.</p>
        </div>
    )
}
