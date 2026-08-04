"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const STUDIES = [
  {
    title: "Ventura UI Design System",
    summary:
      "How I architected a 12-engineer component library across 3 product squads.",
    href: "/case-studies/ventura-ui",
    imageAlt: "Ventura UI component examples",
  },
  {
    title: "Next.js 10 → 11 Migration",
    summary:
      "Refactored legacy code, cut build time by 60%, and unblocked framework upgrades.",
    href: "/case-studies/nextjs-migration",
    imageAlt: "Build optimization diagram",
  },
  {
    title: "FE Team Restructuring",
    summary:
      "Introduced code review norms, testing culture, and mentoring that measurably improved delivery.",
    href: "/case-studies/team-restructuring",
    imageAlt: "Team process diagram",
  },
];

export default function CaseStudies() {
  return (
    <motion.section
      id="case-studies"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-400 mb-8">
        Case Studies
      </h2>

      <div className="space-y-12">
        {STUDIES.map((study, i) => (
          <Link
            key={study.href}
            href={study.href}
            className="group block"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6 bg-navy-900 rounded-lg p-6 hover:bg-navy-800 transition-colors border border-navy-800 hover:border-navy-700">
              <div>
                <h3 className="text-slate-50 font-medium group-hover:text-teal-300 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  {study.summary}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm text-teal-300 group-hover:underline">
                  Read case study
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
              <div className="hidden md:flex items-center justify-center bg-navy-800 rounded border border-navy-700 text-slate-400 text-xs">
                {study.imageAlt}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
