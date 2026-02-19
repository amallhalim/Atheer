import Link from "next/link"
import { BsTwitter } from "react-icons/bs";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {

    const socialLinks = [
        { href: "https://github.com/amallhalim", icon: SiGithub, label: "GitHub" },
        { href: "https://twitter.com/amalhalim", icon: BsTwitter, label: "Twitter" },
        { href: "https://linkedin.com/in/amalhalim", icon: SiLinkedin, label: "LinkedIn" }
    ]
    const year = new Date().getFullYear();
    const githubLink = socialLinks.find((social) => social.label === "GitHub");
    const twitterLink = socialLinks.find((social) => social.label === "Twitter");
    return (
        <footer className="
        z-50 border-t border-border/40 
        flex flex-row  items-center 
        justify-between gap-3 px-4 md:px-2 py-2 
        text-xs md:text-sm
         ">
            <p className="text-[10px] tracking-tight text-muted-foreground">
                Built by{" "}
                <Link href={twitterLink?.href || "#"} target="_blank" className="font-bold text-foreground hover:text-primary transition-colors">Amal Halim</Link>
                . Code on <Link href={githubLink?.href || "#"} target="_blank" className="font-bold text-foreground hover:text-primary transition-colors">GitHub</Link>.
            </p>

            <div className="flex items-center gap-3">
                <p className="hidden text-[10px] text-muted-foreground md:block">
                    &copy; {year} Atheer
                </p>
                <div className="hidden h-3 w-px bg-border/40 md:block" />
                <div className="flex items-center gap-0.5">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <social.icon className="h-3.5 w-3.5" />
                            <span className="sr-only">{social.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
