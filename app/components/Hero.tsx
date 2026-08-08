import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      className="grain relative min-h-[100svh] overflow-hidden"
      aria-label="Introduction"
    >
      {/* Full-bleed portrait plane */}
      <div className="absolute inset-0">
        <img
          src="/me.jpg"
          alt=""
          aria-hidden
          className="hero-photo absolute inset-0 h-full w-full object-cover object-[center_20%] scale-105"
          width={960}
          height={960}
          fetchPriority="high"
        />
        {/* Readable atmosphere — cool stone wash from left, keep face visible */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                105deg,
                rgba(238, 241, 244, 0.97) 0%,
                rgba(238, 241, 244, 0.92) 28%,
                rgba(232, 237, 242, 0.72) 48%,
                rgba(210, 218, 228, 0.35) 68%,
                rgba(180, 195, 210, 0.18) 100%
              ),
              linear-gradient(
                to top,
                rgba(221, 227, 234, 0.85) 0%,
                transparent 32%
              )
            `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 78% 42%, rgba(196,92,42,0.28), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16 lg:justify-center lg:pb-20">
        <div className="max-w-xl lg:max-w-2xl">
          <p
            className={`font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft/80 reveal ${ready ? "is-in" : ""}`}
          >
            {profile.role} · Final semester CSE
          </p>

          <h1
            className={`mt-5 font-display text-[clamp(3.6rem,12vw,8rem)] leading-[0.86] tracking-[-0.045em] text-ink reveal reveal-delay-1 ${ready ? "is-in" : ""}`}
            style={{ fontWeight: 800 }}
          >
            {profile.firstName}
            <br />
            <span className="text-copper">{profile.lastName}</span>
          </h1>

          <p
            className={`mt-7 max-w-md text-lg leading-relaxed text-ink-soft text-balance reveal reveal-delay-2 ${ready ? "is-in" : ""}`}
          >
            {profile.tagline}
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 reveal reveal-delay-3 ${ready ? "is-in" : ""}`}
          >
            <a
              href="#work"
              className="magnetic inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-fog transition-colors duration-300 hover:bg-copper"
            >
              View work
              <span aria-hidden>↓</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="magnetic inline-flex items-center gap-2 border border-ink/25 bg-paper/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink backdrop-blur-sm transition-colors duration-300 hover:border-copper hover:text-copper"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Accessible portrait description for SR */}
      <span className="sr-only">Portrait of Ismail AliF</span>
    </section>
  );
}
