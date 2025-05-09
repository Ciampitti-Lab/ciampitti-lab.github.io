import Link from 'next/link';
import { pubData } from '@/lib/info_helper.server';

export default function Research() {
    return (
        <div className="py-16">
            <div className="container-custom">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Research</h1>
                    <p className="text-lg text-purdue-secondary-gray2 max-w-3xl mx-auto">
                        Exploring the intersection of digital technology and agricultural science to develop
                        innovative solutions for sustainable crop production.
                    </p>
                </div>

                {/* Research Areas Overview */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-10 text-center">Research Areas</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-purdue-black">
                        {/* Data Analysis */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-purdue-rush flex flex-col">
                            <h3 className="text-xl font-bold mb-4 min-h-[3.5rem]">Agricultural Data Analysis</h3>
                            <div className="flex-grow">
                                <p className="text-gray-600">
                                    Leveraging big data approaches to analyze field performance data, weather patterns,
                                    and crop responses to various management practices. We develop predictive models and
                                    decision support tools to help optimize agricultural operations.
                                </p>
                            </div>
                        </div>
                        {/* Farming Systems */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-purdue-rush flex flex-col">
                            <h3 className="text-xl font-bold mb-4 min-h-[3.5rem]">Crop Management Systems</h3>
                            <div className="flex-grow">
                                <p className="text-gray-600">
                                    Investigating innovative crop management strategies that enhance yield, quality, and
                                    sustainability. Our research focuses on optimizing inputs and management practices through
                                    a combination of traditional field research and digital agriculture approaches.
                                </p>
                            </div>
                        </div>
                        {/* Computer Vision */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-purdue-rush flex flex-col">
                            <h3 className="text-xl font-bold mb-4 min-h-[3.5rem]">Computer Vision in Agriculture</h3>
                            <div className="flex-grow">
                                <p className="text-gray-600">
                                    Using image recognition and processing techniques to monitor crop health, detect diseases,
                                    and measure plant growth parameters. Our computer vision research aims to automate the
                                    collection of plant phenotypic data and enable early detection of stress conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Collaboration CTA */}
                <div className="bg-purdue-black text-white p-8 md:p-12 rounded-xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Research Collaboration</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Interested in collaborating on research projects or learning more about our work?
                        We welcome partnerships with academic institutions, industry, and government agencies.
                    </p>
                    <Link href="/contact" className="btn-primary">Contact Us</Link>
                </div>
                {/* Publications */}
                <div id="publications" className="mt-16 scroll-mt-16">
                    <h2 className="text-3xl font-bold mb-10">Publications</h2>

                    <div className="space-y-6">
                        {pubData.map((publication) => (
                            <div key={publication.id} className="bg-white p-6 rounded-lg text-purdue-black shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold mb-2">{publication.title}</h3>
                                <p className="text-purdue-secondary-gray2 mb-2">{publication.authors}</p>
                                <div className="flex flex-wrap gap-x-6 text-sm">
                                    <span>{publication.journal}</span>
                                    <span>{publication.year}</span>
                                    <a
                                        href={`https://doi.org/${publication.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purdue-gold hover:underline"
                                    >
                                        <span className="text-purdue-rush">DOI: {publication.doi}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/publications" className="btn-secondary bg-white text-purdue-black">View All Publications</Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 