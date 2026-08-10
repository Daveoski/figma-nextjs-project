import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  FiChevronDown,
  FiLock,
  FiMessageSquare,
  FiMic,
  FiMicOff,
  FiMonitor,
  FiPhoneOff,
  FiPlay,
  FiUsers,
  FiVideo,
  FiVideoOff,
} from "react-icons/fi";
import { ClassroomBar } from "@/components/classroom/ClassroomBar";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import {
  BOOK_FOR_YOU,
  COURSE_CONTENTS,
  MEETING_PARTICIPANTS,
} from "@/data/classroom";
import { IMAGES } from "@/data/site";

const MEETING_TITLE = "UX/UI Design Confrence Meeting";

export default function ClassroomPage() {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [openSection, setOpenSection] = useState(1);

  return (
    <>
      <Head>
        <title>{`${MEETING_TITLE} — TOTC`}</title>
      </Head>

      <ClassroomBar title={MEETING_TITLE} />

      <Container className="py-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_minmax(0,22rem)]">
          {/* Stage */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  {MEETING_TITLE}
                </h2>
                <p className="mt-1 flex items-center gap-2 text-sm text-body">
                  <FiUsers aria-hidden className="text-brand" />
                  {MEETING_PARTICIPANTS.length + 1} participants · Live now
                </p>
              </div>

              <span className="flex items-center gap-2 rounded-full bg-accent-pink/10 px-4 py-1.5 text-xs font-semibold text-accent-pink">
                <span className="h-2 w-2 rounded-full bg-accent-pink" />
                REC 32:15
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-[2fr_1fr]">
              {/* Speaker */}
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-ink sm:aspect-16/10">
                <Image
                  src={IMAGES.instructor}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-1.5 text-xs font-medium text-white">
                  Lina · Host
                </span>
              </div>

              {/* Participants */}
              <ul className="grid grid-cols-3 gap-4 sm:grid-cols-1">
                {MEETING_PARTICIPANTS.map((person) => (
                  <li
                    key={person.name}
                    className="relative aspect-square overflow-hidden rounded-2xl bg-ink sm:aspect-4/3"
                  >
                    <Image
                      src={person.photo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 15vw, 30vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 truncate rounded-full bg-black/55 px-3 py-1 text-[11px] text-white">
                      {person.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Controls */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-ink px-6 py-4">
              <button
                type="button"
                aria-pressed={!micOn}
                aria-label={micOn ? "Mute microphone" : "Unmute microphone"}
                onClick={() => setMicOn((v) => !v)}
                className={`grid h-12 w-12 place-items-center rounded-full text-white transition-colors ${
                  micOn ? "bg-white/15 hover:bg-white/25" : "bg-accent-pink"
                }`}
              >
                {micOn ? <FiMic aria-hidden /> : <FiMicOff aria-hidden />}
              </button>

              <button
                type="button"
                aria-pressed={!cameraOn}
                aria-label={cameraOn ? "Turn camera off" : "Turn camera on"}
                onClick={() => setCameraOn((v) => !v)}
                className={`grid h-12 w-12 place-items-center rounded-full text-white transition-colors ${
                  cameraOn ? "bg-white/15 hover:bg-white/25" : "bg-accent-pink"
                }`}
              >
                {cameraOn ? <FiVideo aria-hidden /> : <FiVideoOff aria-hidden />}
              </button>

              <button
                type="button"
                aria-label="Share screen"
                className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <FiMonitor aria-hidden />
              </button>

              <button
                type="button"
                aria-label="Open chat"
                className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <FiMessageSquare aria-hidden />
              </button>

              <ButtonLink
                href="/dashboard"
                variant="pink"
                className="ml-2 gap-2"
              >
                <FiPhoneOff aria-hidden />
                Leave
              </ButtonLink>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="grid gap-8">
            <section className="rounded-2xl bg-sky/70 p-6">
              <h2 className="font-semibold text-ink">Course Contents</h2>

              <ul className="mt-4 space-y-3">
                {COURSE_CONTENTS.map((section, i) => {
                  const isOpen = openSection === i;

                  return (
                    <li
                      key={section.title}
                      className="overflow-hidden rounded-xl bg-white"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenSection(isOpen ? -1 : i)}
                        className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-ink">
                            {section.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted">
                            {section.lessons} lessons · {section.duration}
                          </span>
                        </span>
                        <FiChevronDown
                          aria-hidden
                          className={`shrink-0 text-muted transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {section.items && (
                        <ul hidden={!isOpen} className="px-4 pb-3">
                          {section.items.map((item) => (
                            <li
                              key={item.title}
                              className="flex items-center gap-3 border-t border-black/5 py-2.5 text-xs text-body"
                            >
                              {item.locked ? (
                                <FiLock
                                  aria-hidden
                                  className="shrink-0 text-muted"
                                />
                              ) : (
                                <FiPlay
                                  aria-hidden
                                  className="shrink-0 text-brand"
                                />
                              )}
                              <span className="min-w-0 flex-1 truncate">
                                {item.title}
                              </span>
                              <span className="shrink-0 text-muted">
                                {item.time}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-ink">Book for you</h2>

              <ul className="mt-4 space-y-4">
                {BOOK_FOR_YOU.map((book, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-xl bg-white p-3 shadow-[0_10px_30px_-18px_rgba(47,50,125,0.5)]"
                  >
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={book.image}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-ink">
                        {book.title}
                      </h3>
                      <div className="mt-1">
                        <Stars value={5} size="text-xs" />
                      </div>
                      <p className="mt-2 text-sm font-bold text-brand">
                        ${book.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </Container>
    </>
  );
}
