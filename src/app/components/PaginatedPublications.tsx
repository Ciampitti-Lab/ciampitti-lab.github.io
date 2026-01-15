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
      <div className="space-y-6">
        {currentPublications.map((publication) => (
          <div
            key={publication.id}
            className="bg-white p-6 rounded-lg text-purdue-black shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-bold mb-2">{publication.title}</h3>
            <p className="text-purdue-secondary-gray2 mb-2">
              {publication.authors}
            </p>
            <div className="flex flex-wrap gap-x-6 text-sm">
              <span>{publication.journal}</span>
              <span>{publication.year}</span>
              {publication.doi ? (
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purdue-gold hover:underline"
                >
                  <span className="text-purdue-rush">
                    DOI: {publication.doi}
                  </span>
                </a>
              ) : (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purdue-gold hover:underline"
                >
                  <span className="text-purdue-rush">
                    DOI coming soon - Click to view paper
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5 md:gap-2 flex-wrap justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md md:rounded-lg bg-white text-purdue-black font-heading font-semibold shadow-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-purdue-gold transition-colors duration-200 border border-white"
            >
              Previous
            </button>

            <div className="flex gap-1.5 md:gap-2 flex-wrap justify-center">
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === "number" && handlePageChange(page)}
                  disabled={page === "..."}
                  className={`min-w-[36px] md:min-w-[40px] px-2.5 py-1.5 md:px-3 md:py-2 text-sm md:text-base rounded-md md:rounded-lg font-heading font-semibold transition-colors duration-200 ${
                    page === currentPage
                      ? "bg-purdue-rush text-white shadow-md border border-purdue-rush"
                      : page === "..."
                      ? "bg-transparent text-white cursor-default border border-transparent"
                      : "bg-white text-purdue-black shadow-sm hover:bg-purdue-gold border border-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md md:rounded-lg bg-white text-purdue-black font-heading font-semibold shadow-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-purdue-gold transition-colors duration-200 border border-white"
            >
              Next
            </button>
          </div>

          <p className="text-xs md:text-sm text-white font-body font-medium">
            Showing {startIndex + 1}-{Math.min(endIndex, publications.length)} of{" "}
            {publications.length} publications
          </p>
        </div>
      )}
    </>
  );
}
