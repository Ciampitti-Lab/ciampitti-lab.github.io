"use client";

import { useState } from "react";

interface PressMention {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
}

interface InTheNewsProps {
  items: PressMention[];
  /** Cap the number of rows shown without pagination (e.g. on the homepage). */
  limit?: number;
  /** Enable pagination with this page size (e.g. on the /news page). */
  itemsPerPage?: number;
  /** Element id to scroll back to on page change. */
  scrollTargetId?: string;
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function Row({ item }: { item: PressMention }) {
  return (
    <a
      key={item.id}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-white/25 py-6 transition-colors hover:bg-white/[0.02]"
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-medium text-base md:text-lg text-white leading-snug group-hover:text-purdue-gold transition-colors">
            {item.title}
          </h3>
        </div>

        <div className="md:text-right md:w-64 md:shrink-0 font-body text-xs">
          {item.source && <p className="text-white/75">{item.source}</p>}
          <p className="mt-1 text-white/55">
            {formatDate(item.date)}
            {item.date && " · "}
            <span className="text-purdue-gold/90 group-hover:text-purdue-gold transition-colors">
              Read ↗
            </span>
          </p>
        </div>
      </div>
    </a>
  );
}

export default function InTheNews({
  items,
  limit,
  itemsPerPage,
  scrollTargetId = "news",
}: InTheNewsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!items || items.length === 0) return null;

  // Homepage / simple mode: no pagination, just an optional slice.
  if (!itemsPerPage) {
    const shown = limit ? items.slice(0, limit) : items;
    return (
      <div className="border-t border-white/25">
        {shown.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </div>
    );
  }

  // Paginated mode (/news page).
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const shown = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document
      .getElementById(scrollTargetId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="border-t border-white/25">
        {shown.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-xs font-heading font-medium tracking-[0.18em] uppercase text-white/80 border border-white/25 rounded-sm disabled:opacity-30 disabled:cursor-not-allowed hover:border-purdue-gold hover:text-purdue-gold transition-colors"
            >
              Previous
            </button>

            <div className="flex gap-1.5 flex-wrap justify-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`min-w-[40px] px-3 py-2 text-xs font-heading font-medium rounded-sm transition-colors ${
                    page === currentPage
                      ? "bg-purdue-gold text-purdue-black border border-purdue-gold"
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
            Showing {startIndex + 1}&ndash;
            {Math.min(startIndex + itemsPerPage, items.length)} of {items.length}{" "}
            mentions
          </p>
        </div>
      )}
    </>
  );
}
