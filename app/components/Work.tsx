import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Lock,
} from "lucide-react";
import { projects, type Project } from "../data/portfolio";

function ProjectVisual({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const images = project.images ?? [];
  const hasImages = images.length > 0;
  const multi = images.length > 1;
  const [index, setIndex] = useState(0);
  const swipe = useRef<{ x: number; y: number } | null>(null);

  const go = (dir: -1 | 1) => {
    if (!multi) return;
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div
      className={`halftone-panel relative flex min-h-[200px] items-stretch justify-center border-b-[3px] border-manga-black md:h-full md:min-h-0 md:border-b-0 ${
        reverse ? "md:order-2 md:border-l-[3px]" : "md:border-r-[3px]"
      }`}
      style={{ backgroundColor: project.panel }}
    >
      {hasImages ? (
        <div className="relative flex w-full flex-col">
          <div
            className="project-carousel relative min-h-[200px] flex-1 overflow-hidden touch-pan-y md:min-h-0 md:h-full"
            onPointerDown={(e) => {
              if (!multi) return;
              swipe.current = { x: e.clientX, y: e.clientY };
            }}
            onPointerUp={(e) => {
              if (!multi || !swipe.current) return;
              const dx = e.clientX - swipe.current.x;
              const dy = e.clientY - swipe.current.y;
              swipe.current = null;
              if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
              go(dx < 0 ? 1 : -1);
            }}
            onPointerCancel={() => {
              swipe.current = null;
            }}
          >
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            ))}

            {multi && (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-14 bg-gradient-to-r from-black/55 to-transparent"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-14 bg-gradient-to-l from-black/55 to-transparent"
                />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="absolute top-1/2 left-2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-manga-black bg-white text-manga-black shadow-[3px_3px_0_#0c0c0d] transition hover:bg-manga-yellow"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="absolute top-1/2 right-2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-manga-black bg-white text-manga-black shadow-[3px_3px_0_#0c0c0d] transition hover:bg-manga-yellow"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                </button>

                <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-between gap-2 border-t-2 border-manga-black bg-manga-black/80 px-3 py-1.5">
                  <p className="font-mono text-[9px] font-bold tracking-wider text-manga-yellow uppercase">
                    ← swipe / tap arrows →
                  </p>
                  <p className="font-mono text-[9px] font-bold tracking-wider text-white uppercase">
                    {index + 1} / {images.length}
                  </p>
                </div>
              </>
            )}

            <span className="absolute top-2 left-2 z-[2] border-2 border-manga-black bg-white px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase shadow-[2px_2px_0_#0c0c0d]">
              {project.status ?? "live"}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center p-5">
          <div
            className="flex h-28 w-full max-w-[180px] flex-col items-center justify-center border-2 border-manga-black shadow-[4px_4px_0_#0c0c0d] md:h-36 md:max-w-[220px]"
            style={{ backgroundColor: project.accent }}
          >
            <span className="font-mono text-[10px] font-bold tracking-widest text-manga-black/70">
              FILE //{project.id}
            </span>
            <span className="mt-2 text-3xl font-black tracking-tighter text-manga-black italic md:text-4xl">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
            <span className="mt-3 border border-manga-black bg-white px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase">
              {project.status ?? "live"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const locked = project.status === "private";
  const hasLive = Boolean(project.live);
  const hasRepo = Boolean(project.github);

  if (locked || (!hasLive && !hasRepo)) {
    return (
      <span className="ink-btn pointer-events-none opacity-70">
        Coming Soon
        <Lock className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  }

  // Both: big Live + small Repo
  if (hasLive && hasRepo) {
    return (
      <>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="ink-btn"
        >
          View Live
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center border-[2.5px] border-manga-black bg-manga-black px-3 text-white shadow-[3px_3px_0_#0c0c0d] transition hover:bg-manga-charcoal"
          aria-label={`${project.title} on GitHub`}
        >
          <Code2 className="h-4 w-4" strokeWidth={2} />
        </a>
      </>
    );
  }

  // Live only
  if (hasLive) {
    return (
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="ink-btn"
      >
        View Live
        <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.5} />
      </a>
    );
  }

  // Repo only
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="ink-btn"
    >
      View Repo
      <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.5} />
    </a>
  );
}

function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`project-card group/card ${expanded ? "is-expanded" : ""}`}
    >
      <div
        className={`project-card-grid ${
          reverse ? "project-card-grid--reverse" : ""
        }`}
      >
        <ProjectVisual project={project} reverse={reverse} />

        <div
          className={`project-card-body ${reverse ? "md:order-1" : ""}`}
        >
          {/* Collapsed: big title / subtitle / tags */}
          <div className="project-card-summary">
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-lede">{project.subtitle}</p>
            <div className="project-card-tags mt-6 flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-chip tag-chip--lg">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6">
              <p className="project-hover-hint hidden font-mono text-[10px] font-bold tracking-widest text-manga-orange uppercase md:block">
                <span className="project-hover-hint-chip project-hover-hint--fine">
                  ↗ Hover for details
                </span>
              </p>
              <button
                type="button"
                className="project-details-toggle md:hidden"
                onClick={() => setExpanded(true)}
              >
                Show details
              </button>
            </div>
          </div>

          {/* Expanded: full details, overlaid so size stays fixed */}
          <div className="project-card-full">
            <div className="mb-2 flex items-start justify-between gap-2 md:mb-0">
              <p className="section-label shrink-0">// {project.subtitle}</p>
              <button
                type="button"
                className="project-details-toggle project-details-toggle--hide md:hidden"
                onClick={() => setExpanded(false)}
              >
                Hide details
              </button>
            </div>
            <h3 className="mt-1 shrink-0 text-2xl font-black tracking-tight text-manga-black italic sm:text-3xl md:mt-2">
              {project.title}
            </h3>
            <p className="project-card-desc mt-3 flex-1 text-sm leading-relaxed text-manga-black/75 sm:text-[15px]">
              {project.description}
            </p>
            <div className="mt-4 flex shrink-0 flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-card-actions mt-5 flex shrink-0 gap-2">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectsCarousel() {
  const [active, setActive] = useState(0);
  const total = projects.length;
  const swipe = useRef<{ x: number; y: number } | null>(null);

  const go = (dir: -1 | 1) => {
    setActive((i) => (i + dir + total) % total);
  };

  return (
    <div className="mt-10">
      {/* Mobile: full-width card carousel */}
      <div className="md:hidden">
        <p className="mb-4 text-center font-mono text-sm font-black tracking-widest text-manga-black uppercase">
          <span className="border-2 border-manga-black bg-manga-yellow px-3 py-1.5 shadow-[3px_3px_0_#0c0c0d]">
            // Project {active + 1} / {total}
          </span>
        </p>

        <div
          className="project-card-swipe"
          onPointerDown={(e) => {
            const t = e.target as Element;
            if (t.closest("a, button, .project-carousel")) return;
            swipe.current = { x: e.clientX, y: e.clientY };
          }}
          onPointerUp={(e) => {
            if (!swipe.current) return;
            const dx = e.clientX - swipe.current.x;
            const dy = e.clientY - swipe.current.y;
            swipe.current = null;
            if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
            go(dx < 0 ? 1 : -1);
          }}
          onPointerCancel={() => {
            swipe.current = null;
          }}
        >
          <ProjectCard project={projects[active]} />
        </div>

        <div className="project-swipe-hint mt-5">
          <button
            type="button"
            onClick={() => go(-1)}
            className="project-swipe-hint-side"
            aria-label="Previous project"
          >
            ◀
          </button>

          <div className="flex items-center justify-center gap-2 px-2">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to ${p.title}`}
                aria-current={i === active}
                className={`h-2.5 border-2 border-manga-black transition ${
                  i === active
                    ? "w-6 bg-manga-yellow shadow-[2px_2px_0_#0c0c0d]"
                    : "w-2.5 bg-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            className="project-swipe-hint-side"
            aria-label="Next project"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Desktop: alternating vertical stack */}
      <div className="projects-stack hidden flex-col gap-10 md:flex">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section
      id="projects"
      className="graph-grid relative w-full scroll-mt-24 bg-manga-paper px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative z-[2] mx-auto max-w-5xl">
        <h2 className="comic-title text-4xl text-manga-black sm:text-6xl">
          Projects
        </h2>
        <p className="section-label">// Some of the apps i have worked on</p>

        <ProjectsCarousel />
      </div>
    </section>
  );
}
