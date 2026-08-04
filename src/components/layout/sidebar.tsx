"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  FileTextIcon,
} from "@/components/ui/icons";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[40%] flex-col justify-between py-24 px-12">
      <div>
        {/* Name */}
        <h1 className="text-4xl font-bold text-teal-300">
          Auliya Raka Pratama
        </h1>

        {/* Title */}
        <h2 className="text-xl text-slate-200 mt-3">
          Lead Frontend Engineer
        </h2>

        {/* Tagline */}
        <p className="text-slate-400 mt-4 max-w-xs leading-relaxed">
          I architect design systems, lead teams, and build data-heavy product
          UI.
        </p>

        {/* Navigation */}
        <nav className="mt-16" aria-label="In-page jump links">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group flex items-center gap-3 text-xs uppercase tracking-[0.1em] font-semibold transition-colors ${
                      isActive
                        ? "text-teal-300"
                        : "text-slate-400 hover:text-teal-300"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-12 bg-teal-300"
                          : "w-8 bg-slate-400 group-hover:w-12 group-hover:bg-teal-300"
                      }`}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social icons */}
      <ul className="flex items-center gap-6" aria-label="Social media">
        <li>
          <a
            href="https://github.com/tamagossi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            <GitHubIcon size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/tamagossi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            <LinkedInIcon size={20} />
          </a>
        </li>
        <li>
          <a
            href="mailto:mgf.prauliyatama@gmail.com"
            aria-label="Email"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            <MailIcon size={20} />
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download résumé (PDF)"
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            <FileTextIcon size={20} />
          </a>
        </li>
      </ul>
    </aside>
  );
}
