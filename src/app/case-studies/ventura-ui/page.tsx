import type { Metadata } from "next";

import { CaseStudyLayout } from "@/components/layout/case-study-layout";

export const metadata: Metadata = {
  description:
    "How I architected a design system used across 3 product squads at Staffinc.",
  title: "Ventura UI Design System — React, TypeScript, Design Tokens",
};

export default function VenturaUIPage() {
  return (
    <CaseStudyLayout>
      <h1 className="mb-2">Ventura UI Design System</h1>
      <p className="mb-8">
        Lead Architect · 2 FE engineers, 3 squads · 2024–Present
      </p>

      <h2 className="mt-10">Problem</h2>
      <p>
        Staffinc&apos;s frontend ecosystem had grown organically across 3
        product squads with no shared component primitives. Each squad built
        their own buttons, inputs, modals, and data tables — leading to
        duplicated code, inconsistent UX, and slow onboarding for engineers
        moving between squads. Designers handed off specs that developers
        interpreted differently. A simple button could have 4 different
        implementations across the platform.
      </p>

      <h2 className="mt-10">Approach & Decisions</h2>
      <p>
        I proposed and led the Ventura UI design system — a shared component
        library used by all 3 frontend squads. Key architectural decisions:
      </p>
      <ul>
        <li>
          <strong>Compound component pattern</strong> for complex primitives
          like Select, Modal, and DataTable — giving consuming teams
          composability without sacrificing consistency.
        </li>
        <li>
          <strong>Token-driven theming</strong> using CSS custom properties —
          designers could update tokens in Figma, and those changes flowed to
          components via a shared token layer. No runtime theme switching needed
          at our scale.
        </li>
        <li>
          <strong>Rejected: full headless UI library adoption.</strong> Radix UI
          and Headless UI solved accessibility well, but adopting them wholesale
          would have meant rewriting every existing component. Instead, I
          incrementally adopted their patterns — using Radix primitives for new
          complex components while keeping existing simple components stable.
        </li>
        <li>
          <strong>Semantic versioning with migration guides</strong> per
          breaking change. Each major version bump included a 1-page migration
          doc with before/after examples.
        </li>
      </ul>

      <h2 className="mt-10">Implementation</h2>
      <p>
        The library shipped with 40+ components — Button, Input, Select, Modal,
        Tabs, Toast, DataTable, Form primitives, and layout utilities. Each
        component included:
      </p>
      <ul>
        <li>
          All variants and states (default, hover, focus, active, disabled,
          error, loading)
        </li>
        <li>Keyboard behavior documentation</li>
        <li>Storybook stories with usage examples</li>
        <li>TypeScript types exported for consumer type-safety</li>
      </ul>
      <p>
        I set up a monorepo with Turborepo so the design system package could be
        versioned independently and consumed by all portals. CI enforced that no
        breaking changes merged without a migration guide.
      </p>

      <h2 className="mt-10">Result</h2>
      <ul>
        <li>All 3 squads adopted within 6 months</li>
        <li>
          Duplicate component code eliminated — one Button, one source of truth
        </li>
        <li>
          New engineer onboarding time reduced — consistent patterns across
          squads
        </li>
        <li>Design-to-dev handoff friction dropped — shared token language</li>
      </ul>

      <h2 className="mt-10">Lessons</h2>
      <p>
        Adoption is a social problem, not a technical one. I spent as much time
        in squad standups and 1-on-1s as I did writing components. The biggest
        win wasn&apos;t the component library itself — it was the shared
        vocabulary it created between designers and engineers.
      </p>
      <p>
        If I were starting over, I would ship a smaller v1 faster (10 core
        components) and iterate from real usage, rather than trying to cover
        every edge case before the first squad adopted.
      </p>
    </CaseStudyLayout>
  );
}
