import Link from "next/link"

import ThemeSelector from "./ThemeSelector"


export default function Header() {
    return (
        <header className="fixed top-0 w-full flex items-center justify-between px-4 md:px-8 py-3 z-50 shrink-0 border-b border-border/40 bg-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/30">
            <Link href="/" className="group flex items-center gap-2.5">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <p className="text-black ">A</p>
                    <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="bg-linear-to-br from-foreground to-foreground/60 bg-clip-text text-transparent text-lg font-bold tracking-tight transition-colors duration-300 group-hover:from-primary group-hover:to-primary/70">
                    Atheer
                </span>
            </Link>
            <ThemeSelector />
        </header>
    )
}
