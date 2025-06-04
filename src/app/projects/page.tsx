import Link from "next/link";
import Image from "next/image";
import { projects } from "./data";

export const metadata = {
    title: "Projects - Ciampitti Lab",
    description: "Research projects and publications from the Ciampitti Lab at Purdue University.",
};

export default function Projects() {
    return (
        <div className="py-16">
            <div className="container-custom">
                {/* Page Header */}
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">Research Projects</h1>
                    <p className="text-lg text-purdue-secondary-gray2">
                        Explore our latest research projects and publications in digital agriculture and computer vision
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8 text-purdue-black">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all hover:shadow-md hover:border-gray-300"
                        >
                            {/* Hero Image */}
                            <div className="h-40 bg-gray-100 relative">
                                {project.heroImage && (
                                    <Image
                                        src={project.heroImage}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                )}
                                <div className="absolute top-3 left-3">
                                    <span className="bg-purdue-gold px-2 py-1 text-xs font-bold text-purdue-black rounded font-heading">
                                        {project.venue.short}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                    {project.title}
                                </h2>

                                {/* Authors */}
                                <div className="mb-3">
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {project.authors.map((author, index) => (
                                            <span key={index}>
                                                <span className="font-medium">{author.name}</span>
                                                <sup className="text-gray-500 ml-0.5">{author.sup}</sup>
                                                {index < project.authors.length - 1 && (
                                                    <span className="text-gray-400 mx-1">•</span>
                                                )}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="text-sm text-gray-600 italic mt-1">
                                        <sup className="text-gray-500 mr-1">1</sup>
                                        {project.affiliations[0].name}
                                    </p>
                                </div>

                                {/* Abstract */}
                                <p className="text-base text-gray-700 mb-4 leading-relaxed line-clamp-3">
                                    {project.abstract}
                                </p>

                                {/* View Project Link */}
                                <div className="pt-2 border-t border-gray-100">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center text-purdue-rush hover:text-purdue-rush/80 font-medium text-sm transition-colors"
                                    >
                                        View Project
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 