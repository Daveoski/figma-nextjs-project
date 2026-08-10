import Image from "next/image";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import type { Post } from "@/data/blog";

/** Wide row card used by the "Related Blog" list. */
export function BlogRow({ post }: { post: Post }) {
  return (
    <article className="grid gap-6 sm:grid-cols-[minmax(0,240px)_1fr]">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-16/11 overflow-hidden rounded-xl"
      >
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 640px) 240px, 90vw"
          className="object-cover"
        />
      </Link>

      <div>
        <ul className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded bg-sky px-2.5 py-1 text-xs text-body"
            >
              {tag}
            </li>
          ))}
        </ul>

        <h3 className="mt-3 text-lg leading-snug font-semibold text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand">
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-6 text-body">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

/** Compact card used by the "Marketing Articles" grids. */
export function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="h-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(47,50,125,0.18)]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, 90vw"
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>{post.tags[0]}</span>
          <span className="flex items-center gap-1.5">
            <FiEye aria-hidden />
            {post.views}
          </span>
        </div>

        <h3 className="mt-3 text-base leading-snug font-semibold text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand">
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-body">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
          <span className="flex items-center gap-2">
            <Image
              src={post.authorAvatar}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="text-xs text-body">{post.author}</span>
          </span>
          <span className="flex items-baseline gap-2">
            <s className="text-xs text-accent-orange">$100</s>
            <span className="font-bold text-brand">$80</span>
          </span>
        </div>
      </div>
    </article>
  );
}
