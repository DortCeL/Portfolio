import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ink sm:text-xl"
          style={{ fontWeight: 700 }}
        >
          {profile.firstName}
          <span className="text-water-deep">.</span>
          {profile.lastName}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70 transition hover:text-water-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-water-deep transition hover:text-ink"
        >
          Hello
        </a>
      </div>
    </header>
  );
}
