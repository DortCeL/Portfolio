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
  resume: "/Ismail_Hossain_Resume.pdf",
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
    "Electron",
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
  description: string[];
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
    description: [
      "Used Socket.io so chat works in real time. No polling to see new messages.",
      "MongoDB isn’t relational, so I handled cascade deletes in the controllers",
      "Locked down API routes with JWT so only signed-in users can post or chat.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    tags: [
      { label: "MERN", tone: "blue" },
      { label: "WebSockets", tone: "blue" },
      { label: "Full Stack", tone: "red" },
      "Social Media"
    ],
    github: "https://github.com/DortCeL/Gamebook",
    live: "https://gamebook-alif.vercel.app",
    status: "IN PROGRESS",
    images: ["/gamebook.png"],
    accent: "#facc15",
    panel: "#fef3c7",
  },
  {
    id: "02",
    title: "KI POS",
    subtitle: "Offline-first desktop POS for a German client",
    description: [
      "Built with a team of 5 for a German client: an Electron desktop POS that works offline, so a shop can keep selling without internet.",
      "Used better-sqlite3 over Node IPC instead of a remote API, so it still runs on cheap hardware (dual-core, ~1GB RAM).",
      "React + Vite for the cashier UI. Local install, not a web application.",
    ],
    stack: ["Electron", "React", "SQLite", "Node.js"],
    tags: [
      { label: "Electron", tone: "blue" },
      { label: "Client Work", tone: "green" },
      { label: "Team", tone: "orange" },
      "SQLite",
    ],
    github: "https://github.com/arnob-bro/ki-pos-software",
    status: "Client",
    accent: "#2dd4bf",
    panel: "#ccfbf1",
  },
  {
    id: "03",
    title: "TripSplit",
    subtitle: "Group trip expense splitter",
    description: [
      "Built the trip/member/expense relationships with Laravel Eloquent, then wrote a balance algorithm so the app can tell you who owes whom, even in messy group splits.",
      "Used Laravel Sanctum for API auth so the React frontend can talk to the backend securely without sharing sessions.",
      "Built a dashboard where each person sees their own balance. No spreadsheet math needed.",
    ],
    stack: ["Laravel", "React", "TypeScript"],
    tags: [
      { label: "Laravel", tone: "blue" },
      { label: "React", tone: "blue" },
      { label: "Full Stack", tone: "red" },
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
    id: "04",
    title: "Sketchy?",
    subtitle: "AI job-posting risk checker",
    description: [
      "Prompted Gemini to score a job listing as sketchy or legit, with a confidence level and some red flags it found.",
      "Ran those calls through Next.js API routes so the Gemini key stays on the server, never in the browser.",
      "You can paste a posting and get a quick read before you waste time applying.",
    ],
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
    id: "05",
    title: "ATH Printing",
    subtitle: "Business website for a CAD printing shop",
    description: [
      "Built this for a real printing shop in Dhaka. Showcases their services, locations, machineries and company info",
      "Used Tailwind so the layout works on phone and desktop without writing a separate stylesheet.",
      "Vite's hot reload meant the client could see tweaks instantly, which kept revisions short.",
    ],
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
    id: "06",
    title: "DriveBackup",
    subtitle: "Automated folder backup to Google Drive",
    description: [
      "Used Python's zipfile to pack folders before upload so backups don't eat Drive space.",
      "Pushed the zip to the user's own Google Drive with google-api-python-client + OAuth 2.0 and no third-party cloud in the middle.",
      "I built this to automatically backup the save-files of my video games without the manual work",
    ],
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
    id: "07",
    title: "BFS Visualizer",
    subtitle: "Interactive BFS pathfinding demo",
    description: [
      "Wrote BFS in plain JS and used requestAnimationFrame to animate each step so you can actually see how the search spreads.",
      "You click to place walls, start, and end. Then watch it find the shortest path cell by cell if it exists.",
      "Used vanilla HTML CSS & Javascript to get a better understanding of how the DOM works.",
    ],
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
