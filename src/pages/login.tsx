import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthShell } from "@/components/auth/AuthShell";
import { PillField } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/data/site";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Head>
        <title>Login — TOTC</title>
      </Head>

      <AuthShell
        title="Welcome back!"
        subtitle="Log in to pick up where your class left off."
        panelTitle="Everything you can do in a physical classroom, you can do with TOTC"
        panelBody="TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure system."
        panelPhoto={IMAGES.studentBooks}
        footer={
          <>
            Don’t have an account?{" "}
            <Link href="/register" className="font-medium text-brand hover:underline">
              Sign up
            </Link>
          </>
        }
      >
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-5">
          <PillField
            label="Email or username"
            name="identifier"
            type="email"
            autoComplete="username"
            placeholder="you@example.com"
            required
          />

          <PillField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
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

          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-sm text-body">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 accent-[#49bbbd]"
              />
              Remember me
            </label>

            <Link
              href="/login"
              className="text-sm text-brand hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full">
            Login
          </Button>
        </form>
      </AuthShell>
    </>
  );
}
