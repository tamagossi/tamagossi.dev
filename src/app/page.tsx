import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import CaseStudies from "@/components/sections/case-studies";
import Demo from "@/components/sections/demo";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Demo />
        <Contact />
      </main>

      <footer className="border-t border-line/70 py-10">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-faint">
            Designed &amp; built by Raka Pratama
          </p>
          <p className="font-mono text-xs text-faint">
            Next.js · Tailwind CSS · Framer Motion · Vercel
          </p>
        </div>
      </footer>
    </>
  );
}
