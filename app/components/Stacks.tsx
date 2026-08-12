import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Stacks() {
  return (
    <section
      id="stacks"
      className="graph-grid relative w-full scroll-mt-24 bg-manga-paper-dark px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="relative z-[2] mx-auto max-w-5xl">
        <Reveal variant="up">
          <p className="section-label">// My Loadout (Stacks)</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-manga-black italic sm:text-4xl">
            What I Build With
          </h2>
        </Reveal>

        <ul className="mt-8 flex flex-wrap gap-3">
          {profile.skills.map((skill, i) => (
            <Reveal
              key={skill}
              as="li"
              variant="pop"
              delay={Math.min(i * 45, 400)}
            >
              <span
                className="inline-block border-2 border-manga-black bg-white px-3 py-2 text-xs font-black tracking-wide text-manga-black uppercase shadow-[3px_3px_0_#0c0c0d] transition hover:-translate-y-0.5 hover:bg-manga-yellow"
                style={{
                  transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                }}
              >
                {skill}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
