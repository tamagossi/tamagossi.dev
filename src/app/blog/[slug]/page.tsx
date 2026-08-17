import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/header";
import { getPostBySlug, posts } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    description: post.excerpt,
    title: post.title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen pt-16">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 md:py-24">
        <Link
          className="group text-muted hover:text-accent mb-12 inline-flex items-center gap-2 font-mono text-sm transition-colors"
          href="/#blog"
        >
          <ArrowLeft
            className="transition-transform duration-200 group-hover:-translate-x-1"
            size={15}
          />
          Back to blog
        </Link>

        <p className="text-faint mb-3 font-mono text-xs tracking-wider uppercase">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
        <h1 className="text-ink mb-12 font-sans text-3xl font-bold tracking-tight md:text-4xl">
          {post.title}
        </h1>

        <article>
          <post.Content />
        </article>
      </main>
    </div>
  );
}
