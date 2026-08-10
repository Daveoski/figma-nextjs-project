import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { IMAGES } from "@/data/site";

const PROVIDERS = [
  { label: "Google", Icon: FaGoogle },
  { label: "Facebook", Icon: FaFacebookF },
  { label: "Apple", Icon: FaApple },
];

/**
 * Split auth screen: the form sits on white, the teal panel carries the
 * marketing copy and photograph. On small screens the panel drops away so the
 * form gets the full viewport.
 */
export function AuthShell({
  title,
  subtitle,
  children,
  footer,
  panelTitle,
  panelBody,
  panelPhoto = IMAGES.studentBooks,
}: {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  panelTitle: ReactNode;
  panelBody: ReactNode;
  panelPhoto?: string;
}) {
  return (
    <main className="min-h-dvh bg-sky/60 p-4 sm:p-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-40px_rgba(47,50,125,0.5)] lg:grid-cols-2">
        {/* Form side */}
        <div className="px-7 py-10 sm:px-12 sm:py-14">
          <Link href="/" className="inline-block">
            <Image
              src={IMAGES.logo}
              alt="TOTC home"
              width={140}
              height={56}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <h1 className="mt-10 text-2xl font-bold sm:text-3xl">{title}</h1>
          <p className="mt-2 text-sm text-body">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-black/10" />
            <span className="text-xs text-muted">or continue with</span>
            <span className="h-px flex-1 bg-black/10" />
          </div>

          <ul className="mt-6 flex flex-wrap gap-4">
            {PROVIDERS.map(({ label, Icon }) => (
              <li key={label} className="flex-1">
                <button
                  type="button"
                  aria-label={`Continue with ${label}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm text-body transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon aria-hidden />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-body">{footer}</p>
        </div>

        {/* Marketing side */}
        <aside className="relative hidden bg-brand p-12 lg:block">
          <div className="relative z-10">
            <h2 className="text-2xl leading-snug font-bold text-white">
              {panelTitle}
            </h2>
            <p className="mt-4 leading-7 text-white/85">{panelBody}</p>
          </div>

          <div className="relative z-10 mt-10 overflow-hidden rounded-2xl">
            <div className="relative aspect-4/3 w-full">
              <Image
                src={panelPhoto}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 0px"
                className="object-cover"
              />
            </div>
          </div>

          <span
            aria-hidden
            className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/10"
          />
          <span
            aria-hidden
            className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10"
          />
        </aside>
      </div>
    </main>
  );
}
