import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { FiCheck } from "react-icons/fi";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Carousel } from "@/components/ui/Carousel";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { FAQS, PRICING_PLANS, STUDENT_QUOTES } from "@/data/marketing";
import { IMAGES } from "@/data/site";

type Cycle = "monthly" | "annually";

/** Annual billing bills ten months for twelve, matching the design's copy. */
function priceFor(monthly: number, cycle: Cycle) {
  return cycle === "monthly" ? monthly : monthly * 10;
}

export default function PricingPage() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  return (
    <>
      <Head>
        <title>Pricing — TOTC</title>
      </Head>

      {/* Plans */}
      <section className="bg-sky/70 py-16">
        <Container>
          <SectionHeading
            title={
              <>
                Affordable <span className="text-brand">pricing</span>
              </>
            }
            subtitle="Pick the plan that matches how you learn. Every plan includes the TOTC classroom, and you can move between them whenever you like."
          />

          <div
            role="group"
            aria-label="Billing period"
            className="mx-auto mt-10 flex w-fit rounded-full bg-white p-1.5 shadow-sm"
          >
            {(["monthly", "annually"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={cycle === option}
                onClick={() => setCycle(option)}
                className={`rounded-full px-7 py-2 text-sm font-medium capitalize transition-colors ${
                  cycle === option
                    ? "bg-brand text-white"
                    : "text-body hover:text-brand"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <ul className="mt-12 grid items-start gap-8 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <li
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.featured
                    ? "bg-brand text-white shadow-[0_24px_60px_-24px_rgba(73,187,189,0.9)] lg:-mt-6 lg:pb-14"
                    : "bg-white shadow-[0_14px_40px_-22px_rgba(47,50,125,0.35)]"
                }`}
              >
                {plan.featured && (
                  <p className="mb-4 inline-flex rounded-full bg-white/25 px-4 py-1 text-xs font-semibold tracking-wide uppercase">
                    Most popular
                  </p>
                )}

                <h2
                  className={`text-lg font-semibold ${
                    plan.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`mt-2 text-sm leading-6 ${
                    plan.featured ? "text-white/85" : "text-body"
                  }`}
                >
                  {plan.tagline}
                </p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-bold ${
                      plan.featured ? "text-white" : "text-ink"
                    }`}
                  >
                    ${priceFor(plan.price, cycle)}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.featured ? "text-white/80" : "text-muted"
                    }`}
                  >
                    /{cycle === "monthly" ? "month" : "year"}
                  </span>
                </p>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm leading-6 ${
                        plan.featured ? "text-white/90" : "text-body"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          plan.featured ? "bg-white/25" : "bg-brand-tint"
                        }`}
                      >
                        <FiCheck
                          aria-hidden
                          className={`text-[11px] ${
                            plan.featured ? "text-white" : "text-brand"
                          }`}
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/checkout"
                  variant={plan.featured ? "white" : "outline"}
                  className="mt-8 w-full"
                >
                  {plan.price === 0 ? "Get started" : `Choose ${plan.name}`}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container className="max-w-4xl!">
          <SectionHeading title="Frequently asked questions" />
          <Accordion items={FAQS} defaultOpen={0} className="mt-10" />
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-sky/60 py-16">
        <Container>
          <SectionHeading title="What students say about TOTC" />

          <Carousel
            className="mt-10"
            label="student quotes"
            controls="sides"
            itemClassName="w-[85%] sm:w-[46%] lg:w-[31%]"
            items={STUDENT_QUOTES}
            renderItem={(quote) => (
              <figure className="h-full rounded-2xl bg-white p-7">
                <Stars value={5} />
                <blockquote className="mt-4 leading-7 text-body">
                  {quote.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={quote.photo}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <span>
                    <span className="block font-semibold text-ink">
                      {quote.name}
                    </span>
                    <span className="text-xs text-muted">{quote.role}</span>
                  </span>
                </figcaption>
              </figure>
            )}
          />
        </Container>
      </section>

      {/* App band */}
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-10 rounded-2xl bg-brand p-8 lg:grid-cols-2 lg:p-14">
            <div>
              <h2 className="text-2xl leading-snug font-bold text-white sm:text-3xl">
                Take TOTC with you, wherever the class is
              </h2>
              <p className="mt-5 leading-7 text-white/85">
                Join a live class, catch up on a lesson or check your gradebook
                from your phone. Everything stays in sync with the web app.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="white">App Store</Button>
                <Button variant="ghost">Google Play</Button>
              </div>
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

      {/* Become a teacher / connector */}
      <section className="pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                title: "Become a Teacher",
                body: "Teach what you love on your own schedule. TOTC handles scheduling, attendance, payments and the classroom itself.",
                cta: "Start a class today",
                href: "/register",
                photo: IMAGES.instructor,
              },
              {
                title: "Become a Coursector",
                body: "Curate courses for your school or team, track how everyone is progressing, and keep every certificate in one place.",
                cta: "Enter access code",
                href: "/register",
                photo: IMAGES.team,
              },
            ].map((card) => (
              <article
                key={card.title}
                className="grid items-center gap-6 rounded-2xl bg-sky/70 p-7 sm:grid-cols-[minmax(0,160px)_1fr]"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={card.photo}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-body">
                    {card.body}
                  </p>
                  <ButtonLink href={card.href} size="sm" className="mt-5">
                    {card.cta}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
