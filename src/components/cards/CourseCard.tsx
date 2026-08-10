import Image from "next/image";
import Link from "next/link";
import { FiClock, FiGrid } from "react-icons/fi";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(47,50,125,0.18)] transition-shadow hover:shadow-[0_18px_40px_-12px_rgba(47,50,125,0.28)]">
      <Link href={`/courses/${course.slug}`} className="block">
        <div className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src={course.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <FiGrid aria-hidden />
            {course.category}
          </span>
          <span className="flex items-center gap-1.5">
            <FiClock aria-hidden />
            {course.duration}
          </span>
        </div>

        <h3 className="mt-3 text-base leading-snug font-semibold text-ink">
          <Link href={`/courses/${course.slug}`} className="hover:text-brand">
            {course.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-body">
          {course.blurb}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
          <span className="flex min-w-0 items-center gap-2">
            <Image
              src={course.instructorAvatar}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 rounded-full object-cover"
            />
            <span className="truncate text-xs text-body">
              {course.instructor}
            </span>
          </span>

          <span className="flex shrink-0 items-baseline gap-2">
            <s className="text-xs text-accent-orange">${course.originalPrice}</s>
            <span className="font-bold text-brand">${course.price}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
