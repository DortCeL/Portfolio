import { projects, type Project } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`project-row group relative border-b border-line reveal ${visible ? "is-in" : ""}`}
      style={{ transitionDelay: `${Math.min(index * 0.04, 0.2)}s` }}
    >
      <div
        className="accent-bar absolute left-0 top-0 h-full w-[3px]"
        style={{ background: project.accent }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-10 sm:px-8 md:grid-cols-12 md:gap-8 md:py-14">
        <div className="flex items-start gap-4 md:col-span-3">
          <span className="font-mono text-xs text-mute">{project.id}</span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              {project.subtitle}
            </p>
            {project.status && (
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
                {project.status === "live"
                  ? "Shipped"
                  : project.status === "wip"
                    ? "In progress"
                    : "Private"}
              </p>
            )}
          </div>
        </div>

        <div className="md:col-span-5">
          <h3
            className="project-title font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-[2.75rem]"
            style={{ fontWeight: 750 }}
          >
            {project.title}
          </h3>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6 md:col-span-4 md:items-end md:text-right">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 md:justify-end">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-5 md:justify-end">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink link-underline"
              >
                Live ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink link-underline"
              >
                Code ↗
              </a>
            )}
            {!project.github && !project.live && (
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
                Coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="bg-paper pb-8 pt-20 sm:pt-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 reveal ${visible ? "is-in" : ""}`}
      >
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
              Selected work
            </p>
            <h2
              className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl"
              style={{ fontWeight: 750 }}
            >
              Things I&apos;ve built
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            From full-stack social apps to quiet utilities — each project taught
            me something I still use.
          </p>
        </div>
      </div>

      <div className="mt-2">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
