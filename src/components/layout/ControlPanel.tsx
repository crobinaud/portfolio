"use client";

import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function ControlPanel() {
  const { theme, setTheme } = useApp();

  return (
    <div className="fixed top-5 left-5 z-50 flex items-center gap-2">
      {/* Sélecteur de thème */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center justify-center w-8 h-8 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg text-foreground/45 hover:text-foreground/80 hover:border-white/20 transition-all"
        aria-label={
          theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"
        }
      >
        {theme === "dark" ? (
          <Sun className="w-3.5 h-3.5" />
        ) : (
          <Moon className="w-3.5 h-3.5" />
        )}
      </motion.button>
    </div>
  );
}
