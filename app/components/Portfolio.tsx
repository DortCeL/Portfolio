import { AmbientOrbs } from "./AmbientOrbs";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { About, Contact, Flagship, Stack, Work } from "./Site";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export function Portfolio() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen">
      <AmbientOrbs />
      <Nav />
      <main>
        <Hero />
        <Flagship />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
