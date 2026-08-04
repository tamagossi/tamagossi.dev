import { WordReveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

/** Consistent section header: mono eyebrow + display title with word reveal. */
export const SectionHeading = ({ eyebrow, title }: SectionHeadingProps) => {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-accent mb-4 font-mono text-xs tracking-[0.28em] uppercase">
        {"// "}
        {eyebrow}
      </p>
      <WordReveal
        as="h2"
        className="text-ink font-sans text-3xl font-bold tracking-tight md:text-4xl"
        text={title}
      />
    </div>
  );
};
