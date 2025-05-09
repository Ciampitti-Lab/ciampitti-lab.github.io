'use client';

import Link from 'next/link';

export default function About() {
    return (
        <div className="py-16">
            <div className="container-custom">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Our Lab</h1>
                    <p className="text-lg text-purdue-secondary-gray2 max-w-3xl mx-auto">
                        The Ciampitti Lab focuses on digital agriculture research, combining computer vision,
                        data analysis, and traditional crop management systems to advance sustainable agriculture.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-purdue-secondary-gray2 mb-4">
                            At the Ciampitti Lab, our mission is to develop innovative digital agriculture solutions
                            that enable more efficient, sustainable, and productive farming practices. We leverage
                            cutting-edge technologies in computer vision, machine learning, and data analytics,
                            while maintaining a strong foundation in traditional crop science and management systems.
                        </p>
                        <p className="text-purdue-secondary-gray2 mb-4">
                            Our interdisciplinary approach brings together experts from agronomy, computer science,
                            engineering, and data science to address complex challenges in modern agriculture.
                            Through collaborative research and engagement with industry partners, we aim to bridge
                            the gap between academic innovation and practical applications in the field.
                        </p>
                        <p className="text-purdue-secondary-gray2">
                            We are committed to training the next generation of agricultural scientists and
                            technologists through our educational programs and research opportunities for students
                            at all levels.
                        </p>
                    </div>
                    <div className="bg-purdue-secondary-gray2 rounded-lg h-80 flex items-center justify-center">
                        {/* Placeholder for lab image - replace with actual image */}
                        <p className="text-gray-500 font-medium">Lab Mission Image</p>
                    </div>
                </div>

                {/* Research Focus Areas */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-10 text-center">Research Focus Areas</h2>
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

                {/* Lab Facilities */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-10 text-center">Our Facilities</h2>
                    <div className="bg-purdue-secondary-gray3 rounded-lg p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Research Facilities</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="h-6 w-6 rounded-full bg-purdue-gold flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p>Computational lab with high-performance computing resources for data processing and machine learning</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-6 w-6 rounded-full bg-purdue-gold flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p>Field research plots with automated sensing equipment</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-6 w-6 rounded-full bg-purdue-gold flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p>Advanced imaging systems including RGB, multispectral, and thermal cameras</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="h-6 w-6 rounded-full bg-purdue-gold flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p>Greenhouse facilities for controlled environment studies</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg h-64 flex items-center justify-center">
                                {/* Placeholder for lab facilities image - replace with actual image */}
                                <p className="text-gray-500 font-medium">Lab Facilities Image</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Collaborations */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Collaborators</h2>
                    <p className="text-center text-purdue-secondary-gray2 max-w-3xl mx-auto mb-10">
                        We collaborate with academic institutions, industry partners, and government agencies to
                        drive innovation and translate research into practical applications.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {/* Placeholder logos - replace with actual collaborator logos */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-24 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
                                <p className="text-gray-400">Partner {i}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-purdue-black text-white p-8 md:p-12 rounded-xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Interested in Collaborating?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        We're always open to new research collaborations, industry partnerships, and student opportunities.
                        Get in touch to discuss how we can work together.
                    </p>
                    <Link href="/contact" className="btn-primary">Contact Us</Link>
                </div>
            </div>
        </div>
    );
} 