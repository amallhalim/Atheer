
"use client"
import React, { useState } from 'react'

export default function NavLinks() {
    const links = ['About', 'Experience', 'Projects'];
    const [activeLink, setActiveLink] = useState('About');
    return (

        <ul className='space-y-2'>
            {links.map((link) => {
                return (
                    <li key={link}
                        className={`nav-line ${activeLink === link ? "active" : ""}`}
                        onClick={() => setActiveLink(link)}
                    >
                        <span className="ml-2" >  {link}</span>
                    </li>
                )
            })}



        </ul >


    )
}
