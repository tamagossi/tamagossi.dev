import type { Metadata } from "next";
import Image from "next/image";

import { CaseStudyLayout } from "@/components/layout/case-study-layout";

export const metadata: Metadata = {
  description:
    "How I proposed and led a 91-component design system at Staffinc — from inconsistent sprint UI to defined component behavior.",
  title: "Ventura UI Design System — React, TypeScript, Design Tokens",
};

const COMPONENT_INVENTORY = [
  { category: "Inputs", count: 33 },
  { category: "Data displays", count: 19 },
  { category: "Navigation", count: 8 },
  { category: "Feedbacks", count: 6 },
  { category: "Overlays", count: 6 },
  { category: "Layouts", count: 5 },
  { category: "Misc", count: 4 },
  { category: "Buttons", count: 3 },
  { category: "Typography", count: 3 },
  { category: "Formatters", count: 1 },
  { category: "Form", count: 1 },
  { category: "Templates", count: 1 },
];

const VENTURA_SCREENSHOTS = [
  {
    alt: "Ventura UI button component variants",
    className: "col-span-2",
    src: "/ventura-ui/button.png",
  },
  {
    alt: "Ventura UI table component with defined behavior",
    src: "/ventura-ui/table.png",
  },
  {
    alt: "Ventura UI checkbox component",
    src: "/ventura-ui/checkbox.png",
  },
  {
    alt: "Ventura UI typography headings",
    src: "/ventura-ui/headings.png",
  },
  {
    alt: "Ventura UI avatar component",
    className: "col-span-2",
    src: "/ventura-ui/avatar.png",
  },
];

export default function VenturaUIPage() {
  return (
    <CaseStudyLayout>
      <h1 className="mb-2">Ventura UI Design System</h1>
      <p className="mb-8">
        Front-End Chapter Lead · 3 FE engineers, 2 product designers · 2024–2025
      </p>

      <h2 className="mt-10">Problem</h2>
      <p>
        Staffinc&apos;s client portal was growing sprint by sprint with no
        guardrails around its components. Every sprint introduced a new
        variation of an existing UI element, and the codebase scaled poorly —
        the same pattern implemented four different ways, each one harder to
        maintain than the last.
      </p>
      <p>
        The table is the clearest example. In sprint A, the table was simple.
        Next sprint, a filter appeared above it. Then the filter moved to the
        right. Then pagination was added. Then the pagination behavior changed.
        Nobody was wrong — every change looked reasonable in isolation. But with
        no defined component behavior, the table&apos;s shape was whatever the
        latest sprint decided it was.
      </p>
      <p>
        Product designers were caught in the same trap. They kept forgetting
        components that had already been built, so each design round produced
        new custom components, and new libraries got installed without anyone
        noticing the overlap. Meanwhile the portal leaned on Ant Design v3 —
        outdated, no longer actively maintained, bloating the build output and
        blocking dependency updates.
      </p>

      <h2 className="mt-10">Solution</h2>
      <p>
        I proposed the design system myself — my pitch was simple:{" "}
        <em>
          &quot;I think we need to init design system to avoid this all
          problems.&quot;
        </em>
      </p>
      <p>
        Ventura UI was born to eliminate the root causes: ungoverned component
        growth, designer blind spots, and growing reliance on an unmaintained UI
        library. The long-term goal was to gradually reduce Ant Design v3 usage,
        not to rip it out overnight.
      </p>

      <h2 className="mt-10">Approach &amp; Decisions</h2>
      <ul>
        <li>
          <strong>Stitches as the styling foundation.</strong> Stitches was
          already the de facto standard across the portal, so we standardized on
          it rather than re-platforming — zero learning curve, and it is
          framework and library agnostic. We paired it with Radix primitives for
          complex components where accessibility and behavior matter.
        </li>
        <li>
          <strong>Chakra-style API.</strong> We adopted Chakra UI&apos;s way of
          composing components — style props, predictable variants — so using
          Ventura felt familiar to every engineer on the team from day one.
        </li>
        <li>
          <strong>Headless UI for complexity.</strong> Radix handled the
          behavior-heavy pieces (overlays, navigation, inputs), while Ventura
          owned the look, the tokens, and the API surface.
        </li>
      </ul>

      <h2 className="mt-10">Implementation</h2>
      <p>
        The original plan was to ship Ventura UI as a standalone, versioned
        library. It failed — and the failure taught us more than the success
        would have. ESM-only packages wouldn&apos;t install into the legacy
        build at all, and the ones that did install crashed at runtime on `.cjs`
        resolution. Debugging the module-system conflicts was slow and painful.
      </p>
      <p>
        So we shipped the design system inside the portal itself, at{" "}
        <code>shared/components/ventura-ui</code>. Storybook lives in a separate
        repo as the documentation and discovery surface; the component code
        lives where it&apos;s used. Not the architecture we drew on the
        whiteboard — the one that actually shipped.
      </p>
      <p>
        The system ended up at 91 components across 12 categories, plus 10
        hooks, design tokens (colors, typography, spacing, radius, shadows,
        z-index), and 13 test files:
      </p>
      <table className="my-8 w-full text-sm">
        <thead>
          <tr className="text-muted border-line/70 border-b text-left font-mono text-xs uppercase">
            <th className="py-2 pr-4 font-normal">Category</th>
            <th className="py-2 text-right font-normal">Components</th>
          </tr>
        </thead>
        <tbody>
          {COMPONENT_INVENTORY.map(({ category, count }) => (
            <tr className="border-line/40 border-b" key={category}>
              <td className="py-2 pr-4">{category}</td>
              <td className="py-2 text-right">{count}</td>
            </tr>
          ))}
          <tr>
            <td className="py-2 pr-4 font-semibold">Total</td>
            <td className="py-2 text-right font-semibold">91</td>
          </tr>
        </tbody>
      </table>
      <div className="my-10 grid grid-cols-2 gap-4">
        {VENTURA_SCREENSHOTS.map(({ alt, className = "", src }) => (
          <Image
            alt={alt}
            className={`border-line/70 w-full rounded-lg border ${className}`}
            height={1389}
            key={src}
            src={src}
            width={2322}
          />
        ))}
      </div>

      <h2 className="mt-10">Result</h2>
      <ul>
        <li>
          <strong>Defined behavior, no wild growth.</strong> The table&apos;s
          behavior is now defined once, in one component. New sprints don&apos;t
          create new variance unless it&apos;s genuinely necessary — no
          unpredicted components, no surprise redesigns mid-sprint.
        </li>
        <li>
          <strong>Faster shipping.</strong> Because component design and
          behavior already live in Ventura, sprint tasks shrank to shipping
          logic. Developer experience improved and sprint estimation time was
          roughly cut in half.
        </li>
        <li>
          <strong>Designers stay in sync.</strong> Tokens, documented component
          behavior, and the Storybook gallery made it easier for product
          designers to find and reuse what already exists — reducing, though not
          fully eliminating, forgotten components.
        </li>
        <li>
          <strong>Legacy dependency on the way out.</strong> New code goes
          through Ventura UI, so reliance on the unmaintained Ant Design v3 is
          gradually shrinking with every sprint.
        </li>
      </ul>

      <h2 className="mt-10">Lessons</h2>
      <p>
        Adoption is a social problem, not a technical one. I spent as much time
        in squad standups and 1-on-1s as I did writing components — the shared
        vocabulary between designers and engineers was the real win.
      </p>
      <p>
        Reality beats the roadmap. We planned a standalone library and hit a
        wall of ESM and `.cjs` failures in the legacy build; shipping the system
        inside the monolith beat not shipping at all. If I were starting over, I
        would also ship a smaller v1 faster — 10 core components — and iterate
        from real usage instead of covering every edge case first.
      </p>
    </CaseStudyLayout>
  );
}
