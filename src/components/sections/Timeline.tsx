"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Sun, Briefcase } from "lucide-react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type EntryType = "education" | "stage" | "job";

interface Entry {
  type: EntryType;
  period: string;
  title: string;
  org: string;
  location?: string;
  logoUrl: string;
  logoInitials: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Données du parcours
// ─────────────────────────────────────────────────────────────────────────────

const ENTRIES: Entry[] = [
  {
    type: "education",
    period: "2022 - 2025",
    title: "Licence Sciences et Technonologies; Informatique",
    org: "La Rochelle Université",
    location: "La Rochelle",
    logoUrl: "/assets/images/lru_logo.webp",
    logoInitials: "LRU",
  },
  {
    type: "job",
    period: "Été 2024",
    title: "Employé Commercial",
    org: "Super U",
    location: "Fouras",
    logoUrl: "/assets/images/superu_logo.webp",
    logoInitials: "SU",
  },
  {
    type: "stage",
    period: "Avr - Juin 2025",
    title: "Ingénieur logiciel",
    org: "Laboratoire Informatique, Image et Interaction",
    location: "La Rochelle",
    logoUrl: "/assets/images/l3i_logo.webp",
    logoInitials: "L3I",
  },
  {
    type: "job",
    period: "Été 2025",
    title: "Employé Commercial",
    org: "Super U",
    location: "Fouras",
    logoUrl: "/assets/images/superu_logo.webp",
    logoInitials: "SU",
  },
  {
    type: "education",
    period: "2025 - 2027",
    title: "Master Informatique; Architecte Logiciel",
    org: "La Rochelle Université",
    location: "La Rochelle",
    logoUrl: "/assets/images/lru_logo.webp",
    logoInitials: "LRU",
  },
  {
    type: "stage",
    period: "Avr - Août 2026",
    title: "Ingénieur logiciel",
    org: "Armée de l'Air et de l'Espace",
    location: "Toulouse",
    logoUrl: "/assets/images/aae_logo.webp",
    logoInitials: "AAE",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Config icônes
// ─────────────────────────────────────────────────────────────────────────────

const TYPE_CONFIG: Record<EntryType, { Icon: React.ElementType }> = {
  education: { Icon: GraduationCap },
  stage: { Icon: Briefcase },
  job: { Icon: Sun },
};

// ─────────────────────────────────────────────────────────────────────────────
// Logo
// ─────────────────────────────────────────────────────────────────────────────

function OrgLogo({ url, initials }: { url: string; initials: string }) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden bg-background border border-[var(--glass-border)] shadow-sm">
      {!hasError && url ? (
        <Image
          src={url}
          alt={initials}
          width={40}
          height={40}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain p-1.5"
        />
      ) : (
        <span className="text-[9px] font-mono text-foreground/50">
          {initials}
        </span>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Carte HAUT — logo + titre + org + période en disposition verticale
// La carte pointe vers le bas (vers le nœud)
// ─────────────────────────────────────────────────────────────────────────────

function TopCard({ entry, index }: { entry: Entry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl p-5 w-full lg:w-[150%] lg:-ml-[25%] relative z-10 hover:z-20 hover:bg-foreground/[0.03] transition-colors"
    >
      {/* Logo + période en ligne */}
      <div className="flex items-center justify-between mb-3">
        <OrgLogo url={entry.logoUrl} initials={entry.logoInitials} />
        <span className="text-[11px] font-mono text-foreground/50 bg-foreground/5 border border-foreground/10 px-2.5 py-1 rounded">
          {entry.period}
        </span>
      </div>

      {/* Titre (plus proéminent) */}
      <p className="text-foreground text-[15px] font-bold leading-tight mb-1">
        {entry.title}
      </p>
      <p className="text-foreground/55 text-[12px] leading-tight">
        {entry.org}
      </p>

      {/* Lieu en bas */}
      {entry.location && (
        <p className="text-foreground/35 text-[11px] uppercase tracking-wider font-medium mt-3">
          {entry.location}
        </p>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section principale
// ─────────────────────────────────────────────────────────────────────────────

export function Timeline() {
  const cols = ENTRIES.length;

  return (
    <section className="min-h-[100dvh] md:min-h-0 h-full pt-[12dvh] pb-[4dvh] w-full flex flex-col relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full my-auto">
        {/* En-tête */}
        <div className="mb-[4dvh] text-center">
          <span className="text-sky-500 text-sm tracking-widest uppercase font-mono mb-2 block">
            Mon Parcours
          </span>
          <h2 className="text-3xl lg:text-3xl xl:text-4xl font-semibold text-foreground">
            Expériences{" "}
            <span className="text-foreground/50 font-normal italic">
              & formations
            </span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          {/* ── Vue Mobile : liste verticale ── */}
          <div className="flex flex-col lg:hidden gap-6 relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-border" />
            {ENTRIES.map((entry, i) => {
              const { Icon } = TYPE_CONFIG[entry.type];
              return (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center text-foreground/60 z-10">
                    <Icon size={14} />
                  </div>
                  <TopCard entry={entry} index={i} />
                </div>
              );
            })}
          </div>

          {/* ── Vue Desktop : grille 6 colonnes, tout visible, sans scroll ── */}
          <div
            className="hidden lg:grid w-full gap-x-5"
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
          >
            {/* ── Rangée HAUT (indices pairs : 0, 2, 4) ── */}
            {ENTRIES.map((entry, i) => (
              <div
                key={`top-${i}`}
                className="flex flex-col justify-end pb-4 min-h-[9rem] xl:min-h-[11rem]"
              >
                {i % 2 === 0 ? (
                  <TopCard entry={entry} index={i} />
                ) : (
                  // Espace réservé invisible pour conserver l'alignement
                  <div className="invisible pointer-events-none" aria-hidden>
                    <TopCard entry={entry} index={i} />
                  </div>
                )}
              </div>
            ))}

            {/* ── Ligne centrale + nœuds ── */}
            {ENTRIES.map((entry, i) => {
              const isLast = i === ENTRIES.length - 1;
              const { Icon } = TYPE_CONFIG[entry.type];
              return (
                <div
                  key={`node-${i}`}
                  className="relative flex items-center justify-center py-1"
                >
                  {/* Trait gauche */}
                  {i > 0 && (
                    <div className="absolute right-1/2 top-1/2 -translate-y-1/2 h-[2px] w-1/2 bg-border" />
                  )}
                  {/* Trait droit */}
                  {!isLast ? (
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[2px] w-1/2 bg-border" />
                  ) : (
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[2px] w-1/2 bg-gradient-to-r from-border to-transparent" />
                  )}
                  {/* Nœud avec icône */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="w-9 h-9 rounded-full bg-background border-2 border-border flex items-center justify-center z-10 text-foreground/60 shrink-0"
                  >
                    <Icon size={15} />
                  </motion.div>
                </div>
              );
            })}

            {/* ── Rangée BAS (indices impairs : 1, 3, 5) ── */}
            {ENTRIES.map((entry, i) => (
              <div
                key={`bot-${i}`}
                className="flex flex-col justify-start pt-4 min-h-[9rem] xl:min-h-[11rem]"
              >
                {i % 2 !== 0 ? (
                  <TopCard entry={entry} index={i} />
                ) : (
                  // Espace réservé invisible pour conserver l'alignement
                  <div className="invisible pointer-events-none" aria-hidden>
                    <TopCard entry={entry} index={i} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
