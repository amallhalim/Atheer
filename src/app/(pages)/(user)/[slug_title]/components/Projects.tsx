"use client"
import React from 'react'
import HoverImage from '@/components/image/HoverImage';
import PROJECTS from '@/static-data/Projects';
import { Project } from '@/types';
import TechLabal from '@/components/labal/TechLabal';



const ProjectCard = ({ project }: { project: Project }) => {
    const hasMultipleImages = project.images.length > 1;

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col lg:flex-row gap-8 p-6 rounded-3xl transition-all duration-500 hover:bg-muted/30 border border-transparent hover:border-border"
        >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            {/* Gallery Section */}
            <div className="flex flex-col  flex-1 gap-4 w-full lg:w-72 shrink-0">
                {/* Main Featured Image */}

                <HoverImage url={project.images[0]} title={project.title} />
                {/* Dynamic Secondary Thumbnails */}
                {hasMultipleImages && (
                    <div className="grid grid-cols-4 gap-2">
                        {project.images.slice(1, 4).map((img, i) => (
                            <div
                                key={i}
                                className="relative h-15 rounded-xl"
                            >
                                <HoverImage url={img} title={project.title} />
                            </div>
                        ))}
                        {project.images.length > 4 && (
                            <div className="bg-muted/80 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-muted-foreground">
                                +{project.images.length - 4}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-3 py-1">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-primary/10 text-primary border border-primary/20 uppercase">
                            {project.year}
                        </span>
                        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                            — {project.type}
                        </span>
                    </div>

                    <h3 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2 tracking-tight">
                        {project.title}

                    </h3>

                    <p className="text-muted-foreground/90 text-base leading-relaxed mb-4 max-w-2xl font-light">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((t) => (

                        <TechLabal key={t} skill={t} />
                    ))}
                </div>
            </div>
        </a>
    );
};

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col gap-4 scroll-mt-24">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}
