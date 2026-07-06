"use client";

import { motion } from "motion/react";

type SectionAmbiance = {
  /** index de section (0=hero, 1=about, etc.) */
  section: number;
};

// Chaque section a une palette d'orbes unique
const AMBIANCES = [
  // Hero – violet/cyan déjà géré par l'existant, on ne surcharge pas
  null,
  // About – teal/sky doux
  {
    orbs: [
      "radial-gradient(ellipse 55% 45% at 10% 50%, rgba(14,165,233,0.07) 0%, transparent 70%)",
      "radial-gradient(ellipse 45% 55% at 90% 60%, rgba(6,182,212,0.05) 0%, transparent 65%)",
    ],
  },
  // Projects – indigo/violet
  {
    orbs: [
      "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(99,102,241,0.08) 0%, transparent 70%)",
      "radial-gradient(ellipse 40% 60% at 15% 70%, rgba(139,92,246,0.06) 0%, transparent 65%)",
    ],
  },
  // Timeline – émeraude/teal
  {
    orbs: [
      "radial-gradient(ellipse 55% 45% at 20% 40%, rgba(16,185,129,0.07) 0%, transparent 70%)",
      "radial-gradient(ellipse 45% 55% at 85% 65%, rgba(20,184,166,0.05) 0%, transparent 65%)",
    ],
  },
  // Contact – ambre/rose
  {
    orbs: [
      "radial-gradient(ellipse 55% 45% at 75% 30%, rgba(245,158,11,0.06) 0%, transparent 70%)",
      "radial-gradient(ellipse 40% 50% at 25% 75%, rgba(236,72,153,0.05) 0%, transparent 65%)",
    ],
  },
];

export function SectionAmbiance({ section }: Readonly<SectionAmbiance>) {
  const ambiance = AMBIANCES[section];
  if (!ambiance) return null;

  return (
    <motion.div
      key={`ambiance-${section}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden
    >
      {ambiance.orbs.map((orb) => (
        <div
          key={orb}
          className="absolute inset-0"
          style={{ background: orb }}
        />
      ))}
    </motion.div>
  );
}
