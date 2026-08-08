import type { Metadata } from "next";

import { CaseStudyLayout } from "@/components/layout/case-study-layout";

export const metadata: Metadata = {
  description:
    "How I untangled Kerjaan CP's antd v3 → moment → @zeit/next-less chain to take Staffinc's portal from Next.js 10 to 12 and unlock SWC + Webpack 5.",
  title:
    "Next.js Migration — Killing the Dependency Chain That Blocked SWC & Webpack 5",
};

export default function NextjsMigrationPage() {
  return (
    <CaseStudyLayout>
      <h1 className="mb-2">Next.js Migration & Build Optimization</h1>
      <p className="mb-8">Lead Engineer · Staffinc · 2025</p>

      <h2 className="mt-10">Problem</h2>
      <p>
        Kerjaan CP — Staffinc&apos;s client portal — was stuck on Next.js
        10.2.3, two major versions behind and falling further every release.
        Development was painful, honestly. Hot reload took 5–7 seconds, CI
        builds ran 20–30 minutes, and the dev server ate 6GB of memory. Worst of
        all, the stack pretty much locked us out of modern npm packages — even
        installing Mantine failed on a Node 18+ dependency conflict.
      </p>
      <p>
        The thing is, the framework wasn&apos;t really the problem. It was a
        dependency chain underneath it:
      </p>
      <ul>
        <li>
          <strong>antd v3</strong> — a 48MB monolithic UI library that
          didn&apos;t tree-shake. We shipped its entire bulk no matter how few
          components we actually used.
        </li>
        <li>
          <strong>moment & lodash</strong> — pulled in as antd v3&apos;s own
          dependencies. Millions of bytes we never asked for.
        </li>
        <li>
          <strong>@zeit/next-less</strong> — needed to theme antd v3, but
          deprecated and incompatible with newer Next.js. It also disabled
          Next&apos;s built-in CSS handling.
        </li>
      </ul>
      <p>
        And that last link was the trap. Because antd v3 needed Less theming, we
        couldn&apos;t drop @zeit/next-less, couldn&apos;t bump Next.js, and
        never got to the SWC compiler (up to 20× faster than Babel) or Webpack
        5.
      </p>

      <h2 className="mt-10">Approach & Decisions</h2>
      <p>
        I went with an incremental 3-step plan rather than a big-bang rewrite:
      </p>
      <ol>
        <li>
          <strong>Remove Less.</strong> Stripped custom theming from antd v3
          components. That made @zeit/next-less and @zeit/next-css disposable.
        </li>
        <li>
          <strong>Upgrade Next.js to 12 + React 17.</strong> Webpack 5 came
          along automatically, Babel was removed, and SWC turned on by default —
          no separate compiler migration to manage.
        </li>
        <li>
          <strong>Migrate to Ventura UI.</strong> Replaced antd with our own
          design system, bit by bit. Once antd was gone, moment and lodash went
          with it, and we consolidated on dayjs as the single date library.
        </li>
      </ol>
      <p>
        I rejected jumping straight to a modern Next.js. The antd/Less chain had
        to die before a version bump made sense. Each step shipped on its own
        and could be reverted on its own — a big-bang rewrite would have put
        everything on one unrevertible PR.
      </p>

      <h2 className="mt-10">Implementation</h2>
      <p>The migration followed the plan, in order:</p>
      <ol>
        <li>
          Removed the custom Less styling from antd v3 components and deleted
          @zeit/next-less & @zeit/next-css.
        </li>
        <li>
          Upgraded to Next.js 12 and React 17 — Webpack 5 activated, Babel gone,
          SWC on by default.
        </li>
        <li>
          Migrated components to Ventura UI, then removed antd, moment, and
          lodash — consolidating dates on dayjs.
        </li>
      </ol>

      <h2 className="mt-10">Result</h2>
      <ul>
        <li>Hot reload dropped from 5–7 seconds to 1–2 seconds</li>
        <li>Build time dropped from 20–30 minutes to 5–10 minutes</li>
        <li>
          The path forward (Next.js 12 → 13+ with App Router) is finally open —
          nothing in the old chain blocks it
        </li>
        <li>
          Modern npm libraries became usable once the Node 18+ dependency
          conflict disappeared
        </li>
      </ul>

      <h2 className="mt-10">Lessons</h2>
      <p>
        The biggest lesson was about dependency hygiene. Dependencies don&apos;t
        stay free — they accrete. antd v3 had been sitting in the codebase long
        after we&apos;d stopped using it for anything new; every new feature was
        already going to Ventura UI. We were paying for a 48MB library, plus
        moment and lodash, for features nobody was even writing anymore. The
        real win here wasn&apos;t the Next.js upgrade itself — it was finally
        maintaining the package graph: removing old dependencies when necessary,
        deleting unused components, and consolidating on a single date library.
      </p>
      <p>
        Staged upgrades beat big-bang rewrites, too: every step shipped and
        could be reverted on its own, so the migration never risked the whole
        platform at once.
      </p>
    </CaseStudyLayout>
  );
}
