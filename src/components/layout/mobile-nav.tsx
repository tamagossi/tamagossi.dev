"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-navy-950/90 backdrop-blur-sm border-b border-navy-800">
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#about"
            className="text-lg font-bold text-teal-300"
            onClick={closeMenu}
          >
            Auliya Raka Pratama
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-slate-400 hover:text-teal-300 transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full-screen overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-30 bg-navy-950 flex flex-col items-center justify-center gap-8">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="text-lg uppercase tracking-[0.1em] font-semibold text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-6 mt-8">
            <li>
              <a
                href="https://github.com/tamagossi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-teal-300 transition-colors"
              >
                <GitHubIcon size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/tamagossi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-teal-300 transition-colors"
              >
                <LinkedInIcon size={22} />
              </a>
            </li>
            <li>
              <a
                href="mailto:mgf.prauliyatama@gmail.com"
                aria-label="Email"
                className="text-slate-400 hover:text-teal-300 transition-colors"
              >
                <MailIcon size={22} />
              </a>
            </li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Résumé"
                className="text-slate-400 hover:text-teal-300 transition-colors"
              >
                <FileTextIcon size={22} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
