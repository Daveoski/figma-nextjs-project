import { AVATARS, IMAGES, photoAt } from "./site";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  views: string;
  image: string;
  tags: string[];
};

const EXCERPT =
  "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...";

export const FEATURED_POST = {
  slug: "why-swift-ui-should-be-on-the-radar",
  kicker: "By Themadbrains in",
  category: "inspiration",
  title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
  image: IMAGES.zoomLaptop,
} as const;

export const READING_LIST = [
  { label: "UX/UI", image: IMAGES.team },
  { label: "React", image: IMAGES.code },
  { label: "PHP", image: IMAGES.instructor },
  { label: "JavaScript", image: IMAGES.code },
];

export const RELATED_POSTS: Post[] = [
  {
    slug: "class-adds-30-million-1",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    excerpt: EXCERPT,
    author: "Lina",
    authorAvatar: AVATARS.patricia,
    views: "251,232",
    image: IMAGES.instructor,
    tags: ["affordable", "Stunning"],
  },
  {
    slug: "class-adds-30-million-2",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    excerpt: EXCERPT,
    author: "Lina",
    authorAvatar: AVATARS.patricia,
    views: "251,232",
    image: IMAGES.zoomLaptop,
    tags: ["making", "madbrawns"],
  },
];

export const MARKETING_ARTICLES: Post[] = Array.from({ length: 4 }, (_, i) => ({
  slug: `marketing-article-${i + 1}`,
  title: "AWS Certified solutions Architect",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  author: "Lina",
  authorAvatar: AVATARS.patricia,
  views: "251,232",
  image: photoAt(i),
  tags: ["Design"],
}));

export const POST_BODY = [
  "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.",
  "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.",
  "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.",
  "TOTC is a platform",
  "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.",
  "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage",
];

export const POST_TAGS = ["affordable", "Stunning", "making", "madbrawns"];
