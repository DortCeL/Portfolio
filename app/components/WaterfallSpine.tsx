import { useEffect, useMemo, useState } from "react";

/** Fixed center waterfall that runs the full viewport height forever */
export function WaterfallSpine() {
  const sprays = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: 42 + Math.random() * 16,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 4,
        duration: 2.2 + Math.random() * 2.8,
        opacity: 0.25 + Math.random() * 0.55,
      })),
    [],
  );

  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-1/2 z-[5] w-[min(28vw,180px)] -translate-x-1/2 sm:w-[min(18vw,150px)]"
      aria-hidden
    >
      {/* Soft glow behind falls */}
      <div className="waterfall-mist absolute -inset-x-16 inset-y-0" />

      {/* Main water body */}
      <div className="waterfall-core absolute inset-x-[18%] inset-y-0 rounded-full" />

      {/* Flowing streaks */}
      <div className="waterfall-flow absolute inset-x-[18%] inset-y-0 rounded-full" />
      <div className="waterfall-flow-fast absolute inset-x-[28%] inset-y-0 rounded-full" />

      {/* Soft edges */}
      <div className="waterfall-edge-l absolute inset-y-0 left-[12%] w-[8%]" />
      <div className="waterfall-edge-r absolute inset-y-0 right-[12%] w-[8%]" />

      {/* Spray droplets */}
      {sprays.map((s) => (
        <span
          key={s.id}
          className="spray-dot absolute top-0 rounded-full bg-foam"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size * 1.6,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Base mist pool hint */}
      <div className="waterfall-pool absolute bottom-[-5vh] left-1/2 h-[18vh] w-[55vw] max-w-xl -translate-x-1/2" />
    </div>
  );
}

/** Extra spray canvas for denser mist near the falls */
export function MistCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[6]" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-foam/20 blur-xl"
          style={{
            left: `${46 + (i % 4) * 2}%`,
            top: `${10 + i * 7}%`,
            width: `${40 + (i % 3) * 30}px`,
            height: `${60 + (i % 4) * 40}px`,
            animation: `mist-pulse ${3 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
