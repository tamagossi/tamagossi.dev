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
            <FadeIn delay={i * 0.08} key={post.title}>
              <article className="bg-surface border-line flex h-full flex-col rounded-2xl border p-6">
                <p className="text-faint mb-3 font-mono text-xs tracking-wider uppercase">
                  {formatDate(post.date)}
                </p>
                <h3 className="text-ink font-sans text-lg font-bold tracking-tight">
                  {post.title}
                </h3>
                <p className="text-body mt-3 flex-1 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li
                      className="bg-accent-dim border-accent/20 text-accent rounded-full border px-3 py-1 font-mono text-xs"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
