import type { Route } from "./+types/home";
import { Portfolio } from "../components/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ismail AliF | Aspiring Software Engineer | Portfolio" },
    {
      name: "description",
      content:
        "Sketch-style portfolio of Ismail AliF — final-semester CSE student in Dhaka. React, Laravel, Python, and shipped projects.",
    },
  ];
}

export default function Home() {
  return <Portfolio />;
}
