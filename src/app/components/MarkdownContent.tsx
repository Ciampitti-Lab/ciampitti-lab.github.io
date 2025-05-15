"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ node, ...props }) => {
          const src = props.src || "";

          // Check if the image path is relative and needs to be prefixed
          const imgSrc =
            src.startsWith("http") || src.startsWith("/")
              ? src
              : `/blog/img/${src}`;

          return (
            <div className="my-8">
              <img
                src={imgSrc}
                alt={props.alt || ""}
                className="rounded-md w-full max-w-full h-auto"
                loading="lazy"
              />
              {props.alt && (
                <p className="text-sm text-gray-500 mt-2 text-center italic">
                  {props.alt}
                </p>
              )}
            </div>
          );
        },
        // Style other elements as needed
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl font-bold mt-6 mb-3" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="my-4 text-purdue-secondary-gray2" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-purdue-rush hover:underline" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 my-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 my-4" {...props} />
        ),
        li: ({ node, ...props }) => <li className="my-2" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-purdue-gold pl-4 italic my-6"
            {...props}
          />
        ),
        code: ({ node, inline, ...props }) =>
          inline ? (
            <code
              className="bg-gray-100 px-1 py-0.5 rounded text-sm"
              {...props}
            />
          ) : (
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto my-6">
              <code {...props} />
            </pre>
          ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-gray-50 text-left" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="px-4 py-2 border border-gray-300" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="px-4 py-2 border border-gray-300" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
