import { useState } from "react";
import Head from "next/head";
import { FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import { LessonShell } from "@/components/classroom/LessonShell";
import { ButtonLink } from "@/components/ui/Button";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * The schedule is fixed content rather than "today", so the calendar opens on a
 * constant month. That also keeps the server and client markup identical.
 */
const START_YEAR = 2026;
const START_MONTH = 7; // August

type Event = {
  day: number;
  title: string;
  time: string;
  tint: "blue" | "peach" | "pink";
};

const EVENTS: Event[] = [
  { day: 4, title: "Lesson 01 : Introduction about XD", time: "09:00", tint: "blue" },
  { day: 4, title: "Office hours", time: "16:30", tint: "peach" },
  { day: 11, title: "UX/UI Design Confrence Meeting", time: "11:00", tint: "pink" },
  { day: 17, title: "Practice quiz", time: "14:00", tint: "peach" },
  { day: 23, title: "Lesson 02 : Working with artboards", time: "09:00", tint: "blue" },
  { day: 28, title: "Workshop: prototyping", time: "13:00", tint: "pink" },
];

const TINT_CLASS = {
  blue: "bg-pastel-blue",
  peach: "bg-pastel-peach",
  pink: "bg-pastel-pink",
} as const;

/** Leading blanks then the real days, so the grid lines up with the weekday row. */
function buildGrid(year: number, month: number): (number | null)[] {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
}

export default function CalendarPage() {
  const [cursor, setCursor] = useState({ year: START_YEAR, month: START_MONTH });
  const [selected, setSelected] = useState(4);

  const isStartMonth =
    cursor.year === START_YEAR && cursor.month === START_MONTH;
  const cells = buildGrid(cursor.year, cursor.month);
  const eventsFor = (day: number) =>
    isStartMonth ? EVENTS.filter((event) => event.day === day) : [];

  function shift(direction: -1 | 1) {
    setCursor((current) => {
      const month = current.month + direction;
      if (month < 0) return { year: current.year - 1, month: 11 };
      if (month > 11) return { year: current.year + 1, month: 0 };
      return { ...current, month };
    });
  }

  const selectedEvents = eventsFor(selected);

  return (
    <>
      <Head>
        <title>Calendar — TOTC</title>
      </Head>

      <LessonShell title="Calendar">
        <div className="rounded-2xl bg-white p-6 shadow-[0_14px_40px_-26px_rgba(47,50,125,0.5)] lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold sm:text-2xl">
              {MONTH_NAMES[cursor.month]} {cursor.year}
            </h2>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => shift(-1)}
                aria-label="Previous month"
                className="grid h-9 w-9 place-items-center rounded-full bg-sky text-body transition-colors hover:text-brand"
              >
                <FiChevronLeft aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => shift(1)}
                aria-label="Next month"
                className="grid h-9 w-9 place-items-center rounded-full bg-sky text-body transition-colors hover:text-brand"
              >
                <FiChevronRight aria-hidden />
              </button>

              <ButtonLink href="/lesson/event" size="sm" className="gap-2">
                <FiPlus aria-hidden />
                New event
              </ButtonLink>
            </div>
          </div>

          {/* Month grid */}
          <div
            aria-label={`${MONTH_NAMES[cursor.month]} ${cursor.year}`}
            className="mt-7"
          >
            <div aria-hidden className="grid grid-cols-7 gap-2">
              {WEEKDAYS.map((day) => (
                <span
                  key={day}
                  className="pb-2 text-center text-xs font-semibold tracking-wide text-muted uppercase"
                >
                  {day}
                </span>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-2">
              {cells.map((day, i) => {
                if (day === null) {
                  return <span key={`blank-${i}`} aria-hidden />;
                }

                const dayEvents = eventsFor(day);
                const isSelected = isStartMonth && selected === day;

                return (
                  <button
                    key={day}
                    type="button"
                    aria-pressed={isSelected}
                    aria-label={`${MONTH_NAMES[cursor.month]} ${day}, ${cursor.year}${
                      dayEvents.length ? `, ${dayEvents.length} events` : ""
                    }`}
                    onClick={() => setSelected(day)}
                    className={`min-h-20 rounded-xl p-2 text-left align-top transition-colors sm:min-h-24 ${
                      isSelected
                        ? "bg-brand text-white"
                        : "bg-sky/60 hover:bg-sky"
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        isSelected ? "text-white" : "text-ink"
                      }`}
                    >
                      {day}
                    </span>

                    <span className="mt-1.5 flex flex-col gap-1">
                      {dayEvents.map((event) => (
                        <span
                          key={event.title}
                          title={event.title}
                          className={`truncate rounded px-1.5 py-0.5 text-[10px] text-ink ${
                            TINT_CLASS[event.tint]
                          }`}
                        >
                          {event.time} {event.title}
                        </span>
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Day detail */}
        <section className="mt-8 rounded-2xl bg-sky/70 p-6">
          <h3 className="font-semibold text-ink">
            {MONTH_NAMES[cursor.month]} {selected}, {cursor.year}
          </h3>

          {selectedEvents.length === 0 ? (
            <p className="mt-3 text-sm text-body">
              Nothing scheduled. Create an event to fill this day.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {selectedEvents.map((event) => (
                <li
                  key={event.title}
                  className="flex items-center gap-4 rounded-xl bg-white px-4 py-3"
                >
                  <span
                    className={`h-10 w-1.5 shrink-0 rounded-full ${
                      TINT_CLASS[event.tint]
                    }`}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-ink">
                      {event.title}
                    </span>
                    <span className="text-xs text-muted">{event.time}</span>
                  </span>
                  <ButtonLink href="/classroom" size="sm" variant="outline">
                    Join
                  </ButtonLink>
                </li>
              ))}
            </ul>
          )}
        </section>
      </LessonShell>
    </>
  );
}
