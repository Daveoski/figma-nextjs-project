import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Section";
import { AudienceCard } from "@/components/cards/MiscCards";
import { ALL_IN_ONE, AUDIENCE_CARDS, SUCCESS_STATS } from "@/data/marketing";
import { IMAGES } from "@/data/site";

export function Success() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Our Success"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tortor ut lacus vulputate gravida. Suspendisse ut lorem sit amet mi consequat maximus."
        />

        <dl className="mt-16 grid grid-cols-2 gap-y-10 text-center sm:grid-cols-3 lg:grid-cols-5">
          {SUCCESS_STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-bold text-ink sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-body">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function AllInOne() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title={
            <>
              All-In-One <span className="text-brand">Cloud Software.</span>
            </>
          }
          underline={false}
          subtitle="TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office."
        />

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {ALL_IN_ONE.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl bg-white p-8 text-center shadow-[0_12px_40px_-16px_rgba(47,50,125,0.25)]"
            >
              <Image
                src={item.icon}
                alt=""
                width={72}
                height={72}
                className="mx-auto h-18 w-18 object-contain"
              />
              <h3 className="mt-5 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function WhatIsTotc() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title="What is TOTC?"
          subtitle="TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {AUDIENCE_CARDS.map((card) => (
            <AudienceCard key={card.label} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PhysicalClassroom() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl leading-snug font-bold sm:text-4xl">
              <span className="text-brand">Everything you can do in a</span>{" "}
              physical classroom,{" "}
              <span className="text-brand">you can do with TOTC</span>
            </h2>
            <p className="mt-6 leading-7 text-body">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a
              href="#features"
              className="mt-6 inline-block text-brand underline underline-offset-4 hover:text-brand-dark"
            >
              Learn more
            </a>
          </div>

          <div className="relative">
            {/* Offset teal/blue frames behind the photo */}
            <span
              aria-hidden
              className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-2xl border-t-8 border-l-8 border-accent-sky"
            />
            <span
              aria-hidden
              className="absolute -right-4 -bottom-4 h-24 w-24 rounded-br-2xl border-r-8 border-b-8 border-[#23BDB8]"
            />
            <div className="relative aspect-16/10 overflow-hidden rounded-xl">
              <Image
                src={IMAGES.team}
                alt="Students working in a classroom"
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />
              <button
                type="button"
                aria-label="Play video"
                className="absolute inset-0 grid place-items-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-105">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="ml-1 h-6 w-6 fill-brand"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
