import Head from "next/head";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "We collect the details you give us when you create an account: your name, email address, the school or organisation you belong to, and the plan you choose. If you pay for a plan, our payment processor handles your card details — we never store them on our own systems.",
      "We also collect the data your learning generates: courses you enrol in, lessons you complete, assessment results, and attendance for live classes. Teachers on your courses can see this data for their own classes.",
    ],
  },
  {
    heading: "How we use your data",
    body: [
      "Your data runs the product. We use it to show your dashboard, keep your progress in sync across devices, issue certificates, and let your teachers mark attendance and grade work.",
      "We use aggregated, de-identified usage data to work out which parts of TOTC need improving. That analysis never singles out an individual learner.",
    ],
  },
  {
    heading: "Sharing and disclosure",
    body: [
      "We do not sell your personal data. We share it only with the processors that run TOTC on our behalf — hosting, email delivery and payments — and each is bound by a contract that limits them to our instructions.",
      "If your account was created by a school or employer, that organisation's administrators can see your enrolment and progress within their own courses.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "We use a small number of first-party cookies to keep you signed in and to remember interface preferences such as your billing period selection. Analytics cookies are optional and can be declined without losing any functionality.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can access, correct, export or delete your personal data from your account settings at any time. Deleting your account removes your profile and progress; anonymised aggregate statistics may remain.",
      "If you are in the EEA or UK, you also have the right to object to processing and to lodge a complaint with your local supervisory authority.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We keep your account data for as long as your account is open. After you delete it, backups are purged within 30 days. Records we must keep for tax or accounting reasons are retained for the period the law requires and nothing longer.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "Questions about this policy can go to privacy@totc.example. We answer every request within 30 days, and usually much sooner.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — TOTC</title>
      </Head>

      <LegalPage
        title="Privacy Policy"
        updated="1 August 2026"
        intro="This policy explains what TOTC collects, why we collect it, and the choices you have. It applies to the TOTC website, the classroom, and the mobile apps."
        sections={SECTIONS}
      />
    </>
  );
}
