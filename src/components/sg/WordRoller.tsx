"use client";

import { useEffect, useState } from "react";

export function WordRoller({
  words,
  className = "",
  hold = 1600,
  slide = 600,
}: {
  words: string[];
  className?: string;
  hold?: number;
  slide?: number;
  duration?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => setI((v) => v + 1), hold + slide);
    return () => clearInterval(id);
  }, [words.length, hold, slide]);

  const items = [...words, words[0]];
  const index = i % words.length;
  const isWrap = i > 0 && index === 0;

  return (
    <span
      className={`relative inline-flex h-[1.1em] overflow-hidden align-bottom ${className}`}
      aria-label={words.join(", ")}
    >
      <span
        className="flex flex-col will-change-transform"
        style={{
          transform: `translate3d(0, -${(isWrap ? words.length : index) * 100}%, 0)`,
          transition: isWrap
            ? "none"
            : `transform ${slide}ms cubic-bezier(.7,0,.2,1)`,
        }}
        onTransitionEnd={() => {
          if (isWrap) setI(0);
        }}
      >
        {items.map((w, k) => (
          <span key={k} className="block h-[1.1em] leading-[1.1] whitespace-nowrap">
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
