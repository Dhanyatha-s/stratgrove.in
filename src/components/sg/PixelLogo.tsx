"use client";

/** Small decorative pixel-art logo mark for StratGrove (heart→arrow up shape). */
export function PixelLogo({ className = "" }: { className?: string }) {
  const grid = [
    "0001000",
    "0011100",
    "0111110",
    "1110111",
    "1100011",
    "0000000",
    "0011100",
  ];
  return (
    <div
      className={`grid grid-cols-7 gap-[2px] ${className}`}
      aria-hidden="true"
    >
      {grid.flatMap((row, y) =>
        row.split("").map((c, x) => (
          <span
            key={`${x}-${y}`}
            className="aspect-square w-[5px]"
            style={{ background: c === "1" ? "var(--sg-black)" : "transparent" }}
          />
        ))
      )}
    </div>
  );
}
