import { useEffect, useId, useRef, useState, type FormEvent } from "react";
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

type SendState = "idle" | "sending" | "sent" | "error";

function HelloPopover({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SendState>("idle");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onPointer = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Node)) return;
      if (panelRef.current?.contains(t)) return;
      if (t instanceof Element && t.closest("[data-hello-trigger]")) return;
      onClose();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setErrorText("");
    }
  }, [open]);

  if (!open) return null;

  const send = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setErrorText("Email and message both required.");
      return;
    }

    setStatus("sending");
    setErrorText("");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: trimmedEmail,
            message: trimmedMessage,
            _subject: `Portfolio hello from ${trimmedEmail}`,
            _template: "table",
          }),
        },
      );

      if (!res.ok) throw new Error("Send failed");
      setStatus("sent");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorText("Could not send. Try again in a sec.");
    }
  };

  return (
    <div
      ref={panelRef}
      className="hello-popover"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="hello-popover-bang" aria-hidden>
        HELLO!
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <p id={titleId} className="font-mono text-[10px] font-bold tracking-widest text-manga-orange uppercase">
            // Drop me a line
          </p>
          <p className="mt-1 text-sm font-black tracking-tight text-manga-black italic">
            No Outlook. Just type.
          </p>
        </div>
        <button
          type="button"
          className="border-2 border-manga-black bg-white px-2 py-1 font-mono text-[10px] font-black uppercase shadow-[2px_2px_0_#0c0c0d]"
          onClick={onClose}
          aria-label="Close"
        >
          X
        </button>
      </div>

      {status === "sent" ? (
        <div className="mt-4 border-2 border-manga-black bg-manga-yellow p-4 text-center shadow-[4px_4px_0_#0c0c0d]">
          <p className="text-lg font-black italic text-manga-black">Message sent!</p>
          <p className="mt-1 font-mono text-[10px] font-bold tracking-wider text-manga-black/60 uppercase">
            I&apos;ll get back to you soon
          </p>
          <button
            type="button"
            className="mt-3 border-2 border-manga-black bg-manga-black px-3 py-1.5 font-mono text-[10px] font-black tracking-wider text-white uppercase"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      ) : (
        <form className="mt-4 space-y-3" onSubmit={send}>
          <label className="block">
            <span className="font-mono text-[10px] font-bold tracking-wider text-manga-black/55 uppercase">
              Your email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="hello-input mt-1"
              autoComplete="email"
            />
          </label>

          <label className="block">
            <span className="font-mono text-[10px] font-bold tracking-wider text-manga-black/55 uppercase">
              Message
            </span>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hey Ismail, about that internship..."
              rows={4}
              className="hello-input mt-1 resize-none"
            />
          </label>

          {status === "error" && (
            <p className="border-2 border-manga-red bg-manga-red/10 px-2 py-1.5 font-mono text-[10px] font-bold text-manga-red">
              {errorText}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="hello-send"
          >
            {status === "sending" ? "Sending..." : "Send message →"}
          </button>
        </form>
      )}
    </div>
  );
}

export function Nav() {
  const [active, setActive] = useState("welcome");
  const [menuOpen, setMenuOpen] = useState(false);
  const [helloOpen, setHelloOpen] = useState(false);

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
          SAY HELLO
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
        <div className="relative">
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
            <button
              type="button"
              data-hello-trigger
              className="nav-manga-cta hover-jitter"
              aria-expanded={helloOpen}
              aria-haspopup="dialog"
              onClick={() => setHelloOpen((o) => !o)}
            >
              SAY HELLO
            </button>
          </div>

          <HelloPopover open={helloOpen} onClose={() => setHelloOpen(false)} />
        </div>
      </nav>
    </>
  );
}
