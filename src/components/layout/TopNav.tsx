"use client";

import { motion } from "motion/react";
import { Home, User, Briefcase, Calendar, Mail } from "lucide-react";

interface TopNavProps {
  currentSection: number;
  onNavigate: (section: number) => void;
}

const SECTIONS = [
  { label: "Accueil", icon: Home, id: "hero" },
  { label: "À propos", icon: User, id: "about" },
  { label: "Projets", icon: Briefcase, id: "projects" },
  { label: "Parcours", icon: Calendar, id: "timeline" },
  { label: "Contact", icon: Mail, id: "contact" },
];

export function TopNav({ currentSection, onNavigate }: TopNavProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50"
      aria-label="Navigation principale"
    >
      <div className="flex items-center gap-2 px-2 py-2 sm:px-3 sm:py-2.5 rounded-full bg-[var(--glass-bg)] backdrop-blur-2xl border border-[var(--glass-border)] shadow-[0_8px_32px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.03)]">
        {SECTIONS.map((section, i) => {
          const isActive = currentSection === i;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(i)}
              aria-label={section.label}
              aria-current={isActive ? "page" : undefined}
              className="relative flex items-center gap-2.5 px-3.5 sm:px-5 py-2.5 rounded-full transition-colors duration-200 group"
            >
              {/* Active pill – behind icon/label */}
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-sky-500/12 border border-sky-500/20"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}

              <section.icon
                className={`relative z-10 w-5 h-5 shrink-0 transition-colors duration-200 ${
                  isActive
                    ? "text-sky-400"
                    : "text-foreground/35 group-hover:text-foreground/65"
                }`}
              />

              <span
                className={`hidden md:block relative z-10 text-sm font-medium whitespace-nowrap leading-none transition-colors duration-200 ${
                  isActive
                    ? "text-sky-300"
                    : "text-foreground/40 group-hover:text-foreground/70"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
