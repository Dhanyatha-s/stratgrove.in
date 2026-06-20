"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const STRATA: Array<
  | { kind: "photo"; src: string; w: number; h: number; y: number }
  | { kind: "bar"; color: string; w: number; h: number; y: number }
> = [
  { kind: "photo", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=320&q=70&auto=format&fit=crop", w: 64, h: 220, y: 30 },
  { kind: "bar",   color: "var(--sg-violet)", w: 70, h: 240, y: 20 },
  { kind: "photo", src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=420&q=70&auto=format&fit=crop", w: 150, h: 230, y: 25 },
  { kind: "bar",   color: "var(--sg-green)",  w: 140, h: 280, y: 10 },
  { kind: "photo", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=520&q=70&auto=format&fit=crop", w: 170, h: 220, y: 30 },
  { kind: "photo", src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=320&q=70&auto=format&fit=crop", w: 110, h: 200, y: 40 },
  { kind: "bar",   color: "var(--sg-yellow)", w: 32, h: 160, y: 60 },
];

const QUARTERS = ["Q4'26", "Q3'26", "Q2'26", "Q1'26", "Q4'25", "Q3'25", "Q2'25"];

const GAP = 4;
const DESIGN_BED_W = STRATA.reduce((a, s) => a + s.w, 0) + GAP * (STRATA.length - 1);
const MOBILE_SIDE_PADDING = 20;
const MAX_SCALE = 1;
const MIN_SCALE = 0.34;
const MOBILE_VERTICAL_OFFSET = -40;

export function StrataHero() {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const recompute = () => {
      const available = el.clientWidth - MOBILE_SIDE_PADDING * 2;
      const raw = available / DESIGN_BED_W;
      setScale(Math.min(MAX_SCALE, Math.max(MIN_SCALE, raw)));
    };

    recompute();
    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const bedW = DESIGN_BED_W * scale;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ background: "var(--sg-white)" }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {QUARTERS.map((q, i) => {
          const y = 20 + i * 8.3;
          const tilt = (i % 2 === 0 ? 1 : -1) * 1;
          return (
            <g key={q}>
              <line
                x1="1"
                y1={y}
                x2="99"
                y2={y + tilt}
                stroke="oklch(0.14 0 0 / 0.35)"
                strokeWidth={isMobile ? "0.18" : "0.6"}
                vectorEffect="non-scaling-stroke"
                strokeDasharray="120"
                strokeDashoffset="120"
                style={{
                  animation: `sg-draw 1.4s ${0.2 + i * 0.08}s cubic-bezier(.2,.7,.2,1) forwards`,
                }}
              />
              <circle cx="1" cy={y} r="0.35" fill="var(--sg-black)" opacity="0" style={{ animation: `sg-fade 0.4s ${0.2 + i * 0.08}s forwards` }} />
              <circle cx="99" cy={y + tilt} r="0.35" fill="var(--sg-black)" opacity="0" style={{ animation: `sg-fade 0.4s ${0.9 + i * 0.08}s forwards` }} />
            </g>
          );
        })}
      </svg>

      <div
        className="pointer-events-none absolute right-6 top-0 hidden h-full flex-col justify-center gap-[34px] pr-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 md:flex"
        style={{ paddingTop: "120px", paddingBottom: "120px" }}
      >
        {QUARTERS.map((q, i) => (
          <span
            key={q}
            style={{
              opacity: 0,
              animation: `sg-fade 0.5s ${0.9 + i * 0.08}s forwards`,
            }}
          >
            {q}
          </span>
        ))}
      </div>

      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: bedW,
          height: STRATA.reduce((m, s) => Math.max(m, s.h), 0) * scale,
          transform: `translate(-50%, calc(-50% + ${(isMobile ? MOBILE_VERTICAL_OFFSET : 0) + scrollY * (isMobile ? 0.06 : 0.12)}px))`,
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 flex items-center"
          style={{
            gap: GAP,
            width: DESIGN_BED_W,
            transform: `translate(-50%, -50%) scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          {STRATA.map((s, i) => {
            const delay = 0.6 + i * 0.07;
            const common: React.CSSProperties = {
              width: s.w,
              height: s.h,
              flexShrink: 0,
              transform: `translateY(${s.y - 30}px)`,
              opacity: 0,
              animation: `sg-rise 1.1s ${delay}s cubic-bezier(.2,.7,.2,1) forwards, sg-breathe 6s ${1.6 + i * 0.1}s ease-in-out infinite`,
              willChange: "transform, opacity, clip-path",
              clipPath: "inset(50% 0 50% 0)",
            };
            if (s.kind === "bar") {
              return (
                <div
                  key={i}
                  style={{
                    ...common,
                    background: s.color,
                  }}
                />
              );
            }
            return (
              <div
                key={i}
                style={{
                  ...common,
                  backgroundImage: `url(${s.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(0.85) contrast(1.05)",
                }}
              />
            );
          })}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(var(--sg-black) 0.6px, transparent 0.6px), radial-gradient(var(--sg-black) 0.5px, transparent 0.5px)",
          backgroundSize: "5px 5px, 9px 9px",
          backgroundPosition: "0 0, 2px 3px",
          opacity: 0.18,
          animation: "sg-drift 22s linear infinite",
        }}
      />

      <div
        className="pointer-events-none absolute left-0 right-0 h-[2px] bg-[var(--sg-violet)]/70"
        style={{
          top: "42%",
          transform: "scaleX(0)",
          transformOrigin: "left center",
          animation: "sg-scan 2.4s 1.2s cubic-bezier(.2,.7,.2,1) forwards",
        }}
      />

      <div className="pointer-events-none absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
        [ lat 40.7128 · lon −74.0060 ] · field active
      </div>
    </div>
  );
}
