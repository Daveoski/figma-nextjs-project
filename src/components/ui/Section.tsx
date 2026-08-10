import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-360 px-6 lg:px-14 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Centred heading used by the marketing sections: a navy title with an
 * optional teal underline and a grey supporting line.
 */
export function SectionHeading({
  title,
  subtitle,
  underline = true,
  className = "",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  underline?: boolean;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {underline && (
        <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-brand" />
      )}
      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl leading-7 text-body">{subtitle}</p>
      )}
    </div>
  );
}

/** Left-aligned row heading with a "See all" link on the right. */
export function RowHeading({
  title,
  href,
  seeAllLabel = "See all",
  className = "",
}: {
  title: ReactNode;
  href?: string;
  seeAllLabel?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-end justify-between gap-6 ${className}`}>
      <h2 className="text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
      {href && (
        <Link
          href={href}
          className="flex shrink-0 items-center gap-2 text-sm font-medium text-brand hover:underline"
        >
          {seeAllLabel}
          <FiArrowRight aria-hidden />
        </Link>
      )}
    </div>
  );
}
