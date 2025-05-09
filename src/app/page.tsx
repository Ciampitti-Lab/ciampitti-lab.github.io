import Link from "next/link";

import { newsData, pubData } from "@/lib/info_helper.server";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-purdue-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ciampitti Lab
              </h1>
              <h2 className="text-3xl md:text-4xl ">
                <span className="text-purdue-field font-bold">
                  Digital Agriculture{" "}
                </span>
                and
                <span className="text-purdue-field font-bold">
                  {" "}
                  Farming Systems{" "}
                </span>
                Research
              </h2>
              <p className="pt-6 text-lg md:text-xl opacity-90">
                Advancing agricultural science through computer vision, data
                analysis, crop management systems, and sustainable practices.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/research" className="btn-primary">
                  Our Research
                </Link>
                <Link href="/about" className="btn-secondary">
                  About Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative w-full h-80">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/liquid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-purdue-black">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Latest Publications</h2>
          </div>

          <div className="space-y-6">
            {pubData.map((publication) => (
              <div
                key={publication.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 font-heading">
                  {publication.title}
                </h3>
                <p className="text-purdue-secondary-gray2 mb-2 font-body">
                  {publication.authors}
                </p>
                <div className="flex flex-wrap gap-x-6 text-sm">
                  <span className="font-body">{publication.journal}</span>
                  <span className="font-body">{publication.year}</span>
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purdue-field hover:underline font-body"
                  >
                    DOI: {publication.doi}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/research#publications" className="btn-secondary">
              View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News/Blog Posts Section */}
      <section className="py-16">
        <div className="container-custom text-purdue-black">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl text-white font-bold">Latest News</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-purdue-secondary-gray2 relative">
                  {/* Image placeholder - replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p>Image Placeholder</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                  <Link
                    href={`/news/${post.id}`}
                    className="text-purdue-rush text-bold font-heading hover:underline mt-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/research#publications"
              className="btn-secondary bg-white text-purdue-black"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
