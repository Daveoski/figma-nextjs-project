/**
 * Shared site chrome: navigation, the reusable photo pool and social links.
 *
 * The photo pool is centralised because the project ships a small fixed set of
 * images, so every card in the design reuses them by role rather than by file.
 */

export const IMAGES = {
  logo: "/images/logo.png",
  heroStudent:
    "/images/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.png",
  studentBooks: "/images/smiling student holding books.png",
  instructor: "/images/lady smiling.png",
  zoomLaptop: "/images/laptop display.png",
  team: "/images/dev.png",
  code: "/images/javascript image.png",
  heroCards: "/images/stats.png",
  iconBilling: "/images/billing icon.png",
  iconSchedule: "/images/schedule icon.png",
  iconContact: "/images/contact icon.png",
} as const;

export const AVATARS = {
  patricia: "/images/avatar1.png",
  humbert: "/images/avatar2.png",
  eveny: "/images/avatar3.png",
  tamara: "/images/avatar4.png",
} as const;

/** Rotated through course/blog cards so each grid looks varied. */
export const PHOTO_POOL = [
  IMAGES.zoomLaptop,
  IMAGES.team,
  IMAGES.code,
  IMAGES.instructor,
] as const;

export function photoAt(index: number): string {
  return PHOTO_POOL[index % PHOTO_POOL.length];
}

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export type SocialKey =
  | "twitter"
  | "facebook"
  | "youtube"
  | "instagram"
  | "telegram"
  | "whatsapp";

/**
 * Share row under a course. The design renders every icon on a slate circle
 * except YouTube, which keeps its brand red.
 */
export const SHARE_TARGETS: { key: SocialKey; label: string; color: string }[] =
  [
    { key: "twitter", label: "Twitter", color: "#4F5A69" },
    { key: "facebook", label: "Facebook", color: "#4F5A69" },
    { key: "youtube", label: "YouTube", color: "#FF0000" },
    { key: "instagram", label: "Instagram", color: "#4F5A69" },
    { key: "telegram", label: "Telegram", color: "#4F5A69" },
    { key: "whatsapp", label: "WhatsApp", color: "#4F5A69" },
  ];

/** The signed-in user the design mocks up in the navbar. */
export const CURRENT_USER = {
  name: "Lina",
  avatar: AVATARS.patricia,
} as const;
