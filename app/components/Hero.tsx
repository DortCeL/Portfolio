import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { profile, stickers as stickerData } from "../data/portfolio";

type StickerState = {
  id: string;
  label: string;
  emoji: string;
  rot: number;
  x: number;
  y: number;
  color: string;
};

function DraggableStickers() {
  const [items, setItems] = useState<StickerState[]>(() =>
    stickerData.map((s) => ({ ...s })),
  );
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const dragRef = useRef<{
    id: string;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const onPointerDown = (e: ReactPointerEvent, id: string) => {
    const item = items.find((s) => s.id === id);
    if (!item || !areaRef.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDraggingId(id);
    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      origX: item.x,
      origY: item.y,
    };
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const drag = dragRef.current;
    const area = areaRef.current;
    if (!drag || !area) return;
    const rect = area.getBoundingClientRect();
    const dx = ((e.clientX - drag.startX) / rect.width) * 100;
    const dy = ((e.clientY - drag.startY) / rect.height) * 100;
    setItems((prev) =>
      prev.map((s) =>
        s.id === drag.id
          ? {
              ...s,
              x: Math.min(88, Math.max(2, drag.origX + dx)),
              y: Math.min(85, Math.max(2, drag.origY + dy)),
            }
          : s,
      ),
    );
  };

  const onPointerUp = () => {
    dragRef.current = null;
    setDraggingId(null);
  };

  return (
    <div
      ref={areaRef}
      className="pointer-events-none absolute inset-0 z-20 hidden md:block"
      aria-hidden
    >
      <p className="pointer-events-none absolute top-24 left-6 font-mono text-[10px] font-bold tracking-wider text-manga-orange">
        // DRAG AND DROP STICKERS
      </p>
      {items.map((s, i) => (
        <button
          key={s.id}
          type="button"
          className={`sticker pointer-events-auto absolute ${
            draggingId === s.id ? "is-dragging" : ""
          }`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            ["--rot" as string]: `${s.rot}deg`,
            ["--float-delay" as string]: `${i * 0.35}s`,
            ["--float-dur" as string]: `${3.8 + (i % 3) * 0.55}s`,
          }}
          onPointerDown={(e) => onPointerDown(e, s.id)}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <span className="sticker-float" style={{ background: s.color }}>
            <span aria-hidden>{s.emoji}</span>
            {s.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="welcome"
      className="halftone-bg relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-manga-black px-4 py-28"
    >
      <div className="text-black">
        <DraggableStickers />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="max-w-md font-mono text-[11px] font-bold tracking-[0.18em] text-manga-orange uppercase sm:text-xs">
          {profile.tagline}
        </p>

        <h1 className="mt-8 text-[clamp(2.8rem,12vw,7.5rem)] leading-[0.9] font-black tracking-[-0.01em] text-white italic">
          <span className="relative inline-block">
            <span
              className="absolute inset-0 translate-x-[5px] translate-y-[5px] text-manga-red select-none"
              aria-hidden
            >
              {/* THIS IS THE SHADOW */}
              HEY, I&apos;M{" "}
              <span className="text-gray-600">
                {profile.firstName.toUpperCase()}
              </span>
            </span>
            <span className="relative">
              {/* THIS IS THE ACTUAL TEXT */}
              HEY, I&apos;M{" "}
              <span className="text-manga-red">
                {profile.firstName.toUpperCase()}
              </span>
            </span>
          </span>
        </h1>

        <div className="mt-6 border-2 border-white bg-manga-yellow px-4 py-2 shadow-[5px_5px_0_#e11d48]">
          <p className="text-xs font-black tracking-[0.2em] text-manga-black uppercase sm:text-sm">
            {profile.role}
          </p>
        </div>

        <p className="mt-8 font-mono text-[12px] tracking-wider text-white/50 uppercase">
          // Based in {profile.location}
          <span className="text-manga-yellow"> · Open to internships</span>
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
        <p className="font-mono text-[10px] font-bold tracking-wider text-manga-orange">
          // SCROLL DOWN
        </p>
        <span className="mt-1 block text-manga-orange" aria-hidden>
          ↓
        </span>
      </div>
    </section>
  );
}
