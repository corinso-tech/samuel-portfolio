// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Samuel Uzoma",
  fullName: "Samuel Chigemezu Uzoma",
  role: "Flutter Mobile & Web Engineer",
  location: "Lagos, Nigeria",
  email: "samueluzoma07@gmail.com",
  phone: "+234 913 231 7316",
  whatsapp: "https://wa.me/2349132317316",
  linkedin: "https://www.linkedin.com/in/uzoma-samuel",
  linkedinLabel: "in/uzoma-samuel",
  photo: "/samuel-uzoma.jpg",
  cv: "/Samuel_Uzoma_CV.pdf",
  currentRole: "Mobile Software Engineer at Libra Motors",
  pitch:
    "I build and ship cross-platform Flutter apps that move people, parcels and payments, and learning platforms (LMS) that take students from first lesson to final grade. Production releases to the App Store and Google Play since 2023.",
  // Words that rotate in the hero headline.
  movers: ["people", "parcels", "payments", "learning"],
};

export const stats = [
  { value: 20, prefix: "~", suffix: "k", label: "users on the production apps I maintain" },
  { value: 2021, label: "writing Flutter & Dart since", plain: true },
  { value: 3, label: "payment gateways: Paystack, Flutterwave, OPay" },
  { value: 20, suffix: "+", label: "ML-powered Flutter apps built and deployed" },
];

export type Project = {
  name: string;
  status: "Live" | "In development" | "Built" | "20+ apps";
  domain: string;
  description: string;
  tags: string[];
  link?: { href: string; label: string };
  featured?: boolean;
  /** Spans both columns without the featured layout. */
  wide?: boolean;
  details?: { label: string; text: string }[];
};

export const projects: Project[] = [
  {
    name: "Grace Scholar",
    status: "In development",
    domain: "EdTech LMS · iOS, Android & web",
    featured: true,
    description:
      "A learning management system for university students: enrolment, video lessons, continuous assessment, timed objective and theory exams with auto-submit, graded results and a CGPA tracker, course forums, and subscription billing with a free trial. The Flutter app sits beside a student web app, an instructor course studio and an admin console that share one backend.",
    tags: ["Clean Architecture", "BLoC", "get_it DI", "Paystack", "Google Cloud Run"],
    details: [
      { label: "Mobile", text: "Flutter app, feature-first Clean Architecture across ~18 modules" },
      { label: "Payments", text: "Paystack checkout with plan-based feature gating" },
      { label: "Exams", text: "Live countdown timers with automatic submission" },
      { label: "Video", text: "Signed uploads and playback for course lessons" },
      { label: "Web", text: "Next.js student app, instructor studio and admin console" },
      { label: "Cloud", text: "NestJS API on Google Cloud Run, separate test and live environments" },
    ],
  },
  {
    name: "Libmot Mobile",
    status: "Live",
    domain: "Transport · iOS & Android",
    description:
      "Travel booking for Libra Motors: search trips, book seats, pay directly or from a wallet, and keep a full booking history.",
    tags: ["Booking", "Wallet", "Paystack · Flutterwave · OPay"],
    link: { href: "https://apps.apple.com/us/app/libmot-mobile-app/id1587324071", label: "View on the App Store" },
  },
  {
    name: "Libmot Express",
    status: "Live",
    domain: "Logistics · iOS & Android",
    description:
      "Shipment contracting for businesses and individuals, with payments, wallet transactions, live shipment tracking and history.",
    tags: ["Shipments", "Tracking", "Wallet"],
    link: { href: "https://apps.apple.com/us/app/libmot-express-app/id1548969326", label: "View on the App Store" },
  },
  {
    name: "BOTROCK",
    status: "Built",
    domain: "Faith & relationships · iOS & Android",
    description:
      "A discipleship app built on a seven-book series. Content unlocks by life stage, from single to married, and reads fully offline, with Firebase handling accounts and progress.",
    tags: ["Cubit", "go_router", "Firebase", "Dark mode"],
  },
  {
    name: "Yuni",
    status: "In development",
    domain: "Commerce · iOS & Android",
    description: "A shopping app for browsing products, managing a cart and checking out on mobile.",
    tags: ["Commerce", "Flutter"],
  },
  {
    name: "ML + Flutter",
    wide: true,
    status: "20+ apps",
    domain: "Applied machine learning · mobile & web",
    description:
      "Flutter front ends for trained models, served on-device or from Python APIs: cassava leaf disease detection, traffic sign recognition, traffic congestion prediction, heart disease risk and skin condition screening.",
    tags: ["TensorFlow Lite", "FastAPI", "Flask", "Render"],
  },
];

export const experience = {
  title: "Mobile Software Engineer",
  company: "Libra Motors Limited",
  products: "Libmot Mobile & Libmot Express",
  period: "Nov 2023 – now",
  place: "Lagos, Nigeria",
  points: [
    "Develop and maintain production Flutter apps for transport and logistics, serving about 20,000 users.",
    "Build booking, shipment contracting, wallet, transaction-history and tracking flows.",
    "Design payment flows on Paystack, Flutterwave and OPay, for both direct and wallet-based payments.",
    "Integrate REST services with Dio, Retrofit and Chopper, JWT auth, and Swagger/OpenAPI contracts.",
    "Own Android and iOS releases: App Bundles to Google Play, Xcode archives to the App Store.",
    "Review code, write tests, chase down production defects, and support other developers on the team.",
  ],
};

// Rendered as a pubspec.yaml. `k` = key, `c` = comment, `v` = value.
export const pubspec: { k?: string; v?: string; c?: string; indent?: number }[] = [
  { k: "name", v: "samuel_uzoma" },
  { k: "description", v: "Flutter mobile & web engineer, Lagos." },
  {},
  { k: "environment" },
  { k: "platforms", v: "[android, ios, web]", indent: 1 },
  {},
  { k: "dependencies" },
  { c: "# architecture & state", indent: 1 },
  { k: "architecture", v: "clean_architecture", indent: 1 },
  { k: "state", v: "[flutter_bloc, riverpod, provider]", indent: 1 },
  { c: "# networking", indent: 1 },
  { k: "http", v: "[dio, retrofit, chopper, http]", indent: 1 },
  { k: "auth", v: "jwt", indent: 1 },
  { k: "contracts", v: "[rest, json, swagger_openapi, postman]", indent: 1 },
  { c: "# backend & cloud", indent: 1 },
  { k: "firebase", v: "[auth, firestore, cloud_storage]", indent: 1 },
  { k: "google_cloud", v: "[cloud_run, cloud_scheduler, container_deploys]", indent: 1 },
  { k: "backend", v: "[nestjs, postgresql, render]", indent: 1 },
  { c: "# money", indent: 1 },
  { k: "payments", v: "[paystack, flutterwave, opay, wallets]", indent: 1 },
  {},
  { k: "dev_dependencies" },
  { k: "workflow", v: "[git, github, gitlab, code_review, mentoring]", indent: 1 },
  { k: "quality", v: "[testing, debugging, performance_profiling]", indent: 1 },
  { k: "release", v: "[play_console, app_bundles, xcode_archive, app_store]", indent: 1 },
];

export const marquee = [
  "Flutter", "Dart", "BLoC", "Riverpod", "Clean Architecture", "Firebase", "Google Cloud Run",
  "NestJS", "PostgreSQL", "Next.js", "Paystack", "Flutterwave", "OPay", "Dio", "Retrofit",
  "TensorFlow Lite", "FastAPI", "App Store", "Google Play",
];

export const education = [
  { degree: "BSc Computer Science", school: "Federal University Oye-Ekiti", result: "Second Class Upper", dates: "Nov 2023 – Dec 2025" },
  { degree: "HND Computer Science", school: "Yaba College of Technology, Lagos", result: "Distinction", dates: "Aug 2021 – Feb 2023" },
  { degree: "OND Computer Science", school: "Yaba College of Technology, Lagos", result: "Upper Credit", dates: "Dec 2015 – Jan 2018" },
];

export const leadership = {
  title: "President, NACOS",
  detail: "National Association of Computing Students, Yaba College of Technology · 2022–2023",
};
