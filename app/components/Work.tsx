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
      className={`halftone-panel relative flex min-h-[200px] items-stretch justify-center border-b-[3px] border-manga-black md:min-h-[260px] md:border-b-0 ${
        reverse ? "md:order-2 md:border-l-[3px]" : "md:border-r-[3px]"
      }`}
      style={{ backgroundColor: project.panel }}
    >
      {hasImages ? (
        <div className="relative flex w-full flex-col">
          <div
            className="project-carousel relative min-h-[200px] flex-1 overflow-hidden touch-pan-y md:min-h-[260px]"
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
  return (
    <article className="project-card h-full overflow-hidden">
      <div
        className={`grid h-full ${
          reverse
            ? "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
            : "md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        }`}
      >
        <ProjectVisual project={project} reverse={reverse} />

        <div
          className={`relative z-[2] flex flex-col p-5 sm:p-7 ${
            reverse ? "md:order-1" : ""
          }`}
        >
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
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectsCarousel() {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const go = (dir: -1 | 1) => {
    setActive((i) => (i + dir + total) % total);
  };

  return (
    <div className="mt-10">
      {/* Mobile: one-card carousel (no drag — keeps vertical scroll free) */}
      <div className="md:hidden">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] font-bold tracking-wider text-manga-orange uppercase">
            // Project {active + 1} / {total}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-9 w-9 items-center justify-center border-2 border-manga-black bg-white text-manga-black shadow-[3px_3px_0_#0c0c0d] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#0c0c0d]"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-9 w-9 items-center justify-center border-2 border-manga-black bg-white text-manga-black shadow-[3px_3px_0_#0c0c0d] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#0c0c0d]"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <ProjectCard project={projects[active]} />

        <div className="mt-4 flex items-center justify-center gap-2">
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
        <p className="mt-3 text-center font-mono text-[9px] font-bold tracking-wider text-manga-black/45 uppercase">
          ← use arrows to browse projects →
        </p>
      </div>

      {/* Desktop: alternating vertical stack */}
      <div className="hidden flex-col gap-10 md:flex">
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
