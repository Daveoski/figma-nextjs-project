import Image from "next/image";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Container, RowHeading } from "@/components/ui/Section";
import { BlogRow } from "@/components/cards/BlogCard";
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import {
  FEATURED_POST,
  MARKETING_ARTICLES,
  POST_BODY,
  POST_TAGS,
  RELATED_POSTS,
  type Post,
} from "@/data/blog";
import { AVATARS, IMAGES } from "@/data/site";

type PostView = {
  title: string;
  image: string;
};

export default function BlogPostPage({ post }: { post: PostView }) {
  return (
    <>
      <Head>
        <title>{`${post.title} — TOTC`}</title>
      </Head>

      {/* Cover */}
      <div className="relative h-64 w-full sm:h-96">
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <article className="py-14">
        <Container className="max-w-4xl!">
          <h1 className="text-3xl leading-snug font-bold sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-8 space-y-6">
            {POST_BODY.map((paragraph, i) => (
              <p key={i} className="leading-7 text-body">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {POST_TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-brand-tint px-4 py-1.5 text-sm text-body"
              >
                {tag}
              </li>
            ))}
          </ul>

          <footer className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-6">
            <div className="flex items-center gap-3">
              <Image
                src={AVATARS.patricia}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span>
                <span className="block text-xs text-muted">Written by</span>
                <span className="font-semibold text-ink">Lina</span>
              </span>
            </div>

            <Button variant="outline">Follow</Button>
          </footer>
        </Container>
      </article>

      {/* Related */}
      <section className="bg-sky/70 py-14">
        <Container>
          <RowHeading title="Related Blog" href="/blog" />

          <Carousel
            className="mt-8"
            label="related posts"
            itemClassName="w-full sm:w-[48%]"
            items={RELATED_POSTS}
            renderItem={(related: Post) => (
              <div className="h-full rounded-2xl bg-white p-6">
                <BlogRow post={related} />
              </div>
            )}
          />
        </Container>
      </section>
    </>
  );
}

/** Every post the router can resolve without a fallback render. */
const ALL_SLUGS = [
  FEATURED_POST.slug,
  ...RELATED_POSTS.map((p) => p.slug),
  ...MARKETING_ARTICLES.map((p) => p.slug),
];

export const getStaticPaths: GetStaticPaths = () => ({
  paths: ALL_SLUGS.map((slug) => ({ params: { slug } })),
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps<{ post: PostView }> = ({
  params,
}) => {
  const slug = params?.slug as string;
  const match = [...RELATED_POSTS, ...MARKETING_ARTICLES].find(
    (p) => p.slug === slug,
  );

  const post: PostView = match
    ? { title: match.title, image: match.image }
    : { title: FEATURED_POST.title, image: IMAGES.team };

  return { props: { post } };
};
