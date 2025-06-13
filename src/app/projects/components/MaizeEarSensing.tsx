import Link from "next/link";
import Image from "next/image";
import { ProjectProps, Author, ProjectLink } from "../types";

export default function MaizeEarSensing({ project }: ProjectProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Back to Lab Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur hover:bg-white rounded-full text-sm font-medium transition-colors shadow-md border border-gray-200"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Lab
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-yellow-50">
          <div className="w-full h-full bg-gradient-to-b from-transparent to-white/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-8 mt-16 sm:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-light">
            {project.abstract}
          </p>

          {/* Venue */}
          <div className="mb-8">
            <a
              href="https://cvpr.thecvf.com/virtual/2025/35733"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-lg font-medium shadow-lg transition-colors"
            >
              <span className="mr-2">📅</span>
              {project.venue.full}
            </a>
          </div>

          {/* Authors */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-lg text-gray-600">
              {project.authors.map((author: Author, index: number) => (
                <span key={index} className="whitespace-nowrap">
                  {author.name}
                  <sup className="text-green-600 ml-1">{author.sup}</sup>
                  {index < project.authors.length - 1 && (
                    <span className="text-gray-400">,</span>
                  )}
                </span>
              ))}
            </div>
            <div className="text-green-700 mt-2 font-medium">
              {project.affiliations[0].name}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {project.links.map((link: ProjectLink, index: number) => {
              const buttonColors = [
                "bg-green-600 hover:bg-green-700", // Paper
                "bg-blue-600 hover:bg-blue-700", // Code
                "bg-yellow-600 hover:bg-yellow-700", // Dataset
                "bg-purple-600 hover:bg-purple-700", // Depth Files
              ];

              // Render GitHub logo for Code link
              const renderIcon = () => {
                if (link.type === "Code") {
                  return (
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  );
                }
                return <span className="mr-2">{link.icon}</span>;
              };

              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className={`inline-flex items-center px-6 py-3 ${buttonColors[index] || "bg-gray-600 hover:bg-gray-700"} text-white rounded-lg transition-colors shadow-lg font-medium`}
                >
                  {renderIcon()}
                  {link.type}
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Abstract Hero Section */}
        <section className="relative py-20 mb-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-25 to-yellow-50">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white/40" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto px-8">
            {/* Abstract Text */}
            <div>
              <h2 className="text-4xl font-bold mb-10 text-gray-900">
                Abstract
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  We introduce the first fully on-field pipeline that estimates
                  maize-ear length, width and volume from a single RGB + depth
                  capture and immediately forecasts grain yield per plant. A
                  YOLOv12n-seg model isolates the ear in unconstrained lighting,
                  a bespoke network (<em>EVNet</em>) regresses volume from the
                  segmented point cloud, and gradient-boosted trees convert
                  morphology into yield.
                </p>
                <p>
                  On Kansas field data we reach{" "}
                  <strong className="text-green-800 font-semibold">
                    98.6% mAP@0.5 for segmentation, 28.9 ml RMSE for volume, and
                    13.9 g RMSE for yield (ideal) / 24.1 g (real)
                  </strong>
                  . The pipeline runs in ≈1 s per image, needs no destructive
                  sampling, and the images, code, and trained weights are
                  open-sourced.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src={"/projects/maize_ear_sensing/hero.png"}
                  alt="Field setup showing maize ear detection in action"
                  width={700}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="lazy"
                />
                <div className="mt-6 text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Real-time field deployment
                  </p>
                  <p className="text-sm text-gray-500">
                    Maize ear detection & yield prediction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Pipeline
            </h2>
          </div>

          {/* Pipeline Image */}
          <div className="w-full max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 border border-gray-200">
              <Image
                src={"/projects/maize_ear_sensing/pipeline.png"}
                alt="Maize ear sensing pipeline diagram"
                width={1200}
                height={450}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Key Results */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Key Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-3xl mb-4 text-center">🎯</div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Segmentation
              </h3>
              <p className="text-gray-600 text-sm text-center mb-2">
                95.8% precision/recall
              </p>
              <p className="text-green-600 font-bold text-center">
                mAP@0.5 = 98.6%
              </p>
              <p className="text-gray-500 text-xs text-center mt-1">
                1.11s per image
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-3xl mb-4 text-center">📏</div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Volume (Real-world)
              </h3>
              <p className="text-blue-600 font-bold text-center">R² = 0.88</p>
              <p className="text-gray-600 text-sm text-center">
                RMSE = 28.9 ml
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-3xl mb-4 text-center">🌽</div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Yield (Ideal)
              </h3>
              <p className="text-purple-600 font-bold text-center">R² = 0.96</p>
              <p className="text-gray-600 text-sm text-center">RMSE = 13.9g</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-3xl mb-4 text-center">🌽</div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Yield (Real-world)
              </h3>
              <p className="text-yellow-600 font-bold text-center">R² = 0.89</p>
              <p className="text-gray-600 text-sm text-center">RMSE = 24.1g</p>
            </div>
          </div>
        </section>

        {/* Why it Matters */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-xl p-4 sm:p-8 max-w-none sm:max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Why it Matters
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>First non-destructive ear yield predictor</strong>{" "}
                  deployable in the field.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Open dataset & code</strong> (CornDepth) to accelerate
                  follow-up work.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Bridges phenotyping & on-farm decision-making</strong>{" "}
                  for breeders and agronomists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {project.links.map((link: ProjectLink, index: number) => {
              // Render GitHub logo for Code link
              const renderIcon = () => {
                if (link.type === "Code") {
                  return (
                    <svg
                      className="w-8 h-8 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  );
                }
                return <span className="text-3xl">{link.icon}</span>;
              };

              return (
                <a
                  key={index}
                  href={link.url}
                  className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 text-center"
                >
                  <div className="mb-3 flex justify-center">{renderIcon()}</div>
                  <h3 className="font-semibold text-gray-900">{link.type}</h3>
                </a>
              );
            })}
          </div>

          {/* Citation */}
          <div className="bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Citation</h3>
            <pre className="text-sm text-gray-700 overflow-x-auto bg-white p-4 rounded border">
              {
                `@InProceedings{Cisdeli_2025_CVPR,
author    = {Cisdeli, Pedro and Santiago, Gustavo Nocera and Mandrini, German and Ciampitti, Ignacio},
title     = {Maize ear sensing for on-farm yield predictions},
booktitle = {Proceedings of the Computer Vision and Pattern Recognition Conference (CVPR) Workshops},
month     = {June},
year      = {2025},
pages     = {5402-5411}
}
`
              }
            </pre>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2025 Pedro Cisdeli, Gustavo Nocera Santiago, German Mandrini,
            Ignacio Ciampitti; Purdue University – Ciampitti Lab
          </p>
        </footer>
      </div>
    </div>
  );
}
