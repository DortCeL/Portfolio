import { profile } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="grain relative overflow-hidden border-t border-line"
      style={{
        background: `
          radial-gradient(ellipse 70% 80% at 20% 50%, rgba(196,92,42,0.14), transparent 55%),
          radial-gradient(ellipse 50% 60% at 90% 80%, rgba(154,175,196,0.3), transparent 50%),
          linear-gradient(180deg, #eef1f4, #e4e9ef)
        `,
      }}
    >
      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 reveal ${visible ? "is-in" : ""}`}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
          Contact
        </p>
        <h2
          className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-ink"
          style={{ fontWeight: 800 }}
        >
          Let&apos;s build something worth opening twice.
        </h2>
        <p className="mt-6 max-w-md text-lg text-ink-soft">
          Open to internships, collaborations, and interesting problems.
          Prefer email — I actually reply.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="magnetic inline-flex items-center gap-3 bg-ink px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-fog transition-colors hover:bg-copper"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic inline-flex items-center border border-ink/25 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-copper hover:text-copper"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-fog">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-lg" style={{ fontWeight: 650 }}>
          {profile.name}
          <span className="text-copper">.</span>
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-fog/50">
          © {new Date().getFullYear()} · Crafted with intention
        </p>
      </div>
    </footer>
  );
}
