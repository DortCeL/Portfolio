import { projects } from "../data/portfolio";
import { profile } from "../data/portfolio";
import { Ledge, ProjectCard } from "./Ledge";
import { useReveal } from "../hooks/useReveal";

export function CascadeWork() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="relative z-10 space-y-28 py-10 sm:space-y-36 sm:py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-xl px-4 text-center reveal ${visible ? "is-in" : ""}`}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-foam/80">
          Along the cascade
        </p>
        <h2
          className="mt-3 font-display text-4xl tracking-tight text-foam sm:text-5xl"
          style={{ fontWeight: 750 }}
        >
          Projects planted on the ledges
        </h2>
      </div>

      {projects.map((p, i) => (
        <Ledge key={p.id} side={i % 2 === 0 ? "left" : "right"}>
          <ProjectCard
            id={p.id}
            title={p.title}
            subtitle={p.subtitle}
            description={p.description}
            stack={p.stack}
            github={p.github}
            live={p.live}
            status={p.status}
          />
        </Ledge>
      ))}
    </section>
  );
}

export function CascadeAbout() {
  return (
    <section id="about" className="relative z-10 py-20 sm:py-28">
      <Ledge side="left">
        <div className="ledge-card rounded-2xl p-7 sm:p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-water-deep">
            About · Education
          </p>
          <h2
            className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl"
            style={{ fontWeight: 750 }}
          >
            Final semester. Still climbing.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
            I&apos;m {profile.name} — CSE undergrad at{" "}
            {profile.education.school}. I build with React, Laravel, Python, and
            C++. From full-stack social apps to quiet automation tools, I like
            software that feels clear and useful.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">
            Based in Dhaka. Open to internships where I can learn fast and ship
            for real.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-water-deep/15 pt-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/45">
                Degree
              </p>
              <p className="mt-1 font-display text-lg text-ink" style={{ fontWeight: 650 }}>
                B.Sc. CSE
              </p>
              <p className="mt-1 text-xs text-ink/55">
                {profile.education.period}
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/45">
                CGPA
              </p>
              <p
                className="mt-1 font-display text-4xl text-water-deep"
                style={{ fontWeight: 750 }}
              >
                {profile.education.cgpa}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="rounded-md bg-moss/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-moss"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Ledge>
    </section>
  );
}

export function CascadePool() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-[70svh] flex-col items-center justify-end px-4 pb-16 pt-32"
    >
      {/* Pool surface */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden"
        aria-hidden
      >
        <div className="waterfall-pool absolute bottom-[20%] left-1/2 h-[40vw] w-[90vw] max-w-3xl -translate-x-1/2" />
        <div
          className="absolute inset-x-0 bottom-0 h-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(26,111,124,0.45) 40%, rgba(14,26,34,0.92) 100%)",
          }}
        />
        {/* Ripple rings */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute bottom-[28%] left-1/2 rounded-full border border-foam/25"
            style={{
              width: `${30 + i * 18}vw`,
              height: `${10 + i * 5}vw`,
              transform: "translateX(-50%)",
              animation: `pool-ripple ${3 + i}s ease-in-out ${i * 0.6}s infinite`,
            }}
          />
        ))}
      </div>

      <div
        ref={ref}
        className={`relative z-10 mb-8 w-full max-w-xl text-center reveal ${visible ? "is-in" : ""}`}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-spray">
          The pool below
        </p>
        <h2
          className="mt-4 font-display text-4xl tracking-tight text-foam sm:text-5xl"
          style={{ fontWeight: 750 }}
        >
          Dive in. Let&apos;s talk.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist/80">
          Internships, collaborations, or just a hello — the water ends here,
          but the conversation doesn&apos;t.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex rounded-xl bg-foam px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition hover:bg-water-bright"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-foam/30 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foam transition hover:border-foam hover:bg-foam/10"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <footer className="relative z-10 mt-auto w-full border-t border-foam/10 pt-6 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foam/40">
          © {new Date().getFullYear()} {profile.name} · Follow the waterfall
        </p>
      </footer>
    </section>
  );
}
