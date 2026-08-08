export const profile = {
  name: "Ismail AliF",
  firstName: "Ismail",
  lastName: "AliF",
  role: "Aspiring Software Engineer",
  tagline: "Building thoughtful software — from social platforms to quiet tools that just work.",
  email: "exh.alif.47@gmail.com",
  github: "https://github.com/DortCeL",
  location: "Dhaka, Bangladesh",
  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Ahsanullah University of Science & Technology",
    period: "2022 — Present",
    status: "Final semester",
    cgpa: "3.52",
  },
  skills: [
    "React",
    "TypeScript",
    "Laravel",
    "Python",
    "C++",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Tailwind CSS",
    "Unity",
    "C#",
  ],
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  status?: "live" | "wip" | "private";
  accent: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Gamebook",
    subtitle: "Social platform for gamers",
    description:
      "A MERN social network built for gamers — posts, comments, replies, friend management, and real-time chat. Next up: screenshots, reviews, and clip sharing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/DortCeL/Gamebook",
    live: "https://gamebook-henna.vercel.app",
    status: "live",
    accent: "#2a6f6a",
  },
  {
    id: "02",
    title: "TripSplit",
    subtitle: "Shared travel expenses",
    description:
      "Collaborative expense management for friend groups on the road. Track shares, debts, and totals so nobody is left guessing who owes what.",
    stack: ["Laravel", "React", "TypeScript"],
    github: "https://github.com/DortCeL/TripSplit_LaravelReact",
    status: "wip",
    accent: "#3d5a80",
  },
  {
    id: "03",
    title: "What If?",
    subtitle: "AI alternate timelines",
    description:
      "A reflective Gemini-powered tool that imagines a world where something never existed — to reveal the value of what we take for granted. Evolving toward smarter prompt-driven products.",
    stack: ["React", "Express", "Gemini AI"],
    github: "https://github.com/DortCeL/what-if",
    live: "https://what-if-blond.vercel.app",
    status: "live",
    accent: "#6b4c9a",
  },
  {
    id: "04",
    title: "ATH Printing",
    subtitle: "Family business, on the web",
    description:
      "A React + Tailwind marketing site for AutoCAD Training Home — my father's printing & CAD training business. Location, services, and capabilities, crafted to convert visitors.",
    stack: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/DortCeL/ATH_Printing",
    live: "https://ath-printing.vercel.app",
    status: "live",
    accent: "#b4532a",
  },
  {
    id: "05",
    title: "DriveBackup",
    subtitle: "Privacy-first folder backup",
    description:
      "A lightweight Python console app that zips selected folders and uploads them to the user's own Google Drive. No third-party storage — your Drive, your data.",
    stack: ["Python", "Google Drive API"],
    github: "https://github.com/DortCeL/DriveBackup",
    status: "live",
    accent: "#1a5f4a",
  },
  {
    id: "06",
    title: "BFS Visualizer",
    subtitle: "Pathfinding, made visible",
    description:
      "Pick a start, an end, draw walls on a grid, and watch BFS find the shortest path — a vanilla JS visualizer for understanding algorithms by seeing them.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DortCeL/BFS-visualizer",
    live: "https://bfs-visualizer-alif-op.vercel.app",
    status: "live",
    accent: "#c45c2a",
  },
  {
    id: "07",
    title: "Vehicle Rental API",
    subtitle: "PostgreSQL · Prisma · modular Node",
    description:
      "A vehicle rental backend built to deepen PostgreSQL, TypeScript, and Prisma skills — modular Node architecture with clean data modeling.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/DortCeL/vehicle-rental-system-postgresql-erd",
    status: "live",
    accent: "#4a6fa5",
  },
  {
    id: "08",
    title: "Pookie Notes",
    subtitle: "Cute browser notes",
    description:
      "A browser extension for quick notes and highlighting important links. Built with a deliberately playful UI — productivity with a wink.",
    stack: ["JavaScript", "Browser Extension"],
    github: "https://github.com/DortCeL/pookie_notes",
    status: "wip",
    accent: "#c45b7a",
  },
  {
    id: "09",
    title: "Unity 2D Adventure",
    subtitle: "University game project",
    description:
      "A 2D action game in C# & Unity with three levels, two mini-bosses, and complex combat logic. Still being polished — but the systems are already fighting.",
    stack: ["C#", "Unity"],
    github: "https://github.com/DortCeL/unity-game-development",
    status: "wip",
    accent: "#5c4a3a",
  },
  {
    id: "10",
    title: "German Store POS",
    subtitle: "Team · tax-compliant retail",
    description:
      "Point-of-sale system for a German store, built with four teammates and real German tax law constraints. Repo access pending — story coming soon.",
    stack: ["Team project", "POS", "Tax compliance"],
    status: "private",
    accent: "#2c3e50",
  },
];
