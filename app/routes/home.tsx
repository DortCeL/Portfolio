import type { Route } from "./+types/home";
import { Portfolio } from "../components/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ismail AliF | Aspiring Software Engineer" },
    {
      name: "description",
      content: "Portfolio of Ismail AliF. ",
    },
  ];
}

export default function Home() {
  return <Portfolio />;
}
