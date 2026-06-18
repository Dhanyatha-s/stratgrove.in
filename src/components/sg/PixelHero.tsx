"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas-based pixel field that ripples away from the cursor.
 * Each cell is a "pixel" that displaces based on mouse proximity.
 */
export function PixelHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const CELL = 16;
    const mouse = { x: -9999, y: -9999, active: false };
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let t = 0;

    const palette = ["#0a0a0a", "#22c55e", "#facc15", "#8b5cf6"];

    function resize() {
      if (!canvas || !wrap || !ctx) return;
      const { width, height } = wrap.getBoundingClientRect();
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;
      ctx.clearRect(0, 0, w, h);
      t += 0.012;

      const R = 140;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cx = x * CELL + CELL / 2;
          const cy = y * CELL + CELL / 2;
          const dx = cx - mouse.x;
          const dy = cy - mouse.y;
          const d = Math.hypot(dx, dy);
          const noise =
            Math.sin((x + t * 8) * 0.35) * Math.cos((y - t * 6) * 0.35);

          let intensity = 0;
          if (mouse.active && d < R) {
            intensity = 1 - d / R;
          }

          const seed = (x * 928371 + y * 12345) % 100;
          const baseShow = seed < 6;

          if (intensity > 0.02 || baseShow) {
            const size = CELL - 2 - intensity * 2;
            let color = "#0a0a0a";
            if (intensity > 0.6) color = palette[3];
            else if (intensity > 0.35) color = palette[1];
            else if (intensity > 0.15) color = palette[2];
            else if (baseShow) color = "#0a0a0a";

            const push = intensity * 14;
            const ang = Math.atan2(dy, dx);
            const ox = mouse.active ? Math.cos(ang) * push : 0;
            const oy = mouse.active ? Math.sin(ang) * push : 0;

            ctx.fillStyle = color;
            ctx.globalAlpha = baseShow ? 0.85 : 0.35 + intensity * 0.65;
            ctx.fillRect(cx - size / 2 + ox, cy - size / 2 + oy, size, size);

            if (intensity > 0.5 && noise > 0.2) {
              ctx.fillStyle = palette[2];
              ctx.globalAlpha = intensity;
              ctx.fillRect(cx - 2 + ox * 1.6, cy - 2 + oy * 1.6, 4, 4);
            }
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    function onMove(e: PointerEvent) {
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 cursor-crosshair"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
