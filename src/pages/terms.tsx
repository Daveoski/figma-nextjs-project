import Head from "next/head";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    heading: "Your account",
    body: [
      "You need an account to enrol in courses or run a class. Keep your password to yourself, use an address you actually control, and tell us promptly if you think someone else has access.",
      "Accounts are personal. If you need seats for a group, the Teams plan covers up to 25 people and gives each of them their own login.",
    ],
  },
  {
    heading: "Using TOTC",
    body: [
      "You may use TOTC for learning and teaching. You may not scrape the course library, resell access, upload material you do not have the rights to, or interfere with anyone else's class.",
      "We may suspend an account that breaks these rules. Where the situation allows it, we will tell you what happened and give you a chance to put it right first.",
    ],
  },
  {
    heading: "Course content and licences",
    body: [
      "Instructors keep ownership of what they publish and grant TOTC a licence to host it and show it to enrolled learners. Enrolling gives you a personal, non-transferable licence to view the material for as long as your access lasts.",
      "Downloadable resources are for your own study. Redistributing them, in whole or in part, is not permitted.",
    ],
  },
  {
    heading: "Payments and refunds",
    body: [
      "Paid plans bill in advance for the period you select. Annual billing charges ten months for twelve, and that discount is applied at checkout rather than as a later credit.",
      "If a course is not what you expected, request a refund within 14 days of purchase and we will return the full amount, provided you have not completed more than a quarter of the lessons.",
    ],
  },
  {
    heading: "Cancellation",
    body: [
      "You can cancel from your dashboard at any time. Your access continues to the end of the period you already paid for, and nothing renews after that.",
    ],
  },
  {
    heading: "Availability and changes",
    body: [
      "We aim to keep TOTC available around the clock, but we do carry out maintenance and occasionally things break. We will give notice of planned downtime wherever we can.",
      "These terms may change as the product changes. Material updates are announced by email at least 30 days before they take effect.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "TOTC is provided as-is to the extent the law allows. Our total liability for any claim is limited to the amount you paid us in the twelve months before it arose. Nothing here limits liability that cannot legally be limited.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "Questions about these terms can go to legal@totc.example. For anything about your own account, support@totc.example will get you an answer faster.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions — TOTC</title>
      </Head>

      <LegalPage
        title="Terms & Conditions"
        updated="1 August 2026"
        intro="These terms cover your use of TOTC — the website, the classroom and the mobile apps. By creating an account you agree to them, so it is worth a read."
        sections={SECTIONS}
      />
    </>
  );
}
