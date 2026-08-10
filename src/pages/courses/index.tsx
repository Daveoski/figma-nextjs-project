import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { Container, RowHeading } from "@/components/ui/Section";
import { CourseCard } from "@/components/cards/CourseCard";
import { CreatorCard } from "@/components/cards/MiscCards";
import { OfferCard } from "@/components/cards/OfferCard";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import {
  COURSE_FILTERS,
  CREATORS,
  FEATURED_COURSES,
  OFFERS,
  RECOMMENDED_COURSES,
} from "@/data/courses";
import { IMAGES } from "@/data/site";
import { TESTIMONIALS } from "@/data/marketing";

function FilterBar() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ul className="mt-5 flex flex-wrap justify-center gap-3">
      {COURSE_FILTERS.map((filter) => (
        <li key={filter.label} className="relative">
          <button
            type="button"
            aria-expanded={open === filter.label}
            onClick={() =>
              setOpen(open === filter.label ? null : filter.label)
            }
            className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-body shadow-sm hover:text-brand"
          >
            {filter.label}
            <FiChevronDown aria-hidden className="text-muted" />
          </button>

          {open === filter.label && (
            <ul className="absolute top-full left-0 z-20 mt-2 min-w-44 rounded-lg bg-white p-2 shadow-xl">
              {filter.options.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className="block w-full rounded px-3 py-2 text-left text-sm text-body hover:bg-sky"
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Courses — TOTC</title>
      </Head>

      {/* Search band */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.team}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand/85" />
        </div>

        <Container className="py-12">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-3xl overflow-hidden rounded-md bg-white"
          >
            <label htmlFor="course-search" className="sr-only">
              Search your favourite course
            </label>
            <span className="grid place-items-center pl-4 text-muted">
              <FiSearch aria-hidden />
            </span>
            <input
              id="course-search"
              type="search"
              placeholder="Search your favourite course"
              className="min-w-0 flex-1 px-4 py-3 text-body placeholder:text-muted focus:outline-none"
            />
            <Button type="submit" className="!rounded-none px-8">
              Search
            </Button>
          </form>

          <FilterBar />
        </Container>
      </section>

      {/* Course grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* Learning platform promo */}
      <section className="pb-16">
        <Container>
          <div className="grid items-center gap-10 rounded-2xl bg-sky p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <h2 className="text-2xl leading-snug font-bold sm:text-3xl">
                Know about learning learning platform
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Free E-book, video & consolation",
                  "Top instructors from around world",
                  "Top courses from your team",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/register" className="mt-8">
                Start learning now
              </ButtonLink>
            </div>

            <div className="relative aspect-16/10 overflow-hidden rounded-xl">
              <Image
                src={IMAGES.zoomLaptop}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Recommended */}
      <section className="bg-sky/60 py-16">
        <Container>
          <RowHeading title="Recommended for you" href="/courses" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {RECOMMENDED_COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* Creators */}
      <section className="py-16">
        <Container>
          <RowHeading title="Classes tought by real creators" href="/courses" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CREATORS.map((creator, i) => (
              <CreatorCard key={`${creator.name}-${i}`} creator={creator} />
            ))}
          </div>
        </Container>
      </section>

      {/* Student testimonial */}
      <section className="bg-sky/60 py-16">
        <Container>
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            What our students have to say
          </h2>

          <article className="mt-8 grid items-center gap-8 rounded-2xl bg-white p-8 lg:grid-cols-[minmax(0,260px)_1fr]">
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full">
              <Image
                src={TESTIMONIALS[0].photo}
                alt=""
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="font-semibold text-ink">Savannah Nguyen</p>
              <p className="text-sm text-brand">tanya.hill@example.com</p>
              <blockquote className="mt-4 leading-7 text-body">
                {TESTIMONIALS[0].quote}
              </blockquote>
              <div className="mt-4">
                <Stars value={5} />
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* Offers */}
      <section className="py-16">
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
