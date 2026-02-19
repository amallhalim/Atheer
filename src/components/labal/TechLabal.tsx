import React from 'react'

export default function TechLabal({ key, skill }:
    { key: string, skill: string }) {
    return (
        <span
            key={key}
            className="text-[11px] font-medium px-3 py-1 rounded-lg bg-muted/40 text-muted-foreground border border-border group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 transform group-hover:translate-y-[-2px]"
        >
            {skill}
        </span>
    )
}
