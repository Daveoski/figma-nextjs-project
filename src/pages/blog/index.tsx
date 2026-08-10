import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Container, RowHeading } from "@/components/ui/Section";
import { ArticleCard, BlogRow } from "@/components/cards/BlogCard";
import { Carousel } from "@/components/ui/Carousel";
import { ButtonLink } from "@/components/ui/Button";
import {
  FEATURED_POST,
  MARKETING_ARTICLES,
  READING_LIST,
  RELATED_POSTS,
} from "@/data/blog";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog — TOTC</title>
      </Head>

      {/* Featured post */}
      <section className="bg-sky/70 py-14">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm text-body">
                {FEATURED_POST.kicker}{" "}
                <span className="font-medium text-brand">
                  {FEATURED_POST.category}
                </span>
              </p>

              <h1 className="mt-4 text-3xl leading-snug font-bold sm:text-4xl">
                <Link
                  href={`/blog/${FEATURED_POST.slug}`}
                  className="hover:text-brand"
                >
                  {FEATURED_POST.title}
                </Link>
              </h1>

              <p className="mt-5 leading-7 text-body">
                {FEATURED_POST.excerpt}
              </p>

              <ButtonLink
                href={`/blog/${FEATURED_POST.slug}`}
                className="mt-7"
              >
                Start learning now
              </ButtonLink>
            </div>

            <div className="relative aspect-16/10 overflow-hidden rounded-xl">
              <Image
                src={FEATURED_POST.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Reading list */}
      <section className="py-14">
        <Container>
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            Reading blog list
          </h2>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {READING_LIST.map((item) => (
              <li key={item.label}>
                <Link
                  href="/blog"
                  className="relative block aspect-4/3 overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 90vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
                    <span className="rounded bg-white/90 px-5 py-1.5 text-sm font-medium text-ink">
                      {item.label}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Related blog */}
      <section className="bg-sky/70 py-14">
        <Container>
          <RowHeading title="Related Blog" href="/blog" />

          <Carousel
            className="mt-8"
            label="related posts"
            itemClassName="w-full sm:w-[48%]"
            items={RELATED_POSTS}
            renderItem={(post) => (
              <div className="h-full rounded-2xl bg-white p-6">
                <BlogRow post={post} />
              </div>
            )}
          />
        </Container>
      </section>

      {/* Marketing articles */}
      <section className="py-14">
        <Container>
          <RowHeading title="Marketing Articles" href="/blog" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MARKETING_ARTICLES.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
