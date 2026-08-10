import Image from "next/image";
import Head from "next/head";
import { Container, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { AudienceCard } from "@/components/cards/MiscCards";
import { AUDIENCE_CARDS, SUCCESS_STATS } from "@/data/marketing";
import { CREATORS } from "@/data/courses";
import { IMAGES } from "@/data/site";

const VALUES = [
  {
    title: "Built for real classrooms",
    body: "Every feature started as a request from a teacher running a class, not a spec written in isolation.",
  },
  {
    title: "One system, not five",
    body: "Scheduling, attendance, payments, the gradebook and the classroom itself all live in the same place.",
  },
  {
    title: "Accessible by default",
    body: "Keyboard navigation, readable contrast and captions are part of the product, not an add-on.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us — TOTC</title>
      </Head>

      {/* Intro */}
      <section className="bg-sky/60 py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                About TOTC
              </p>
              <h1 className="mt-4 text-3xl leading-snug font-bold sm:text-4xl">
                Everything you can do in a physical classroom,{" "}
                <span className="text-brand">you can do with TOTC</span>
              </h1>
              <p className="mt-6 leading-7 text-body">
                TOTC’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure system. We started in 2010 with a
                single question: why should teaching online feel like less than
                teaching in a room?
              </p>
              <ButtonLink href="/courses" size="lg" className="mt-8">
                Explore courses
              </ButtonLink>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.team}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-14">
        <Container>
          <ul className="grid gap-8 text-center sm:grid-cols-3 lg:grid-cols-5">
            {SUCCESS_STATS.map((stat) => (
              <li key={stat.label}>
                <p className="text-3xl font-bold text-brand">{stat.value}</p>
                <p className="mt-2 text-sm text-body">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-sky/60 py-16">
        <Container>
          <SectionHeading title="What we care about" />

          <ul className="mt-12 grid gap-8 lg:grid-cols-3">
            {VALUES.map((value) => (
              <li
                key={value.title}
                className="rounded-2xl bg-white p-7 shadow-[0_14px_40px_-26px_rgba(47,50,125,0.5)]"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-body">{value.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16">
        <Container>
          <SectionHeading
            title="The people behind TOTC"
            subtitle="A small team of educators, engineers and designers who have all spent time on the other side of the desk."
          />

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CREATORS.slice(0, 6).map((person, i) => (
              <li
                key={`${person.name}-${i}`}
                className="flex items-center gap-5 rounded-2xl bg-sky/70 p-6"
              >
                <Image
                  src={person.photo}
                  alt=""
                  width={72}
                  height={72}
                  className="h-18 w-18 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <h3 className="font-semibold text-ink">{person.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-body">
                    {person.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Audience CTA */}
      <section className="pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {AUDIENCE_CARDS.map((card) => (
              <AudienceCard key={card.label} {...card} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
