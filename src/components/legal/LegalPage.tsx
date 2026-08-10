import type { ReactNode } from "react";
import { Container } from "@/components/ui/Section";

export type LegalSection = {
  heading: string;
  body: string[];
};

/** Shared shell for the privacy and terms pages. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-sky/60 py-14">
        <Container className="max-w-4xl!">
          <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
          <p className="mt-6 leading-7 text-body">{intro}</p>
        </Container>
      </section>

      <Container className="max-w-4xl! py-14">
        <nav aria-label="On this page" className="mb-12">
          <ul className="flex flex-wrap gap-3">
            {sections.map((section) => (
              <li key={section.heading}>
                <a
                  href={`#${slugify(section.heading)}`}
                  className="inline-flex rounded-full bg-sky px-4 py-2 text-sm text-body transition-colors hover:text-brand"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.heading}
              id={slugify(section.heading)}
              className="scroll-mt-24"
            >
              <h2 className="text-xl font-semibold text-ink">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-4 leading-7 text-body">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
