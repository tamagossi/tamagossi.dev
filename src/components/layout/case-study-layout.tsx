import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/header";
import ArticleProgress from "@/components/layout/article-progress";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16 min-h-screen">
      <Header />
      <ArticleProgress />

      <main className="mx-auto max-w-3xl px-6 sm:px-10 py-16 md:py-24">
        <Link
          href="/#case-studies"
          className="group inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back to case studies
        </Link>

        <article className="article">{children}</article>

        <div className="mt-20 border-t border-line/70 pt-8 flex items-center justify-between">
          <Link
            href="/#case-studies"
            className="group inline-flex items-center gap-2 font-mono text-sm text-accent"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            More case studies
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
          >
            Get in touch
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
