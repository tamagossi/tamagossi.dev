import { FadeIn } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const GROUPS = [
  {
    eyebrow: "frontend — deep",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue",
      "Design Systems",
      "DDD",
      "TDD",
    ],
  },
  {
    eyebrow: "backend & api — breadth",
    skills: ["Node.js", "REST APIs", "OpenAI API", "PostgreSQL", "Golang"],
  },
  {
    eyebrow: "tooling & practices",
    skills: [
      "Docker",
      "Monorepo (Turborepo/Nx)",
      "Playwright",
      "Git",
      "PR Review",
      "Mentoring",
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-28 md:py-36" id="skills">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="stack" title="What I work with" />

        <div className="grid gap-6 md:grid-cols-3">
          {GROUPS.map((group, i) => (
            <FadeIn delay={i * 0.08} key={group.eyebrow}>
              <div className="bg-surface border-line flex h-full flex-col rounded-2xl border p-6">
                <p className="text-accent mb-5 font-mono text-xs tracking-[0.22em] uppercase">
                  {group.eyebrow}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      className="bg-accent-dim border-accent/20 text-accent rounded-full border px-3 py-1 font-mono text-xs"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8" delay={0.1}>
          <p className="text-muted max-w-2xl font-mono text-xs leading-relaxed">
            {"// "}7+ years frontend-first: design systems, platform migrations,
            domain-driven architecture. Node.js, API integration, and PostgreSQL
            when the product needs the layer behind the UI.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
