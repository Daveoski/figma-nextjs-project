import type { ComponentProps, ReactNode } from "react";

type FieldProps = {
  label: string;
  /** Rendered under the label; use for inputs that need custom markup. */
  children?: ReactNode;
  className?: string;
} & Omit<ComponentProps<"input">, "className" | "children">;

const INPUT_CLASS =
  "w-full rounded-lg border border-black/10 bg-white px-5 py-3.5 text-body placeholder:text-muted focus:border-brand focus:outline-none";

export function Field({ label, children, className = "", id, ...rest }: FieldProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="mb-2 block font-semibold text-ink">
        {label}
      </label>
      {children ?? <input id={inputId} className={INPUT_CLASS} {...rest} />}
    </div>
  );
}

/** Pill-shaped input used by the auth screens. */
export function PillField({
  label,
  className = "",
  id,
  trailing,
  ...rest
}: FieldProps & { trailing?: ReactNode }) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="mb-2 block font-semibold text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          className="w-full rounded-full border border-brand/60 bg-white px-6 py-3.5 text-body placeholder:text-muted focus:border-brand focus:outline-none"
          {...rest}
        />
        {trailing && (
          <span className="absolute inset-y-0 right-5 flex items-center">
            {trailing}
          </span>
        )}
      </div>
    </div>
  );
}

export { INPUT_CLASS };
