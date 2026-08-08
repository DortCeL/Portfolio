import { profile } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-line bg-fog"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(196,92,42,0.22), transparent 68%)",
        }}
        aria-hidden
      />

      <div
        ref={ref}
        className={`relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16 reveal ${visible ? "is-in" : ""}`}
      >
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
            About
          </p>
          <h2
            className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl"
            style={{ fontWeight: 750 }}
          >
            Engineer in the making — curious, hands-on, finishing strong.
          </h2>
        </div>

        <div className="space-y-8 lg:col-span-7">
          <p className="text-lg leading-relaxed text-ink-soft text-balance">
            I&apos;m {profile.name}, a final-semester CSE undergrad who likes
            turning ideas into working software. I&apos;ve shipped full-stack
            apps with React and Laravel, automation with Python, systems thinking
            with C++, and the occasional game in Unity.
          </p>
          <p className="text-lg leading-relaxed text-ink-soft text-balance">
            I care about clarity — clean interfaces, honest architecture, and
            tools people actually want to use. Based in Dhaka, I&apos;m looking
            for an internship where I can learn fast and contribute for real.
          </p>

          <dl className="grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                Education
              </dt>
              <dd className="mt-2 text-ink">
                <p className="font-display text-xl" style={{ fontWeight: 650 }}>
                  {profile.education.degree}
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  {profile.education.school}
                </p>
                <p className="mt-1 font-mono text-[11px] text-mute">
                  {profile.education.period} · {profile.education.status}
                </p>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                CGPA
              </dt>
              <dd className="mt-2">
                <p
                  className="font-display text-5xl tracking-tight text-copper"
                  style={{ fontWeight: 750 }}
                >
                  {profile.education.cgpa}
                </p>
                <p className="mt-2 text-sm text-ink-soft">
                  out of 4.00 · Open to internships
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
