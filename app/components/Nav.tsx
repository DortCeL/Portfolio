import { profile } from "../data/portfolio";

const links = [
  { href: "#flagship", label: "Gamebook" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3">
      <nav className="glass-nav relative flex h-14 w-full max-w-3xl items-center justify-between gap-2 rounded-full px-2 sm:px-3">
        <a
          href="#top"
          className="ml-2 flex shrink-0 cursor-pointer items-baseline gap-1.5 text-sm font-semibold tracking-tight"
          style={{ color: "var(--color-1)" }}
        >
          <span>{profile.firstName}</span>
          <span className="font-normal" style={{ color: "var(--text-muted)" }}>
            {profile.lastName}
          </span>
        </a>

        <ul className="hidden items-center sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${profile.email}`} className="btn-ghost h-9 px-4 text-xs">
          Contact
        </a>
      </nav>
    </header>
  );
}
