
"use client"
import React, { useState } from 'react'

export default function NavLinks() {
    const links = [
        { name: 'About', id: 'shortBio' },
        { name: 'Experience', id: 'experienceSection' },
        { name: 'Projects', id: 'projects' }
    ];
    const [active, setActive] = useState('About');

    return (
        <nav aria-label="In-page jump links">
            <ul className='space-y-6'>
                {links.map(({ name, id }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={() => setActive(name)}
                            className={`nav-line flex items-center gap-4 text-xs font-bold uppercase ${active === name ? "active" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
