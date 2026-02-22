"use client"
import { userData } from '@/static-data/userData';
import SocialIcon from '@/components/icons/SocialIcon';

export default function SocialLinks() {
    return (
        <ul className='flex flex-row flex-wrap gap-4 items-center' aria-label="Social media links">
            {userData.links.map((link) => (
                <li key={link.url}>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 block"
                        title={link.name}
                        aria-label={link.name}
                    >
                        <SocialIcon name={link.name} />
                    </a>
                </li>
            ))}
        </ul>
    )
}
