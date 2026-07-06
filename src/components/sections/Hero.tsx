"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import Image from "next/image";

// ── Arrière-plan constellation de particules ──────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    globalThis.addEventListener("resize", resize);
    globalThis.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Helper to bypass strict static analysis (sonar) for pseudorandomness
    const secureRandom = () => {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      return array[0] / (0xffffffff + 1);
    };

    const N = 140;
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    const pts: P[] = Array.from({ length: N }, () => ({
      x: secureRandom() * canvas.width,
      y: secureRandom() * canvas.height,
      vx: (secureRandom() - 0.5) * 0.32,
      vy: (secureRandom() - 0.5) * 0.32,
      r: secureRandom() * 1.6 + 0.5,
    }));

    const LINK = 155;
    const MGLOW = 140;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const alpha = (1 - d / LINK) * 0.32;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
            ctx.lineWidth = (1 - d / LINK) * 1.1;
            ctx.stroke();
          }
        }

        const mdx = pts[i].x - mouse.x;
        const mdy = pts[i].y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MGLOW) {
          const alpha = (1 - md / MGLOW) * 0.65;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
          ctx.lineWidth = (1 - md / MGLOW) * 1.6;
          ctx.stroke();
        }
      }

      // Points colorés violet → cyan selon position X
      for (const p of pts) {
        const norm = p.x / canvas.width;
        const r = Math.round(139 + (34 - 139) * norm);
        const g = Math.round(92 + (211 - 92) * norm);
        const b = Math.round(246 + (238 - 246) * norm);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
        ctx.fill();
      }

      // Orbes lumineux diffus
      const orbs = [
        {
          x: canvas.width * 0.15,
          y: canvas.height * 0.35,
          col: "139,92,246",
          r: 340,
        },
        {
          x: canvas.width * 0.85,
          y: canvas.height * 0.6,
          col: "34,211,238",
          r: 300,
        },
        {
          x: canvas.width * 0.5,
          y: canvas.height * 0.15,
          col: "236,72,153",
          r: 260,
        },
      ];
      for (const { x, y, col, r } of orbs) {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${col},0.08)`);
        g.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 280, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ── Section Hero ──────────────────────────────────────────────────
export function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="min-h-[100dvh] md:min-h-0 h-full w-full flex flex-col relative overflow-hidden pt-[12dvh] pb-[4dvh]">
      <ParticleCanvas />

      {/* Vignette radiale */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 my-auto">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16 xl:gap-20">
            {/* Photo de profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-[22rem] 2xl:h-[22rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-sky-400 rounded-full blur-2xl opacity-20" />
                {photoError ? (
                  <div
                    className="relative w-full h-full rounded-full bg-[var(--glass-bg)] flex items-center justify-center z-10"
                    style={{ border: "1px solid var(--glass-border)" }}
                  >
                    <span className="text-5xl lg:text-6xl font-light bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text text-transparent select-none">
                      CR
                    </span>
                  </div>
                ) : (
                  <Image
                    src="https://gravatar.com/avatar/f675b67bcdb8f19096f687531f3cc3890612bcf8a6e8dcd46be05896b48837bd?s=400"
                    alt="Cyprien ROBINAUD"
                    width={400}
                    height={400}
                    priority
                    unoptimized
                    onError={() => setPhotoError(true)}
                    className="relative w-full h-full rounded-full object-cover bg-background z-10"
                    style={{ border: "1px solid var(--glass-border)" }}
                  />
                )}
                {/* Carré rotatif de style HUD (plus petit que la photo) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-6 rounded-2xl border border-dashed border-sky-400/40 pointer-events-none z-0"
                />
              </div>
            </motion.div>

            {/* Contenu textuel */}
            <div className="text-center lg:text-left flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-5"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-light leading-tight mb-4">
                  <span className="block text-foreground/90 tracking-tight">
                    Cyprien
                  </span>
                  <span className="block font-semibold tracking-tight bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                    ROBINAUD
                  </span>
                </h1>
                <p className="text-xl lg:text-3xl text-foreground/80 font-light tracking-wide">
                  Étudiant en Informatique, Architecte logiciel
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8 lg:mb-10"
              >
                <p className="text-lg lg:text-2xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  À la recherche d'une alternance — disponible dès septembre
                  2026
                </p>
              </motion.div>

              {/* Boutons CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-8 w-full"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-7 py-3.5 w-full sm:w-auto justify-center bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl flex items-center gap-2.5 shadow-lg shadow-blue-500/20 hover:shadow-sky-500/25 transition-shadow group text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Prendre contact
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </motion.a>

                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-7 py-3.5 w-full sm:w-auto justify-center flex items-center bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] text-foreground/80 rounded-xl hover:border-[var(--ring)] transition-all text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Voir mes projets
                </motion.a>
              </motion.div>

              {/* Liens sociaux + CV */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full"
              >
                {[
                  {
                    icon: "/assets/icons/github.svg",
                    href: "https://github.com/crobinaud",
                    label: "GitHub",
                  },
                  {
                    icon: "/assets/icons/linkedin.svg",
                    href: "https://www.linkedin.com/in/crobinaud ",
                    label: "LinkedIn",
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-1 sm:flex-none justify-center items-center gap-2.5 px-4 sm:px-5 h-12 rounded-xl bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] text-foreground/70 hover:text-sky-500 hover:border-[var(--ring)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={s.label}
                  >
                    <Image
                      src={s.icon}
                      alt={s.label}
                      width={20}
                      height={20}
                      className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                      style={{ filter: "var(--icon-filter)" }}
                    />
                    <span className="text-sm font-medium">{s.label}</span>
                  </motion.a>
                ))}

                <div className="hidden sm:block w-px h-5 bg-[var(--glass-border)] mx-0.5" />

                <motion.a
                  href="/assets/documents/cv-cyprien-robinaud.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex w-full sm:w-auto justify-center items-center gap-2.5 px-5 h-12 rounded-xl bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] text-foreground/70 hover:text-foreground hover:border-[var(--ring)] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Télécharger le CV"
                >
                  <FileDown className="w-5 h-5 flex-shrink-0 group-hover:-translate-y-0.5 transition-transform" />
                  <span className="text-sm font-medium">Curriculum Vitae</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Indice de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-foreground/25"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
