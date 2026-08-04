"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/reveal";

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
    tags: ["React", "TypeScript", "Monorepo", "DDD", "TDD", "Design Systems"],
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <section id="experience" className="py-28 md:py-36 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="career" title="Where I've worked" />

        <div ref={ref} className="relative">
          {/* Rail */}
          <div
            className="absolute left-3 top-1 bottom-1 w-px bg-line"
            aria-hidden
          />
          <motion.div
            className="absolute left-3 top-1 bottom-1 w-px bg-accent origin-top"
            style={{ scaleY: scrollYProgress }}
            aria-hidden
          />

          <div className="space-y-16 md:space-y-20 pl-10">
            {EXPERIENCE.map((role, i) => (
              <FadeIn key={i} delay={0.05}>
                <div className="relative">
                  {/* Dot */}
                  <span
                    className="absolute -left-7 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-base border-2 border-accent"
                    aria-hidden
                  />

                  <div className="md:grid md:grid-cols-[170px_1fr] md:gap-8">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-2 md:mb-0 md:pt-1">
                      {role.period}
                    </p>
                    <div>
                      <h3 className="font-sans text-lg font-bold text-ink">
                        {role.title}
                        <span className="text-muted font-normal"> · </span>
                        {role.companyUrl ? (
                          <a
                            href={role.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline underline-offset-4"
                          >
                            {role.company}
                          </a>
                        ) : (
                          <span className="text-muted">{role.company}</span>
                        )}
                      </h3>
                      <p className="mt-2 text-body leading-relaxed max-w-2xl">
                        {role.description}
                      </p>
                      <ul className="flex flex-wrap gap-2 mt-4">
                        {role.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-accent-dim border border-accent/20 px-3 py-1 font-mono text-xs text-accent"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.05} className="mt-14">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm text-accent"
          >
            <span className="underline underline-offset-4 group-hover:text-accent-strong">
              View full résumé
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
