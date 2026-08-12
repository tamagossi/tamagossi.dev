import type { Metadata } from "next";
import Link from "next/link";

import { CaseStudyLayout } from "@/components/layout/case-study-layout";

export const metadata: Metadata = {
  description:
    "How a blunt conversation with my VP turned a lost Chapter Lead into a structured leader — Notion dashboard, commit standards, and AI-powered PR tooling at Staffinc.",
  title: "From Lost Chapter Lead to a Better One Every Day",
};

export default function TeamRestructuringPage() {
  return (
    <CaseStudyLayout>
      <h1 className="mb-2">From Lost Chapter Lead to a Better One Every Day</h1>
      <p className="mb-8">
        Chapter Lead · 2 FE engineers, cross-functional squad · Staffinc · Early
        2025 – Present
      </p>

      <h2 className="mt-10">The Problem</h2>
      <p>
        Honestly? When I stepped into the Chapter Lead role, I had no idea what
        I was doing. And the team felt it. We had no shared standards, no PR
        standard, no routine catch-up that actually followed through — meetings
        happened, but nobody took notes and nobody followed up. There was no
        tech debt tracker, no initiative tracker. We&apos;d say
        &ldquo;let&apos;s do this&rdquo; in a meeting, then go straight back to
        sprint work and forget. Trust between squads was bad. When things broke,
        people blamed each other. The team felt like anak ayam kehilangan induk
        — chicks losing their mother.
      </p>

      <h2 className="mt-10">The Turning Point</h2>
      <p>
        The thing is, I got noticed — but not in a good way. The VP of
        Engineering called me in for a small talk. He asked what was happening.
        Then he told me plainly: I wasn&apos;t performing. I was lost. I only
        focused on myself, not as a leader. A bit egoistic, only aware of my own
        KPI.
      </p>
      <p>
        It stung. But honestly, it was the most useful feedback I&apos;ve ever
        received. I could&apos;ve gotten defensive — instead I went and
        collected evidence, learned how to be a good leader, restructured my
        goals, and asked myself what I could actually do for the team.
      </p>

      <h2 className="mt-10">What I Did</h2>
      <p>
        I&apos;m a structured person by nature, so my first move was a Web FE
        dashboard in Notion — every one-on-one, every tech debt, every
        initiative, all recorded in one place. I was basically applying{" "}
        <em>Building a Second Brain</em> by Tiago Forte to team management.
      </p>
      <p>Getting the team to actually use it was the hard part.</p>
      <ul>
        <li>
          <strong>
            The writing habit is a pain in the ass at the beginning.
          </strong>{" "}
          For months, every conversation ended with the same sentence: &ldquo;do
          not forget to log it in the FE dashboard ya.&rdquo; Just gentle,
          persistent nagging — no mandate, no punishment. After several months,
          it stopped being me pushing. They just started logging.
        </li>
        <li>
          <strong>1:1s became bonding, not a formality.</strong> The dashboard
          made one-on-ones structured and recorded, but the real win was that
          they stopped being a checkbox and became a relationship.
        </li>
        <li>
          <strong>Commit messages became traceable.</strong> We adopted a
          convention —{" "}
          <code>
            &lt;type&gt;(&lt;sprint-code&gt;): &lt;task code&gt; |
            &lt;summary&gt;
          </code>{" "}
          — plus a PR template covering background, how to test, and references.
          The commit message really helps with production tracing; the PR
          description helps the reviewer.
        </li>
        <li>
          <strong>Then we automated it.</strong> Both conventions became a
          &ldquo;create PR&rdquo; skill that feeds an AI agent — it generates
          the commit message and PR description from the diff, and the team
          reviews before anything ships.
        </li>
      </ul>

      <h2 className="mt-10">Did the Tracking Actually Work?</h2>
      <p>
        Yes — and I can name the proof. Two big initiatives went from
        &ldquo;let&apos;s do this&rdquo; in a meeting to actually shipped
        because they were logged and tracked:{" "}
        <Link href="/case-studies/ventura-ui">Ventura UI</Link>, the
        91-component design system I proposed and led, and the{" "}
        <Link href="/case-studies/nextjs-migration">Next.js upgrade</Link> that
        unlocked SWC and Webpack 5. Before the dashboard, initiatives like these
        had a way of dying quietly.
      </p>
      <p>
        The commit format also paid off in a very concrete way: kerjaan CP ships
        releases from two squads, and sometimes one release includes changes
        from the other squad. With the sprint code and task code in every
        commit, we can easily track which commit landed in which release. That
        used to be a headache.
      </p>

      <h2 className="mt-10">Result</h2>
      <ul>
        <li>
          Initiatives now ship instead of dying in meetings — Ventura UI and the
          Next.js upgrade are the proof
        </li>
        <li>
          Release traceability across squads: every commit maps to a sprint and
          a task
        </li>
        <li>
          PR and commit standards are codified and enforced by an AI skill, not
          by memory
        </li>
        <li>1:1s rebuilt trust inside the FE team</li>
      </ul>

      <h2 className="mt-10">Lessons</h2>
      <p>
        I changed a lot after reading <em>Learning Systems Thinking</em> by
        Diana Montalion. I wish I&apos;d read it earlier — a lot of the struggle
        in the beginning was me not seeing the team as a system.
      </p>
      <p>
        And the honest part: culture change is slow. The writing habit took
        months of nagging. There&apos;s no week-by-week plan that fixes a team
        in a month — just repetition until it sticks.
      </p>
    </CaseStudyLayout>
  );
}
