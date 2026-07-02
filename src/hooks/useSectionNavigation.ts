"use client";

import { useEffect, useState, useCallback } from "react";

const SECTION_IDS = ["hero", "about", "projects", "timeline", "contact"];

export function useSectionNavigation() {
  const [currentSection, setCurrentSection] = useState(0);

  // Monitor section intersection to update navigation state
  useEffect(() => {
    const observers = SECTION_IDS.map((id, index) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSection(index);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px", // Trigger when center of viewport crosses the section
          threshold: 0,
        },
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const navigate = useCallback((to: number) => {
    const id = SECTION_IDS[to];
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return { currentSection, navigate };
}
