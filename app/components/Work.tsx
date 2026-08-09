import { useEffect, useRef } from "react";
import { Code2, ExternalLink, Lock } from "lucide-react";
import { projects, type Project } from "../data/portfolio";

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="halftone-panel relative flex min-h-[180px] items-center justify-center border-b-[3px] border-manga-black p-5 md:min-h-full md:border-r-[3px] md:border-b-0 md:min-h-[220px]"
      style={{ backgroundColor: project.panel }}
    >
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
    <article
      className={`project-card h-full overflow-hidden ${featured ? "" : ""}`}
    >
      <div className="grid h-full md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
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

function ProjectsRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    active: boolean;
    startX: number;
    scrollLeft: number;
    moved: boolean;
  } | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onPointerDown = (e: PointerEvent) => {
      if (window.matchMedia("(min-width: 768px)").matches) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      // Let real buttons/links work; still allow drag from card chrome
      const target = e.target as Element;
      if (target.closest("a, button")) return;

      drag.current = {
        active: true,
        startX: e.clientX,
        scrollLeft: rail.scrollLeft,
        moved: false,
      };
      rail.setPointerCapture(e.pointerId);
      rail.classList.add("is-dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      const d = drag.current;
      if (!d?.active) return;
      const dx = e.clientX - d.startX;
      if (Math.abs(dx) > 4) d.moved = true;
      rail.scrollLeft = d.scrollLeft - dx;
    };

    const endDrag = (e: PointerEvent) => {
      const d = drag.current;
      if (!d?.active) return;
      d.active = false;
      rail.classList.remove("is-dragging");
      try {
        rail.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    };

    // Block link clicks if the user was dragging
    const onClickCapture = (e: MouseEvent) => {
      if (drag.current?.moved) {
        e.preventDefault();
        e.stopPropagation();
        drag.current.moved = false;
      }
    };

    rail.addEventListener("pointerdown", onPointerDown);
    rail.addEventListener("pointermove", onPointerMove);
    rail.addEventListener("pointerup", endDrag);
    rail.addEventListener("pointercancel", endDrag);
    rail.addEventListener("click", onClickCapture, true);

    return () => {
      rail.removeEventListener("pointerdown", onPointerDown);
      rail.removeEventListener("pointermove", onPointerMove);
      rail.removeEventListener("pointerup", endDrag);
      rail.removeEventListener("pointercancel", endDrag);
      rail.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  // Desktop: vertical stack (no horizontal rail behavior needed in markup —
  // CSS switches layout). Mobile: side-by-side snap rail.
  return (
    <div className="mt-10">
      <p className="mb-3 font-mono text-[10px] font-bold tracking-wider text-manga-orange uppercase md:hidden">
        // Drag or swipe →
      </p>

      <div
        ref={railRef}
        className="projects-rail"
        data-lenis-prevent
        aria-label="Project carousel"
      >
        {projects.map((project, i) => (
          <div key={project.id} className="projects-rail-item">
            <ProjectCard project={project} featured={i === 0} />
          </div>
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
          Projects I have worked on
        </h2>
        <p className="section-label">// Some of the apps i have worked on</p>

        <ProjectsRail />
      </div>
    </section>
  );
}
