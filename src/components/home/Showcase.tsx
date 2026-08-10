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
  return (
    <section className="bg-sky/50 py-20">
      <Container>
        <h2 className="text-2xl font-bold sm:text-3xl">Explore Course</h2>
        <p className="mt-2 text-sm text-body">
          Ut sed metus Nulla facilisi. Phasellus sollicitudin nulla et quam
          mattis feugiat.
        </p>

        <div className="mt-10 space-y-8">
          {EXPLORE_ROWS.map((row, rowIndex) => {
            const course = FEATURED_COURSES[rowIndex];

            return (
              <div key={row.label}>
                <RowHeading title={row.label} href="/courses" />

                <div className="mt-4 grid items-center gap-6 lg:grid-cols-[1fr_minmax(0,320px)]">
                  {/* Spines */}
                  <ul
                    aria-hidden
                    className="no-scrollbar flex items-end gap-2 overflow-x-auto"
                  >
                    {Array.from({ length: 14 }, (_, i) => (
                      <li
                        key={i}
                        className="h-24 w-6 shrink-0 rounded-md sm:h-28"
                        style={{
                          backgroundColor: row.tint,
                          opacity: 0.25 + ((i % 5) + 1) * 0.15,
                        }}
                      />
                    ))}
                  </ul>

                  {/* Featured card for the row */}
                  <article className="rounded-xl bg-white p-4 shadow-[0_12px_35px_-16px_rgba(47,50,125,0.3)]">
                    <div className="flex gap-4">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={course.image}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm leading-snug font-semibold text-ink">
                          Integer id Orc Sed Ante Tincidunt
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs text-body">
                          {course.blurb}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Stars value={5} size="text-[10px]" />
                          <span className="text-xs font-bold text-accent-orange">
                            $ 400
                          </span>
                        </div>
                      </div>
                    </div>

                    <ButtonLink
                      href={`/courses/${course.slug}`}
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full"
                    >
                      EXPLORE
                    </ButtonLink>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
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
