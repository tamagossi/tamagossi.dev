import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ArticleProgress } from "@/components/layout/article-progress";
import { Header } from "@/components/layout/header";

export const CaseStudyLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      <ArticleProgress />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 md:py-24">
        <Link
          className="group text-muted hover:text-accent mb-12 inline-flex items-center gap-2 font-mono text-sm transition-colors"
          href="/#case-studies"
        >
          <ArrowLeft
            className="transition-transform duration-200 group-hover:-translate-x-1"
            size={15}
          />
          Back to case studies
        </Link>

        <article className="article">{children}</article>

        <div className="border-line/70 mt-20 flex items-center justify-between border-t pt-8">
          <Link
            className="group text-accent inline-flex items-center gap-2 font-mono text-sm"
            href="/#case-studies"
          >
            <ArrowLeft
              className="transition-transform duration-200 group-hover:-translate-x-1"
              size={15}
            />
            More case studies
          </Link>
          <Link
            className="group text-muted hover:text-accent inline-flex items-center gap-2 font-mono text-sm transition-colors"
            href="/#contact"
          >
            Get in touch
            <ArrowUpRight
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={15}
            />
          </Link>
        </div>
      </main>
    </div>
  );
};
