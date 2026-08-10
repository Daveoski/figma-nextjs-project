import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { CURRENT_USER, IMAGES } from "@/data/site";

/**
 * Slim app bar for the classroom and lesson screens. These routes render
 * outside the marketing shell, so they carry their own chrome.
 */
export function ClassroomBar({ title }: { title?: ReactNode }) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-360 items-center gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src={IMAGES.logo}
            alt="TOTC home"
            width={120}
            height={48}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {title && (
          <h1 className="hidden min-w-0 truncate text-sm font-semibold text-ink sm:block">
            {title}
          </h1>
        )}

        <form
          onSubmit={(e) => e.preventDefault()}
          className="ml-auto hidden max-w-xs flex-1 items-center gap-2 rounded-full bg-sky px-4 py-2 lg:flex"
        >
          <FiSearch aria-hidden className="shrink-0 text-muted" />
          <input
            type="search"
            name="q"
            aria-label="Search lessons"
            placeholder="Search"
            className="w-full bg-transparent text-sm text-body placeholder:text-muted focus:outline-none"
          />
        </form>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <button
            type="button"
            aria-label="Notifications"
            className="grid h-9 w-9 place-items-center rounded-full bg-sky text-body transition-colors hover:text-brand"
          >
            <FiBell aria-hidden />
          </button>

          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src={CURRENT_USER.avatar}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="hidden text-sm font-medium text-ink sm:inline">
              {CURRENT_USER.name}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
