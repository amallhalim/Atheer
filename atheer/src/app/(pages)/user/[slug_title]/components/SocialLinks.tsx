"use client"
import React from 'react'
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export default function SocialLinks() {
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/amallhalim", icon: <SiGithub className="w-6 h-6" /> },
        { name: "Linkedin", url: "https://linkedin.com/in/amal-halim", icon: <SiLinkedin className="w-6 h-6" /> },
        { name: "Gmail", url: "mailto:amalhalim888@gmail.com", icon: <SiGmail className="w-6 h-6" /> },
    ]
    return (
        <ul className='flex flex-row space-x-6 items-center'>
            {socialLinks.map((link) => (
                <li
                    key={link.name}
                    onClick={() => window.open(link.url, '_blank')}
                    className="link hover:scale-120"
                    title={link.name}
                    aria-label={link.name}
                >
                    {link.icon}
                </li>
            ))}
        </ul>
    )
}
