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
    <section id="case-studies" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="selected work" title="Case studies" />

        <div className="space-y-6">
          {STUDIES.map((study, i) => (
            <FadeIn key={study.href} delay={i * 0.05}>
              <Link
                href={study.href}
                className="group block rounded-2xl bg-surface border border-line overflow-hidden transition-colors duration-300 hover:border-accent/50"
              >
                <div className="grid md:grid-cols-[1fr_340px]">
                  <div className="p-6 md:p-9">
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
                  <div className="hidden md:block bg-base border-l border-line overflow-hidden">
                    <div className="h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                      <study.Visual />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
