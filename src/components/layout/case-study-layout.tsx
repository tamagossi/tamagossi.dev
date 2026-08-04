import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:ml-[40%] lg:w-[60%] w-full lg:pt-0 pt-20 px-6 pb-24 lg:px-16 lg:py-24">
      <Link
        href="/#case-studies"
        className="inline-flex items-center gap-2 text-sm text-teal-300 hover:underline mb-12 group"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back to case studies
      </Link>
      <article className="prose prose-invert max-w-2xl">{children}</article>
    </div>
  );
}
