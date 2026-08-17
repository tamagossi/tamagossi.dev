import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  a: (props) => (
    <a
      className="text-accent underline underline-offset-3 transition-colors"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-accent/40 text-body my-8 border-l-2 pl-6 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-surface text-accent rounded px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  em: (props) => <em className="italic" {...props} />,
  h2: (props) => (
    <h2
      className="text-ink mt-12 mb-4 font-sans text-2xl font-bold tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-ink mt-8 mb-3 font-sans text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  li: (props) => <li className="text-body mb-2 leading-relaxed" {...props} />,
  ol: (props) => <ol className="mb-6 list-decimal space-y-1 pl-5" {...props} />,
  p: (props) => (
    <p className="text-body mb-5 text-lg leading-relaxed" {...props} />
  ),
  strong: (props) => <strong className="text-ink font-semibold" {...props} />,
  ul: (props) => <ul className="mb-6 list-disc space-y-1 pl-5" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
