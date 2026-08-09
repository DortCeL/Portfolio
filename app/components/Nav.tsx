import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  { href: "#welcome", label: "Welcome", section: "welcome" },
  { href: "#projects", label: "Projects", section: "projects" },
  { href: "#experience", label: "Experience", section: "experience" },
  { href: "#about", label: "About", section: "about" },
] as const;

function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (!(el instanceof HTMLElement)) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const [active, setActive] = useState("welcome");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["welcome", "projects", "experience", "about", "stacks"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.id;
        if (!top) return;
        if (top === "stacks" || top === "contact") setActive("about");
        else setActive(top);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    scrollToHash(href);
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between p-4 md:hidden">
        <button
          type="button"
          className="border-2 border-white bg-manga-charcoal px-3 py-2 text-[10px] font-black tracking-widest text-white shadow-[4px_4px_0_#000]"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        <a
          href={`mailto:${profile.email}`}
          className="border border-white bg-manga-red px-3 py-2 text-[10px] font-black tracking-widest text-white shadow-[4px_4px_0_#000]"
        >
          CONTACT ME
        </a>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-manga-black/90 p-6 pt-20 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  type="button"
                  className="w-full border-2 border-white bg-manga-charcoal px-4 py-3 text-left text-xs font-black tracking-widest text-white"
                  onClick={() => go(l.href)}
                >
                  {l.label.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav
        className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 md:flex"
        aria-label="Primary"
      >
        <div className="nav-manga flex items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-manga-link hover-jitter"
              data-active={active === l.section}
              onClick={(e) => {
                e.preventDefault();
                go(l.href);
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="nav-manga-cta hover-jitter"
          >
            CONTACT ME
          </a>
        </div>
      </nav>
    </>
  );
}
