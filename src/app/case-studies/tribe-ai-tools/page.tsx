import type { Metadata } from "next";

import { CaseStudyLayout } from "@/components/layout/case-study-layout";

export const metadata: Metadata = {
  description:
    "Designed AI-powered tools for SMEs on the OpenAI and Travily APIs, and refactored a legacy fintech codebase to domain-driven design.",
  title: "AI Tools for SME Finance — OpenAI API, Node.js & DDD",
};

export default function TribeAIToolsPage() {
  return (
    <CaseStudyLayout>
      <h1 className="mb-2">AI Tools for SME Finance</h1>
      <p className="mb-8">Solo Engineer · Tribe Fintech · 2023–2025</p>

      <h2 className="mt-10">Problem</h2>
      <p>
        Tribe Fintech builds financial management tools for small and
        medium-sized businesses. The platform faced two problems at once: the
        codebase had grown organically into legacy code that was difficult to
        navigate and debug, and the product needed a new way to attract users.
        SME owners rarely have finance teams — AI assistance was the emerging
        differentiator, but building ML infrastructure in-house was out of reach
        for a small fintech team.
      </p>

      <h2 className="mt-10">Approach & Decisions</h2>
      <ul>
        <li>
          <strong>API-first AI, not in-house ML.</strong> Instead of building
          models, I integrated the OpenAI and Travily APIs into the product.
          Well-designed API integration delivers AI features today; an ML team
          delivers them next year.
        </li>
        <li>
          <strong>Product lens, not feature lens.</strong> The tools were shaped
          around SME owners&apos; real workflows — reducing the effort of
          managing their finances — not around what the APIs could technically
          demo.
        </li>
        <li>
          <strong>Domain-driven refactor alongside features.</strong> The legacy
          code was hard to navigate and debug, so new AI features would have
          been built on sand. I refactored toward domain-driven design and
          established coding rules — replacing messy legacy code instead of
          layering on top of it.
        </li>
      </ul>

      <h2 className="mt-10">Implementation</h2>
      <p>
        On the integration side, the AI capabilities were wrapped in a clean
        service layer — API credentials managed in one place, external calls
        handled with timeouts and error paths, and responses mapped into the
        domain models the UI already understood. That kept AI code isolated from
        the rest of the application instead of leaking through every screen.
      </p>
      <p>
        On the codebase side, the DDD refactor introduced clear boundaries
        between domain logic, application services, and infrastructure. Coding
        rules — naming, structure, review expectations — were written down so
        the conventions outlived any single contributor. Legacy modules were
        migrated incrementally, so the product kept shipping while the
        foundation was rebuilt underneath it.
      </p>

      <h2 className="mt-10">Result</h2>
      <ul>
        <li>
          New business channel — the AI tools attracted more users to the
          platform
        </li>
        <li>
          A codebase that was navigable and maintainable, replacing legacy code
          that was difficult to debug
        </li>
        <li>
          AI capabilities delivered without an ML team — via disciplined API
          integration
        </li>
      </ul>

      <h2 className="mt-10">Lessons</h2>
      <p>
        You don&apos;t need an ML team to ship AI features. The hard part
        isn&apos;t calling the API — it&apos;s the product thinking around it,
        and the discipline to keep the surrounding codebase healthy.
      </p>
      <p>
        As a part-time engineer, written coding rules were the force multiplier.
        They made the codebase maintainable even when I wasn&apos;t around — the
        highest-leverage thing a remote, part-time contributor can ship.
      </p>
    </CaseStudyLayout>
  );
}
