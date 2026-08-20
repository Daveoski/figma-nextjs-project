import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { z } from "zod";
import { AuthShell } from "@/components/auth/AuthShell";
import { PillField } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/data/site";

const loginSchema = z.object({
  identifier: z.string().trim().min(1, "Enter your email or username."),
  password: z.string().min(1, "Enter your password."),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<"identifier" | "password", string>>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = loginSchema.safeParse(
      Object.fromEntries(new FormData(event.currentTarget)),
    );

    if (!result.success) {
      const nextErrors: Partial<Record<"identifier" | "password", string>> = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (field === "identifier" || field === "password") {
          nextErrors[field] = issue.message;
        }
      }

      setErrors(nextErrors);
      return;
    }

    setErrors({});
  }

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
        <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
          <PillField
            label="Email or username"
            name="identifier"
            type="email"
            autoComplete="username"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.identifier)}
            aria-describedby={errors.identifier ? "identifier-error" : undefined}
          />
          {errors.identifier && (
            <p id="identifier-error" className="-mt-3 text-sm text-accent-pink">
              {errors.identifier}
            </p>
          )}

          <PillField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
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
          {errors.password && (
            <p id="password-error" className="-mt-3 text-sm text-accent-pink">
              {errors.password}
            </p>
          )}

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
