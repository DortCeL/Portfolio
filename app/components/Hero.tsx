import { useEffect, useState } from "react";
import { useScrollProgress } from "../hooks/useSmoothScroll";

const VERBS = ["Solves", "Builds", "Ships"] as const;
const VERB_MS = 2800;

function InteractiveLetters({ text }: { text: string }) {
  return (
    <span className="hero-letters" aria-label={text}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={`${text}-sp-${i}`} className="hero-space" aria-hidden>
            {"\u00A0"}
          </span>
        ) : (
          <span key={`${text}-${i}-${char}`} className="hero-letter" aria-hidden>
            {char}
          </span>
        ),
      )}
    </span>
  );
}

/**
 * Cloud banks piled at bottom-left & bottom-right,
 * taller toward the outer corners, lower in the center.
 */
function SideClouds() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[min(48vh,420px)] w-full"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 420"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="cloudBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fffcf7" />
            <stop offset="55%" stopColor="#f3eee6" />
            <stop offset="100%" stopColor="#e4ddd2" />
          </linearGradient>
          <linearGradient id="cloudBodySoft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#faf6f0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ddd5c8" stopOpacity="0.9" />
          </linearGradient>
          <filter id="cloudBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="#6b6358"
              floodOpacity="0.28"
            />
          </filter>
        </defs>

        {/* Ground fill so about bg connects */}
        <path
          fill="#f0ebe3"
          d="M0 420H1440V300
            C1320 250 1200 320 1100 280
            C900 220 800 340 720 300
            C640 260 560 340 440 290
            C280 220 160 300 0 270Z"
        />

        {/* LEFT bank — high toward top-left */}
        <g filter="url(#softShadow)">
          <ellipse cx="60" cy="210" rx="160" ry="130" fill="url(#cloudBodySoft)" />
          <ellipse cx="180" cy="160" rx="130" ry="120" fill="url(#cloudBody)" />
          <ellipse cx="100" cy="100" rx="95" ry="90" fill="url(#cloudBody)" />
          <ellipse cx="200" cy="70" rx="70" ry="65" fill="#fffcf7" />
          <ellipse cx="280" cy="200" rx="110" ry="95" fill="url(#cloudBody)" />
          <ellipse cx="320" cy="140" rx="75" ry="70" fill="url(#cloudBodySoft)" />
          <ellipse cx="160" cy="250" rx="140" ry="40" fill="#8a8174" opacity="0.22" filter="url(#cloudBlur)" />
          <ellipse cx="70" cy="280" rx="110" ry="35" fill="#8a8174" opacity="0.18" filter="url(#cloudBlur)" />
        </g>

        {/* RIGHT bank — high toward top-right */}
        <g filter="url(#softShadow)">
          <ellipse cx="1380" cy="210" rx="160" ry="130" fill="url(#cloudBodySoft)" />
          <ellipse cx="1260" cy="160" rx="130" ry="120" fill="url(#cloudBody)" />
          <ellipse cx="1340" cy="100" rx="95" ry="90" fill="url(#cloudBody)" />
          <ellipse cx="1240" cy="70" rx="70" ry="65" fill="#fffcf7" />
          <ellipse cx="1160" cy="200" rx="110" ry="95" fill="url(#cloudBody)" />
          <ellipse cx="1120" cy="140" rx="75" ry="70" fill="url(#cloudBodySoft)" />
          <ellipse cx="1280" cy="250" rx="140" ry="40" fill="#8a8174" opacity="0.22" filter="url(#cloudBlur)" />
          <ellipse cx="1370" cy="280" rx="110" ry="35" fill="#8a8174" opacity="0.18" filter="url(#cloudBlur)" />
        </g>

        {/* Low center wisps — keep middle open for text */}
        <ellipse cx="560" cy="340" rx="90" ry="38" fill="url(#cloudBodySoft)" opacity="0.7" />
        <ellipse cx="720" cy="355" rx="100" ry="32" fill="url(#cloudBody)" opacity="0.55" />
        <ellipse cx="880" cy="340" rx="90" ry="38" fill="url(#cloudBodySoft)" opacity="0.7" />
        <ellipse cx="720" cy="370" rx="160" ry="28" fill="#8a8174" opacity="0.12" filter="url(#cloudBlur)" />
      </svg>
    </div>
  );
}

export function Hero() {
  const [verbIndex, setVerbIndex] = useState(0);
  const [verbVisible, setVerbVisible] = useState(true);
  const scrollProgress = useScrollProgress(0.75);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVerbVisible(false);
      window.setTimeout(() => {
        setVerbIndex((i) => (i + 1) % VERBS.length);
        setVerbVisible(true);
      }, 320);
    }, VERB_MS);
    return () => window.clearInterval(id);
  }, []);

  const scale = 1 - scrollProgress * 0.45;
  const opacity = 1 - scrollProgress * 0.98;
  const y = scrollProgress * 140;

  return (
    <section
      id="hero"
      className="hero-section relative z-0 h-[100svh] overflow-hidden"
    >
      <img
        src="/sky.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="hero-sky-veil absolute inset-0" aria-hidden />

      <div
        className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-5 pb-[18vh] pt-28 text-center sm:px-8"
        style={{
          transform: `translate3d(0, ${y}px, 0) scale(${Math.max(scale, 0.4)})`,
          opacity: Math.max(opacity, 0),
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      >
        <p className="hero-greeting text-base font-medium text-white/90 sm:text-lg md:text-xl">
          Hello I&apos;m Ismail Hossain, A -
        </p>

        <h1 className="hero-display mt-3 font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:mt-4">
          <span className="block">
            <InteractiveLetters text="Developer who" />
          </span>
          <span
            className={`mt-1 block transition-opacity duration-300 ${
              verbVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <InteractiveLetters text={VERBS[verbIndex]} />
          </span>
        </h1>

        <span className="sr-only">
          Developer who Solves, Builds, and Ships
        </span>
      </div>

      <SideClouds />
    </section>
  );
}
