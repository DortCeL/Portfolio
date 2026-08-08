import { profile } from "../data/portfolio";

export function SkillsMarquee() {
  const items = [...profile.skills, ...profile.skills];

  return (
    <section
      className="relative overflow-hidden border-y border-line bg-fog py-5"
      aria-label="Skills"
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-10 font-display text-2xl tracking-tight text-ink/80 sm:text-3xl"
            style={{ fontWeight: 700 }}
          >
            {skill}
            <span
              className="inline-block h-1.5 w-1.5 rotate-45 bg-copper"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </section>
  );
}
