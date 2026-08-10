"use client";

import Link from "next/link";

import {
  MigrationVisual,
  TeamVisual,
  TribeVisual,
  VenturaVisual,
} from "@/components/ui/case-visuals";
import { FadeIn } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const STUDIES = [
  {
    category: "design system",
    href: "/case-studies/ventura-ui",
    summary:
      "How I proposed and led a 91-component design system, shipped inside a legacy monolith — from Stitches tokens to defined component behavior.",
    title: "Ventura UI Design System",
    Visual: VenturaVisual,
  },
  {
    category: "platform migration",
    href: "/case-studies/nextjs-migration",
    summary:
      "Untangled an antd v3 dependency chain to take a client portal from Next.js 10 to 12 — cutting builds from 20+ minutes to under 10.",
    title: "Next.js Migration",
    Visual: MigrationVisual,
  },
  {
    category: "team & process",
    href: "/case-studies/team-restructuring",
    summary:
      "Code review norms, testing culture, and mentoring that measurably improved delivery and team health.",
    title: "FE Team Restructuring",
    Visual: TeamVisual,
  },
  {
    category: "api & ai",
    href: "/case-studies/tribe-ai-tools",
    summary:
      "Designed AI-powered tools on the OpenAI and Travily APIs — and refactored a legacy fintech codebase into domain-driven architecture.",
    title: "AI Tools for SME Finance",
    Visual: TribeVisual,
  },
];

export const CaseStudies = () => {
  return (
    <section className="overflow-hidden py-28 md:py-36" id="case-studies">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="selected work" title="Case studies" />
      </div>

      <div className="mt-10 flex flex-col gap-14 md:mt-16 md:gap-8">
        {STUDIES.map((study, i) => {
          const flip = i % 2 === 1;
          return (
            <FadeIn
              className={flip ? "md:mt-12 lg:mt-16" : "md:mt-4"}
              delay={i * 0.05}
              key={study.href}
            >
              <Link className="group relative block" href={study.href}>
                {/* Text column, kept inside the content container */}
                <div className="mx-auto max-w-6xl px-6 sm:px-10">
                  <div
                    className={`grid md:grid-cols-12 md:items-center ${
                      flip ? "md:justify-end" : ""
                    }`}
                  >
                    <div
                      className={`relative z-10 md:col-span-7 ${
                        flip ? "md:col-start-6" : ""
                      }`}
                    >
                      <div className="bg-surface border-line group-hover:border-accent/50 rounded-2xl border p-6 transition-colors duration-300 md:p-10">
                        <p className="text-accent mb-4 font-mono text-xs tracking-[0.22em] uppercase">
                          {study.category}
                        </p>
                        <h3 className="text-ink group-hover:text-accent font-sans text-2xl font-bold tracking-tight transition-colors duration-300 md:text-3xl">
                          {study.title}
                        </h3>
                        <p className="text-body mt-3 max-w-xl leading-relaxed">
                          {study.summary}
                        </p>
                        <span className="text-accent mt-6 inline-flex items-center gap-2 font-mono text-sm">
                          Read case study
                          <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual panel — bleeds to the viewport edge on the outer side */}
                <div
                  aria-hidden
                  className={`absolute top-1/2 hidden h-[78%] min-h-[230px] w-[52%] -translate-y-1/2 md:block ${
                    flip ? "left-0" : "right-0"
                  }`}
                >
                  <div
                    className={`border-line/60 relative h-full w-full overflow-hidden border-y ${
                      flip ? "rounded-r-2xl" : "rounded-l-2xl"
                    }`}
                  >
                    <div className="bg-base absolute inset-0" />
                    <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                      <study.Visual />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};
