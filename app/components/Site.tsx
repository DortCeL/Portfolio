import { profile, projects } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

const flagship = projects[0];
const rest = projects.slice(1);

const stackGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C#", "PHP"],
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Laravel", "Express", "Prisma"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Other",
    items: ["Unity", "Google Drive API", "Gemini AI"],
  },
];

export function Flagship() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="flagship" className="section-y relative">
      <div ref={ref} className={`container-x reveal ${visible ? "is-in" : ""}`}>
        <p className="text-sm font-medium text-accent">Flagship</p>
        <h2
          className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{ color: "var(--color-1)" }}
        >
          {flagship.title}.
        </h2>
        <p
          className="mt-3 max-w-2xl text-base sm:text-lg"
          style={{ color: "var(--text-muted)" }}
        >
          {flagship.description}
        </p>

        <div className="glass-strong mt-10 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                MERN · Solo
              </p>
              <h3
                className="mt-2 text-2xl font-semibold sm:text-3xl"
                style={{ color: "var(--color-1)" }}
              >
                {flagship.subtitle}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {flagship.live && (
                <a
                  href={flagship.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary h-10 px-5 text-xs"
                >
                  Live demo
                </a>
              )}
              {flagship.github && (
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost h-10 px-5 text-xs"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          <ul
            className="mt-8 space-y-3 text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            <li>
              Posts, comments, replies, friend management and real-time chat —
              the core social loop, working end to end.
            </li>
            <li>
              JWT auth and a MongoDB-backed API so profiles, friendships and
              conversations stay consistent.
            </li>
            <li>
              Next: screenshots, reviews and clip sharing for a fuller
              gamer-first experience.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {flagship.stack.map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-xs font-medium text-accent"
                style={{ background: "var(--soft-fill)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="section-y relative">
      <div className="container-x">
        <div ref={ref} className={`reveal ${visible ? "is-in" : ""}`}>
          <p className="text-sm font-medium text-accent">Work</p>
          <h2
            className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-1)" }}
          >
            The rest of what I&apos;ve shipped.
          </h2>
          <p className="mt-3 max-w-xl text-base" style={{ color: "var(--text-muted)" }}>
            Every card links to a real GitHub repo or live build when one
            exists.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {rest.map((p, i) => (
            <WorkCard key={p.id} project={p} delay={Math.min(i * 0.04, 0.2)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  project,
  delay,
}: {
  project: (typeof projects)[number];
  delay: number;
}) {
  const { ref, visible } = useReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`glass card-hover rounded-3xl p-6 reveal ${visible ? "is-in" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-between gap-3">
        <p
          className="text-xs font-medium uppercase tracking-wider"
          style={{ color: "var(--text-muted)" }}
        >
          {project.subtitle}
        </p>
        <span className="text-xs font-medium text-accent">
          {project.status === "live"
            ? "Shipped"
            : project.status === "wip"
              ? "In progress"
              : "Private"}
        </span>
      </div>
      <h3
        className="mt-3 text-xl font-semibold tracking-tight"
        style={{ color: "var(--color-1)" }}
      >
        {project.title}
      </h3>
      <p
        className="mt-3 text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full px-2.5 py-1 text-[11px] font-medium"
            style={{
              background: "var(--soft-fill)",
              color: "var(--text-muted)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-4 text-sm font-medium">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition hover:underline"
          >
            Live ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
          >
            Code ↗
          </a>
        )}
        {!project.live && !project.github && (
          <span style={{ color: "var(--text-muted)" }}>Coming soon</span>
        )}
      </div>
    </article>
  );
}

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-y relative">
      <div ref={ref} className={`container-x reveal ${visible ? "is-in" : ""}`}>
        <p className="text-sm font-medium text-accent">About</p>
        <h2
          className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{ color: "var(--color-1)" }}
        >
          A bit about me.
        </h2>

        <div className="glass-strong mt-10 grid gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-12">
          <div
            className="space-y-5 text-base leading-relaxed sm:text-lg lg:col-span-7"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              I&apos;m in my final semester of Computer Science at{" "}
              {profile.education.school}. I got into code because I kept wanting
              tools that didn&apos;t exist yet — so I started building them.
            </p>
            <p>
              Gamebook is a clear example: a MERN social app for gamers with
              posts, friends and chat. ATH Printing put my father&apos;s
              business on the web. DriveBackup keeps backups private on your own
              Drive. I like finishing things people can actually open.
            </p>
            <p>
              Right now I&apos;m looking for an internship or junior role. I
              won&apos;t pretend I know everything — I pick things up fast, ask
              good questions, and finish what I start.
            </p>
          </div>

          <div className="lg:col-span-5">
            <p
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Education · {profile.education.period}
            </p>
            <p
              className="mt-2 text-lg font-semibold"
              style={{ color: "var(--color-1)" }}
            >
              {profile.education.school}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
              {profile.education.degree}
            </p>
            <p className="mt-4 text-3xl font-semibold text-accent">
              {profile.education.cgpa}
              <span
                className="ml-2 text-sm font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                CGPA · {profile.education.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="stack" className="section-y relative">
      <div className="container-x">
        <div ref={ref} className={`reveal ${visible ? "is-in" : ""}`}>
          <p className="text-sm font-medium text-accent">Stack</p>
          <h2
            className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-1)" }}
          >
            What I work with.
          </h2>
          <p
            className="mt-3 max-w-xl text-base"
            style={{ color: "var(--text-muted)" }}
          >
            Stronger in some of these than others. The ones I don&apos;t know
            yet, I&apos;m happy to learn.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g) => (
            <div key={g.title} className="glass rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3
                  className="font-semibold"
                  style={{ color: "var(--color-1)" }}
                >
                  {g.title}
                </h3>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  {g.items.length}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full px-3 py-1 text-sm"
                    style={{
                      background: "var(--soft-fill)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-y relative pb-28">
      <div ref={ref} className={`container-x reveal ${visible ? "is-in" : ""}`}>
        <div className="glass-strong rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-medium text-accent">Available now</p>
          <h2
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-1)" }}
          >
            Got a role that fits? Reach out.
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-base sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            I&apos;m looking for an internship or junior software role. Email is
            best — I reply fast.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>

        <p
          className="mt-10 text-center text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  );
}
