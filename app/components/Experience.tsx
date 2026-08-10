import { ExternalLink } from "lucide-react";
import { profile } from "../data/portfolio";

export function Experience() {
  const { education, leetcode, tenure } = profile;

  return (
    <section
      id="experience"
      className="halftone-bg relative w-full scroll-mt-24 overflow-hidden bg-manga-black px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative z-[2] mx-auto max-w-5xl">
        {/* <p className="section-label section-label-on-dark">// Experience</p> */}
        <h2 className="comic-title mt-4 text-4xl text-white sm:text-6xl">
          Track Record
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* University */}
          <div className="border-[3px] border-white bg-manga-charcoal p-6 shadow-[8px_8px_0_#e11d48] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="section-label section-label-on-dark">
                // University
              </p>
              <span className="border border-manga-green bg-manga-green/15 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-manga-green uppercase">
                {education.status}
              </span>
            </div>

            <p className="mt-4 font-mono text-[11px] font-bold tracking-widest text-manga-yellow uppercase">
              {education.schoolShort}
            </p>
            <h3 className="mt-1 text-xl font-black leading-snug tracking-tight text-white italic sm:text-2xl">
              {education.school}
            </h3>
            <p className="mt-2 font-mono text-xs text-white/55">
              {education.degree}
            </p>
            <p className="mt-1 font-mono text-[11px] text-white/40">
              {education.period}
            </p>

            <div className="mt-8 border-t-2 border-dashed border-white/20 pt-6">
              <p className="section-label section-label-on-dark">// CGPA</p>
              <div className="mt-2 flex items-end gap-3">
                <span className="text-6xl font-black leading-none text-manga-yellow italic sm:text-7xl">
                  {education.cgpa}
                </span>
                <span className="mb-2 font-mono text-sm font-bold text-white/40">
                  / 4.00
                </span>
              </div>
            </div>
          </div>

          {/* LeetCode */}
          <a
            href={leetcode.url}
            target="_blank"
            rel="noreferrer"
            className="group border-[3px] border-manga-yellow bg-manga-paper p-6 text-manga-black shadow-[8px_8px_0_#facc15] transition hover:-translate-y-0.5 sm:p-8"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="section-label">// LeetCode</p>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold tracking-wider text-manga-orange uppercase">
                DortCeL
                <ExternalLink
                  className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.5}
                />
              </span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-6xl font-black leading-none text-manga-black italic sm:text-7xl">
                {leetcode.solved}
              </span>
              <span className="mb-2 font-mono text-sm font-bold tracking-wide text-manga-black/50 uppercase">
                solved
              </span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t-2 border-manga-black/15 pt-6">
              <div className="border-2 border-manga-black bg-manga-green/15 px-2 py-3 text-center shadow-[3px_3px_0_#0c0c0d]">
                <p className="text-2xl font-black text-manga-green italic">
                  {leetcode.easy}
                </p>
                <p className="mt-1 font-mono text-[10px] font-bold tracking-wider uppercase">
                  Easy
                </p>
              </div>
              <div className="border-2 border-manga-black bg-manga-yellow/40 px-2 py-3 text-center shadow-[3px_3px_0_#0c0c0d]">
                <p className="text-2xl font-black text-manga-orange italic">
                  {leetcode.medium}
                </p>
                <p className="mt-1 font-mono text-[10px] font-bold tracking-wider uppercase">
                  Med
                </p>
              </div>
              <div className="border-2 border-manga-black bg-manga-red/15 px-2 py-3 text-center shadow-[3px_3px_0_#0c0c0d]">
                <p className="text-2xl font-black text-manga-red italic">
                  {leetcode.hard}
                </p>
                <p className="mt-1 font-mono text-[10px] font-bold tracking-wider uppercase">
                  Hard
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Tenure */}
        <p className="section-label section-label-on-dark mt-10 mb-2">
          // Experience
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {tenure.map((item, i) => {
            const accent =
              i === 0
                ? "shadow-[5px_5px_0_#e11d48]"
                : i === 1
                  ? "shadow-[5px_5px_0_#facc15]"
                  : "shadow-[5px_5px_0_#16a34a]";
            return (
              <div
                key={item.label}
                className={`border-[3px] border-white bg-manga-charcoal px-5 py-6 ${accent}`}
              >
                <p className="text-4xl font-black text-white italic sm:text-5xl">
                  {item.years}
                  <span className="ml-1 text-lg font-bold not-italic text-manga-yellow">
                    yrs
                  </span>
                </p>
                <p className="mt-2 font-mono text-[11px] font-bold tracking-wider text-white/55 uppercase">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
