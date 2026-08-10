import Image from "next/image";
import type { Offer } from "@/data/courses";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="relative aspect-4/3 overflow-hidden rounded-xl">
      <Image
        src={offer.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, 90vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      <span className="absolute top-0 left-6 grid h-16 w-16 place-items-center bg-brand text-xl font-bold text-white">
        {offer.discount}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-lg font-bold text-white">{offer.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/85">
          {offer.body}
        </p>
      </div>
    </article>
  );
}
