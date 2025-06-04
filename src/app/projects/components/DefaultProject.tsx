import Link from "next/link";
import { ProjectProps } from "../types";

export default function DefaultProject({ project }: ProjectProps) {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Back to Lab Button */}
            <div className="fixed top-6 left-6 z-10">
                <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Lab
                </Link>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                        {project.abstract}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <div className="text-6xl mb-4">🚧</div>
                    <h2 className="text-2xl font-bold mb-4">Project Page Template</h2>
                    <p className="text-gray-600 mb-6">
                        This is the default template. Create a custom component in{" "}
                        <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                            src/app/projects/components/
                        </code>{" "}
                        to customize this project&apos;s layout.
                    </p>
                    <div className="text-left max-w-2xl mx-auto">
                        <h3 className="font-semibold mb-2">Project Data:</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li><strong>Slug:</strong> {project.slug}</li>
                            <li><strong>Authors:</strong> {project.authors.map(a => a.name).join(", ")}</li>
                            <li><strong>Links:</strong> {project.links.length} configured</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 