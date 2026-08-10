import { AVATARS, IMAGES } from "./site";

export const SUCCESS_STATS = [
  { value: "15K+", label: "Students" },
  { value: "75%", label: "Total success" },
  { value: "35", label: "Main questions" },
  { value: "26", label: "Chief experts" },
  { value: "16", label: "Years of experience" },
];

export const ALL_IN_ONE = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    body: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.",
    icon: IMAGES.iconBilling,
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    body: "Schedule and reschedule appointments, track attendance and maintain records of student attendance.",
    icon: IMAGES.iconSchedule,
  },
  {
    title: "Customer Tracking",
    body: "Automate and track emails to individuals or groups. Build a customer database with rich contact profiles.",
    icon: IMAGES.iconContact,
  },
];

export const AUDIENCE_CARDS = [
  { label: "FOR INSTRUCTORS", cta: "Start a class today", photo: IMAGES.instructor },
  {
    label: "FOR STUDENTS",
    cta: "Enter access code",
    photo: IMAGES.team,
    inverted: true,
  },
];

export type Feature = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  body?: string;
  bullets?: { title: string; body: string }[];
};

export const FEATURES: Feature[] = [
  {
    title: "A user interface designed",
    highlight: "for the classroom",
    bullets: [
      {
        title: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
        body: "",
      },
      {
        title: "TA’s and presenters can be moved to the front of the class.",
        body: "",
      },
      {
        title: "Teachers can easily see all students and class data at one time.",
        body: "",
      },
    ],
  },
  {
    title: "Tools For Teachers",
    highlight: "And Learners",
    body: "Class provides tools to help run and manage the class such as Live Attendance, Hand Raising, Polls, Screen Sharing and more.",
  },
  {
    title: "Assessments,",
    highlight: "Quizzes, Tests",
    body: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered into the online gradebook.",
  },
  {
    title: "Class Management",
    highlight: "Tools for Educators",
    body: "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
  },
  {
    title: "One-on-One",
    highlight: "Discussions",
    body: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: string;
  rating: number;
  reviews: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "“Thank you so much for your help. It’s exactly what I’ve been looking for. You won’t regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.”",
    name: "Gloria Rose",
    role: "12 Courses, 5 Certificates",
    photo: IMAGES.studentBooks,
    rating: 5,
    reviews: "12 reviews at Yelp",
  },
  {
    quote:
      "“TOTC has completely changed how our department runs classes. Scheduling, attendance and grading all live in one place now, and the students actually enjoy using it.”",
    name: "Eveny Howard",
    role: "8 Courses, 3 Certificates",
    photo: IMAGES.studentBooks,
    rating: 5,
    reviews: "31 reviews at Yelp",
  },
  {
    quote:
      "“The one-on-one discussion rooms are the feature I did not know I needed. I can check in with a student without pulling them out of the lesson.”",
    name: "Tamara Clarke",
    role: "15 Courses, 7 Certificates",
    photo: IMAGES.studentBooks,
    rating: 5,
    reviews: "24 reviews at Yelp",
  },
];

export const STUDENT_QUOTES = [
  {
    quote:
      "“TOTC has completely transformed the way I study. The live classes feel just like being in a real classroom.”",
    name: "Jane Cooper",
    role: "Design student",
    photo: AVATARS.eveny,
  },
  {
    quote:
      "“I finished three certificates in six months. The pacing and the instructor feedback made all the difference.”",
    name: "Humbert Holland",
    role: "Development student",
    photo: AVATARS.humbert,
  },
  {
    quote:
      "“The assessments are automatically graded, so I always know exactly where I stand before an exam.”",
    name: "Tamara Clarke",
    role: "Business student",
    photo: AVATARS.tamara,
  },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    price: 0,
    tagline: "Best for personal use and trying things out.",
    features: [
      "Access to 20 free courses",
      "Community discussion board",
      "Course completion badges",
      "Mobile and tablet access",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: 29,
    tagline: "Best for students studying toward a certificate.",
    features: [
      "Everything in Free",
      "Unlimited course library",
      "Live classes and office hours",
      "Certification of completion",
      "Downloadable resources",
    ],
    featured: true,
  },
  {
    name: "Teams",
    price: 79,
    tagline: "Best for schools training 5 or more people.",
    features: [
      "Everything in Pro",
      "Up to 25 seats included",
      "Class roster and gradebook",
      "Attendance reporting",
      "Priority support",
    ],
    featured: false,
  },
];

export const FAQS = [
  {
    q: "Can I use TOTC for free?",
    a: "Yes. The Free plan gives you access to 20 courses, the discussion board and completion badges, with no card required.",
  },
  {
    q: "How do live classes work?",
    a: "Live classes run inside the TOTC classroom. Your teacher gets a dedicated Podium space, and you get hand raising, polls and screen sharing.",
  },
  {
    q: "Do I get a certificate at the end of a course?",
    a: "Every course on the Pro and Teams plans issues a certificate of completion once you pass the final assessment.",
  },
  {
    q: "Can I cancel at any time?",
    a: "You can cancel from your dashboard at any point. You keep access until the end of the billing period you already paid for.",
  },
  {
    q: "Is there a discount for schools?",
    a: "The Teams plan covers 25 seats. For anything larger, our team will put together a custom quote for your institution.",
  },
];
