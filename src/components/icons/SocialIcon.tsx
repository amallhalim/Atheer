/**
 * SocialIcon
 *
 * Renders a single social media platform icon by name.
 * - Pass `name` matching a platform key (case-insensitive).
 * - Pass `className` to control size and color (default: "w-5 h-5").
 * - Returns `null` for unknown platform names (no crash, no fallback icon).
 *
 */
import { SocialName } from "@/types/User";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaThreads,
    FaTiktok,
    FaYoutube,
    FaWhatsapp,
    FaTelegram,
    FaEnvelope,
    FaTwitter,
} from "react-icons/fa6";

interface SocialIconProps {
    name: SocialName;
    className?: string;
}

export default function SocialIcon({ name, className = "w-5 h-5" }:
    SocialIconProps) {

    switch (name.toLowerCase().trim()) {
        case "facebook": return <FaFacebook className={className} />
        case "github": return <FaGithub className={className} />
        case "linkedin": return <FaLinkedin className={className} />
        case "instagram": return <FaInstagram className={className} />
        case "threads": return <FaThreads className={className} />
        case "tiktok": return <FaTiktok className={className} />
        case "youtube": return <FaYoutube className={className} />
        case "whatsapp": return <FaWhatsapp className={className} />
        case "telegram": return <FaTelegram className={className} />
        case "x": return <FaTwitter className={className} />
        case "email": return <FaEnvelope className={className} />
        default: return null
    }
}
