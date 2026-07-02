"use client";

import { motion } from "motion/react";
import {
  Cloud,
  Award,
  Leaf,
  Plane,
  Lightbulb,
  Code2,
  Layout,
  Database,
  Wrench,
} from "lucide-react";

const TennisRacket = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    {...props}
  >
    <path d="m147-144-51-51 120-120q45-45 58.5-86.5T288-540q0-61 25.5-119T387-765q88-88 195-100t176 59q69 71 57 177.5T717-435q-48 48-106 73.5T492-336q-97 0-138.5 13.5T267-264L147-144Zm249-300q46 46 126.5 33.5T666-486q63-64 75.5-144T708-755q-46-45-126.5-33.5T438-714q-63 63-75.5 143.5T396-444ZM570-66q-42-42-42-102t42-102q42-42 102-42t102 42q42 42 42 102T774-66q-42 42-102 42T570-66Zm153-51q21-21 21-51t-21-51q-21-21-51-21t-51 21q-21 21-21 51t21 51q21 21 51 21t51-21Zm-51-51Z" />
  </svg>
);

export function About() {
  const topSkills = [
    {
      name: "Google Cloud (GCP)",
      icon: Cloud,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/30",
    },
    {
      name: "Num. Responsable",
      icon: Leaf,
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/30",
    },
    {
      name: "Pix Expert",
      icon: Award,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/30",
    },
  ];

  const skillCategories = [
    {
      id: "lang",
      title: "Langages",
      icon: Code2,
      color: "text-sky-400",
      skills: ["Python", "TypeScript", "Java", "C", "JavaScript"],
    },
    {
      id: "web",
      title: "Web & Frontend",
      icon: Layout,
      color: "text-pink-400",
      skills: ["Next.js", "React", "HTML", "CSS", "PHP"],
    },
    {
      id: "data",
      title: "Base de données",
      icon: Database,
      color: "text-emerald-400",
      skills: ["PostgreSQL", "Neo4J", "MongoDB"],
    },
    {
      id: "tools",
      title: "Outils & DevOps",
      icon: Wrench,
      color: "text-orange-400",
      skills: ["Git", "CI/CD", "Linux", "Scrum", "Jira"],
    },
  ];

  const passions = [
    {
      name: "Tennis (Compétition)",
      icon: TennisRacket,
      textColor: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/30",
      description: "Esprit de compétition et résilience.",
    },
    {
      name: "Voyages & Culture",
      icon: Plane,
      textColor: "text-sky-400",
      bg: "bg-sky-400/10",
      border: "border-sky-400/30",
      description: "Ouverture d'esprit et adaptabilité.",
    },
    {
      name: "Veille Technologique",
      icon: Lightbulb,
      textColor: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/30",
      description: "Curiosité et apprentissage continu.",
    },
  ];

  const hotSkills = new Set([
    "Next.js",
    "Git",
    "CI/CD",
    "Python",
    "TypeScript",
    "PostgreSQL",
  ]);

  return (
    <section className="h-full py-12 lg:py-20 w-full flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <span className="inline-block text-sky-500 text-sm tracking-widest uppercase mb-2 font-mono">
            À Propos
          </span>
          {/* prettier-ignore */}
          <h2 className="text-3xl lg:text-4xl">
            De la conception technique au
            {" "}
            <span className="italic text-foreground/50">pilotage de projet</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:gap-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Côté Humain (Parcours) */}
            <div className="lg:col-span-5 flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl p-6 lg:p-7 relative overflow-hidden group h-full flex flex-col justify-center"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-foreground/90 flex items-center gap-2">
                    <span className="w-8 h-1 bg-sky-500 rounded-full inline-block"></span>
                    En quelques mots
                  </h3>
                  <div className="space-y-4 text-foreground/80 leading-relaxed text-sm lg:text-base">
                    {/* prettier-ignore */}
                    <p>
                      <strong className="text-foreground/90 font-medium">Tombé dans l'informatique dès l'enfance</strong>
                      {", j'ai rapidement voulu "}
                      <strong className="text-foreground/90 font-medium">créer mes propres solutions</strong>
                      {". De mes premiers sites web au collège jusqu'à ma "}
                      <strong className="text-foreground/90 font-medium">spécialisation en études supérieures</strong>
                      {", j'ai transformé cette curiosité en "}
                      <strong className="text-foreground/90 font-medium">véritable expertise</strong>
                      {"."}
                    </p>
                    <p>
                      Au-delà de la technique, le contact humain est essentiel
                      pour moi. J'apprécie particulièrement échanger, comprendre
                      vos besoins et collaborer. Résoudre des problèmes
                      complexes pour vous apporter une réelle valeur ajoutée est
                      ma plus grande source de satisfaction.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Côté Technique (Skills) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Top Skills */}
              <div className="grid sm:grid-cols-3 gap-4">
                {topSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border ${skill.border} ${skill.bg} hover:-translate-y-1 transition-transform`}
                  >
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    <span className="text-sm font-semibold text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Complete Background Matrix */}
              <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl p-5 lg:p-6 flex-grow flex flex-col justify-center">
                <div className="grid sm:grid-cols-2 gap-6">
                  {skillCategories.map((category, i) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <category.icon
                          className={`w-4 h-4 ${category.color}`}
                        />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
                          {category.title}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => {
                          const isHot = hotSkills.has(skill);
                          return (
                            <span
                              key={skill}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-default ${
                                isHot
                                  ? "border-sky-500/30 bg-sky-500/10 text-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.1)] hover:bg-sky-500/20"
                                  : "border-white/10 bg-white/5 text-foreground/80 hover:bg-white/10 hover:border-white/20"
                              }`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies / Passions */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mt-2">
            {passions.map((passion, i) => (
              <motion.div
                key={passion.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl p-5 hover:border-sky-500/30 transition-all group relative overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute right-3 bottom-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <passion.icon className="w-14 h-14 text-foreground" />
                </div>
                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${passion.border} ${passion.bg}`}
                  >
                    <passion.icon
                      className={`w-6 h-6 ${passion.textColor} group-hover:scale-110 transition-transform`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-foreground/90">
                      {passion.name}
                    </span>
                    <p className="text-sm text-foreground/70 leading-snug">
                      {passion.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
