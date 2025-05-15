/* src/app/components/MarkdownContent.tsx */
"use client";

import React, { useState } from "react";
// import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

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
        //       <img
        //         src={imgSrc}
        //         alt={alt}
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
        p: (p) => <p className="my-4 text-purdue-secondary-gray3" {...p} />,
        a: (p) => <a className="text-purdue-rush hover:underline" {...p} />,
        ul: (p) => (
          <ul
            className="list-disc pl-6 my-4 text-purdue-secondary-gray3"
            {...p}
          />
        ),
        ol: (p) => (
          <ol
            className="list-decimal pl-6 my-4 text-purdue-secondary-gray3"
            {...p}
          />
        ),
        li: (p) => <li className="my-2 text-purdue-secondary-gray3" {...p} />,
        blockquote: (p) => (
          <blockquote
            className="border-l-4 border-purdue-gold pl-4 italic my-6"
            {...p}
          />
        ),
        // Handle inline code vs code blocks with proper detection
        code: ({ className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '')
          const code = String(children).replace(/\n$/, '');

          // If it's not inline and has a language match, it's a code block
          if (match) {
            const language = match[1];
            const displayLanguage = {
              js: "JavaScript",
              jsx: "React JSX",
              ts: "TypeScript",
              tsx: "React TSX",
              python: "Python",
              R: "R",
              r: "R",
              py: "Python",
              java: "Java",
              cpp: "C++",
              c: "C",
              cs: "C#",
              go: "Go",
              rust: "Rust",
              ruby: "Ruby",
              php: "PHP",
              swift: "Swift",
              kotlin: "Kotlin",
              html: "HTML",
              css: "CSS",
              scss: "SCSS",
              md: "Markdown",
              json: "JSON",
              yaml: "YAML",
              xml: "XML",
              bash: "Bash",
              sh: "Shell",
              sql: "SQL",
            }[language.toLowerCase()] || language;

            return (
              <div className="relative my-6 overflow-hidden rounded-md border-2 border-purdue-gold">
                {/* Header with language name and copy button */}
                <div className="flex items-center justify-between bg-purdue-black px-4 py-2 border-b border-purdue-gold">
                  <div className="text-xs font-mono text-purdue-gold">{displayLanguage}</div>
                  <button
                    onClick={() => copyToClipboard(code)}
                    className="bg-purdue-black hover:bg-purdue-secondary-gray2 transition-colors text-purdue-gold hover:text-white rounded px-2 py-1 text-xs font-heading flex items-center"
                    aria-label="Copy code"
                    title="Copy code"
                  >
                    {copiedCode === code ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="font-heading">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        <span className="font-heading">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code content */}
                <SyntaxHighlighter
                  language={language}
                  style={oneDark}
                  customStyle={{
                    backgroundColor: "#000000", // purdue-black
                    background: "#000000",
                    padding: "1rem",
                    margin: 0,
                    borderRadius: 0,
                  }}
                  codeTagProps={{
                    style: {
                      backgroundColor: "#000000",
                      background: "#000000"
                    }
                  }}
                  wrapLines={true}
                  lineProps={{ style: { backgroundColor: "#000000" } }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            );
          }

          // Otherwise it's an inline code element
          return (
            <code
              className={`bg-gray-800 px-1 py-1 rounded text-purdue-field font-mono text-sm ${className || ''}`}
              {...props}
            >
              {children}
            </code>
          );
        },
        // Pre tag is no longer needed as SyntaxHighlighter replaces it
        pre: ({ children }) => <>{children}</>,
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
