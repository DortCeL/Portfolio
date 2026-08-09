import { About } from "./About";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { ThemeProvider } from "./ThemeProvider";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

function PortfolioInner() {
  useSmoothScroll();

  return (
    <div className="relative">
      <Nav />

      <main>
        <Hero />
        <About />

        {/* Temporary anchors for nav — more sections later */}
        <div
          id="work"
          className="scroll-mt-28 bg-[#faf8f4] px-6 pb-16 text-center text-sm text-black/35"
        >
          #work — coming next
        </div>
        <div
          id="stacks"
          className="scroll-mt-28 bg-[#faf8f4] px-6 pb-24 text-center text-sm text-black/35"
        >
          #stacks — coming next
        </div>
      </main>
    </div>
  );
}

export function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioInner />
    </ThemeProvider>
  );
}
