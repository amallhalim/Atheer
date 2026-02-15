import ExternalLink from "@/components/shared/ExternalLink";


const BIO_ITEMS =
{
    role: { name: "Frontend Developer", url: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" },
    react: { name: "React.js", url: "https://react.dev" },
    next: { name: "Next.js", url: "https://nextjs.org" },
    node: { name: "Node.js", url: "https://nodejs.org" },
    uiux: { name: "UI/UX optimization", url: "https://www.nngroup.com/articles/definition-user-experience/" },
    a11y: { name: "Web Accessibility (A11y)", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
    seo: { name: "SEO", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    agile: { name: "Agile", url: "https://www.atlassian.com/agile" }
};

export default function ShortBio() {
    return (
        <div className='flex flex-col gap-4 text-slate-400 leading-relaxed text-base md:text-lg'>
            <p>
                I’m a <ExternalLink name={BIO_ITEMS.role.name} url={BIO_ITEMS.role.url} /> with over 3 years of experience building scalable, responsive web applications using
                <ExternalLink name={BIO_ITEMS.react.name} url={BIO_ITEMS.react.url} />, Material-UI, and Ant Design.
                I specialize in crafting digital experiences that are both performance-optimized and user-centric.
            </p>
            <p>
                My expertise spans the full-stack, with a strong focus on <ExternalLink name={BIO_ITEMS.uiux.name} url={BIO_ITEMS.uiux.url} /> and performance enhancements.
                I’ve consistently delivered measurable improvements in page load times and user engagement by leveraging modern JavaScript and tools like
                <ExternalLink name={BIO_ITEMS.node.name} url={BIO_ITEMS.node.url} />.
            </p>
            <p>
                I am deeply committed to <ExternalLink name={BIO_ITEMS.a11y.name} url={BIO_ITEMS.a11y.url} /> and <ExternalLink name={BIO_ITEMS.seo.name} url={BIO_ITEMS.seo.url} />.
                Beyond coding, I enjoy mentoring fellow developers and thriving in <ExternalLink name={BIO_ITEMS.agile.name} url={BIO_ITEMS.agile.url} /> environments,
                always aiming to bridge the gap between technical complexity and intuitive design.
            </p>
        </div>
    )
}

