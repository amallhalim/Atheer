"use client"
import Image from 'next/image'
import React from 'react'
import harmony from "../../../../assets/harmony.png"

export default function Projects() {
    const projects = [
        {
            title: "Harmony — Cleaning Service Platform",
            description: "A comprehensive platform connecting cleaners with hosts. Features include real-time booking, admin dashboard, and separate apps for cleaners and hosts.",
            tech: ["React", "Material UI", "Firebase"],
            link: "https://harmony.com",
            image: harmony
        },
        {
            title: "QuickTask – Project Management Tool",
            description: "A streamlined project management tool designed for agile teams. Includes Kanban boards, sprint planning, and team analytics.",
            tech: ["Next.js", "Tailwind CSS", "Supabase"],
            link: "https://quicktask.com",
            image: harmony
        },
        {
            title: "AntikSmart – E-commerce for Antiques",
            description: "Niche e-commerce platform for high-value antiques with auction functionality and verified seller profiles.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "https://antiksmart.com",
            image: harmony
        }
    ]

    return (
        <div className='flex flex-col gap-12'>
            {projects.map((project, index) => (
                <div key={index} className='flex flex-col md:flex-row gap-6  cursor-default border-amber-300 border-2 '>
                    <Image
                        src={project.image}
                        alt={project.title}
                        className='group-hover:scale-105  flex-1 h-20 rounded-lg'
                        objectFit='cover'
                    />

                    <div className='flex-2 flex flex-col justify-between'>
                        <div>
                            <h3 className='font-bold text-xl text-slate-100  mb-2 group-hover:text-cyan-500  flex items-center gap-2'>
                                {project.title}
                            </h3>

                            <p className='text-slate-400  mb-4 text-sm'>
                                {project.description}
                            </p>

                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tech.map((t) => (
                                    <span key={t} className='text-xs font-medium px-2 py-1 rounded bg-cyan-500/300 text-cyan-300'>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Link (Optional, if you want a distinct button, but the whole card title is hoverable now) */}
                        {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className='inline-flex items-center text-sm font-medium text-slate-500 hover:text-cyan-500 transition-colors'>
                            Visit Project &rarr;
                        </a> */}
                    </div>
                </div>
            ))}
        </div>
    )
}
