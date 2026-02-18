"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'

export default function HoverImage({ url, title }: { url: StaticImageData | string, title: string }) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-slate-700/50 shadow-xl aspect-video">
            <Image
                src={url}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 bg-slate-950/20 group-hover:bg-transparent"
                quality={75}
            />
            {/* Glassy overlay */}
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
    )
}
