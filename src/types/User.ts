
export type SocialName =
    "facebook"
    | "github"
    | "linkedin"
    | "instagram"
    | "threads"
    | "tiktok"
    | "youtube"
    | "whatsapp"
    | "telegram"
    | "x"
    | "email";

export type UserData = {
    firstName: string,
    lastName: string,
    displayName: string,
    title: string,
    bio: string
    links: {
        name: SocialName,
        url: string
    }[]
}