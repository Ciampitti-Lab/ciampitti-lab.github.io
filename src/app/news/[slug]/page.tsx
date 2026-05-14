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
      {/* ── Article Header ─────────────────────────────────────── */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-white/25">
        <div className="container-custom max-w-4xl fade-up">
          <Link
            href="/news"
            className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-white/70 hover:text-purdue-gold transition-colors mb-10 group"
          >
            <span className="h-px w-8 bg-white/40 group-hover:w-12 group-hover:bg-purdue-gold transition-all duration-500" />
            Back to News
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-purdue-gold px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-purdue-black rounded-sm">
              {post.category}
            </span>
            <span className="h-px w-8 bg-white/30" />
            <span className="font-heading text-[11px] font-medium tracking-[0.24em] uppercase text-white/65">
              {post.date}
            </span>
          </div>

          <h1 className="font-heading font-extralight text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05]">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-8 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* ── Article Body ───────────────────────────────────────── */}
      <article className="py-16 md:py-24 bg-black">
        <div className="container-custom max-w-3xl">
          {post.img_file_name && (
            <div className="relative aspect-[16/9] mb-12 md:mb-16 overflow-hidden rounded-sm bg-purdue-surface">
              <Image
                src={`/blog/img/${post.img_file_name}`}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
                priority
              />
            </div>
          )}

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
