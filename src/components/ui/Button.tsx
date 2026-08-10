import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "white" | "pink" | "dark";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_14px_30px_-10px_rgba(73,187,189,0.75)] hover:bg-brand-dark",
  ghost: "bg-white/25 text-white hover:bg-white/35",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  white: "bg-white text-heading shadow-sm hover:bg-white/90",
  pink: "bg-accent-pink text-white hover:bg-[#e04a58]",
  dark: "bg-ink text-white hover:bg-ink/90",
};

const SIZES: Record<Size, string> = {
  sm: "px-6 py-2 text-sm",
  md: "px-8 py-2.5 text-base",
  lg: "px-10 py-4 text-lg font-semibold",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps>;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps>;

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
