/* src/app/components/MarkdownContent.tsx */
"use client";

import React from "react";
// import Image from "next/image";
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
        // img: ({ src, alt = "", ...rest }) => {
        //   /* Bail out if src is not a string (Blob / undefined) */
        //   if (typeof src !== "string") return null;
        //
        //   const imgSrc: string =
        //     src.startsWith("http") || src.startsWith("/")
        //       ? src
        //       : `/blog/img/${src}`;
        //
        //   /* Strip width / height from the original attributes
        //      and coerce them to numbers if present.              */
        //   const {
        //     width: rawW,
        //     height: rawH,
        //     ...imgRest
        //   } = rest as React.ImgHTMLAttributes<HTMLImageElement>;
        //
        //   const width = typeof rawW === "string" ? Number(rawW) : (rawW ?? 500);
        //   const height =
        //     typeof rawH === "string" ? Number(rawH) : (rawH ?? 500);
        //
        //   return (
        //     <div className="my-8">
        //       <Image
        //         src={imgSrc}
        //         alt={alt}
        //         width={width}
        //         height={height}
        //         className="rounded-md w-full max-w-full h-auto"
        //         loading="lazy"
        //         {...imgRest} /* any remaining safe props */
        //       />
        //       {alt && (
        //         <p className="text-sm text-gray-500 mt-2 text-center italic">
        //           {alt}
        //         </p>
        //       )}
        //     </div>
        //   );
        // },

        /* ─── OTHER ELEMENTS ─── */
        h2: (p) => <h2 className="text-2xl font-bold mt-8 mb-4" {...p} />,
        h3: (p) => <h3 className="text-xl font-bold mt-6 mb-3" {...p} />,
        p: (p) => <p className="my-4 text-purdue-secondary-gray2" {...p} />,
        a: (p) => <a className="text-purdue-rush hover:underline" {...p} />,
        ul: (p) => <ul className="list-disc pl-6 my-4" {...p} />,
        ol: (p) => <ol className="list-decimal pl-6 my-4" {...p} />,
        li: (p) => <li className="my-2" {...p} />,
        blockquote: (p) => (
          <blockquote
            className="border-l-4 border-purdue-gold pl-4 italic my-6"
            {...p}
          />
        ),
        code: (p) => (
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto my-6">
            <code {...p} />
          </pre>
        ),
        table: (p) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse" {...p} />
          </div>
        ),
        thead: (p) => <thead className="bg-gray-50 text-left" {...p} />,
        th: (p) => <th className="px-4 py-2 border border-gray-300" {...p} />,
        td: (p) => <td className="px-4 py-2 border border-gray-300" {...p} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
