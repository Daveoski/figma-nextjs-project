import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { FiCheck } from "react-icons/fi";
import { Container, RowHeading } from "@/components/ui/Section";
import { ArticleCard } from "@/components/cards/BlogCard";
import { OfferCard } from "@/components/cards/OfferCard";
import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { SocialRow } from "@/components/ui/SocialRow";
import {
  COURSE_INCLUDES,
  FEATURED_COURSES,
  OFFERS,
  RATING_BREAKDOWN,
  type Course,
} from "@/data/courses";
import { MARKETING_ARTICLES } from "@/data/blog";
import { AVATARS, IMAGES } from "@/data/site";

const TABS = ["Overview", "Curriculum", "Instructor", "Reviews"];

const REVIEWS = [
  {
    name: "Lina",
    avatar: AVATARS.patricia,
    when: "3 Month",
    body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    name: "Lina",
    avatar: AVATARS.eveny,
    when: "3 Month",
    body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
];

export default function CourseDetailPage({ course }: { course: Course }) {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <>
      <Head>
        <title>{`${course.title} — TOTC`}</title>
      </Head>

      {/* Cover */}
      <div className="relative h-64 w-full sm:h-80">
        <Image
          src={course.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container className="pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,320px)]">
          {/* Main column */}
          <div className="pt-8">
            <div
              role="tablist"
              aria-label="Course sections"
              className="flex flex-wrap gap-3"
            >
              {TABS.map((label) => (
                <button
                  key={label}
                  role="tab"
                  type="button"
                  aria-selected={tab === label}
                  onClick={() => setTab(label)}
                  className={`rounded-md px-6 py-2.5 text-sm font-medium transition-colors ${
                    tab === label
                      ? "bg-brand text-white"
                      : "bg-black/5 text-body hover:bg-black/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div role="tabpanel" className="mt-8 rounded-2xl bg-sky/70 p-6 sm:p-8">
              <div className="grid gap-8 sm:grid-cols-[minmax(0,180px)_1fr]">
                <div className="rounded-xl bg-white p-6 text-center">
                  <p className="text-3xl font-bold text-ink">4 out of 5</p>
                  <div className="mt-2 flex justify-center">
                    <Stars value={4} />
                  </div>
                  <p className="mt-2 text-sm text-body">Top Raiting</p>
                </div>

                <ul className="space-y-2.5">
                  {RATING_BREAKDOWN.map((row) => (
                    <li key={row.stars} className="flex items-center gap-4">
                      <span className="w-14 shrink-0 text-sm text-body">
                        {row.stars} Stars
                      </span>
                      <span className="h-2 flex-1 overflow-hidden rounded-full bg-white">
                        <span
                          className="block h-full rounded-full bg-brand"
                          style={{ width: `${row.percent}%` }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-8 divide-y divide-black/10">
                {REVIEWS.map((review, i) => (
                  <li key={i} className="py-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-3">
                        <Image
                          src={review.avatar}
                          alt=""
                          width={36}
                          height={36}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <span>
                          <span className="block text-sm font-semibold text-ink">
                            {review.name}
                          </span>
                          <Stars value={5} size="text-xs" />
                        </span>
                      </span>
                      <span className="text-xs text-muted">{review.when}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-body">
                      {review.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buy card — overlaps the cover on large screens */}
          <aside className="lg:-mt-40">
            <div className="rounded-xl bg-white p-5 shadow-[0_18px_50px_-20px_rgba(47,50,125,0.35)]">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
                <Image
                  src={course.image}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-ink">$49.65</span>
                <s className="text-sm text-muted">$99.99</s>
                <span className="text-sm font-medium text-accent-pink">
                  50% Off
                </span>
              </div>
              <p className="mt-1 text-xs text-brand">
                11 hour left at this price
              </p>

              <ButtonLink
                href="/checkout"
                className="mt-4 w-full"
                aria-label={`Buy ${course.title}`}
              >
                Buy Now
              </ButtonLink>

              <h2 className="mt-6 border-t border-black/10 pt-5 font-semibold text-ink">
                This Course included
              </h2>
              <ul className="mt-3 space-y-2.5">
                {COURSE_INCLUDES.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-body"
                  >
                    <span
                      className="grid h-5 w-5 shrink-0 place-items-center rounded"
                      style={{ backgroundColor: item.tint }}
                    >
                      <FiCheck aria-hidden className="text-[10px] text-white" />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <h2 className="mt-6 border-t border-black/10 pt-5 font-semibold text-ink">
                Training 5 or more people
              </h2>
              <p className="mt-2 text-xs leading-5 text-body">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>

              <h2 className="mt-6 border-t border-black/10 pt-5 font-semibold text-ink">
                Share this course
              </h2>
              <SocialRow className="mt-3" />
            </div>
          </aside>
        </div>
      </Container>

      {/* Marketing articles */}
      <section className="bg-sky/60 py-16">
        <Container>
          <RowHeading title="Marketing Articles" href="/blog" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MARKETING_ARTICLES.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* Physical classroom band */}
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl leading-snug font-bold sm:text-3xl">
                Everything you can do in a physical classroom,{" "}
                <span className="text-brand">you can do with TOTC</span>
              </h2>
              <p className="mt-5 leading-7 text-body">
                TOTC’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </p>
              <a
                href="#"
                className="mt-5 inline-block text-brand underline underline-offset-4"
              >
                Learn more
              </a>
            </div>

            <div className="relative aspect-16/10 overflow-hidden rounded-xl">
              <Image
                src={IMAGES.team}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 shadow-lg">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="ml-1 h-5 w-5 fill-brand"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Offers */}
      <section className="pb-20">
        <Container>
          <RowHeading
            title="Top Education offers and deals are listed here"
            href="/pricing"
          />
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {OFFERS.map((offer, i) => (
              <OfferCard key={i} offer={offer} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: FEATURED_COURSES.map((course) => ({ params: { slug: course.slug } })),
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps<{ course: Course }> = ({
  params,
}) => {
  const slug = params?.slug as string;
  const course =
    FEATURED_COURSES.find((c) => c.slug === slug) ?? FEATURED_COURSES[0];

  return { props: { course } };
};
