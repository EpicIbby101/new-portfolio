import { StaticImageData } from "next/image";

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string;
    imageUrl: StaticImageData;
    projectUrl: string;
    githubUrl: string;
}