import { useState } from "react";
import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const marquee = [
    "Portfolio Complete",
    "Mission passed! RESPECT++",
    "Time to hire me :)",
  ];

  return (
    <footer
      id="contact"
      className="halftone-bg relative w-full overflow-hidden border-t-[3px] border-manga-black bg-manga-paper px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="relative z-[2] mx-auto flex w-full max-w-5xl flex-col gap-10">
        <Reveal variant="up">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-manga-black/50 uppercase">
                Ismail ALIF
              </p>
            </div>
            <div className="border-2 border-manga-black bg-manga-yellow px-3 py-1 font-mono text-black text-[10px] font-bold tracking-wider uppercase shadow-[3px_3px_0_#0c0c0d]">
              Signing off
            </div>
          </div>
        </Reveal>

        <Reveal variant="pop" delay={100}>
          <div className="text-center">
            <h2 className="comic-title text-4xl text-manga-black sm:text-6xl md:text-7xl">
              That&apos;s All Folks...
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm text-manga-black/70 sm:text-base">
              Interested in building software that ships? Let&apos;s talk.
            </p>

            <button
              type="button"
              onClick={copyEmail}
              className="hover-jitter mt-8 inline-flex items-center gap-3 border-[3px] border-manga-black bg-white px-5 py-3 font-mono text-black text-xs font-bold tracking-wider lowercase shadow-[6px_6px_0_#e11d48] transition hover:bg-manga-yellow"
            >
              {copied ? "Copied!" : profile.email}
            </button>
            <p className="mt-2 font-mono text-[10px] text-manga-black/40">
              // Click to copy & trigger comic energy
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {(
                [
                  {
                    label: "GitHub",
                    href: profile.github,
                    tone: "bg-manga-black text-white hover:bg-manga-charcoal",
                  },
                  {
                    label: "LinkedIn",
                    href: profile.linkedin,
                    tone: "bg-white text-manga-black hover:bg-manga-yellow",
                  },
                  {
                    label: "Facebook",
                    href: profile.facebook,
                    tone: "bg-white text-manga-black hover:bg-manga-yellow",
                  },
                  {
                    label: "YouTube",
                    href: profile.youtube,
                    tone: "bg-manga-red text-white hover:bg-manga-orange",
                  },
                ] as const
              ).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`border-2 border-manga-black px-4 py-2 text-[10px] font-black tracking-widest uppercase shadow-[4px_4px_0_#0c0c0d] transition ${link.tone}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-sm font-mono text-[10px] leading-relaxed tracking-wide text-manga-black/50">
              // YouTube warning: I also edit gaming montages. No, I will not
              apologize for the kills {":)"}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative z-[2] mt-10">
        <div className="marquee">
          <div className="marquee-track">
            {[...marquee, ...marquee, ...marquee, ...marquee].map((t, i) => (
              <span key={`${t}-${i}`}>
                {t} <span aria-hidden>//</span>
              </span>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center font-mono text-[10px] tracking-wider text-manga-black/70 uppercase">
          © {new Date().getFullYear()} Ismail ALIF. Built with passion AND ❤️
        </p>
      </div>
    </footer>
  );
}
