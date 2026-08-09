import { profile } from "../data/portfolio";

const milestones = [
  {
    n: "01",
    title: "Shipped real products",
    text: "Gamebook, What If?, ATH Printing — apps and sites people can open and use, not just demos in a repo.",
  },
  {
    n: "02",
    title: "Full-stack range",
    text: "React + TypeScript on the front, Laravel / Node / Prisma on the back, plus Python automation when it fits.",
  },
  {
    n: "03",
    title: "Learning in public",
    text: "BFS visualizer, DriveBackup, Unity adventure — projects that teach systems by building them.",
  },
  {
    n: "04",
    title: "Ready for the next mission",
    text: "Final-semester CSE student hunting internships and junior roles where I can ship, learn fast, and finish hard problems.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="halftone-bg relative min-h-screen w-full scroll-mt-24 overflow-hidden bg-manga-black px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative z-[2] mx-auto max-w-5xl">
        <p className="section-label section-label-on-dark">// Experience</p>

        <h2 className="comic-title mt-6 text-4xl text-white sm:text-6xl">
          Active Mission
        </h2>
        <p className="mt-3 max-w-lg font-mono text-xs font-bold tracking-wider text-manga-yellow uppercase sm:text-sm">
          A single hero-arc. High-density build logistics.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-[3px] border-white bg-manga-charcoal p-6 shadow-[8px_8px_0_#e11d48] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[10px] font-bold tracking-widest text-manga-yellow">
                FILE ID: CSE-{profile.education.cgpa.replace(".", "")}
              </p>
              <span className="border border-manga-green bg-manga-green/20 px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-manga-green uppercase">
                ● Live Status
              </span>
            </div>

            <p className="section-label section-label-on-dark mt-6">
              // Target Base
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-white italic sm:text-3xl">
              {profile.education.school}
            </h3>
            <p className="mt-1 text-sm text-white/60">
              {profile.education.degree}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
              <div>
                <p className="section-label section-label-on-dark">
                  // Deployment
                </p>
                <p className="mt-1 text-sm font-black tracking-wide text-white uppercase">
                  {profile.education.status}
                </p>
                <p className="mt-1 font-mono text-[11px] text-white/50">
                  {profile.education.period}
                </p>
              </div>
              <div>
                <p className="section-label section-label-on-dark">// CGPA</p>
                <p className="mt-1 text-4xl font-black text-manga-yellow italic">
                  {profile.education.cgpa}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/75">
              Building end-to-end software across social apps, AI experiments,
              family-business sites, and systems tools — while finishing a
              Computer Science degree in Dhaka.
            </p>

            <p className="mt-4 inline-block border border-manga-red bg-manga-red/20 px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-manga-red uppercase">
              Classified // Open to roles
            </p>
          </div>

          <div className="border-[3px] border-manga-yellow bg-manga-paper p-6 text-manga-black shadow-[8px_8px_0_#facc15] sm:p-7">
            <p className="section-label">// Verified Achievements</p>
            <ul className="mt-5 space-y-5">
              {milestones.map((m) => (
                <li key={m.n} className="flex gap-3">
                  <span className="shrink-0 font-mono text-sm font-bold text-manga-red">
                    {m.n}
                  </span>
                  <div>
                    <p className="text-sm font-black tracking-tight uppercase">
                      {m.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-manga-black/70">
                      {m.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
