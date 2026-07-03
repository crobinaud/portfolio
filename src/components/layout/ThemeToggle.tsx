"use client";

import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function ThemeToggle() {
  const { theme, setTheme } = useApp();
  const isDark = theme === "dark";

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 rounded-full bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-110 hover:shadow-sky-500/20 transition-all duration-300 group"
      aria-label="Basculer le thème"
    >
      <div className="relative w-5 h-5 flex items-center justify-center text-foreground">
        <Sun
          className={`absolute w-5 h-5 transition-all duration-500 ${
            isDark
              ? "opacity-0 rotate-90 scale-50"
              : "opacity-100 rotate-0 scale-100 text-sky-600"
          }`}
        />
        <Moon
          className={`absolute w-5 h-5 transition-all duration-500 ${
            isDark
              ? "opacity-100 rotate-0 scale-100 text-sky-400"
              : "opacity-0 -rotate-90 scale-50"
          }`}
        />
      </div>
    </motion.button>
  );
}
