import { CascadeAbout, CascadePool, CascadeWork } from "./Cascade";
import { MistCanvas, WaterfallSpine } from "./WaterfallSpine";
import { MountainBackdrop } from "./MountainBackdrop";
import { Nav } from "./Nav";
import { Summit } from "./Summit";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export function Portfolio() {
  useSmoothScroll();

  return (
    <div className="relative min-h-svh">
      <MountainBackdrop />
      <WaterfallSpine />
      <MistCanvas />
      <Nav />

      <main className="relative z-10">
        <Summit />
        <CascadeWork />
        <CascadeAbout />
        <CascadePool />
      </main>
    </div>
  );
}
