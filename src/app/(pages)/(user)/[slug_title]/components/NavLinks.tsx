
"use client"
import React, { useState, useMemo } from 'react'

export default function NavLinks() {
    const links = useMemo(() => [
        { name: 'About', id: 'shortBio' },
        { name: 'Experience', id: 'experienceSection' },
        { name: 'Projects', id: 'projects' }
    ], []);
    const [active, setActive] = useState('About');



    return (
        <nav aria-label="In-page jump links">
            <ul className='space-y-4'>
                {links.map(({ name, id }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                setActive(name);
                            }}
                            className={`nav-line flex items-center gap-4 text-xs font-bold uppercase transition-all duration-300 ${active === name ? "active text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
