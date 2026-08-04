import Sidebar from "@/components/layout/sidebar";
import MobileNav from "@/components/layout/mobile-nav";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import CaseStudies from "@/components/sections/case-studies";
import Demo from "@/components/sections/demo";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Sidebar />
      <MobileNav />

      {/* Mobile: add top padding for the fixed header */}
      <main className="lg:ml-[40%] lg:w-[60%] w-full lg:pt-0 pt-20 px-6 pb-24 lg:px-16 lg:py-24">
        <div className="space-y-32 lg:space-y-40 max-w-3xl">
          <About />
          <Experience />
          <CaseStudies />
          <Demo />
          <Contact />
        </div>

        {/* Footer */}
        <footer className="mt-32 text-xs text-slate-400">
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:underline"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:underline"
            >
              Tailwind CSS
            </a>
            , and{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:underline"
            >
              Vercel
            </a>
            . Design inspired by{" "}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:underline"
            >
              Brittany Chiang
            </a>
            .
          </p>
        </footer>
      </main>
    </>
  );
}
