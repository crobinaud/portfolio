"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Theme } from "@/types";

interface AppContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: Readonly<{ children: ReactNode }>) {
  // Nommage [value, setValue] requis par Biome
  const [theme, setTheme] = useState<Theme>("dark");

  // Initialisation côté client uniquement
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme && savedTheme !== "dark") {
      setTimeout(() => setTheme(savedTheme), 0);
    }
  }, []);

  // Wrapper stable (useCallback) qui persiste localStorage + data-theme
  const updateTheme = useCallback((t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.dataset.theme = t;
  }, []);

  // Synchronise le thème initial généré par le script dans layout.tsx
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.dataset.theme as Theme;
      if (currentTheme && currentTheme !== theme) {
        setTheme(currentTheme);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, [theme]);

  // Mémoïsation — toutes les dépendances sont déclarées
  const value = useMemo<AppContextValue>(
    () => ({ theme, setTheme: updateTheme }),
    [theme, updateTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
}
