
"use client"
import React, { useState } from 'react'

export default function NavLinks() {
    const links = ['About', 'Experience', 'Projects'];
    const [activeLink, setActiveLink] = useState('About');
    console.log(activeLink);
    return (

        <ul
            className='space-y-2 '

        >
            {links.map((link) => {
                return (
                    <li key={link}
                        className={`before:content-[''] before:bg-white before:inline-block before:align-middle before:h-0.5 before:w-8 hover:before:w-15
                            ${activeLink === link ? "before:w-15" : "before:w-8"}`}
                        onClick={() => setActiveLink(link)}
                    >
                        <span className='ml-2 ' >  {link}</span>
                    </li>
                )
            })}



        </ul >


    )
}
