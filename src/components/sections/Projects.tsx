"use client";

import { motion } from "motion/react";
import { FileText, Presentation, Award } from "lucide-react";
import Image from "next/image";

type ProjectLink = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  href?: string;
};

type Project = {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  confidential?: boolean;
  links: ProjectLink[];
};

// ── Données projets ───────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    title: "L3i — GALACTIC Market",
    desc: "Publication et distribution de paquets Python via une CLI conforme PEP503, avec pipeline CI/CD intégré",
    image: "/assets/images/galactic_overview.webp",
    tags: ["Python", "LaTeX", "Docker", "GitLab"],
    links: [
      {
        label: "Rapport",
        icon: FileText,
        href: "https://galactic.univ-lr.fr/resources/reports/2025/2025-Cyprien-Robinaud-report-dark.pdf",
      },
      {
        label: "Présentation",
        icon: Presentation,
        href: "https://galactic.univ-lr.fr/resources/reports/2025/2025-Cyprien-Robinaud-slides.pdf",
      },
      {
        label: "Recommandation",
        icon: Award,
        href: "https://www.linkedin.com/posts/chdemko_cv-de-cyprien-robinaud-novembre-2025-ugcPost-7394454018439323648-drZW",
      },
    ],
  },
  {
    title: "CDE — Projet spatial",
    desc: "Système logiciel pour le Commandement de l'Espace : architecture microservices avec qualité logicielle industrielle",
    image: "/assets/images/spatiale_overview.webp",
    tags: ["Next.js", "Python", "Docker", "GitLab"],
    confidential: true,
    links: [],
  },
  {
    title: "VeriDegree",
    desc: "DApp de certification décentralisée : émission et vérification de diplômes via tokens Soulbound non-transférables",
    image: "/assets/images/veridegree_overview.webp",
    tags: ["Next.js", "Solidity", "Hyperledger Besu", "MetaMask"],
    links: [
      {
        label: "Code",
        icon: "/assets/icons/github.svg",
        href: "https://github.com/crobinaud/veridegree",
      },
      {
        label: "Rapport",
        icon: FileText,
        href: "https://docs.google.com/document/d/1wv6igLsQXtcXIIJrZX7XUMsR9HZoACRlDB6bAAhcLe0/edit?tab=t.0",
      },
    ],
  },
  {
    title: "Agentic AI for Retail",
    desc: "Dashboard retail piloté par IA locale : analyse autonome des ventes et détection proactive des seuils critiques",
    image: "/assets/images/agenticai_overview.webp",
    tags: ["React", "FastAPI", "Python", "IA"],
    links: [{ label: "Rapport", icon: FileText }],
  },
  {
    title: "Portfolio",
    desc: "Portfolio développeur avec déploiement continu automatisé GitHub Actions → Firebase Hosting",
    image: "/assets/images/portfolio_overview.webp",
    tags: ["Next.js", "SEO / GEO", "Firebase", "GitHub"],
    links: [
      {
        label: "Code",
        icon: "/assets/icons/github.svg",
        href: "https://github.com/crobinaud/portfolio",
      },
    ],
  },
  {
    title: "2048",
    desc: "Application Android du jeu 2048 enrichie de fonctionnalités originales, publiable sur Google Play",
    image: "/assets/images/2048_overview.webp",
    tags: ["Java", "Android Studio", "XML", "GitHub"],
    links: [
      { label: "Rapport", icon: FileText },
      {
        label: "Code",
        icon: "/assets/icons/github.svg",
        href: "https://github.com/crobinaud/2048",
      },
    ],
  },
  {
    title: "GeoAlt",
    desc: "Cartographie interactive d'indices de mobilité territoriale sur open data, pilotée en chef de projet d'une équipe de 5",
    image: "/assets/images/geoalt_overview.webp",
    tags: ["PHP", "PostgreSQL", "Leaflet", "OpenData"],
    links: [{ label: "Rapport", icon: FileText }],
  },
  {
    title: "CyprigoApp",
    desc: "Bot Discord communautaire : modération, économie roleplay et interface web OAuth2 sur Firebase Realtime Database",
    image: "/assets/images/cyprigoapp_overview.webp",
    tags: ["JavaScript", "Node.js", "Firebase", "Discord API"],
    links: [],
  },
  {
    title: "Virus",
    desc: "Virus compagnon universitaire en C : propagation par infection d'exécutables à partir d'un vecteur initial",
    image: "/assets/images/virus_overview.webp",
    tags: ["C", "Cybersécurité", "Doxygen", "Bas niveau"],
    links: [
      { label: "Rapport", icon: FileText },
      { label: "Code", icon: "/assets/icons/github.svg" },
    ],
  },
];

// ── Composant ─────────────────────────────────────────────────────
export function Projects() {
  return (
    <section className="min-h-[100dvh] md:min-h-0 h-full pt-[12dvh] pb-[4dvh] w-full flex flex-col relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center my-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-[4dvh]"
        >
          <span className="inline-block text-sky-500 text-sm tracking-widest uppercase mb-2 font-mono">
            Mes Projets
          </span>
          <h2 className="text-3xl lg:text-4xl">
            Réalisations{" "}
            <span className="italic text-foreground/50">& créations</span>
          </h2>
        </motion.div>

        {/* Grille de projets */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-40 lg:h-36 xl:h-44 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl overflow-hidden flex flex-col shadow-lg"
                >
                  {/* Image de fond avec effet de zoom au hover */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-40 group-hover:opacity-[0.65] transition-opacity duration-300"
                  />

                  {/* Contenu de la carte (toujours visible) avec fond dynamique selon le thème */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30 flex flex-col p-5">
                    {/* Header : Titre + Liens alignés au centre */}
                    <div className="flex justify-between items-center gap-3 mb-3">
                      <h3 className="text-foreground text-base lg:text-lg font-bold leading-none drop-shadow-sm line-clamp-1">
                        {project.title}
                      </h3>

                      {/* Liens (Affichés uniquement si valides) */}
                      <div className="flex flex-wrap justify-end gap-2 shrink-0">
                        {project.links
                          .filter((link) => link.href)
                          .map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={link.label}
                              aria-label={link.label}
                              className="w-9 h-9 rounded-full bg-[var(--glass-bg)] text-foreground hover:bg-foreground hover:text-background border border-[var(--glass-border)] flex items-center justify-center transition-all shadow-sm hover:shadow-md hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                            >
                              {typeof link.icon === "string" ? (
                                <Image
                                  src={link.icon}
                                  alt={link.label}
                                  width={16}
                                  height={16}
                                  sizes="16px"
                                  className="opacity-80"
                                  style={{ filter: "var(--icon-filter)" }}
                                />
                              ) : (
                                <link.icon className="w-4 h-4" />
                              )}
                            </a>
                          ))}
                      </div>
                    </div>

                    {/* Description au milieu */}
                    <div className="mb-4">
                      <p className="text-foreground/90 text-xs lg:text-[13px] leading-relaxed line-clamp-2 drop-shadow-sm">
                        {project.desc}
                      </p>
                    </div>

                    {/* Compétences fixées en bas */}
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] rounded-md text-[9px] lg:text-[10px] text-foreground/90 font-medium shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
