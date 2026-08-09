import { profile } from "../data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="halftone-bg relative w-full scroll-mt-24 overflow-hidden border-b-[3px] border-manga-black bg-manga-paper px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative z-[2] mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="relative mx-auto w-full max-w-xs lg:mx-0">
          <p className="section-label mb-4">// This is me </p>

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
            // A bit about me
          </p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-manga-black/80 sm:text-lg">
            <p>
              Hey, I'm Ismail Hossain. Call me AliF. I live in Mirpur, Dhaka.
            </p>
            <p>
              I genuinely just like building things. Doesn't really matter what-
              a script, a small app, whatever. Lately i've been working on my
              thesis: stance detection on Bangla social media text using
              transformer models. Basically trying to get a model to understand
              what people actually mean when they're going back and forth in the
              comments. But I'm also working on a few side projects that are
              fun.
            </p>
            <p>
              I'm still early in this journey and learning fast, and I'm
              currently looking for internships or a junior software engineer
              role : somewhere I can keep building and actually grow.
            </p>

            <p>Fluent in English and Bangla, and I can speak Hindi too.</p>
          </div>

          <div className="mt-10">
            <p className="section-label">// Working with me</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-3">
              {profile.traits.map((trait, i) => {
                const shadow =
                  i === 1
                    ? "shadow-[4px_4px_0_#e11d48]"
                    : i === 2
                      ? "shadow-[4px_4px_0_#16a34a]"
                      : "shadow-[4px_4px_0_#0c0c0d]";
                return (
                  <li
                    key={trait.label}
                    className={`border-2 border-manga-black bg-white p-4 ${shadow}`}
                  >
                    <p className="font-mono text-[11px] font-black tracking-wide text-manga-black uppercase">
                      {trait.label}
                    </p>
                    <p className="mt-2 font-mono text-[10px] leading-relaxed tracking-wide text-manga-black/60">
                      {trait.note}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
