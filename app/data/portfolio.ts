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

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  tags: string[];
  github?: string;
  live?: string;
  status?: string;
  /** Paths under /public, e.g. "/ss_1.png" */
  images?: string[];
  accent: string;
  panel: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Gamebook",
    subtitle: "Social platform for gamers",
    description:
      "A MERN social network built for gamers : posts, comments, replies, friend management, and real-time chat. Working on : screenshots, reviews, and clip sharing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    tags: ["React", "Node", "MongoDB", "Full Stack", "Websocket", "Social Media"],
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
    subtitle: "Shared travel expenses",
    description:
      "Collaborative expense management for friend groups on the road. Track shares, debts, and totals so nobody is left guessing who owes what.",
    stack: ["Laravel", "React", "TypeScript"],
    tags: ["Laravel", "SPA", "Finance"],
    github: "https://github.com/DortCeL/TripSplit_LaravelReact",
    live: "https://tripsplit-y7x6.onrender.com/",
    status: "Complete",
    images: ["/ss_1.png", "/ss_2.png"],
    accent: "#fb7185",
    panel: "#ffe4e6",
  },
  {
    id: "03",
    title: "sketchy?",
    subtitle: "Job post scam checker",
    description:
      "Paste a job description and Gemini flags scam-like or shady signals — confidence, a short verdict, and any red flags. A quick second opinion before you apply.",
    stack: ["Next.js", "TypeScript", "Gemini AI"],
    tags: ["AI", "Next.js", "Security"],
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
    subtitle: "Family business, on the web",
    description:
      "A React + Tailwind marketing site for AutoCAD Training Home — my father's printing & CAD training business. Location, services, and capabilities.",
    stack: ["React", "Tailwind CSS", "Vite"],
    tags: ["Client Work", "Marketing", "Local Biz"],
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
    subtitle: "Privacy-first folder backup",
    description:
      "A lightweight Python console app that zips selected folders and uploads them to the user's own Google Drive. No third-party storage.",
    stack: ["Python", "Google Drive API"],
    tags: ["Python", "Automation", "Privacy"],
    github: "https://github.com/DortCeL/DriveBackup",
    images: ["/drive_backup.jpg"],
    status: "live",
    accent: "#38bdf8",
    panel: "#e0f2fe",
  },
  {
    id: "06",
    title: "BFS Visualizer",
    subtitle: "Pathfinding, made visible",
    description:
      "Pick a start, an end, draw walls on a grid, and watch BFS find the shortest path — understand algorithms by seeing them.",
    stack: ["HTML", "CSS", "JavaScript"],
    tags: ["Algorithms", "Visual", "Teaching"],
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
  { id: "s2", label: "Ships Often", emoji: "🚀", rot: 6, x: 72, y: 16, color: "#ffffff" },
  { id: "s3", label: "CSE Final Year", emoji: "🎓", rot: -4, x: 12, y: 68, color: "#fda4af" },
  { id: "s4", label: "Problem Solver", emoji: "⚡", rot: 10, x: 70, y: 62, color: "#ffffff" },
] as const;
