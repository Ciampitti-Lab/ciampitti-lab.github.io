import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import { newsData } from "@/lib/info_helper.server";
import { MarkdownContent } from "@/app/components/MarkdownContent";

// This function is required for static exports
export async function generateStaticParams() {
  return newsData.map((post) => ({
    slug: post.id.toString(),
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
  const post = newsData.find((post) => post.id.toString() === slug);

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
  const post = newsData.find((post) => post.id.toString() === slug);

  if (!post) {
    notFound();
  }

  // Construct path to the markdown file
  const mdFilePath = path.join(
    process.cwd(),
    "public",
    "blog",
    "md",
    post.md_file_name as string,
  );

  // Read markdown content
  let mdContent;
  try {
    mdContent = fs.readFileSync(mdFilePath, "utf8");
  } catch (error) {
    console.error(`Error reading markdown file: ${error}`);
    notFound();
  }

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="flex gap-8 mb-8">
          <div className="flex-1">
            <div className="mb-4">
              <span className="bg-purdue-gold px-3 py-1 text-sm lg:text-base font-bold text-purdue-black rounded font-heading">
                {post.category}
              </span>
              <p className="text-gray-500 mt-4 text-base lg:text-lg">{post.date}</p>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold">{post.title}</h1>
          </div>

          {post.img_file_name && (
            <div className="w-1/2 flex-shrink-0">
              <Image
                src={`/blog/img/${post.img_file_name}`}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-md"
                width={500}
                height={500}
              />
            </div>
          )}
        </div>

        <hr className="border-t border-gray-200" />
        <div className="prose prose-lg max-w-none">
          <MarkdownContent content={mdContent} />
        </div>
      </div>
    </div>
  );
}
