"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Cloud, Award, Leaf } from "lucide-react";

// ── Données ───────────────────────────────────────────────────────
const CATEGORIES = [
  {
    key: "Frontend",
    color: "#38bdf8",
    desc: "Interfaces web modernes et réactives",
    items: ["React", "Next.js", "TypeScript", "Three.js", "Tailwind CSS"],
  },
  {
    key: "Backend",
    color: "#a78bfa",
    desc: "Services, APIs et logique métier",
    items: ["Python", "FastAPI", "Node.js", "PySide6", "Click", "Rich"],
  },
  {
    key: "DevOps",
    color: "#fb923c",
    desc: "Conteneurisation et pipelines CI/CD",
    items: ["Docker", "GitLab CI/CD", "GitHub Actions", "Harbor"],
  },
  {
    key: "Qualité",
    color: "#4ade80",
    desc: "Qualité logicielle et bonnes pratiques",
    items: ["SonarQube", "Ruff", "Prettier", "Commitlint", "uv"],
  },
  {
    key: "Cloud",
    color: "#60a5fa",
    desc: "Hébergement et services cloud",
    items: ["Google Cloud", "Firebase", "Cloud Storage", "Firestore", "PyPI"],
  },
  {
    key: "Data",
    color: "#f472b6",
    desc: "Bases de données et persistance",
    items: ["PostgreSQL", "MongoDB", "JSON"],
  },
  {
    key: "Blockchain",
    color: "#fbbf24",
    desc: "Technologies décentralisées et smart contracts",
    items: ["Solidity", "MetaMask", "Besu", "QBFT"],
  },
  {
    key: "Mobile",
    color: "#818cf8",
    desc: "Développement mobile natif Android",
    items: ["Java", "Android Studio", "XML"],
  },
] as const;

const CERTIFICATIONS = [
  { icon: Shield, name: "SecNumAcadémie", issuer: "ANSSI", color: "#f87171" },
  { icon: Cloud, name: "Google Cloud", issuer: "Google", color: "#60a5fa" },
  { icon: Award, name: "Pix Expert", issuer: "Pix", color: "#c084fc" },
  { icon: Leaf, name: "Num. Responsable", issuer: "INR", color: "#4ade80" },
];

// ── Composant ─────────────────────────────────────────────────────
export function Skills() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cat = CATEGORIES[selectedIndex];

  return (
    <section className="min-h-screen py-20 lg:py-32 w-full flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center py-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-7"
        >
          <span className="inline-block text-sky-500 text-sm tracking-widest uppercase mb-2 font-mono">
            Compétences
          </span>
          <h2 className="text-3xl lg:text-4xl">
            Stack technique{" "}
            <span className="italic text-foreground/50">& certifications</span>
          </h2>
        </motion.div>

        {/* Zone principale : sidebar + contenu */}
        <div
          className="flex gap-6 lg:gap-8 flex-1 min-h-0 mb-6"
          style={{ maxHeight: "300px" }}
        >
          {/* Sidebar — liste des catégories */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-1 w-40 lg:w-48 flex-shrink-0 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {CATEGORIES.map((c, i) => {
              const active = selectedIndex === i;
              return (
                <button
                  key={c.key}
                  onClick={() => setSelectedIndex(i)}
                  className={`
                    relative flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left
                    transition-all duration-200
                    ${
                      active
                        ? "bg-white/[0.06] border border-white/[0.12]"
                        : "hover:bg-white/[0.03] border border-transparent"
                    }
                  `}
                >
                  {active && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
                      style={{ backgroundColor: c.color }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                    style={{
                      backgroundColor: c.color,
                      boxShadow: active ? `0 0 8px ${c.color}90` : "none",
                      opacity: active ? 1 : 0.45,
                    }}
                  />
                  <span
                    className="text-xs font-medium transition-colors duration-200 truncate flex-1"
                    style={{
                      color: active ? c.color : "rgba(255,255,255,0.42)",
                    }}
                  >
                    {c.key}
                  </span>
                  <span className="text-[9px] font-mono text-foreground/22 flex-shrink-0">
                    {c.items.length}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Séparateur */}
          <div className="w-px bg-white/[0.07] flex-shrink-0 self-stretch" />

          {/* Contenu — catégorie sélectionnée */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col min-w-0"
          >
            {/* En-tête de catégorie */}
            <div className="mb-5 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3 mb-1.5">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: cat.color,
                    boxShadow: `0 0 12px ${cat.color}90`,
                  }}
                />
                <h3
                  className="text-lg lg:text-xl font-semibold tracking-tight"
                  style={{ color: cat.color }}
                >
                  {cat.key}
                </h3>
              </div>
              <p className="text-sm text-foreground/40 pl-[22px]">{cat.desc}</p>
            </div>

            {/* Badges compétences */}
            <div className="flex flex-wrap gap-2.5 content-start flex-1">
              {cat.items.map((item, ii) => (
                <motion.span
                  key={`${selectedIndex}-${item}`}
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: ii * 0.05,
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="px-4 py-2 text-sm rounded-xl border font-medium transition-all duration-200"
                  style={{
                    color: cat.color,
                    borderColor: `${cat.color}30`,
                    backgroundColor: `${cat.color}0c`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      `${cat.color}1a`;
                    (e.currentTarget as HTMLElement).style.borderColor =
                      `${cat.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      `${cat.color}0c`;
                    (e.currentTarget as HTMLElement).style.borderColor =
                      `${cat.color}30`;
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <p className="text-[9px] font-mono uppercase tracking-[0.22em] text-foreground/25 mb-3 text-center">
            Certifications
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="flex items-center gap-3 px-3.5 py-3 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-xl transition-all duration-200"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    `${cert.color}35`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                <div
                  style={{
                    color: cert.color,
                    background: `${cert.color}14`,
                    borderColor: `${cert.color}30`,
                  }}
                  className="w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0"
                >
                  <cert.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground/85 leading-tight truncate">
                    {cert.name}
                  </p>
                  <p
                    className="text-[10px] leading-tight mt-0.5 font-mono"
                    style={{ color: `${cert.color}80` }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
