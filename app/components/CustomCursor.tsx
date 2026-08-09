import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const tipRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const frame = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setEnabled(fine.matches && !reduce.matches);
    sync();

    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("comic-cursor");

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, label, .sticker",
      );
      setHovering(Boolean(interactive));
    };

    const tick = () => {
      const el = tipRef.current;
      if (el) {
        el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      frame.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    frame.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("comic-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={tipRef}
      className={`comic-cursor-dot ${hovering ? "is-hover" : ""}`}
      aria-hidden
    >
      <svg
        className="comic-cursor-pointer"
        viewBox="0 0 24 24"
          width="28"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 2.2 19.2 12.4l-6.1 1.4 3.4 7.3-2.5 1.2-3.5-7.4-4.8 4.7Z"
          fill="var(--color-manga-yellow)"
          stroke="#0c0c0d"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
