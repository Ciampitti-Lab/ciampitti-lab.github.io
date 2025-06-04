export interface Author {
    name: string;
    affiliation: string;
    sup: string;
}

export interface Affiliation {
    id: string;
    name: string;
}

export interface ProjectLink {
    type: string;
    icon: string;
    url: string;
}

export interface Project {
    slug: string;
    title: string;
    authors: Author[];
    affiliations: Affiliation[];
    abstract: string;
    venue: {
        short: string;      // e.g., "CVPRW V4A 2025"
        full: string;       // e.g., "CVPR Workshop Vision for Agriculture 2025"
    };
    links: ProjectLink[];
    heroImage?: string;
    heroVideo?: string;
}

export interface ProjectProps {
    project: Project;
} 