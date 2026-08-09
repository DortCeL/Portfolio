import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "../data/portfolio";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stacks", label: "Stacks" },
] as const;

function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (!(el instanceof HTMLElement)) return;

  const lenis = (
    window as Window & { __lenis?: { scrollTo: (t: HTMLElement, o?: object) => void } }
  ).__lenis;

  if (lenis) {
    lenis.scrollTo(el, { offset: -24 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    scrollToHash(href);
  };

  return (
    <>
      {/* ── Desktop: location (hidden on mobile — menu owns the left) ── */}
      <div className="fixed top-6 left-6 z-50 hidden items-center gap-1.5 md:flex">
        <MapPin
          className="h-3.5 w-3.5 shrink-0 text-[var(--chrome-fg)] opacity-80"
          strokeWidth={2}
          aria-hidden
        />
        <span className="text-xs font-medium tracking-wide text-[var(--chrome-fg)] opacity-80">
          {profile.location}
        </span>
      </div>

      {/* ── Desktop: theme (hidden on mobile — sits with mail on the right) ── */}
      <button
        type="button"
        onClick={toggleTheme}
        className="chrome-icon-btn fixed top-5 right-6 z-50 hidden md:flex"
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" strokeWidth={2} />
        ) : (
          <Moon className="h-4 w-4" strokeWidth={2} />
        )}
      </button>

      {/* ── Mobile chrome ── */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-start justify-between p-4 md:hidden">
        <div className="relative">
          <button
            type="button"
            className="chrome-icon-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={2} />
            )}
          </button>

          {menuOpen && (
            <div className="mobile-menu absolute top-[calc(100%+10px)] left-0 min-w-[10.5rem] overflow-hidden rounded-2xl">
              <ul className="relative z-[1] flex flex-col p-1.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <button
                      type="button"
                      className="w-full rounded-xl px-3.5 py-2.5 text-left text-sm font-medium text-[var(--chip-fg)] transition hover:bg-white/15"
                      onClick={() => go(l.href)}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="chrome-icon-btn"
            aria-label="Work with me — email"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="chrome-icon-btn"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Backdrop when mobile menu open */}
      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/25 md:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Desktop cotton-candy pill (md+) ── */}
      <header className="pointer-events-none fixed inset-x-0 top-5 z-50 hidden justify-center px-3 md:flex">
        <nav
          className={`cotton-nav pointer-events-auto flex items-center rounded-full ${
            scrolled ? "cotton-nav--compact" : "cotton-nav--expanded"
          }`}
          aria-label="Primary"
        >
          {/* Avatar — always visible */}
          <a
            href="#top"
            className="relative z-[1] shrink-0 overflow-hidden rounded-full ring-2 ring-white/70 transition hover:ring-white"
            aria-label="Home"
            onClick={(e) => {
              e.preventDefault();
              const lenis = (
                window as Window & {
                  __lenis?: { scrollTo: (n: number) => void };
                }
              ).__lenis;
              if (lenis) lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/me.jpg"
              alt=""
              className="h-9 w-9 object-cover object-[center_15%]"
              width={72}
              height={72}
            />
          </a>

          {/* Expanded: links + CTA */}
          <div
            className={`nav-expand relative z-[1] flex items-center ${
              scrolled ? "nav-expand--hidden" : "nav-expand--shown"
            }`}
          >
            <ul className="flex items-center gap-5 lg:gap-7">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="nav-chip"
                    onClick={(e) => {
                      e.preventDefault();
                      go(l.href);
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${profile.email}`}
              className="work-cta shrink-0"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden />
              Work with me
            </a>
          </div>

          {/* Compact (scrolled): available + pulse */}
          <div
            className={`nav-compact relative z-[1] flex items-center gap-4 ${
              scrolled ? "nav-compact--shown" : "nav-compact--hidden"
            }`}
          >
            <span className="text-[15px] font-medium tracking-tight text-[var(--chip-fg)]">
              Available for work
            </span>
            <span className="status-pulse" aria-hidden />
          </div>
        </nav>
      </header>
    </>
  );
}
