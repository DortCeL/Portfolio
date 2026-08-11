export const profile = {
  name: "Ismail Hossain",
  firstName: "Ismail",
  lastName: "Hossain",
  nickname: "AliF",
  fullName: "Ismail Hossain AliF",
  role: "Aspiring Software Engineer",
  tagline: "Welcome to my portfolio",
  email: "exh.alif.47@gmail.com",
  github: "https://github.com/DortCeL/",
  facebook: "https://www.facebook.com/guywitha4060waduheccc/",
  linkedin: "https://www.linkedin.com/in/aleph09/",
  youtube: "https://www.youtube.com/@dortcel5550",
  location: "Dhaka, Bangladesh",
  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Ahsanullah University of Science & Technology",
    schoolShort: "AUST",
    period: "2022 — Present",
    status: "Final semester",
    cgpa: "3.52",
  },
  leetcode: {
    url: "https://leetcode.com/u/DortCeL/",
    solved: 86,
    easy: 65,
    medium: 20,
    hard: 1,
  },
  tenure: [
    { years: "5+", label: "Web projects" },
    { years: "3+", label: "React & Node" },
    { years: "2", label: "Python" },
  ],
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Laravel",
    "Python",
    "C++",
    "Express",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Tailwind CSS",
    "Unity",
    "C#",
    "Git"
  ],
  tools: [
    "Git",
    "VS Code",
    "Figma",
    "Postman",
    "Vercel",
    "Docker",
  ],
  traits: [
    { label: "Easy to work with", note: "Clear, responsive, no drama" },
    { label: "Fluent in English", note: "Comfortable in async & meetings" },
    { label: "I learn fast", note: "Pick up stacks and ship quickly" },
  ],
};

export type TagTone = "yellow" | "red" | "blue" | "green" | "orange" | "purple";

export type ProjectTag = string | { label: string; tone: TagTone };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  /** Plain string = white tag. Object with tone = important colored tag. */
  tags: ProjectTag[];
  github?: string;
  live?: string;
  status?: string;
  /** Paths under /public, e.g. "/ss_1.png" */
  images?: string[];
  accent: string;
  panel: string;
};

export function tagLabel(tag: ProjectTag) {
  return typeof tag === "string" ? tag : tag.label;
}

export function tagTone(tag: ProjectTag): TagTone | undefined {
  return typeof tag === "string" ? undefined : tag.tone;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Gamebook",
    subtitle: "Full-stack social network for gamers",
    description:
      "A MERN social platform where gamers can post, comment, manage friends, and chat in real time. Built with JWT auth and MongoDB. Screenshot sharing, reviews, and clip uploads are in progress.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    tags: [
      { label: "Full Stack", tone: "red" },
      { label: "React", tone: "blue" },
      { label: "Node.js", tone: "green" },
      "MongoDB",
      "WebSockets",
    ],
    github: "https://github.com/DortCeL/Gamebook",
    live: "https://gamebook-henna.vercel.app",
    status: "IN PROGRESS",
    images: ["/gamebook.png"],
    accent: "#facc15",
    panel: "#fef3c7",
  },
  {
    id: "02",
    title: "TripSplit",
    subtitle: "Group trip expense splitter",
    description:
      "A Laravel and React app for shared travel costs. Create a trip, invite members, log expenses, and see clear balances of who owes whom. Built for BDT with roles, settlements, and trip history.",
    stack: ["Laravel", "React", "TypeScript"],
    tags: [
      { label: "Laravel", tone: "red" },
      { label: "React", tone: "blue" },
      { label: "Full Stack", tone: "orange" },
      "TypeScript",
    ],
    github: "https://github.com/DortCeL/TripSplit_LaravelReact",
    live: "https://tripsplit-y7x6.onrender.com/",
    status: "Complete",
    images: ["/ss_1.png", "/ss_2.png"],
    accent: "#fb7185",
    panel: "#ffe4e6",
  },
  {
    id: "03",
    title: "Sketchy?",
    subtitle: "AI job-posting risk checker",
    description:
      "Paste a job description and Gemini returns a sketchy-or-not verdict, confidence level, a short summary, and any red flags. Built with Next.js to help applicants spot shady listings before they apply.",
    stack: ["Next.js", "TypeScript", "Gemini AI"],
    tags: [
      { label: "Next.js", tone: "blue" },
      { label: "AI", tone: "purple" },
      "TypeScript",
      "Gemini",
    ],
    github: "https://github.com/DortCeL/sketchy",
    live: "https://sketchy-job.vercel.app/",
    status: "live",
    images: ["/sketchy.png"],
    accent: "#a78bfa",
    panel: "#ede9fe",
  },
  {
    id: "04",
    title: "ATH Printing",
    subtitle: "Business website for a CAD printing shop",
    description:
      "A marketing site for AutoCAD Training Home, a Dhaka printing and CAD training business. Covers services, location, and company background. Built with React, Tailwind, and Vite for a real local client.",
    stack: ["React", "Tailwind CSS", "Vite"],
    tags: [
      { label: "React", tone: "blue" },
      { label: "Client Work", tone: "green" },
      "Tailwind",
    ],
    github: "https://github.com/DortCeL/ATH_Printing",
    live: "https://ath-printing.vercel.app",
    status: "live",
    images: ["/ath_1.png", "/ath_2.png", "/ath_3.png", "/ath_4.png"],
    accent: "#34d399",
    panel: "#d1fae5",
  },
  {
    id: "05",
    title: "DriveBackup",
    subtitle: "Automated folder backup to Google Drive",
    description:
      "A Python console tool that zips selected folders and uploads them to the user's own Google Drive. Files stay in the account they already trust, with no third-party cloud in between.",
    stack: ["Python", "Google Drive API"],
    tags: [
      { label: "Python", tone: "yellow" },
      { label: "Automation", tone: "orange" },
      "Zip",
      "Backup",
      "Google Drive API",
    ],
    github: "https://github.com/DortCeL/DriveBackup",
    images: ["/drive_backup.jpg"],
    status: "live",
    accent: "#38bdf8",
    panel: "#e0f2fe",
  },
  {
    id: "06",
    title: "BFS Visualizer",
    subtitle: "Interactive BFS pathfinding demo",
    description:
      "A browser grid where you set a start, an end, and walls, then watch BFS find the shortest path step by step. Built in plain HTML, CSS, and JavaScript to make the algorithm easy to follow.",
    stack: ["HTML", "CSS", "JavaScript"],
    tags: [
      { label: "JavaScript", tone: "yellow" },
      { label: "Algorithms", tone: "purple" },
      "Visualization",
      "Breadth-First Search",
    ],
    github: "https://github.com/DortCeL/BFS-visualizer",
    live: "https://bfs-visualizer-alif-op.vercel.app",
    images: ["/bfs.png"],
    status: "live",
    accent: "#fb923c",
    panel: "#ffedd5",
  },
];

export const stickers = [
  { id: "s1", label: "Full Stack", emoji: "🛠️", rot: -8, x: 8, y: 18, color: "#facc15" },
  { id: "s2", label: "Eager Learner", emoji: "🚀", rot: 6, x: 72, y: 16, color: "#ffffff" },
  { id: "s3", label: "CSE Final Year", emoji: "🎓", rot: -4, x: 12, y: 68, color: "#fda4af" },
  { id: "s4", label: "Problem Solver", emoji: "⚡", rot: 10, x: 70, y: 62, color: "#ffffff" },
] as const;
