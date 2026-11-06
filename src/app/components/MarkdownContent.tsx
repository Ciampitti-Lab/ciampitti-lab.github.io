/* src/app/components/MarkdownContent.tsx */
"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface MarkdownContentProps {
    content: string;
}

// Define types for the node object passed by ReactMarkdown
interface NodeElement {
    tagName?: string;
    type?: string;
    children?: NodeElement[];
    parent?: NodeElement;
    parentNode?: NodeElement;
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

    // Enhanced sanitization schema that allows HTML elements and class attributes
    const sanitizeSchema = {
        ...defaultSchema,
        attributes: {
            ...defaultSchema.attributes,
            // Allow class, style and other attributes on all elements
            '*': [...(defaultSchema.attributes?.['*'] || []), 'className', 'class', 'style', 'id', 'href', 'target', 'rel', 'src', 'alt', 'width', 'height', 'frameborder', 'allowfullscreen', 'allow'],
            // Add video-specific attributes
            'video': ['controls', 'autoplay', 'loop', 'muted', 'preload', 'poster', 'width', 'height', 'src'],
            'source': ['src', 'type']
        },
        // Make sure div, span and other layout elements are allowed
        tagNames: [
            ...(defaultSchema.tagNames || []),
            'div', 'span', 'section', 'article', 'aside', 'header', 'footer', 'iframe', 'button', 'video', 'source'
        ]
    };

    return (
        <>
            <style jsx global>{`
        /* Custom styles for task lists */
        .contains-task-list {
          list-style-type: none !important;
          padding-left: 0 !important;
        }
        
        .task-list-item {
          display: flex !important;
          align-items: flex-start !important;
          margin: 0.5rem 0 !important;
          color: var(--purdue-secondary-gray3);
        }
        
        .task-list-item > input[type="checkbox"] {
          appearance: none;
          -webkit-appearance: none;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          border: 2px solid #888;
          margin-right: 0.5rem;
          margin-top: 0.125rem;
          flex-shrink: 0;
          position: relative;
          cursor: default;
        }
        
        .task-list-item > input[type="checkbox"]:checked {
          border-color: #CEB991; /* Purdue gold */
          background-color: #CEB991; /* Purdue gold */
        }
        
        .task-list-item > input[type="checkbox"]:checked::after {
          content: '';
          position: absolute;
          left: 5px;
          top: 3px;
          width: 6px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        
        /* Ensure text color matches other elements */
        .task-list-item,
        .task-list-item p,
        .task-list-item li {
          color: #9D9795;
        }

        /* Make KaTeX math expressions white */
        .katex {
          color: white !important;
        }

        /* Side-by-side figures: <div class="figure-grid"> ...images... </div> */
        /* Justified row: each figure carries flex-grow = its aspect ratio
           (set via |ratio=WxH), so all images render at the same height. */
        .figure-grid {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          margin: 2.5rem 0;
        }
        .figure-grid > * {
          display: contents; /* unwrap the paragraph wrappers around each image */
        }
        .figure-grid .md-figure {
          display: block !important;
          width: auto !important;
          min-width: 0;
          margin: 0 !important;
        }
        .figure-grid .md-figure figcaption {
          display: block !important;
        }
        @media (max-width: 639px) {
          .figure-grid {
            flex-direction: column;
          }
          .figure-grid .md-figure {
            flex: none !important;
            width: 100% !important;
          }
        }

        /* Video styling */
        video {
          background-color: #000;
        }
        
        video:focus {
          outline: 2px solid #CEB991; /* Purdue gold */
          outline-offset: 2px;
        }
      `}</style>

            <ReactMarkdown
                rehypePlugins={[
                    rehypeRaw, // Parse HTML in markdown
                    [rehypeSanitize, sanitizeSchema], // Use custom schema for sanitization
                    rehypeKatex // For rendering math equations
                ]}
                remarkPlugins={[
                    remarkGfm, // GitHub flavored markdown
                    remarkMath // For parsing math equations
                ]}
                components={{
                    img: ({ src, alt = "", node, ...rest }) => {
                        /* Bail out if src is not a string (Blob / undefined) */
                        if (typeof src !== "string") return null;

                        const imgSrc: string =
                            src.startsWith("http") || src.startsWith("/")
                                ? src
                                : `/blog/img/${src}`;

                        /* Parse image size and alignment from alt text if present */
                        /* Format: ![alt text|width=500px|align=center](image.jpg) */
                        let width: string | undefined;
                        let height: string | undefined;
                        let align: string = "center"; // default alignment
                        let ratio: number | undefined; // width / height, used by .figure-grid rows

                        if (alt.includes("|")) {
                            const parts = alt.split("|");
                            const cleanAlt = parts[0].trim();
                            const attributes = parts.slice(1);

                            for (const attr of attributes) {
                                if (attr.trim().startsWith("width=")) {
                                    width = attr.trim().replace("width=", "").trim();
                                } else if (attr.trim().startsWith("height=")) {
                                    height = attr.trim().replace("height=", "").trim();
                                } else if (attr.trim().startsWith("align=")) {
                                    align = attr.trim().replace("align=", "").trim();
                                } else if (attr.trim().startsWith("ratio=")) {
                                    /* ratio=WxH (pixel size) -> lets side-by-side figures share one height */
                                    const [w, h] = attr.trim().replace("ratio=", "").split("x").map(Number);
                                    if (w > 0 && h > 0) ratio = w / h;
                                }
                            }

                            alt = cleanAlt;
                        }

                        // Check if we're inside a paragraph by examining the node data
                        let isInsideParagraph = false;

                        if (node && typeof node === 'object') {
                            try {
                                // Use type assertion to safely access properties
                                const nodeElement = node as NodeElement;
                                if (nodeElement.parent?.tagName) {
                                    isInsideParagraph = nodeElement.parent.tagName.toLowerCase() === 'p';
                                } else if (nodeElement.parentNode?.tagName) {
                                    isInsideParagraph = nodeElement.parentNode.tagName.toLowerCase() === 'p';
                                }
                            } catch (error) {
                                // If we can't determine, play it safe
                                console.error('Error determining if inside paragraph:', error);
                                isInsideParagraph = false;
                            }
                        }

                        // If we're inside a paragraph, render just the image without div wrappers
                        if (isInsideParagraph) {
                            return (
                                <img
                                    src={imgSrc}
                                    alt={alt}
                                    className="rounded-md my-2 max-w-full h-auto"
                                    style={{
                                        width: width || "auto",
                                        height: height || "auto",
                                        maxWidth: "100%"
                                    }}
                                    loading="lazy"
                                    {...rest}
                                />
                            );
                        }

                        /* Figure box: sized by `width` when given, otherwise
                           shrink-wraps the image (display: table) so the caption
                           never grows wider than the image itself. */
                        const marginX =
                            align === "left" ? "mr-auto" :
                                align === "right" ? "ml-auto" :
                                    "mx-auto";

                        /* Highlight a leading "Figure N." label in captions */
                        const labelMatch = alt.match(/^((?:Figure|Fig\.)\s*\d+[a-z]?\.)\s*([\s\S]*)$/);

                        return (
                            <figure
                                className={`md-figure my-10 ${marginX} ${width ? "block" : "table"}`}
                                style={{
                                    width: width || undefined,
                                    maxWidth: "100%",
                                    /* In a .figure-grid row, grow in proportion to aspect
                                       ratio so every image ends up the same height. */
                                    ...(ratio ? { flex: `${ratio} 1 0%` } : {}),
                                }}
                            >
                                <img
                                    src={imgSrc}
                                    alt={alt}
                                    className="rounded-sm block w-full h-auto bg-white/5"
                                    style={{ height: height || "auto" }}
                                    loading="lazy"
                                    {...rest}
                                />
                                {alt && (
                                    <figcaption
                                        className={`mt-3 text-[13px] leading-relaxed text-white/60 font-body ${width ? "" : "table-caption caption-bottom"}`}
                                    >
                                        {labelMatch ? (
                                            <>
                                                <span className="font-heading font-semibold text-purdue-gold/90 mr-1">
                                                    {labelMatch[1]}
                                                </span>
                                                {labelMatch[2]}
                                            </>
                                        ) : (
                                            alt
                                        )}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    },

                    video: ({ src, width, height, poster, controls = true, ...rest }) => {
                        /* Bail out if src is not a string */
                        if (typeof src !== "string") return null;

                        const videoSrc: string =
                            src.startsWith("http") || src.startsWith("/")
                                ? src
                                : `/blog/video/${src}`;

                        /* Default video settings */
                        const videoWidth = width || "100%";
                        const videoHeight = height || "auto";

                        return (
                            <div className="my-8 w-full flex justify-center">
                                <div className="max-w-4xl w-full">
                                    <video
                                        src={videoSrc}
                                        controls={controls}
                                        poster={poster}
                                        className="rounded-md w-full h-auto border-2 border-purdue-gold"
                                        style={{
                                            width: videoWidth,
                                            height: videoHeight,
                                            maxWidth: "100%"
                                        }}
                                        preload="metadata"
                                        {...rest}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        );
                    },

                    /* ─── OTHER ELEMENTS ─── */
                    h1: (p) => <h1 className="text-4xl font-bold mt-8 mb-4" {...p} />,
                    h2: (p) => <h2 className="text-2xl font-bold mt-8 mb-4" {...p} />,
                    h3: (p) => <h3 className="text-xl font-bold mt-6 mb-3" {...p} />,
                    p: ({ children, ...props }) => {
                        // Check if this paragraph contains block elements that shouldn't be nested in a p
                        const hasBlockElements = React.Children.toArray(children).some(
                            child => React.isValidElement(child) &&
                                ['div', 'table', 'pre', 'blockquote', 'ul', 'ol'].includes(
                                    (child.type as React.ElementType).toString().toLowerCase() || ''
                                )
                        );

                        // If it contains block elements, render without the paragraph wrapper
                        if (hasBlockElements) {
                            return <>{children}</>;
                        }

                        return <div className="my-4 text-[#e0e0e0]" {...props}>{children}</div>;
                    },
                    a: (p) => <a className="text-purdue-rush hover:underline" {...p} />,
                    ul: (p) => <ul className="list-disc pl-6 my-4 text-[#e0e0e0]" {...p} />,
                    ol: (p) => <ol className="list-decimal pl-6 my-4 text-[#e0e0e0]" {...p} />,
                    li: (p) => <li className="my-2 text-[#e0e0e0]" {...p} />,
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
                    thead: (p) => <thead className="bg-purdue-black text-left" {...p} />,
                    th: (p) => <th className="px-4 py-2 border border-purdue-gold text-purdue-gold font-bold" {...p} />,
                    td: (p) => <td className="px-4 py-2 border border-gray-300 text-purdue-secondary-gray3" {...p} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </>
    );
} 