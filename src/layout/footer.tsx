import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, IMAGES } from "@/data/site";

const Footer = () => {
  return (
    <footer className="bg-ink px-6 py-16">
      {/* Logo + tagline */}
      <div className="flex items-center justify-center gap-8">
        <Image
          src={IMAGES.logo}
          alt="TOTC"
          width={180}
          height={90}
          className="h-16 w-auto sm:h-20"
        />
        <span className="h-16 w-px bg-white/20 sm:h-20" />
        <p className="text-lg leading-relaxed font-bold text-white sm:text-xl">
          Virtual Class
          <br />
          for Zoom
        </p>
      </div>

      {/* Newsletter */}
      <p className="mt-16 text-center text-xl font-semibold text-footer-text sm:text-2xl">
        Subscribe to get our Newsletter
      </p>

      <form
        className="mt-6 flex flex-wrap items-center justify-center gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Your Email"
          aria-label="Your Email"
          className="w-full max-w-100 rounded-full border border-white/25 bg-transparent px-8 py-4 text-lg text-white placeholder:text-footer-text focus:border-white/50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-brand px-12 py-4 text-lg font-medium text-white shadow-[0_14px_30px_-8px_rgba(73,187,189,0.7)] transition-colors hover:bg-brand-dark"
        >
          Subscribe
        </button>
      </form>

      {/* Links */}
      <ul className="mt-16 flex flex-wrap items-center justify-center gap-5 text-base text-footer-text sm:text-xl">
        {FOOTER_LINKS.map((link, i) => (
          <li key={link.label} className="flex items-center gap-5">
            {i > 0 && (
              <span aria-hidden className="text-white/25">
                |
              </span>
            )}
            <Link
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-center text-base text-footer-text sm:text-xl">
        © 2021 Class Technologies Inc.
      </p>
    </footer>
  );
};

export default Footer;
