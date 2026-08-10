import { AVATARS, photoAt } from "./site";

export type Course = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  blurb: string;
  instructor: string;
  instructorAvatar: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor";

const INSTRUCTORS = [
  { name: "Lina", avatar: AVATARS.patricia },
  { name: "Eveny Howard", avatar: AVATARS.eveny },
  { name: "Humbert Holland", avatar: AVATARS.humbert },
  { name: "Tamara Clarke", avatar: AVATARS.tamara },
] as const;

/**
 * Builds the repeating "AWS Certified solutions Architect" card set the design
 * uses across every course grid. `seed` offsets the photo/instructor rotation
 * so two grids on the same page do not look identical.
 */
export function makeCourses(count: number, seed = 0): Course[] {
  return Array.from({ length: count }, (_, i) => {
    const n = seed + i;
    const instructor = INSTRUCTORS[n % INSTRUCTORS.length];

    return {
      slug: `aws-certified-solutions-architect-${n + 1}`,
      title: "AWS Certified solutions Architect",
      category: "Design",
      duration: "3 Month",
      blurb: LOREM,
      instructor: instructor.name,
      instructorAvatar: instructor.avatar,
      price: 80,
      originalPrice: 100,
      image: photoAt(n),
      rating: 4 + ((n % 10) / 10) * 0.9,
      reviews: 1200 + n * 37,
    };
  });
}

export const FEATURED_COURSES = makeCourses(8, 0);
export const RECOMMENDED_COURSES = makeCourses(4, 2);
export const PERSONAL_DEVELOPMENT_COURSES = makeCourses(4, 5);
export const VIEWING_COURSES = makeCourses(4, 1);
export const CHOICE_COURSES = makeCourses(4, 3);

export type Category = {
  name: string;
  blurb: string;
  icon: "design" | "development" | "business" | "marketing" | "photography" | "acting";
  tint: string;
};

export const CATEGORIES: Category[] = [
  { name: "Design", blurb: LOREM, icon: "design", tint: "#9DD6D7" },
  { name: "Development", blurb: LOREM, icon: "development", tint: "#C7D8FF" },
  { name: "Development", blurb: LOREM, icon: "development", tint: "#C7E8FF" },
  { name: "Business", blurb: LOREM, icon: "business", tint: "#B7E9C8" },
  { name: "Marketing", blurb: LOREM, icon: "marketing", tint: "#FCE2B6" },
  { name: "Photography", blurb: LOREM, icon: "photography", tint: "#FAD4D6" },
  { name: "Acting", blurb: LOREM, icon: "acting", tint: "#D9DCE3" },
  { name: "Business", blurb: LOREM, icon: "business", tint: "#9DD6D7" },
];

export type Filter = {
  label: string;
  options: string[];
};

export const COURSE_FILTERS: Filter[] = [
  { label: "Subject", options: ["Design", "Development", "Business", "Marketing"] },
  { label: "Partner", options: ["AWS", "Google", "Microsoft", "Meta"] },
  { label: "Program", options: ["Certificate", "Degree", "Short course"] },
  { label: "Language", options: ["English", "Spanish", "French", "German"] },
  { label: "Ability", options: ["Beginner", "Intermediate", "Advanced"] },
  { label: "Learning Type", options: ["Self paced", "Instructor led", "Live"] },
];

export type Offer = {
  discount: string;
  title: string;
  body: string;
  image: string;
};

export const OFFERS: Offer[] = [
  {
    discount: "50%",
    title: "Lorem ipsum dolor",
    body: `${LOREM}. ${LOREM}`,
    image: photoAt(0),
  },
  {
    discount: "10%",
    title: "Lorem ipsum dolor",
    body: `${LOREM}. ${LOREM}`,
    image: photoAt(1),
  },
  {
    discount: "50%",
    title: "Lorem ipsum dolor",
    body: `${LOREM}. ${LOREM}`,
    image: photoAt(2),
  },
];

export type Creator = {
  name: string;
  blurb: string;
  photo: string;
};

export const CREATORS: Creator[] = [
  { name: "Jane Cooper", blurb: LOREM, photo: AVATARS.eveny },
  { name: "Adam", blurb: LOREM, photo: AVATARS.humbert },
  { name: "Tomora", blurb: LOREM, photo: AVATARS.tamara },
  { name: "Jane Cooper", blurb: LOREM, photo: AVATARS.patricia },
  { name: "Jane Cooper", blurb: LOREM, photo: AVATARS.eveny },
  { name: "Jane Cooper", blurb: LOREM, photo: AVATARS.tamara },
];

export type Book = {
  title: string;
  price: number;
  image: string;
};

export const BOOKS: Book[] = Array.from({ length: 6 }, (_, i) => ({
  title: "All Benefits of PLUS",
  price: 24,
  image: photoAt(i),
}));

export type ContinueCourse = {
  title: string;
  lesson: string;
  progress: number;
  image: string;
  instructor: string;
  instructorAvatar: string;
};

export const CONTINUE_LEARNING: ContinueCourse[] = [
  {
    title: "AWS Certified Solutions Architect",
    lesson: "Lesson 3 of 7",
    progress: 42,
    image: photoAt(0),
    instructor: "Lina",
    instructorAvatar: AVATARS.patricia,
  },
  {
    title: "AWS Certified Solutions Architect",
    lesson: "Lesson 5 of 7",
    progress: 71,
    image: photoAt(1),
    instructor: "Lina",
    instructorAvatar: AVATARS.patricia,
  },
  {
    title: "AWS Certified Solutions Architect",
    lesson: "Lesson 2 of 7",
    progress: 28,
    image: photoAt(2),
    instructor: "Lina",
    instructorAvatar: AVATARS.patricia,
  },
];

export const RATING_BREAKDOWN = [
  { stars: 5, percent: 90 },
  { stars: 4, percent: 72 },
  { stars: 3, percent: 48 },
  { stars: 2, percent: 26 },
  { stars: 1, percent: 12 },
];

export const COURSE_INCLUDES = [
  { label: "Money Back Guarantee", tint: "#49BBBD" },
  { label: "Access on all devices", tint: "#5B72EE" },
  { label: "Certification of completion", tint: "#29B9E7" },
  { label: "32 Modules", tint: "#F48C06" },
];
