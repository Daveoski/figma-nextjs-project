import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Tailwind width classes applied to each slide. */
  itemClassName?: string;
  className?: string;
  /** Where the arrow pair sits relative to the track. */
  controls?: "below" | "above" | "sides";
  label: string;
};

/**
 * Scroll-snap carousel. Arrows page by the visible width, and are disabled at
 * each end so the control state always reflects the real scroll position.
 */
export function Carousel<T>({
  items,
  renderItem,
  itemClassName = "w-[85%] sm:w-[46%] lg:w-[23.5%]",
  className = "",
  controls = "below",
  label,
}: CarouselProps<T>) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;

    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync, items.length]);

  function page(direction: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  }

  const arrows = (
    <div
      className={
        controls === "sides"
          ? "contents"
          : "flex items-center justify-end gap-3"
      }
    >
      <button
        type="button"
        onClick={() => page(-1)}
        disabled={atStart}
        aria-label={`Previous ${label}`}
        className={`grid h-9 w-9 place-items-center rounded-md bg-brand-soft text-white transition-opacity hover:bg-brand disabled:opacity-40 ${
          controls === "sides"
            ? "absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-brand shadow-lg"
            : ""
        }`}
      >
        <FiChevronLeft aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => page(1)}
        disabled={atEnd}
        aria-label={`Next ${label}`}
        className={`grid h-9 w-9 place-items-center rounded-md bg-brand text-white transition-opacity hover:bg-brand-dark disabled:opacity-40 ${
          controls === "sides"
            ? "absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-lg"
            : ""
        }`}
      >
        <FiChevronRight aria-hidden />
      </button>
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      {controls === "above" && <div className="mb-4">{arrows}</div>}
      {controls === "sides" && arrows}

      <ul
        ref={trackRef}
        onScroll={sync}
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item, i) => (
          <li key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {renderItem(item, i)}
          </li>
        ))}
      </ul>

      {controls === "below" && <div className="mt-6">{arrows}</div>}
    </div>
  );
}
