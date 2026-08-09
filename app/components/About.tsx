import { profile } from "../data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="halftone-bg relative w-full scroll-mt-24 overflow-hidden border-b-[3px] border-manga-black bg-manga-paper px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative z-[2] mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="relative mx-auto w-full max-w-xs lg:mx-0">
          <p className="section-label mb-4">// Section 04: The Origin Story</p>

          <div className="relative">
            <span className="absolute -top-3 left-3 z-10 border border-manga-black bg-manga-green px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-white uppercase">
              # ISMAIL
            </span>

            <div className="polaroid rotate-[-2deg]">
              <div className="aspect-[4/5] overflow-hidden border-2 border-manga-black bg-manga-charcoal">
                <img
                  src="/me.jpg"
                  alt={profile.fullName}
                  className="h-full w-full object-cover object-[center_18%]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback instanceof HTMLElement)
                      fallback.hidden = false;
                  }}
                />
                <div
                  hidden
                  className="flex h-full w-full flex-col items-center justify-center bg-manga-yellow p-4 text-center"
                >
                  <span className="text-5xl font-black italic text-manga-black">
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                  </span>
                  <span className="mt-2 font-mono text-[10px] font-bold tracking-wider uppercase">
                    Photo pending
                  </span>
                </div>
              </div>
            </div>

            <span className="absolute -right-2 top-1/3 rotate-6 border-2 border-manga-black text-black bg-white px-2 py-1 font-mono text-[10px] font-bold shadow-[3px_3px_0_#e11d48]">
              ALIF ⚡
            </span>
          </div>
        </div>

        <div>
          <h2 className="comic-title text-4xl text-manga-black sm:text-6xl">
            Origin Story
          </h2>
          <p className="mt-3 font-mono text-xs font-bold tracking-wider text-manga-orange uppercase">
            // Build Metrics // Computer Science Brutalism
          </p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-manga-black/80 sm:text-lg">
            <p>
              I&apos;m {profile.fullName} — final-semester CSE student at{" "}
              {profile.education.school}. I got into code because I kept wanting
              tools that didn&apos;t exist yet, so I started building them.
            </p>
            <p>
              From full-stack social apps like Gamebook to privacy-first
              automation and family-business sites, I like shipping things
              people can actually open and use.
            </p>
            <p>
              Based in {profile.location}. Open to internships and junior roles
              where I can learn fast, ask good questions, and finish what I
              start. GGs!
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-2 border-manga-black bg-white p-4 shadow-[4px_4px_0_#0c0c0d]">
              <p className="section-label">// Skillsets</p>
              <p className="mt-3 font-mono text-[11px] leading-relaxed font-bold tracking-wide text-manga-black uppercase">
                Full Stack / React / TypeScript / Laravel / Node / Postgres /
                Product Thinking
              </p>
            </div>
            <div className="border-2 border-manga-black bg-white p-4 shadow-[4px_4px_0_#e11d48]">
              <p className="section-label">// Tools</p>
              <p className="mt-3 font-mono text-[11px] leading-relaxed font-bold tracking-wide text-manga-black uppercase">
                {profile.tools.join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
