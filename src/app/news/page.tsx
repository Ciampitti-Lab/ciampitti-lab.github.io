
import Link from 'next/link';
import { newsData } from '@/lib/info_helper.server';

export default function News() {

    return (
        <div className="py-16">
            <div className="container-custom">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">News & Blog</h1>
                    <p className="text-lg text-purdue-secondary-gray2">Latest updates, research findings, and events from the Ciampitti Lab</p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-8 font-heading text-purdue-secondary-gray2">
                    <button className="px-4 py-2 rounded-full bg-purdue-black text-white text-sm font-medium">All</button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200">Research</button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200">Data Analysis</button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200">Computer Vision</button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200">Events</button>
                </div>

                {/* Blog Posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-purdue-black">
                    {newsData.map((post: any) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
                            <div className="h-48 bg-purdue-secondary-gray2 relative">
                                {/* Image placeholder - replace with actual images */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    <p>Image Placeholder</p>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-purdue-gold px-2 py-1 text-xs font-bold text-purdue-black rounded font-heading">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-sm text-gray-500">{post.date}</span>
                                <h3 className="text-xl font-bold mt-1 mb-2">{post.title}</h3>
                                <p className="text-purdue-secondary-gray2 mb-4">{post.excerpt}</p>
                                <Link href={`/news/${post.id}`} className="text-purdue-rush hover:underline font-medium font-heading text-bold">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 