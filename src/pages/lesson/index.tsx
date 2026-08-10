import Image from "next/image";
import Head from "next/head";
import { FiDownload, FiPlay, FiShare2 } from "react-icons/fi";
import { LessonShell } from "@/components/classroom/LessonShell";
import { Button, ButtonLink } from "@/components/ui/Button";
import { LESSON_BODY_SECTIONS } from "@/data/classroom";
import { IMAGES } from "@/data/site";

const LESSON_TITLE = "Lesson 01 : Introduction about XD";

export default function LessonPage() {
  return (
    <>
      <Head>
        <title>{`${LESSON_TITLE} — TOTC`}</title>
      </Head>

      <LessonShell title={LESSON_TITLE}>
        {/* Player */}
        <div className="relative aspect-16/9 overflow-hidden rounded-2xl bg-ink">
          <Image
            src={IMAGES.zoomLaptop}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 90vw"
            className="object-cover opacity-90"
          />
          <button
            type="button"
            aria-label={`Play ${LESSON_TITLE}`}
            className="absolute inset-0 grid place-items-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-105">
              <FiPlay aria-hidden className="ml-1 text-xl text-brand" />
            </span>
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">{LESSON_TITLE}</h2>
            <p className="mt-1 text-sm text-body">30 mins · Lesson 1 of 16</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <FiDownload aria-hidden />
              Resources
            </Button>
            <ButtonLink href="/lesson/share" size="sm" className="gap-2">
              <FiShare2 aria-hidden />
              Share
            </ButtonLink>
          </div>
        </div>

        {/* Body */}
        <div className="mt-10 space-y-9">
          {LESSON_BODY_SECTIONS.map((section) => (
            <section key={section.heading}>
              <h3 className="text-lg font-semibold text-ink">
                {section.heading}
              </h3>
              <p className="mt-3 leading-7 text-body">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-sky/70 p-6">
          <p className="text-sm text-body">
            Finished this lesson? Mark it complete and move on to the next one.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              Mark complete
            </Button>
            <ButtonLink href="/classroom" size="sm">
              Join live class
            </ButtonLink>
          </div>
        </div>
      </LessonShell>
    </>
  );
}
