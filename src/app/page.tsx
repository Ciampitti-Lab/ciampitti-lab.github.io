import Link from "next/link";
import Image from "next/image";

import { newsData, pubData } from "@/lib/info_helper.server";

export const metadata = {
  title: "Ciampitti Lab - Home",
  description:
    "Digital agriculture research at Purdue University: computer vision, data analysis and crop systems.",
};

const slicedPubData = pubData.slice(0, 5);
const sortedNews = [...newsData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-auto md:h-[100svh] md:min-h-[600px] -mt-[72px] bg-black overflow-hidden">

        {/* Background — field imagery + logo blended together */}
        <div className="absolute inset-0">
          <Image
            src="/about/acres.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            aria-hidden="true"
          />
          {/* Logo blended into the field — anchored top on mobile, right on desktop */}
          <div className="absolute inset-0 flex items-start justify-center pt-[8vh] md:items-center md:justify-end md:pt-0 md:pr-[2vw] pointer-events-none select-none">
            <Image
              src="/lab-logo.png"
              alt=""
              width={900}
              height={900}
              className="w-[85vmin] h-[85vmin] md:w-[75vmin] md:h-[75vmin] object-contain mix-blend-soft-light opacity-30 md:opacity-40"
              priority
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-black/65 md:bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/40 md:from-black/90 via-black/40 md:via-black/55 to-black/85 md:to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/95" />
        </div>

        {/* Content — top-aligned on mobile, vertically centered on desktop */}
        <div className="relative md:h-full flex flex-col justify-start pt-28 pb-16 md:pt-0 md:pb-0 md:justify-center">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

            {/* Eyebrow with hairline */}
            <div className="fade-up flex items-center gap-4 md:gap-5 mb-8 md:mb-14">
              <div className="h-px w-8 md:w-12 bg-purdue-gold/70" aria-hidden="true" />
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.35em] md:tracking-[0.45em] text-white/75">
                Purdue University
              </p>
            </div>

            {/* Headline */}
            <h1 className="fade-up delay-1 font-heading leading-[0.95] md:leading-[0.92] tracking-[-0.02em] md:tracking-[-0.03em]">
              <span className="block font-extralight text-white text-[clamp(2.5rem,8vw,7.5rem)]">
                Digital Agriculture
              </span>
              <span className="block font-bold text-purdue-gold text-[clamp(2.5rem,8vw,7.5rem)] md:pl-[6%] mt-2 md:mt-4">
                <span className="font-extralight text-white/80 pr-2 md:pr-3">
                  &amp;
                </span>
                Farming Systems.
              </span>
            </h1>

            {/* Descriptor */}
            <p className="fade-up delay-2 mt-8 md:mt-14 max-w-md md:max-w-none text-base md:text-lg text-white/80 font-body leading-relaxed">
              Advancing digital agriculture through computer vision,
              data analysis, and sustainable crop management.
            </p>
          </div>
        </div>
      </section>

      {/* ── Latest Publications ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-purdue-surface">
        <div className="container-custom">

          {/* Section header */}
          <div className="mb-14 md:mb-20 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                01 &mdash; Selected Works
              </p>
              <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
                Latest <span className="font-bold text-purdue-gold">Publications.</span>
              </h2>
            </div>
            <Link
              href="/research#publications"
              className="hidden md:inline-flex items-center gap-4 group"
            >
              <span className="font-heading text-xs font-medium tracking-[0.24em] uppercase text-white/90 group-hover:text-purdue-gold transition-colors">
                View All
              </span>
              <span className="h-px w-10 bg-white/50 group-hover:w-16 group-hover:bg-purdue-gold transition-all duration-500" />
            </Link>
          </div>

          {/* Editorial index */}
          <div className="border-t border-white/25">
            {slicedPubData.map((publication, idx) => {
              const linkProps = publication.doi
                ? { href: `https://doi.org/${publication.doi}`, label: publication.doi }
                : { href: publication.url, label: "View paper" };
              return (
                <a
                  key={publication.id}
                  href={linkProps.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-white/25 py-7 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10">
                    {/* Number */}
                    <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80 md:w-12 md:shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Title + authors */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-medium text-lg md:text-xl text-white leading-snug group-hover:text-purdue-gold transition-colors">
                        {publication.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 font-body leading-relaxed">
                        {publication.authors}
                      </p>
                    </div>

                    {/* Meta — right aligned on desktop */}
                    <div className="md:text-right md:w-56 md:shrink-0 font-body text-xs">
                      <p className="text-white/75">{publication.journal}</p>
                      <p className="mt-1 text-white/55">
                        {publication.year} &middot; <span className="text-purdue-gold/90 group-hover:text-purdue-gold transition-colors">{linkProps.label}</span>
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Mobile-only view-all */}
          <Link
            href="/research#publications"
            className="md:hidden mt-10 inline-flex items-center gap-4 group"
          >
            <span className="font-heading text-xs font-medium tracking-[0.24em] uppercase text-white/90 group-hover:text-purdue-gold transition-colors">
              View All Publications
            </span>
            <span className="h-px w-10 bg-white/50 group-hover:w-16 group-hover:bg-purdue-gold transition-all duration-500" />
          </Link>
        </div>
      </section>

      {/* ── Latest News ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container-custom">

          {/* Section header */}
          <div className="mb-14 md:mb-20 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                02 &mdash; From the Lab
              </p>
              <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
                Latest <span className="font-bold text-purdue-gold">News.</span>
              </h2>
            </div>
            <Link
              href="/news"
              className="hidden md:inline-flex items-center gap-4 group"
            >
              <span className="font-heading text-xs font-medium tracking-[0.24em] uppercase text-white/90 group-hover:text-purdue-gold transition-colors">
                View All
              </span>
              <span className="h-px w-10 bg-white/50 group-hover:w-16 group-hover:bg-purdue-gold transition-all duration-500" />
            </Link>
          </div>

          {/* Featured + grid */}
          {sortedNews.length > 0 && (() => {
            const [featured, ...rest] = sortedNews;
            return (
              <div className="space-y-10 md:space-y-14">
                {/* Featured */}
                <Link
                  href={`/news/${featured.slug}`}
                  className="group block"
                >
                  <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
                    <div className="md:col-span-7 overflow-hidden bg-purdue-surface rounded-sm aspect-[16/10]">
                      <Image
                        src={`/blog/img/${featured.img_file_name}`}
                        alt={featured.title}
                        width={1000}
                        height={625}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <p className="font-heading text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase text-purdue-gold/90 mb-4">
                        Featured &middot; {featured.date}
                      </p>
                      <h3 className="font-heading font-extralight text-white text-2xl md:text-3xl lg:text-4xl leading-[1.05] tracking-[-0.02em] mb-5 group-hover:text-purdue-gold transition-colors">
                        {featured.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/75 font-body leading-relaxed">
                        {featured.excerpt}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/85 group-hover:text-purdue-gold transition-colors">
                        Read article
                        <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Rest of posts */}
                {rest.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-white/25">
                    {rest.map((post) => (
                      <Link
                        key={post.id}
                        href={`/news/${post.slug}`}
                        className="group flex flex-col"
                      >
                        <div className="overflow-hidden bg-purdue-surface rounded-sm aspect-[16/10] mb-5">
                          <Image
                            src={`/blog/img/${post.img_file_name}`}
                            alt={post.title}
                            width={600}
                            height={375}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                            loading="lazy"
                          />
                        </div>
                        <p className="font-heading text-[10px] font-medium tracking-[0.3em] uppercase text-purdue-gold/85 mb-2">
                          {post.date}
                        </p>
                        <h3 className="font-heading font-medium text-base md:text-lg text-white leading-snug group-hover:text-purdue-gold transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70 font-body leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}

          {/* Mobile-only view-all */}
          <Link
            href="/news"
            className="md:hidden mt-12 inline-flex items-center gap-4 group"
          >
            <span className="font-heading text-xs font-medium tracking-[0.24em] uppercase text-white/90 group-hover:text-purdue-gold transition-colors">
              View All Posts
            </span>
            <span className="h-px w-10 bg-white/50 group-hover:w-16 group-hover:bg-purdue-gold transition-all duration-500" />
          </Link>
        </div>
      </section>
    </>
  );
}
