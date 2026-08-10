import React from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import Navbar, { type NavVariant } from "./navbar";
import Footer from "./footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/** Full-bleed routes that render their own chrome instead of the site shell. */
const BARE_ROUTES = ["/login", "/register", "/classroom", "/lesson"];

/** Routes whose hero sits under a transparent teal navbar. */
const TEAL_NAV_ROUTES = ["/"];

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();

  const isBare = BARE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  const variant: NavVariant = TEAL_NAV_ROUTES.includes(pathname)
    ? "teal"
    : "white";

  if (isBare) {
    return (
      <div className={`${poppins.variable} min-h-screen bg-white font-sans`}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${poppins.variable} flex min-h-screen flex-col bg-white font-sans`}
    >
      {/* The teal navbar overlaps the hero, so it must not occupy layout space. */}
      {variant === "teal" ? (
        <div className="absolute inset-x-0 top-0">
          <Navbar variant="teal" />
        </div>
      ) : (
        <Navbar variant="white" />
      )}

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
