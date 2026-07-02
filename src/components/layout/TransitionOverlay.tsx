"use client";

import { useRef, useImperativeHandle, forwardRef, useEffect } from "react";

export interface TransitionOverlayRef {
  trigger: (dir: 1 | -1) => void;
}

const DURATION = 680;

function runAnimation(
  canvas: HTMLCanvasElement,
  dir: 1 | -1,
  onDone: () => void,
) {
  const ctx = canvas.getContext("2d")!;
  const W = canvas.width;
  const H = canvas.height;
  const R = Math.max(W, H) * 0.75;
  const cx = W * 0.5;
  const start = performance.now();

  function frame(now: number) {
    const t = Math.min((now - start) / DURATION, 1);
    ctx.clearRect(0, 0, W, H);

    // Enveloppe d'opacité : cloche sinusoïdale — pic à t=0.5, zéro aux extrémités
    const envelope = Math.sin(t * Math.PI);

    const cy =
      dir === 1
        ? -R * 0.4 + t * (H + R * 0.8)
        : H + R * 0.4 - t * (H + R * 0.8);

    // Orbe principale (cœur violet, halo cyan)
    const g1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    g1.addColorStop(0, `rgba(168,85,247,${envelope * 0.16})`);
    g1.addColorStop(0.35, `rgba(139,92,246,${envelope * 0.1})`);
    g1.addColorStop(0.65, `rgba(34,211,238,${envelope * 0.05})`);
    g1.addColorStop(1, `rgba(0,0,0,0)`);
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, W, H);

    // Orbe secondaire décalée (effet de profondeur)
    const cx2 = W * 0.55;
    const cy2 = cy - H * 0.12 * dir;
    const R2 = R * 0.55;
    const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, R2);
    g2.addColorStop(0, `rgba(34,211,238,${envelope * 0.08})`);
    g2.addColorStop(0.5, `rgba(168,85,247,${envelope * 0.04})`);
    g2.addColorStop(1, `rgba(0,0,0,0)`);
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, W, H);

    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, W, H);
      onDone();
    }
  }

  requestAnimationFrame(frame);
}

export const TransitionOverlay = forwardRef<TransitionOverlayRef>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const active = useRef(false);

  useImperativeHandle(ref, () => ({
    trigger(dir: 1 | -1) {
      if (active.current) return;
      active.current = true;
      const c = canvasRef.current;
      if (!c) {
        active.current = false;
        return;
      }
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      runAnimation(c, dir, () => {
        active.current = false;
      });
    },
  }));

  useEffect(() => {
    const c = canvasRef.current!;
    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
});

TransitionOverlay.displayName = "TransitionOverlay";
