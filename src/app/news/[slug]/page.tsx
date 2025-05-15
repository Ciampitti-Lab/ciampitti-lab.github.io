import fs from "fs";
import path from "path";
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
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
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
        <div className="mb-6">
          <span className="bg-purdue-gold px-3 py-1 text-sm font-bold text-purdue-black rounded font-heading">
            {post.category}
          </span>
          <p className="text-gray-500 mt-4">{post.date}</p>
        </div>

        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

        {post.img_file_name && (
          <div className="mb-8">
            <img
              src={`/blog/img/${post.img_file_name}`}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <MarkdownContent content={mdContent} />
        </div>
      </div>
    </div>
  );
}
