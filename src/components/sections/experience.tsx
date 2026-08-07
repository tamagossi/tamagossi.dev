"use client";

import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import { FadeIn, ScaleIn } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

interface Role {
  company: string;
  companyUrl?: string;
  description: string;
  period: string;
  tags: string[];
  title: string;
}

const EXPERIENCE: Role[] = [
  {
    company: "Staffinc",
    companyUrl: "https://staffinc.co",
    description:
      "Lead 2 frontend engineers as Chapter Lead. As squad lead, coordinate cross-functional teams of 1 FE, 2 BE, 2 QA, and 1–2 mobile engineers per sprint. Architected Ventura UI design system, drove Next.js migration, introduced code review and testing standards that cut bug rates from 100%+ to 70% and reduced build time by 60%.",
    period: "2024 — PRESENT",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Design Systems",
      "Team Leadership",
    ],
    title: "Chapter Lead",
  },
  {
    company: "Tribe Fintech",
    description:
      "Built AI-powered tools for SME financial management using the OpenAI and Travily APIs — opening a new business channel for the platform. Refactored legacy code to domain-driven design and established coding rules that made a messy codebase navigable and maintainable.",
    period: "2023 — 2025",
    tags: ["React", "Node.js", "OpenAI API", "REST APIs", "DDD", "TDD"],
    title: "Software Engineer (Part-time)",
  },
  {
    company: "Staffinc",
    companyUrl: "https://staffinc.co",
    description:
      "Created design system and monorepo architecture for recruitment and admin portals. Achieved 72% test coverage from scratch. Migrated Client Portal from atomic design to domain-driven design, reducing unoptimized code and enabling faster hot reload.",
    period: "2020 — 2024",
    tags: ["React", "TypeScript", "Monorepo", "DDD", "TDD", "Design Systems"],
    title: "Front-End Software Engineer",
  },
  {
    company: "Edulab Indonesia",
    description:
      "Optimized website performance by reducing network calls from 3-5 per page to 1-2. Created consistent design system and refactored codebase for better maintainability at Indonesia's leading education consulting company with 30+ branches.",
    period: "2025 — 2026",
    tags: ["React", "Performance", "Design Systems"],
    title: "Front-End Engineer (Part-time)",
  },
  {
    company: "Smooets Technology",
    description:
      "Mentored 3 fresh graduate developers to productivity in 3 months while leading 3 teams across 4 front-end and back-end projects using Angular, React, and Node.js — spanning UI and API work end-to-end. One mentee now works as a direct report.",
    period: "2019 — 2020",
    tags: ["Angular", "React", "Node.js", "Mentoring", "Team Leadership"],
    title: "Technical Leader",
  },
  {
    company: "Smooets Technology",
    description:
      "Digitized plantation management system for a leading palm oil company (PT SMART Tbk, Sinar Mas Group), transforming their Excel-based workflow into a streamlined Angular application.",
    period: "2018 — 2019",
    tags: ["Angular", "TypeScript", "Enterprise"],
    title: "Front-End Developer",
  },
];

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start 75%", "end 60%"],
    target: ref,
  });

  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      id="experience"
    >
      {/* Full-bleed band */}
      <div aria-hidden className="bg-surface/40 absolute inset-0" />
      <div aria-hidden className="bg-diagonal absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="career" title="Where I've worked" />

        <ScaleIn>
          <div className="relative" ref={ref}>
            {/* Rail */}
            <div
              aria-hidden
              className="bg-line absolute top-1 bottom-1 left-3 w-px"
            />
            <motion.div
              aria-hidden
              className="bg-accent absolute top-1 bottom-1 left-3 w-px origin-top"
              style={{ scaleY: scrollYProgress }}
            />

            <div className="space-y-16 pl-10 md:space-y-20">
              {EXPERIENCE.map((role, i) => (
                <FadeIn delay={0.05} key={i}>
                  <div className="relative">
                    {/* Dot */}
                    <span
                      aria-hidden
                      className="bg-base border-accent absolute top-1.5 -left-7 h-3 w-3 -translate-x-1/2 rounded-full border-2"
                    />

                    <div className="md:grid md:grid-cols-[170px_1fr] md:gap-8">
                      <p className="text-muted mb-2 font-mono text-xs tracking-[0.18em] uppercase md:mb-0 md:pt-1">
                        {role.period}
                      </p>
                      <div>
                        <h3 className="text-ink font-sans text-lg font-bold">
                          {role.title}
                          <span className="text-muted font-normal"> · </span>
                          {role.companyUrl ? (
                            <a
                              className="text-accent underline-offset-4 hover:underline"
                              href={role.companyUrl}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {role.company}
                            </a>
                          ) : (
                            <span className="text-muted">{role.company}</span>
                          )}
                        </h3>
                        <p className="text-body mt-2 max-w-2xl leading-relaxed">
                          {role.description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {role.tags.map((tag) => (
                            <li
                              className="bg-accent-dim border-accent/20 text-accent rounded-full border px-3 py-1 font-mono text-xs"
                              key={tag}
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
        </ScaleIn>

        <FadeIn className="mt-14" delay={0.05}>
          <a
            className="group text-accent inline-flex items-center gap-2 font-mono text-sm"
            href="/resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="group-hover:text-accent-strong underline underline-offset-4">
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
};
