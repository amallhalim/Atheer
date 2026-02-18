"use client"

import { useEffect } from "react"

export default function Spotlight() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // 👇 Save current mouse position as Global CSS Variables (--mouse-x, --mouse-y)
            document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`)
            document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`)
        }
        //“Every time pointer moves, run handleMouseMove”
        window.addEventListener("pointermove", handleMouseMove)
        return () => window.removeEventListener("pointermove", handleMouseMove)
    }, [])

    return <div className="spotlight" />
}
