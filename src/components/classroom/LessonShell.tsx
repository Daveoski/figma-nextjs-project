import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { FiCalendar, FiPlayCircle, FiPlus, FiShare2 } from "react-icons/fi";
import { ClassroomBar } from "@/components/classroom/ClassroomBar";
import { Container } from "@/components/ui/Section";
import { LESSON_SECTIONS, type LessonTint } from "@/data/classroom";

const TINT_CLASS: Record<LessonTint, string> = {
  blue: "bg-pastel-blue",
  peach: "bg-pastel-peach",
  pink: "bg-pastel-pink",
};

const LESSON_NAV = [
  { href: "/lesson", label: "Lesson", Icon: FiPlayCircle },
  { href: "/lesson/share", label: "Share and Refer", Icon: FiShare2 },
  { href: "/lesson/event", label: "Create new event", Icon: FiPlus },
  { href: "/lesson/calendar", label: "Calendar", Icon: FiCalendar },
];

/**
 * Lesson screens share a pastel lesson list on the left and swap only the
 * right-hand panel, so the sidebar lives here and each route supplies content.
 */
export function LessonShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { pathname } = useRouter();

  return (
    <>
      <ClassroomBar title={title} />

      <Container className="py-8">
        <nav
          aria-label="Lesson views"
          className="no-scrollbar mb-8 flex gap-3 overflow-x-auto"
        >
          {LESSON_NAV.map(({ href, label, Icon }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand text-white"
                    : "bg-sky text-body hover:text-brand"
                }`}
              >
                <Icon aria-hidden />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,20rem)_1fr]">
          {/* Lesson list */}
          <aside className="rounded-2xl bg-white p-5 shadow-[0_14px_40px_-26px_rgba(47,50,125,0.5)] lg:sticky lg:top-24 lg:max-h-[calc(100dvh-8rem)] lg:overflow-y-auto">
            {LESSON_SECTIONS.map((section) => (
              <section key={section.heading} className="mb-6 last:mb-0">
                <h2 className="mb-3 text-xs font-bold tracking-wide text-muted uppercase">
                  {section.heading}
                </h2>

                <ul className="space-y-3">
                  {section.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link
                        href="/lesson"
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-opacity hover:opacity-85 ${
                          TINT_CLASS[lesson.tint]
                        }`}
                      >
                        <FiPlayCircle
                          aria-hidden
                          className="shrink-0 text-lg text-ink/70"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-ink">
                            {lesson.title}
                          </span>
                          <span className="text-xs text-ink/60">
                            {lesson.duration}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </aside>

          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </>
  );
}
