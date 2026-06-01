import Link from "next/link";
import Image from "next/image";
import { newsData, pressData } from "@/lib/info_helper.server";
import InTheNews from "@/app/components/InTheNews";

export const metadata = {
  title: "Ciampitti Lab - News",
  description:
    "Latest news, press coverage and blog posts from the Ciampitti Lab at Purdue University.",
};

export default function News() {
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const [featured, ...rest] = sortedNews;

  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/25">
        <div className="container-custom fade-up">
          <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-5">
            From the Lab
          </p>
          <h1 className="font-heading font-extralight text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.95]">
            News <span className="font-bold text-purdue-gold">& Blog.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/80 font-body leading-relaxed">
            Press coverage, announcements, research findings, and posts from the
            Ciampitti Lab at Purdue University.
          </p>
        </div>
      </section>

      {/* ── News (auto-fetched press mentions) ──────────────── */}
      {pressData.length > 0 && (
        <section
          id="news"
          className="py-20 md:py-28 bg-purdue-surface border-b border-white/25 scroll-mt-20"
        >
          <div className="container-custom">
            <div className="mb-12 md:mb-16">
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                In the Press
              </p>
              <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
                In the <span className="font-bold text-purdue-gold">News.</span>
              </h2>
            </div>

            <InTheNews items={pressData} itemsPerPage={6} scrollTargetId="news" />

            <p className="mt-8 text-xs text-white/45 font-body">
              Aggregated automatically from Google News. Links open the original
              publisher.
            </p>
          </div>
        </section>
      )}

      {/* ── Blog · Featured Post ────────────────────────────── */}
      {featured && (
        <section
          id="blog"
          className="py-20 md:py-24 bg-black border-b border-white/25 scroll-mt-20"
        >
          <div className="container-custom">
            <div className="mb-12 md:mb-16">
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                From the Lab
              </p>
              <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
                From the <span className="font-bold text-purdue-gold">Blog.</span>
              </h2>
            </div>

            <Link
              href={`/news/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-purdue-surface order-2 lg:order-1">
                <Image
                  src={`/blog/img/${featured.img_file_name}`}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="eager"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purdue-gold px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-purdue-black rounded-sm">
                    Featured
                  </span>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/90 uppercase">
                    {featured.category}
                  </span>
                  <span className="h-px w-10 bg-white/30" />
                  <span className="font-heading text-[11px] font-medium tracking-[0.18em] text-white/65 uppercase">
                    {featured.date}
                  </span>
                </div>
                <h3 className="font-heading font-medium text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-[-0.015em] group-hover:text-purdue-gold transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-6 text-base md:text-lg text-white/75 font-body leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/85 group-hover:text-purdue-gold transition-colors">
                  Read article
                  <span className="h-px w-10 bg-white/40 group-hover:w-14 group-hover:bg-purdue-gold transition-all duration-500" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Blog · Archive ──────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="py-20 md:py-28 bg-purdue-surface">
          <div className="container-custom">
            <div className="mb-14 md:mb-20">
              <p className="font-heading text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-purdue-gold/90 mb-4">
                Archive
              </p>
              <h2 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
                More <span className="font-bold text-purdue-gold">Posts.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {rest.map((post) => (
                <Link
                  key={post.id}
                  href={`/news/${post.slug}`}
                  className="group bg-black border border-white/25 rounded-sm overflow-hidden hover:border-purdue-gold/40 transition-colors flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-purdue-surface">
                    <Image
                      src={`/blog/img/${post.img_file_name}`}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-85 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purdue-gold px-2 py-0.5 text-[9px] font-heading font-semibold uppercase tracking-[0.18em] text-purdue-black rounded-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <span className="font-heading text-[10px] font-medium tracking-[0.28em] uppercase text-purdue-gold/90 mb-3">
                      {post.date}
                    </span>
                    <h3 className="font-heading font-medium text-lg md:text-xl text-white leading-snug group-hover:text-purdue-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 mb-6 text-sm text-white/75 font-body leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-5 border-t border-white/25">
                      <span className="inline-flex items-center gap-3 text-[11px] font-heading tracking-[0.24em] uppercase text-white/85 group-hover:text-purdue-gold transition-colors">
                        Read
                        <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
