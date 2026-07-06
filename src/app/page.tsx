"use client";

import { AnimatePresence } from "motion/react";
import { SectionAmbiance } from "@/components/layout/SectionAmbiance";
import { TopNav } from "@/components/layout/TopNav";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";

/** Séparateur flou entre sections — ligne de lumière très subtile */
function SectionDivider() {
  return (
    <div className="relative w-full h-px overflow-visible pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/15 to-transparent" />
      <div className="absolute inset-x-[20%] top-0 h-px blur-sm bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
    </div>
  );
}

const SECTIONS = [Hero, About, Projects, Timeline, Contact];
const SECTION_IDS = ["hero", "about", "projects", "timeline", "contact"];

export default function HomePage() {
  const { currentSection, navigate } = useSectionNavigation();

  return (
    <div className="relative bg-background text-foreground h-screen overflow-hidden">
      {/* Orbes d'ambiance par section (cross-fade) */}
      <AnimatePresence mode="sync">
        <SectionAmbiance key={currentSection} section={currentSection} />
      </AnimatePresence>

      {/* Gradients ambiants fixes de fond */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.03),transparent_50%)]" />
      </div>

      {/* Barre de navigation top – centrée, pill glassmorphism */}
      <TopNav currentSection={currentSection} onNavigate={navigate} />

      {/* Scroll fluide sur mobile, snap (1 section = 1 vue) sur PC */}
      <main className="w-full h-[100dvh] overflow-y-auto md:snap-y md:snap-mandatory relative flex flex-col z-10 scroll-smooth">
        {SECTIONS.map((Section, i) => (
          <div
            key={SECTION_IDS[i]}
            id={SECTION_IDS[i]}
            className="w-full min-h-[100dvh] md:min-h-0 md:h-[100dvh] shrink-0 md:snap-start relative flex flex-col overflow-x-hidden md:overflow-hidden scroll-mt-20 md:scroll-mt-0"
          >
            <Section />
            {i < SECTIONS.length - 1 && <SectionDivider />}
          </div>
        ))}
      </main>
    </div>
  );
}
