"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { MapPin, Mail, User, Copy, Check } from "lucide-react";

// ── Fond géométrique animé ────────────────────────────────────────
function ContactCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let raf: number;

    const draw = () => {
      t += 0.004;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width * 0.82;
      const cy = canvas.height * 0.25;

      // Anneaux concentriques rotatifs
      for (let ring = 0; ring < 5; ring++) {
        const r = 60 + ring * 48;
        const alpha = 0.06 - ring * 0.01;
        const angle = t * (1 - ring * 0.12);

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.setLineDash([6, ring % 2 === 0 ? 14 : 22]);
        ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        for (let d = 0; d < 6; d++) {
          const a = (d / 6) * Math.PI * 2 + angle * 2;
          ctx.beginPath();
          ctx.arc(Math.cos(a) * r, Math.sin(a) * r, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139,92,246,${alpha * 2.5})`;
          ctx.fill();
        }

        ctx.restore();
      }

      // Géométrie accent bas-gauche
      const bx = canvas.width * 0.1;
      const by = canvas.height * 0.8;
      ctx.save();
      ctx.translate(bx, by);
      ctx.rotate(t * 0.4);
      for (let s = 0; s < 3; s++) {
        const sr = 20 + s * 16;
        ctx.beginPath();
        ctx.arc(0, 0, sr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34,211,238,${0.05 - s * 0.01})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
}

// ── Section Contact ───────────────────────────────────────────────
export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "robinaudcyprien@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-[100dvh] md:min-h-0 h-full pt-[12dvh] pb-[4dvh] w-full flex flex-col relative overflow-hidden">
      <ContactCanvas />

      {/* Vignette radiale */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center justify-center my-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-[4dvh]"
        >
          <span className="inline-block text-sky-500 text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2 font-mono">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl">
            Échangeons{" "}
            <span className="italic text-foreground/50">ensemble</span>
          </h2>
        </motion.div>

        {/* Call to action & LinkedIn Widget Grid */}
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          {/* Gauche : Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl p-6 sm:p-10 lg:p-6 xl:p-10 flex flex-col justify-between gap-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex w-14 h-14 rounded-full bg-gradient-to-br from-sky-500/10 to-blue-500/10 items-center justify-center text-sky-400 flex-shrink-0 border border-sky-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground/90">
                  Contactez-moi !
                </h3>
              </div>
              <p className="text-foreground/85 leading-relaxed text-sm sm:text-base">
                À la recherche d'une alternance pour 2026. Passionné par le{" "}
                <strong>DevOps</strong>, l'
                <strong>architecture logicielle</strong> et la coordination
                d'équipe (<strong>Assistant / Chef de projet</strong>). <br />
                <span className="mt-2.5 block font-semibold text-sky-400">
                  Un projet à me proposer ? Échangeons dès maintenant !
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full mt-4">
              {/* Copie de l'email */}
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-3.5 bg-white/[0.05] backdrop-blur-xl text-foreground/90 rounded-xl flex items-center justify-center gap-2.5 border border-white/[0.10] hover:border-white/20 hover:bg-white/[0.08] shadow-lg hover:shadow-white/5 transition-all text-sm font-medium whitespace-nowrap flex-1"
              >
                {copied ? (
                  <Check className="w-4.5 h-4.5 text-green-400 shrink-0" />
                ) : (
                  <Copy className="w-4.5 h-4.5 text-foreground/60 shrink-0" />
                )}
                <span className="font-mono tracking-tight text-foreground/90">
                  {copied ? "Copié !" : email}
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Droite : LinkedIn Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative group">
              {/* Bannière */}
              <div
                className="h-28 w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url('/assets/images/in_wp.webp')` }}
              />

              {/* Contenu Profil */}
              <div className="px-6 pb-6 relative flex flex-col pt-12 flex-1">
                {/* Photo de profil (overlaps banner) */}
                <div className="absolute -top-10 left-6 w-20 h-20 rounded-full border-4 border-[var(--glass-border)] overflow-hidden bg-slate-900 shadow-md">
                  <img
                    src="https://gravatar.com/avatar/f675b67bcdb8f19096f687531f3cc3890612bcf8a6e8dcd46be05896b48837bd?s=150"
                    alt="Cyprien Robinaud"
                    width={150}
                    height={150}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-white tracking-tight">
                      Cyprien Robinaud
                    </span>
                    {/* Badge vérifié bleu type LinkedIn */}
                    <div
                      className="w-4 h-4 rounded-full bg-[#0a66c2] flex items-center justify-center text-white shrink-0 shadow-sm"
                      title="Profil vérifié"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-2.5 h-2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/90 font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Étudiant en Master Informatique
                  </p>
                  <p className="text-[11px] text-foreground/60">
                    La Rochelle Université
                  </p>
                  <p className="text-[11px] text-foreground/50 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-foreground/35" />
                    Bordeaux, La Rochelle, Toulouse
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/crobinaud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-[#0A66C2]/20 hover:shadow-[#0A66C2]/40"
                >
                  <span>Voir le profil</span>
                  <User className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer info (Mentions légales & Copyright) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-w-7xl mt-auto pt-6 border-t border-[var(--glass-border)] text-left text-[10px] sm:text-xs text-foreground/40 flex flex-col gap-4"
        >
          <div className="font-semibold text-foreground/60 text-xs sm:text-sm text-center sm:text-left">
            Mentions légales & Politique de confidentialité
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
            <div className="flex flex-col gap-1.5">
              <span className="flex items-center justify-center sm:justify-start gap-1.5">
                <User className="w-3 h-3" /> Éditeur : Cyprien ROBINAUD
              </span>
              <span className="flex items-center justify-center sm:justify-start gap-1.5">
                <Mail className="w-3 h-3" /> Email :
                portfolio.domelike991@passinbox.com
              </span>
            </div>

            <div className="flex flex-col gap-1.5 sm:text-right">
              <span>Hébergeur : Firebase Hosting (Google LLC)</span>
              <span>Données : Uniquement logs de l'hébergeur.</span>
              <span className="mt-2 text-foreground/50">
                © 2026 Cyprien ROBINAUD. Tous droits réservés.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
