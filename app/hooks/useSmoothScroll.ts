import { useEffect, useState } from "react";
import Lenis from "lenis";

type LenisWindow = Window & { __lenis?: Lenis };

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as LenisWindow).__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete (window as LenisWindow).__lenis;
    };
  }, []);
}

/**
 * Scroll progress 0→1 over `rangeVh` viewports.
 * Samples Lenis.scroll via rAF so it stays in sync with smooth scrolling.
 */
export function useScrollProgress(rangeVh = 0.7) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let prev = -1;

    const tick = () => {
      const lenis = (window as LenisWindow).__lenis;
      const y =
        lenis?.scroll ??
        window.scrollY ??
        document.documentElement.scrollTop ??
        0;
      const max = Math.max(window.innerHeight * rangeVh, 1);
      const next = Math.min(Math.max(y / max, 0), 1);
      if (Math.abs(next - prev) > 0.001) {
        prev = next;
        setProgress(next);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [rangeVh]);

  return progress;
}
