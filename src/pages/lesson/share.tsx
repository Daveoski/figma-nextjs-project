import { useState } from "react";
import Head from "next/head";
import { FiCheck, FiCopy, FiGift } from "react-icons/fi";
import { LessonShell } from "@/components/classroom/LessonShell";
import { Button } from "@/components/ui/Button";
import { SocialRow } from "@/components/ui/SocialRow";
import { SHARE_BLOCKS, SHARE_INTRO } from "@/data/classroom";

const TINT_CLASS = {
  blue: "bg-pastel-blue",
  peach: "bg-pastel-peach",
  pink: "bg-pastel-pink",
} as const;

const REFERRAL_LINK = "https://totc.app/invite/lina-2026";

export default function ShareAndReferPage() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(REFERRAL_LINK);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <Head>
        <title>Share and Refer — TOTC</title>
      </Head>

      <LessonShell title="Share and Refer">
        <header>
          <h2 className="text-xl font-bold sm:text-2xl">Share and Refer</h2>
          <p className="mt-4 leading-7 text-body">{SHARE_INTRO}</p>
        </header>

        {/* Referral link */}
        <div className="mt-8 rounded-2xl bg-sky/70 p-6">
          <label
            htmlFor="referral-link"
            className="flex items-center gap-2 font-semibold text-ink"
          >
            <FiGift aria-hidden className="text-brand" />
            Your referral link
          </label>

          <div className="mt-4 flex flex-wrap gap-3">
            <input
              id="referral-link"
              readOnly
              value={REFERRAL_LINK}
              className="min-w-0 flex-1 rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-body focus:border-brand focus:outline-none"
            />
            <Button onClick={copyLink} className="gap-2">
              {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
              {copied ? "Copied" : "Copy link"}
            </Button>
          </div>

          <p aria-live="polite" className="sr-only">
            {copied ? "Referral link copied to clipboard" : ""}
          </p>

          <div className="mt-6">
            <p className="mb-3 text-sm text-body">Or share it directly</p>
            <SocialRow size="h-9 w-9" />
          </div>
        </div>

        {/* Reward blocks */}
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {SHARE_BLOCKS.map((block, i) => (
            <li
              key={i}
              className={`rounded-2xl p-6 ${TINT_CLASS[block.tint]}`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/70">
                <FiGift aria-hidden className="text-lg text-ink/70" />
              </span>
              <h3 className="mt-4 font-semibold text-ink">{block.heading}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                Every friend who joins with your link earns you both super
                coins toward your next course.
              </p>
            </li>
          ))}
        </ul>
      </LessonShell>
    </>
  );
}
