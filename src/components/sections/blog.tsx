import Link from "next/link";

import { FadeIn } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { posts } from "@/lib/posts";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export const Blog = () => {
  return (
    <section className="py-28 md:py-36" id="blog">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading eyebrow="writing" title="Latest writing" />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn delay={i * 0.08} key={post.slug}>
              <Link
                className="bg-surface border-line hover:border-accent/50 group flex h-full flex-col rounded-2xl border p-6 transition-colors"
                href={`/blog/${post.slug}`}
              >
                <p className="text-faint mb-3 font-mono text-xs tracking-wider uppercase">
                  {formatDate(post.date)}
                </p>
                <h3 className="group-hover:text-accent text-ink font-sans text-lg font-bold tracking-tight transition-colors">
                  {post.title}
                </h3>
                <p className="text-body mt-3 flex-1 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-accent mt-5 inline-flex items-center font-mono text-sm">
                  Read post →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
