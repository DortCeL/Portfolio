import type { Route } from "./+types/home";
import { Portfolio } from "../components/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ismail AliF — Software Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Ismail AliF — aspiring software engineer. React, Laravel, Python, C++. Final semester CSE at AUST.",
    },
    { property: "og:title", content: "Ismail AliF — Software Engineer" },
    {
      property: "og:description",
      content:
        "Building thoughtful software — from social platforms to quiet tools that just work.",
    },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
