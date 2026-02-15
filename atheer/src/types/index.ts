import { StaticImageData } from 'next/image';

export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    images: StaticImageData[];
    year: string;
    type: string;
}
