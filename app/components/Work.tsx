import { Code2, ExternalLink, Lock } from "lucide-react";
import { projects, type Project } from "../data/portfolio";

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="halftone-panel relative flex min-h-[220px] items-center justify-center border-b-[3px] border-manga-black p-6 md:min-h-full md:border-r-[3px] md:border-b-0"
      style={{ backgroundColor: project.panel }}
    >
      <div
        className="flex h-36 w-full max-w-[220px] flex-col items-center justify-center border-2 border-manga-black shadow-[4px_4px_0_#0c0c0d]"
        style={{ backgroundColor: project.accent }}
      >
        <span className="font-mono text-[10px] font-bold tracking-widest text-manga-black/70">
          FILE //{project.id}
        </span>
        <span className="mt-2 text-4xl font-black tracking-tighter text-manga-black italic">
          {project.title.slice(0, 2).toUpperCase()}
        </span>
        <span className="mt-3 border border-manga-black bg-white px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase">
          {project.status ?? "live"}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  const href = project.live ?? project.github;
  const locked = project.status === "private" || !href;

  return (
    <article className={`project-card overflow-hidden ${featured ? "" : ""}`}>
      <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <ProjectVisual project={project} />

        <div className="relative z-[2] flex flex-col p-5 sm:p-7">
          <p className="section-label">// {project.subtitle}</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-manga-black italic sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-manga-black/75 sm:text-[15px]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex gap-2">
            {locked ? (
              <span className="ink-btn pointer-events-none opacity-70">
                Coming Soon
                <Lock className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="ink-btn"
              >
                {project.live ? "View Live" : "View Repo"}
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            )}
            {project.github && project.live && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border-[2.5px] border-manga-black bg-manga-black px-3 text-white shadow-[3px_3px_0_#0c0c0d] transition hover:bg-manga-charcoal"
                aria-label={`${project.title} on GitHub`}
              >
                <Code2 className="h-4 w-4" strokeWidth={2} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section
      id="projects"
      className="graph-grid relative w-full scroll-mt-24 bg-manga-paper px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative z-[2] mx-auto max-w-5xl">
        <p className="section-label">// Projects i have worked on</p>

        <div className="mt-10 flex flex-col gap-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
