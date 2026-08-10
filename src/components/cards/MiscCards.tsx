import Image from "next/image";
import Link from "next/link";
import {
  FiBriefcase,
  FiCamera,
  FiCode,
  FiMic,
  FiPenTool,
  FiTrendingUp,
} from "react-icons/fi";
import type { Category, Creator, Book, ContinueCourse } from "@/data/courses";
import { Stars } from "@/components/ui/Stars";
import { ButtonLink } from "@/components/ui/Button";

const CATEGORY_ICONS = {
  design: FiPenTool,
  development: FiCode,
  business: FiBriefcase,
  marketing: FiTrendingUp,
  photography: FiCamera,
  acting: FiMic,
} as const;

export function CategoryCard({ category }: { category: Category }) {
  const Icon = CATEGORY_ICONS[category.icon];

  return (
    <article className="h-full rounded-xl bg-white p-6 text-center shadow-[0_10px_30px_-14px_rgba(47,50,125,0.2)]">
      <span
        className="mx-auto grid h-14 w-14 place-items-center rounded-full"
        style={{ backgroundColor: category.tint }}
      >
        <Icon aria-hidden className="text-xl text-white" />
      </span>
      <h3 className="mt-4 font-semibold text-ink">{category.name}</h3>
      <p className="mt-2 line-clamp-2 text-xs leading-5 text-body">
        {category.blurb}
      </p>
    </article>
  );
}

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <article className="h-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-14px_rgba(47,50,125,0.2)]">
      <div className="relative aspect-square w-full">
        <Image
          src={creator.photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 16vw, 45vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-ink">{creator.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-body">
          {creator.blurb}
        </p>
      </div>
    </article>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="h-full overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_-14px_rgba(47,50,125,0.2)]">
      <div className="relative aspect-3/4 w-full">
        <Image
          src={book.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 16vw, 45vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-ink">{book.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-bold text-brand">${book.price}</span>
          <Stars value={5} size="text-xs" />
        </div>
      </div>
    </article>
  );
}

/** Dashboard card showing how far through a course the student is. */
export function ProgressCourseCard({ course }: { course: ContinueCourse }) {
  return (
    <article className="h-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(47,50,125,0.18)]">
      <div className="relative aspect-16/9 w-full">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 90vw"
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <p className="text-xs text-muted">{course.lesson}</p>
        <h3 className="mt-2 text-base leading-snug font-semibold text-ink">
          {course.title}
        </h3>

        <div className="mt-4">
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-sky"
            role="progressbar"
            aria-valuenow={course.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${course.title} progress`}
          >
            <span
              className="block h-full rounded-full bg-brand"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-body">{course.progress}% complete</p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2">
            <Image
              src={course.instructorAvatar}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="text-xs text-body">{course.instructor}</span>
          </span>
          <ButtonLink href="/lesson" size="sm">
            Resume
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

/** Photo card with a label and CTA, used by the landing "What is TOTC" band. */
export function AudienceCard({
  label,
  cta,
  photo,
  inverted = false,
}: {
  label: string;
  cta: string;
  photo: string;
  inverted?: boolean;
}) {
  return (
    <article className="relative aspect-16/10 overflow-hidden rounded-xl">
      <Image
        src={photo}
        alt=""
        fill
        sizes="(min-width: 1024px) 45vw, 90vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-lg font-bold tracking-wide text-white uppercase">
          {label}
        </h3>
        <Link
          href={inverted ? "/register" : "/instructors/john-anderson"}
          className={`mt-4 inline-flex rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${
            inverted
              ? "bg-white text-heading hover:bg-white/90"
              : "bg-brand text-white hover:bg-brand-dark"
          }`}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
