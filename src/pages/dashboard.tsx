import Image from "next/image";
import Head from "next/head";
import { Container, RowHeading } from "@/components/ui/Section";
import { CourseCard } from "@/components/cards/CourseCard";
import { CategoryCard, ProgressCourseCard } from "@/components/cards/MiscCards";
import { Carousel } from "@/components/ui/Carousel";
import { ButtonLink } from "@/components/ui/Button";
import {
  CATEGORIES,
  CHOICE_COURSES,
  CONTINUE_LEARNING,
  PERSONAL_DEVELOPMENT_COURSES,
  VIEWING_COURSES,
} from "@/data/courses";
import { CURRENT_USER, IMAGES } from "@/data/site";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard — TOTC</title>
      </Head>

      {/* Welcome band */}
      <section className="bg-sky/70 py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Image
                src={CURRENT_USER.avatar}
                alt=""
                width={64}
                height={64}
                priority
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-body">
                  Welcome back, {CURRENT_USER.name}
                </p>
                <h1 className="mt-1 text-2xl leading-snug font-bold sm:text-3xl">
                  Ready for your{" "}
                  <span className="text-brand">next lesson?</span>
                </h1>
              </div>
            </div>

            <ButtonLink href="/lesson" size="lg">
              Resume learning
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Continue learning */}
      <section className="py-14">
        <Container>
          <RowHeading title="Continue learning" href="/courses" />
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {CONTINUE_LEARNING.map((course, i) => (
              <ProgressCourseCard key={i} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-sky/60 py-14">
        <Container>
          <RowHeading title="Browse by category" href="/courses" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category, i) => (
              <CategoryCard key={`${category.name}-${i}`} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Personal development */}
      <section className="py-14">
        <Container>
          <RowHeading title="Personal Development" href="/courses" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PERSONAL_DEVELOPMENT_COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* Because you viewed */}
      <section className="pb-14">
        <Container>
          <RowHeading
            title="Because you viewed AWS Certified solutions Architect"
            href="/courses"
          />
          <Carousel
            className="mt-8"
            label="viewed courses"
            items={VIEWING_COURSES}
            renderItem={(course) => <CourseCard course={course} />}
          />
        </Container>
      </section>

      {/* Students are viewing */}
      <section className="pb-14">
        <Container>
          <RowHeading title="Students are viewing" href="/courses" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CHOICE_COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* Dark CTA */}
      <section className="pb-20">
        <Container>
          <div className="grid items-center gap-10 overflow-hidden rounded-2xl bg-ink p-8 lg:grid-cols-2 lg:p-14">
            <div>
              <h2 className="text-2xl leading-snug font-bold text-white sm:text-3xl">
                Online coaching lessons for remote learning.
              </h2>
              <p className="mt-5 leading-7 text-footer-text">
                Class provides tools to help run and manage the class such as
                Live Attendance, Hand Raising, Polls, Screen Sharing and more.
              </p>
              <ButtonLink href="/courses" variant="white" className="mt-8">
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
    </>
  );
}
