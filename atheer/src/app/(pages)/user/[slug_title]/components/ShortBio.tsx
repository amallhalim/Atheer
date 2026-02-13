import ExternalLink from "@/components/shared/ExternalLink";


const BIO_ITEMS =
{
    role: { name: "Frontend Developer", url: "https://example.com" },
    react: { name: "React.js", url: "https://example.com" },
    next: { name: "Next.js", url: "https://example.com" },
    node: { name: "Node.js", url: "https://example.com" },
    uiux: { name: "UI/UX optimization", url: "https://example.com" },
    a11y: { name: "Web Accessibility (A11y)", url: "https://example.com" },
    seo: { name: "SEO", url: "https://example.com" },
    agile: { name: "Agile", url: "https://example.com" }
};

export default function ShortBio() {
    return (
        <div className='flex flex-col gap-4 text-slate-400 leading-relaxed text-base md:text-lg'>
            <p>
                I’m a <ExternalLink name={BIO_ITEMS.role.name} url={BIO_ITEMS.role.url} /> with over 3 years of experience crafting scalable web applications.
                I specialize in the JavaScript ecosystem, blending deep knowledge of
                <ExternalLink name={BIO_ITEMS.react.name} url={BIO_ITEMS.react.url} /> and <ExternalLink name={BIO_ITEMS.next.name} url={BIO_ITEMS.next.url} />
                on the frontend with robust backend solutions using
                <ExternalLink name={BIO_ITEMS.node.name} url={BIO_ITEMS.node.url} />.
            </p>
            <p>
                My passion lies in <ExternalLink name={BIO_ITEMS.uiux.name} url={BIO_ITEMS.uiux.url} /> and performance.
                I don&apos;t just write code; I care deeply about <ExternalLink name={BIO_ITEMS.a11y.name} url={BIO_ITEMS.a11y.url} /> and <ExternalLink name={BIO_ITEMS.seo.name} url={BIO_ITEMS.seo.url} />,
                ensuring that digital experiences are inclusive, discoverable, and pixel-perfect.
            </p>
            <p>
                Beyond technical skills, I value collaboration and continuous growth.
                I have experience mentoring developers and working in <ExternalLink name={BIO_ITEMS.agile.name} url={BIO_ITEMS.agile.url} /> environments, always aiming to bridge the gap between technical complexity and intuitive user design to build products that truly resonate with users.
            </p>
        </div>
    )
}

