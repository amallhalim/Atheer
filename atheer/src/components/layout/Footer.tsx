import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t border-border/40 py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-8 max-w-screen-2xl">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <Link
                        href="https://twitter.com/amalhalim"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
                    >
                        Amal Halim
                    </Link>
                    . The source code is available on{" "}
                    <Link
                        href="https://github.com/atheer"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
                    >
                        GitHub
                    </Link>
                    .
                </p>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Atheer. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
