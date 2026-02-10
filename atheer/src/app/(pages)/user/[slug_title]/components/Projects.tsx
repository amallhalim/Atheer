"use client"
import Image from 'next/image'
import React from 'react'
import harmony from "../../../../assets/harmony.png"

export default function Projects() {
    const projects = [
        {
            title: "Harmony — Cleaning Service Platform",
            description: "Website, Admin Dashboard, Cleaner & Host Apps",
            tech: "React, Material UI, Firebase",
            link: "https://harmony.com",
            image: harmony
        },
        {
            title: "Harmony — Cleaning Service Platform",
            description: "Website, Admin Dashboard, Cleaner & Host Apps",
            tech: "React, Material UI, Firebase",
            link: "https://harmony.com",
            image: harmony
        },
        {
            title: "Harmony — Cleaning Service Platform",
            description: "Website, Admin Dashboard, Cleaner & Host Apps",
            tech: "React, Material UI, Firebase",
            link: "https://harmony.com",
            image: harmony
        },
        {
            title: "Harmony — Cleaning Service Platform",
            description: "Website, Admin Dashboard, Cleaner & Host Apps",
            tech: "React, Material UI, Firebase",
            link: "https://harmony.com",
            image: harmony
        },
        {
            title: "Harmony — Cleaning Service Platform",
            description: "Website, Admin Dashboard, Cleaner & Host Apps",
            tech: "React, Material UI, Firebase",
            link: "https://harmony.com",
            image: harmony
        },
    ]
    return (
        <div
            className='flex flex-col gap-10 '
        >
            {projects?.map((project, index) => {
                return (
                    <div key={index} className='flex flex-row  gap-5 ' >
                        <div className='flex-1' >
                            <Image src={project?.image} alt="test" className='border-xl hover:border-white hover:border-2' />
                        </div>
                        <div className='flex-3' >
                            <h3 className='font-semibold text-xl cursor-pointer mb-3'
                                onClick={() => { console.log("hello") }}>
                                {project?.title}</h3>


                            <p>{project?.description}</p>
                            <p>{project?.tech}</p>
                            <a href={project?.link} target="_blank">{project?.link}</a>
                        </div>

                    </div>
                )
            }
            )}
        </div>
    )
}
