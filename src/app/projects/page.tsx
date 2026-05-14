import Link from "next/link";
import Image from "next/image";
import { projects } from "./data";

export const metadata = {
    title: "Projects - Ciampitti Lab",
    description: "Research projects and publications from the Ciampitti Lab at Purdue University.",
};

export default function Projects() {
    return (
        <>
            {/* ── Page Header ─────────────────────────────────────── */}
            <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/25">
                <div className="container-custom fade-up">
                    <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-5">
                        Featured Work
                    </p>
                    <h1 className="font-heading font-extralight text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.95]">
                        Research <span className="font-bold text-purdue-gold">Projects.</span>
                    </h1>
                    <p className="mt-8 max-w-2xl text-base md:text-lg text-white/80 font-body leading-relaxed">
                        A look at the projects driving our research in digital
                        agriculture and computer vision, from peer-reviewed
                        papers to interactive applications.
                    </p>
                </div>
            </section>

            {/* ── Projects Grid ───────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-black">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                        {projects.map((project, idx) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group bg-purdue-surface border border-white/25 rounded-sm overflow-hidden hover:border-purdue-gold/40 transition-colors flex flex-col"
                            >
                                {/* Hero image */}
                                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                                    {project.heroImage && (
                                        <Image
                                            src={project.heroImage}
                                            alt={project.title}
                                            width={1000}
                                            height={563}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-purdue-gold px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-purdue-black rounded-sm">
                                            {project.venue.short}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-7 md:p-8 flex flex-col flex-1">
                                    <div className="flex items-baseline gap-4 mb-4">
                                        <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80">
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <span className="font-heading text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
                                            {project.venue.full}
                                        </span>
                                    </div>

                                    <h2 className="font-heading font-medium text-xl md:text-2xl text-white leading-snug mb-4 group-hover:text-purdue-gold transition-colors">
                                        {project.title}
                                    </h2>

                                    {/* Authors */}
                                    <p className="text-sm text-white/70 font-body leading-relaxed mb-4">
                                        {project.authors.map((author, index) => (
                                            <span key={index}>
                                                <span className="text-white/90">{author.name}</span>
                                                {index < project.authors.length - 1 && (
                                                    <span className="text-white/30 mx-1.5">&middot;</span>
                                                )}
                                            </span>
                                        ))}
                                    </p>

                                    {/* Abstract */}
                                    <p className="text-sm md:text-base text-white/75 font-body leading-relaxed line-clamp-3 mb-6">
                                        {project.abstract}
                                    </p>

                                    {/* Footer */}
                                    <div className="mt-auto pt-6 border-t border-white/25">
                                        <span className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/85 group-hover:text-purdue-gold transition-colors">
                                            View Project
                                            <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
