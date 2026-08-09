import type { Route } from "./+types/home";
import { Portfolio } from "../components/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ismail AliF — Final-year CSE student · Full-stack aspiring engineer" },
    {
      name: "description",
      content:
        "Final-semester Computer Science student in Dhaka. Portfolio of Ismail AliF — React, Laravel, Python, C++.",
    },
  ];
}

export default function Home() {
  return <Portfolio />;
}
