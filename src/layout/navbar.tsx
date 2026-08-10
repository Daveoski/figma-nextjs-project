import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Button, ButtonLink } from "@/components/ui/Button";
import { CURRENT_USER, IMAGES, NAV_LINKS } from "@/data/site";

export type NavVariant = "teal" | "white";

/**
 * `teal` sits transparently on top of the landing hero band; `white` is the
 * solid inner-page bar that swaps the auth buttons for the signed-in user chip.
 */
const Navbar = ({ variant = "white" }: { variant?: NavVariant }) => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const onTeal = variant === "teal";

  // Collapse the mobile sheet on navigation. Adjusting during render rather
  // than in an effect avoids a second render pass on every route change.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const linkColor = onTeal
    ? "text-white hover:opacity-75"
    : "text-body hover:text-brand";

  return (
    <header className={onTeal ? "relative z-20 bg-transparent" : "bg-white"}>
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-360 items-center justify-between gap-6 px-6 py-6 lg:px-14"
      >
        <Link href="/" className="shrink-0">
          <Image
            src={IMAGES.logo}
            alt="TOTC home"
            width={140}
            height={56}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-10 text-[17px] xl:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors ${linkColor} ${
                    active ? "font-semibold" : ""
                  } ${active && !onTeal ? "text-brand" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          {onTeal ? (
            <div className="hidden items-center gap-4 sm:flex">
              <ButtonLink href="/login" variant="white">
                Login
              </ButtonLink>
              <ButtonLink href="/register" variant="ghost">
                Sign Up
              </ButtonLink>
            </div>
          ) : (
            <Link
              href="/dashboard"
              className="hidden items-center gap-2 sm:flex"
            >
              <Image
                src={CURRENT_USER.avatar}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-ink">
                {CURRENT_USER.name}
              </span>
              <FiChevronDown aria-hidden className="text-muted" />
            </Link>
          )}

          <Button
            variant={onTeal ? "ghost" : "white"}
            size="sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="!px-3 xl:hidden"
          >
            {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </Button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-black/5 bg-white px-6 pb-6 shadow-lg xl:hidden"
        >
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-body hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/login" variant="outline" size="sm">
              Login
            </ButtonLink>
            <ButtonLink href="/register" size="sm">
              Sign Up
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
 