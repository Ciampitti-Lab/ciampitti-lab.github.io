import Image from "next/image";
import { tools } from "./data";

export const metadata = {
    title: "Tools - Ciampitti Lab",
    description: "Interactive tools and applications developed by the Ciampitti Lab at Purdue University.",
};

export default function Tools() {
    return (
        <div className="py-16">
            <div className="container-custom">
                {/* Page Header */}
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">Tools</h1>
                    <p className="text-lg text-white">
                        Interactive tools and applications developed by our lab to support research in digital agriculture
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid lg:grid-cols-2 gap-8 text-purdue-black">
                    {tools.map((tool) => (
                        <a
                            key={tool.slug}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all hover:shadow-md hover:border-gray-300 group flex flex-col"
                        >
                            {/* Thumbnail */}
                            <div className="h-48 bg-gray-100 relative overflow-hidden bg-black">
                                {tool.thumbnail ? (
                                    <Image
                                        src={tool.thumbnail}
                                        alt={tool.title}
                                        width={600}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                        <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                )}
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                                {tool.tag && (
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-purdue-gold px-2 py-1 text-xs font-bold text-purdue-black rounded font-heading">
                                            {tool.tag}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purdue-rush transition-colors">
                                    {tool.title}
                                </h2>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    {tool.description}
                                </p>

                                <div className="pt-4 border-t border-gray-100 mt-auto">
                                    <span className="inline-flex items-center text-purdue-rush font-medium text-sm">
                                        Launch Tool
                                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
