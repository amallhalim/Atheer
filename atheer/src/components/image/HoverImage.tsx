"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'

export default function HoverImage({ url, title }: { url: StaticImageData, title: string }) {
    return (
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-700/50 shadow-xl  ">
            <Image
                src={url}
                alt={title}
                fill
                className="object-cover transition-transform duration-700
                 group-hover:scale-105 
                  bg-slate-950/20 group-hover:bg-transparent 
                 "
            />
            {/* Glassy overlay */}
            <div className="absolute  bg-slate-950/20 group-hover:bg-transparent " />
        </div>
    )
}
