import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SHARE_TARGETS, type SocialKey } from "@/data/site";

const ICONS: Record<SocialKey, typeof FaTwitter> = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  instagram: FaInstagram,
  telegram: FaTelegramPlane,
  whatsapp: FaWhatsapp,
};

export function SocialRow({
  className = "",
  size = "h-8 w-8",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {SHARE_TARGETS.map(({ key, label, color }) => {
        const Icon = ICONS[key];
        return (
          <li key={key}>
            <a
              href="#"
              aria-label={`Share on ${label}`}
              style={{ backgroundColor: color }}
              className={`grid ${size} place-items-center rounded-full text-white transition-opacity hover:opacity-85`}
            >
              <Icon aria-hidden className="text-sm" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
