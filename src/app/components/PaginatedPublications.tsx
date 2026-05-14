"use client";

import { useState } from "react";

interface Publication {
  id: string | number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  url: string;
  doi: string;
}

interface PaginatedPublicationsProps {
  publications: Publication[];
  itemsPerPage?: number;
}

export default function PaginatedPublications({
  publications,
  itemsPerPage = 10,
}: PaginatedPublicationsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(publications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPublications = publications.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 7;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="border-t border-white/25">
        {currentPublications.map((publication, idx) => {
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
                <span className="font-heading text-[11px] font-medium tracking-[0.3em] text-purdue-gold/80 md:w-14 md:shrink-0">
                  {String(startIndex + idx + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-medium text-lg md:text-xl text-white leading-snug group-hover:text-purdue-gold transition-colors">
                    {publication.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 font-body leading-relaxed">
                    {publication.authors}
                  </p>
                </div>

                <div className="md:text-right md:w-56 md:shrink-0 font-body text-xs">
                  <p className="text-white/75">{publication.journal}</p>
                  <p className="mt-1 text-white/55">
                    {publication.year} &middot;{" "}
                    <span className="text-purdue-gold/90 group-hover:text-purdue-gold transition-colors">
                      {linkProps.label}
                    </span>
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-xs font-heading font-medium tracking-[0.18em] uppercase text-white/80 border border-white/25 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed hover:border-purdue-gold hover:text-purdue-gold transition-colors"
            >
              Previous
            </button>

            <div className="flex gap-1.5 flex-wrap justify-center">
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === "number" && handlePageChange(page)}
                  disabled={page === "..."}
                  className={`min-w-[40px] px-3 py-2 text-xs font-heading font-medium rounded-sm transition-colors ${
                    page === currentPage
                      ? "bg-purdue-gold text-purdue-black border border-purdue-gold"
                      : page === "..."
                        ? "bg-transparent text-white/40 cursor-default border border-transparent"
                        : "text-white/70 border border-white/25 hover:border-purdue-gold hover:text-purdue-gold"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-xs font-heading font-medium tracking-[0.18em] uppercase text-white/80 border border-white/25 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed hover:border-purdue-gold hover:text-purdue-gold transition-colors"
            >
              Next
            </button>
          </div>

          <p className="text-xs text-white/50 font-body">
            Showing {startIndex + 1}&ndash;{Math.min(endIndex, publications.length)} of{" "}
            {publications.length} publications
          </p>
        </div>
      )}
    </>
  );
}
