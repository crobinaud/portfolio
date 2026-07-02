"use client";

import { motion } from "motion/react";
import {
  ArrowUp,
  ArrowDown,
  Home,
  User,
  Briefcase,
  Calendar,
  Mail,
} from "lucide-react";

interface SectionNavProps {
  currentSection: number;
  onNavigate: (section: number) => void;
}

export function SectionNav({ currentSection, onNavigate }: SectionNavProps) {
  const sections = [
    { label: "Accueil", icon: Home },
    { label: "À propos", icon: User },
    { label: "Projets", icon: Briefcase },
    { label: "Parcours", icon: Calendar },
    { label: "Contact", icon: Mail },
  ];

  const handlePrevious = () => {
    if (currentSection > 0) onNavigate(currentSection - 1);
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) onNavigate(currentSection + 1);
  };

  return (
    <>
      {/* Indicateurs de section — desktop, côté droit */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map((section, index) => (
          <motion.button
            key={index}
            onClick={() => onNavigate(index)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2 }}
            className="group relative"
            aria-label={section.label}
          >
            <div className="flex items-center gap-3">
              {/* Tooltip au survol */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-4 px-3 py-1.5 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg whitespace-nowrap pointer-events-none"
              >
                <span className="text-xs text-foreground/70">
                  {section.label}
                </span>
              </motion.div>

              {/* Point indicateur */}
              <div className="relative">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSection === index
                      ? "bg-gradient-to-r from-sky-500 to-blue-500 scale-150"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
                {currentSection === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 blur-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Flèches de navigation — desktop */}
      <div className="hidden lg:block fixed bottom-8 right-6 z-50">
        <div className="flex flex-col gap-2">
          <motion.button
            onClick={handlePrevious}
            disabled={currentSection === 0}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] flex items-center justify-center transition-all ${
              currentSection === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:border-sky-500/50"
            }`}
            aria-label="Section précédente"
          >
            <ArrowUp className="w-4 h-4 text-foreground/70" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}
            whileHover={{ scale: 1.1, y: 2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] flex items-center justify-center transition-all ${
              currentSection === sections.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:border-sky-500/50"
            }`}
            aria-label="Section suivante"
          >
            <ArrowDown className="w-4 h-4 text-foreground/70" />
          </motion.button>
        </div>
      </div>

      {/* Navigation mobile — barre en bas */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden"
      >
        <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-full px-6 py-3 flex items-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentSection === 0}
            className={`p-2 ${
              currentSection === 0 ? "opacity-30" : "hover:text-sky-400"
            } transition-all`}
            aria-label="Précédent"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <span className="text-sm text-foreground/60 font-mono">
              {String(currentSection + 1).padStart(2, "0")}
            </span>
            <div className="w-px h-4 bg-[var(--glass-border)]" />
            <span className="text-sm text-foreground/40 font-mono">
              {String(sections.length).padStart(2, "0")}
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}
            className={`p-2 ${
              currentSection === sections.length - 1
                ? "opacity-30"
                : "hover:text-sky-400"
            } transition-all`}
            aria-label="Suivant"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Indication clavier — section 0 uniquement, desktop */}
      {currentSection === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="hidden lg:block fixed bottom-8 left-8 z-50"
        >
          <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-xl px-4 py-2.5 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-foreground/5 border border-[var(--glass-border)] rounded text-xs font-mono">
                ↑
              </kbd>
              <kbd className="px-2 py-1 bg-foreground/5 border border-[var(--glass-border)] rounded text-xs font-mono">
                ↓
              </kbd>
            </div>
            <span className="text-xs text-foreground/50">Naviguer</span>
          </div>
        </motion.div>
      )}
    </>
  );
}
