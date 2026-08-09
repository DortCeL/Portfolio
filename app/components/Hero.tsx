import { useEffect, useState } from "react";
import { profile, projects } from "../data/portfolio";

const shipped = projects.filter((p) => p.status === "live").length;

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="top" className="section-y relative pt-28 sm:pt-36">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className={`reveal ${ready ? "is-in" : ""}`}>
            <span className="glass-pill">
              <span className="status-dot" aria-hidden />
              Open to software engineering roles
            </span>
          </div>

          <h1
            className={`reveal mt-6 text-balance text-[clamp(2.25rem,6.2vw,4rem)] font-semibold leading-[1.04] tracking-[-0.02em] ${ready ? "is-in" : ""}`}
            style={{ color: "var(--color-1)", transitionDelay: "0.08s" }}
          >
            Hi, I&apos;m {profile.firstName}.
            <br />
            I build software <span className="text-accent">end to end</span>.
          </h1>

          <p
            className={`reveal mt-6 max-w-lg text-base leading-relaxed sm:text-lg ${ready ? "is-in" : ""}`}
            style={{ color: "var(--text-muted)", transitionDelay: "0.16s" }}
          >
            Final-semester Computer Science student in Dhaka. I&apos;ve shipped
            social apps, AI tools, business sites and automation across React,
            Laravel, Python and C++.
          </p>

          <div
            className={`reveal mt-9 flex flex-wrap items-center gap-3 ${ready ? "is-in" : ""}`}
            style={{ transitionDelay: "0.24s" }}
          >
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Contact me
            </a>
            <a href="#flagship" className="btn-ghost">
              See Gamebook
            </a>
          </div>

          <div
            className={`reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm ${ready ? "is-in" : ""}`}
            style={{ color: "var(--text-muted)", transitionDelay: "0.32s" }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:opacity-80"
              style={{ color: "inherit" }}
            >
              GitHub
            </a>
            <span
              className="hidden h-3 w-px sm:inline-block"
              style={{ background: "var(--glass-border)" }}
              aria-hidden
            />
            <span>{profile.location}</span>
          </div>
        </div>

        <div
          className={`reveal lg:col-span-5 ${ready ? "is-in" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="glass-strong rounded-3xl p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <img
                src="/me.jpg"
                alt={profile.name}
                className="h-20 w-20 rounded-2xl object-cover object-[center_15%] sm:h-24 sm:w-24"
                width={960}
                height={960}
                fetchPriority="high"
              />
              <div>
                <p
                  className="text-lg font-semibold tracking-tight"
                  style={{ color: "var(--color-1)" }}
                >
                  {profile.name}
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                  Final-year CSE student · Full-stack aspiring engineer
                </p>
              </div>
            </div>

            <div
              className="mt-6 grid grid-cols-3 gap-3 border-t pt-5"
              style={{ borderColor: "var(--glass-border)" }}
            >
              <Stat value={String(shipped)} label="Shipped" />
              <Stat value={profile.education.cgpa} label="CGPA" />
              <Stat value="AUST" label="University" />
            </div>

            <p className="mt-5 text-sm" style={{ color: "var(--text-muted)" }}>
              Currently building{" "}
              <span className="font-medium text-accent">Gamebook</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p
        className="text-xl font-semibold tracking-tight sm:text-2xl"
        style={{ color: "var(--color-1)" }}
      >
        {value}
      </p>
      <p className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>
        {label}
      </p>
    </div>
  );
}
