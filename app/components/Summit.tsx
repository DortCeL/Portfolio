import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

/** Summit — top of the mountain before you descend the falls */
export function Summit() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-24 pt-28"
    >
      {/* Peak plateaus */}
      <div
        className={`reveal relative mx-auto flex w-full max-w-5xl flex-col items-center text-center ${ready ? "is-in" : ""}`}
      >
        {/* Frost plate so type stays crisp over mist & falls */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[min(100%,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-80"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(244,255,252,0.72) 0%, rgba(216,236,232,0.35) 45%, transparent 72%)",
          }}
          aria-hidden
        />

        <div className="relative">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/70">
          {profile.role}
        </p>

        <h1
          className="mt-4 font-display text-[clamp(3.2rem,12vw,7.5rem)] leading-[0.9] tracking-[-0.04em] text-ink drop-shadow-[0_4px_24px_rgba(244,255,252,0.45)]"
          style={{ fontWeight: 800 }}
        >
          {profile.firstName}{" "}
          <span className="text-water-deep">{profile.lastName}</span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/80 text-balance sm:text-lg">
          {profile.tagline}
        </p>

        {/* Portrait on the summit rock */}
        <div
          className={`reveal relative mt-10 ${ready ? "is-in" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="portrait-frame relative mx-auto h-44 w-44 overflow-hidden rounded-[40%_40%_36%_36%] sm:h-56 sm:w-56">
            <img
              src="/me.jpg"
              alt="Ismail AliF"
              className="h-full w-full object-cover object-[center_15%]"
              width={960}
              height={960}
              fetchPriority="high"
            />
          </div>
          <div
            className="ledge-rock mx-auto -mt-2 h-6 w-52 rounded-[50%] sm:w-64"
            aria-hidden
          />
        </div>

        <div
          className={`reveal mt-10 flex flex-wrap items-center justify-center gap-4 ${ready ? "is-in" : ""}`}
          style={{ transitionDelay: "0.35s" }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foam transition hover:bg-water-deep"
          >
            Descend the falls
            <span aria-hidden>↓</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-xl border border-ink/25 bg-foam/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink backdrop-blur-sm transition hover:border-water-deep hover:text-water-deep"
          >
            Contact
          </a>
        </div>

        <p
          className={`reveal mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50 ${ready ? "is-in" : ""}`}
          style={{ transitionDelay: "0.5s" }}
        >
          Scroll to follow the water
        </p>
        </div>
      </div>

      {/* Summit waterfall source — splash at top */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 h-24 w-40 -translate-x-1/2"
        aria-hidden
      >
        <div className="waterfall-mist absolute inset-0" />
        <div className="waterfall-pool absolute inset-x-0 bottom-0 h-16" />
      </div>
    </section>
  );
}
