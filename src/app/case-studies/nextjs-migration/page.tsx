import type { Metadata } from "next";

import { CaseStudyLayout } from "@/components/layout/case-study-layout";

export const metadata: Metadata = {
  description:
    "Refactored legacy code and cut build time by 60% to unblock framework upgrades at Staffinc.",
  title: "Next.js 10 → 11 Migration — Raka Pratama",
};

export default function NextjsMigrationPage() {
  return (
    <CaseStudyLayout>
      <h1 className="mb-2">Next.js 10 → 11 Migration & Build Optimization</h1>
      <p className="mb-8">Lead Engineer · Staffinc · 2024</p>

      <h2 className="mt-10">Problem</h2>
      <p>
        Staffinc&apos;s main web portal was stuck on Next.js 10 — two major
        versions behind. CI builds took 15+ minutes, slowing down every
        developer on every pull request. The team wanted to adopt Next.js 13+
        features (App Router, server components, improved image optimization)
        but the gap was too wide to jump directly. Legacy code patterns — deeply
        nested class components, untyped props, and side-effect-heavy lifecycle
        methods — made any version bump risky.
      </p>

      <h2 className="mt-10">Approach & Decisions</h2>
      <p>
        I chose an incremental migration strategy rather than a big-bang
        rewrite:
      </p>
      <ul>
        <li>
          <strong>Step 1: Stabilize.</strong> Added TypeScript strict mode
          incrementally, converted the worst class components to functional
          components with hooks, and removed unused dependencies bloating the
          bundle.
        </li>
        <li>
          <strong>Step 2: Migrate to Next.js 11.</strong> Switched from Webpack
          4 to Webpack 5 (the main breaking change), updated Babel config, and
          fixed deprecated APIs.
        </li>
        <li>
          <strong>Step 3: Measure and optimize.</strong> Profiled the build with
          Webpack Bundle Analyzer, identified the 3 largest chunks, and
          code-split them. Replaced moment.js with date-fns (saved ~60KB).
        </li>
        <li>
          <strong>Rejected: jumping straight to Next.js 13+.</strong> The
          breaking changes between 10→13 were too many to do in one PR. The
          incremental approach let us ship each version bump with confidence and
          revert independently if something broke.
        </li>
      </ul>

      <h2 className="mt-10">Implementation</h2>
      <p>The migration took 3 weeks end-to-end, shipped in 4 PRs:</p>
      <ol>
        <li>TypeScript strict mode + class→functional refactors (week 1)</li>
        <li>Next.js 10→11 upgrade + Webpack 5 migration (week 2)</li>
        <li>Build profiling, code splitting, dependency trimming (week 2–3)</li>
        <li>CI pipeline optimization + caching (week 3)</li>
      </ol>
      <p>
        Each PR was reviewed by the full team. I paired with junior engineers on
        the functional component refactors — turning the migration into a
        mentoring opportunity.
      </p>

      <h2 className="mt-10">Result</h2>
      <ul>
        <li>Build time reduced by 60% — from 15+ minutes to 6 minutes</li>
        <li>
          Faster CI feedback loop — developers got results in under 10 min
          instead of 20+
        </li>
        <li>
          Unblocked future framework upgrades (Next.js 11 → 12 → 13+ path is now
          clear)
        </li>
        <li>
          3 junior engineers leveled up through paired refactoring sessions
        </li>
      </ul>

      <h2 className="mt-10">Lessons</h2>
      <p>
        Incremental migration over big-bang rewrite was the right call. We
        shipped value at each step — TypeScript strict mode alone caught 12 bugs
        before the version bump even started. If I were to do it again, I&apos;d
        invest more in automated regression testing before the migration. We
        relied too heavily on manual QA, which slowed down the final
        verification.
      </p>
    </CaseStudyLayout>
  );
}
