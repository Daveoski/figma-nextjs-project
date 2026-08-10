import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AVATARS, IMAGES } from "@/data/site";
import { FEATURES } from "@/data/marketing";

/** Mock of the TOTC classroom: a speaker tile plus a column of participants. */
function ClassroomMockup() {
  return (
    <div className="relative">
      <span
        aria-hidden
        className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-brand/30"
      />
      <span
        aria-hidden
        className="absolute -right-4 -bottom-6 h-16 w-16 rounded-full bg-accent-orange/25"
      />

      <div className="relative grid grid-cols-3 gap-3 rounded-2xl bg-white p-3 shadow-[0_20px_50px_-20px_rgba(47,50,125,0.35)]">
        <div className="relative col-span-2 aspect-4/3 overflow-hidden rounded-xl">
          <Image
            src={AVATARS.eveny}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, 60vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          {[AVATARS.patricia, AVATARS.humbert, AVATARS.tamara].map((src, i) => (
            <div
              key={i}
              className="relative aspect-4/3 overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="15vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Call controls */}
      <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
        <span className="rounded-full bg-accent-blue px-5 py-2 text-sm font-medium text-white shadow-lg">
          Present
        </span>
        <span className="rounded-full bg-accent-pink px-5 py-2 text-sm font-medium text-white shadow-lg">
          Call
        </span>
      </div>
    </div>
  );
}

/** Alternating image/copy rows. `flip` puts the artwork on the left. */
function FeatureRow({
  title,
  highlight,
  body,
  bullets,
  artwork,
  flip = false,
}: {
  title: string;
  highlight?: string;
  body?: string;
  bullets?: { title: string }[];
  artwork: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-12 py-14 lg:grid-cols-2">
      <div className={flip ? "lg:order-2" : ""}>
        <h3 className="text-2xl leading-snug font-bold sm:text-3xl">
          <span className="text-brand">{title}</span>
          {highlight && <> {highlight}</>}
        </h3>

        {body && <p className="mt-5 leading-7 text-body">{body}</p>}

        {bullets && (
          <ul className="mt-6 space-y-4">
            {bullets.map((bullet) => (
              <li key={bullet.title} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-brand-tint">
                  <FiCheck aria-hidden className="text-sm text-brand" />
                </span>
                <span className="text-sm leading-6 text-body">
                  {bullet.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={flip ? "lg:order-1" : ""}>{artwork}</div>
    </div>
  );
}

function Photo({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 45vw, 90vw"
        className="object-cover"
      />
    </div>
  );
}

export function Features() {
  const [ui, tools, assessments, management, discussions] = FEATURES;

  return (
    <section id="features" className="py-16">
      <Container>
        <SectionHeading
          title="Our Features"
          subtitle="This very extraordinary feature, can make learning activities more efficient"
        />

        <div className="mt-10 divide-y divide-black/5">
          <FeatureRow
            title={ui.title}
            highlight={ui.highlight}
            bullets={ui.bullets}
            artwork={<ClassroomMockup />}
            flip
          />

          <FeatureRow
            title={tools.title}
            highlight={tools.highlight}
            body={tools.body}
            artwork={<Photo src={IMAGES.heroStudent} />}
          />

          <FeatureRow
            title={assessments.title}
            highlight={assessments.highlight}
            body={assessments.body}
            artwork={<Photo src={IMAGES.code} />}
            flip
          />

          <FeatureRow
            title={management.title}
            highlight={management.highlight}
            body={management.body}
            artwork={<Photo src={IMAGES.team} />}
          />

          <FeatureRow
            title={discussions.title}
            highlight={discussions.highlight}
            body={discussions.body}
            artwork={<Photo src={IMAGES.instructor} />}
            flip
          />
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            See more features
          </Button>
        </div>
      </Container>
    </section>
  );
}
