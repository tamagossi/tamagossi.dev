import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Blog } from "@/components/sections/blog";
import { CaseStudies } from "@/components/sections/case-studies";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CaseStudies />
        <Blog />
        <Contact />
      </main>

      <footer className="border-line/70 border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 sm:flex-row sm:items-center sm:px-10">
          <p className="text-faint font-mono text-xs">
            Designed &amp; built by Raka Pratama
          </p>
          <p className="text-faint font-mono text-xs">
            Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </footer>
    </>
  );
}
