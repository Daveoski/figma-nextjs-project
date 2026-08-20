import Image from "next/image";
import { Container, RowHeading, SectionHeading } from "@/components/ui/Section";
import { Carousel } from "@/components/ui/Carousel";
import { ArticleCard } from "@/components/cards/BlogCard";
import { Stars } from "@/components/ui/Stars";
import { ButtonLink } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/data/marketing";
import { MARKETING_ARTICLES } from "@/data/blog";
import { FEATURED_COURSES } from "@/data/courses";

const EXPLORE_ROWS = [
  { label: "Lorem Ipsum", tint: "#F48C06" },
  { label: "Quisque a Consequat", tint: "#5B72EE" },
  { label: "Aenean Facilisis", tint: "#49BBBD" },
];

/**
 * "Explore Course" band. Each row is a strip of coloured spines with one
 * expanded card, mimicking a shelf of books.
 */
export function ExploreCourse() {
  const course = FEATURED_COURSES[0];

  return (
    <section className="bg-[#edf5f5] py-20">
      <Container className="max-w-[1160px]">
        <div className="mb-9 overflow-hidden rounded-[2rem] border-[3px] border-[#5ed2d0] bg-[#f4f5f7] shadow-[0_8px_30px_-18px_rgba(47,50,125,0.45)]">
          <div className="flex min-h-[92px] items-center justify-center px-5 py-6">
            <span className="text-center text-[2.15rem] font-medium tracking-[0.02em] text-[#4dc7c9] sm:text-[2.6rem]">
              EXPLORE
            </span>
          </div>
        </div>

        <div className="mb-6 flex items-end justify-between gap-6">
          <h2 className="text-[2.75rem] leading-none font-medium text-[#1d1f38] tracking-[-0.04em]">
            Aenean Facilisis
          </h2>
          <a
            href="/courses"
            className="flex items-center gap-2 text-[2rem] font-medium tracking-[-0.03em] text-[#4dc7c9] transition-opacity hover:opacity-80"
          >
            <span>See all</span>
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mb-6 flex items-end gap-2 overflow-hidden rounded-[1.25rem]">
          {Array.from({ length: 14 }, (_, i) => (
            <div
              key={i}
              className="h-20 w-[2.1rem] shrink-0 rounded-[0.6rem] bg-[#8ad8d6] opacity-80 sm:h-24 sm:w-[2.5rem]"
              style={{ opacity: 0.35 + ((i % 5) + 1) * 0.12 }}
            />
          ))}
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-[#e6eceb] bg-white p-5 shadow-[0_22px_36px_-28px_rgba(47,50,125,0.35)] sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative h-32 w-full max-w-[190px] shrink-0 overflow-hidden rounded-[1.4rem] bg-[#c3d2d8] sm:h-36">
              <Image
                src={course.image}
                alt="Course cover"
                fill
                sizes="190px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-[2rem] leading-[1.15] font-medium tracking-[-0.04em] text-[#1d1f38]">
                Integer id Orc Sed Ante Tincidunt
              </h3>
              <p className="mt-3 max-w-[780px] text-[1.05rem] leading-7 text-[#70738a]">
                {course.blurb}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Stars value={5} size="text-[1rem]" />
                <span className="text-[1.05rem] font-semibold text-[#f48c06]">
                  $ 400
                </span>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

export function WhatTheySay() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand uppercase">
              Testimonial
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What They Say?
            </h2>
            <p className="mt-5 leading-7 text-body">
              TOTC has got more than 100k positive ratings from our users around
              the world.
            </p>
            <p className="mt-4 leading-7 text-body">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="mt-4 leading-7 text-body">
              Are you too? Please give your assessment
            </p>

            <ButtonLink href="/blog" variant="outline" className="mt-6">
              Write your assessment
            </ButtonLink>
          </div>

          <Carousel
            items={TESTIMONIALS}
            label="testimonials"
            controls="sides"
            itemClassName="w-full"
            renderItem={(t) => (
              <article className="grid items-center gap-8 rounded-2xl bg-sky/60 p-8 sm:grid-cols-[minmax(0,220px)_1fr]">
                <div className="relative mx-auto aspect-3/4 w-48 overflow-hidden rounded-xl sm:w-full">
                  <Image
                    src={t.photo}
                    alt=""
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <blockquote className="leading-7 text-body">
                    {t.quote}
                  </blockquote>
                  <footer className="mt-5">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-body">{t.role}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Stars value={t.rating} />
                      <span className="text-xs text-muted">{t.reviews}</span>
                    </div>
                  </footer>
                </div>
              </article>
            )}
          />
        </div>
      </Container>
    </section>
  );
}

export function LatestNews() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Lastest News and Resources"
          subtitle="See the developments that have occurred to TOTC in the world"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETING_ARTICLES.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
