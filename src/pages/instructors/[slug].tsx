import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { FiStar, FiUsers, FiVideo } from "react-icons/fi";
import { Container } from "@/components/ui/Section";
import { BookCard } from "@/components/cards/MiscCards";
import { CourseCard } from "@/components/cards/CourseCard";
import { Pagination } from "@/components/ui/Pagination";
import { Button } from "@/components/ui/Button";
import { SocialRow } from "@/components/ui/SocialRow";
import { INSTRUCTOR, INSTRUCTOR_TABS } from "@/data/classroom";
import { BOOKS, RECOMMENDED_COURSES } from "@/data/courses";
import { POST_BODY } from "@/data/blog";

const STATS = [
  { icon: FiStar, label: INSTRUCTOR.rating },
  { icon: FiUsers, label: INSTRUCTOR.students },
  { icon: FiVideo, label: `24 ${INSTRUCTOR.courses}` },
];

const PAGE_COUNT = 4;

export default function InstructorPage({ slug }: { slug: string }) {
  const [tab, setTab] = useState(INSTRUCTOR_TABS[0]);
  const [page, setPage] = useState(1);

  return (
    <>
      <Head>
        <title>{`${INSTRUCTOR.name} — TOTC`}</title>
      </Head>

      {/* Cover + identity */}
      <div className="relative h-52 w-full sm:h-64">
        <Image
          src={INSTRUCTOR.cover}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <span className="absolute inset-0 bg-ink/45" />
      </div>

      <Container>
        <div className="-mt-20 flex flex-wrap items-end justify-between gap-8 pb-10">
          <div className="flex flex-wrap items-end gap-6">
            <Image
              src={INSTRUCTOR.photo}
              alt=""
              width={144}
              height={144}
              priority
              className="h-36 w-36 rounded-2xl border-4 border-white object-cover shadow-lg"
            />

            <div className="pb-2">
              <h1 className="text-2xl font-bold sm:text-3xl">
                {INSTRUCTOR.name}
              </h1>
              <p className="mt-1 text-body">{INSTRUCTOR.role}</p>

              <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-2">
                {STATS.map((stat) => (
                  <li
                    key={stat.label}
                    className="flex items-center gap-2 text-sm text-body"
                  >
                    <stat.icon aria-hidden className="text-brand" />
                    {stat.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-2">
            <SocialRow />
            <Button aria-label={`Follow ${INSTRUCTOR.name}`}>Follow</Button>
          </div>
        </div>
      </Container>

      {/* Tabs */}
      <Container className="pb-20">
        <div
          role="tablist"
          aria-label={`${INSTRUCTOR.name} sections`}
          className="no-scrollbar flex gap-2 overflow-x-auto border-b border-black/10"
        >
          {INSTRUCTOR_TABS.map((label) => (
            <button
              key={label}
              role="tab"
              type="button"
              id={`tab-${label}`}
              aria-selected={tab === label}
              aria-controls={`panel-${label}`}
              onClick={() => setTab(label)}
              className={`shrink-0 border-b-2 px-5 py-3 text-sm font-medium transition-colors ${
                tab === label
                  ? "border-brand text-brand"
                  : "border-transparent text-body hover:text-brand"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
          className="pt-10"
        >
          {tab === "About" ? (
            <div className="max-w-3xl space-y-6">
              <p className="leading-7 text-body">{INSTRUCTOR.bio}</p>
              {POST_BODY.slice(0, 3).map((paragraph, i) => (
                <p key={i} className="leading-7 text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : tab === "Course" ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {RECOMMENDED_COURSES.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {BOOKS.map((book, i) => (
                <BookCard key={`${slug}-${i}`} book={book} />
              ))}
            </div>
          )}

          {tab !== "About" && (
            <Pagination
              className="mt-12"
              current={page}
              total={PAGE_COUNT}
              onChange={setPage}
            />
          )}
        </div>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [{ params: { slug: "john-anderson" } }],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps<{ slug: string }> = ({
  params,
}) => ({
  props: { slug: (params?.slug as string) ?? "john-anderson" },
});
