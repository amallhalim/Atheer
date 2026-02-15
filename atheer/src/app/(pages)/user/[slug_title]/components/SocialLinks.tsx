"use client"
import React from 'react'
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function SocialLinks() {
    const socialLinks = [
        { name: "X", url: "https://twitter.com/", icon: <SiX className="w-4 h-4" /> },
        { name: "Facebook", url: "https://facebook.com/", icon: <SiFacebook className="w-4 h-4" /> },
        { name: "Instagram", url: "https://instagram.com/", icon: <SiInstagram className="w-4 h-4" /> },
        { name: "Linkedin", url: "https://linkedin.com/", icon: <SiLinkedin className="w-4 h-4" /> },
    ]
    return (
        <ul className='flex flex-row space-x-4 items-center'>
            {socialLinks.map((link) => (
                <li
                    key={link.name}
                    onClick={() => window.open(link.url, '_blank')}
                    className="link hover:scale-120"
                    title={link.name}
                >
                    {link.icon}
                </li>
            ))}
        </ul>
    )
}
