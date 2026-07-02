"use client";

import { useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useApp();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      alpha: number;
      dAlpha: number;
    }[] = [];
    let animationFrameId: number;
    let w = 0;
    let h = 0;

    const initStars = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;

      const numStars = Math.floor((w * h) / 4000); // Responsive star count
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.5,
          dx: (Math.random() - 0.5) * 0.15,
          dy: (Math.random() - 0.5) * 0.15,
          alpha: Math.random(),
          dAlpha: Math.random() * 0.02 - 0.01,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const isDark = theme === "dark";
      // Espace profond : ciel léger bleu pour clair, transparent pour sombre (géré par globals.css background)
      ctx.fillStyle = isDark ? "rgba(255, 255, 255, " : "rgba(14, 165, 233, ";

      stars.forEach((star) => {
        // Move
        star.x += star.dx;
        star.y += star.dy;
        // Twinkle
        star.alpha += star.dAlpha;

        if (star.x < 0) star.x = w;
        if (star.x > w) star.x = 0;
        if (star.y < 0) star.y = h;
        if (star.y > h) star.y = 0;

        if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.dAlpha = -star.dAlpha;
        } else if (star.alpha >= 1) {
          star.alpha = 1;
          star.dAlpha = -star.dAlpha;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(215, 237, 255, ${star.alpha})`
          : `rgba(14, 165, 233, ${star.alpha * 0.5})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    initStars();
    draw();

    const handleResize = () => {
      initStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] opacity-70 transition-opacity duration-1000"
    />
  );
}
