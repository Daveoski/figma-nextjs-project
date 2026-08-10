import { useId, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type AccordionItem = {
  q: string;
  a: string;
};

export function Accordion({
  items,
  className = "",
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={`divide-y divide-black/10 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-4 py-5 text-left"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                <span className="flex-1 text-body">{item.q}</span>
                <FiChevronDown
                  aria-hidden
                  className={`shrink-0 text-body transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              hidden={!isOpen}
              className="pb-6 pl-6 text-sm leading-6 text-body"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
