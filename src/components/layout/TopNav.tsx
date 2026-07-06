"use client";

import { Briefcase, Calendar, Home, Mail, Moon, Sun, User } from "lucide-react";
import { motion } from "motion/react";
import { useApp } from "@/context/AppContext";

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

export function TopNav({ currentSection, onNavigate }: Readonly<TopNavProps>) {
  const { theme, setTheme } = useApp();
  const isDark = theme === "dark";

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
              type="button"
              key={section.id}
              onClick={() => onNavigate(i)}
              aria-label={section.label}
              aria-current={isActive ? "page" : undefined}
              className="relative flex items-center gap-2.5 px-3.5 sm:px-5 py-2.5 rounded-full transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {/* Active pill – behind icon/label */}
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-[var(--nav-active-bg)] border border-[var(--nav-active-border)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}

              <section.icon
                className={`relative z-10 w-5 h-5 shrink-0 transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--nav-active-icon)]"
                    : "text-[var(--nav-icon)] group-hover:text-[var(--nav-icon-hover)]"
                }`}
              />

              <span
                className={`hidden md:block relative z-10 text-sm font-medium whitespace-nowrap leading-none transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--nav-active-text)]"
                    : "text-[var(--nav-text)] group-hover:text-[var(--nav-text-hover)]"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}

        {/* Séparateur et Toggle Thème Mobile */}
        <div className="w-px h-5 bg-[var(--glass-border)] mx-1 md:hidden" />
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="relative flex items-center justify-center p-2 rounded-full text-[var(--nav-icon)] hover:text-[var(--nav-icon-hover)] transition-colors duration-200 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Basculer le thème"
        >
          {isDark ? (
            <Sun className="w-4.5 h-4.5 text-sky-400 shrink-0" />
          ) : (
            <Moon className="w-4.5 h-4.5 text-sky-600 shrink-0" />
          )}
        </button>
      </div>
    </motion.nav>
  );
}
