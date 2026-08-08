import { useEffect, useState } from "react";

/** Fixed multi-layer mountain silhouette that parallax-scrolls with the page */
export function MountainBackdrop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const far = scrollY * 0.12;
  const mid = scrollY * 0.25;
  const near = scrollY * 0.38;

  return (
    <div
      className="world-sky pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft sun glow behind peaks */}
      <div
        className="absolute left-1/2 top-[4%] h-[55vw] w-[55vw] -translate-x-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(255,252,235,0.85) 0%, rgba(168,208,212,0.25) 40%, transparent 68%)",
          transform: `translate(-50%, ${far * 0.25}px)`,
        }}
      />

      {/* Distant mega-range */}
      <svg
        className="mountain-far absolute -bottom-[5%] left-[-20%] h-[75vh] w-[140%] max-w-none opacity-50"
        style={{ transform: `translateY(${far}px)` }}
        viewBox="0 0 1440 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0 620V340L90 220L200 380L340 60L480 300L620 20L780 280L920 90L1080 320L1220 140L1360 360L1440 260V620H0Z"
          fill="#5a7a82"
        />
        <path
          d="M340 60L390 130L450 80L520 200L580 300L480 300L340 60Z"
          fill="rgba(244,255,252,0.45)"
        />
        <path
          d="M620 20L680 100L740 50L800 160L860 280L780 280L620 20Z"
          fill="rgba(244,255,252,0.55)"
        />
        <path
          d="M920 90L980 160L1040 110L1100 240L1080 320L920 90Z"
          fill="rgba(244,255,252,0.35)"
        />
      </svg>

      {/* Mid colossal range */}
      <svg
        className="absolute bottom-0 left-[-25%] h-[85vh] w-[150%] max-w-none opacity-75"
        style={{ transform: `translateY(${mid}px)` }}
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0 700V400L140 200L280 420L450 40L640 380L800 120L980 400L1140 180L1300 440L1440 280V700H0Z"
          fill="#2a4550"
        />
        <path
          d="M450 40L520 160L600 90L680 250L740 380L640 380L450 40Z"
          fill="rgba(216,236,232,0.28)"
        />
        <path
          d="M800 120L870 220L940 160L1000 300L1040 400L980 400L800 120Z"
          fill="rgba(216,236,232,0.22)"
        />
      </svg>

      {/* Near canyon walls — towering cliffs */}
      <svg
        className="absolute inset-y-0 left-0 h-full w-full"
        style={{ transform: `translateY(${near * 0.08}px)` }}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L0 900L560 900C510 760 485 620 460 470C420 280 380 140 300 0H0Z"
          fill="url(#cliffL)"
        />
        <path
          d="M260 0C345 130 385 270 420 460C445 600 470 740 520 900H450C410 740 385 600 360 460C325 270 285 130 210 0H260Z"
          fill="rgba(8,18,24,0.35)"
        />
        <path
          d="M1440 0V900H880C930 760 955 620 980 470C1020 280 1060 140 1140 0H1440Z"
          fill="url(#cliffR)"
        />
        <path
          d="M1180 0C1095 130 1055 270 1020 460C995 600 970 740 920 900H990C1030 740 1055 600 1080 460C1115 270 1155 130 1230 0H1180Z"
          fill="rgba(8,18,24,0.32)"
        />
        {/* Rocky ledge nubs */}
        <ellipse cx="380" cy="280" rx="70" ry="18" fill="#3a505a" opacity="0.7" />
        <ellipse cx="1060" cy="420" rx="80" ry="20" fill="#3a505a" opacity="0.65" />
        <ellipse cx="350" cy="560" rx="90" ry="22" fill="#334850" opacity="0.7" />
        <ellipse cx="1090" cy="680" rx="75" ry="18" fill="#334850" opacity="0.65" />
        <defs>
          <linearGradient id="cliffL" x1="0" y1="0" x2="520" y2="900">
            <stop stopColor="#4a6570" />
            <stop offset="0.35" stopColor="#2a4048" />
            <stop offset="1" stopColor="#0a151c" />
          </linearGradient>
          <linearGradient id="cliffR" x1="1440" y1="0" x2="920" y2="900">
            <stop stopColor="#4a6570" />
            <stop offset="0.35" stopColor="#2a4048" />
            <stop offset="1" stopColor="#0a151c" />
          </linearGradient>
        </defs>
      </svg>

      {/* Fog belts */}
      <div
        className="absolute inset-x-0 top-[28%] h-36 opacity-40"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(244,255,252,0.55), transparent)",
          transform: `translateY(${far * 0.4}px)`,
        }}
      />
      <div
        className="absolute inset-x-0 top-[52%] h-44 opacity-30"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(168,212,204,0.5), transparent)",
          transform: `translateY(${mid * 0.25}px)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[30%]"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(10,21,28,0.85))",
        }}
      />
    </div>
  );
}
