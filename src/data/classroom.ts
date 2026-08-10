import { AVATARS, photoAt } from "./site";

/** Pastel rotation the lesson sidebar cycles through. */
export const LESSON_TINTS = ["blue", "peach", "blue", "pink"] as const;
export type LessonTint = (typeof LESSON_TINTS)[number];

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  tint: LessonTint;
};

function makeLessons(count: number, prefix: string): Lesson[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: "Lesson 01 : Introduction about XD",
    duration: "30 mins",
    tint: LESSON_TINTS[i % LESSON_TINTS.length],
  }));
}

export const LESSON_SECTIONS = [
  { heading: "Change Simplification", lessons: makeLessons(4, "sec1") },
  { heading: "PRACTICE QUIZ", lessons: makeLessons(12, "sec2") },
];

export type ContentSection = {
  title: string;
  duration: string;
  lessons: number;
  items?: { title: string; time: string; locked: boolean }[];
};

export const COURSE_CONTENTS: ContentSection[] = [
  { title: "Get Started", duration: "1 Hour", lessons: 5 },
  {
    title: "Illstarator Structuors",
    duration: "2 Hour",
    lessons: 3,
    items: [
      { title: "1. Lorem ipsum dolor sit amet", time: "65:00", locked: false },
      { title: "2. Lorem ipsum dolor", time: "25:00", locked: true },
      { title: "3. Lorem ipsum dolor sit amet", time: "30:00", locked: true },
    ],
  },
  { title: "Using Illstarator", duration: "1 Hour", lessons: 4 },
  { title: "What is Pandas?", duration: "12:54", lessons: 5 },
  { title: "Work with Numpy", duration: "59:00", lessons: 3 },
];

export const MEETING_PARTICIPANTS = [
  { name: "Eveny Howard", photo: AVATARS.eveny },
  { name: "Patricia Mendoza", photo: AVATARS.patricia },
  { name: "Humbert Holland", photo: AVATARS.humbert },
];

export const LESSON_BODY_SECTIONS = [
  {
    heading: "06 Super Coins on the way",
    body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmod",
  },
  {
    heading: "Who this course is for?",
    body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL",
  },
  {
    heading: "Archievable",
    body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLWho this course is for? Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL",
  },
];

export const SHARE_BLOCKS = [
  { heading: "06 Super Coins on the way", tint: "blue" as const },
  { heading: "06 Super Coins on the way", tint: "peach" as const },
  { heading: "06 Super Coins on the way", tint: "pink" as const },
];

export const SHARE_INTRO =
  "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem";

export const BOOK_FOR_YOU = [
  { title: "All Benefits of PLUS", price: 24, image: photoAt(1) },
  { title: "All Benefits of PLUS", price: 24, image: photoAt(2) },
];

export const CART_ITEMS = [
  {
    title: "adipising elit, sed do eiusmod tempor",
    subtitle: "Lorem ipsum dollar...",
    price: 24.69,
    image: photoAt(0),
  },
  {
    title: "sed do eiusmod tempor adipising elit",
    subtitle: "Lorem ipsum dollar...",
    price: 24.69,
    image: photoAt(1),
  },
];

export const PAYMENT_METHODS = ["PayPal", "American Express", "Visa", "Mastercard"];

export const INSTRUCTOR_TABS = [
  "About",
  "Course",
  "Notes",
  "Project",
  "Podcast",
  "Book",
  "Review",
];

export const INSTRUCTOR = {
  name: "John Anderson",
  role: "Assistant Professor at Mcmaster University",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud",
  rating: "4.9 instructor Rating",
  students: "1,592 Students",
  courses: "Courses",
  photo: AVATARS.eveny,
  cover: photoAt(0),
} as const;
