import { About } from "./About";
import { CustomCursor } from "./CustomCursor";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Stacks } from "./Stacks";
import { Work } from "./Work";

export function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-manga-black text-manga-paper selection:bg-manga-red selection:text-white">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Stacks />
      </main>
      <Footer />
    </div>
  );
}
