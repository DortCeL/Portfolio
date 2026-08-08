import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Side = "left" | "right";

export function Ledge({
  side,
  children,
  className = "",
}: {
  side: Side;
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.12 });
  const revealClass = side === "left" ? "reveal-left" : "reveal-right";

  return (
    <div
      ref={ref}
      className={`relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 px-4 sm:px-6 lg:grid-cols-2 lg:gap-0 ${className}`}
    >
      {side === "left" ? (
        <>
          <div
            className={`relative ${revealClass} ${visible ? "is-in" : ""} lg:pr-16 xl:pr-24`}
          >
            <RockShelf />
            {children}
          </div>
          <div className="hidden lg:block" />
        </>
      ) : (
        <>
          <div className="hidden lg:block" />
          <div
            className={`relative ${revealClass} ${visible ? "is-in" : ""} lg:pl-16 xl:pl-24`}
          >
            <RockShelf flip />
            {children}
          </div>
        </>
      )}
    </div>
  );
}

function RockShelf({ flip }: { flip?: boolean }) {
  return (
    <div
      className={`ledge-rock pointer-events-none absolute -bottom-3 h-5 w-[92%] rounded-[40%] ${
        flip ? "right-0 left-auto" : "left-0"
      }`}
      aria-hidden
      style={{
        clipPath: flip
          ? "polygon(8% 0, 100% 20%, 96% 100%, 0% 80%)"
          : "polygon(0 20%, 92% 0, 100% 80%, 4% 100%)",
      }}
    />
  );
}

export function ProjectCard({
  id,
  title,
  subtitle,
  description,
  stack,
  github,
  live,
  status,
}: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  status?: string;
}) {
  return (
    <article className="ledge-card relative overflow-hidden rounded-2xl p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-water-deep">
          {id} · {subtitle}
        </span>
        {status && (
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-moss">
            {status === "live"
              ? "Shipped"
              : status === "wip"
                ? "In progress"
                : "Private"}
          </span>
        )}
      </div>

      <h3
        className="mt-3 font-display text-2xl tracking-tight text-ink sm:text-3xl"
        style={{ fontWeight: 700 }}
      >
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink/75">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.map((t) => (
          <li
            key={t}
            className="rounded-md bg-water-deep/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-water-deep"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-4">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-water-deep underline decoration-water/40 underline-offset-4 transition hover:text-ink hover:decoration-ink"
          >
            Live ↗
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70 underline decoration-ink/20 underline-offset-4 transition hover:text-ink"
          >
            Code ↗
          </a>
        )}
        {!live && !github && (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
            Coming soon
          </span>
        )}
      </div>

      {/* Tiny water highlight on card */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(126,224,234,0.55), transparent 70%)",
        }}
        aria-hidden
      />
    </article>
  );
}
