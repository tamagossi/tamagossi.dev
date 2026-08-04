"use client";

import { motion } from "framer-motion";

interface Role {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  tags: string[];
}

const EXPERIENCE: Role[] = [
  {
    period: "2024 — PRESENT",
    title: "Chapter Lead",
    company: "Staffinc",
    companyUrl: "https://staffinc.co",
    description:
      "Lead a 12-engineer frontend team across 3 product squads. Architected Ventura UI design system, drove Next.js migration, introduced code review and testing standards that cut bug rates from 100%+ to 70% and reduced build time by 60%.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Design Systems",
      "Team Leadership",
    ],
  },
  {
    period: "2020 — 2024",
    title: "Front-End Software Engineer",
    company: "Staffinc",
    companyUrl: "https://staffinc.co",
    description:
      "Created design system and monorepo architecture for recruitment and admin portals. Achieved 72% test coverage from scratch. Migrated Client Portal from atomic design to domain-driven design, reducing unoptimized code and enabling faster hot reload.",
    tags: [
      "React",
      "TypeScript",
      "Monorepo",
      "DDD",
      "TDD",
      "Design Systems",
    ],
  },
  {
    period: "2025 — 2026",
    title: "Front-End Engineer (Part-time)",
    company: "Edulab Indonesia",
    description:
      "Optimized website performance by reducing network calls from 3-5 per page to 1-2. Created consistent design system and refactored codebase for better maintainability at Indonesia's leading education consulting company with 30+ branches.",
    tags: ["React", "Performance", "Design Systems"],
  },
  {
    period: "2019 — 2020",
    title: "Technical Leader",
    company: "Smooets Technology",
    description:
      "Mentored 3 fresh graduate developers to productivity in 3 months while leading 3 teams across 4 front-end and back-end projects. One mentee now works as a direct report.",
    tags: ["Angular", "React", "Node.js", "Mentoring", "Team Leadership"],
  },
  {
    period: "2018 — 2019",
    title: "Front-End Developer",
    company: "Smooets Technology",
    description:
      "Digitized plantation management system for a leading palm oil company (PT SMART Tbk, Sinar Mas Group), transforming their Excel-based workflow into a streamlined Angular application.",
    tags: ["Angular", "TypeScript", "Enterprise"],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400 mb-8">
        Experience
      </h2>

      <div className="space-y-16">
        {EXPERIENCE.map((role, i) => (
          <div key={i} className="group">
            <p className="text-xs uppercase tracking-[0.1em] text-slate-400 mb-2">
              {role.period}
            </p>
            <h3 className="text-slate-50 font-medium">
              {role.title} ·{" "}
              {role.companyUrl ? (
                <a
                  href={role.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:underline"
                >
                  {role.company}
                </a>
              ) : (
                <span>{role.company}</span>
              )}
            </h3>
            <p className="text-slate-400 mt-2 leading-relaxed max-w-xl">
              {role.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-teal-300/10 text-teal-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 text-sm text-teal-300 hover:underline group"
      >
        View Full Résumé
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
    </motion.section>
  );
}
