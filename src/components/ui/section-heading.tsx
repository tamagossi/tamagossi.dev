import { WordReveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

/** Consistent section header: mono eyebrow + display title with word reveal. */
export default function SectionHeading({
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent mb-4">
        {"// "}
        {eyebrow}
      </p>
      <WordReveal
        as="h2"
        text={title}
        className="font-sans text-3xl md:text-4xl font-bold text-ink tracking-tight"
      />
    </div>
  );
}
