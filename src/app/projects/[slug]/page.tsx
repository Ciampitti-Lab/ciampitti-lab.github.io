import { notFound } from "next/navigation";
import { projects } from "../data";
import DefaultProject from "../components/DefaultProject";
import MaizeEarSensing from "../components/MaizeEarSensing";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata(props: ProjectPageProps) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: project.title,
        description: project.abstract,
    };
}

export default async function ProjectPage(props: ProjectPageProps) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    // Render different project components based on slug
    switch (project.slug) {
        case "maize-ear-sensing":
            return <MaizeEarSensing project={project} />;
        // Add your custom project components here
        // case "your-project-slug":
        //     return <YourProject project={project} />;
        default:
            return <DefaultProject project={project} />;
    }
} 