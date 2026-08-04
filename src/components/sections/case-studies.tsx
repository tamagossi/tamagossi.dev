"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/reveal";
import {
  VenturaVisual,
  MigrationVisual,
  TeamVisual,
} from "@/components/ui/case-visuals";

const STUDIES = [
  {
    title: "Ventura UI Design System",
    category: "design system",
    summary:
      "How I architected a 12-engineer component library across 3 product squads — from tokens to adoption.",
    href: "/case-studies/ventura-ui",
    Visual: VenturaVisual,
  },
  {
    title: "Next.js 10 → 11 Migration",
    category: "platform migration",
    summary:
      "Refactored legacy code, cut build time by 60%, and unblocked framework upgrades with an incremental strategy.",
    href: "/case-studies/nextjs-migration",
    Visual: MigrationVisual,
  },
  {
    title: "FE Team Restructuring",
    category: "team & process",
    summary:
      "Code review norms, testing culture, and mentoring that measurably improved delivery and team health.",
    href: "/case-studies/team-restructuring",
    Visual: TeamVisual,
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="selected work" title="Case studies" />
      </div>

      <div className="mt-10 md:mt-16 flex flex-col gap-14 md:gap-8">
        {STUDIES.map((study, i) => {
          const flip = i % 2 === 1;
          return (
            <FadeIn
              key={study.href}
              delay={i * 0.05}
              className={flip ? "md:mt-12 lg:mt-16" : "md:mt-4"}
            >
              <Link href={study.href} className="group block relative">
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
                      <div className="rounded-2xl bg-surface border border-line p-6 md:p-10 transition-colors duration-300 group-hover:border-accent/50">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-4">
                          {study.category}
                        </p>
                        <h3 className="font-sans text-2xl md:text-3xl font-bold text-ink tracking-tight transition-colors duration-300 group-hover:text-accent">
                          {study.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-body leading-relaxed">
                          {study.summary}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent">
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
                  className={`absolute top-1/2 -translate-y-1/2 hidden md:block h-[78%] min-h-[230px] w-[52%] ${
                    flip ? "left-0" : "right-0"
                  }`}
                  aria-hidden
                >
                  <div
                    className={`relative h-full w-full overflow-hidden border-y border-line/60 ${
                      flip ? "rounded-r-2xl" : "rounded-l-2xl"
                    }`}
                  >
                    <div className="absolute inset-0 bg-base" />
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
}
