import { useState } from "react";
import Head from "next/head";
import { FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import { LessonShell } from "@/components/classroom/LessonShell";
import { Field, INPUT_CLASS } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { MEETING_PARTICIPANTS } from "@/data/classroom";

const EVENT_TYPES = ["Live class", "Office hours", "Quiz", "Workshop"];

const REPEATS = ["Does not repeat", "Every day", "Every week", "Every month"];

export default function CreateEventPage() {
  const [type, setType] = useState(EVENT_TYPES[0]);
  const [invited, setInvited] = useState<string[]>([
    MEETING_PARTICIPANTS[0].name,
  ]);

  function toggleGuest(name: string) {
    setInvited((current) =>
      current.includes(name)
        ? current.filter((n) => n !== name)
        : [...current, name],
    );
  }

  return (
    <>
      <Head>
        <title>Create new event — TOTC</title>
      </Head>

      <LessonShell title="Create new event">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-white p-7 shadow-[0_14px_40px_-26px_rgba(47,50,125,0.5)] lg:p-9"
        >
          <h2 className="text-xl font-bold sm:text-2xl">Create new event</h2>
          <p className="mt-2 text-sm text-body">
            Schedule a session and everyone on the roster gets an invite.
          </p>

          <fieldset className="mt-8">
            <legend className="mb-3 block font-semibold text-ink">
              Event type
            </legend>

            <div className="flex flex-wrap gap-3">
              {EVENT_TYPES.map((option) => (
                <label
                  key={option}
                  className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    type === option
                      ? "bg-brand text-white"
                      : "bg-sky text-body hover:text-brand"
                  }`}
                >
                  <input
                    type="radio"
                    name="eventType"
                    value={option}
                    checked={type === option}
                    onChange={() => setType(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 grid gap-5">
            <Field
              label="Event title"
              name="title"
              placeholder="Lesson 02 : Working with artboards"
              required
            />

            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Date" name="date" type="date" required />
              <Field label="Start time" name="start" type="time" required />
              <Field label="End time" name="end" type="time" required />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Repeats">
                <select
                  id="field-repeats"
                  name="repeats"
                  className={INPUT_CLASS}
                  defaultValue={REPEATS[0]}
                >
                  {REPEATS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>

              <Field
                label="Location"
                name="location"
                placeholder="TOTC classroom"
              />
            </div>

            <Field label="Description">
              <textarea
                id="field-description"
                name="description"
                rows={4}
                placeholder="What will you cover in this session?"
                className={INPUT_CLASS}
              />
            </Field>
          </div>

          <fieldset className="mt-8">
            <legend className="mb-3 block font-semibold text-ink">
              Invite guests
            </legend>

            <ul className="grid gap-3 sm:grid-cols-3">
              {MEETING_PARTICIPANTS.map((person) => {
                const checked = invited.includes(person.name);

                return (
                  <li key={person.name}>
                    <label
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                        checked
                          ? "border-brand bg-brand-tint text-ink"
                          : "border-black/10 text-body hover:border-brand/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="guests"
                        value={person.name}
                        checked={checked}
                        onChange={() => toggleGuest(person.name)}
                        className="h-4 w-4 accent-[#49bbbd]"
                      />
                      <span className="truncate">{person.name}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 rounded-xl bg-sky/70 px-5 py-4 text-sm text-body">
            <div className="flex items-center gap-2">
              <FiClock aria-hidden className="text-brand" />
              <dt className="sr-only">Duration</dt>
              <dd>Defaults to 60 minutes</dd>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin aria-hidden className="text-brand" />
              <dt className="sr-only">Location</dt>
              <dd>Runs in the TOTC classroom</dd>
            </div>
            <div className="flex items-center gap-2">
              <FiUsers aria-hidden className="text-brand" />
              <dt className="sr-only">Guests</dt>
              <dd>{invited.length} invited</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button type="submit" size="lg">
              Create event
            </Button>
            <Button type="reset" variant="outline" size="lg">
              Discard
            </Button>
          </div>
        </form>
      </LessonShell>
    </>
  );
}
