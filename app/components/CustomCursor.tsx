import { useEffect, useRef, useState } from "react";

type Burst = {
  id: number;
  x: number;
  y: number;
  rot: number;
  scale: number;
};

const TRAIL_LEN = 16;
let burstId = 0;

export function CustomCursor() {
  const tipRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const trailPos = useRef(
    Array.from({ length: TRAIL_LEN }, () => ({ x: -100, y: -100 })),
  );
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [motionOk, setMotionOk] = useState(true);
  const pos = useRef({ x: -100, y: -100 });
  const prevPos = useRef({ x: -100, y: -100 });
  const frame = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setEnabled(fine.matches && !reduce.matches);
      setMotionOk(!reduce.matches);
    };
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
      const { x, y } = pos.current;
      const tip = tipRef.current;
      if (tip) {
        tip.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Trail origin sits inside the triangle body (not past the base)
      const base = { x: x + 15, y: y + 20 };

      const vx = x - prevPos.current.x;
      const vy = y - prevPos.current.y;
      const speed = Math.min(Math.hypot(vx, vy), 28);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      prevPos.current = { x, y };

      for (let i = 0; i < TRAIL_LEN; i++) {
        const target = i === 0 ? base : trailPos.current[i - 1];
        const node = trailPos.current[i];
        const ease = 0.22 - i * 0.008;
        node.x += (target.x - node.x) * ease;
        node.y += (target.y - node.y) * ease;

        const el = trailRefs.current[i];
        if (el) {
          const stretch = 1 + speed * 0.05 * (1 - i / TRAIL_LEN);
          el.style.transform = `translate3d(${node.x}px, ${node.y}px, 0) rotate(${Number.isFinite(angle) ? angle : 0}deg) scale(${stretch}, ${1 / Math.sqrt(stretch)})`;
        }
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

  useEffect(() => {
    if (!motionOk) return;

    const onPointerUp = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;

      const id = ++burstId;
      const burst: Burst = {
        id,
        x: e.clientX,
        y: e.clientY,
        rot: -18 + Math.random() * 36,
        scale: 0.9 + Math.random() * 0.35,
      };

      setBursts((prev) => [...prev.slice(-8), burst]);
      window.setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 420);
    };

    window.addEventListener("pointerup", onPointerUp);
    return () => window.removeEventListener("pointerup", onPointerUp);
  }, [motionOk]);

  return (
    <>
      {enabled && (
        <>
          <div className="comic-cursor-trail" aria-hidden>
            {Array.from({ length: TRAIL_LEN }, (_, i) => (
              <span
                key={i}
                ref={(el) => {
                  trailRefs.current[i] = el;
                }}
                className={`comic-trail-flame comic-trail-flame--${i % 3}`}
                style={{
                  ["--trail-i" as string]: String(i),
                }}
              />
            ))}
          </div>
          <div
            ref={tipRef}
            className={`comic-cursor-dot ${hovering ? "is-hover" : ""}`}
            aria-hidden
          >
            <svg
              className="comic-cursor-pointer"
              viewBox="0 0 32 32"
              width="36"
              height="36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* fluffy triangle body */}
              <path
                d="M4 2.5 L4 29 L27.5 17 Z"
                fill="#facc15"
                stroke="#0c0c0d"
                strokeWidth="2.6"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* soft belly shade */}
              <path
                d="M8 14 L8 25.2 L19.5 18.5 Z"
                fill="#eab308"
                opacity="0.4"
              />
              {/* white reflection along left edge — half edge height, slight inset */}
              <rect
                x="6.4"
                y="7.2"
                width="3.2"
                height="13.25"
                rx="1.6"
                fill="#ffffff"
                opacity="0.95"
              />
            </svg>
          </div>
        </>
      )}

      <div className="comic-pow-layer" aria-hidden>
        {bursts.map((b) => (
          <span
            key={b.id}
            className="comic-pow"
            style={{
              left: b.x,
              top: b.y,
              ["--pow-rot" as string]: `${b.rot}deg`,
              ["--pow-scale" as string]: String(b.scale),
            }}
          >
            POW!
          </span>
        ))}
      </div>
    </>
  );
}
