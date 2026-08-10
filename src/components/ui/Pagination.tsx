import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PaginationProps = {
  current: number;
  total: number;
  onChange?: (page: number) => void;
  className?: string;
};

export function Pagination({
  current,
  total,
  onChange,
  className = "",
}: PaginationProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center justify-center gap-2 ${className}`}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={current === 1}
        onClick={() => onChange?.(current - 1)}
        className="grid h-9 w-9 place-items-center rounded-md text-body transition-colors hover:bg-sky disabled:opacity-40"
      >
        <FiChevronLeft aria-hidden />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={page === current ? "page" : undefined}
          onClick={() => onChange?.(page)}
          className={`grid h-9 w-9 place-items-center rounded-md text-sm font-medium transition-colors ${
            page === current
              ? "bg-brand text-white"
              : "text-body hover:bg-sky"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        disabled={current === total}
        onClick={() => onChange?.(current + 1)}
        className="grid h-9 w-9 place-items-center rounded-md text-body transition-colors hover:bg-sky disabled:opacity-40"
      >
        <FiChevronRight aria-hidden />
      </button>
    </nav>
  );
}
