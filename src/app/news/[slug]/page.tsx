import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { newsData } from "@/lib/info_helper.server";
import { MarkdownContent } from "@/app/components/MarkdownContent";

export async function generateStaticParams() {
  return newsData.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const slug = params.slug;

  let post = newsData.find((post) => post.slug === slug);

  if (!post) {
    post = newsData.find((post) => post.id.toString() === slug);
    if (post) {
      redirect(`/news/${post.slug}`);
    }
  }

  if (!post) {
    return {
      title: "Post Not Found - Ciampitti Lab",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - Ciampitti Lab`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const slug = params.slug;

  let post = newsData.find((post) => post.slug === slug);

  if (!post) {
    post = newsData.find((post) => post.id.toString() === slug);
    if (post) {
      redirect(`/news/${post.slug}`);
    }
  }

  if (!post) {
    notFound();
  }

  const mdFilePath = path.join(
    process.cwd(),
    "public",
    "blog",
    "md",
    post.md_file_name as string,
  );

  let mdContent;
  try {
    mdContent = fs.readFileSync(mdFilePath, "utf8");
  } catch (error) {
    console.error(`Error reading markdown file: ${error}`);
    notFound();
  }

  return (
    <>
      {/* ── Article Header (full-bleed hero) ───────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-white/25 min-h-[72vh] md:min-h-[80vh] flex items-end">
        {post.img_file_name && (
          <>
            <Image
              src={`/blog/img/${post.img_file_name}`}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover -z-20"
            />
            {/* Scrims so white text stays legible on any photo, even bright skies:
                top fade for the fixed nav, a bottom fade under the title block,
                and a left fade behind the left-aligned text. The top-right of
                the photo stays mostly untouched. */}
            <div className="absolute inset-x-0 top-0 h-40 -z-10 bg-gradient-to-b from-black/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[85%] -z-10 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.85)_30%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-y-0 left-0 w-full md:w-[75%] -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0)_100%)]" />
          </>
        )}
        <div className="container-custom max-w-4xl w-full pt-40 pb-14 md:pb-20 fade-up [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
          <Link
            href="/news"
            className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/85 hover:text-purdue-gold transition-colors mb-10 group"
          >
            <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
            Back to News
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-purdue-gold px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-purdue-black rounded-sm">
              {post.category}
            </span>
            <span className="h-px w-8 bg-white/30" />
            <span className="font-heading text-[11px] font-medium tracking-[0.24em] uppercase text-white/85">
              {post.date}
            </span>
          </div>

          <h1 className="font-heading font-light text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05] [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_2px_28px_rgba(0,0,0,0.65)]">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-8 text-base md:text-lg text-white/90 font-body leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* ── Article Body ───────────────────────────────────────── */}
      <article className="py-16 md:py-24 bg-black">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none text-white/85 font-body">
            <MarkdownContent content={mdContent} />
          </div>

          <div className="mt-16 pt-10 border-t border-white/25">
            <Link
              href="/news"
              className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/85 hover:text-purdue-gold transition-colors group"
            >
              <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
              All News
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
