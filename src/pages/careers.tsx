import Image from "next/image";
import Head from "next/head";
import { FiArrowRight, FiClock, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { IMAGES } from "@/data/site";

const PERKS = [
  {
    title: "Remote first",
    body: "Work from anywhere in a timezone within four hours of your team’s core hours.",
  },
  {
    title: "Learning budget",
    body: "Every teammate gets an annual budget for courses, books and conferences.",
  },
  {
    title: "Real time off",
    body: "Minimum 25 days, and we track that people actually take them.",
  },
  {
    title: "Health cover",
    body: "Medical, dental and mental health support for you and your dependants.",
  },
];

const OPENINGS = [
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Remote — EU",
    type: "Full time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote — Global",
    type: "Full time",
  },
  {
    title: "Curriculum Lead",
    team: "Education",
    location: "Toronto, CA",
    type: "Full time",
  },
  {
    title: "Customer Success Manager",
    team: "Support",
    location: "Remote — US",
    type: "Full time",
  },
  {
    title: "Data Engineer",
    team: "Engineering",
    location: "Remote — EU",
    type: "Contract",
  },
];

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers — TOTC</title>
      </Head>

      {/* Intro */}
      <section className="bg-sky/60 py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand uppercase">
                Careers
              </p>
              <h1 className="mt-4 text-3xl leading-snug font-bold sm:text-4xl">
                Help us build the classroom{" "}
                <span className="text-brand">everyone deserves</span>
              </h1>
              <p className="mt-6 leading-7 text-body">
                We are a small, deliberate team. Everyone here works directly
                with teachers and students, and everyone ships. If that sounds
                like the job you want, we would like to meet you.
              </p>
              <ButtonLink href="#openings" size="lg" className="mt-8">
                See open roles
              </ButtonLink>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.instructor}
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

      {/* Perks */}
      <section className="py-16">
        <Container>
          <SectionHeading title="Why work here" />

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((perk) => (
              <li
                key={perk.title}
                className="rounded-2xl bg-sky/70 p-7 text-center"
              >
                <h3 className="font-semibold text-ink">{perk.title}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{perk.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Openings */}
      <section id="openings" className="scroll-mt-24 pb-20">
        <Container>
          <SectionHeading title="Open positions" />

          <ul className="mt-12 divide-y divide-black/10 overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_-26px_rgba(47,50,125,0.5)]">
            {OPENINGS.map((role) => (
              <li key={role.title}>
                <Link
                  href="/careers"
                  className="flex flex-wrap items-center gap-x-8 gap-y-3 px-7 py-6 transition-colors hover:bg-sky/50"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-ink">
                      {role.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {role.team}
                    </span>
                  </span>

                  <span className="flex items-center gap-2 text-sm text-body">
                    <FiMapPin aria-hidden className="text-brand" />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-body">
                    <FiClock aria-hidden className="text-brand" />
                    {role.type}
                  </span>

                  <FiArrowRight aria-hidden className="shrink-0 text-brand" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm text-body">
            Nothing that fits? Send us a note anyway — we read everything.
          </p>
        </Container>
      </section>
    </>
  );
}
