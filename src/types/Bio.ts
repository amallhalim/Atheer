// The URL and target of a hyperlink
type Mark = {
    type: 'link';
    attrs: {
        href: string;
        target?: string;
    };
};

// A single piece of content: either plain text or a hyperlink with marks
export type TextSegment =
    | { type: 'text'; content: string }
    | { type: 'link'; content: string; marks: Mark[] };

// A paragraph is an ordered list of segments
export type BioParagraph = TextSegment[];

// The full bio data shape — designed to be fetched from an API
export interface BioData {
    paragraphs: BioParagraph[];
}
