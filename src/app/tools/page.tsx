import Image from "next/image";
import { tools } from "./data";

export const metadata = {
    title: "Tools - Ciampitti Lab",
    description: "Interactive tools and applications developed by the Ciampitti Lab at Purdue University.",
};

export default function Tools() {
    return (
        <>
            {/* ── Page Header ─────────────────────────────────────── */}
            <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/25">
                <div className="container-custom fade-up">
                    <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-5">
                        Open Resources
                    </p>
                    <h1 className="font-heading font-extralight text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.95]">
                        Interactive <span className="font-bold text-purdue-gold">Tools.</span>
                    </h1>
                    <p className="mt-8 max-w-2xl text-base md:text-lg text-white/80 font-body leading-relaxed">
                        Decision support dashboards and visualization platforms
                        developed by our lab to translate research into practical,
                        accessible tools for farmers, agronomists, and policy
                        makers.
                    </p>
                </div>
            </section>

            {/* ── Tools Grid ──────────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-black">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {tools.map((tool) => (
                            <a
                                key={tool.slug}
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-purdue-surface border border-white/25 rounded-sm overflow-hidden hover:border-purdue-gold/40 transition-colors flex flex-col"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                                    {tool.thumbnail ? (
                                        <Image
                                            src={tool.thumbnail}
                                            alt={tool.title}
                                            width={1000}
                                            height={563}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-80 group-hover:opacity-90"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-purdue-surface">
                                            <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                                    {tool.tag && (
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-purdue-gold px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-purdue-black rounded-sm">
                                                {tool.tag}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-7 md:p-8 flex flex-col flex-1">
                                    <div className="flex items-baseline justify-between gap-4 mb-4">
                                        <h2 className="font-heading font-medium text-xl md:text-2xl text-white leading-snug group-hover:text-purdue-gold transition-colors">
                                            {tool.title}
                                        </h2>
                                        {tool.year && (
                                            <span className="shrink-0 font-heading text-[10px] font-medium tracking-[0.28em] uppercase text-white/55">
                                                {tool.year}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-sm md:text-base text-white/75 font-body leading-relaxed mb-6">
                                        {tool.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/25">
                                        <span className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/85 group-hover:text-purdue-gold transition-colors">
                                            Launch Tool
                                            <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
