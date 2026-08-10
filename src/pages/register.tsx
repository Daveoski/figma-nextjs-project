import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthShell } from "@/components/auth/AuthShell";
import { PillField } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/data/site";

const ROLES = ["Student", "Instructor"] as const;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<(typeof ROLES)[number]>("Student");

  return (
    <>
      <Head>
        <title>Sign Up — TOTC</title>
      </Head>

      <AuthShell
        title="Create your account"
        subtitle="Join 15,000+ students already learning on TOTC."
        panelTitle="A user interface designed for the classroom"
        panelBody="Teachers get a dedicated Podium space, students stay in the grid, and every class datapoint is visible at once — attendance, hand raising, polls and screen sharing."
        panelPhoto={IMAGES.instructor}
        footer={
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-brand hover:underline">
              Login
            </Link>
          </>
        }
      >
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-5">
          <fieldset>
            <legend className="mb-2 block font-semibold text-ink">
              I am joining as
            </legend>
            <div className="flex gap-3">
              {ROLES.map((option) => (
                <label
                  key={option}
                  className={`flex-1 cursor-pointer rounded-full border px-5 py-3 text-center text-sm font-medium transition-colors ${
                    role === option
                      ? "border-brand bg-brand text-white"
                      : "border-black/10 text-body hover:border-brand"
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={option}
                    checked={role === option}
                    onChange={() => setRole(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <PillField
            label="Full name"
            name="name"
            autoComplete="name"
            placeholder="Lina Anderson"
            required
          />

          <PillField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />

          <PillField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="At least 8 characters"
            minLength={8}
            required
            trailing={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="text-muted transition-colors hover:text-brand"
              >
                {showPassword ? <FiEyeOff aria-hidden /> : <FiEye aria-hidden />}
              </button>
            }
          />

          <label className="flex items-start gap-3 text-sm text-body">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#49bbbd]"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="text-brand hover:underline">
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-brand hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <Button type="submit" size="lg" className="mt-2 w-full">
            Create account
          </Button>
        </form>
      </AuthShell>
    </>
  );
}
