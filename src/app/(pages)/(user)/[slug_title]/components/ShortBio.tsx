import ExternalLink from "@/components/shared/ExternalLink";
import bio from "@/static-data/bio";

export default function ShortBio() {
    return (
        <div id="shortBio" className='flex flex-col gap-4 text-muted-foreground leading-relaxed text-base md:text-lg scroll-mt-24'>
            {bio.paragraphs.map((paragraph, i) => (
                <p key={i}>
                    {paragraph.map((segment, j) =>
                        segment.type === 'link'
                            ? <ExternalLink key={j} name={segment.content}
                                url={segment.marks[0].attrs.href} />
                            : <span key={j}>{segment.content}</span>
                    )}
                </p>
            ))}
        </div>
    );
}
