import { profile } from "../data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="about-section relative z-10 -mt-16 scroll-mt-24 bg-[#f0ebe3] sm:-mt-20"
    >
      <div className="relative px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-sm font-medium tracking-wide text-black/45">
            About me
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            A bit about me.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-black sm:text-lg">
            <p>
              I&apos;m Ismail Hossain — final-semester CSE student at{" "}
              {profile.education.school}. I got into code because I kept wanting
              tools that didn&apos;t exist yet, so I started building them.
            </p>
            <p>
              From full-stack social apps like Gamebook to privacy-first
              automation and family-business sites, I like shipping things people
              can actually open and use.
            </p>
            <p>
              Based in {profile.location}. Open to internships and junior roles
              where I can learn fast, ask good questions, and finish what I
              start.
            </p>
          </div>

          <dl className="mt-12 grid w-full max-w-md grid-cols-2 gap-8 border-t border-black/10 pt-10 text-center">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-black/40">
                Education
              </dt>
              <dd className="mt-2 text-sm font-semibold text-black sm:text-base">
                B.Sc. CSE
              </dd>
              <dd className="mt-1 text-xs text-black/50">
                {profile.education.period}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-black/40">
                CGPA
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-black">
                {profile.education.cgpa}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
