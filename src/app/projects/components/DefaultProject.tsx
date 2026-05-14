import Link from "next/link";
import Image from "next/image";
import { ProjectProps } from "../types";

export default function DefaultProject({ project }: ProjectProps) {
    return (
        <>
            {/* ── Article Header ─────────────────────────────────────── */}
            <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-white/25">
                <div className="container-custom max-w-4xl fade-up">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/70 hover:text-purdue-gold transition-colors mb-10 group"
                    >
                        <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
                        Back to Projects
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-purdue-gold px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-purdue-black rounded-sm">
                            {project.venue.short}
                        </span>
                        <span className="h-px w-8 bg-white/30" />
                        <span className="font-heading text-[11px] font-medium tracking-[0.24em] uppercase text-white/65">
                            {project.venue.full}
                        </span>
                    </div>

                    <h1 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05]">
                        {project.title}
                    </h1>

                    <p className="mt-6 text-sm md:text-base text-white/75 font-body leading-relaxed max-w-3xl">
                        {project.authors.map((author, i) => (
                            <span key={i}>
                                <span className="text-white/90">{author.name}</span>
                                {i < project.authors.length - 1 && (
                                    <span className="text-white/30 mx-1.5">&middot;</span>
                                )}
                            </span>
                        ))}
                    </p>

                    <p className="mt-8 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-3xl">
                        {project.abstract}
                    </p>

                    {project.links.length > 0 && (
                        <div className="mt-10 flex flex-wrap gap-4">
                            {project.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={i === 0 ? "btn-primary" : "btn-secondary"}
                                >
                                    {link.type}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── Hero Media ─────────────────────────────────────────── */}
            {project.heroImage && (
                <section className="py-12 md:py-16 bg-black">
                    <div className="container-custom max-w-5xl">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-white/25 bg-purdue-surface">
                            <Image
                                src={project.heroImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                priority
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* ── Affiliations ──────────────────────────────────────── */}
            {project.affiliations.length > 0 && (
                <section className="py-16 md:py-24 bg-purdue-surface border-t border-white/25">
                    <div className="container-custom max-w-4xl">
                        <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                            Affiliations
                        </p>
                        <ul className="space-y-3">
                            {project.affiliations.map((aff, i) => (
                                <li
                                    key={i}
                                    className="flex items-baseline gap-5 py-3 border-b border-white/25"
                                >
                                    <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm md:text-base text-white/80 font-body">
                                        {aff.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
}
