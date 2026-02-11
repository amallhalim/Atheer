"use client"
import React from 'react'

export default function SocialLinks() {
    const socialLinks = [
        { name: "Twitter", url: "https://twitter.com/" },
        { name: "Facebook", url: "https://facebook.com/" },
        { name: "Instagram", url: "https://instagram.com/" },
        { name: "Linkedin", url: "https://linkedin.com/" },
    ]
    return (

        <ul
            className='flex flex-row space-x-2'
        >d

            {socialLinks?.map((link) => {
                return (
                    <li key={link.name} onClick={() => window.open(link?.url)} className="pl-1 link">{link.name}</li>
                )
            })}
        </ul>
    )
}
