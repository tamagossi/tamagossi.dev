import CaseStudyLayout from "@/components/layout/case-study-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FE Team Restructuring — Raka Pratama",
  description:
    "How I introduced code review norms, testing culture, and mentoring that measurably improved delivery at Staffinc.",
};

export default function TeamRestructuringPage() {
  return (
    <CaseStudyLayout>
      <h1 className="mb-2">
        Frontend Team Restructuring & Standardization
      </h1>
      <p className="mb-8">
        Chapter Lead · 12 engineers · Staffinc · 2024–Present
      </p>

      <h2 className="mt-10">
        Problem
      </h2>
      <p>
        When I stepped into the Chapter Lead role, the 12-person frontend team
        had grown fast but without shared standards. Each squad had its own way
        of doing code reviews, testing (or not testing), and structuring
        components. Knowledge was siloed — what one squad learned stayed in that
        squad. Bug rates were high (100%+ regression rate — meaning every
        release introduced at least one regression). Developers blamed each
        other when things broke. Morale was declining.
      </p>

      <h2 className="mt-10">
        Approach & Decisions
      </h2>
      <p>
        I focused on three pillars: standards, culture, and growth.
      </p>
      <ul>
        <li>
          <strong>Code review norms.</strong> Introduced a PR review checklist:
          type safety, component boundaries, test coverage, accessibility,
          performance. Set a 24-hour SLA for reviews. Required at least one
          approval from outside the author&apos;s squad — forcing cross-squad
          knowledge sharing.
        </li>
        <li>
          <strong>Testing culture.</strong> Started with a simple rule: every
          bug fix must include a regression test. This built test coverage
          organically from real failures rather than chasing arbitrary coverage
          numbers. Within 6 months, we reached 72% coverage — all from tests
          that had actually prevented regressions.
        </li>
        <li>
          <strong>Mentoring rotation.</strong> Paired senior engineers with
          junior engineers on a 2-week rotation. The senior wrote less code and
          reviewed more; the junior got hands-on guidance. After 3 months, 3
          junior engineers were shipping independently.
        </li>
        <li>
          <strong>Rejected: top-down standards mandate.</strong> Dictating
          &ldquo;everyone must write tests&rdquo; without showing why would have
          bred resentment. Instead, I let the regression test rule prove itself
          — after the third bug that a test caught before production, the team
          became self-motivated.
        </li>
      </ul>

      <h2 className="mt-10">
        Implementation
      </h2>
      <ul>
        <li>Week 1–2: Introduced PR checklist + review SLA in team retrospective</li>
        <li>Week 3–4: Started regression test rule, paired on first 5 tests</li>
        <li>Month 2: Launched mentoring rotation, set up documentation dashboard in Notion</li>
        <li>Month 3: Created custom Copilot commands for automated PR descriptions</li>
        <li>Month 4–6: Iterated on standards based on team feedback</li>
      </ul>

      <h2 className="mt-10">
        Result
      </h2>
      <ul>
        <li>Bug regression rate dropped from 100%+ to 70% (and still improving)</li>
        <li>PR review turnaround: from &ldquo;whenever&rdquo; to under 24 hours</li>
        <li>3 junior engineers reached independent productivity in 3 months</li>
        <li>Cross-squad knowledge sharing became the norm, not the exception</li>
        <li>Developer blame culture replaced with ownership and psychological safety</li>
      </ul>

      <h2 className="mt-10">
        Lessons
      </h2>
      <p>
        Culture change is slow and must be earned, not mandated. The regression
        test rule worked because the team saw it prevent real bugs — not because
        I said testing was important. The mentoring rotation worked because
        seniors reported enjoying the teaching, not just because juniors
        benefited.
      </p>
      <p>
        If starting again, I would introduce the documentation dashboard
        earlier — it became the single source of truth that made standards
        discoverable. Waiting until month 3 meant 3 months of tribal knowledge
        that could have been written down.
      </p>
    </CaseStudyLayout>
  );
}
