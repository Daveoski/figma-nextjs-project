import { FaStar } from "react-icons/fa";

type StarsProps = {
  /** Rating out of 5. Rounded to the nearest whole star. */
  value: number;
  className?: string;
  size?: string;
};

export function Stars({ value, className = "", size = "text-sm" }: StarsProps) {
  const filled = Math.round(value);

  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rated ${value.toFixed(1)} out of 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          aria-hidden
          className={`${size} ${i < filled ? "text-star" : "text-black/15"}`}
        />
      ))}
    </span>
  );
}
